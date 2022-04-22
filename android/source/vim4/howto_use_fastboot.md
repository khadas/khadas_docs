title: Fastboot Usage
---

## What is Fastboot

Fastboot is a way to quickly upgrade each partition package of Android.

### Enter Fastboot Mode

1. Connect the PC host and VIM4 with USB line.

2. Refer this [guide](SetupSerialTool) to setup your serial tool.

3. Once again, make sure you’ve done the correct connections and setup.

4. Hit `Enter` keys at the moment of bootup to stop autoboot. This step will let VIM4 boot into U-Boot Mode.

5. Tpye `fastBoot 1` command to enter the burning mode.

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

### Fastboot Commands

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
