title: KSNN转换工具使用说明
---

这篇文档将介绍如何使用KSNN转换工具。

## 获取转换工具

工具集成在VIM3的NPU转换工具仓库里。

<pre><font color="#4E9A06"><b>yan@yan-wyb</b></font>:<font color="#3465A4"><b>~</b></font>$ git clone --recursive https://github.com/khadas/aml_npu_sdk.git</pre>

KSNN转换工具在`acuity-toolkit/python`下，

<pre><font color="#4E9A06"><b>yan@yan-wyb</b></font>:<font color="#3465A4"><b>~</b></font>$ cd aml_npu_sdk/acuity-toolkit/python &amp;&amp; ls
<font color="#4E9A06"><b>convert</b></font>  <font color="#3465A4"><b>data</b></font>  <font color="#3465A4"><b>outputs</b></font></pre>

## 转换示例

这里以tensorflow Inception V3为例。

1. 获取模型文件

<pre><font color="#4E9A06"><b>yan@yan-wyb</b></font>:<font color="#3465A4"><b>~</b></font>$ cd aml_npu_sdk/acuity-toolkit/python</pre>
<pre><font color="#4E9A06"><b>yan@yan-wyb</b></font>:<font color="#3465A4"><b>~/aml_npu_sdk/acuity-toolkit/python</b></font>$ wget https://github.com/yan-wyb/models-zoo/raw/master/tensorflow/inception/inception_v3_2016_08_28_frozen.pb</pre>

2. 转换

<pre><font color="#4E9A06"><b>yan@yan-wyb</b></font>:<font color="#3465A4"><b>~</b></font>$ cd aml_npu_sdk/acuity-toolkit/python</pre>
<pre><font color="#4E9A06"><b>yan@yan-wyb</b></font>:<font color="#3465A4"><b>~/aml_npu_sdk/acuity-toolkit/python</b></font>$ ./convert --model-name inception \
&gt;           --platform tensorflow \
&gt;           --model /home/yan/yan/Yan/models-zoo/tensorflow/inception/inception_v3_2016_08_28_frozen.pb \
&gt;           --input-size-list '299,299,3' \
&gt;           --inputs input \
&gt;           --outputs InceptionV3/Predictions/Reshape_1 \
&gt;           --mean-values '128 128 128 0.0078125' \
&gt;           --quantized-dtype asymmetric_affine \
&gt;           --source-files ./data/dataset/dataset0.txt \
&gt;           --kboard VIM3 --print-level 0
</pre>

转换时，若需要查看详细的信息，可以将`--print-level 0`修改为`--print-level 1`。

3. 转换生成文件

<pre><font color="#4E9A06"><b>yan@yan-wyb</b></font>:<font color="#3465A4"><b>~</b></font>$ cd aml_npu_sdk/acuity-toolkit/python</pre>
<pre><font color="#4E9A06"><b>yan@yan-wyb</b></font>:<font color="#3465A4"><b>~/aml_npu_sdk/acuity-toolkit/python</b></font>$ ls outputs/inception/
inception.nb  <font color="#4E9A06"><b>libnn_inception.so</b></font></pre>


## 更多

1. [KSNN使用说明](./KSNNUsage.html)

2. [KSNN API文档](./KSNNAPI.html)

3. 更多的转换参数，可以通过`-h`查看

<pre><font color="#4E9A06"><b>yan@yan-wyb</b></font>:<font color="#3465A4"><b>~/aml_npu_sdk/acuity-toolkit/python</b></font>$ ./convert -h
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
                        Describe if the &apos;--input-size-list&apos; contain the highest batch dimension.
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
                        Quant type :&apos;asymmetric_affine/dynamic_fixed_point/perchannel_symmetric_affine/symmetric_affine/asymmetric_quantized&apos;
  --qtype QTYPE         qtpye: &apos;uint8/int8/int16&apos;
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
</pre>
