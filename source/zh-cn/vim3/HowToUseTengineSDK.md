title: 如何使用Tengine SDK
---

Tengine SDK 用于将训练好的模型转换成可以在NPU上运行模型

这里以darknet框架的yolov3为例,演示如何将yolov3转换成tmfile

## 获取SDK

tengine SDK 源码仓库在khadas的gitlab上

```shell
$ mkdir workspace && cd workspace
$ git clone https://gitlab.com/khadas/tengine_khadas_sdk.git
$ cd tengine_khadas_sdk && ls
docs  sdk  tengine_tools  toolchains
```

1. docs : 包括转换和量化在内的使用和说明文档
2. sdk  : 用于编译tengine demo
3. tengine_toos : 用与转换和量化模型
4. toolchains : 编译tengine demo的编译工具


## 转换

### 获取yolov3原始文件

在开始转换和量化之前,获取yolov3的weights文件和cfg文件

[yolov3.weights](https://pjreddie.com/media/files/yolov3.weights)
[yolov3.cfg](https://github.com/yan-wyb/darknet/blob/master/cfg/yolov3.cfg)

### 准备图片集

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

### 转换以及量化



```
$ cd workspace/tengine_khadas_sdk/tengine_tools/quant_tool
$ ./quant_tool -f darknet -m workspace/yolov3.weights -p workspace/yolov3.cfg -o yolov3.tmfile -a MINMAX -i workspace/quant -x 128,128,128 -y 128,128,128 -z 416,416,3 -c INTERNAL -t UINT8 -n 100
major: 0, minor: 2, revision: 0, seen: 0, transpose: 0
---- 0:/home/yan/data/tmp/VOCdevkit/VOC2012/quant/quant88.jpg ---- done
Darknet ------- 1:/home/yan/data/tmp/VOCdevkit/VOC2012/quant/quant94.jpg ---- done
Darknet ------- 2:/home/yan/data/tmp/VOCdevkit/VOC2012/quant/quant5.jpg ---- done
...
Darknet ------- 99:/home/yan/data/tmp/VOCdevkit/VOC2012/quant/quant7.jpg ---- done
Darknet ---===================================================================================
Create tengine model file done: yolov3_FP32.tmfile and yolov3_UINT8.tmfile
===================================================================================

```

```shell
$ ls
quant_tool  README.md  yolov3_FP32.tmfile  yolov3.tmfile  yolov3.tmfilefinetunescale  yolov3.tmfileoutscale  yolov3_UINT8.tmfile
```

其中, yolov3_UINT8.tmfile 就是能在NPU上面运行的量化后的tmfile

**注意**:

详细的参数说明请参考`workspace/tengine_khadas_sdk/docs`

