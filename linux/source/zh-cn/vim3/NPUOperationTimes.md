title: 单op耗时以及计算结果用户文档
---

这篇主要介绍如何在VIM3以及VIM3L上获取单层运行时间和计算结果。

{% note warn 警告 %}

获取单层耗时以及计算结果非常消耗资源，请勿在大模型上使用这个方法，会导致系统崩溃等问题。

{% endnote %}


## Step1: 获取模型源码

1. 参考[NPU SDK使用说明](NPUSDK.html)转换模型。

```sh
$ clone --recursive https://github.com/khadas/aml_npu_sdk.git
$ cd aml_npu_sdk/acuity-toolkit/demo
$ vim 2_export_case_code.sh
```

2. 修改`2_export_case_code.sh`

```sh
diff --git a/acuity-toolkit/demo/2_export_case_code.sh b/acuity-toolkit/demo/2_export_case_code.sh
index 6ba29e4..ba883b3 100755
--- a/acuity-toolkit/demo/2_export_case_code.sh
+++ b/acuity-toolkit/demo/2_export_case_code.sh
@@ -12,9 +12,6 @@ $export_ovxlib \
     --reorder-channel '0 1 2' \
     --channel-mean-value '128 128 128 128' \
     --export-dtype quantized \
-    --optimize VIPNANOQI_PID0XE8  \
-    --viv-sdk ${ACUITY_PATH}vcmdtools \
-    --pack-nbg-unify  \

```

3. 将转换出来的源码，并转移到VIM3/VIM3L上。

```sh
$ mkdir op_test
$ cp *.c *.h *export.data op_test
```

## Step2: 获取`VIVANTE SDK`

将Github上的仓库Clone到本地

```sh
khadas@Khadas:~$ cd ~
khadas@Khadas:~$ git clone https://github.com/yan-wyb/Just_for_get_op_time.git
```

## Step3: 编译模型代码

```sh
khadas@Khadas:~$ cd op_test
khadas@Khadas:~$ wget https://raw.githubusercontent.com/khadas/aml_npu_app/master/detect_library/inception/makefile.linux.def
khadas@Khadas:~$ wget https://raw.githubusercontent.com/khadas/aml_npu_app/master/detect_library/inception/build_vx.sh
khadas@Khadas:~$ echo "TARGET_NAME = detect_mobilnet"  > makefile.target_name
khadas@Khadas:~$ vim makefile.linux
```

makefile.linux内容如下:

```sh
include ./makefile.linux.def
include ./makefile.target_name

INCLUDE += -I$(OPENCV_ROOT)/modules
INCLUDE += -I$(OPENCV_ROOT)/modules/highgui/include
INCLUDE += -I$(OPENCV_ROOT)/modules/core/include
INCLUDE += -I$(OPENCV_ROOT)/modules/imgproc/include
INCLUDE += -I$(OPENCV_ROOT)/modules/objdetect/include
INCLUDE += -I$(OPENCV_ROOT)/modules/imgcodecs/include
INCLUDE += -I$(OPENCV_ROOT)/modules/videoio/include
INCLUDE += -I$(OPENCV4_ROOT)
INCLUDE += -I.

INCLUDE += -I$(VIVANTE_SDK_INC)

CXXFLAGS += $(INCLUDE) -std=c++11 -std=gnu++11 -Wall -std=c++11

################################################################################
# Supply necessary libraries.
#LIBS += $(OVXLIB_DIR)/lib/libjpeg.a

#LIBS +=  -lpthread -ldl
LIBS += -L$(OPENCV_ROOT)/lib -lz -lm

LIBS += -L$(VIVANTE_SDK_LIB) -lOpenVX -lOpenVXU -lGAL -lovxlib -lArchModelSw -lNNArchPerf

#LIBS +=-L$(LIB_DIR) -lstdc++
LIBS += -lvpcodec -lamcodec -lamadec -lamvdec -lamavutils -lrt -lpthread -lge2d -lion -ljpeg

#############################################################################
# Macros.
PROGRAM = 1
CUR_SOURCE = ${wildcard *.c}
#############################################################################
# Objects.
OBJECTS =  ${patsubst %.c, $(OBJ_DIR)/%.o, $(CUR_SOURCE)}
#OBJECTS += $(OBJ_DIR)/main.o
# installation directory
#INSTALL_DIR := ./

OBJ_DIR = bin_r_cv4
################################################################################

# Include the common makefile.

#include $(AQROOT)/common.target

LDFLAGS += -Wall -shared -Wl,-soname,$(TARGET_NAME) -Wl,-z,defs

TARGET_OUTPUT = $(OBJ_DIR)/$(TARGET_NAME)

all: $(TARGET_OUTPUT)

clean:
	@rm -rf $(OBJ_DIR)/* $(OBJ_DIR)

install: $(TARGET_OUTPUT)
	@mkdir -p $(INSTALL_DIR)
	@-cp $(TARGET_OUTPUT) $(INSTALL_DIR)

$(TARGET_OUTPUT): $(OBJECTS)
	@$(CXX) $(OBJECTS) -o $(TARGET_OUTPUT) $(LIBS)

$(OBJ_DIR)/%.o: %.c
	@echo "  COMPILE $(abspath $<)"
	@mkdir -p $(OBJ_DIR)
	@$(CC) $(LDFLAGS) -c $(CFLAGS) -o $@ $<

$(OBJ_DIR)/%.o: %.cpp
	@echo "  COMPILE $(abspath $<)"
	@mkdir -p $(OBJ_DIR)
	@$(CXX) -c $(CXXFLAGS) -o $@ $<

```

编译代码:

```sh
khadas@Khadas:~$ ./build_vx.sh
```

## Setp4: 获取运行耗时和结果

1. 设置环境变量

```sh
khadas@Khadas:~$ export VIVANTE_SDK_DIR=/home/khadas/Just_for_get_op_time/data/vcmdtools
khadas@Khadas:~$ export LD_LIBRARY_PATH=/home/khadas/Just_for_get_op_time/data/drivers_64_exportdata
khadas@Khadas:~$ export VIV_VX_DEBUG_LEVEL=1
khadas@Khadas:~$ export CNN_PERF=1
khadas@Khadas:~$ export NN_LAYER_DUMP=1
```

2. 运行

```sh
khadas@Khadas:~$ cd ~/op_test/bin_r_cv4
khadas@Khadas:~$ ./detect_mobilnet ../mobilenet_tf.export.data space_shuttle_224.jpg
```

