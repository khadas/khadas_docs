title: Boot images from external medias
---

There are many images running on SD card or U-Disk,for example, [LibreELEC](http://forum.khadas.com/t/libreelec-for-khadas-vim-sd-usb-emmc/793),[Armbian images](http://forum.khadas.com/t/armbian-kodi-ubuntu-debian-for-sd-usb-emmc/825) and [Khadas SD images](/vim1/Firmware.html#SD-USB-Installation).This tutorial is about how to boot these images.

In order to boot images from exernal medias you must make sure:
* Android running on eMMC
* Activate the multi-boot

For different images you need different Android version.
* LibreELEC, Ubuntu with linux 3.14 you need Android M or latest Android N(V180207 or later) running on eMMC.
* Ubuntu with linux 4.9 need Android O running on eMMC.

### 1. Write image to SD card or U-Disk
* Use `dd` on Ubuntu command line
```
$ sudo dd if=/path/to/image of=/dev/sdX bs=8M
```
* Use `Win32DiskImager` on Windows. Please refer to [Install LibreELEC Via Windows PC](/vim1/InstallLibreELEC.html#On-Windows-PC).

### 2. Prepare dtb
You need to choose different dtb for VIM1 and VIM2.
* VIM1: Copy `kvim.dtb` or `kvim_linux.dtb` to `/boot` and rename it to `dtb.img`.
* VIM2: Copy `kvim2.dtb` or `kvim2_linux.dtb` to `/boot` and rename it to `dtb.img`.

### 3. Activate the multi-boot
Two ways to activate the multi-boot:
1). Via [Keys mode](/vim1/HowtoBootIntoUpgradeMode.html)
2). Activate multi-boot via Android.
* Enter `Settings>About Device->System->updates`
* Click select and choose `aml_autosript.zip`
* Click update, then the system will reboot and boot to external media image
**Note: Don't use PC USB host to supply the power, or will fail to activate multi-boot!**

### NOTICE
* For previous Android N has permission issue, you can't use it to boot your external media image, or your booting card will be broken.

* For Android O also has permission issue. If you want to boot Ubuntu with linux 4.9 please refer to [this reply](http://forum.khadas.com/t/armbian-kodi-ubuntu-debian-for-sd-usb-emmc/825/109).
