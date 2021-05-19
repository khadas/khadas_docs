title: 使用darknet训练自己的yolo模型
---

## 准备

### 搭建darknet开发环境

darknet的搭建可以参考这个文档，安装需求搭建[安装配置darknet环境](/zh-cn/vim3/HowToInstallDarknet.html)
darknet环境训练yolo模型的几点说明：
> 1. opencv的选项一定要打开 
> 2. 使用GPU训练的，最好要有8G以上的显存
> 3. 使用CPU训练的速度会比GPU慢上几百倍，官方有关于这个的说明

### 建立数据集目录
训练的数据集按照voc训练的数据标准来定。
```bash
$ cd $workspace
$ mkdir VOCdevkit
$ cd VOCdevkit
$ mkdir VOC2019
$ cd VOC2019
$ mkdir Annotations ImageSets JPEGImages SegmentationClass SegmentationObject
$ cd ImageSets
$ mkdir Main
```
建立完的目录如下:
```
$ cd $workspace
$ tree
.
└── VOCdevkit
    └── VOC2019
        ├── Annotations
        ├── ImageSets
        │   └── Main
        ├── JPEGImages
        ├── labels
        ├── SegmentationClass
        └── SegmentationObject

```

### 准备数据集
把训练的图片放入`$workspace/VOCdevkit/VOC2019/JPEGImages/`中。
这里对于训练图片的准备有一下说明:
> 1. 一个图片中可以包含多个训练的对象
> 2. 训练的对象在图中的占比不能大于50%，同时不能过小，yolo模型对小物体的识别效果一般
> 3. 图片的尺寸没有要求，最好是1比1的
> 4. 图片数据的样本大小，每个训练的类不能少于300

## 数据集处理
移动物体检测的模型基本都要为训练样本做标注，标注工具使用github上开源的一款工具

### labelImg工具

#### 依赖包安装
```bash
$ sudo apt update
$ sudo apt install pyqt4-dev-tools lxml git python-lxml python3 python3-dev
```
#### 安装labelImg
```bash
$ git clone https://github.com/tzutalin/labelImg
$ cd labelImg/
$ python3 labelImg.py
```
安装依赖正确就会打开一个图形化工具。如下图所示:
![ai-examples0002-1](/images/vim3/darknet_labelImg_tool.png)

### 制作标签

#### 设置路径
如上图所示，两个方框分别是原始图片的路径和标注后xml文件的路径
> Opendir            -->     `$workspace/VOCdevkit/VOC2019/JPEGImages/`
> Change save dir    -->     `$workspace/VOCdevkit/VOC2019/Annotations/`

#### 设置labels
```bash
$ cd /path/to/labelImg/data/
$ vim predefined_classes.txt
```
可以看到默认的类别为20个，可以加在默认的类别后面，或者清空只写入你要训练的类别。
这里使用khadas的物体检测为例:
```
person
bicycle
car
...
toothbrush
Edge-V
Edge
VIM1
VIM2
VIM3
VIM3L
Fan3705
Captain
Captain+Edge
ToneBoard
Heatsink(VIMs)
Heatsink(Edge)
```

#### 标注
如下图所示:
![ai-examples0002-2](/images/vim3/howto_labelImg_tool.png)
> 1. 点击左边的'Create'按钮创建新的标注，或者按快捷键`w`.保存选择一个labels保存，右边这里可以看到labels。
> 2. 按照图中的标识1，把需要识别的物体整个放入标识框内。
> 3. 按照图中的标识2，设置相应的labels。点击右边的labels。相应的框会变亮。
> **注意** : labels一定要和识别框正确对应上，否则会导致训练失败。

### 格式转换
所有的图片标注完了以后，还需要转成yolo模型的数据。

#### 生成list文件
```bash
$ cd $workspace
$ vim xml2txt.py
```
把下面的转换代码写入
```
import os
from os import listdir, getcwd
from os.path import join
if __name__ == '__main__':
    source_folder='VOCdevkit/VOC2019/JPEGImages/'
    dest='VOCdevkit/VOC2019/ImageSets/Main/train.txt'
    dest2='VOCdevkit/VOC2019/ImageSets/Main/val.txt'
    file_list=os.listdir(source_folder)
    train_file=open(dest,'a')
    val_file=open(dest2,'a')
    file_num=0
    for file_obj in file_list:
        file_path=os.path.join(source_folder,file_obj)

        file_name,file_extend=os.path.splitext(file_obj)

        if(file_num<4000):

            train_file.write(file_name+'\n')
        else :
            val_file.write(file_name+'\n')
        file_num=file_num+1
    train_file.close()
val_file.close()

```
上面代码中file_num依照你的样本数而定。例如你的样本总合有5000个，那么这个位置就是`5000*80%=4000`.
运行上面的python代码，生成list文件。
```
$ python3 xml2txt.py
```
运行完在`$workspace/VOCdevkit/VOC2019/ImageSets/Main/`里面会看到两个txt文件。

#### 生成训练文件
```bash
$ cd $workspace
```
##### 获取脚本文件
```bash
$ wget https://pjreddie.com/media/files/voc_label.py
```
##### 修改脚本文件
```
$ vim voc_label.py
```
将
```
sets=[('2012', 'train'), ('2012', 'val'), ('2007', 'train'), ('2007', 'val'), ('2007', 'test')]
```
修改为
```
sets=[('2019', 'train'), ('2019', 'val')]
```
将class里面的类修改成你需要训练的类。
这里以khadas的物体检测为例:
```
classes = ["person","bicycle","car","motorbike","aeroplane","bus","train","truck","boat","traffic light","fire hydrant","stop sign","parking meter","bench","bird","cat","dog","horse","sheep","cow","elephant","bear","zebra","giraffe","backpack","umbrella","handbag","tie","suitcase","frisbee","skis","snowboard","sports ball","kite","baseball bat","baseball glove","skateboard","surfboard","tennis racket","bottle","wine glass","cup","fork","knife","spoon","bowl","banana","apple","sandwich","orange","broccoli","carrot","hot dog","pizza","donut","cake","chair","sofa","pottedplant","bed","diningtable","toilet","tvmonitor","laptop","mouse","remote","keyboard","cell phone","microwave","oven","toaster","sink","refrigerator","book","clock","vase","scissors","teddy bear","hair drier","toothbrush","Edge-V","Edge","VIM1","VIM2","VIM3","VIM3L","Fan3705","Captain","Captain+Edge","ToneBoard","Heatsink(VIMs)","Heatsink(Edge)"]
```
##### 运行
```bash
$ cd $workspace
$ python3 voc_label.py
```
1. 运行完毕以后，在`workspace`下会生成两个txt文件`2019_train.txt`和`2019_val.txt`。
2. 同时在`$workspace/VOCdevkit/VOC2019/`下生成一个文件夹`labels`,里面存放了每个图片的训练样本的位置信息

到此，训练数据集的准备工作就完成了。

## 训练

### 准备训练文件
准备好数据集以后，需要准备训练的配置文件。
#### 准备names文件
新建训练数据目录，再新建voc.names文件
```bash
$ cd $workspace
$ mkdir yolov3-train/
$ cd yolov3-train/
$ touch voc.names
```
#### 准备data文件
```bash
$ cd $workspace/yolov3_train/
$ touch voc.data
```
#### 复制cfg文件
```bash
$ cd $workspace/yolov3_train/
$ cp /path/to/darknet/cfg/yolov3-voc.cfg ./
```
#### 新建backup目录
```bash
$ cd $workspace/yolov3_train/
$ mkdir backup
```
`backup`目录用来存放训练产生的数据

#### 移动训练数据文件
```bash
$ cd $workspace/yolov3_train/
$ mv ../2019_train.txt ./train.txt
$ mv ../2019_val.txt ./val.txt
```

### 配置文件修改
```bash
$ cd $workspace/yolov3_train/
```

#### 修改voc.names文件
```bash
$ vim voc.names
```
按照`$workspace/voc_label.py`设置的class的顺序，写入`voc.names`中，每个类为一行，
这里以khadas的物体检测为例;
```
person
bicycle
car
...
toothbrush
Edge-V
Edge
VIM1
VIM2
VIM3
VIM3L
Fan3705
Captain
Captain+Edge
ToneBoard
Heatsink(VIMs)
Heatsink(Edge)
```

#### 修改cfg文件
```bash
$ vim yolov3-voc.cfg
```
##### 修改组数和组大小参数
```
# Testing
batch=1
subdivisions=1
# Training
# batch=64
# subdivisions=16
```
修改为
```
# Testing
# batch=1
# subdivisions=1
# Training
batch=64
subdivisions=16
```

##### 修改yolo神经元参数
一共有3处神经元要修改,找到[yolo]的三处
```
[convolutional]
size=1
stride=1
pad=1
filters=85
activation=linear
 
[yolo]         
mask = 6,7,8
anchors = 10,13,  16,30,  33,23,  30,61,  62,45,  59,119,  116,90,  156,198,  373,326
classes=20
num=9
jitter=.3
ignore_thresh = .5
truth_thresh = 1
random=1

```
> 1. 修改class参数，按照`$workspace/voc_label.py`的数量设置
> 2. 设置filters参数,计算方法: `filters=(class+5)*3*1*1`
> 这里以khadas的物体检测为例，`class=92`,`filters=291`

#### 编辑voc.data文件
```bash
$ vim voc.data
```
内容如下:
```
classes= 
train  = $workspace/yolov3-train/train.txt
valid  = $workspace/yolov3-train/val.txt
names  = $workspace/yolov3-train/voc.names
backup = $workspace/yolov3-train/backup
```
> 1. 其中class的值等于你在yolov3-voc.cfg设置的class的值
> 2. 路径全部使用绝对路径，darknet不识别相对路径
这里以khadas的物体检测为例:
```
classes= 92
train  = /home/khadas/Pictures/VOCdevkit/yolov3-train/train.txt
valid  = /home/khadas/Pictures/VOCdevkit/yolov3-train/val.txt
names = /home/khadas/Pictures/VOCdevkit/yolov3-train/voc.names
backup = /home/khadas/Pictures/VOCdevkit/yolov3-train/backup

```


准备完毕的目录如下:
```bash
$ cd $workspace/yolov3_train/
$ tree
.
├── backup
├── train.txt
├── val.txt
├── voc.data
├── voc.names
└── yolov3-voc.cfg
```

### 训练过程

#### 获取权重文件

你可以选择自己涉及一个权重文件，这里darknet官方提供了一个。
```bash
$ cd /path/to/darknet/
$ wget https://pjreddie.com/media/files/darknet53.conv.74
```

#### 训练命令
###### 从头开始训练
```bash
$ cd /path/to/darknet
$ ./darknet detector train $workspace/yolov3-train/voc.data $workspace/yolov3-train/yolov3-voc.cfg darknet53.conv.74
```
###### 从保存的中间点恢复训练
```bash
$ cd ./darknet detector train $workspace/yolov3-train/voc.data $workspace/yolov3-train/yolov3-voc.cfg $workspace/yolov3-train/backup/yolov3-voc.backup
```
#### 训练状态

训练时终端会打印出每一步的数据，如下:
```
Region 94 Avg IOU: 0.540326, Class: 0.139797, Obj: 0.130498, No Obj: 0.001526, .5R: 0.700000, .75R: 0.100000,  count: 10
Region 106 Avg IOU: 0.482969, Class: 0.177537, Obj: 0.019915, No Obj: 0.000925, .5R: 0.375000, .75R: 0.000000,  count: 8
Region 82 Avg IOU: 0.524465, Class: 0.015476, Obj: 0.208355, No Obj: 0.005669, .5R: 0.666667, .75R: 0.000000,  count: 6
Region 94 Avg IOU: 0.511687, Class: 0.360272, Obj: 0.063160, No Obj: 0.001155, .5R: 0.400000, .75R: 0.200000,  count: 5
Region 106 Avg IOU: 0.557980, Class: 0.012614, Obj: 0.021471, No Obj: 0.000624, .5R: 0.666667, .75R: 0.000000,  count: 3
Region 82 Avg IOU: 0.682441, Class: 0.174183, Obj: 0.089430, No Obj: 0.006534, .5R: 0.833333, .75R: 0.500000,  count: 6
Region 94 Avg IOU: 0.386654, Class: 0.070363, Obj: 0.014934, No Obj: 0.000916, .5R: 0.333333, .75R: 0.000000,  count: 3
Region 106 Avg IOU: 0.436000, Class: 0.006006, Obj: 0.088640, No Obj: 0.001066, .5R: 0.000000, .75R: 0.000000,  count: 1
Region 82 Avg IOU: 0.521084, Class: 0.025058, Obj: 0.132706, No Obj: 0.006369, .5R: 0.500000, .75R: 0.000000,  count: 6
Region 94 Avg IOU: 0.577572, Class: 0.178678, Obj: 0.097599, No Obj: 0.001857, .5R: 0.727273, .75R: 0.000000,  count: 11
Region 106 Avg IOU: 0.332272, Class: 0.099031, Obj: 0.051440, No Obj: 0.000967, .5R: 0.176471, .75R: 0.000000,  count: 17
Region 82 Avg IOU: 0.639035, Class: 0.274132, Obj: 0.219622, No Obj: 0.006810, .5R: 1.000000, .75R: 0.000000,  count: 3
Region 94 Avg IOU: 0.545786, Class: 0.129236, Obj: 0.028372, No Obj: 0.000898, .5R: 0.666667, .75R: 0.000000,  count: 3
Region 106 Avg IOU: 0.543433, Class: 0.296318, Obj: 0.075353, No Obj: 0.000830, .5R: 1.000000, .75R: 0.000000,  count: 1
705: 7.811739, 8.019678 avg, 0.000247 rate, 2.236426 seconds, 45120 images
Loaded: 0.000059 seconds
```
> 1. class: 标注物体的概率，期望该值趋近于1
> 2. Obj: 期望该值趋近于1
> 3. No Obj: 期望该值越来越小但不为零
> 4. Avg Recall：期望该值趋近1 
> 5. avg：平均损失，期望该值趋近于0
> 6. Region Avg IOU：平均的IOU，代表预测的bounding box和ground truth的交集与并集之比，期望该值趋近于1
