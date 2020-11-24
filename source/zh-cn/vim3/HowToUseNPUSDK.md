title: SDK使用说明
---

NPU SDK 是转换AI模型和编译`aml_npu_sdk`的工具合集

# 获取SDK

SDK需要通过邮件申请,申请以后会通过一封邮件发到你的邮箱.[申请地址](https://www.khadas.com/npu-toolkit-vim3)

# SDK目录结构说明

进入SDK目录,

```shell
$ cd {workspace}/aml_npu_sdk
$ ls
acuity-toolkit  android_sdk  Dockerfile  docs  LICENSE  linux_sdk  README.md  toolchains
```

SDK主要分成几个sdk,转换工具和编译工具以及docs几个部分.

```
acuity-toolkit    #转换工具目录,用于转换AI模型
android_sdk       #Android SDK 目录
linux_sdk         #linux SDK 目录,主要用于编译`aml_npu_app`
docs              #转换相关的文档合集
toolchains        #编译工具链目录
```

# Docs说明

进入Docs目录,

```shell
$ cd {workspace}/aml_npu_sdk/docs/zh-cn
$ ls
'Android&Linux编译集成指导(0.2).pdf'  'NN工具FAQ (0.1).pdf'  '模型转换运行用户指南(0.6).pdf'
$ cd ../en
$ ls
'AMLNN Convolution Acceleration Tips.pdf'                  'Model_Transcoding and Running User Guide_V0.6.pdf'                              'NN Tool FAQ (0.1).pdf'
'Android&Linux_Compilation and Integration Guide_0.2.pdf'  'Neural Network Layer and Operation Support Guide (01)(ref.v1.13-20200323).pdf'
```

文档记录了从转换到集成的一系列过程,以及一些常见的问题


```
1. 'Android&Linux编译集成指导(0.2).pdf'                                              #Android&&linux编译集成指导,主要说明如何使用转换后的code
2. 'NN工具FAQ (0.1).pdf'                                                             #转换工具FAQ文档,记录了常见的转换的问题
3. '模型转换运行用户指南(0.6).pdf'                                                   #模型转换文档,详细的介绍了如何转换
4. 'AMLNN Convolution Acceleration Tips.pdf                                          #AMLNN卷积加速文档
5. 'Neural Network Layer and Operation Support Guide (01)(ref.v1.13-20200323).pdf'   #支持的网络层和算子文档
```

# 转换工具说明

`acuity-toolkit`就是转换工具目录,

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit
$ ls
bin  conversion_scripts  ReadMe.txt  requirements.txt
```

主要关注的目录是`conversion_scripts`

```
1. bin                   #转换的使用的各种工具的合集,大部分都是不开源的.
2. conversion_scripts    #转换脚本目录,转换AI模型的位置
3. ReadMe.txt            #ReadMe.txt文件说明了如何转换和使用
4. requirements.txt      #转换工具依赖的环境
```

## 依赖安装

转换工具需要的环境依赖包可以直接安装在PC上,或者通过虚拟环境`virtualenv`安装

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit
$ cat requirements.txt
tensorflow==2.0.0
astor==0.8.0
numpy==1.18.0
scipy==1.1.0
Pillow==5.3.0
protobuf==3.11.2
networkx>=1.11
image==1.5.5
lmdb==0.93
onnx==1.6.0
h5py==2.10.0
flatbuffers==1.10
matplotlib==2.1.0
dill==0.2.8.2
ruamel.yaml==0.15.81
ply==3.11
torch==1.2.0
```

其中`tensorflow==2.0.0`可用`tensorflow==2.0.0a0`替代


## 转换脚本使用

转换脚本在`conversion_scripts`目录下,

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit/conversion_scripts
$ ls
0_import_model.sh  1_quantize_model.sh  2_export_case_code.sh  data  dataset.txt  extractoutput.py  inference.sh  mobilenet_tf.data  mobilenet_tf.json  mobilenet_tf.quantize  model  normal_case_demo
```

使用脚本转换AI模型

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit/conversion_scripts
$ bash 0_import_model.sh && bash 1_quantize_model.sh && bash 2_export_case_code.sh 
```

转换完成以后在`nbg_unify_xxxx`目录下就能看到转换出来的代码,这里以自带的模型为例

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit/conversion_scripts/nbg_unify_mobilenet_tf
$ ls
BUILD   makefile.linux   mobilenettf.vcxproj  vnn_global.h       vnn_mobilenettf.h   vnn_post_process.h  vnn_pre_process.h
main.c  mobilenet_tf.nb  nbg_meta.json        vnn_mobilenettf.c  vnn_post_process.c  vnn_pre_process.c
```

转换参数的设置,请参考`Docs`里面的'模型转换运行用户指南(0.6).pdf'

# linux SDK 说明

进入linux SDK目录

```shell
$ cd {workspace}/aml_npu_sdk/linux_sdk
$ ls
demo  linux_sdk  linux_sdk_6.4.0.10  linux_sdk_6.4.2.1  linux_sdk_6.4.3
```

这里可以看到简单的已经转换完成的demo,以及各版本的linux SDK.

```
1. demo                     #已经转换完成的inception模型的可执行文件和源码
2. linux_sdk                #指向最新的SDK
3. linux_sdk_x.x.x.x        #不同版本的linux SDK
```


进入`linux_sdk`,可以看到sdk的主要组成

```shell
$ cd {workspace}/aml_npu_sdk/linux_sdk/linux_sdk
$ ls 
acuity-ovxlib-dev  build  common.target  linux_build_sample.log  makefile.linux.def
```

主要使用的几个部分:

```
1. `acuity-ovxlib-dev`          #主要放置了编译需要的使用的`ovxlib`库
2. `build/sdk/drivers_xx`       #主要放置了编译需要使用的系统库
3. `build/sdk/opencvX`          #主要是编译时使用的opencv库
```










