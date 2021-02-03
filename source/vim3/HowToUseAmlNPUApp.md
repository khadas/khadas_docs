title: Description and Usage of aml_NPU_app Code Repository 
---

`aml_npu_app`  repository is the source code for `aml_npu_demo_binaries`,The library and demo of the `aml_npu_demo_binaries` repository can be compiled.

# Get the source code repository

The source code repository is stored in gitlab, and the repository address is:[https://gitlab.com/khadas/aml_npu_app](https://gitlab.com/khadas/aml_npu_app)

1. Clone to local by git command

```shell
$ cd {workspace}
$ git clone https://gitlab.com/khadas/aml_npu_app
```

2. Download the compressed package directly

Users who do not use git can also download the compressed package directly from the repository homepage and unzip it.

It is recommended to use the git command to clone. When the subsequent code is updated, you can directly `pull`

# Source description

## Directory structure description

```shell
$ cd {workspace}/aml_npu_app
$ ls
DDK_6.3.2  DDK_6.3.2.3  DDK_6.3.2.5  DDK_6.3.3.4  DDK_6.4.0.3  DDK_6.4.3  detect_library  LICENSE  NN_SLT
```
```
1. DDK_xxx         #Different versions of library source code
2. detect_library  #Application layer source code. detect_library/model_code link to the latest version of DDK
3. NN_SLT          #Separate source code directory for DnCnn model (no longer maintained)
4. LICENSE         #LICENSE file
```

## Library description

Enter the directory of the library source code, which is the directory of the DDK.

```shell
$ cd {workspace}/aml_npu_app/detect_library/model_code
$ ls
detect_mtcnn  detect_yoloface  detect_yolo_v2  detect_yolo_v3  detect_yolo_v3_tiny  detect_yolo_v4  facenet
```

Except for `detect_mtcnn`, each directory represents a different model, and each model will be compiled into a library at compile time.

```shell
detect_yoloface       #yoloface model, used to detect faces
detect_yolo_v2        #yolov2 model, for object detection
detect_yolo_v3        #yolov3 model, for object detection
detect_yolo_v3_tiny   #yolov3-tiny model, for object detection
detect_yolo_v4        #yolov4 model, used to detect faces
```

Here is `detect_yolo_v3` as an example to illustrate the structure of each directory

```shell
$ cd {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3
$ ls
build_vx.sh  include  Makefile  makefile.linux  nn_data  vnn_yolov3.c  yolo_v3.c  yolov3_process.c
```

Main content description:

```
1. build_vx.sh        #Compile script
2. include            #The corresponding header files and all definitions will be placed in this directory
3. Makefile:          #Makefile file
4. makefile.linux     #Make environment configuration file
5. nn_data            #SDK converted nb file of the corresponding model
6. vnn_yolov3.c       #SDK The converted model processing file is mainly used to interface with the nb file
7. yolo_v3.c          #Specify the called nb file, and define all the interfaces of the model call
8. yolov3_process.c   #Mainly defines the pre-processing and post-processing of the model
```

## Application  description

Enter the application source code directory

```shell
$ cd {workspace}/aml_npu_app/detect_library
$ ls
model_code  sample_demo_fb  sample_demo_x11  source_code  yolo_demo_gst_uvc_fb  yolo_demo_mipi_fb  yolo_demo_x11
```

Except `model_code` link to the leastest DDK, every other directory will compile a demo of the upper application

```
1. source_code            #Compile libnn_detect.so. as a bridge to connect different libraries and different application demos
2. sample_demo_fb         #Compile detect_demo_fb_cv3/detect_demo_fb_cv4 of the aml_npu_demo_binaries repository for image recognition under framebuffer
3. sample_demo_x11        #Compile detect_demo_x11_cv3/detect_demo_x11_cv4 of the aml_npu_demo_binaries repository for image recognition under X11
4. yolo_demo_gst_uvc_fb   #Compile the detect_demo_uvc_fb_cv3/detect_demo_uvc_fb_cv4 of the aml_npu_demo_binaries repository for dynamic recognition of the USB camera under the framebuffer
5. yolo_demo_mipi_fb      #Compile detect_demo_mipi_fb_cv3/detect_demo_mipi_fb_cv4 of the aml_npu_demo_binaries repository for dynamic recognition of mipi camera under framebuffer
6. yolo_demo_x11          #Compile detect_demo_x11_cv3/detect_demo_x11_cv4 of the aml_npu_demo_binaries repository for dynamic camera recognition under X11
```

Here is an example of `sample_demo_x11`

```shell
$ cd {workspace}/aml_npu_app/detect_library/sample_demo_x11
$ ls
1080p.bmp  build_vx.sh  detect.h  emb.db  main.cpp  makefile.linux  nn_detect_common.h  nn_detect.h  nn_detect_utils.h  ReadMe.txt  result
```

Here is an explanation of the main files,


```
1. build_vx.sh         #Compile script, the compilation environment specifies `opencv3` and `opencv4`
2. makefile.linux      #Respectively, the opencv3/opencv4 compilation scripts need to specify the makefile.linux file when compiling
3. main.cpp            # Is the main source code of the application demo in the opencv3/opencv4 environment.
4. xxx.h               #The definition related header files that the application layer needs to use
```

# Compile the repository source code


## Compile library

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

## Compile the application

When compiling the application, first compile `libnn_detect.so`. This is one of the dependent libraries for compiling other applications.

### Compile `libnn_detect.so`

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

### Compile application demo

Here is sample_demo_x11 as an example to compile the opencv3 version

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


In the `bin_r_cv3` directory, you will see the generated `detect_demo` file

```shell
$ cd {workspace}/aml_npu_app/detect_library/sample_demo_x11/bin_r_cv3
$ ls
detect_demo  main_cv3.o
```

To compile the opencv4 version, just use the `build_vx_cv4.sh` script to compile.











