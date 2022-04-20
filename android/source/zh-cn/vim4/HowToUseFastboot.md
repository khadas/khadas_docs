title: Fastboot使用说明
---

## 什么是Fastboot

Fastboot是一种快速升级Android每个分区包的方法。

### 进入Fastboot模式

1. 通过USB数据线连接VIM4和电脑。
2. 参考[文档](SetupSerialTool)设置串口。
3. 确保串口连线正确。
4. 系统启动时按空格键进入串口命令行模式。
5. 执行`fastboot 1`命令进入Fastboot烧录模式。

```sh
$ fastboot 1
```
![image](/android/images/vim4/fastboot_on_vim4_1.png)

### 解锁引导加载程序

为了使设备能够正常进行Fastboot刷机，首先我们必须解锁引导加载程序，否则不能被烧录。

进入Fastboot模式后，输入以下命令解锁：

```sh
$ fastboot flashing unlock
$ fastboot flashing unlock_critical
```
![image](/android/images/vim4/fastboot_on_vim4_2.png)

### Fastboot命令

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
