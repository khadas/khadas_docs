title: 通过命令行方式创建系统烧录卡
---

本教程是指导linux用户一步一步地创建TF烧录卡，你也可以使用Windows方式创建烧录卡([VIM1](/zh-cn/vim1/UpgradeViaTFBurningCard.html)/[VIM2](/zh-cn/vim2/UpgradeViaTFBurningCard.html)/[VIM3](/zh-cn/vim3/UpgradeViaTFBurningCard.html))。

{% note info 由于VIM1、VIM2和VIM3操作方式基本上是一样的，所以本文档以VIM1为例进行说明。%}

{% endnote %}

{% note warn 注意：由于TF烧录卡只支持FAT32文件系统，因为Ubuntu桌面系统大小大于4GB，所以不支持TF卡烧录。 %}

{% endnote %}

## 准备工作
* 编译或下载([VIM1](https://dl.khadas.com/Firmware/VIM1/U-boot/)/[VIM2](https://dl.khadas.com/Firmware/VIM2/U-boot/)/[VIM3](https://dl.khadas.com/Firmware/VIM3/U-boot/))最新的U-Boot文件。
* 准备好TF卡和读卡器。
* 如果TF卡上有多个分区的话，需要通过fdisk格式化TF卡([VIM1](/zh-cn/vim1/CreateBurnCardViaCLI.html)/[VIM2](/zh-cn/vim2/CreateBurnCardViaCLI.html)/[VIM3](/zh-cn/vim3/CreateBurnCardViaCLI.html))。

## 开始前
首先要先删除所有分区，**卡里面所有的数据将会丢失，请注意保存！**

```bash
$ sudo fdisk /dev/sdX
```

创建一个新的分区：

```bash
$ sudo fdisk /dev/sdX
```

{% note warn 注意 %}

分区起始一定要设置为**4096**，否则会导致TF烧录卡无法启动。

{% endnote %}

创建好的分区应该是像这样的:

```bash
Command (m for help): p

Disk /dev/sdc: 14.86 GiB, 15931539456 bytes, 31116288 sectors
Disk model: SD Card Reader
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x2914f327

Device     Boot Start      End  Sectors  Size Id Type
/dev/sdc1        4096 31116287 31112192 14.9G 83 Linux
```

起始分区从**4096**开始。

## 制作TF烧录卡

把TF卡接到电脑上，并确保接上去的TF卡处于未挂载状态：

```bash
$ sudo umount /dev/sdX1
```

把TF卡格式化为FAT32格式：
```bash
$ sudo mkfs.vfat /dev/sdX1
```

{% note info 注意 %}
	
请替换`sdX`为正确的块设备。

{% endnote %}

使用`dd`工具把`bootloader/u-boot`写入到TF卡的第一扇区：

```bash
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=1 count=444
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=512 skip=1 seek=1
```

{% note info 提示 %}
	
编译出来的U-Boot文件，其中`u-boot.bin.sd.bin`是用于TF卡启动的，而`u-boot.bin`是用于eMMC启动的。

{% endnote %}

拷贝系统固件到TF卡上，你可以自己编译固件或者从我们的[服务器](https://dl.khadas.com/Firmware/)下载。

重新拔插一下TF卡并运行以下命令：

```bash
$ cp -a aml_sdc_burn.ini update.img /media/XXX/9CE9-3938/
```

{% note info 说明 %}

`aml_sdc_burn.ini`是配置文件，你可以在[这里](https://github.com/khadas/images_upgrade/blob/master/Amlogic/aml_sdc_burn.ini)找到。

{% endnote %}

{% note warn 注意 %}

`aml_sdc_burn.ini` 里面package字段需要与你拷贝的固件名字一致！
例如：上面拷贝的固件名称为`update.img`，那么`aml_sdc_burn.ini`里面的`package`就要设置为`package = update.img`。

{% endnote %}


安全移除TF卡：

```bash
$ sudo eject /dev/sdX
```
至此，TF烧录卡的制作已完成。

## 通过TF烧录卡升级固件
1. 把制作好的烧录卡插入VIM/VIM2设备中，然后上电。
2. 参考文档([VIM1](/zh-cn/vim1/HowtoBootIntoUpgradeMode.html)/[VIM2](/zh-cn/vim2/HowtoBootIntoUpgradeMode.html)/[VIM3](/zh-cn/vim3/HowtoBootIntoUpgradeMode.html))进入升级模式。
3. 等待升级完成。

## 更多资料
* 启动卡VS烧录卡([VIM1](/zh-cn/vim1/BootingCardVsBurningCard.html)/[VIM2](/zh-cn/vim2/BootingCardVsBurningCard.html)/[VIM3](/zh-cn/vim3/BootingCardVsBurningCard.html))

