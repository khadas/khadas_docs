title: How To Transform Yolo Model
---

The training completed model is based on the corresponding framework. Although most of the frameworks have C / C + + interfaces, even if these interfaces are used, only CPU or GPU can be used. If you want to use NPU acceleration, you need to convert the trained model into NPU accelerated model code through SDK. This document mainly introduces how to adapt our model on SDK.
**Note**: The following examples take the trained object detection model of khadas as an example.

## Apply for SDK
About the trainsform SDK, you need to apply with our [website](https://www.khadas.com/npu-toolkit-vim3). After filling in the information, it will be sent to your email.
```bash
$ cd Tool/acuity-toolkit-binary-5.0.0/conversion_scripts/
```


## How to use Trainsform tool

### 0_import_model.sh

Parameter setting
> 1. `NAME` is `yolovX`
> 2. `--net-input` is path to yolovX-voc.cfg file
> 3. `--weight-input` is path to weights file
example:
> `NAME=yolov3`
> `--net-input /home/khadas/Pictures/VOCdevkit/yolov3-train/yolov3-voc.cfg \`
> `--weight-input /home/khadas/Pictures/VOCdevkit/yolov3-train/backup/yolov3-voc_final.weights \`

### 1_quantize_model.sh

Parameter setting
> 1. `NAME` is `yolovX`
> 2. `--source-file` is path to Validation file
> 3. `--channel-mean-value` set to `0 0 0 256`
> 4. `--quantized-dtype` set to `dynamic_fixed_point-8`

example:
> `NAME=yolov3`
> `--channel-mean-value '0 0 0 256' \`
> `--quantized-dtype dynamic_fixed_point-8 \`

### 2_export_case_code.sh

Parameter setting
> 1. `NAME` is `yolovX`
> 2. `--reorder-channel` RGB color channel order changed to BGR `2 1 0`
> 3. `--channel-mean-value` set ot `0 0 0 256`
> 4. `--export-dtype` set to `quantized`

example:
> `NAME=yolov3`
> `--reorder-channel '2 1 0' \`
> `--channel-mean-value '0 0 0 256' \`
> `--export-dtype quantized \`

### Run The trainform shell script
```
$ cd acuity-toolkit-binary-5.0.0/conversion_scripts/
$ chmod +x 0_import_model.sh
$ chmod +x 1_quantize_model.sh
$ chmod +x 2_export_case_code.sh
$ ./0_import_model.sh
$ ./1_quantize_model.sh
$ ./2_export_case_code.sh
```
After conversion, In directory `acuity-toolkit-binary-5.0.0/conversion_scripts/`, a file with the same name as the script will be generated. These files are the basic files after conversion.


## Apply your own converted code

### Download aml_npu_app and aml_npu_demo_binaries
```
$ cd $workspace
$ git clone https://gitlab.com/khadas/aml_npu_demo_binaries.git
$ git clone https://gitlab.com/khadas/aml_npu_app.git
```
After the download is complete, there will be two directories: `aml_npu_app` and `aml_npu_binaries`


### File replacement

```bash
$ cd $workspace/aml_npu_app/DDK_6.3.3.4/detect_library/model_code/detect_yolo_v3/
```
1. Copy the `yolov3.nb` file converted by the conversion tool and replace the `yolov3.nb` file in the `NN data` directory
2. Replace `vnn_yolov3.c` converted by the conversion tool with `vnn_yolov3.c` in DDK directory.
3. Copy the `vnn_yolov3.h` file converted by the conversion tool and replace the `vnn_yolov3.h` file under `include`


### edit file
```bash
$ vim yolovX_process.c
```
Modify 3 places
1. The content of `*coco_names[]` is modified to the class of your training model. The order should be the same as the names file when you train.
2. Change the value of `num_class` to the size of your training class.
3. change the lastest value of `size[3]` to `(num_class+5)*3`

example:
> 1. `*coco_names[] = ["person", "bicycle", "car", "motorbike", "aeroplane", "bus", "train", "truck", "boat", "traffic light", "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow", "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee", "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove", "skateboard", "surfboard", "tennis racket", "bottle", "wine glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple", "sandwich", "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "sofa", "pottedplant", "bed", "diningtable", "toilet", "tvmonitor", "laptop", "mouse", "remote", "keyboard", "cell phone", "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors", "teddy bear", "hair drier", "toothbrush", "Edge-V", "Edge", "VIM1", "VIM2", "VIM3", "VIM3L", "Fan3705", "Captain", "Captain+Edge", "ToneBoard", "Heatsink(VIMs)", "Heatsink(Edge)];`
> 2. `num_class=92`
> 3. `int size[3]={nn_width/32, nn_height/32,97*3};`


### Build the source code
```bash
$ cd workspace/aml_npu_app/DDK_6.3.3.4/detect_library/model_code/detect_yolo_v3/
$ ./build_vx.sh $path/to/linux_sdk_dir $path/to/fenix
```
After compiling the corresponding yolov3 directory, the generated `.so` file will be found in the `bin_r` directory.

### Replace demo file

```bash
$ cd $workspace/aml_npu_demo_binaries/detect_demo/
```
Replace two places:
1. Copy the so file generated in the previous step and replace it with `lib`.
2. Copy the Nb file in the previous step and replace the file in `nn_data`.
```bash
$ cp workspace/aml_npu_app/DDK_6.3.3.4/detect_library/model_code/detect_yolo_v3/bin_dir/libnn_yolo_v3.so $workspace/aml_npu_demo_binaries/detect_demo/lib/libnn_yolo_v3.so
$ cp workspace/aml_npu_app/DDK_6.3.3.4/detect_library/model_code/detect_yolo_v3/nn_data/yolov3_88.nb $workspace/aml_npu_demo_binaries/detect_demo/n_data/yolov3_88.nb
```


After the demo is completed, you can run your own Model.

