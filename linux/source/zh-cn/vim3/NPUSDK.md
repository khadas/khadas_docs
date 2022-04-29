title: NPU SDK使用说明
---

这篇主要介绍如何将不同平台的神经网络模型，转换成可以在NPU上面运行的模型代码和数据。

{% note warn 文档适配NPU驱动版本为6.4.8.7，低于该版本的驱动和示例仓库以及SDK，文档同样适用，但不完全一致。 %}
{% endnote %}

## 获取SDK

```sh
$ mkdir workspace && cd workspace
$ git clone --recursive https://github.com/khadas/aml_npu_sdk.git
```

## SDK目录结构说明

进入SDK目录，

```shell
$ cd {workspace}/aml_npu_sdk
$ ls
acuity-toolkit  android_sdk  Dockerfile  docs  LICENSE  linux_sdk  README.md
```

SDK主要分成几个sdk，转换工具和编译工具以及docs几个部分。

```
acuity-toolkit    #转换工具目录,用于转换AI模型
android_sdk       #Android SDK 目录
docs              #转换相关的文档合集
```

{% note info 注意 %}

由于linux代码全部已经实现了local编译，不再支持hlost编译。因此linux_sdk的内容已经全部移除。

{% endnote %}

## Docs说明

进入Docs目录，`DDK_Application_Guide_0.7.pdf`里面对每个文档都做了说明。文档记录了从转换到集成的一系列过程，以及一些常见的问题。



## 转换工具说明

`acuity-toolkit`就是转换工具目录，

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit
$ ls
bin  demo  demo_hybird  mulity_input_demo  python  ReadMe.txt
```

主要关注的目录是`demo`

```
1. bin                   #转换的使用的各种工具的合集,大部分都是不开源的.
2. demo                  #转换脚本目录,转换AI模型的位置
3. demo_hybird           #混合输入转换工具
4. mulity_input_demo     #多输入demo
4. python                #用于转换python API对应的模型和数据
5. ReadMe.txt            #ReadMe.txt文件说明了如何转换和使用
6. requirements.txt      #转换工具依赖的环境
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

转换完成以后在`xxxx_nbg_unify`目录下就能看到转换出来的代码，这里以自带的模型为例

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit/demo/mobilenet_tf_nbg_unify
$ ls
BUILD   makefile.linux   mobilenettf.vcxproj  vnn_global.h       vnn_mobilenettf.h   vnn_post_process.h  vnn_pre_process.h
main.c  mobilenet_tf.nb  nbg_meta.json        vnn_mobilenettf.c  vnn_post_process.c  vnn_pre_process.c
```

转换参数的设置，请参考`Docs`里面的'Model_Transcoding and Running User Guide.pdf'。

