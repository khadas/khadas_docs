title: Create A Burning Card From Command Line
---
This guide contains step-by-step instructions to create a Burning Card for Linux users. You may also use this Windows Guide([VIM1](/vim1/UpgradeViaTFBurningCard.html)/[VIM2](/vim2/UpgradeViaTFBurningCard.html)/[VIM3](/vim3/UpgradeViaTFBurningCard.html)) instead.

**Note: The operation of VIM1, VIM2 and VIM3 is almost the same, so this document will take VIM1 as an example.**

### Preparation:
* Build your own, or download ([VIM1](https://dl.khadas.com/Firmware/VIM1/U-boot/)/[VIM2](https://dl.khadas.com/Firmware/VIM2/U-boot/)/[VIM3](https://dl.khadas.com/Firmware/VIM3/U-boot/)) the latest U-Boot file for SD-Cards.
* You may need to format the SD-Card Via FDisk ([VIM1](/vim1/CreateBurnCardViaCLI.html)/[VIM2](/vim2/CreateBurnCardViaCLI.html)/[VIM3](/vim3/CreateBurnCardViaCLI.html)) if your SD-Card contains >1 partition.


### Before You Start
If your SD-Card has >1 partition.
```sh
$ ls /dev/sdX*
/dev/sdX  /dev/sdX1  /dev/sdX2
$ 
```

You may have to delete the other partitions first:
```sh
fdisk /dev/sdX
```

### Create the Burning SD-Card
**Insert the SD-Card into your PC, and make sure the disk is unmounted:**
```sh
$ umount /dev/sdX1
```

**Format the SD-Card to FAT32:**
```sh
$ sudo mkfs.vfat /dev/sdX1 
```

*Note: Replace `sdX the correct one on your PC.`*

**Use `dd` to write the Bootloader/U-Boot to the first sector of SD-Card:**
```sh
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=1 count=444
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=512 skip=1 seek=1
```
*Notice: u-boot file `u-boot.bin.sd.bin` is build for SD, and `u-boot.bin` is for EMMC.*

**Copy the images to your SD-Card:**
Insert the SD-Card in again, then run the following command:
```sh
$ cp -a aml_sdc_burn.ini Vim_Marshmallow_160928/update.img /media/gouwa/9CE9-3938/
```
*Tip: `aml_sdc_burn.ini` is a configuration file for U-Boot to burn/download images into the onboard eMMC storage. You can found it [here](https://github.com/khadas/images_upgrade/blob/master/Amlogic/aml_sdc_burn.ini)*

**Eject the SD-Card:**
```sh
$ sudo eject /dev/sdX
```

Done!

### Upgrade Using Your "Burning Card"

1. Insert your Burning Card into your VIM, and power-on.
2. Follow this guide([VIM1](/vim1/HowtoBootIntoUpgradeMode.html)/[VIM2](/vim2/HowtoBootIntoUpgradeMode.html)/[VIM3](/vim3/HowtoBootIntoUpgradeMode.html)) to boot into Upgrade Mode.
3. Wait till the process completes.

### Further Reading:
* Booting_Card Vs Burning Card([VIM1](/vim1/BootingCardVsBurningCard.html)/[VIM2](/vim2/BootingCardVsBurningCard.html)/[VIM3](/vim3/BootingCardVsBurningCard.html))

