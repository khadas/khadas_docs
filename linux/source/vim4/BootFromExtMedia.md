title: Boot from External Media
---

There are several images that are designed to run from a SD Card or Thumbdrive (U-Disk) and are compatible with VIMs. For example:

* Khadas SD images
  * [VIM4](https://dl.khadas.com/Firmware/VIM4/Ubuntu/SD_USB/)

This documentation will introduce how to boot these images.

## Install Image to SD/USB Storage

Please check [Install System on SD/USB Storage](InstallOsIntoSdusb.html).

## Boot

Insert SD card or U-Disk to board and power on, the system will boot from SD card or U-Disk automatically.

{% note warn Note %}

If there is no image in SPI Flash or eMMC, then the system can't boot from U-Disk directly, you have to install system into SPI Flash or eMMC to boot system in U-Disk.

{% endnote %}

## See Also

[OS Boot Priority](BootSequeue.html)
