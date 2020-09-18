title: 如何使用Khadas NPU预编译demo
---

# NPU预编译demo仓库

`aml_npu_demo_binaries仓库`是可执行文件仓库,此仓库用于在**khadas VIM3/VIM3L上运行NPU demo**使用

## 仓库信息

* 仓库地址: [gitlab.com/khadas/aml_npu_demo_binaries](https://gitlab.com/khadas/aml_npu_demo_binaries)

* 仓库结构

    1. detect_demo/detect_demo_khadas : 这两个demo是使用摄像头识别物体进行分类的demo
    2. detect_demo_picture : 此demo是识别分类多物体图片的demo
    3. inceptionv3 : 此demo是识别图片并做出top5预测的demo


## 如何使用

### 准备

1. **请在VIM3上运行ubuntu固件,并通过`sudo apt update && sudo apt upgrade`升级系统**

2. `detect_demo_picture`/`detect_demo`/`detect_demo_khadas`需要在`framebuffer`模式下使用,使用`Ctrl`+`Alt`+`F1`切换到`framebuffer`模式

3. clone仓库到VIM3/VIM3L上.

```shell
$ cd ${workspace}
$ git clone https://gitlab.com/khadas/aml_npu_demo_binaries
```

### 使用`detect_demo`或`detect_demo_khadas`或`detect_demo_picture`

安装demo:

```shell
$ cd ${workspace}/aml_npu_demo_binaries
$ sudo ./INSTALL
```
安装以后安装`README`文件的指示就可以运行demo了

`detect_demo_uvc`是USB摄像头的运行文件
`detect_demo_mipi`是mipi摄像头的运行文件

卸载demo:

```shell
$ sudo ./UNINSTALL
```

### 使用inceptionv3

如果是VIM3

```shell
$ cd ${workspace}/aml_npu_demo_binaries/inceptionv3/vim3
```

如果是VIM3L

```shell
$ cd ${workspace}/aml_npu_demo_binaries/inceptionv3/vim3l
```

使用demo

```shell
$ ./inceptionv3 inception_v3.nb /path/to/picture
```

**图片格式需要使用jpg格式**

# aml_npu_app仓库

aml_npu_app仓库是用来编译demo的仓库,**此仓库在PC上运行**

## 仓库信息

* 仓库地址: [gitlab.com/khadas/aml_npu_app](https://gitlab.com/khadas/aml_npu_app) 

* 仓库结构

    1. `DDK_6.3.2`/`DDK_6.3.2.3`/`DDK_6.3.2.5`/`DDK_6.3.3.4`是不同版本的库文件的源码
    2. `detect_library/model_code` 指向最新版本的库文件源码
    3. `detect_library/source_code`生成detect.so
    4. `detect_library/yolo_demo_gst_uvc`或者`detect_library/yolo_demo_mipi`生成USB或者MIPI的demo
    5. `detect_library/sample_demo`生成识别图片的demo


## 如何使用

### 准备工作

1. [申请sdk](https://www.khadas.com/npu-toolkit-vim3),并解压.

2. clone仓库到你的PC上

```shell
$ cd ${workspace}
$ git clone https://gitlab.com/khadas/aml_npu_app
```

### 编译

进入你需要编译的位置,这里以`yolov3`为例

```shell
$ cd ${workspace}
$ cd aml_npu_app/detect_library/model_code/detect_yolo_v3
$ ./build_vx.sh /path/to/sdk/linux_sdk/linux_sdk
```

编译完以后,在`bin_r`目录下的文件就是编译生成的文件

```shell
$ ls bin_r/
libnn_yolo_v3.so  vnn_yolov3.o  yolo_v3.o  yolov3_process.o
```

