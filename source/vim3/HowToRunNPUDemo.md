title: How to run NPU Demo on VIM3
---

# Bet NPU Demo

NPU Demo is not installed on the board by default. You need to download it from gitlab first

The address of the repository on gitlab is:[https://gitlab.com/khadas/aml_npu_demo_binaries](https://gitlab.com/khadas/aml_npu_demo_binaries)

Clone to the board through the `git` command.

```shell
$ cd {workspace}
$ git clone https://gitlab.com/khadas/aml_npu_demo_binaries
```

Or download the compressed package directly, and then unzip it to the board

There are three directories in NPU Demo:

```
detect_demo: A collection of yolo series models for camera dynamic recognition
detect_demo_picture: A collection of yolo series models that identify pictures
inceptionv3: Identify the inception model of the picture
```

# Inception model recognition picture

1. The inception model does not need to install any libraries into the system. Enter the inceptionv3 directory

```shell
$ cd {workspace}/aml_npu_demo_binaries/inceptionv3
$ ls
dog_299x299.jpg  goldfish_299x299.jpg  imagenet_slim_labels.txt  VIM3  VIM3L
```

`imagenet_slim_labels.txt` is a label file. After the result is identified, the label corresponding to the result can be queried in this file.

2. If your board is VIM3, enter the `VIM3` directory, if it is VIM3L, then enter the `VIM3L` directory. Here is VIM3 as an example

```shell
$ cd {workspace}/aml_npu_demo_binaries/inceptionv3/VIM3
$ inceptionv3  inception_v3.nb  run.sh
```

3. run `run.sh`

```shell
$ cd {workspace}/aml_npu_demo_binaries/inceptionv3/VIM3
$ ./run.sh
Create Neural Network: 59ms or 59022us
Verify...
Verify Graph: 0ms or 739us
Start run graph [1] times...
Run the 1 time: 20.00ms or 20497.00us
vxProcessGraph execution time:
Total   20.00ms or 20540.00us
Average 20.54ms or 20540.00us
 --- Top5 ---
  2: 0.833984
795: 0.009102
974: 0.003592
408: 0.002207
393: 0.002111
```

By querying `imagenet_slim_labels.txt`, the result is a goldfish, which is also correctly identified

4. Identify other pictures

```shell
$ cd {workspace}/aml_npu_demo_binaries/inceptionv3/VIM3
$ ./inceptionv3 inception_v3.nb path/to/picture
```

**note**:The size of the picture must correspond to the size of the model, so here, the input of the inceptionv3 model is 299x299x3, and the incoming recognized picture must also be 299x299

# yolo series model

The application of the yolo series model is divided into two parts: camera dynamic recognition and image recognition.

## Install and uninstall libraries

The yolo series models need to install the library into the system. Whether it is using the camera to dynamically recognize or recognize pictures, they share the same library.

enter `detect_demo_picture`

```shell
$ cd {workspace}/aml_npu_demo_binaries/detect_demo_picture
```

Install

```shell
$ sudo ./INSTALL
```

Uninstall

```shell
$ sudo ./UNINSTALL
```

## `type` Parameter Description

The `type` parameter is an input parameter that must be selected whether it is to use camera dynamic recognition or to recognize pictures. This parameter is mainly used to specify the running yolo series model.

```
0 : yoloface model
1 : yolov2 model
2 : yolov3 model
3 : yolov3_tiny model
4 : yolov4 model
```

## Operating environment description

NPU Demo can run in X11 or framebuffer mode, Opencv3 or Opencv4 in different environments. Just select the corresponding demo to run.

### X11/Framebuffer

The demo with `fb` is running in framebuffer mode.

The demo with `x11` is running in X11 mode.

### Opencv3/Opencv4

The one ending with `cv3` is the demo running in the Opencv3 environment

The one ending with `cv4` is the demo running in the Opencv4 environment

## Illustrative example

Here is an example of `detect_demo_picture`,

```shell
$ cd {workspace}/aml_npu_demo_binaries/detect_demo_picture
$ ls 
1080p.bmp  detect_demo_fb_cv3  detect_demo_fb_cv4  detect_demo_x11_cv3  detect_demo_x11_cv4  INSTALL  lib  nn_data  README.md  UNINSTALL
```

1. detect_demo_fb_cv3  It is a demo that uses opencv3 recognition pictures running under framebuffer
2. detect_demo_fb_cv4  It is a demo that uses opencv4 recognition pictures running under framebuffer
3. detect_demo_x11_cv3 It is a demo that uses opencv3 recognition pictures running under X11
4. detect_demo_x11_cv4 It is a demo that uses opencv4 recognition pictures running under X11


## Run

### Picture recognition

Identify the command format of the picture

```shell
$ cd {workspace}/aml_npu_demo_binaries/detect_demo_picture
$ ./detect_demo_xx_xx type picture_path
```

Here is an example of using Opencv3 to call the yolov3 model to recognize pictures under x11.

```shell
$ cd {workspace}/aml_npu_demo_binaries/detect_demo_picture
$ ./detect_demo_fb_cv3 2 1080p.bmp
```

The results of the operation are as follows,

![detect_demo_picture_x11_cv3](/images/vim3/detect_demo_picture_x11_cv3.png)

### Dynamic camera recognition

Camera description

Under framebuffer, you should use the demo of `uvc` to use the USB camera, and the demo of `mipi` to use the mipi camera.

Under x11, the usb camera and mipi camera use the same set of demos.

Command format for camera dynamic recognition

```shell
$ cd {workspace}/aml_npu_demo_binaries/detect_demo
$ ./detect_xx_xx_xx <video node> <type>
```

Here is an example of using opencv3 to call yolov3 in the x11 environment.

```shell
$ cd {workspace}/aml_npu_demo_binaries/detect_demo
$ ./detect_demo_x11_cv3 /dev/video1 2
```

After turning on the camera, the recognition result will be displayed on the screen

![detect_demo_x11_cv3](/images/vim3/detect_demo_x11_cv3.png)













