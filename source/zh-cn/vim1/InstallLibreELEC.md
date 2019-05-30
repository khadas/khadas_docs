title: 如何安装LibreELEC
---

**LibreELEC运行在外部媒体介质上，如：SD卡或U盘，所以需要把镜像写入到外部媒体介质。**

**注意：由于VIM1、VIM2和VIM3操作方式基本上是一样的，所以本文档以VIM1为例进行说明。**

## 准备工作
* [x] 下载 [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/)。
* [x] 解压并安装到Windows电脑上。
* [x] 一张SD卡和一个SD卡读卡器或一个U盘。

注意：若是SD卡或U盘里面有数据要提前备份出来，制作过程会格式化整个SD卡。

## 下载固件
可以从[固件列表](/zh-cn/vim1/FirmwareThirdparty.html#LibreELEC)下载LibreELEC固件。
*注意：固件包含KVIM字样的是VIM1的固件，包含KVIM2字样的是VIM2固件。*

## 写入固件到SD/USB存储器
### 通过Windows PC写入
1. 运行Win32DiskImager
2. 插入SD或U盘到电脑上，电脑有识别到SD卡或U盘的盘符
3. 选择固件，并确认已经选择正确的SD卡或U盘盘符，然后点击"write":
![Image of Win32DiskImagerLibreELEC.jpg](/images/vim1/Win32DiskImagerLibreELEC.jpg)
4. 操作完成后，安全移除SD卡或U盘。

### 通过Linux PC写入
**获取SD卡或U盘设备的节点:**
插入SD卡或U盘到电脑上，通过"dmesg | tail"指令找到TF卡设备，挂载在节点。也可以使用“parted”或者“fdisk”，这两个跟"/dev/sdX"有点类似:
```
$ sudo parted -l
...
Model: Mass Storage Device (scsi)
Disk /dev/sdb: 3997MB
Sector size (logical/physical): 512B/512B
Partition Table: msdos
Disk Flags: 

Number  Start   End     Size    Type     File system  Flags
 1      16.5MB  3989MB  3973MB  primary  fat32        boot
```
**确保接上去的SD卡或U盘处于未挂载状态:**
```
$ sudo umount /dev/sdb1
```
**使用"dd"写入磁盘映像文件到SD卡或U盘**
```
sudo dd if==LibreELEC-S905_SD_USB.aarch64-17.6_20180122-KVIM.img of=/dev/sdb bs=4M && sync
```
_说明: 写入指令操作完后，为确保缓存都已写入到SD卡或U盘中可以执行一下"sync"指令再进行安全移除。_

**安全移除SD卡**
```
$ sudo eject /dev/sdb
```
至此，启动卡制作已完成。

## 从SD卡或U盘启动LibreELEC
要运行SD卡或U盘中的固件，需要安卓运行在eMMC，同时还要激活多启动。
激活多启动方式有两种：
1)、通过[按键模式](/zh-cn/vim1/HowtoBootIntoUpgradeMode.html#按键模式-U-Boot正常运行)。
2)、通过安卓系统激活。
* 进入`Settings>About Device->System->updates`。
* 点击`select`并选择`aml_autosript.zip`。
* 点击`update`，系统会重启运行外部媒体介质固件。
**注意：不要使用电脑USB供电，要使用适配器供电，否则会导致激活多启动失败！**

## 注意
* 对于之前的Android N存在权限问题，所以不能通过之前版本来启动外部媒体介质镜像，否则或导致外部媒体介质镜像被破坏。

* 对于Android O同样有权限问题。如果你想要通过Android O来启动linux 4.9内核的系统，可以参考[这里](http://forum.khadas.com/t/armbian-kodi-ubuntu-debian-for-sd-usb-emmc/825/109)解决。

