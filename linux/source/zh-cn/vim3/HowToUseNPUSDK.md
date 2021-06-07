title: SDK使用说明
---

NPU SDK 是转换AI模型和编译`aml_npu_sdk`的工具合集。

## 获取SDK

SDK需要通过邮件申请，申请以后会通过一封邮件发到你的邮箱。[申请地址](https://www.khadas.com/npu-toolkit-vim3)

## SDK目录结构说明

进入SDK目录，

```shell
$ cd {workspace}/aml_npu_sdk
$ ls
acuity-toolkit  android_sdk  Dockerfile  docs  LICENSE  README.md
```

SDK主要分成几个sdk，转换工具和编译工具以及docs几个部分。

```
acuity-toolkit    #转换工具目录,用于转换AI模型
android_sdk       #Android SDK 目录
docs              #转换相关的文档合集
```

## Docs说明

进入Docs目录，

```shell
$ cd {workspace}/aml_npu_sdk/docs/zh-cn
$ ls
'Android&Linux编译集成指导(0.2).pdf'  'NN工具FAQ (0.1).pdf'  '模型转换运行用户指南(0.6).pdf'
$ cd ../en
$ ls
'AMLNN Convolution Acceleration Tips.pdf'                  'Model_Transcoding and Running User Guide_V0.6.pdf'                              'NN Tool FAQ (0.1).pdf'
'Android&Linux_Compilation and Integration Guide_0.2.pdf'  'Neural Network Layer and Operation Support Guide (01)(ref.v1.13-20200323).pdf'
```

{% note info Linux SDK %}
所有的demo已经迁移到板子上编译，需要的库也预转在板子上，不再需要Linux SDK
{% endnote %}

文档记录了从转换到集成的一系列过程，以及一些常见的问题


```
1. 'Android&Linux编译集成指导.pdf'                              #Android&&linux编译集成指导,主要说明如何使用转换后的code
2. 'NN工具FAQ.pdf'                                              #转换工具FAQ文档,记录了常见的转换的问题
3. '模型转换运行用户指南.pdf'                                   #模型转换文档,详细的介绍了如何转换
4. 'AMLNN Convolution Acceleration Tips.pdf                     #AMLNN卷积加速文档
5. 'Neural Network Layer and Operation Support Guide.pdf'        #支持的网络层和算子文档
```

## 转换工具说明

`acuity-toolkit`就是转换工具目录，

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit
$ ls
bin  demo  ReadMe.txt  requirements.txt
```

主要关注的目录是`demo`

```
1. bin                   #转换的使用的各种工具的合集,大部分都是不开源的.
2. demo    #转换脚本目录,转换AI模型的位置
3. ReadMe.txt            #ReadMe.txt文件说明了如何转换和使用
4. requirements.txt      #转换工具依赖的环境
```

### 依赖安装

转换工具需要的环境依赖包可以直接安装在PC上，或者通过虚拟环境`virtualenv`安装

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


### 转换脚本使用

转换脚本在`demo`目录下，

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit/demo
$ ls
0_import_model.sh  1_quantize_model.sh  2_export_case_code.sh  data  extractoutput.py  inference.sh  model
```

使用脚本转换AI模型

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit/demo
$ bash 0_import_model.sh && bash 1_quantize_model.sh && bash 2_export_case_code.sh 
```

转换完成以后在`nbg_unify_xxxx`目录下就能看到转换出来的代码，这里以自带的模型为例

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit/demo/nbg_unify_mobilenet_tf
$ ls
BUILD   makefile.linux   mobilenettf.vcxproj  vnn_global.h       vnn_mobilenettf.h   vnn_post_process.h  vnn_pre_process.h
main.c  mobilenet_tf.nb  nbg_meta.json        vnn_mobilenettf.c  vnn_post_process.c  vnn_pre_process.c
```

转换参数的设置，请参考`Docs`里面的'模型转换运行用户指南.pdf'。

