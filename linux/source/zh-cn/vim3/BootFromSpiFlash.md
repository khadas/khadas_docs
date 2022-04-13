title: 从SPI-Flash启动系统
---

Khadas VIM3/VIM3L和VIM4分别板载了一块存储空间为16MB和32MB的SPI-flash芯片，可用于从SPI启动系统,这篇文档将以VIM4为例说明如何从SPI启动。

{% note warn VIM3/VIM3L可用于烧录到SPI的U-Boot固件名称为`u-boot.bin`。 %}

{% endnote %}

## 编译可用于SPI启动的U-Boot

从SPI启动的U-Boot和从eMMC启动的U-Boot，编译方法是一样的，通过[fenix](https://github.com/khadas/fenix)就可以轻松的编译出用于SPI启动的脚本。

**这意味着你要有一个可以用于编译的Fenix的环境.如果没有,请参照 [fenix使用说明](FenixScript.html) 搭建编译的环境**

* 选择编译的环境

```shell
$ cd fenix
$ source env/setenv.sh
```

选择`VIM4`。

* 编译U-Boot

```shell
$ make uboot
```

如果编译成功了，你将会在`fenix/build/u-boot/./fip/_tmp`下找到一个可以烧录进SPI的Ub-Boot固件`u-boot.bin.spi.bin.signed`。

## 烧录U-Boot进SPI Flash

将上一步编译得到的U-Boot放进SD卡,u盘，或者通过TFTP直接加载进内存中。

[设置串口工具](SetupSerialTool.html) 并且进入U-Boot命令行

### 加载固件到DDR中

* 从SD卡加载的方式:

```
kvim4# load mmc 0 1080000 u-boot.bin.spi.bin.signed
```

* 从U盘加载的方式:

```shell
kvim4# usb start
kvim4# load usb 0 1080000 u-boot.bin.spi.bin.signed
```

* 通过TFTP的方式:

设置TFTP的方法在[如何设TFTP服务器](SetupTFTPServer.html)的文档里有详细的说明。


```
kvim4# tftp 1080000 u-boot.bin.spi.bin.signed
```

### 烧录

```
kvim4# sf probe
kvim4# sf erase 0 +$filesize
kvim4# sf erase 0 +$filesize
SF: 3919872 bytes @ 0x0 Erased: OK
kvim4# sf update 0x1080000 0 0x3bd000
device 0 offset 0x0, size 0x3bd000
3919872 bytes written, 0 bytes skipped in 48.939s, speed 82019 B/s
```

## 修改启动方式为SPI

如果你想要从SPI启动系统，首先需要将启动方式设置为SPI，默认的启动方式是从eMMC启动的。

* 确认当前的启动方式:

```
kvim4# kbi bootmode r
bootmode: emmc
```

当前启动方式为eMMC

* 设置为SPI启动:

```
kvim4# kbi bootmode w spi
```

关机已使新设置的启动方式的参数生效:

```
kvim4# kbi poweroff
```

此时,再次按下`power`按键,就会从SPI启动了

## 不再需要从SPI启动时清除SPI

```
kvim4# sf probe
kvim4# sf erase 0 1000
kvim4# reset
```

## 故障排查
如果启动方式已经设置为从SPI启动，同时SPI的U-Boot损坏了是无法进入uboot的命令行的
	1. 如果uboot损坏了，你可以尝试使用[TST模式](BootIntoUpgradeMode.html#TST-Mode-Recommended)从eMMC启动，然后进入命令行，清除你的SPI或者重新烧录U-Boot进SPI。
	{% note info 注意 %}
		此时不能使用PC的USB口给板子供电,会直接进入升级模式,而不是从eMMC启动。
	{% endnote %}
	2. 如果eMMC的U-Boot损坏了，你可以尝试使用[TST模式](BootIntoUpgradeMode.html#TST-Mode-Recommended)进入升级模式，烧录一个固件到eMMC上，再重复步骤1。
	{% note info 注意 %}
		此时板子需要通过Type-C的线连接到PC。
	{% endnote %}
