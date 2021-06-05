# 训练inception模型
inception模型是一个用于监测物体的模型，同时只能监测一个物体。这里使用TensorFlow版本的inception模型.

## 准备训练环境和数据集

### 安装TensorFlow
安装TensorFlow按照这里进行安装:[安装TensorFlow](https://www.tensorflow.org/install/pip?lang=python3)
```bash
$ mkdir inception
$ cd inception
```

### 准备数据集
这里以flowers图片集为例
```bash
$ mkdir data/
$ cd data/
$ mkdir flowers/
```
将图片放入其中，如下图所示
```bash
$ ls
daisy  dandelion  roses  sunflowers  tulips
```
每个图片的分类中图片至少要300以上

### 下载checkpoints文件
```bash
$ cd ..
$ mkdir checkpoints
$ cd checkpoints
$ wget http://download.tensorflow.org/models/inception_v3_2016_08_28.tar.gz
$ tar zxvf inception_v3_2016_08_28.tar.gz
$ rm inception_v3_2016_08_28.tar.gz
```
在checkpoints文件夹中有一个inception模型的ckpt文件
```bash
$ ls
inception_v3.ckpt
```
### clone训练用的slim工具
```bash
$ cd ../
$ git clone https://github.com/tensorflow/models.git
```

最后完整的目录如下
```bash
$ ls
checkpoints  data  models
```
## 转换数据集
数据集准备好以后需要转转换成TensorFlow的图片格式，提供给TensorFlow训练，加快训练速度。

### 1.准备labels文件
labels文件是模型用来验证和识别训练集的标识
```bash
$ cd data/
$ vim labels.txt
```
每个类一行，我的图片集有5个类
```
0:daisy
1:dandelion
2:roses
3:sunflowers
4:tulips
```

### 2.生成list文件
list文件将每个图片和labels对应起来.

#### generate_list.py
```bash
$ vim generate_list.py
```
将下面的python代码写入
```
import os
data_dir = 'flowers/'
class_names_to_ids = {'daisy': 0, 'dandelion': 1, 'roses': 2, 'sunflowers': 3, 'tulips': 4}
output_path = 'list.txt'
fd = open(output_path, 'w')
for class_name in class_names_to_ids.keys():
    images_list = os.listdir(data_dir + class_name)
    for image_name in images_list:
        fd.write('{}/{} {}\n'.format(class_name, image_name, class_names_to_ids[class_name]))
fd.close()
```
注意图中的class要与labels文件对应起来

#### 运行生成list文件
```bash
$ python3 generate_list.py
```

### 3.生成train和val文件
random_data.py将文件随便分成训练集和验证集

#### random_data.py
```bash
$ vim random_data.py
```
把下面的代码写入
```
import random

_NUM_VALIDATION = 350
_RANDOM_SEED = 0
list_path = 'list.txt'
train_list_path = 'list_train.txt'
val_list_path = 'list_val.txt'

fd = open(list_path)
lines = fd.readlines()
fd.close()
random.seed(_RANDOM_SEED)
random.shuffle(lines)

fd = open(train_list_path, 'w')
for line in lines[_NUM_VALIDATION:]:
    fd.write(line)
fd.close()
fd = open(val_list_path, 'w')
for line in lines[:_NUM_VALIDATION]:
    fd.write(line)
fd.close()
```
上图中的`_NUM_VALIDATION`为验证集的数据大小，可修改。

#### 生成训练集和验证集
运行这个脚本
```bash
$ python3 random_data.py
```
在当前目录下，会生成list_train.txt和list_val.txt

### 4.转换数据集
使用TensorFlow接口转换

#### 转换脚本generate_TFRecord.py
```bash
$ vim generate_TFRecord.py
```
将下面代码写入
```
import sys
sys.path.insert(0, '../models/research/slim/')
from datasets import dataset_utils
import math
import os
import tensorflow as tf
def convert_dataset(list_path, data_dir, output_dir, _NUM_SHARDS=5):
    fd = open(list_path)
    lines = [line.split() for line in fd]
    fd.close()
    num_per_shard = int(math.ceil(len(lines) / float(_NUM_SHARDS)))
    with tf.Graph().as_default():
        decode_jpeg_data = tf.placeholder(dtype=tf.string)
        decode_jpeg = tf.image.decode_jpeg(decode_jpeg_data, channels=3)
        with tf.Session('') as sess:
            for shard_id in range(_NUM_SHARDS):
                output_path = os.path.join(output_dir,
                    data_dir+'_'+output_dir+'_{:05}-of-{:05}.tfrecord'.format(shard_id, _NUM_SHARDS))
                tfrecord_writer = tf.python_io.TFRecordWriter(output_path)
                start_ndx = shard_id * num_per_shard
                end_ndx = min((shard_id + 1) * num_per_shard, len(lines))
                for i in range(start_ndx, end_ndx):
                    sys.stdout.write('\r>> Converting image {}/{} shard {}'.format(
                        i + 1, len(lines), shard_id))
                    sys.stdout.flush()
                    image_data = tf.gfile.FastGFile(os.path.join(data_dir, lines[i][0]), 'rb').read()
                    image = sess.run(decode_jpeg, feed_dict={decode_jpeg_data: image_data})
                    height, width = image.shape[0], image.shape[1]
                    example = dataset_utils.image_to_tfexample(
                        image_data, b'jpg', height, width, int(lines[i][1]))
                    tfrecord_writer.write(example.SerializeToString())
                tfrecord_writer.close()
    sys.stdout.write('\n')
    sys.stdout.flush()
os.system('mkdir -p train')
convert_dataset('list_train.txt', 'flowers', 'train')
os.system('mkdir -p val')
convert_dataset('list_val.txt', 'flowers', 'val')

```

#### 生成TensorFlow数据集
```bash
$ python3 generate_TFRecord.py
```
会生成train和val两个文件夹

所有转换工作完成以后，文件夹如下：
```
.
├── flowers
│   ├── daisy
│   ├── dandelion
│   ├── roses
│   ├── sunflowers
│   └── tulips
├── generate_list.py
├── generate_TFRecord.py
├── labels.txt
├── list_train.txt
├── list.txt
├── list_val.txt
├── random_data.py
├── train
└── val
```

## 训练
1. TensorFlow框架的训练可以分成两种，微调或者从头训练。
2. 使用的是TensorFlow官方的slim工具
```bash
$ cd models/research/slim
```

### 训练方式

#### 从头训练inception模型
```bash
$ DATASET_DIR=../../../data/train/
$ TRAIN_DIR=/tmp/train_log/inception_v3_train
python train_image_classifier.py \
    --train_dir=${TRAIN_DIR} \
    --dataset_name=flowers \
    --dataset_split_name=train \
    --dataset_dir=${DATASET_DIR} \
    --model_name=inception_v3
```
> 1. DATASET_DIR 是训练数据集的路径，也就是刚才在data目录下生成的train目录
> 2. TRAIN_DIR   是训练产生的数据保存的路径
> 3. train_image_classifier.py   slim工具训练的脚本
> 4. 参数   
> `--train_dir`          训练数据保存的路径
> `--dataset_name`       数据集的总名称
> `--dataset_split_name` 训练集的名称
> `--dataset_dir`        训练集路径
> `--model_name`         指定inception_v3模型，加载相应的神经网络
CHECKPOINT_PATH
#### 微调inception模型
```bash
$ DATASET_DIR=../../../data/train/
$ TRAIN_DIR=/tmp/train_log/inception_v3_retrain
$ CHECKPOINT_PATH=../../../checkpoints/inception_v3.ckpt
$ python train_image_classifier.py \
    --train_dir=${TRAIN_DIR} \
    --dataset_dir=${DATASET_DIR} \
    --dataset_name=flowers \
    --dataset_split_name=train \
    --model_name=inception_v3 \
    --checkpoint_path=${CHECKPOINT_PATH} \
    --checkpoint_exclude_scopes=InceptionV3/Logits,InceptionV3/AuxLogits \
    --trainable_scopes=InceptionV3/Logits,InceptionV3/AuxLogits
```

> 1. DATASET_DIR                  训练数据集的路径，也就是刚才在data目录下生成的train目录
> 2. TRAIN_DIR                    训练产生的数据保存的路径
> 3. CHECKPOINT_PATH              预训练的模型文件路径
> 4. train_image_classifier.py    slim工具训练的脚本
> 5. 参数    
> `--train_dir`          训练数据保存的路径
> `--dataset_name`       数据集的总名称
> `--dataset_split_name` 训练集的名称
> `--dataset_dir`        训练集路径
> `--model_name`         指定inception_v3模型，加载相应的神经网络
> `--checkpoint_path`    指定加载的预训练模型
> `--checkpoint_exclude_scopes` --trainable_scopes 锁定其它层，并只训练制定的层

### 查看训练过程
#### tensorboard
tensorboard是TensorFlow框架用来查看训练过程的工具
```bash
$ tensorboard --logdir=${TRAIN_DIR}
```
会看到类似的信息
```
TensorBoard 1.14.0 at http://yan-pc:6006/ (Press CTRL+C to quit)
```
通过浏览器打开就可以看到相应的界面了。

### 训练数据处理
训练的数据都保存在TRAIN_DIR指定的路径中
#### 导出graph
```bash
$ TRAIN_DIR=/tmp/train_log/inception_v3_retrain
$ DATASET_DIR=../../../data/train/
$ python export_inference_graph.py \
   --alsologtostderr \
   --model_name=inception_v3 \
   --train_dir=${TRAIN_DIR} \
   --dataset_dir=${DATASET_DIR} \
   --dataset_name=flowers \
   --output_file=/tmp/inception_v3_inf_graph.pb
```
> 1. TRAIN_DIR                    训练产生的数据保存的路径
> 2. DATASET_DIR                  训练数据集的路径，也就是刚才在data目录下生成的train目录
> 3. export_inference_graph.py    导出训练数据的脚本
> 4. 参数    
> `--train_dir`          训练数据保存的路径
> `--dataset_dir`        训练集路径
> `--model_name`         指定inception_v3模型，加载相应的神经网络
> `--dataset_name`       数据集的总名称
> `--output_file`        导出文件的位置

#### 冻结graph
```bash
$ python ~/path/to/tensorflow/tensorflow/python/tools/freeze_graph.py \
    --input_graph=/tmp/inception_v3_inf_graph.pb \
    --input_checkpoint={TRAIN_DIR}/model.ckpt-66505 \
    --input_binary=true --output_graph=/tmp/frozen_inception_v3.pb \
    --output_node_names=InceptionV3/Predictions/Reshape_1
```
> 1. freeze_graph工具是TensorFlow用来冻结graph的工具。工具的编译可以参考这里:[TensorFlow工具的编译和使用](https://github.com/tensorflow/models/tree/master/research/slim)
> 2. 参数    
> `--input_graph`        输入的graph的位置
> `--input_checkpoint`   最后生成的ckpt文件，具体查看TRAIN_DIR下的checkpoint文件
> `--output_graph`       输出冻结后的graph的位置
> `--output_node_names`  输出的节点


