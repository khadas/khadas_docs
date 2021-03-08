title: How to Compile and Use Amlogic NN Api demo 
---

Amlogic NN Api is a set of NPU Api officially launched by amlogic. This document will introduce how to compile and use khadas to demonstrate based on this set of Api.

## API Docs

For detailed information about the API, please refer to the document `docs/zh-cn/DDK_6.4.3_SDK_V1.6 API Description.pdf`

## Compile

### Get demo source code

The source code of the `aml_npu_nnsdk_app` repository is open on the official gitlab of Khadas

```shell
$ mkdir workspace
$ cd ${workspace}
$ git clone https://gitlab.com/khadas/tengine_khadas_app.git
```

### Source code structure introduction

There are currently 3 demos in the source code repository:

1. body_pose:       Detect 18-point posture of the human body, only support image recognition
2. image_classify:  Object recognition classification, only supports image recognition
3. person_detect:   Human body detection, supports image recognition and camera recognition

There are compilation scripts, makefiles and source codes in each directory. Take person_detect as an example.

```shell
$ cd ${workspace}/aml_npu_nnsdk_app/person_detect_640x384
$ ls
build-cv3.sh  include  makefile-cv3.linux  person_detect_640x384_camera.cpp  person_detect_640x384_picture.cpp  README.cn.md  README.md
```

1. build-cv3.sh : Compiled script
2. makefile-cv3.linux : Compilesd makefile
3. person_detect_640x384_camera.cpp: Source code for image recognition
4. person_detect_640x384_picture.cpp: Source code for camera recognition

### Compilation method

Please refer to get SDK [#Get-SDK](/vim3/HowToUseNPUSDK#Get-SDK)

Here also take person_detect as an example,

```shell
$ cd ${workspace}/aml_npu_nnsdk_app/person_detect_640x384
$ ./build-cv3.sh /path/to/aml_npu_sdk/linux_sdk/linux_sdk
  COMPILE /home/yan/data/git/npu/aml_npu_nnsdk_app/person_detect_640x384/person_detect_640x384_picture.cpp
  COMPILE /home/yan/data/git/npu/aml_npu_nnsdk_app/person_detect_640x384/person_detect_640x384_camera.cpp
```

Compilation will generate the generated file in `cv3_output`,
```shell
$ cd {workspace}/aml_npu_nnsdk_app/person_detect_640x384/cv3_output
$ ls
person_detect_640x384_camera  person_detect_640x384_camera.o  person_detect_640x384_picture  person_detect_640x384_picture.o
```

Among them, `person_detect_640x384_camera` and `person_detect_640x384_picture` are the generated executable files

## How to Run


Here also take person_detect as an example,

1. Obtain the nb file [https://github.com/khadas/AML_NN_SDK](https://github.com/khadas/AML_NN_SDK), the nb file corresponding to `person_detect` is:

```shell
$ mkdir ${board_space}
$ cd board_space
$ wget https://github.com/khadas/AML_NN_SDK/raw/master/Model/DDK6.4.4.3/88/person_detect_88.nb  [VIM3]
$ wget https://github.com/khadas/AML_NN_SDK/raw/master/Model/DDK6.4.4.3/99/person_detect_99.nb  [VIM3L]
```

2. Copy the executable file compiled on the PC to the board

3. Run

Identify the picture

```shell
$ /path/to/person_detect_640x384_picture ${board_space}/person_detect_88.nb /path/to/picture  [VIM3] 
$ /path/to/person_detect_640x384_picture ${board_space}/person_detect_99.nb /path/to/picture  [VIM3L] 

```

Recognition camera

```shell
$ /path/to/person_detect_640x384_camera ${board_space}/person_detect_88.nb /dev/videoX   [VIM3]
$ /path/to/person_detect_640x384_camera ${board_space}/person_detect_99.nb /dev/videoX   [VIM3L]
```


**Note** :

Just a simple template repository, please refer to the documentation for detailed API introduction.
