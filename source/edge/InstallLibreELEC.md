title: How to Install LibreELEC
---

**LibreELEC boots from external media (SD-Card), so you need to write the image to SD card.**

## Preparation
- [x] Download the [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/).
- [x] Extract and install it on your Windows PC.
- [x] An SD Card and a Card Reader is required, make sure there is nothing important on your card as ALL the data will be erased after the following operations.

## Download The LibreELEC Image
You can download LibreELEC images from [Edge LibreELEC firmware page](/edge/FirmwareLibreelec.html).

## Write Image to SD Storage
There are two ways to write a LibreELEC image to SD card:

### Using Windows
1. Run Win32DiskImager.
2. Insert the SD card into your PC, it should appear as a new drive letter.
3. Select the .img file and verify that the destination drive letter is correct, then click `write`:
![Image of Win32DiskImagerLibreELEC.jpg](/images/edge/Win32DiskImagerLibreELEC.jpg)
4. When the write-process is complete, you can safely remove the SD card by right-clicking on the drive in "Windows Explorer" and selecting "Eject".

### Using Linux
**Get The SD Storage Device Node:**
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

**Use `dd` to write the disk image into SD/USB card:**
```sh
sudo dd if=LibreELEC-RK3399.arm-9.0-devel-20181219114346-cc816a4-khadas-edge.img of=/dev/sdb bs=4M && sync
```
*Notice: The `sync` flag is to ensure that all changes are synced to the SD card before removing it.*


**Eject the SD/USB card:**
```sh
$ sudo eject /dev/sdb
```

## Boot LibreELEC from the SD card
Insert the SD card to SD card slot and reset the board by pressing the `RESET` key then the system will boot from SD card.

