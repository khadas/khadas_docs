title: How To Use the NPU
---

## Download NPU SDK

Please click [here](https://www.khadas.com/npu-toolkit-vim3) to get the SDK download link.

Download NPU SDK to somewhere, e.g. `~/npu`:


Directories description:

* docs: Model conversion documentation
* acuity-toolkit: Model conversion tools
* linux_sdk：Linux SDK
* android_sdk：Android SDK

## Environment Setup

In order to use the model conversion tools, you need to install [TensorFlow](https://www.tensorflow.org/) and other tools.


Host PC OS requirement:

* `Ubuntu 16.04 X64`
* `Ubuntu 18.04 X64`

```
$ sudo apt update
$ sudo apt install python3 python3-pip python3-virtualenv
$ cd ~/npu/aml_npu_sdk/acuity-toolkit
$ for req in $(cat requirements.txt); do pip3 install $req; done
```

{% note info Note %}
The command will install TensorFlow CPU version by default, if your PC has NVIDIA GPU(s) you can choose to install [GPU version](https://www.tensorflow.org/install/gpu) to speed up the conversion.
{% endnote %}

Verify the TensorFlow:
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

If you see the `Hello World` string printed indicate that the TensorFlow is installed successfully.

## Model Conversion

In order to run the model on VIM3, you need to convert the model to case code, only support `Caffe/Tensorflow/Tflite/Darknet/Onnx/Keras/Pytroch` models.

There are some sample scripts`acuity-toolkit/conversion_scripts` in the SDK to convert the model. Execute the scripts to convert the model:

```
$ cd ~/npu/aml_npu_sdk/acuity-toolkit/conversion_scripts
$ ./0_import_model.sh
$ ./1_quantize_model.sh
$ ./2_export_case_code.sh

```
After the conversion you can find the case code in directory `nbg_unify_model-name`, e.g. `nbg_unify_inception_v3`, you can compile this case code.

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

{% note info Note %}
You need to modify the model file path and other parameters in the scripts if you want to convert your model.
{% endnote %}

They are just sample scripts to convert the model, for more information please refer to model conversion documentation`docs/en/Model_Transcoding and Running User Guide_V0.5.pdf`.

## Compile the Case Code

### Based On Linux

In order to run the model on VIM3 you need to compile the case code to get the executable binary.

* Copy the build script from sample demo

```
$ cd ~/npu/aml_npu_sdk/acuity-toolkit/conversion_scripts/nbg_unify_inception_v3
$ cp ~/npu/aml_npu_sdk/linux_sdk/demo/inceptionv3/build_vx.sh .
```

* Compile

```
$ ./build_vx.sh ~/npu/aml_npu_sdk/linux_sdk/linux_sdk
```

{% note info Note %}
Note: Build script usage: **./build_vx.sh linux-SDK-directory**.
{% endnote %}

You will find the executable binary in directory `bin_r` if compile sucessfully.

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

`inceptionv3` is the ready to use executable binary.

* Running On VIM3

Firmware version [V190830](https://dl.khadas.com/Firmware/VIM3/Ubuntu/EMMC/) or newer, and update the system.

```
khadas@Khadas:~$ sudo apt update
khadas@Khadas:~$ sudo apt full-upgrade
khadas@Khadas:~$ sudo do-fenix-full-upgrade
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```

Copy the executable binary `inceptionv3`, model data `inception_v3.nb`, and test pictures (size 299x299) to VIM3 and run it

{% note info Note %}
Note: You can find the sample pictures in directory `linux_sdk/demo/inceptionv3/bin_demo`.
{% endnote %}

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

This demo just show the top5, you can see the max probability is index `2`, you can check the labels `linux_sdk/inceptionv3_demo/bin_demo/imagenet_slim_labels.txt` and you will find the result is `goldfish`.

### Based On Android
Please refer to Android&Linux complie guidance`docs/en/Android&Linux_Compilation and Integration Guide_0.2.pdf`.

## In The End

This is just a simple sample about model conversion and case code complie, for more information please refer to model conversion documentation`docs/en/Model_Transcoding and Running User Guide_V0.5.pdf`.
