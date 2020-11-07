title: How To Use Fastboot
---
## What is FastBoot
FastBoot is a way to quickly upgrade each partition package of Android.It is a brush mode of connecting devices with USB cable.
## Begin to Use FastBoot

### 1.Enter FastBoot mode
Input the following ADB command:
```
adb reboot fastboot
```
![image](/images/vim3/How_To_Use_Fastboot_On_VIM3_1.png)

### 2.Unlock bootloader
To use FastBoot to brush the machine, you must first unlock the bootloader, otherwise the machine cannot be flashed.
After entering the FastBoot mode, input the following command to unlock:
```
fastboot flashing unlock
```
![image](/images/vim3/How_To_Use_Fastboot_On_VIM3_2.png)

### 3.Select the image you want to brush
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
give an example：
![image](/images/vim3/How_To_Use_Fastboot_On_VIM3_3.png)
After upgrading the firmware, you can choose to lock the device （Not required during debug）:
```
fastboot flashing lock
```

### 4.Exit FastBoot and restart the device:
```
fastboot reboot
```
![image](/images/vim3/How_To_Use_Fastboot_On_VIM3_4.png)
