title: 如何转换并通过NPU调用自己的模型
---

这里以yolov3为例,演示如何转换自己的模型,并适配进我们demo,在VIM3上面运行

**注意**:

请在参照文档转换之前,先仔细查看一遍一下文档

1. [SDK使用说明](/zh-cn/vim3/HowToUseNPUSDK.html)
2. [aml_npu_app源码仓库使用说明](/zh-cn/vim3/HowToUseAmlNPUApp.html)
3. [如何在板子上运行NPU Demo](/zh-cn/vim3/HowToRunNPUDemo.html)


# 准备

1. 训练好自己的yolov3模型.训练方式和过程可参考官方: [Darknet Yolo Page](https://pjreddie.com/darknet/yolo/),这里使用官方训练好的基于coco数据集的weights

2. 准备好SDK,app仓库,以及demo仓库

请分别参考SDK,app以及demo的文档是如何获取相应的代码的

1. [SDK使用说明](/zh-cn/vim3/HowToUseNPUSDK.html)
2. [aml_npu_app源码仓库使用说明](/zh-cn/vim3/HowToUseAmlNPUApp.html)
3. [如何在板子上运行NPU Demo](/zh-cn/vim3/HowToRunNPUDemo.html)

# 转换

转换在SDK下进行.

```shell
$ cd {workspace}/SDK/acuity-toolkit/conversion_scripts
```

## 修改`0_import_model.sh`

1. 修改`NAME`

```shell
NAME=mobilenet_tf --> NAME=yolov3
```

2. 注释掉Tensorflow


```shell
$convert_tf \
    --tf-pb ./model/mobilenet_v1.pb \
    --inputs input \
    --input-size-list '224,224,3' \
    --outputs MobilenetV1/Logits/SpatialSqueeze \
    --net-output ${NAME}.json \
    --data-output ${NAME}.data
```

修改为

```shell
#$convert_tf \
#    --tf-pb ./model/mobilenet_v1.pb \
#    --inputs input \
#    --input-size-list '224,224,3' \
#    --outputs MobilenetV1/Logits/SpatialSqueeze \
#    --net-output ${NAME}.json \
#    --data-output ${NAME}.data
```

3. 打开Darknet

```shell
#$convert_darknet \
#    --net-input xxx.cfg \
#   --weight-input xxx.weights \
#    --net-output ${NAME}.json \
#    --data-output ${NAME}.data 
```

修改为

```shell
$convert_darknet \
    --net-input path/to/yolov3.cfg \
   --weight-input path/to/yolov3.weights \
    --net-output ${NAME}.json \
    --data-output ${NAME}.data

```

## 修改`1_quantize_model.sh`

1. 修改`NAME`

```shell
NAME=mobilenet_tf --> NAME=yolov3
```

2. 修改回归参数

```shell
     --channel-mean-value '128 128 128 128' \
```

修改为

```shell
     --channel-mean-value '0 0 0 256' \
```

3. 修改`validation_tf.txt`

替换里面的图片

```shell
$ cat ./data/validation_tf.txt
./space_shuttle_224.jpg, 813
```

修改为

```shell
path/to/416x416.jpg
```

这里的图片分辨率与yolo的cfg文件里面的配置是相同的


## 修改`2_export_case_code.sh`

1. 修改`NAME`

```shell
NAME=mobilenet_tf --> NAME=yolov3
```

2. 修改回归参数

```shell
     --channel-mean-value '128 128 128 128' \
```

修改为

```shell
     --channel-mean-value '0 0 0 256' \
```

3. 修改RGB通道顺序

默认是RGB

```shell
    --reorder-channel '0 1 2' \
```

修改为BGR

```shell
    --reorder-channel '2 1 0' \
```

4. 指定板子型号

VIM3

```shell
    --optimize VIPNANOQI_PID0X88  \
```

VIM3L

```shell
    --optimize VIPNANOQI_PID0X99  \
```

## 编译并获取转换后的代码

1. 转换

```shell
$ bash 0_import_model.sh && bash 1_quantize_model.sh  && bash 2_export_case_code.sh
```

2. case代码

转换后的代码在`nbg_unify_yolov3`目录下

```shell
$ ls {workspace}/SDK/acuity-toolkit/conversion_scripts/nbg_unify_yolov3
BUILD  main.c  makefile.linux  nbg_meta.json  vnn_global.h  vnn_post_process.c  vnn_post_process.h  vnn_pre_process.c  vnn_pre_process.h  vnn_yolov3.c  vnn_yolov3.h  yolov3.nb  yolov3.vcxproj
```

# 编译

这部分代码在aml_npu_app仓库中进行.进入`detect_yolo_v3`的目录里面

```shell
$ cd {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3
$ ls
build_vx.sh  include  Makefile  makefile.linux  nn_data  vnn_yolov3.c  yolo_v3.c  yolov3_process.c
```

## 替换vnn文件

1. 将SDK生成的`vnn_yolov3.h`,`vnn_post_process.h`,`vnn_pre_process.h`替换进来

```shell
$ cp {workspace}/SDK/acuity-toolkit/conversion_scripts/nbg_unify_yolov3/vnn_yolov3.h {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3/include/vnn_yolov3.h
$ cp {workspace}/SDK/acuity-toolkit/conversion_scripts/nbg_unify_yolov3/vnn_post_process.h {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3/include/vnn_post_process.h
$ cp {workspace}/SDK/acuity-toolkit/conversion_scripts/nbg_unify_yolov3/vnn_pre_process.h {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3/include/vnn_pre_process.h
```

2. 将SDK生成的`vnn_yolov3.c`替换进来

```shell
$ cp {workspace}/SDK/acuity-toolkit/conversion_scripts/nbg_unify_yolov3/vnn_yolov3.c {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3/vnn_yolov3.c
```

## 修改`yolov3_process.c`

1. 修改class数组

```c
static char *coco_names[] = {"person","bicycle","car","motorbike","aeroplane","bus","train","truck","boat","traffic light","fire hydrant","stop sign","parking meter","bench","bird","cat","dog","horse","sheep","cow","elephant","bear","zebra","giraffe","backpack","umbrella","handbag","tie","suitcase","frisbee","skis","snowboard","sports ball","kite","baseball bat","baseball glove","skateboard","surfboard","tennis racket","bottle","wine glass","cup","fork","knife","spoon","bowl","banana","apple","sandwich","orange","broccoli","carrot","hot dog","pizza","donut","cake","chair","sofa","pottedplant","bed","diningtable","toilet","tvmonitor","laptop","mouse","remote","keyboard","cell phone","microwave","oven","toaster","sink","refrigerator","book","clock","vase","scissors","teddy bear","hair drier","toothbrush"};

```

按照你训练的数据集设置,如果是coco数据集,则不用修改.


2. 修改`yolo_v3_post_process_onescale`

修改`num_class`

```c
int num_class = 80;
```

这里的`num_class`与训练集的class数量相同

3. 修改后处理函数`yolov3_postprocess`

修改`num_class`以及`size[3]`

```c
int num_class = 80;
int size[3]={nn_width/32, nn_height/32,85*3};
```

这里的`num_class`与训练集的class数量相同
这里的`size[2]`等于`(num_class + 5 ) * 3` 

## 编译

使用`build_vx.sh`脚本就能编译出yolov3的库,

```shell
$ cd {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3
$ ./build_vx.sh {workspace}/SDK/linux_sdk/linux_sdk
```

生成的库在`bin_r`目录下

```shell
$ ls {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3/bin_r
libnn_yolo_v3.so  vnn_yolov3.o  yolo_v3.o  yolov3_process.o
```

# 运行

## 替换

1. 替换yolov3库

```shell
$ cp {workspace}/aml_npu_app/detect_library/model_code/detect_yolo_v3/bin_r/libnn_yolo_v3.so {workspace}/aml_npu_demo_binaries/detect_demo_picture/lib/libnn_yolo_v3.so
```

2. 替换nb文件

VIM3

```shell
$ cp {workspace}/SDK/acuity-toolkit/conversion_scripts/nbg_unify_yolov3/yolov3.nb {workspace}/aml_npu_demo_binaries/detect_demo_picture/nn_data/yolov3_88.nb
```

VIM3L

```shell
$ cp {workspace}/SDK/acuity-toolkit/conversion_scripts/nbg_unify_yolov3/yolov3.nb {workspace}/aml_npu_demo_binaries/detect_demo_picture/nn_data/yolov3_99.nb
```

## 运行

如何在板子上运行替换完的`aml_npu_demo_binaries`, 请参考


[如何在板子上运行NPUDemo](/zh-cn/vim3/HowToRunNPUDemo.html)

