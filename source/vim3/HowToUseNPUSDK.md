title: SDK instructions
---

NPU SDK is a collection of tools for converting AI models and compiling `aml_npu_sdk`

# Get SDK

The SDK needs to be applied for by email, and an email will be sent to your mailbox after the application. [application address](https://www.khadas.com/npu-toolkit-vim3)

# SDK directory structure description

Enter the SDK directory,

```shell
$ cd {workspace}/aml_npu_sdk
$ ls
acuity-toolkit  android_sdk  Dockerfile  docs  LICENSE  linux_sdk  README.md  toolchains
```

The SDK is mainly divided into several `SDK`, `conversion tools` and `compilation tools`, and `docs`.

```
acuity-toolkit    #Conversion tool , used to convert AI models
android_sdk       #Android SDK 
linux_sdk         #linux SDK ,use for compiling `aml_npu_app`
docs              #Conversion related documents collection
toolchains        #Compile toolchain directory
```

# Docs description

entre Docs directory,

```shell
$ cd {workspace}/aml_npu_sdk/docs/en
$ ls
'AMLNN Convolution Acceleration Tips.pdf'                  'Model_Transcoding and Running User Guide_V0.6.pdf'                              'NN Tool FAQ (0.1).pdf'
'Android&Linux_Compilation and Integration Guide_0.2.pdf'  'Neural Network Layer and Operation Support Guide (01)(ref.v1.13-20200323).pdf'
```

The document records a series of processes from conversion to integration, as well as some common problems

```
1. 'Android&Linux_Compilation and Integration Guide_0.2.pdf'                         #Android&&linux compilation and integration guide, mainly explaining how to use the converted code
2. 'NN Tool FAQ (0.1).pdf'                                                           #Conversion tool FAQ document, which records common conversion problems
3. 'Model_Transcoding and Running User Guide_V0.6.pdf'                               #Model conversion document, a detailed description of how to convert
4. 'AMLNN Convolution Acceleration Tips.pdf                                          #AMLNN convolution acceleration docs
5. 'Neural Network Layer and Operation Support Guide (01)(ref.v1.13-20200323).pdf'   #Supported network layer and operator documentation
```

# Conversion tool description

`acuity-toolkit` is the conversion tool directory,

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit
$ ls
bin  conversion_scripts  ReadMe.txt  requirements.txt
```

The main directory of interest is `conversion_scripts`

```
1. bin                   #Conversion is a collection of various tools used, most of which are not open source.
2. conversion_scripts    #Conversion script directory, convert AI model location
3. ReadMe.txt            #ReadMe.txt file explains how to convert and use
4. requirements.txt      #Conversion tool dependent environment
```

## Dependent installation

The environment dependency package required by the conversion tool can be installed directly on the PC or installed through the virtual environment `virtualenv`

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

Among them, `tensorflow==2.0.0` can be replaced by `tensorflow==2.0.0a0`

## Conversion script usage

The conversion script is in the `conversion_scripts` directory,

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit/conversion_scripts
$ ls
0_import_model.sh  1_quantize_model.sh  2_export_case_code.sh  data  dataset.txt  extractoutput.py  inference.sh  mobilenet_tf.data  mobilenet_tf.json  mobilenet_tf.quantize  model  normal_case_demo
```

Use scripts to convert AI models

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit/conversion_scripts
$ bash 0_import_model.sh && bash 1_quantize_model.sh && bash 2_export_case_code.sh 
```

After the conversion is completed, you can see the converted code in the `nbg_unify_xxxx` directory, here is the built-in model as an example

```shell
$ cd {workspace}/aml_npu_sdk/acuity-toolkit/conversion_scripts/nbg_unify_mobilenet_tf
$ ls
BUILD   makefile.linux   mobilenettf.vcxproj  vnn_global.h       vnn_mobilenettf.h   vnn_post_process.h  vnn_pre_process.h
main.c  mobilenet_tf.nb  nbg_meta.json        vnn_mobilenettf.c  vnn_post_process.c  vnn_pre_process.c
```

For the setting of conversion parameters, please refer to'Model Conversion Operation User Guide (0.6).pdf' in `Docs`

# linux SDK instructions

Enter the linux SDK directory

```shell
$ cd {workspace}/aml_npu_sdk/linux_sdk
$ ls
demo  linux_sdk  linux_sdk_6.4.0.10  linux_sdk_6.4.2.1  linux_sdk_6.4.3
```

Here you can see a simple demo that has been converted, and various versions of the linux SDK.

```
1. demo                     #The executable file and source code of the converted inception model
2. linux_sdk                #Link to the latest SDK
3. linux_sdk_x.x.x.x        #Different versions of linux SDK
```

Enter `linux_sdk`, you can see the main components of the sdk

```shell
$ cd {workspace}/aml_npu_sdk/linux_sdk/linux_sdk
$ ls 
acuity-ovxlib-dev  build  common.target  linux_build_sample.log  makefile.linux.def
```

Mainly used parts:

```
1. `acuity-ovxlib-dev`          #Mainly placed the `ovxlib` library needed for compilation
2. `build/sdk/drivers_xx`       #Mainly placed the system libraries needed for compilation
3. `build/sdk/opencvX`          #Mainly the opencv library used during compilation
```










