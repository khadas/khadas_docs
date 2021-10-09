title: Tengine SDK使用说明
---

Tengine 由 OPEN AI LAB 主导开发，该项目实现了深度学习神经网络模型在嵌入式设备上的快速、高效部署需求。为实现在众多 AIoT 应用中的跨平台部署，本项目使用 C 语言进行核心模块开发，针对嵌入式设备资源有限的特点进行了深度框架裁剪。

这里以darknet框架的yolov3为例,演示如何将yolov3转换成tmfile

## 获取SDK

tengine SDK 源码仓库在khadas的github上

```shell
$ mkdir workspace && cd workspace
$ git clone https://github.com/khadas/tengine_khadas_sdk.git
$ cd tengine_khadas_sdk && ls
docs  tengine_tools
```

1. docs : 包括转换和量化在内的使用和说明文档
2. tengine_toos : 用于转换和量化模型


## 转换以及量化

1. 获取yolov3原始文件

在开始转换和量化之前,获取yolov3的weights文件和cfg文件

[yolov3.weights](https://pjreddie.com/media/files/yolov3.weights)
[yolov3.cfg](https://github.com/yan-wyb/darknet/blob/master/cfg/yolov3.cfg)

2. 准备图片集

量化时需要使用一定量的图片

```shell
$ ls workspace/quant
quant100.jpg  quant16.jpg  quant22.jpg  quant29.jpg  quant35.jpg  quant41.jpg  quant48.jpg  quant54.jpg  quant60.jpg  quant67.jpg  quant73.jpg  quant7.jpg   quant86.jpg  quant92.jpg  quant99.jpg
quant10.jpg   quant17.jpg  quant23.jpg  quant2.jpg   quant36.jpg  quant42.jpg  quant49.jpg  quant55.jpg  quant61.jpg  quant68.jpg  quant74.jpg  quant80.jpg  quant87.jpg  quant93.jpg  quant9.jpg
quant11.jpg   quant18.jpg  quant24.jpg  quant30.jpg  quant37.jpg  quant43.jpg  quant4.jpg   quant56.jpg  quant62.jpg  quant69.jpg  quant75.jpg  quant81.jpg  quant88.jpg  quant94.jpg
quant12.jpg   quant19.jpg  quant25.jpg  quant31.jpg  quant38.jpg  quant44.jpg  quant50.jpg  quant57.jpg  quant63.jpg  quant6.jpg   quant76.jpg  quant82.jpg  quant89.jpg  quant95.jpg
quant13.jpg   quant1.jpg   quant26.jpg  quant32.jpg  quant39.jpg  quant45.jpg  quant51.jpg  quant58.jpg  quant64.jpg  quant70.jpg  quant77.jpg  quant83.jpg  quant8.jpg   quant96.jpg
quant14.jpg   quant20.jpg  quant27.jpg  quant33.jpg  quant3.jpg   quant46.jpg  quant52.jpg  quant59.jpg  quant65.jpg  quant71.jpg  quant78.jpg  quant84.jpg  quant90.jpg  quant97.jpg
quant15.jpg   quant21.jpg  quant28.jpg  quant34.jpg  quant40.jpg  quant47.jpg  quant53.jpg  quant5.jpg   quant66.jpg  quant72.jpg  quant79.jpg  quant85.jpg  quant91.jpg  quant98.jpg
```

这里使用100张来自VOC2012数据集的图片


3. 转换

```shell
$ cd ${workspace}/tengine_khadas_sdk/tengine_tools/convert_tool
$ ./convert_tool -f darknet -m ~/yolov3.weights -p ~/yolov3.cfg -o yolov3.tmfile

---- Tengine Convert Tool ---- 

Version     : v1.0, 15:43:59 Jun 24 2021
Status      : float32
major: 0, minor: 2, revision: 0, seen: 0, transpose: 0 
Create tengine model file done: yolov3.tmfile
```
转换会生成一个tmfile,这个文件在量化时会使用到

```shell
$ cd ${workspace}/tengine_khadas_sdk/tengine_tools/convert_tool && ls
convert_tool  README.md  yolov3.tmfile
```

4. 量化

```shell
$ cd ${workspace}/tengine_khadas_sdk/tengine_tools/quant_tool
$ ./quant_tool_uint8 -m ../convert_tool/yolov3.tmfile -i ~/data/git/npu/datesets/tengine_test_datasets_100/ -o yolov3_u8.tmfile -g 3,416,416 -a MINMAX  -w 0,0,0 -s 0.003922,0.003922,0.003922 -c 0 -t 4 -b 1 -y 416,416

---- Tengine Post Training Quantization Tool ---- 

Version     : v1.2, 15:15:47 Jun 22 2021
Status      : uint8, per-layer, asymmetric
Input model : ../convert_tool/yolov3.tmfile
Output model: yolov3_u8.tmfile
Calib images: /home/yan/data/git/npu/datesets/tengine_test_datasets_100/
Scale file  : NULL
Algorithm   : MIN MAX
Dims        : 3 416 416
Mean        : 0.000 0.000 0.000
Scale       : 0.004 0.004 0.004
BGR2RGB     : ON
Center crop : OFF
Letter box  : 416 416
YOLOv5 focus: OFF
Thread num  : 4

[Quant Tools Info]: Step 0, load FP32 tmfile.
[Quant Tools Info]: Step 0, load FP32 tmfile done.
[Quant Tools Info]: Step 0, load calibration image files.
[Quant Tools Info]: Step 0, load calibration image files done, image num is 100.
[Quant Tools Info]: Step 1, find original calibration table.
[Quant Tools Info]: Step 1, images 00100 / 00100
[Quant Tools Info]: Step 1, find original calibration table done, output ./table_minmax.scale
[Quant Tools Info]: Thread 4, image nums 100, total time 46397.79 ms, avg time 463.98 ms
[Quant Tools Info]: Calibration file is using table_minmax.scale
[Quant Tools Info]: Step 3, load FP32 tmfile once again
[Quant Tools Info]: Step 3, load FP32 tmfile once again done.
[Quant Tools Info]: Step 3, load calibration table file table_minmax.scale.
[Quant Tools Info]: Step 4, optimize the calibration table.
[Quant Tools Info]: Step 4, quantize activation tensor done.
[Quant Tools Info]: Step 5, quantize weight tensor done.
[Quant Tools Info]: Step 6, save Int8 tmfile done, yolov3_u8.tmfile

---- Tengine Int8 tmfile create success, best wish for your INT8 inference has a low accuracy loss...\(^0^)/ ----
```

转换生成的`yolov3_u8.tmfile`文件就是可以运行在NPU上面的tmfile文件

```shell
$ cd ${workspace}/tengine_khadas_sdk/tengine_tools/quant_tool && ls
quant_tool_uint8  README.md  table_minmax.scale  yolov3_u8.tmfile
```

{% note info 注意 %}
详细的参数说明请参考`workspace/tengine_khadas_sdk/docs`
tengie官方说明文档: https://tengine-docs.readthedocs.io/zh_CN/latest/index.html
{% endnote %}

