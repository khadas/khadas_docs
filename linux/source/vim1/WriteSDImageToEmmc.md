title: Write SD/USB firmware to eMMC
---

This document describes how to write the firmware in SD/USB to eMMC.

## Boot from SD/USB

1. **Write the firmware to SD card or U disk**. To make a boot card, please refer to: [How to write firmware to SD/USB](BootFromExtMedia#Install-Image-to-SD-USB-Storage).
2. **Boot the system from SD card or U disk**. Please refer to the boot method: [Boot System from External Media](BootFromExtMedia.html).

## Write to eMMC

1. Startup script:

```sh
khadas@Khadas:~$ sudo emmc-install
```

2. After the script starts, select option 1 to install the system into eMMC.

<img src="/linux/images/vim1/Write_SD_image_to_eMMC1.png" width="800px">

3. To install to eMMC, eMMC needs to be cleared.

<img src="/linux/images/vim1/Write_SD_image_to_eMMC2.png" width="800px">

4. After clearing eMMC, eMMC will format and install the system to eMMC.

<img src="/linux/images/vim1/Write_SD_image_to_eMMC3.png" width="800px">
<img src="/linux/images/vim1/Write_SD_image_to_eMMC4.png" width="800px">

5. After the installation is complete, select `Power off`, remove the SD card or U disk and boot from eMMC.

<img src="/linux/images/vim1/Write_SD_image_to_eMMC5.png" width="800px">

If you don't want to use the firmware in eMMC immediately, you can choose Exit.

