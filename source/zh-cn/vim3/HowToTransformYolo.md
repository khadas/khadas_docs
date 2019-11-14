title: yolov3模型转换
---

训练完成的模型是基于相应的框架运行的，尽管大部分框架都有c/c++接口，但是即使使用这些接口，仍然只能使用CPU或者GPU，想要使用NPU加速，就需要通过DDK将训练好的模型转换为使用NPU加速的模型代码。这篇文档主要介绍如何在DDK上适配我们的模型。
**说明**: 下面的例子都是以训练好的khadas的物体检测模型为例。

## 转换工具使用

### 0_import_model.sh

参数设置
> 1. `NAME` 设置为yolov3
> 2. `--net-input` yolov3-voc.cfg文件位置
> 3. `--weight-input` weights文件位置
例如:
> `NAME=yolov3`
> `--net-input /home/khadas/Pictures/VOCdevkit/yolov3-train/yolov3-voc.cfg \`
> `--weight-input /home/khadas/Pictures/VOCdevkit/yolov3-train/backup/yolov3-voc_final.weights \`

### 1_quantize_model.sh

参数设置
> 1. `NAME` 设置为yolov3
> 2. `--source-file` 检验文件
> 3. `--channel-mean-value` 设置成`0 0 0 256`
> 4. `--quantized-dtype` 设置成`dynamic_fixed_point-8`

例如：
> `NAME=yolov3`
> `--channel-mean-value '0 0 0 256' \`
> `--quantized-dtype dynamic_fixed_point-8 \`

### 2_export_case_code.sh

参数设置
> 1. `NAME` 设置为yolov3
> 2. `--reorder-channel` RGB的颜色通道顺序修改为BGR`2 1 0`
> 3. `--channel-mean-value` 设置为`0 0 0 256`
> 4. `--export-dtype` 设置为`quantized`

例如:
> `NAME=yolov3`
> `--reorder-channel '2 1 0' \`
> `--channel-mean-value '0 0 0 256' \`
> `--export-dtype quantized \`

## DDK使用

### 文件替换

1. 将转换工具转换出来的`yolov3.nb`文件复制过来，替换`nn_data`目录下的`yolov3_88.nb`.
2. 将转换工具转换出来的`vnn_yolov3.c` 替换DDK目录下的`vnn_yolov3.c`。
3. 将转换工具转换出来的`vnn_yolov3.h` 文件复制过来，替换`include`下的`vnn_yolov3.h`文件


### 文件修改
```bash
$ vim yolov3_process.c
```
修改3个位置
1. `*coco_names[]` 的内容修改为你训练的模型的class，顺序要和你训练时的.names文件一致。
2. `num_class`  的值修改为你训练的class的大小
3. `size[3]` 的最后一个参数修改为`num_class*3`

例如:
> 1. `*coco_names[] = ["person", "bicycle", "car", "motorbike", "aeroplane", "bus", "train", "truck", "boat", "traffic light", "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow", "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee", "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard", "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple", "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "sofa", "pottedplant", "bed", "diningtable", "toilet", "tvmonitor", "laptop", "mouse", "remote", "keyboard", "cell phone", "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear", "hair drier", "toothbrush", "Edge-V", "Edge", "VIM1", "VIM2", "VIM3", "VIM3L", "Fan3705", "Captain", "Captain+Edge", "ToneBoard", "Heatsink(VIMs)", "Heatsink(Edge)];`
> 2. `num_class=92`
> 3. `int size[3]={nn_width/32, nn_height/32,97*3};`


### DDK编译

编译相应的yolov3目录以后，在`bin_r`目录下会找到生成的`.so`文件。
