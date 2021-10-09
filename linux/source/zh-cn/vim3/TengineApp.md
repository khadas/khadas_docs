title: 编译运行tengine示例
---

Tengine_khadas_app 源码仓库是khadas基于tengine API制作的一个简易demo仓库


{% note warn 注意 %}
tengine-lite v.14(即NPU6.4.4.3)之后，demo仅支持在板子上进行本地编译
{% endnote %}

## 获取源码

源码仓库位于khadas的github上,clone到板子上

```shell
$ mkdir ${workspace}
$ cd ${workspace}
$ git clone https://github.com/khadas/tengine_khadas_app.git
$ cd tengine_khadas_app
$ ls
yolov3-camera  yolov3-picture
```

`yolov3-camera`和`yolov3-picture`分别基于opencv的摄像头识别和图片识别的demo

## 安装opencv4

```shell
$ sudo apt install libopencv-dev python3-opencv
```

## 编译


yolov3-picture:

```shell
$ cd ${workspace}/tengine_khadas_app/yolov3-picture
$ ./build-cv4.sh
  COMPILE ${workspace}/tengine_khadas_app/yolov3-picture/tengine_khadas_yolov3_picture.cpp
$ ls cv3_output/
tengine_khadas_yolov3_picture  tengine_khadas_yolov3_picture.o
```

yolov3-camera:

```shell
$ cd ${workspace}/tengine_khadas_app/yolov3-camera
$ ./build-cv3.sh
  COMPILE ${workspace}/tengine_khadas_app/yolov3-camera/tengine_khadas_yolov3_camera.cpp
$ ls cv3_output/
tengine_khadas_yolov3_camera  tengine_khadas_yolov3_camera.o
```

其中`tengine_khadas_yolov3_picture`和`tengine_khadas_yolov3_camera`就是编译出来的可执行文件


## 运行


1. 获取tmfile

请参考[Tengine SDK使用说明](/linux/zh-cn/vim3/TengineSDK.html)


2. 运行

```shell
$ ./tengine_khadas_yolov3_camera -m path/to/yolov3_uint8_t_timfile -i path/to/picture
$ ./tengine_khadas_yolov3_camera -m path/to/yolov3_uint8_t_timfile -d /dev/videoX
```



















