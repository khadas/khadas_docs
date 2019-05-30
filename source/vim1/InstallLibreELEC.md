title: How to Install LibreELEC
---

**LibreELEC boots from external media (SD-Card or Thumbdrive), so you need to write the image to SD/USB storage.**

**Note: The operation of VIM1, VIM2 and VIM3 is almost the same, so this document will take VIM1 as an example.**

## Preparation
- [x] Download the [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/).
- [x] Extract and install it on your Windows PC.
- [x] An SD Card and a Card Reader or a Thumdrive (U-Disk) is required, make sure there is nothing important on your card as ALL the data will be erased after the following operations.

## Download The LibreELEC Image
You can download LibreELEC images from [VIM1](/vim1/FirmwareThirdparty.html#LibreELEC)/[VIM2](https://docs.khadas.com/vim2/FirmwareThirdparty.html#LibreELEC)/[VIM3](https://docs.khadas.com/vim3/FirmwareThirdparty.html#LibreELEC).
*Note: Image names containing "KVIM" is an image for VIM1, "KVIM2" is for VIM2, and "KVIM3" is for VIM3*

## Write Image to SD/USB Storage
There are two ways to write a LibreELEC image to SD/USB storage:

### Using Windows
1. Run Win32DiskImager.
2. Insert the SD/USB storage into your PC, it should appear as a new drive letter.
3. Select the .img file and verify that the destination drive letter is correct, then click `write`:
![Image of Win32DiskImagerLibreELEC.jpg](/images/vim1/Win32DiskImagerLibreELEC.jpg)
4. When the write-process is complete, you can safely remove the SD/USB storage by right-clicking on the drive in "Windows Explorer" and selecting "Eject".

### Using Linux
**Get The SD/USB Storage Device Node:**
After you've inserted the SD-Card to your PC, use `dmesg | tail` to find out which /dev/sdX it is located at. 
You can also use `parted` or `fdisk`, It should look something similar to /dev/sdX:
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
*Notice: The `sync` flag is to ensure that all changes are synced to the SD/USB storage before removing it.*


**Eject the SD/USB storage:**
```sh
$ sudo eject /dev/sdb
```

## Boot LibreELEC from the SD/USB storage
In order to boot from the SD/USB storage, **you need Android running on the eMMC** to activate the Multi-Boot.

2 to activate the Multi-Boot:

1). [Keys mode (Side-Buttons)](/vim1/HowtoBootIntoUpgradeMode.html#Keys-Mode-U-Boot-is-running)
2). Activate Multi-Boot using Android.
* Enter `Settings>About Device->System->Updates`
* Click select and choose `aml_autosript.zip`
* Click update, then the system will reboot and boot from the external media image stored on the SD-Card.
**Note: Don't use your PC as a USB-Host to supply the electrical-power, lest Multi-Boot will fail to activate!**


## NOTICE
* Android N has a permission issue; Your bootable SD card will be damaged, if you attempt to use it to boot.
* Android O also has a permission issue. If you want to boot Ubuntu with Linux 4.9 please refer to [this guide](http://forum.khadas.com/t/armbian-kodi-ubuntu-debian-for-sd-usb-em mc/825/109).


