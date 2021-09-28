title: KSNN Usage
---

This document mainly introduces what KSNN is and how to run the provided examples on VIM3.

## Install KSNN

1. clone code to local

```sh
$ mkdir workspace && cd workspace
$ git clone --recursive https://github.com/khadas/ksnn.git
```

2. Installation dependencies

```sh
$ pip3 install matplotlib
```

3. Install KSNN library

```sh
$ cd workspace/ksnn/ksnn
$ pip3 install ksnn-1.0-py3-none-any.whl
```

## Example of use

Demos are all concentrated in the examlpes directory,

```sh
$ cd workspace/ksnn/examples && ls
caffe  darknet  keras  onnx  pytorch  tensorflow  tflite
```

Take Inception V3 as an example, other demos are similar.

```sh
$ cd tensorflow && ls
box_priors.txt  data  inceptionv3.py  libs  mobilenet_ssd_picture.py  models  README.md
```

The running commands and conversion parameters are in the `README` file in the corresponding directory.

```sh
$ cat README.md 
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

Run Inception V3.

```sh
python3 inceptionv3.py --model ./models/VIM3/inceptionv3.nb --library ./libs/libnn_inceptionv3.so --picture ./data/goldfish_299x299.jpg --level 0
 |--- KSNN Version: v1.0 +---|
Start init neural network ...
Done.
Get input data ...
Done.
Start inference ...
Done. inference :  0.03250575065612793
----- Show Top5 +-----
     2: 0.93457
   795: 0.00328
   408: 0.00158
   974: 0.00148
   393: 0.00093
```

The `--level` parameter can be used to adjust the level of printed information. The following command sets the printing level to the highest.

```sh
$ python3 inceptionv3.py --model ./models/VIM3/inceptionv3.nb --library ./libs/libnn_inceptionv3.so --picture ./data/goldfish_299x299.jpg --level 2
 |--- KSNN Version: v1.0 +---| 
Start init neural network ...
#productname=VIPNano-QI, pid=0x88
Create Neural Network: 49ms or 49731us
Done.
Get input data ...
Done.
Start inference ...
Start run graph [1] times...
generate command buffer, total device count=1, core count per-device: 1, 
current device id=0, AXI SRAM base address=0xff000000
---------------------------Begin VerifyTiling -------------------------
AXI-SRAM = 1048576 Bytes VIP-SRAM = 522240 Bytes SWTILING_PHASE_FEATURES[1, 1, 0]
  0 NBG [(   0    0    0 0,        0, 0x(nil)(0x(nil), 0x(nil)) ->    0    0    0 0,        0, 0x(nil)(0x(nil), 0x0x7f00000000)) k(0 0    0,        0) pad(0 0) pool(0 0, 0 0)]

 id IN [ x  y  w   h ]   OUT  [ x  y  w  h ] (tx, ty, kpc) (ic, kc, kc/ks, ks/eks, kernel_type)
   0 NBG DD 0x(nil) [   0    0        0        0] -> DD 0x(nil) [   0    0        0        0] (  0,   0,   0) (       0,        0, 0.000000%, 0.000000%, NONE)

PreLoadWeightBiases = 1048576  100.000000%
---------------------------End VerifyTiling -------------------------
layer_id: 0 layer name:network_binary_graph operation[0]:unkown operation type target:unkown operation target.
uid: 0
abs_op_id: 0
execution time:             21045 us
[     1] TOTAL_READ_BANDWIDTH  (MByte): 67.448212
[     2] TOTAL_WRITE_BANDWIDTH (MByte): 18.233987
[     3] AXI_READ_BANDWIDTH  (MByte): 30.711409
[     4] AXI_WRITE_BANDWIDTH (MByte): 15.229118
[     5] DDR_READ_BANDWIDTH (MByte): 36.736803
[     6] DDR_WRITE_BANDWIDTH (MByte): 3.004869
[     7] GPUTOTALCYCLES: 17714841
[     8] GPUIDLECYCLES: 1087642
VPC_ELAPSETIME: 22373
*********
Run the 1 time: 22.00ms or 22873.00us
vxProcessGraph execution time:
Total   22.00ms or 22927.00us
Average 22.93ms or 22927.00us
Done. inference :  0.02507615089416504
----- Show Top5 +-----
     2: 0.93457
   795: 0.00328
   408: 0.00158
   974: 0.00148
   393: 0.00093

```

You can see all relevant information

## More

[KSNN Convert tool Usage](./KSNNConvert.html)
[KSNN API Documentation](./KSNNAPI.html)
