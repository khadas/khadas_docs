title: 编译U-Boot
---

这篇文档会介绍如何编译U-Boot源码。

我们推荐使用[Fenix](https://github.com/khadas/fenix)来编译U-Boot，只需要简单几条命令即可完成编译。如果还没有搭建开发环境，请参考文档[编译Ubuntu/Debian固件](fenix_script.html)搭建开发环境。

## 设置环境

选择需要编译的板子型号，如：`VIM4`，U-Boot版本，Linux版本，系统版本等等。

```bash
$ source setenv.sh
```

{% note info Note %}
目前每个板子都支持两个版本的U-Boot。如下：
* 芯片原厂自带的原始U-Boot，版本为`2019.01`，该版本功能全面，但是版本比较旧
* 主线版本U-Boot，版本会一直随主线更新，该版本功能相对不是很完善，但是版本跟随主线
{% endnote %}

根据实际需求选择不同的U-Boot版本。

## 编译

### 编译U-Boot二进制文件

简单一条命令即可完成编译。

```
$ make uboot
```

编译后的U-Boot在目录`build/u-boot/fip/_tmp`下，其中我们需要的U-Boot文件为`u-boot.bin.sd.bin.signed`、` u-boot.bin.signed`和`u-boot.bin.spi.bin.signed`，其中：

* `u-boot.bin.sd.bin.signed` - 用于烧写到**SD卡**
* `u-boot.bin.signed` - 用于烧写到**eMMC**
* `u-boot.bin.spi.bin.signed` - 用于烧写到**SPI Flash**

### 编译U-Boot Debian包

还可以选择编译成U-Boot Debian包，用于在Ubuntu系统下直接安装来更新U-Boot。

```bash
$ make uboot-deb
```

编译后的Debian包在目录`build/images/debs/{VERSION}/{BOARD}`下

**VERSION** ：表示Fenix版本号，如`1.0.7`
**BOARD** ：表示对应的板子，如`VIM4`

所以目录可能为`build/images/debs/1.0.7/VIM4`，对应的U-Boot Debian包为`linux-u-boot-xxx-xxx_xxx-xxx_arm64.deb`。

* 芯片原厂对应U-Boot Debian包为：`linux-u-boot-vim4-vendor_1.0.7-2019.01_arm64.deb`
* 主线版本U-Boot Debian包为：`linux-u-boot-vim4-mainline_1.0.7-v2021.04_arm64.deb`

## 参考
[更新U-Boot](upgrade_uboot.html)
