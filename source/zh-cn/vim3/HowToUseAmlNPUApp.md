title: aml_NPU_app仓库说明以及使用
---

`aml_npu_app仓库`是`aml_npu_demo_binaries`仓库的源码,可编译出`aml_npu_demo_binaries`仓库的库和demo.

# 获取仓库源码

源码仓库存储在gitlab,仓库地址为:[https://gitlab.com/khadas/aml_npu_app](https://gitlab.com/khadas/aml_npu_app)

1. 通过git命令clone到本地

```shell
$ cd {workspace}
$ git clone https://gitlab.com/khadas/aml_npu_app
```

2. 直接下载压缩包

不使用git的用户也可以在仓库首页直接下载压缩包,再解压到板子上.

建议通过git命令clone,后续代码有更新时,可以直接`pull`

# 仓库源码说明

## 结构说明

```shell
$ cd {workspace}/aml_npu_app
$ ls
DDK_6.3.2  DDK_6.3.2.3  DDK_6.3.2.5  DDK_6.3.3.4  DDK_6.4.0.3  DDK_6.4.3  detect_library  LICENSE  NN_SLT
```

```
1. DDK_xxx         #不同版本的库源码
2. detect_library  #应用层源码. detect_library/model_code则指向了最新的版本的DDK
3. NN_SLT          #DnCnn模型的单独源码目录(不再维护)
4. LICENSE         #LICENSE文件
```

## 库说明

进入库源码的目录,也就是DDK的目录.

```shell
$ cd {workspace}/aml_npu_app/detect_library/model_code
$ ls
detect_mtcnn  detect_yoloface  detect_yolo_v2  detect_yolo_v3  detect_yolo_v3_tiny  detect_yolo_v4  facenet
```

除了`detect_mtcnn`以外每一个目录都代表了一个不同的模型,每一个模型在编译时都会被编译成一个库.

```shell
detect_yoloface       #yoloface模型,用于检测人脸
detect_yolo_v2        #yolov2模型,用于物体检测
detect_yolo_v3        #yolov3模型,用于物体检测
detect_yolo_v3_tiny   #yolov3-tiny模型,用于物体检测
detect_yolo_v4        #yolov4模型,用于物体检测
```

这里以`detect_yolo_v3`为例,说明每个目录的结构

```shell
$ cd {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3
$ ls
build_vx.sh  include  Makefile  makefile.linux  nn_data  vnn_yolov3.c  yolo_v3.c  yolov3_process.c
```

主要内容说明:

```
1. build_vx.sh        #编译脚本
2. include            #相应的头文件以及所有的定义都会放置在这个目录下
3. Makefile:          #Makefile文件
4. makefile.linux     #Make时的环境配置文件
5. nn_data            #SDK转换出来的对应模型的nb文件
6. vnn_yolov3.c       #SDK转换出来的模型处理文件,主要使用到其中与nb文件对接的接口
7. yolo_v3.c          #指定调用的nb文件,同时定义了模型的调用的所有接口
8. yolov3_process.c   #主要定义了模型的前处理和后处理
```

## 应用层说明

进入应用层源码目录

```shell
$ cd {workspace}/aml_npu_app/detect_library
$ ls
model_code  sample_demo_fb  sample_demo_x11  source_code  yolo_demo_gst_uvc_fb  yolo_demo_mipi_fb  yolo_demo_x11
```

除了`model_code`指向最新的DDK以外,其他的目录,每一个都会编译出一个上层应用的demo

```
1. source_code            #编译出libnn_detect.so.作为桥梁,衔接不同的库和不同的应用demo
2. sample_demo_fb         #编译出aml_npu_demo_binaries仓库的detect_demo_fb_cv3/detect_demo_fb_cv4,用于framebuffer下的图片识别
3. sample_demo_x11        #编译出aml_npu_demo_binaries仓库的detect_demo_x11_cv3/detect_demo_x11_cv4,用于X11下的图片识别
4. yolo_demo_gst_uvc_fb   #编译出aml_npu_demo_binaries仓库的detect_demo_uvc_fb_cv3/detect_demo_uvc_fb_cv4,用于framebuffer下的USB摄像头的动态识别
5. yolo_demo_mipi_fb      #编译出aml_npu_demo_binaries仓库的detect_demo_mipi_fb_cv3/detect_demo_mipi_fb_cv4,用于framebuffer下的mipi摄像头动态识别
6. yolo_demo_x11          #编译出aml_npu_demo_binaries仓库的detect_demo_x11_cv3/detect_demo_x11_cv4,用于X11下的摄像头动态识别
```

这里以`sample_demo_x11`为例

```shell
$ cd {workspace}/aml_npu_app/detect_library/sample_demo_x11
$ ls
1080p.bmp  build_vx_cv3.sh  build_vx_cv4.sh  detect.h  emb.db  main_cv3.cpp  main_cv4.cpp  makefile_cv3.linux  makefile_cv4.linux  nn_detect_common.h  nn_detect.h  nn_detect_utils.h  ReadMe.txt  result
```

这里对主要的文件做说明

```
1. build_vx_cv3.sh/build_vx_cv4.sh         #编译脚本,编译环境分别指定了`opencv3`和`opencv4`
2. makefile_cv3.linux/makefile_cv4.linux   #分别是opencv3/opencv4编译脚本在编译时需要指定的makefile.linux文件
3. main_cv3.cpp/main_cv4.cpp               #分别是opencv3/opencv4环境下的应用demo的主要源码.
4. xxx.h                                   #应用层需要使用到的定义相关的头文件
```

# 编译仓库源码


## 编译库

编译库,只要进入到相应的库的目录编译即可.这里以yolov3为例

```shell
$ cd {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3
$ ./build_vx.sh {path/to}/aml_npu_sdk/linux_sdk/linux_sdk
/home/yan/data/git/npu/aml_npu_sdk/linux_sdk/linux_sdk/common.target:85: warning: overriding recipe for target 'bin_r/libnn_yolo_v3.so'
/home/yan/data/git/npu/aml_npu_sdk/linux_sdk/linux_sdk/common.target:64: warning: ignoring old recipe for target 'bin_r/libnn_yolo_v3.so'
  COMPILE /home/yan/data/git/npu/aml_npu_app/DDK_6.3.3.4/detect_library/model_code/detect_yolo_v3/yolov3_process.c
  COMPILE /home/yan/data/git/npu/aml_npu_app/DDK_6.3.3.4/detect_library/model_code/detect_yolo_v3/vnn_yolov3.c
vnn_yolov3.c: In function ‘vnn_CreateYolov3’:
vnn_yolov3.c:145:29: warning: unused variable ‘data’ [-Wunused-variable]
     uint8_t *               data;
                             ^~~~
At top level:
vnn_yolov3.c:94:17: warning: ‘load_data’ defined but not used [-Wunused-function]
 static uint8_t* load_data
                 ^~~~~~~~~
  COMPILE /home/yan/data/git/npu/aml_npu_app/DDK_6.3.3.4/detect_library/model_code/detect_yolo_v3/yolo_v3.c
  LINK    libnn_yolo_v3.so
/home/yan/data/git/npu/aml_npu_sdk/linux_sdk/linux_sdk/common.target:85: warning: overriding recipe for target 'bin_r/libnn_yolo_v3.so'
/home/yan/data/git/npu/aml_npu_sdk/linux_sdk/linux_sdk/common.target:64: warning: ignoring old recipe for target 'bin_r/libnn_yolo_v3.so'
make: Nothing to be done for 'all'.
```

在输出目录`bin_r`下就能看到生成的库

```shell
$ cd {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3/bin_r
$ ls
libnn_yolo_v3.so  vnn_yolov3.o  yolo_v3.o  yolov3_process.o
```

## 编译应用

编译应用时,要先编译`libnn_detect.so`.这是编译其他应用的依赖库之一.

### 编译`libnn_detect.so`

进入`source_code`目录,编译`libnn_detect.so`

```shell
$ cd {workspace}/aml_npu_app/detect_library/source_code
$ ./build_vx.sh {path/to}/aml_npu_sdk/linux_sdk/linux_sdk
/home/yan/data/git/npu/aml_npu_sdk/linux_sdk/linux_sdk/common.target:85: warning: overriding recipe for target 'bin_r/libnn_detect.so'
/home/yan/data/git/npu/aml_npu_sdk/linux_sdk/linux_sdk/common.target:64: warning: ignoring old recipe for target 'bin_r/libnn_detect.so'
  COMPILE /home/yan/data/git/npu/aml_npu_app/detect_library/source_code/detect.c
  COMPILE /home/yan/data/git/npu/aml_npu_app/detect_library/source_code/detect_log.c
  LINK    libnn_detect.so
/home/yan/data/git/npu/aml_npu_sdk/linux_sdk/linux_sdk/common.target:85: warning: overriding recipe for target 'bin_r/libnn_detect.so'
/home/yan/data/git/npu/aml_npu_sdk/linux_sdk/linux_sdk/common.target:64: warning: ignoring old recipe for target 'bin_r/libnn_detect.so'
make: Nothing to be done for 'all'.
```

在`bin_r`目录下,就会生成`libnn_detect.so`

```shell
$ cd {workspace}/aml_npu_app/detect_library/source_code/bin_r
$ ls
detect_log.o  detect.o  libnn_detect.so
```

### 编译应用demo

这里以sample_demo_x11为例,编译opencv3版本

```shell
$ cd {workspace}/aml_npu_app/detect_library/sample_demo_x11
$ ./build_vx_cv3.sh {path/to}/aml_npu_sdk/linux_sdk/linux_sdk
  COMPILE /home/yan/data/git/npu/aml_npu_app/detect_library/sample_demo_x11/main_cv3.cpp
main_cv3.cpp: In function ‘int init_fb()’:
main_cv3.cpp:436:11: warning: unused variable ‘i’ [-Wunused-variable]
  long int i;
           ^
main_cv3.cpp: At global scope:
main_cv3.cpp:434:12: warning: ‘int init_fb()’ defined but not used [-Wunused-function]
 static int init_fb(void)
            ^~~~~~~
  LINK    detect_demo
make: Nothing to be done for 'all'.
```

在`bin_r_cv3`目录下,就会看到生成的`detect_demo`文件

```shell
$ cd {workspace}/aml_npu_app/detect_library/sample_demo_x11/bin_r_cv3
$ ls
detect_demo  main_cv3.o
```

编译opencv4版本只要使用`build_vx_cv4.sh`脚本编译即可.












