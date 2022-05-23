title: Create Bootable SD Cards
---

What is a bootable SD card?

* A bootable SD card is an SD card that has a bootloader installed on it.
* A bootable SD card is also known as a boot disk, which your SBC can boot-up from.

Why do we need a bootable SD card?

* You can release your custom ROM as a bootable SD card, in order to speed up the testing and development process.
* You can use a bootable SD card to do system/file recovery, in the event that your SBC is unable to boot from the eMMC.

{% note info The process for VIM1, VIM2, VIM3, VIM3L and VIM4 is similar, so we will use VIM1 as an example. %}

{% endnote %}

## Getting Started
Download U-Boot for ([VIM1](https://dl.khadas.com/Firmware/VIM1/U-boot/)/[VIM2](https://dl.khadas.com/Firmware/VIM2/U-boot/)/[VIM3](https://dl.khadas.com/Firmware/VIM3/U-boot/)/[VIM4](https://dl.khadas.com/Firmware/VIM4/U-boot/)), or get the correct bootloader blob for your SD card and manually build U-Boot. Regardless of which method you choose, you need to remember that there are different bootloader blobs for different boot disks/media:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim123-tab" data-toggle="tab" href="#vim123" role="tab" aria-controls="vim123" aria-selected="true">VIM1/VIM2/VIM3/VIM3L</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-tab" data-toggle="tab" href="#vim4" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim123" role="tabpanel" aria-labelledby="vim123-tab">


* `u-boot.bin.sd.bin` is for SD-Cards
* `u-boot.bin` is for eMMC storage

</div>
<div class="tab-pane fade show" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

* `u-boot.bin.sd.bin.signed` is for SD cards
* `u-boot.bin.signed` is for eMMC storage
* `u-boot.bin.spi.bin.signed` is for SPI flash

</div>
</div>

Insert the SD card into your PC, and unmount it:

```bash
$ sudo umount /dev/sdX1
```

Format the SD card as FAT32:

```bash
$ sudo mkfs.vfat /dev/sdX1
```

Run `dd` to write the U-Boot blob into the first sector of SD card:
```bash
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=1 count=444
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=512 skip=1 seek=1
```

Eject the SD card from your PC:
```bash
$ sudo eject /dev/sdX
```

{% note info Note %}

Replace `sdX` with the correct device node on your PC.

{% endnote %}

## Check Your Bootable SD Card

Connect your PC to your SBC using a [Serial to USB tool](SetupSerialTool.html).

Open Terminal and type `sudo minicom` to open a serial connection to your SBC.

Insert the Bootable SD card into your SBC and power on. 

If your SBC has successfully booted from the SD card, you should get this Terminal print-out:

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

{% note info Note %}

In rare cases, you may need to [erase the eMMC](erase_emmc.html) in order to boot from an SD card.

{% endnote %}
