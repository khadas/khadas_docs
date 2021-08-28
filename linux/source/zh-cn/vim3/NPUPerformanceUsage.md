title: NPU性能接口说明文档
---

## 准备工作

### 升级系统到最新的版本

请参考文档: [升级固件到最新版本](UpgradeSystem.html)

### 重新加载驱动模块

1. 卸载NPU模块

```sh
$ sudo rmmod galcore
```

2. 重新加载模块

```sh
$ sudo insmod /lib/modules/4.9.241/kernel/drivers/amlogic/npu/galcore.ko gpuProfiler=1 showArgs=1
```

## 获取接口数据

### 设置环境变量

```sh
export VIV_VX_PROFILE=1
export VIV_VX_DEBUG_LEVEL=1
```
### 运行模型

这里以inception为例。 [NPU Demo获取](NPUPrebuiltUsage.html)

```sh
$ aml_npu_demo_binaries/inceptionv3/VIM3$ ./run.sh
#productname=VIPNano-QI, pid=0x88
Created VX Thread: 0xa69a21c0
Create Neural Network: 59ms or 59455us
Verify...
generate command buffer, device count=1, core count per-device: 1,
---------------------------Begin VerifyTiling -------------------------
AXI-SRAM = 1048576 Bytes VIP-SRAM = 522240 Bytes SWTILING_PHASE_FEATURES[1, 1, 0]
  0 NBG [(   0    0    0 0,        0, 0x(nil)(0x(nil), 0x(nil)) ->    0    0    0 0,        0, 0x(nil)(0x(nil), 0x(nil))) k(0 0    0,        0) pad(0 0) pool(0 0, 0 0)]

 id IN [ x  y  w   h ]   OUT  [ x  y  w  h ] (tx, ty, kpc) (ic, kc, kc/ks, ks/eks, kernel_type)
   0 NBG DD 0x(nil) [   0    0        0        0] -> DD 0x(nil) [   0    0        0        0] (  0,   0,   0) (       0,        0, 0.000000%, 0.000000%, NONE)

PreLoadWeightBiases = 1048576  100.000000%
---------------------------End VerifyTiling -------------------------
Verify Graph: 0ms or 823us
Start run graph [1] times...
layer id: 0 layer name:network_binary_graph operation[0]:unkown operation type target:unkown operation target.
uid: 0
op_abs_id: 0
execution time:             20845 us
[     1] TOTAL_READ_BANDWIDTH  (MByte): 71.703380
[     2] TOTAL_WRITE_BANDWIDTH (MByte): 17.810649
[     3] AXI_READ_BANDWIDTH  (MByte): 30.981305
[     4] AXI_WRITE_BANDWIDTH (MByte): 14.130429
[     5] DDR_READ_BANDWIDTH (MByte): 40.722075
[     6] DDR_WRITE_BANDWIDTH (MByte): 3.680220
[     7] GPUTOTALCYCLES: 16697255
[     8] GPUIDLECYCLES: 296080
VPC_ELAPSETIME: 21124
*********
Run the 1 time: 21.00ms or 21609.00us
vxProcessGraph execution time:
Total   21.00ms or 21625.00us
Average 21.62ms or 21625.00us
 --- Top5 ---
  2: 0.833984
795: 0.009102
974: 0.003592
408: 0.002207
393: 0.002111
Exit VX Thread: 0xa69a21c0
```
## 接口数据说明

### 带宽数据说明

1. TOTAL_READ_BANDWIDTH 总读带宽
2. TOTAL_WRITE_BANDWIDTH 总写带宽
3. AXI_READ_BANDWIDTH AXI_SRAM读带宽
4. AXI_READ_BANDWIDTH AXI_SRAM写带宽
5. DDR_READ_BANDWIDTH DDR读带宽
6. DDR_WRITE_BANDWIDTH DDR写带宽

### 使用率计算

1. GPUTOTALCYCLES 总的cycle数
2. GPUIDLECYCLES 空闲状态的cycle数

使用率 = (GPUTOTALCYCLES - GPUIDLECYCLES) / GPUTOTALCYCLES

