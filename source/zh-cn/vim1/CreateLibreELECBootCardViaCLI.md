title: 通过命令行创建LibreELEC启动卡
---

**注意：由于VIM1、VIM2和VIM3操作方式基本上是一样的，所以本文档以VIM1为例进行说明。**

### 概述
* 本教程面向LibreELEC，同样也适用于OpenELEC, OSMC 和其它OpenELEC分支。
* 准备好TF卡和读卡器。

注意：若是TF卡里面有数据要提前备份出来，制作过程会格式化整个TF卡。

### 制作TF引导卡

**获取TF卡设备的节点:**
插入TF卡到电脑上，通过"dmesg | tail"指令找到TF卡设备，挂载在节点。也可以使用“parted”或者“fdisk”，这两个跟"/dev/sdX"有点类似:
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
**确保接上去的TF卡处于未挂载状态:**
```
$ sudo umount /dev/sdb1
```
**使用"dd"写入磁盘映像文件到TF卡**
```
sudo dd if=Vim_LibreELEC_V161003/update.img of=/dev/sdb bs=4M && sync
```
_说明: 写入指令操作完后，为确保缓存都已写入到TF卡中可以执行一下"sync"指令再进行安全移除。_

**安全移除TF卡**
```
$ sudo eject /dev/sdb
```
至此，启动卡制作已完成。接下来你就可以把TF卡插入VIM/VIM2上去体验一下LibreELEC了。

### 更多资料
* [LibreELEC官方安装指导](https://wiki.libreelec.tv/doku.php)
* [通过Windows电脑安装LibreELEC](/zh-cn/vim1/InstallLibreELECViaWindows.html)

