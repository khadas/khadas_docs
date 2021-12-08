title: Instructions for KSNN conversion tool
---

This document will introduce how to use the KSNN conversion tool.

## Get convert tool

The tool is integrated in the NPU conversion tool warehouse of VIM3.

```sh
$ mkdir workspace && cd workspace
$ git clone --recursive https://github.com/khadas/aml_npu_sdk.git
```

The KSNN conversion tool is under `acuity-toolkit/python`,

```sh
$ cd workspace/aml_npu_sdk/acuity-toolkit/python && ls
convert  data  README.cn.md  README.md
```

## Example for Convert

Choose tensorflow Inception V3 as a exmple.

1. Get forzen model

```sh
$ cd workspace/aml_npu_sdk/acuity-toolkit/python
$ wget https://github.com/yan-wyb/models-zoo/raw/master/tensorflow/inception/inception_v3_2016_08_28_frozen.pb
```

2. Convert

```sh
$ cd workspace/aml_npu_sdk/acuity-toolkit/python
$ ./convert --model-name inception \
			--platform tensorflow \
			--model ./inception_v3_2016_08_28_frozen.pb \
			--input-size-list '299,299,3' \
			--inputs input \
			--outputs InceptionV3/Predictions/Reshape_1 \
			--mean-values '128,128,128,128' \
			--quantized-dtype asymmetric_affine \
			--kboard VIM3 --print-level 0
```

During conversion, if you need to view detailed information, you can modify `--print-level 0` to `--print-level 1`.

3. File generated after conversion

```sh
$ cd workspace/aml_npu_sdk/acuity-toolkit/python 
$ ls outputs/inception
inception.nb  libnn_inception.so
```

## More

1. [KSNN Usage](./KSNNUsage.html)

2. [KSNN API Documentation](./KSNNAPI.html)

3. More conversion parameters can be viewed through `-h`

```sh
$ ./convert -h
usage: convert [-h] [--model-name MODEL_NAME] [--print-level PRINT_LEVEL] [--platform PLATFORM] [--kboard KBOARD] [--model MODEL] [--outputs OUTPUTS] [--input-size-list INPUT_SIZE_LIST]
               [--size-with-batch SIZE_WITH_BATCH] [--input-dtype-list INPUT_DTYPE_LIST] [--inputs INPUTS] [--weights WEIGHTS] [--std-values STD_VALUES] [--mean-values MEAN_VALUES]
               [--predef-file PREDEF_FILE] [--config CONFIG] [--proto PROTO] [--convert-engine CONVERT_ENGINE] [--quantized-dtype QUANTIZED_DTYPE] [--qtype QTYPE] [--batch-size BATCH_SIZE]
               [--iterations ITERATIONS] [--device DEVICE] [--hybrid HYBRID] [--algorithm ALGORITHM] [--moving-average-weight MOVING_AVERAGE_WEIGHT] [--divergence-nbins DIVERGENCE_NBINS]

optional arguments:
  -h, --help            show this help message and exit
  --model-name MODEL_NAME
                        the model conversion name you want to use
  --print-level PRINT_LEVEL
                        information printing level(default 0) : 0(just print error)/1(full information)
  --platform PLATFORM   choose you platform : pytorch/caffe/tensorflow/tflite/darknet/onnx/keras
  --kboard KBOARD       Choose khadas board: VIM3/VIM3L
  --model MODEL         Model filename
  --outputs OUTPUTS     Output points of graph
  --input-size-list INPUT_SIZE_LIST
                        Inputs size list for correspoding input points
  --size-with-batch SIZE_WITH_BATCH
                        Describe if the '--input-size-list' contain the highest batch dimension.
  --input-dtype-list INPUT_DTYPE_LIST
                        Input tensors dtype for corresponding input points
  --inputs INPUTS       Inputs points of graph
  --weights WEIGHTS     Weights filename
  --std-values STD_VALUES
                        Standard values for Tensorflow quantmodels
  --mean-values MEAN_VALUES
                        Mean values for quant models
  --predef-file PREDEF_FILE
                        Pre-define file to import some complex models
  --config CONFIG       A json file that describes model information.
  --proto PROTO         Switch protocol used for the Caffe binary protocol buffer file
  --convert-engine CONVERT_ENGINE
                        Convert engine for model
  --quantized-dtype QUANTIZED_DTYPE
                        Quant type :'asymmetric_affine/dynamic_fixed_point/perchannel_symmetric_affine/symmetric_affine/asymmetric_quantized'
  --qtype QTYPE         qtpye: 'uint8/int8/int16'
  --batch-size BATCH_SIZE
                        Integer value which specifies the batch size
  --iterations ITERATIONS
                        Number of iterations to run, integer value.
  --device DEVICE       Specify the compute device. GPU/CPU
  --hybrid HYBRID       Setup a hybrid quantize network
  --algorithm ALGORITHM
                        Quantization algorithm: normal(Default)/kl_divergence/moving_average.
  --moving-average-weight MOVING_AVERAGE_WEIGHT
                        Moving average coefficient.Positive float value.
  --divergence-nbins DIVERGENCE_NBINS
                        KL divergence histogram nbins.Positive integer value.
```
