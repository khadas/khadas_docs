title: Amlogic NN APi示例使用说明
---

Amlogic NN Api是amlogic官方推出的一套NPU Api，这篇文档将介绍如何编译并使用khadas基于这套Api做的demo。

{% note warn 提示 %}
仅支持opencv4
{% endnote %}

## 安装Opencv4

```shell
$ sudo apt install libopencv-dev python3-opencv
```


## API文档

关于API的详细资料可参考文档`docs/zh-cn/DDK_6.4.3_SDK_V1.6 API 描述.pdf`

## 编译

### 获取demo源码

`aml_npu_nnsdk_app`仓库的源码开放在khadas官方的gitlab上

```shell
$ mkdir workspace
$ cd ${workspace}
$ git clone https://gitlab.com/khadas/aml_npu_nnsdk_app
```

### 源码结构介绍



每个目录下都有编译脚本，makefile文件以及源码,

```shell
$ cd ${workspace}/aml_npu_nnsdk_app/image_classify_224x224
$ ls
build-cv4.sh  cv3_output  image_classify_224x224.cpp  include  makefile-cv4.linux  README.cn.md  README.md
```

1. build-cv4.sh : Compiled script
2. makefile-cv4.linux : 编译的makefile文件
3. image_classify_224x224.cpp: 图片识别源码

### 编译方法

获取SDK请参考[获取SDK](/linux/zh-cn/vim3/HowToUseNPUSDK#获取SDK)

这里同样以image_classify为例，

```shell
$ cd ${workspace}/aml_npu_nnsdk_app/image_classify_224x224
$ ./build-cv4.sh
  COMPILE /home/khadas/aml_npu_nnsdk_app/image_classify_224x224/image_classify_224x224.cpp
```

编译会生成生成的文件在`cv3_output`里面，
```shell
$ cd {workspace}/aml_npu_nnsdk_app/person_detect_640x384/cv4_output
$ ls
image_classify_224x224  image_classify_224x224.o
```

其中`image_classify_224x224`就是生成的可执行文件


## 运行


这里仍然以`person_detect`为例，

1. 获取nb文件[https://github.com/khadas/AML_NN_SDK](https://github.com/khadas/AML_NN_SDK)，`image_classify`对应的nb文件是:

```shell
$ mkdir board_space
$ cd ${board_space}
$ wget https://github.com/khadas/AML_NN_SDK/raw/master/Model/DDK6.4.4.3/88/image_classify_88.nb  [VIM3]
$ wget https://github.com/khadas/AML_NN_SDK/raw/master/Model/DDK6.4.4.3/99/image_classify_88.nb  [VIM3L]
```

2. 将PC上编译生成的可执行文件复制到板子上

3. 运行

```shell
$ /path/to/person_detect_640x384_picture ${board_space}/image_classify_88.nb /path/to/picture  [VIM3]
$ /path/to/person_detect_640x384_picture ${board_space}/image_classify_99.nb /path/to/picture  [VIM3L]

```
{% note info 注意 %}
这只是一个简单的模板仓库，详细的api介绍请参考文档。
{% endnote %}

