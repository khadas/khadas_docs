title: Fastboot Burning Image
---

## What is Fastboot

Fastboot is a way to quickly upgrade each partition package of Android. It is a brush mode of connecting devices with USB cable.

### Enter Fastboot Mode

1. Power on or reboot the VIM4 board, press `enter` in the serial terminal on your PC, then enter the U-Boot command line mode.

2. Tpye `fastBoot 1` command to enter the burning mode.

```sh
$ fastboot 1
```
![image](/android/images/vim4/fastboot_on_vim4_1.png)

### Unlock Bootloader

To use fastboot to brush the machine, you must first unlock the bootloader, otherwise the machine cannot be flashed.

After entering the fastboot mode, input the following command to unlock:

```sh
$ fastboot flashing unlock
$ fastboot flashing unlock_critical
```
![image](/android/images/vim4/fastboot_on_vim4_2.png)

### Burning Command in Bootloader Mode

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

After upgrading the firmware, you can choose to lock the device (Not required during debug).

```sh
$ fastboot flashing lock_critical
$ fastboot flashing lock
```

### Update Kernel
```sh
$ fastboot flash vendor_boot /path/to/vendor_boot.img
```

### Update DTS
```sh
$ fastboot flash vendor_boot_a /path/to/vendor_boot.img
```

### Exit Fastboot and Restart the Device

```
$ fastboot reboot
```
