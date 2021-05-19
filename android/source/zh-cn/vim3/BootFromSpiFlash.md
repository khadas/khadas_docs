title: 从SPI启动系统
---

Khadas VIM3以及VIM3L板载了一块存储空间为16MB的SPI-falsh芯片，可用于从SPI启动系统,这篇文档将说明如何从SPI启动。

## 编译可用于SPI启动的Uboot

从SPI启动的Uboot和从EMMC启动的Uboot，编译方法是一样的，通过[fenix](https://github.com/khadas/fenix)就可以轻松的编译出用于SPI启动的脚本。

**这意味着你要有一个可以用于编译的fenix的环境.如果没有,请参照 [fenix使用说明](/zh-cn/vim3/FenixScript.html) 搭建编译的环境**

* 选择编译的环境

```shell
$ cd fenix
$ source env/setenv.sh
```

如果你的板子是VIM3，请选择VIM3选项，是VIM3L，请选择VIM3L

* 编译uboot

```shell
$ make uboot
```

如果编译成功了，你将会在`fenix/u-boot/build`下找到一个可以烧录进SPI的Uboot固件`uboot.bin`。

## 烧录uboot进SPI Flash

将上一步编译得到的uboot放进SD卡,u盘，或者通过TFTP直接加载进内存中。

[设置串口工具](/zh-cn/vim3/SetupSerialTool.html) 并且进入Uboot命令行

### 加载固件到DDR中

* 从SD卡加载的方式:

```shell
kvim3#load mmc 0 1080000 u-boot.bin
```

* 从U盘加载的方式:

```shell
kvim3#usb start
kvim3#load usb 0 1080000 u-boot.bin
```

* 通过TFTP的方式:

设置TFTP的方法在[如何设TFTP服务器](/zh-cn/vim3/SetupTFTPServer.html)的文档里有详细的说明。


```shell
kvim3#tftp 1080000 u-boot.bin
```

### 烧录

```shell
kvim3#sf probe
kvim3#sf erase 0 +$filesize
kvim3#sf write 1080000 0 $filesize
```

*说明: 这一步需要一些时间,请耐心的等待*

## 修改启动方式为SPI

如果你想要从SPI启动系统，首先需要将启动方式设置为SPI，默认的启动方式是从eMMC启动的。

* 确认当前的启动方式:

```shell
kvim3#kbi bootmode r
bootmode: emmc
```

当前启动方式为eMMC

* 设置为SPI启动:

```shell
kvim3#kbi bootmode w spi
```

关机已使新设置的启动方式的参数生效:

```shell
kvim3#kbi poweroff
```

此时,再次按下power按键,就会从SPI启动了

## 不再需要从SPI启动时清除SPI

```shell
kvim3#sf probe
kvim3#sf erase 0 1000
kvim3#reset
```

## 故障排查
1. 如果启动方式已经设置为从SPI启动，同时SPI的uboot损坏了是无法进入uboot的命令行的
	1) 如果uboot损坏了，你可以尝试使用[TST模式](/zh-cn/vim3/HowtoBootIntoUpgradeMode.html#TST-Mode-Recommended)从emmc启动，然后进入命令行，清除你的SPI或者从新烧录uboot进SPI
	{% note info 注意 %}
		此时不能使用PC的USB口给板子供电,会直接进入升级模式,而不是从EMMC启动
	{% endnote %}
	2) 如果EMMC的Uboot损坏了，你可以尝试使用[TST模式](/zh-cn/vim3/HowtoBootIntoUpgradeMode.html#TST-Mode-Recommended)进入升级模式，烧录一个固件到EMMC上，再重复步骤1。
	{% note info 注意 %}
		此时板子需要通过type-C的线连接到PC
	{% endnote %}
