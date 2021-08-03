title: How to Compile and Use Amlogic NN Api demo 
---

Amlogic NN Api is a set of NPU Api officially launched by amlogic. This document will introduce how to compile and use khadas to demonstrate based on this set of Api.

{% note warn Note %}
Just support for opencv4
{% endnote %}

## Install Opencv4

```shell
$ sudo apt install libopencv-dev python3-opencv
```

## API Docs

For detailed information about the API, please refer to the document `docs/zh-cn/DDK_6.4.3_SDK_V1.6 API Description.pdf`

## Compile

### Get demo source code

The source code of the `aml_npu_nnsdk_app` repository is open on the official gitlab of Khadas

```shell
$ mkdir workspace
$ cd ${workspace}
$ git clone https://gitlab.com/khadas/aml_npu_nnsdk_app
```

### Source code structure introduction

There are currently 3 demos in the source code repository:

1. body_pose:       Detect 18-point posture of the human body, only support image recognition

There are compilation scripts, makefiles and source codes in each directory. Take image_classify as an example.

```shell
$ cd ${workspace}/aml_npu_nnsdk_app/image_classify_224x224
$ ls
build-cv4.sh  cv3_output  image_classify_224x224.cpp  include  makefile-cv4.linux  README.cn.md  README.md
```

1. build-cv4.sh : Compiled script
2. makefile-cv4.linux : Compilesd makefile
3. image_classify_224x224.cpp: Source code for camera recognition

### Compilation method

Please refer to get SDK [#Get-SDK](/vim3/HowToUseNPUSDK#Get-SDK)

Here also take image_classify as an example,

```shell
$ cd ${workspace}/aml_npu_nnsdk_app/image_classify_224x224
$ ./build-cv4.sh
  COMPILE /home/khadas/aml_npu_nnsdk_app/image_classify_224x224/image_classify_224x224.cpp
```

Compilation will generate the generated file in `cv4_output`,
```shell
$ cd {workspace}/aml_npu_nnsdk_app/image_classify_224x224/cv4_output
$ ls
image_classify_224x224  image_classify_224x224.o
```

Among them, `image_classify_224x224` are the generated executable files

## How to Run


Here also take image_classify_224x224 as an example,

1. Obtain the nb file [https://github.com/khadas/AML_NN_SDK](https://github.com/khadas/AML_NN_SDK), the nb file corresponding to `image classify` is:

```shell
$ mkdir ${board_space}
$ cd board_space
$ wget https://github.com/khadas/AML_NN_SDK/raw/master/Model/DDK6.4.4.3/88/image_classify_88.nb  [VIM3]
$ wget https://github.com/khadas/AML_NN_SDK/raw/master/Model/DDK6.4.4.3/99/image_classify_88.nb  [VIM3L]
```

2. Copy the executable file compiled on the PC to the board

3. Run


```shell
$ /path/to/image_classify_224x224 ${board_space}/image_classify_88.nb /path/to/picture  [VIM3] 
$ /path/to/image_classify_224x224 ${board_space}/image_classify_99.nb /path/to/picture  [VIM3L] 

```

{% note info Note %}
Just a simple template repository, please refer to the documentation for detailed API introduction.
{% endnote %}

