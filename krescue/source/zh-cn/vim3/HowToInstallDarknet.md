title: 安装配置darknet环境
---

darknet是基于ｃ语言设计的一个主要用于物体检测训练的框架

## 基本环境配置

### 基础工具安装
```bash
$ sudo apt update
$ sudo apt upgrade
$ sudo apt install git wget build-essential　python3-dev python3-pip
```
### opencv安装
```bash
$ sudo apt install libopencv-dev
$ sudo pip3 install opencv-python
```
最新已经更新到了4.1.x,要安装3.4.x的版本可以指定版本号

### cuda和cudnn安装(不使用GPU跳过)
参考这里安装[配置和安装cuda&cudnn](https://www.tensorflow.org/install/gpu)

## darknet安装

### 下载darknet
```bash
$ mkdir ~/git
$ cd ~/git
$ git clone https://github.com/pjreddie/darknet.git
$ cd darknet
```
### 配置darknet
编译darknet之前需要配置darknet已适配你的PC,修改Makefile文件
```bash
$ vim Makefile
```

#### 使用GPU
使用GPU将GPU和cudnn打开
```
GPU=0
CUDNN=0
```
修改为
```
GPU=1
CUDNN=1
```
使用cpu的这里不需要更改

#### 打开opencv
darknet的大部分物体检测都需要使用opencv
```
OPENCV=0
```
修改为
```
OPENCV=1
```

### 编译
在根目录下执行make
```bash
$ make
```

## darknet验证和使用

### 测试
```bash
./darknet imtest data/eagle.jpg
```
如果看到类似下面的图案即使安装成功
![ai-basic0002-1](/images/vim3/darknet_install_success.png)

### 使用yolo模型
#### 获取训练好的模型文件
```bash
$ wget https://pjreddie.com/media/files/yolov3.weights

```
#### 通过图片检测
```bash
$ ./darknet detect cfg/yolov3.cfg yolov3.weights data/dog.jpg
```
结果如下

![ai-basic0002-2](/images/vim3/darknet_install_check.png)

#### 使用摄像头
使用摄像头必须使用opencv和gpu，指令如下
```bash
$ ./darknet detector demo cfg/coco.data cfg/yolov3.cfg yolov3.weights
```
从摄像头里就可以看到效果


## FAQ

#### 出现`Not compiled with OpenCV`
1. opencv未成功安装，卸载原先的opencv，按照上面的方法重新安装一遍。
2. opencv版本不对，确保opencv版本>=3.0

#### 显示nvcc或者cudnn相关的.h未找到
cuda和cudnn安装未成功，安装这里的配置，重新检查一遍。[配置和安装cuda&cudnn](https://www.tensorflow.org/install/gpu)

#### GPU报错
有可能是gpu的显存不够，darknet对gpu要求比较高。
