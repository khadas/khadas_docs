title: How To Compile And Run Tengine Demo
---

The source code repository is a simple demo repository made by khadas based on the tengine API

## Get Source code

The source code repository is located on gitlab of khadas

```shell
$ mkdir workspace
$ cd workspace
$ git clone https://gitlab.com/khadas/tengine_khadas_app.git
$ cd tengine_khadas_app
$ ls
yolov3-camera  yolov3-picture
```

`yolov3-camera` and `yolov3-picture` are based on the demos of camera recognition and picture recognition of opencv respectively

## How To Compile

1. Get SDK

```shell
$ cd workspace
$ git clone https://gitlab.com/khadas/tengine_khadas_sdk.git
```

2. Compile

yolov3-picture:

```shell
$ cd workspace/tengine_khadas_app/yolov3-picture
$ ./build-cv3.sh workspace/tengine_khadas_sdk/
  COMPILE workspace/tengine_khadas_app/yolov3-picture/tengine_khadas_yolov3_picture.cpp
$ ls cv3_output/
tengine_khadas_yolov3_picture  tengine_khadas_yolov3_picture.o
```

yolov3-camera:

```shell
$ cd workspace/tengine_khadas_app/yolov3-camera
$ ./build-cv3.sh workspace/tengine_khadas_sdk/
  COMPILE workspace/tengine_khadas_app/yolov3-camera/tengine_khadas_yolov3_camera.cpp
$ ls cv3_output/
tengine_khadas_yolov3_camera  tengine_khadas_yolov3_camera.o
```

Among them, `tengine_khadas_yolov3_picture` and `tengine_khadas_yolov3_camera` are compiled executable files

## How To Run


1. Get tmfile

Please refer to [How To Use Tengine SDK](/vim3/HowToUseTengineSDK)


2. Run

```shell
$ ./tengine_khadas_yolov3_camera -m path/to/yolov3 uint8_t timfile -i path/to/picture
$ ./tengine_khadas_yolov3_camera -m path/to/yolov3 uint8_t timfile -d /dev/videoX
```



















