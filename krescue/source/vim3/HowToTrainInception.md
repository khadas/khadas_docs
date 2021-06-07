title: How To Train Inception Model
---

Inception Model is a model used to detect objects, and only one object can be monitored at the same time. Here we use tensorflow version of Inception Model

## Prepare Training Environment and Dataset

```bash
$ mkdir inception
$ cd inception
```

### Install TensorFlow
You can follow this offical page to Install :[Install TensorFlow](https://www.tensorflow.org/install/pip?lang=python3)

### Perpare Pictures dataset
This is a example with `flowers datasets`:
```bash
$ mkdir data/
$ cd data/
$ mkdir flowers/
```
Create 5 classes, and put the pictures in the corresponding directory.

```bash
$ ls
daisy  dandelion  roses  sunflowers  tulips
```
At least 300 pictures in each picture classification.

### Download checkpoints file
```bash
$ cd ..
$ mkdir checkpoints
$ cd checkpoints
$ wget http://download.tensorflow.org/models/inception_v3_2016_08_28.tar.gz
$ tar zxvf inception_v3_2016_08_28.tar.gz
$ rm inception_v3_2016_08_28.tar.gz
```
There is a `.ckpt` file of the Inception Model in the checkpoints folder

```bash
$ ls
inception_v3.ckpt
```
### clone `slim tools` with tensorflow
```bash
$ cd ../
$ git clone https://github.com/tensorflow/models.git
```
The complete directory is as follows.

```bash
$ ls
checkpoints  data  models
```
## Transform Dataset
After the data set is ready, it needs to be converted to tensorflow image format, which can be provided for tensorflow training to speed up the training.

### 1. Perpare labels file
The labels file is used by the model to verify and identify the training set.

```bash
$ cd data/
$ vim labels.txt
```
Each class has a row, and my picture set has 5 classes.
```
0:daisy
1:dandelion
2:roses
3:sunflowers
4:tulips
```

### 2.Generate list file
The list file maps each picture to labels.

#### Generate list.py
```bash
$ vim generate_list.py
```
Write the following Python code.
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
**Note** that the class in the figure corresponds to the labels file.

#### Run and generate list file
```bash
$ python3 generate_list.py
```

### 3.Generate train file and val file
random_data.py use to Randomly divided into two parts.

#### random_data.py
```bash
$ vim random_data.py
```
Write the following code.
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
The `_NUM_VALIDATION` in the above figure is the data size of the validation set, which can be modified.

#### Generate `Train Dataset ` and ` Val Dataset `
Run this script.
```bash
$ python3 random_data.py
```
In the current directory, `list_train.txt` and `list_val.txt` will be generated.

### 4.Transform Dataset
Transform with tensorflow interface.

#### Generate `generate_TFRecord.py`
```bash
$ vim generate_TFRecord.py
```
Write the following code.

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

#### Generate TensorFlow Dataset
```bash
$ python3 generate_TFRecord.py
```

Two folders, train and Val, will be generated.

After all the conversion work is completed, the folder is as follows:
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

## Train
1. The training of tensorflow framework can be divided into two types, fine-tuning or ab initio training.
2. Using tensorflow's official slim tool.
```bash
$ cd models/research/slim
```

### Training Command

#### Training inception model from scratch
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
> 1. DATASET_DIR is the path of the training data set, that is, the train directory just generated in the data directory.
> 2. TRAIN_DIR   is the path to save the data generated by training.
> 3. train_image_classifier.py   Script of slim tool training.
> 4. parameter
> `--train_dir`          Path to save training data
> `--dataset_name`       Total name of the dataset
> `--dataset_split_name` Name of the training set
> `--dataset_dir`        Training set path
> `--model_name`         Specify ` inception model ` and load the corresponding neural network


#### Fine tuning the inception model
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

> 1. DATASET_DIR                  is the path of the training data set, that is, the train directory just generated in the data directory.
> 2. TRAIN_DIR                    is the path to save the data generated by training.
> 3. CHECKPOINT_PATH              Model file path of pre training.
> 4. train_image_classifier.py    Script of train with slim tool.
> 5. parameter 
> `--train_dir`          Path to save training data
> `--dataset_name`       Total name of the dataset
> `--dataset_split_name` Name of the training set
> `--dataset_dir`        Training set path
> `--model_name`         Specify ` inception model ` and load the corresponding neural network
> `--checkpoint_path`    Specify the loaded pretraining model
> `--checkpoint_exclude_scopes` --trainable_scopes Lock other layers and train only the specified layers

### View the training process
#### tensorboard
Tensorboard is a tool used by tensorflow framework to view training process.
```bash
$ tensorboard --logdir=${TRAIN_DIR}
```
You will see similar information.
```
TensorBoard 1.14.0 at http://yan-pc:6006/ (Press CTRL+C to quit)
```
You can see the corresponding interface through the browser.

### Training data processing
The training data is saved in the path specified by `TRAIN_DIR`
#### export graph
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
> 1. TRAIN_DIR                    is the path of the traing data set,that is the train directory just generate in the data directory
> 2. DATASET_DIR                  is the path to save the data generate by training
> 3. export_inference_graph.py    Script of export with slim tool .
> 4. parameter 
> `--train_dir`          Path to save training data
> `--dataset_dir`        training set
> `--model_name`         Specify `inception model` and load the corresponding neural network
> `--dataset_name`       Total name of the dataset
> `--output_file`        Path to export file

#### Frozen graph
```bash
$ python ~/path/to/tensorflow/tensorflow/python/tools/freeze_graph.py \
    --input_graph=/tmp/inception_v3_inf_graph.pb \
    --input_checkpoint={TRAIN_DIR}/model.ckpt-66505 \
    --input_binary=true --output_graph=/tmp/frozen_inception_v3.pb \
    --output_node_names=InceptionV3/Predictions/Reshape_1
```
> 1. The `freeze_graph` tool is the tool tensorflow uses to freeze graphs.The compilation of the tool can refer to the following:[TensorFlow model](https://github.com/tensorflow/models/tree/master/research/slim)
> 2. parameter 
> `--input_graph`        Location of the entered graph.
> `--input_checkpoint`   For the final .cpkt file, see the checkpoint file under TRAIN_DIR
> `--output_graph`       Output the position of frozen graph
> `--output_node_names`  Output node


