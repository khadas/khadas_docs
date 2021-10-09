title: Tengine Demo Usage
---

The source code repository is a simple demo repository made by khadas based on the tengine API

{% note warn Note %}
After tengine-lite v.14 (ie NPU6.4.4.3), the demo only supports local compilation on the board
{% endnote %}


## Get Source Code

The source code repository is located on github of khadas

```shell
$ mkdir workspace
$ cd ${workspace}
$ git clone https://github.com/khadas/tengine_khadas_app.git
$ cd tengine_khadas_app
$ ls
yolov3-camera  yolov3-picture
```

`yolov3-camera` and `yolov3-picture` are based on the demos of camera recognition and picture recognition of opencv respectively

## Install OpenCV4

```shell
$ sudo apt install libopencv-dev python3-opencv 
```

## Compile

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
$ ./build-cv4.sh
  COMPILE ${workspace}/tengine_khadas_app/yolov3-camera/tengine_khadas_yolov3_camera.cpp
$ ls cv3_output/
tengine_khadas_yolov3_camera  tengine_khadas_yolov3_camera.o
```

Among them, `tengine_khadas_yolov3_picture` and `tengine_khadas_yolov3_camera` are compiled executable files

## Run

1. Get tmfile

Please refer to [Tengine SDK Usage](TengineSDK.html)


2. Run

```shell
$ ./tengine_khadas_yolov3_camera -m path/to/yolov3_uint8_t_timfile -i path/to/picture
$ ./tengine_khadas_yolov3_camera -m path/to/yolov3_uint8_t_timfile -d /dev/videoX
```



















