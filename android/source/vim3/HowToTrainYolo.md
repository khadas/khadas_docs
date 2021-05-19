title: How to Train Yolo Model on Darknet
---

## Preparation

### Install and configure Darknet

For the construction of Darknet, please refer to this document:[How to Install Darknet](/zh-cn/vim3/HowToInstallDarknet.html)
Several explanations of Yolo model for Darknet environment training:
> 1. must open the `Opencv`
> 2. For GPU training, it is better to have more than 8g RAM
> 3. The speed of training with CPU will be hundreds of times slower than that of GPU. There is an official explanation about this.

### Create a dataset directory
The training data set is determined according to the `VOC training dataset` standard.
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
The established directory is as follows:
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

### Preparation dataset
talk all you pictures into the dir `$workspace/VOCdevkit/VOC2019/JPEGImages/`.
Here are some instructions for the preparation of training pictures:
> 1. A picture can contain multiple training objects.
> 2. The proportion of trained objects in the graph should not be more than 50%, and it should not be too small. `Yolo model` has a general recognition effect on small objects.
> 3. There is no requirement for the size of the picture. It's better to be 1:1.
> 4. The sample size of image data, each training class cannot be less than 300.

## Dataset Processing
The model of mobile object detection basically needs to mark the training samples. The marking tool uses an open-source tool on GitHub.

### labelImg tool

#### Dependent package installation
```bash
$ sudo apt update
$ sudo apt install pyqt4-dev-tools lxml git python-lxml python3 python3-dev
```
#### Install labelImg
```bash
$ git clone https://github.com/tzutalin/labelImg
$ cd labelImg/
$ python3 labelImg.py
```
A graphical tool opens when the installation dependency is correct. As shown in the figure below:
![ai-examples0002-1](/images/vim3/darknet_labelImg_tool.png)

### Making labels

#### Set up path to `VOC` data
As shown in the above figure, the two boxes are the path of the original image and the path of the annotated XML file.
> Opendir            -->     `$workspace/VOCdevkit/VOC2019/JPEGImages/`
> Change save dir    -->     `$workspace/VOCdevkit/VOC2019/Annotations/`

#### Set up default labels file
```bash
$ cd /path/to/labelImg/data/
$ vim predefined_classes.txt
```
You can see that the default lables are 20, which you need can be added after the default labels, or empty and only write the labels you want to train.
Here we use the object detection of khadas as an example:
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
The model of mobile object detection basically needs to mark the training samples. The marking tool uses an open-source tool on GitHubHeatsink(Edge)
```

#### Making
As shown in the figure below:
![ai-examples0002-2](/images/vim3/howto_labelImg_tool.png)
> 1. Click the 'create' button on the left to create a new annotation, or press the shortcut key 'W'. Save and select a labels to save. You can see the labels here on the right.
> 2. According to the mark 1 in the figure, put the whole object to be recognized into the mark box.
> 3. Set the corresponding labels according to the identification 2 in the figure. Click labels on the right. The corresponding box lights up.
> **note** : Labels must correspond to the identification box correctly, otherwise the training will fail.

### Format Transform
After all the pictures are labeled, they need to be converted to Yolo model data.

#### Generate list file
```bash
$ cd $workspace
$ vim xml2txt.py
```
Write the following conversion code.
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
File num in the above code depends on the number of samples you have. For example, if your total number of samples is 5000, then this position is `5000*80%=4000`.
Run the Python code above to generate the list file.
```
$ python3 xml2txt.py
```
You will see two files in `$workspace/VOCdevkit/VOC2019/ImageSets/Main/` after run the python code.

#### Generate train file
```bash
$ cd $workspace
```
##### Clone the shell file
```bash
$ wget https://pjreddie.com/media/files/voc_label.py
```
##### Edit the shell file
```
$ vim voc_label.py
```
Find this line 
```
sets=[('2012', 'train'), ('2012', 'val'), ('2007', 'train'), ('2007', 'val'), ('2007', 'test')]
```
Edit it,
```
sets=[('2019', 'train'), ('2019', 'val')]
```
Change the class in the class to the one you need to train.
Here we take the object detection of khadas as an example:
```
classes = ["person","bicycle","car","motorbike","aeroplane","bus","train","truck","boat","traffic light","fire hydrant","stop sign","parking meter","bench","bird","cat","dog","horse","sheep","cow","elephant","bear","zebra","giraffe","backpack","umbrella","handbag","tie","suitcase","frisbee","skis","snowboard","sports ball","kite","baseball bat","baseball glove","skateboard","surfboard","tennis racket","bottle","wine glass","cup","fork","knife","spoon","bowl","banana","apple","sandwich","orange","broccoli","carrot","hot dog","pizza","donut","cake","chair","sofa","pottedplant","bed","diningtable","toilet","tvmonitor","laptop","mouse","remote","keyboard","cell phone","microwave","oven","toaster","sink","refrigerator","book","clock","vase","scissors","teddy bear","hair drier","toothbrush","Edge-V","Edge","VIM1","VIM2","VIM3","VIM3L","Fan3705","Captain","Captain+Edge","ToneBoard","Heatsink(VIMs)","Heatsink(Edge)"]
```
##### Run
```bash
$ cd $workspace
$ python3 voc_label.py
```
1. You will see the file `2019_train.txt` and `2019_val.txt` in `$workspace` after run the shell file.
2. At the same time, a folder `labels` is generated under `$workspace/vocdevkit/voc219/`, which stores the location information of training samples of each picture

At this point, the preparation of the training data set is completed.

## Train

### Preparation train files
After the dataset is ready, you need to prepare the training profile.

#### Preparate names file
Create a new training data directory and a new file names `voc.names`.
```bash
$ cd $workspace
$ mkdir yolov3-train/
$ cd yolov3-train/
$ touch voc.names
```
#### Preparate data file
```bash
$ cd $workspace/yolov3_train/
$ touch voc.data
```
#### Copy the cfg file
```bash
$ cd $workspace/yolov3_train/
$ cp /path/to/darknet/cfg/yolov3-voc.cfg ./
```
#### New backup directory
```bash
$ cd $workspace/yolov3_train/
$ mkdir backup
```
`backup` directory use for save the train data.

#### Move training data file
```bash
$ cd $workspace/yolov3_train/
$ mv ../2019_train.txt ./train.txt
$ mv ../2019_val.txt ./val.txt
```

### Edit configure file
```bash
$ cd $workspace/yolov3_train/
```

#### Edit file `voc.names`
```bash
$ vim voc.names
```
Write to `voc.names` in the order of the class set by `$workspace/voc_label.py`. Each class is a line,
Here we take the object detection of khadas as an example:
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

#### edit cfg file
```bash
$ vim yolov3-voc.cfg
```
##### Edit batch size and subdivisions size
```
# Testing
batch=1
subdivisions=1
# Training
# batch=64
# subdivisions=16
```
change to,
```
# Testing
# batch=1
# subdivisions=1
# Training
batch=64
subdivisions=16
```

##### Modify Yolo neuron parameters
There are three neurons to modify. Find three of `[Yolo]`
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
> 1. Modify the class parameter and set it according to the quantity of `$workspace/voc_label.py`
> 2. Set the parameters of filters, calculation method: `filters=(class+5)*3*1*1`
> Here we take the object detection of khadas as an example:`class=92`,`filters=291`

#### Edit the file `voc.data`
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
> 1. Where the value of class is equal to the value of class you set in yolov3-voc.cfg
> 2. All paths use absolute paths
Here we take the object detection of khadas as an example:
```
classes= 92
train  = /home/khadas/Pictures/VOCdevkit/yolov3-train/train.txt
valid  = /home/khadas/Pictures/VOCdevkit/yolov3-train/val.txt
names = /home/khadas/Pictures/VOCdevkit/yolov3-train/voc.names
backup = /home/khadas/Pictures/VOCdevkit/yolov3-train/backup

```

The prepared directory is as follows:
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

### Training process

#### Get the pretrained convolutional weights

You can choose to design a weight file of your own, which is officially provided by Darknet.
```bash
$ cd /path/to/darknet/
$ wget https://pjreddie.com/media/files/darknet53.conv.74
```

#### Train comand
##### Start from scratch
```bash
$ cd /path/to/darknet
$ ./darknet detector train $workspace/yolov3-train/voc.data $workspace/yolov3-train/yolov3-voc.cfg darknet53.conv.74
```
##### Resume training from a saved middle point
```bash
$ cd ./darknet detector train $workspace/yolov3-train/voc.data $workspace/yolov3-train/yolov3-voc.cfg $workspace/yolov3-train/backup/yolov3-voc.backup
```
#### Train status

During training, the terminal will print the data of each step, as follows:
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
> 1. class: The probability of labeling objects, which is expected to approach 1
> 2. Obj: Expect this value to approach 1
> 3. No Obj: It is expected that the value will be smaller and smaller but not zero
> 4. Avg Recall: Expect this value to approach 1 
> 5. avg: Average loss, which is expected to approach 0
> 6. The average IOU represents the ratio of intersection and union of the predicted `bounding box` and `ground truth`, which is expected to approach 1
