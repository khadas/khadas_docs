title: 通过Fastboot单独刷Image
---

## 什么是Fastboot

Fastboot是一种快速升级Android每个分区包的方法，是通过USB数据线连接设备的刷机模式。

### 进入Fastboot模式

板子重新上电，串口调试工具界面按住回车，停在U-Boot命令行下，输入`fastboot 1`命令进入烧录模式。

```sh
$ fastboot 1
```
![image](/android/images/vim4/How_To_Use_Fastboot_On_VIM4_1.png)

### 解锁引导加载程序

为了使Fastboot刷机，首先我们必须解锁引导加载程序，否则不能被烧录。

进入Fastboot模式后，输入以下命令解锁：

```sh
$ fastboot flashing unlock
$ fastboot flashing unlock_critical
```
![image](/android/images/vim4/How_To_Use_Fastboot_On_VIM4_2.png)

### Bootloader模式的烧录命令

```sh
$ fastboot devices
$ fastboot reboot
$ fastboot reboot-bootloader
$ fastboot flashing unlock_critical
$ fastboot flashing unlock
$ fastboot flashing lock_critical
$ fastboot flashing lock
$ fastboot flashing get_unlock_ability
$ fastboot flash bootloader bootloader.img
$ fastboot flash bootloader-boot0 bootloader.img
$ fastboot flash bootloader-boot1 bootloader.img
$ fastboot flash dts dt.img
$ fastboot flash dtbo dtbo.img
$ fastboot flash vbmeta vbmeta.img
$ fastboot flash logo logo.img
$ fastboot flash boot boot.img
$ fastboot flash super super.img //not support burn logic partition in bootloader
$ fastboot flash recovery recovery.img
$ fastboot erase env/param/tee/boot/recovery/dtb
$ fastboot -w
$ fastboot format cache
$ fastboot getvar all
$ fastboot getvar is-userspace // return no in bootloader
$ fastboot getvar is-logical:boot //return no, others
$ fastboot getvar is-logical:system //return yes, system/odm/vendor/product
$ fastboot getvar super-partition-name //return super
```
升级固件后，你可以选择是否锁定设备（调试过程中不需要）。

```sh
$ fastboot flashing lock_critical
$ fastboot flashing lock
```
### 单独更新Kernel
```sh
$ fastboot flash vendor_boot /path/to/vendor_boot.img
```

### 单独更新dts
```sh
$ fastboot flash vendor_boot_a /path/to/vendor_boot.img
```

### 退出FastBoot并重启设备

```sh
$ fastboot reboot
```
