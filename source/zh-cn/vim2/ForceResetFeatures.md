title: 远程强制复位
---

## 简介
VIM2板载一颗可编程的MCU(STM8S003F3U6)，所以可以实现很多特性，如：
* [WOL: Wake-on-Lan](/zh-cn/vim2/HowtoUseWol.html)
* 启动介质设置: 从eMMC或SPI-Flash启动
* IR遥控电源设置
* 定时器电源设置
* [KBI: Khadas Bootloader Instructions](/zh-cn/vim2/KbiGuidance.html)

但是出于别的因素，一些开发者可能需要更多新的特性，如：
* 通过40-PIN座子的GPIO开关机
* 通过40-PIN座子的GPIO强制复位
* 通过以太网强制复位

在这里介绍如何强制复位VIM2。

*注意：这篇文档介绍的是MCU固件版本高于V05的设备。*

## WOL工作模式
WOL默认是关闭的，但是用户可以参考[KBI文档](/zh-cn/vim2/KbiGuidance.html)改变WOL的工作模式。

下面是简单的步骤检查WOL的状态：

* **WOL使能状态：**
  * VIM2上电
  * VIM2短暂开机（因为要初始化PHY）后关机
  * 蓝灯长亮

* **WOL禁止状态：**
  * VIM2上电
  * VIM2持续运行蓝灯灭，白灯亮。

## 使能WOL强制复位
启动进入u-boot命令行模式通过[串口](/zh-cn/vim2/SetupSerialTool.html)并执行如下KBI命令使能WOL强制复位功能：
```
kvim2# kbi forcereset wol w 1
[BL31]: tee size: 0

getmac = 98:aa:fc:60:45:87
kvim2# kbi trigger wol w 1
[BL31]: tee size: 0

getmac = 98:aa:fc:60:45:87
kvim2#
```
执行上述命令后，VIM2就工作在强制复位功能使能的状态，意味着你可以在下面两种情况下远程强制复位设备。
* VIM2在工作，如运行Android或Ubuntu OS。
* VIM2关机。

就像按了RESET按键一样复位。

## 测试
和WOL使用方式一样，执行如下命令即可复位设备：
```
$ wakeonlan 98:aa:fc:60:45:87
```

*注意： 确保VIM2和发送命令的机器在同一个局域网里面。*

## 提示：几种方式获取MAC地址
* 在VIM2底部贴纸上写有MAC地址：
![image|487x136](/images/vim2/vim2_mac.jpg)

* 从Android系统App获取MAC地址: Setting --> network --> MAC address
![image|489x200](/images/vim2/vim2_android_mac.jpg)

* 从串口打印获取MAC地址：
```
getmac = 98:aa:fc:60:45:87
gpio: pin GPIODV_2 (gpio 21) value is 1
Hit Enter or space or Ctrl+C key to stop autoboot -- :  0 
```

Enjoy!
