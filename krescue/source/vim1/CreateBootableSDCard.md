title: Create A Bootable SD Card
---

What is a `Bootable SD-Card`?

* A `Bootable SD-Card` is an SD-Card that has a bootloader installed on it.
* A `Bootable SD-Card` is also known as a `Boot-Disk`, and your target device will be able to boot from the SD-Card, as though it were the onboard eMMC storage.

Why do we need a `Bootable SD-Card`?

* A `Bootable SD-Card` can be used to speed up the development process.
* If you want to release ROM for an SD-Card, the `Bootable SD-Card` can be used during your development process.
* In some extreme cases, when your target-device is unable to boot from the eMMC (e.g. damaged bootloader), you can use a `Bootable SD-Card` to do your system/file recovery.


{% note info The operation of VIM1, VIM2 and VIM3 is almost the same, so this document will take VIM1 as an example. %}

{% endnote %}

## Getting Started
Download U-Boot ([VIM1](https://dl.khadas.com/Firmware/VIM1/U-boot/)/[VIM2](https://dl.khadas.com/Firmware/VIM2/U-boot/)/[VIM3](https://dl.khadas.com/Firmware/VIM3/U-boot/)) or build U-Boot to get the bootloader blob for your SD-Card.
No matter which method you choose, you need to keep in mind that there are different bootloader blobs for different boot disks/media:

* U-Boot blob `u-boot.bin.sd.bin` is built for SD-Cards
* U-Boot blob `u-boot.bin` is built for eMMC Storage

Insert the SD-Card into your PC, and make sure the disk is unmounted:

```bash
$ sudo umount /dev/sdX1
```

Format the SD-Card as Fat32:

```bash
$ sudo mkfs.vfat /dev/sdX1
```

Run `dd` to write the U-Boot blob into the first sector of SD-Card:
```bash
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=1 count=444
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=512 skip=1 seek=1
```

Eject the SD-Card from your PC:
```bash
$ sudo eject /dev/sdX
```

{% note info Note %}

Please replace `sdX` with the correct one on your PC.

{% endnote %}

## Check Your Bootable SD-Card

Ensure that you have done the correct setup of your Serial to USB Module([VIM1](/vim1/SetupSerialTool.html)/[VIM2](/vim2/SetupSerialTool.html)/[VIM3](/vim3/SetupSerialTool.html)).

In order to check the Bootable SD-Card, you may also need to make sure that all data stored in the onboard eMMC has been completely erased([VIM1](/vim1/HowtoEraseEMMC.html)/[VIM2](/vim2/HowtoEraseEMMC.html)/[VIM3](/vim3/HowtoEraseEMMC.html)).

Open a terminal and type the `sudo minicom` command or other serial tool you like.

Insert the Bootable SD-Card you created previously, into your target device and power-on. The terminal should print this out which means the board is booted from SD card:

```bash
GXL:BL1:9ac50e:a1974b;FEAT:ADFC318C;POC:3;RCY:0;EMMC:0;READ:0;CHK:AA;SD:0;READ:0;0.0;CHK:0;
no sdio debug board detected 
TE: 194208

BL2 Built : 13:48:56, Sep 23 2016. 
gxl g7459bd4 - jianxin.pan@droid06

set vcck to 1120 mv
set vddee to 1000 mv
Board ID = 6
CPU clk: 1200MHz
DQS-corr enabled
DDR scramble enabled
DDR3 chl: Rank0+1 @ 792MHz - PASS
Rank0: 1024MB(auto)-2T-11
Rank1: 1024MB(auto)-2T-11
DataBus test pass!
AddrBus test pass!
Load fip header from SD, src: 0x0000c200, des: 0x01400000, size: 0x00004000
New fip structure!
Load bl30 from SD, src: 0x00010200, des: 0x01100000, size: 0x0000d600
Load bl31 from SD, src: 0x00020200, des: 0x10100000, size: 0x00015400
Load bl33 from SD, src: 0x00038200, des: 0x01000000, size: 0x000a3400
NOTICE:  BL3-1: v1.0(debug):2e39a99
...

```
