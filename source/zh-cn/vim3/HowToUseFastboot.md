title: 如何使用Fastboot
---
## 什么是Fastboot
Fastboot是一种快速升级Android每个分区包的方法，是通过USB数据线连接设备的刷机模式。

## 开始使用Fastboot
### 1、进入Fastboot模式
输入以下ADB命令：
```
adb reboot fastboot
```
![image](/images/vim3/How_To_Use_Fastboot_On_VIM3_1.png)


### 2、解锁引导加载程序
为了使Fastboot刷机，首先我们必须解锁引导加载程序，否则不能被烧录。
进入Fastboot模式后，输入以下命令解锁。
```
fastboot flashing unlock
```
![image](/images/vim3/How_To_Use_Fastboot_On_VIM3_2.png)

### 3、选择你想要烧录的图片
```
fastboot flash boot /path/to/boot.img
fastboot flash logo /path/to/logo.img
fastboot flash recovery /path/to/recovery.img
fastboot flash system /path/to/system.img
fastboot flash dts /path/to/dt.img
fastboot flash bootloader /path/to/u-boot.bin
fastboot flash vendor /path/to/vendor.img
fastboot flash odm /path/to/odm.img
```
例如：
![image](/images/vim3/How_To_Use_Fastboot_On_VIM3_3.png)
升级固件后，你可以选择是否锁定设备（调试过程中不需要）：
```
fastboot flashing lock
```

### 4、退出FastBoot并重启设备
```
fastboot reboot
```
![image](/images/vim3/How_To_Use_Fastboot_On_VIM3_4.png)
