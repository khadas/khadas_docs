title: Boot Images from External Media
---

There are several images that are designed to run from a SD Card or Thumbdrive (U-Disk) and are compatible with VIMs. For example:
* [Armbian with Debian / Ubuntu](http://forum.khadas.com/t/armbian-kodi-ubuntu-debian-for-sd-usb-emmc/825)
* [CoreELEC](https://coreelec.org/)
* [LibreELEC](https://libreelec.tv/downloads_new/khadas-vim/)
* [Volumio](https://forum.khadas.com/t/volumio-for-khadas/1437)
* Khadas SD images
  * [VIM1](https://dl.khadas.com/Firmware/VIM1/Ubuntu/SD_USB/)
  * [VIM2](https://dl.khadas.com/Firmware/VIM2/Ubuntu/SD_USB/)
  * [VIM3](https://dl.khadas.com/Firmware/VIM3/Ubuntu/SD_USB/)

This tutorial is about how to boot these images.

### Step 1. Clone image to SD card or Thumbdrive (U-Disk)
There are several ways to burn an image to a SD card or Thumbdrive:

* [Etcher](https://www.balena.io/etcher/) got a user-friendly GUI for beginners, and is compatible with Mac, Windows and Linux. Simply select an image and it will automatically identify your external device which the image is going to be burned to. **(Recommended)**

![Howto Use Etcher](/images/vim1/HowtoUseEtcher.png)

* `dd` on Ubuntu / Debian with command line:
```
$ sudo dd if=/path/to/image of=/dev/sdX bs=8M
```

* `Win32DiskImager` on Windows. Please refer to [Install LibreELEC Via Windows PC](/vim1/InstallLibreELEC.html#On-Windows-PC).

### Step 2. Select the appropriate DTB file
* Navigate to your SD card's / Thumbdrive's `/boot` directory, and open the folder labelled `dtb`.

**All images except Armbian and LibreELEC:**
* Find the correct `.dtb` file and copy it into your SD card's `/boot` directory.

  * VIM1: Copy `kvim.dtb`, `kvim_linux.dtb` or `meson-gxl-s905x-khadas-vim.dtb` to `/boot`, and rename it to `dtb.img`.
  * VIM2: Copy `kvim2.dtb`, `kvim2_linux.dtb` or `meson-gxm-khadas-vim2.dtb` to `/boot`, and rename it to `dtb.img`.
  * VIM3: Copy `kvim3_linux.dtb` or `kvim3l_linux.dtb` to `/boot`, and rename it to `dtb.img`.

**Note**:if you board is `VIM3`,please choose `kvim3_linux.dtb`, or your board is `VIM3 Lite`,please choose `kvim3l_linux.dtb`.

**Armbian or LibreELEC:**
* Find the correct .dtb filename in the folder `/dtb`. Examples:
  * VIM1: `/dtb/meson-gxl-s905x-khadas-vim.dtb`
  * VIM2: `/dtb/meson-gxm-khadas-vim2.dtb`
  * VIM3: `/dtb/meson-g12b-a311d-khadas-vim3.dtb`

* Edit `FDT` in `/extlinux/extlinux.conf` and `dtb_name=` in `uEnv.ini` with the correct dtb filename.


### Step 3. Boot VIM from SD card or Thumbdrive
There are several ways to boot (activate multi-boot) from the SD card / Thumbdrive:

* Via [Keys mode (Side-Buttons)](/vim1/HowtoBootIntoUpgradeMode.html) - the easiest and fastest way

* Via Android

  * Enter `Settings->About Device->System->Updates`.
  * Click select and choose `aml_autosript.zip`.
  * Click update, then the system will reboot and boot from the external media image.

**WARNING: Don't use your PC as the USB-Host to supply the electrical power, otherwise it will fail to activate Multi-Boot!**

### NOTICE
* Android N has a permission issue. You cannot use it to boot from your external media image without damaging your SD card.

* Android O also has a permission issue. If you want to boot Ubuntu with Linux 4.9 please refer to [this guide](http://forum.khadas.com/t/armbian-kodi-ubuntu-debian-for-sd-usb-emmc/825/109).

* If any other OS than Android, Armbian or LibreELEC has been installed to eMMC and you want to install either Armbian or LibreELEC to eMMC, the eMMC has to be completely wiped with `dd` before latest Android is burned to eMMC by following [Upgrade Via a USB-C Cable](https://docs.khadas.com/vim1/UpgradeViaUSBCable.html).
