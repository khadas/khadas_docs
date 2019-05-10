title: Create A Burning Card From Command Line
---
This guide contains step-by-step instructions to create a Burning Card for Linux users. You may also use this [Windows Guide](/vim1/UpgradeViaTFBurningCard.html) instead.


### Preparation:
* Build your own, or [download](https://dl.khadas.com/Firmware/VIM1/U-boot/) the latest U-Boot file for SD-Cards.
* You may need to [format the SD-Card Via FDisk](/vim1/CreateBurnCardViaCLI.html) if your SD-Card contains >1 partition.


### Before You Start
If your SD-Card has >1 partition.
```sh
$ ls /dev/sdb*
/dev/sdb  /dev/sdb1  /dev/sdb2
$ 
```

You may have to delete the other partitions first:
```sh
fdisk /dev/sdb
```

### Create the Burning SD-Card
**Insert the SD-Card into your PC, and make sure the disk is unmounted:**
```sh
$ umount /dev/sdb1
```

**Format the SD-Card to FAT32:**
```sh
$ sudo mkfs.vfat /dev/sdb1 
```

**Use `dd` to write the Bootloader/U-Boot to the first sector of SD-Card:**
```sh
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdb conv=fsync,notrunc bs=1 count=444
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdb conv=fsync,notrunc bs=512 skip=1 seek=1
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
$ sudo eject /dev/sdb
```

Done!

### Upgrade Using Your "Burning Card"

1. Insert your Burning Card into your VIM, and power-on.
2. Follow this [guide](/vim1/HowtoBootIntoUpgradeMode.html) to boot into Upgrade Mode.
3. Wait till the process completes.

### Further Reading:
* [Booting_Card Vs Burning Card](/vim1/BootingCardVsBurningCard.html)

