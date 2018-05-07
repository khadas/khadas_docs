title: Install LibreELEC Via Windows PC
---


## Preperations:
- [x] Download the [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/).
- [x] Extract and install it on your Windows PC.
- [x] A SD card and a card reader is required, make sure there's nothing important on your card as ALL the data will be wiped out after the following operations.


## Download the disk image
1. Run Win32DiskImager.
2. Insert the SD card into your PC, it should appear as a new drive letter
3. Select the image file and verify the destination drive letter is correct, then click `write`:
![Image of Win32DiskImagerLibreELEC.jpg](/images/vim1/Win32DiskImagerLibreELEC.jpg)
4. When write process completed you can safely remove the SD card by right clicking on the drive in Windows explorer and selecting eject.


## Boot from the SD card
As Khadas VIMs support many different types of boot disk(SD card, USB-Disk and onboard eMMC storage), so it's needed to figure out one manually to boot up if there are more than two bootable media exist at the same time. Ways to boot from the bootable SD card you created aboved:

1. Long press the `Function` button to boot from SD card.(Need upgrade to the latest ROM first)
2. [Erase the eMMC](/vim1/HowtoEraseEMMC.html) and Khadas VIMs will boot from the SD card automately.
3. Force enter into MaskRom mode([VIM1](/vim1/HowtoBootIntoUpgradeMode.html)/[VIM2](/vim2/HowtoBootIntoUpgradeMode.html)) first, then Khadas VIMs will try to boot from SD card.

*Tips:*

* Make sure that the SD card is a bootable card and writed with the right disk image aboved.
* eMMC is the 1st boot disk for Khadas VIMs, so if there are bootable ROM on eMMC, the hardware will boot from eMMC first.
* `Function` button mode: the hardware will boot from eMMC first, then switch to load the image/ROM on SD card via software approach.


## See also
* [Create LibreELEC Booting Card Via CLI](/vim1/CreateLibreELECBootCardViaCLI.html)

