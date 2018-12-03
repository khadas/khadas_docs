title: How to Install LibreELEC
---

**LibreELEC runs on external media (SD-Card or Thumbdrive), so you need to write the image to SD/USB storage.**

## Preparations
- [x] Download the [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/).
- [x] Extract and install it on your Windows PC.
- [x] An SD card and a card reader or a thumdrive (U-disk) is required, make sure there's nothing important on your card as ALL the data will be wiped out after the following operations.

## Download the LibreELEC image
You can download LibreELEC images from [VIM1](/vim1/FirmwareThirdparty.html#LibreELEC)/[VIM2](https://docs.khadas.com/vim2/FirmwareThirdparty.html#LibreELEC).
*Note: Image contains KVIM is image for VIM1, and KVIM2 is for VIM2.*

## Write image to SD/USB storage
There are two ways to write LibreELEC image to SD/USB storage:

### On Windows PC
1. Run Win32DiskImager.
2. Insert the SD/USB storage into your PC, it should appear as a new drive letter
3. Select the image file and verify that the destination drive letter is correct, then click `write`:
![Image of Win32DiskImagerLibreELEC.jpg](/images/vim1/Win32DiskImagerLibreELEC.jpg)
4. When the write process is complete, you can safely remove the SD/USB storage by right-clicking on the drive in Windows Explorer and selecting eject.

### On Linux
**Get the device node of SD/USB storage:**
After you've inserted the TF card to your PC, use `dmesg | tail` to find out what /dev/sdX it is. 
You can also use `parted` or `fdisk`, It should be something like /dev/sdX:
```sh
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
**Make sure the disk is unmounted:**
```sh
$ sudo umount /dev/sdb1
```

**Use `dd` to write the disk image into SD/USB storage:**
```sh
sudo dd if=LibreELEC-S905_SD_USB.aarch64-17.6_20180122-KVIM.img of=/dev/sdb bs=4M && sync
```
*Notice: `sync` is ensure the changes are synced to the SD/USB storage before removing it.*


**Eject the SD/USB storage:**
```sh
$ sudo eject /dev/sdb
```

## Boot LibreELEC from the SD/USB storage
In order to boot from SD/USB storage, **you need Android running on the eMMC** to activate the multi-boot.

Two ways to activate the multi-boot:

1). Via [Keys mode](/vim1/HowtoBootIntoUpgradeMode.html#Keys-Mode-U-Boot-is-running)
2). Activate multi-boot via Android.
* Enter `Settings>About Device->System->updates`
* Click select and choose `aml_autosript.zip`
* Click update, then the system will reboot and boot to external media image
**Note: Don't use PC USB host to supply the power, or will fail to activate multi-boot!**


## NOTICE
* Android N has a permission issue; Your bootable SD card will be damaged, if you attempt to use it to boot.
* Android O also has a permission issue. If you want to boot Ubuntu with Linux 4.9 please refer to [this reply](http://forum.khadas.com/t/armbian-kodi-ubuntu-debian-for-sd-usb-em mc/825/109).


