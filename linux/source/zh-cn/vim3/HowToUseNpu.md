title: 如何使用NPU
---

## 下载NPU相关工具包SDK

请访问[这里](https://www.khadas.com/npu-toolkit-vim3)来获取SDK下载链接。

下载NPU相关SDK到某个目录，如：`~/npu`


目录说明：

* docs：模型转换说明文档
* acuity-toolkit：模型转换相关工具
* linux_sdk：Linux SDK
* android_sdk：Android SDK

## 环境搭建

要使用模型转换工具必须要先安装[TensorFlow](https://www.tensorflow.org/)等工具。

主机环境要求：

* `Ubuntu 16.04 X64`
* `Ubuntu 18.04 X64`

```
$ sudo apt update
$ sudo apt install python3 python3-pip python3-virtualenv
$ cd ~/npu/aml_npu_sdk/acuity-toolkit
$ for req in $(cat requirements.txt); do pip3 install $req; done
```


{% note info 注意 %}
默认安装的TensorFlow为CPU版本，如果你的电脑有英伟达GPU，你也可以选择安装[GPU版本](https://www.tensorflow.org/install/gpu)来加速模型转换速度。
{% endnote %}

验证TensorFlow安装：
```
nick@Nick:~/npu/aml_npu_sdk/acuity-toolkit$ python3
Python 3.5.2 (default, Jul 10 2019, 11:58:48) 
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import tensorflow as tf
>>> sess = tf.Session()
>>> hello = tf.constant("Hello World")
>>> print(sess.run(hello))
b'Hello World'
```

如果看到`Hello World`打印说明`TensorFlow`安装成功。

## 模型转换

要想把训练好的模型部署在VIM3上运行，需要进行模型转换，当前只支持 `Caffe/Tensorflow/Tflite/Darknet/Onnx/Pytroch/keras` 模型。

SDK里面自带了一个`TensorFlow`模型转换的示例脚本。执行如下脚本进行模型转换：

```
$ cd ~/npu/aml_npu_sdk/acuity-toolkit/conversion_scripts
$ ./0_import_model.sh
$ ./1_quantize_model.sh
$ ./2_export_case_code.sh
```
转换成功后会生成case代码在目录`nbg_unify_model-name`如：`nbg_unify_inception_v3`下，这个就是我们最终需要的代码，可以编译后放在VIM3上运行。

```
$ cd nbg_unify_inception_v3
$ ll
drwxrwxr-x 2 nick nick     4096 9月  20 15:16 ./
drwxrwxr-x 5 nick nick     4096 9月  20 15:16 ../
-rw-rw-r-- 1 nick nick      577 9月  20 15:16 BUILD
-rw-rw-r-- 1 nick nick    37763 9月  20 15:16 .cproject
-rw-rw-r-- 1 nick nick 28807168 9月  20 15:16 inception_v3.nb
-rw-rw-r-- 1 nick nick    12691 9月  20 15:16 inceptionv3.vcxproj
-rw-rw-r-- 1 nick nick     5869 9月  20 15:16 main.c
-rw-rw-r-- 1 nick nick     2000 9月  20 15:16 makefile.linux
-rw-rw-r-- 1 nick nick     2194 9月  20 15:16 .project
-rw-rw-r-- 1 nick nick      358 9月  20 15:16 vnn_global.h
-rw-rw-r-- 1 nick nick     7191 9月  20 15:16 vnn_inceptionv3.c
-rw-rw-r-- 1 nick nick      985 9月  20 15:16 vnn_inceptionv3.h
-rw-rw-r-- 1 nick nick     3566 9月  20 15:16 vnn_post_process.c
-rw-rw-r-- 1 nick nick      464 9月  20 15:16 vnn_post_process.h
-rw-rw-r-- 1 nick nick    20385 9月  20 15:16 vnn_pre_process.c
-rw-rw-r-- 1 nick nick     1294 9月  20 15:16 vnn_pre_process.h
```

{% note info 注意 %}
如果你要转换自己的模型，那么需要修改脚本里面相应文件的路径和参数。
{% endnote %}

以上是一个模型转换的示例脚本，更多详细信息请参考模型转换文档`docs/zh-cn/模型转换运行用户指南(0.5).pdf`。

## 编译转换好的case代码

### 基于Linux运行

要想在VIM3上运行这个模型，需要编译上述转换好的case代码。

* 从示例demo中拷贝编译脚本到转换的case代码目录

```
$ cd ~/npu/aml_npu_sdk/acuity-toolkit/conversion_scripts/nbg_unify_inception_v3
$ cp ~/npu/aml_npu_sdk/linux_sdk/demo/inceptionv3/build_vx.sh .
```

* 编译case代码

```
$ ./build_vx.sh ~/npu/aml_npu_sdk/linux_sdk/linux_sdk
```

*说明： 编译脚本用法： **./build_vx.sh linux-SDK-directory**。*

编译成功后生成的可执行文件在目录`bin_r`下：

```
$ ll bin_r/
total 172
drwxrwxr-x 2 nick nick   4096 9月  20 15:24 ./
drwxrwxr-x 3 nick nick   4096 9月  20 15:24 ../
-rwxrwxr-x 1 nick nick 129568 9月  20 15:24 inceptionv3*
-rw-rw-r-- 1 nick nick   6272 9月  20 15:24 main.o
-rw-rw-r-- 1 nick nick   3888 9月  20 15:24 vnn_inceptionv3.o
-rw-rw-r-- 1 nick nick   3496 9月  20 15:24 vnn_post_process.o
-rw-rw-r-- 1 nick nick  16624 9月  20 15:24 vnn_pre_process.o
```

`inceptionv3`即为编译好的可执行文件。

* 在VIM3上运行

固件版本需要[V190830](https://dl.khadas.com/Firmware/VIM3/Ubuntu/EMMC/)及以上版本，并更新至最新系统。

```
khadas@Khadas:~$ sudo apt update
khadas@Khadas:~$ sudo apt full-upgrade
khadas@Khadas:~$ sudo do-fenix-full-upgrade
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```

拷贝上面编译生成的可执行文件`inceptionv3`以及模型文件`inception_v3.nb`到VIM3上，同时拷贝要识别的图片（尺寸为299x299的jpeg图片）到VIM3上并运行。

*说明：示例图片可以在目录`linux_sdk/demo/inceptionv3/bin_demo`下面找到。*

```
root@Khadas:~/inceptionv3# ./inceptionv3 inception_v3.nb goldfish_299x299.jpg 
D [setup_node:367]Setup node id[0] uid[0] op[NBG]
D [print_tensor:129]in : id[   1] shape[ 3, 299, 299, 1   ] fmt[u8 ] qnt[ASM zp=137, scale=0.007292]
D [print_tensor:129]out: id[   0] shape[ 1001, 1          ] fmt[f16] qnt[NONE]
D [optimize_node:311]Backward optimize neural network
D [optimize_node:318]Forward optimize neural network
I [compute_node:260]Create vx node
Create Neural Network: 40ms or 40037us
I [vsi_nn_PrintGraph:1308]Graph:
I [vsi_nn_PrintGraph:1309]***************** Tensors ******************
D [print_tensor:137]id[   0] shape[ 1001, 1          ] fmt[f16] qnt[NONE]
D [print_tensor:137]id[   1] shape[ 3, 299, 299, 1   ] fmt[u8 ] qnt[ASM zp=137, scale=0.007292]
I [vsi_nn_PrintGraph:1318]***************** Nodes ******************
I [vsi_nn_PrintNode:156](             NBG)node[0] [in: 1 ], [out: 0 ] [33f7cec0]
I [vsi_nn_PrintGraph:1327]******************************************
I [vsi_nn_ConvertTensorToData:732]Create 268203 data.
Verify...
Verify Graph: 1ms or 1562us
Start run graph [1] times...
Run the 1 time: 27ms or 27960us
vxProcessGraph execution time:
Total   27ms or 27973us
Average 27.97ms or 27973.00us
I [vsi_nn_ConvertTensorToData:732]Create 2002 data.
 --- Top5 ---
  2: 0.826660
795: 0.008255
974: 0.004066
393: 0.002390
408: 0.002285
I [vsi_nn_ConvertTensorToData:732]Create 2002 data.
```

这个demo只是做了top5处理，可以看到识别的概率最大为索引`2`的`0.826660`，对比labels `linux_sdk/inceptionv3_demo/bin_demo/imagenet_slim_labels.txt`可以发现识别出来是`金鱼`，结果正确。

### 基于Android运行
参考Android&Linux编译集成指导`docs/zh-cn/Android&Linux编译集成指导(0.2).pdf` Android相关部分。

## 写在最后

以上只是简单说明了模型转换以及case代码编译运行，更多详细信息请参考模型转换文档`docs/zh-cn/模型转换运行用户指南(0.5).pdf`。
