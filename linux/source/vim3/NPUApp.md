title: Application Source Code
---

This documentation will introduce how to compile the application source code.

{% note warn Note %}
1. Only support local compile on VIM3/3L
2. Only support OpenCV4
{% endnote %}

## Install OpenCV4

```shell
$ sudo apt update
$ sudo apt install libopencv-dev python3-opencv
```

## Get Source Code

```shell
$ cd {workspace}
$ git clone https://github.com/khadas/aml_npu_app
```

## Source Description

### Directory structure description

```shell
$ cd {workspace}/aml_npu_app
$ ls
DDK_6.3.2  DDK_6.3.2.3  DDK_6.3.2.5  DDK_6.3.3.4  DDK_6.4.0.3  DDK_6.4.3  detect_library  LICENSE  NN_SLT
```

* **DDK_xxx** - Different versions of library source code
* **detect_library** - Application layer source code. detect_library/model_code link to the latest version of DDK
* **NN_SLT** - Separate source code directory for DnCnn model (no longer maintained)
* **LICENSE** - LICENSE file

### Library Description

Enter the directory of the library source code, which is the directory of the DDK.

```shell
$ cd {workspace}/aml_npu_app/detect_library/model_code
$ ls
detect_mtcnn  detect_yoloface  detect_yolo_v2  detect_yolo_v3  detect_yolo_v3_tiny  detect_yolo_v4  facenet
```

Except for `detect_mtcnn`, each directory represents a different model, and each model will be compiled into a library.

* **detect_yoloface** - yoloface model, used to detect faces
* **detect_yolo_v2** - yolov2 model, for object detection
* **detect_yolo_v3** - yolov3 model, for object detection
* **detect_yolo_v3_tiny** - yolov3-tiny model, for object detection
* **detect_yolo_v4** - yolov4 model, used to detect faces

Take `detect_yolo_v3` as an example to illustrate the structure of each directory

```shell
$ cd {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3
$ ls
build_vx.sh  include  Makefile  makefile.linux  vnn_yolov3.c  yolo_v3.c  yolov3_process.c
```

Main content description:

* **build_vx.sh** - Compile script
* **include** - The corresponding header files and all definitions will be placed in this directory
* **Makefile** - Makefile file
* **makefile.linux** - Make environment configuration file
* **vnn_yolov3.c** - SDK The converted model processing file is mainly used to interface with the nb file
* **yolo_v3.c** - Specify the called nb file, and define all the interfaces of the model call
* **yolov3_process.c** - Mainly defines the pre-processing and post-processing of the model

### Application Description

Enter the application source code directory

```shell
$ cd {workspace}/aml_npu_app/detect_library
$ ls
model_code  sample_demo_fb  sample_demo_x11  source_code  yolo_demo_gst_uvc_fb  yolo_demo_mipi_fb  yolo_demo_x11
```

Except `model_code` link to the leastest DDK, every other directory will compile a demo of the upper application

* **source_code** - Compile libnn_detect.so. as a bridge to connect different libraries and different application demos
* **sample_demo_fb** - Compile detect_demo_fb of the aml_npu_demo_binaries repository for image recognition under framebuffer
* **sample_demo_x11** - Compile detect_demo_x11 of the aml_npu_demo_binaries repository for image recognition under X11
* **yolo_demo_gst_uvc_fb** - Compile the detect_demo_uvc_fb of the aml_npu_demo_binaries repository for dynamic recognition of the USB camera under the framebuffer
* **yolo_demo_mipi_fb** - Compile detect_demo_mipi_fb of the aml_npu_demo_binaries repository for dynamic recognition of mipi camera under framebuffer
* **yolo_demo_x11** - Compile detect_demo_x11 of the aml_npu_demo_binaries repository for dynamic camera recognition under X11

Here is an example of `sample_demo_x11`

```shell
$ cd {workspace}/aml_npu_app/detect_library/sample_demo_x11
$ ls
1080p.bmp  build_vx.sh  detect.h  emb.db  main.cpp  makefile.linux  nn_detect_common.h  nn_detect.h  nn_detect_utils.h  ReadMe.txt  result
```

Here is an explanation of the main files,


* **build_vx.sh** - Compile script
* **makefile.linux** - Respectively, the compilation scripts need to specify the makefile.linux file when compiling
* **main.cpp** - Is the main source code of the application demo.
* **xxx.h** - The definition related header files that the application layer needs to use

## Compile


### Compile Library

To compile the library, just enter the directory of the corresponding library and compile it. Here is yolov3 as an example

```shell
$ cd {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3
$ ./build_vx.sh
  COMPILE /home/khadas/aml_npu_app/DDK_6.3.3.4/detect_library/model_code/detect_yolo_v3/yolov3_process.c
  COMPILE /home/khadas/aml_npu_app/DDK_6.3.3.4/detect_library/model_code/detect_yolo_v3/vnn_yolov3.c
vnn_yolov3.c: In function ‘vnn_CreateYolov3’:
vnn_yolov3.c:145:29: warning: unused variable ‘data’ [-Wunused-variable]
  145 |     uint8_t *               data;
      |                             ^~~~
At top level:
vnn_yolov3.c:94:17: warning: ‘load_data’ defined but not used [-Wunused-function]
   94 | static uint8_t* load_data
      |                 ^~~~~~~~~
  COMPILE /home/khadas/aml_npu_app/DDK_6.3.3.4/detect_library/model_code/detect_yolo_v3/yolo_v3.c
```

You can see the generated library in the output directory `bin_r`

```shell
$ cd {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3/bin_r
$ ls
libnn_yolo_v3.so  vnn_yolov3.o  yolo_v3.o  yolov3_process.o
```

### Compile The Application

When compiling the application, first compile `libnn_detect.so`. This is one of the dependent libraries for compiling other applications.

#### Compile `libnn_detect.so`

Enter the `source_code` directory and compile `libnn_detect.so`

```shell
$ cd {workspace}/aml_npu_app/detect_library/source_code
$ ./build_vx.sh
  COMPILE /home/khadas/aml_npu_app/detect_library/source_code/detect.c
  COMPILE /home/khadas/aml_npu_app/detect_library/source_code/detect_log.c
tee: /linux_build_sample.log: Permission denied
make: Nothing to be done for 'all'.
```

In the `bin_r` directory, `libnn_detect.so` will be generated

```shell
$ cd {workspace}/aml_npu_app/detect_library/source_code/bin_r
$ ls
detect_log.o  detect.o  libnn_detect.so
```

#### Compile Application Demo

Here is sample_demo_x11 as an example

```shell
./build_vx.sh
  COMPILE /home/khadas/aml_npu_app/detect_library/sample_demo_x11/main.cpp
main.cpp: In function ‘int run_detect_model(int, char**)’:
main.cpp:321:10: warning: converting to non-pointer type ‘int’ from NULL [-Wconversion-null]
  321 |   return NULL;
      |          ^~~~
main.cpp:261:39: warning: unused variable ‘img_width’ [-Wunused-variable]
  261 |  int nn_height, nn_width, nn_channel, img_width, img_height;
      |                                       ^~~~~~~~~
main.cpp:261:50: warning: unused variable ‘img_height’ [-Wunused-variable]
  261 |  int nn_height, nn_width, nn_channel, img_width, img_height;
      |                                                  ^~~~~~~~~~
main.cpp: In function ‘int run_detect_facent(int, char**)’:
main.cpp:413:10: warning: converting to non-pointer type ‘int’ from NULL [-Wconversion-null]
  413 |   return NULL;
      |          ^~~~
main.cpp:366:39: warning: unused variable ‘img_width’ [-Wunused-variable]
  366 |  int nn_height, nn_width, nn_channel, img_width, img_height;
      |                                       ^~~~~~~~~
main.cpp:366:50: warning: unused variable ‘img_height’ [-Wunused-variable]
  366 |  int nn_height, nn_width, nn_channel, img_width, img_height;
      |                                                  ^~~~~~~~~~
main.cpp: In function ‘int init_fb()’:
main.cpp:539:11: warning: unused variable ‘i’ [-Wunused-variable]
  539 |  long int i;
      |           ^
main.cpp: At global scope:
main.cpp:537:12: warning: ‘int init_fb()’ defined but not used [-Wunused-function]
  537 | static int init_fb(void)
      |            ^~~~~~~
tee: /linux_build_sample.log: Permission denied
make: Nothing to be done for 'all'.
```


In the `bin_r_cv4` directory, you will see the generated `detect_demo` file

```shell
$ cd {workspace}/aml_npu_app/detect_library/sample_demo_x11/bin_r_cv4
$ ls
detect_demo_x11  main.o
```

To compile the opencv4 version, just use the `build_vx_cv4.sh` script to compile.

