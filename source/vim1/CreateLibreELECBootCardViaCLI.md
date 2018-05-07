title: Install LibreELEC Via Command Line
---


## Overviews
* The instruction is writed for LibreELEC, can suit for OpenELEC, OSMC and other OpenELEC branches.
* You need prepare a TF card and a card reader, and make sure there's nothing important on your card as ALL the data will be wiped out after the following operations.


## Create the Booting TF Card

**Get the device node of TF card:**

After you've inserted the TF card to your PC, use `dmesg | tail` to find out what /dev/device it is. 
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

**Use `dd` to write the disk image into TF card:**
```sh
sudo dd if=Vim_LibreELEC_V161003/update.img of=/dev/sdb bs=4M && sync
```
*Notice: `sync` is ensure the changes are synced to the TF card before removing it.*


**Eject the TF card:**
```sh
$ sudo eject /dev/sdb
```

Done.

Now you can insert the TF card into VIM1, and enjoy the LibreELEC!


## See Also:
* [LibreELEC offical installing guidance.](https://wiki.libreelec.tv/index.php?title=Installation)
* [Install LibreELEC On a Windows PC](/vim1/InstallLibreELECViaWindows.html)
