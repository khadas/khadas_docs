title: How to write SD image to eMMC
---

## 1、[Clone image to SD card or Thumbdriver(U-Disk)](https://docs.khadas.com/vim3/BootFromExtMedia.html#Step-1-Clone-image-to-SD-card-or-Thumbdrive-U-Disk).

### 1) Download the burning bool [Ether](https://www.balena.io/etcher/)
### 2) [Burn an image](https://docs.khadas.com/firmware/index.html)
### 3) Select image and burn it

## 2、Startup from SD card
- By [keys mode](https://docs.khadas.com/vim1/HowtoBootIntoUpgradeMode.html)
1.Power on VIM1.
2.Long press the Power key without releasing it.
3.Short press the ‘Reset’ key and release it.
4.Count to 10 seconds and release the ‘Power’ key to enter into upgrade mode.

## 3、Write SD image to eMMC
```
sudo emmc-install
```
### 1) Install/Update the bootloader on SD/eMMC
![image](/images/vim1/Write_SD_image_to_eMMC1.png)
### 2) Continue
![image](/images/vim1/Write_SD_image_to_eMMC2.png)
### 3）Writing bootloader down
![image](/images/vim1/Write_SD_image_to_eMMC3.png)




