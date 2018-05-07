title: Create Burning Card Via Command Line
---

This is a step by step instructions to create burning card for linux users, you can also use the [Windows approach](/vim1/UpgradeViaTFBurningCard.html) instead.


### Preperations:
* Build to get or [download](/vim1/Firmware.html) the latest U-Boot file for SD card.
* You might need to [format the TF Card Via fdisk](/vim1/CreateBurnCardViaCLI.html) if your card exists more than one partitions.


### Before starting
In some cases, if your SD card have more then one partitions.
```sh
gouwa@Wesion:~$ ls /dev/sdb*
/dev/sdb  /dev/sdb1  /dev/sdb2
gouwa@Wesion:~$ 
```

you might need delete the other partitions first:
```sh
fdisk /dev/sdb
```

### Create the Burning TF Card
**Insert the TF card into your PC, and make sure the disk is unmounted:**
```sh
$ umount /dev/sdb1
```

**Format the TF Card as Fat32:**
```sh
$ sudo mkfs.vfat /dev/sdb1 
```

**Use `dd` to write the bootloader/u-boot to the first sector of TF Card:**
```sh
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdb conv=fsync,notrunc bs=1 count=444
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdb conv=fsync,notrunc bs=512 skip=1 seek=1
```
*Notice: u-boot file `u-boot.bin.sd.bin` is build for SD, and `u-boot.bin` is for EMMC.*

**Copy the images to TF Card:**

Pop the TF card in again, then run the following command:
```sh
$ cp -a aml_sdc_burn.ini Vim_Marshmallow_160928/update.img /media/gouwa/9CE9-3938/
```
*Tips: `aml_sdc_burn.ini` is a configuration file for u-boot to burn/download images into onboard EMMC storage*

**Eject the TF Card:**
```sh
$ sudo eject /dev/sdb
```

Done!

### Upgrade using Burning TF Card

1. Insert the burning TF card into your device, and power on
2. Follow the [guidance](/vim1/HowtoBootIntoUpgradeMode.html) to boot into upgrade mode
3. Wait

### Further Reading:
* [Create LibreELEC_Booting_Card Via CLI](/vim1/CreateLibreELECBootCardViaCLI.html)
* [Booting_Card Vs Burning Card](/vim1/BootingCardVsBurningCard.html)

