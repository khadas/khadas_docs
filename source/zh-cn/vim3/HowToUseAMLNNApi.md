title: 如何编译使用Amlogic NN Api模板
---

Amlogic NN Api是amlogic官方推出的一套NPU Api.这篇文档将介绍如何编译并使用khadas基于这套Api做的demo.

## API文档

关于API的详细资料可参考文档`docs/zh-cn/DDK_6.4.3_SDK_V1.6 API 描述.pdf`

## 编译

### 获取demo源码

`aml_npu_nnsdk_app`仓库的源码开放在khadas官方的gitlab上

```shell
$ mkdir workspace
$ cd ${workspace}
$ git clone https://gitlab.com/khadas/tengine_khadas_app.git
```

### 源码结构介绍

源码仓库里面目前是3个demo:

1. body_pose:       检测人体18点姿态,仅支持图片识别
2. image_classify:  物体识别分类,仅支持图片识别
3. person_detect:   人体检测,包含图片和摄像头两种方式

每个目录下都有编译脚本,makefile文件以及源码,以person_detect为例,

```shell
$ cd ${workspace}/aml_npu_nnsdk_app/person_detect_640x384
$ ls
build-cv3.sh  include  makefile-cv3.linux  person_detect_640x384_camera.cpp  person_detect_640x384_picture.cpp  README.cn.md  README.md
```

1. build-cv3.sh : 编译脚本
2. makefile-cv3.linux : 编译的makefile文件
3. person_detect_640x384_camera.cpp: 摄像头识别源码
4. person_detect_640x384_picture.cpp: 图片识别源码

### 编译方法

获取SDK请参考[获取SDK](/zh-cn/vim3/HowToUseNPUSDK#获取SDK)

这里同样以person_detect为例,

```shell
$ cd ${workspace}/aml_npu_nnsdk_app/person_detect_640x384
$ ./build-cv3.sh /path/to/aml_npu_sdk/linux_sdk/linux_sdk
  COMPILE /home/yan/data/git/npu/aml_npu_nnsdk_app/person_detect_640x384/person_detect_640x384_picture.cpp
  COMPILE /home/yan/data/git/npu/aml_npu_nnsdk_app/person_detect_640x384/person_detect_640x384_camera.cpp
```

编译会生成生成的文件在`cv3_output`里面,
```shell
$ cd ${workspace}/aml_npu_nnsdk_app/person_detect_640x384/cv3_output
$ ls
person_detect_640x384_camera  person_detect_640x384_camera.o  person_detect_640x384_picture  person_detect_640x384_picture.o
```

其中`person_detect_640x384_camera`和`person_detect_640x384_picture`就是生成的可执行文件


## 运行


这里仍然以`person_detect`为例

1. 获取nb文件[https://github.com/khadas/AML_NN_SDK](https://github.com/khadas/AML_NN_SDK),`person_detect`对应的nb文件是:

```shell
$ mkdir board_space
$ cd ${board_space}
$ wget https://github.com/khadas/AML_NN_SDK/raw/master/Model/DDK6.4.4.3/88/person_detect_88.nb  [VIM3]
$ wget https://github.com/khadas/AML_NN_SDK/raw/master/Model/DDK6.4.4.3/99/person_detect_99.nb  [VIM3L]
```

2. 将PC上编译生成的可执行文件复制到板子上

3. 运行

识别图片


```shell
$ /path/to/person_detect_640x384_picture ${board_space}/person_detect_88.nb /path/to/picture  [VIM3] 
$ /path/to/person_detect_640x384_picture ${board_space}/person_detect_99.nb /path/to/picture  [VIM3L] 

```

识别摄像头

```shell
$ /path/to/person_detect_640x384_camera ${board_space}/person_detect_88.nb /dev/videoX   [VIM3]
$ /path/to/person_detect_640x384_camera ${board_space}/person_detect_99.nb /dev/videoX   [VIM3L]
```

**注意** :

这只是一个简单的模板仓库,详细的api介绍请参考文档.

