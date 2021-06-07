title: Khadas VIM2/VIM3/Edge KBI说明
---

KBI是"Khadas Bootloader Instructions"的缩写，主要用于以下几方面：
* 控制可编程MCU
* 管理底层硬件
* 让开发者体验VIM2/VIM3/Edge全部的特性

这篇文档介绍了如何配置使用KBI。 因为KBI是[U-Boot](http://www.denx.de) 命令，所以必须先设置串口调试工具([VIM2](/zh-cn/vim1/SetupSerialTool.html)/[VIM3](/zh-cn/vim1/SetupSerialTool.html)/[Edge](/zh-cn/edge/SetupSerialTool.html))。

*注意：此文档以VIM2为例进行说明，VIM3和Edge都是差不多的用法。*

在开始之前，确保先进入U-boot命令行模式:
```
normal power off
boot wol: enable
Hit Enter or space or Ctrl+C key to stop autoboot -- :  0 
kvim2#
```

## 帮助信息
和其他U-boot命令一样，直接执行`kbi`会给出帮助信息：
```
kvim2# kbi
kbi - Khadas Bootloader Instructions sub-system

Usage:
kbi [function] [mode] [write|read] <value>

kbi version - read version information
kbi usid - read usid information
kbi adc - read adc value
kbi powerstate - read power on state
kbi poweroff - power off device
kbi ethmac - read ethernet mac address

kbi led [systemoff|systemon] w <off|on|breathe|heartbeat> - set blue led mode
kbi led [systemoff|systemon] r - read blue led mode

kbi bootmode w <emmc|spi> - set bootmode to emmc or spi
kbi bootmode r - read current bootmode

kbi trigger [wol|rtc|ir|dcin|key|gpio] w <0|1> - disable/enable boot trigger
kbi trigger [wol|rtc|ir|dcin|key|gpio] r - read mode of a boot trigger
```

## 使用方法

**1) 获取MCU固件版本号：**
```
kvim2# kbi version
version: 03
```

**2) 初始化KBI：**
```
kvim2# kbi init
```

**3) 获取设备usid：**
```
kvim2# kbi usid
usid: 000000
```

**4) 获取ADC数值：**
```
kvim2# kbi adc
adc: 0x236
```
*ADC数值用于区分不同的Khadas开发板。*

**5) 给设备断电：**
```
kvim2# kbi poweroff
```

**6) 获取以太网MAC地址：**
```
kvim2# kbi ethmac
mac address: 98:aa:fc:60:44:c0
```

**7) 设置LED工作模式：**
VIM2蓝色LED有不同的工作模式，如`长灭`、`长亮`、`呼吸`和`心跳`等来只是不同的状态。

VIM2 蓝色LED是由MCU来控制的，同时MCU还控制VIM2的总电源，而VIM2白色LED是由Amlogic CPU来控制的，所以蓝色LED会一直工作，即使你关闭了VIM2电源。

事实上，KBI能设置两种不同的蓝灯模式：
* 系统关闭/待机：断电状态，CPU断电。
* 系统运行/工作：上电状态，CPU工作。

示例：

查看系统关闭/待机时的蓝灯模式：
```
kvim2# kbi led systemoff r
led mode: breathe  [systemoff]
```

查看系统运行/工作时的蓝灯模式：
```
kvim2# kbi led systemon r
led mode: off  [systemon]
```

上面显示当系统运行时蓝灯状态为`长灭`，你可以改为`呼吸灯`模式：
```
kvim2# kbi led systemon w breathe
```

同样的，对于系统关闭时的蓝灯状态，你也可以设置为别的模式，如下：
```
kvim2# kbi led systemon w breathe
```

**8) 启动模式**
VIM2配置有eMMC和SPI存储器，可以通过KBI设置从哪里启动系统。

设置默认从SPI Flash启动系统：
```
kvim2# kbi bootmode w spi
```
*关于SPI FLASH启动请参考如何从SPI Flash启动([VIM2](http://forum.khadas.com/t/how-to-boot-from-spi-flash/1354)/[VIM3](/zh-cn/vim3/BootFromSpiFlash.html)/[Edge](/zh-cn/edge/BootFromSpiFlash.html))* 。

设置默认从eMMC启动系统：
```
kvim2# kbi bootmode w emmc
```

查看当前启动模式：
```
kvim2# kbi bootmode r
bootmode: emmc
```

**9) 开机触发事件**
VIM2支持不同的开机触发事件：
* WOL: 通过网络唤醒开机
* RTC: 通过RTC唤醒开机
* IR: 通过红外唤醒开机
* DCIN: 通过DC输入唤醒开机
* Key: 通过电源键唤醒开机
* GPIO: 通过外部GPIO唤醒开机

这意味着，当VIM2关机时，上述任意一个事件在使能的情况下可以触发VIM2开机。

示例：

获取WOL触发使能状态：
```
kvim2# kbi trigger wol r
boot wol: disable
```

出厂固件WOL是默认关闭的。你可以通过如下方式打开WOL触发：
```
kvim2# kbi trigger wol w 1
set_wol: 1
```

当然，出于安全的角度考虑，你可能需要关闭WOL触发：
```
kvim2# kbi trigger wol w 0
set_wol: 0
```

## 更多
[如何使用WOL](/zh-cn/vim2/HowtoUseWol.html)。
[Edge-V MCU寄存器说明](https://dl.khadas.com/Hardware/Edge/MCU/Edge-V_MCU_REG_ZH.pdf)
[VIM2 MCU寄存器说明](https://dl.khadas.com/Hardware/VIM2/MCU/VIM2_MCU_REG_ZH.pdf)
[VIM3 MCU寄存器说明](https://dl.khadas.com/Hardware/VIM3/MCU/VIM3_MCU_REG_ZH.pdf)

