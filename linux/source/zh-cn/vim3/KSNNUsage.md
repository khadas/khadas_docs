title: KSNN使用说明
---

这篇文档主要介绍什么是KSNN以及如何在VIM3上面运行提供的示例。


## 安装KSNN

1. clone代码到本地

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ git clone --recursive https://github.com/khadas/ksnn.git</pre>

2. 安装依赖

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ pip3 install matplotlib</pre>

3. 安装KSNN库

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ cd ksnn/ksnn</pre>
<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~/ksnn/ksnn</b></font>$ pip3 install ksnn-1.3-py3-none-any.whl</pre>

## 使用示例

demo全部集中在examlpes目录下，

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ cd ksnn/examples/ &amp;&amp; ls
<font color="#3465A4"><b>caffe</b></font>  <font color="#3465A4"><b>darknet</b></font>  <font color="#3465A4"><b>keras</b></font>  <font color="#3465A4"><b>onnx</b></font>  <font color="#3465A4"><b>pytorch</b></font>  <font color="#3465A4"><b>tensorflow</b></font>  <font color="#3465A4"><b>tflite</b></font></pre>

这里以Inception V3为例，其他demo是类似的。

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~/ksnn/examples</b></font>$ cd tensorflow &amp;&amp; ls
README.md  box_priors.txt  <font color="#06989A"><b>data</b></font>  inceptionv3.py  <font color="#3465A4"><b>libs</b></font>  mobilenet_ssd_picture.py  <font color="#3465A4"><b>models</b></font></pre>

运行的命令和转换参数都在对应目录下的`README`文件里。

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~/ksnn/examples/tensorflow</b></font>$ cat README.md</pre>

```sh
# run

$ python3 inceptionv3.py --model ./models/VIM3/inceptionv3.nb --library ./libs/libnn_inceptionv3.so --picture ./data/goldfish_299x299.jpg --level 0
$ python3 mobilenet_ssd_picture.py --model ./models/VIM3/mobilenet_ssd.nb --library ./libs/libnn_mobilenet_ssd.so --picture data/1080p.bmp --level 0

# Convert

$ ./convert \
--model-name inception \
--platform tensorflow \
--model inception_v3_2016_08_28_frozen.pb \
--input-size-list '299,299,3' \
--inputs input \
--outputs InceptionV3/Predictions/Reshape_1 \
--mean-values '128,128,128,128' \
--quantized-dtype asymmetric_affine \
--kboard VIM3 --print-level 1

$ ./convert \
--model-name mobilenet_ssd \
--platform tensorflow \
--model ssd_mobilenet_v1_coco_2017_11_17.pb \
--input-size-list '300,300,3' \
--inputs FeatureExtractor/MobilenetV1/MobilenetV1/Conv2d_0/BatchNorm/batchnorm/mul_1 \
--outputs "'concat concat_1'" \
--mean-values '127.5,127.5,127.5,127.5' \
--quantized-dtype asymmetric_affine \
--kboard VIM3 --print-level 1

If you use VIM3L , please use `VIM3L` to replace `VIM3`

```

运行Inception V3.

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~/ksnn/examples/tensorflow</b></font>$ python3 inceptionv3.py --model ./models/VIM3/inceptionv3.nb --library ./libs/libnn_inceptionv3.so --picture ./data/goldfish_299x299.jpg --level 0</pre>

```sh
 |--- KSNN Version: v1.3 +---| 
Start init neural network ...
Done.
Get input data ...
Done.
Start inference ...
Done. inference :  0.042353153228759766
----- Show Top5 +-----
     2: 0.93457
   795: 0.00328
   408: 0.00158
   974: 0.00148
   393: 0.00093
```

`--level`参数可同于调整打印信息等级。下面的命令将打印等级设置为最高。

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~/ksnn/examples/tensorflow</b></font>$ python3 inceptionv3.py --model ./models/VIM3/inceptionv3.nb --library ./libs/libnn_inceptionv3.so --picture ./data/goldfish_299x299.jpg --level 2</pre>

```sh
 |--- KSNN Version: v1.3 +---| 
Start init neural network ...
#productname=VIPNano-QI, pid=0x88
Create Neural Network: 283ms or 283181us
Done.
Get input data ...
Done.
Start inference ...
Start run graph [1] times...
generate command buffer, total device count=1, core count per-device: 1, 
current device id=0, AXI SRAM base address=0xff000000
---------------------------Begin VerifyTiling -------------------------
AXI-SRAM = 1048576 Bytes VIP-SRAM = 522240 Bytes SWTILING_PHASE_FEATURES[1, 1, 0]
  0 NBG [(   0    0    0 0,        0, 0x(nil)(0x(nil), 0x(nil)) ->    0    0    0 0,        0, 0x(nil)(0x(nil), 0x(nil))) k(0 0    0,        0) pad(0 0) pool(0 0, 0 0)]

 id IN [ x  y  w   h ]   OUT  [ x  y  w  h ] (tx, ty, kpc) (ic, kc, kc/ks, ks/eks, kernel_type)
   0 NBG DD 0x(nil) [   0    0        0        0] -> DD 0x(nil) [   0    0        0        0] (  0,   0,   0) (       0,        0, 0.000000%, 0.000000%, NONE)

PreLoadWeightBiases = 1048576  100.000000%
---------------------------End VerifyTiling -------------------------
layer_id: 0 layer name:network_binary_graph operation[0]:unkown operation type target:unkown operation target.
uid: 0
abs_op_id: 0
execution time:             20552 us
[     1] TOTAL_READ_BANDWIDTH  (MByte): 67.540481
[     2] TOTAL_WRITE_BANDWIDTH (MByte): 18.245340
[     3] AXI_READ_BANDWIDTH  (MByte): 30.711348
[     4] AXI_WRITE_BANDWIDTH (MByte): 15.229973
[     5] DDR_READ_BANDWIDTH (MByte): 36.829133
[     6] DDR_WRITE_BANDWIDTH (MByte): 3.015367
[     7] GPUTOTALCYCLES: 94344921
[     8] GPUIDLECYCLES: 78109663
VPC_ELAPSETIME: 118090
*********
Run the 1 time: 118.00ms or 118636.00us
vxProcessGraph execution time:
Total   118.00ms or 118996.00us
Average 119.00ms or 118996.00us
Done. inference :  0.1422710418701172
----- Show Top5 +-----
     2: 0.93457
   795: 0.00328
   408: 0.00158
   974: 0.00148
   393: 0.00093
```

可以看到相关的所有信息。

## 摄像头Demo

1. 目前支持摄像头的Demo有Yolo系列和OpenPose。以Yolov3为例，

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ cd ksnn/examples/darknet/</pre>
<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~/ksnn/examples/darknet</b></font>$ python3 hand-cap.py --model ./models/VIM3/hand.nb --library ./libs/libnn_hand.so --device X</pre>

2. 目前支持RTSP的demo只有yolo系列。以Yolov3为例，

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ cd ksnn/examples/darknet/</pre>
<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~/ksnn/examples/darknet</b></font>$ python3 flask-yolov3.py --model ./models/VIM3/yolov3.nb --library ./libs/libnn_yolov3.so --device X</pre>

## 更多

[KSNN转换工具使用说明](./KSNNConvert.html)
[KSNN API文档](./KSNNAPI.html)
