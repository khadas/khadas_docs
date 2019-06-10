title: 通过命令行方式创建系统烧录卡
---

本教程是指导linux用户一步一步地创建TF烧录卡，你也可以使用Windows方式创建烧录卡([VIM1](/zh-cn/vim1/UpgradeViaTFBurningCard.html)/[VIM2](/zh-cn/vim2/UpgradeViaTFBurningCard.html)/[VIM3](/zh-cn/vim3/UpgradeViaTFBurningCard.html))

**注意：由于VIM1、VIM2和VIM3操作方式基本上是一样的，所以本文档以VIM1为例进行说明。**

### 准备工作
* 编译或下载([VIM1](https://dl.khadas.com/Firmware/VIM1/U-boot/)/[VIM2](https://dl.khadas.com/Firmware/VIM2/U-boot/)/[VIM3](https://dl.khadas.com/Firmware/VIM3/U-boot/))最新的U-Boot文件。
* 准备好TF卡和读卡器。
* 如果TF卡上有多个分区的话，需要通过fdisk格式化TF卡([VIM1](/zh-cn/vim1/CreateBurnCardViaCLI.html)/[VIM2](/zh-cn/vim2/CreateBurnCardViaCLI.html)/[VIM3](/zh-cn/vim3/CreateBurnCardViaCLI.html))。

### 开始前
如果TF卡有多个分区
```
gouwa@Wesion:~$ ls /dev/sdX*
/dev/sdX  /dev/sdX1  /dev/sdX2
gouwa@Wesion:~$ 
```
则要先删除其它分区
```
fdisk /dev/sdX
```

### 制作TF烧录卡
**把TF卡接到电脑上，并确保接上去的TF卡处于未挂载状态:**
```
$ umount /dev/sdX1
```
**把TF卡格式化为FAT32格式:**
```
$ sudo mkfs.vfat /dev/sdX1
```

*注意：请替换`sdX`为正确的块设备。*

**使用"dd"工具把bootloader/u-boot写入到TF卡的第一扇区**
```
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=1 count=444
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=512 skip=1 seek=1
```
*说明：编译出来的U-Boot文件，其中“u-boot.bin.sd.bin”是用于制作 TF卡的，而“u-boot.bin”是用于eMMC启动的。你可以在[这里](https://github.com/khadas/images_upgrade/blob/master/Amlogic/aml_sdc_burn.ini)找到。*

**复制系统固件到TF卡上:**
重新拔插一下TF卡并运行以下命令:
```
$ cp -a aml_sdc_burn.ini Vim_Marshmallow_160928/update.img /media/gouwa/9CE9-3938/
```
*说明:"aml_sdc_burn.ini"是u-boot烧录/下载固件到eMMC的配置文件 。*

**安全移除TF卡:**
```
$ sudo eject /dev/sdX
```
至此，TF烧录卡的制作已完成。

### 通过TF烧录卡升级固件
1. 把制作好的烧录卡插入VIM/VIM2设备中，然后上电。
2. 参考文档([VIM1](/zh-cn/vim1/HowtoBootIntoUpgradeMode.html)/[VIM2](/zh-cn/vim2/HowtoBootIntoUpgradeMode.html)/[VIM3](/zh-cn/vim3/HowtoBootIntoUpgradeMode.html))进入升级模式。
3. 等待升级完成。

### 更多资料
* 启动卡VS烧录卡([VIM1](/zh-cn/vim1/BootingCardVsBurningCard.html)/[VIM2](/zh-cn/vim2/BootingCardVsBurningCard.html)/[VIM3](/zh-cn/vim3/BootingCardVsBurningCard.html))

