title: Create a Bootable SD Card
---

Well, what is a bootable SD card?

* Bootable SD card is a SD card install the bootable bootloader on it.
* Bootable SD card is a boot disk and your target device boot from the SD card.

And why we need a bootable SD card?

* Bootable SD card can be used in the development, to speed up the process.
* If you wanna release ROM for SD card, Bootable SD card can be used in the development, 
* In some cases, when your target device can not boot and even fail to load the bootloader, you can use bootable SD card to do the recovery.


### Steps to get started
[Download](http://dl.khadas.com/Firmware/VIM1/U-boot/) or build u-boot to get the bootloader blob for SD card.
No matter which way you take, you both need to keep in mind that there are different bootloader blobs for different boot disk/media:

* u-boot blob `u-boot.bin.sd.bin` is built for SD card
* u-boot blob `u-boot.bin` is built for eMMC storage

Pop the SD card into your PC, and make sure the disk is unmounted:
```sh
$ umount /dev/sdb1
```

Format the SD card as Fat32:
```sh
$ sudo mkfs.vfat /dev/sdb1 
```

Run `dd` to write the u-boot blob into the first sector of SD card:
```sh
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdb conv=fsync,notrunc bs=1 count=444
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdb conv=fsync,notrunc bs=512 skip=1 seek=1
```

Eject the SD card from PC:
```sh
$ sudo eject /dev/sdb
```

### Check it

Ensure that you have done the right [setup of Serial to USB module](/vim1/SetupSerialTool.html).

In order to check the bootable SD card, you might also need to make sure that all the data stored in the onboard eMMC has been [wipe out](/vim1/HowtoEraseEMMC.html).

Open a terminal type `kermit` command:
```
gouwa@Wesion:~$ kermit
Connecting to /dev/ttyUSB0, speed 115200
 Escape character: Ctrl-\ (ASCII 28, FS): enabled
Type the escape character followed by C to get back,
or followed by ? to see other options.
----------------------------------------------------

```

Insert the bootable SD card you create aboved into your target device and power it on, the printing should be like:
```
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
