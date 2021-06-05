title: Darknet Install and configure Documents
---

Darknet is a framework designed based on C language for object detection training

## Basic configuration

### Install baisc tools
```bash
$ sudo apt update
$ sudo apt upgrade
$ sudo apt install git wget build-essential　python3-dev python3-pip
```
### Install opencv
```bash
$ sudo apt install libopencv-dev
$ sudo pip3 install opencv-python
```
The latest version has been updated to 4.1.x.You can specify the version number to install 3.4.x.

### CUDA and cudnn installation (skip without GPU)
Refer this[CUDA and cudnn installation](https://www.tensorflow.org/install/gpu)

## Install darknet

### Download darknet
```bash
$ mkdir ~/git
$ cd ~/git
$ git clone https://github.com/pjreddie/darknet.git
$ cd darknet
```
### Cofigure darknet
You need to configure Darknet to fit your PC before completed it.Edit `Makefile` file
```bash
$ vim Makefile
```

#### Open GPU 
Enable GPU and enable cudnn
```
GPU=0
CUDNN=0
```
edit it,
```
GPU=1
CUDNN=1
```
If you use CPU to train, you should keep it default.

#### Open opencv
Opencv is required for most object detection in `darknet`
```
OPENCV=0
```
edit it,
```
OPENCV=1
```

### build
run `make` with shell,
```bash
$ make
```
wait it to build compiled.

## darknet Verify and Use

### test
```bash
./darknet imtest data/eagle.jpg
```
If you look some pictures like this.It mean you install success.
![ai-basic0002-1](/images/vim3/darknet_install_success.png)

### Use yolo model on darknet
#### Get the trained model file
```bash
$ wget https://pjreddie.com/media/files/yolov3.weights

```
#### check by pictures
```bash
$ ./darknet detect cfg/yolov3.cfg yolov3.weights data/dog.jpg
```
You would look a picture:

![ai-basic0002-2](/images/vim3/darknet_install_check.png)

#### use by webcam
You can use webcam with this comand.
```bash
$ ./darknet detector demo cfg/coco.data cfg/yolov3.cfg yolov3.weights
```
You can see the effect of real-time monitoring.


## FAQ

#### `Not compiled with OpenCV`
1. opencv install fail,unistall the `opencv` which was install in you PC.And then you can reinstall it fllow this page.
2. opencv version is invalid,you should check you opencv version >=3.0

#### `nvcc` or `cudnn` related header file not found
`cuda` and `cudnn` install fail，reinstall it with this page[Install cuda and cudnn](https://www.tensorflow.org/install/gpu)

#### GPU error
It is possible that there is not enough memory in GPU, and Darknet requires high GPU.
