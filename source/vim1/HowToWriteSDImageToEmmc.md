title: How to write SD image to eMMC
---

## [Clone image to SD card or Thumbdriver(U-Disk)](/vim3/BootFromExtMedia.html#Step-1-Clone-image-to-SD-card-or-Thumbdrive-U-Disk).

* Download the burning bool [Ether](https://www.balena.io/etcher/)
* [Burn the image](https://dl.khadas.com/Firmware/)
* Select image and burn it to SD card

## Booting from SD card
- By [keys mode](/vim1/HowtoBootIntoUpgradeMode.html)

  * Power on the board.
  * Long press the Power key without releasing it.
  * Short press the ‘Reset’ key and release it.
  * Count to 10 seconds and release the ‘Power’ key to enter into upgrade mode.

## Write SD image to eMMC

```
sudo emmc-install
```
### Install/Update the bootloader on SD/eMMC
![image](/images/vim1/Write_SD_image_to_eMMC1.png)

### Continue
![image](/images/vim1/Write_SD_image_to_eMMC2.png)

### Writing bootloader done
![image](/images/vim1/Write_SD_image_to_eMMC3.png)
