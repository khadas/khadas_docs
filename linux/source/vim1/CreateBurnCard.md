title: Create Flash Card
---


Linux users can follow this guide to create a special SD card for "flashing" an OS into the eMMC. Windows users may use the following guides: [Install OS into SD/USB Media](InstallOsIntoSdusb.html).

{% note info The process for VIM1, VIM2, VIM3 and VIM4 is similar, so we will use VIM1 as an example. %}

{% endnote %}

{% note warn OS Installation SD Cards must use the FAT32 filesystem. Therefore, because the Ubuntu desktop image is larger then 4GB, it cannot be burned to the eMMC using this method. %}

{% endnote %}

## Preparation

* Download the latest U-Boot file for SD cards: ([VIM1](https://dl.khadas.com/Firmware/VIM1/U-boot/)/[VIM2](https://dl.khadas.com/Firmware/VIM2/U-boot/)/[VIM3](https://dl.khadas.com/Firmware/VIM3/U-boot/)/([VIM4](https://dl.khadas.com/Firmware/VIM4/U-boot/)).

* If your SD card contains >1 partition, format it using Fdisk [Create Bootable SD Card](CreateBootableSDCard.html).


## Prepare Your SD Card

**Backup all important data**, then remove all partitions on your SD card.

```bash
$ sudo fdisk /dev/sdX
```

Then create just 1 partition:

```bash
$ sudo fdisk /dev/sdX
```

{% note warn NOTE %}
	
Set the first sector to **4096**.

{% endnote %}

The single partition should look like this:

```bash
Command (m for help): p

Disk /dev/sdc: 14.86 GiB, 15931539456 bytes, 31116288 sectors
Disk model: SD Card Reader
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x2914f327

Device     Boot Start      End  Sectors  Size Id Type
/dev/sdc1        4096 31116287 31112192 14.9G 83 Linux
```

The partition must start from **4096**.

## Create the OS Installation (Burning) SD Card

Insert the SD card into your PC, make sure it is unmounted:

```bash
$ sudo umount /dev/sdX1
```

Format the SD card to FAT32:

```bash
$ sudo mkfs.vfat /dev/sdX1
```

{% note info Note %}

Replace `sdX` with the correct device node on your PC.

{% endnote %}

Use `dd` to write the Bootloader/U-boot to the first sector of the SD card:

```bash
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=1 count=444
$ sudo dd if=u-boot.bin.sd.bin of=/dev/sdX conv=fsync,notrunc bs=512 skip=1 seek=1
```

{% note info Tips %} 

The U-Boot file `u-boot.bin.sd.bin` is built for SD cards.

The U-Boot file `u-boot.bin` is built for the eMMC.

{% endnote %}

Copy the OS image to your SD card. 

Build the image yourself or download from our [dl.khadas.com](https://dl.khadas.com/Firmware/).

Insert the SD card again, then run the following command:

```bash
$ cp -a aml_sdc_burn.ini update.img /media/XXX/9CE9-3938/
```

{% note info Tips %}
	
The file `aml_sdc_burn.ini` is a configuration file for U-Boot, it's purpose is to burn images into the eMMC. You can find it [here](https://github.com/khadas/images_upgrade/blob/master/Amlogic/aml_sdc_burn.ini).

{% endnote %}

{% note warn Note %}
	
The package in `aml_sdc_burn.ini` should match your OS image!

For example, the name of the OS image is `update.img`. So the `package` variable in `aml_sdc_burn.ini` should be specified as `package = update.img`.

{% endnote %}

Eject the SD card:

```bash
$ sudo eject /dev/sdX
```

Done!

## Upgrade Using Your `OS Installation (Burning) SD Card`

1. Insert your OS installation SD card into your SBC, and power-on.
2. Follow this [guide](BootIntoUpgradeMode.html) to boot into upgrade mode.
3. Wait till the flashing process completes.
4. Eject the SD card, and reboot your SBC.
