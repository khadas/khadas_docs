title: Write SD Image to eMMC
---

This guide will show you how to write an SD/USB firmware to the eMMC.

## Boot from SD/USB

1. **Write the firmware to an SD card or USB thumbdrive**. To make a bootable media, please refer to: [Install Image to SD-USB Storage](InstallOsIntoSdusb.html).

## Write OS Image to eMMC

1. Run the eMMC installation script:

```sh
khadas@Khadas:~$ sudo emmc-install
```

2. After the script starts, select option 1 to install the system into your eMMC.

<img src="/linux/images/vim1/write_sd_image_to_emmc1.png" width="800px">

3. Erase the eMMC.

<img src="/linux/images/vim1/write_sd_image_to_emmc2.png" width="800px">

4. Format the eMMC, and burn the OS image.

<img src="/linux/images/vim1/write_sd_image_to_emmc3.png" width="800px">
<img src="/linux/images/vim1/write_sd_image_to_emmc4.png" width="800px">

5. After the installation is complete, select `Power off`. Remove the SD card or thumbdrive, then reboot from eMMC.

<img src="/linux/images/vim1/write_sd_image_to_emmc5.png" width="800px">

If you don't want to boot from the eMMC immediately, you can choose Exit.
