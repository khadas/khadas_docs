title: Boot Images from External Media
---

There are many images that are designed to run from an SD Card or Thumbdrive (U-Disk). For example, [Volumio](https://forum.khadas.com/t/volumio-for-khadas/1437), [CoreELEC](https://coreelec.org/), [LibreELEC](https://libreelec.tv/downloads_new/khadas-vim/), [Armbian images](http://forum.khadas.com/t/armbian-kodi-ubuntu-debian-for-sd-usb-emmc/825) and Khadas SD images([VIM1](https://dl.khadas.com/Firmware/VIM1/Ubuntu/SD_USB/)/[VIM2](https://dl.khadas.com/Firmware/VIM2/Ubuntu/SD_USB/)/[VIM3](https://dl.khadas.com/Firmware/VIM3/Ubuntu/SD_USB/)). This tutorial is about how to boot these images.

### Step 1. Clone image to SD-Card or Thumbdrive (U-Disk)

* Download [Etcher](https://www.balena.io/etcher/), it will clone the image into your SD Card or Thumbdrive. It's got a user-friendly GUI for beginners, and is compatible with Mac, Windows and Linux.After decompression, it is an executable file. Select firmware and it will automatically identify your USB device.

![Howto Use Etcher](/images/vim1/HowtoUseEtcher.png)

* Else, use `dd` on Ubuntu:

* Use `dd` on the Ubuntu command line

```
$ sudo dd if=/path/to/image of=/dev/sdX bs=8M
```

* Or, `Win32DiskImager` on Windows:

* Use `Win32DiskImager` on Windows. Please refer to [Install LibreELEC Via Windows PC](/vim1/InstallLibreELEC.html#On-Windows-PC).

### Step 2. Copy the Appropriate DTB File

* Unplug then plug your SD card into your computer (re-mount it).

* Navigate to your SD card's `/boot` directory, and open the folder labelled `DTB`.

* Find the appropriate `.dtb` file and copy it into your SD card's `/boot` directory.

* For VIM1: Copy `kvim.dtb`, `kvim_linux.dtb` or `meson-gxl-s905x-khadas-vim.dtb` to `/boot`, and rename it to `dtb.img`.
* For VIM2: Copy `kvim2.dtb`, `kvim2_linux.dtb` or `meson-gxm-khadas-vim2.dtb` to `/boot`, and rename it to `dtb.img`.
* For VIM3: Copy `kvim3_linux.dtb` or `kvim3l_linux.dtb` to `/boot`, and rename it to `dtb.img`.

**Note:if you board is `VIM3`,please choose `kvim3_linux.dtb`, or your board is `VIM3 Lite`,please choose `kvim3l_linux.dtb`.**

### Step 3. Boot VIM from SD Card
There are 2 ways to boot from the SD Card:

1). Via [Keys mode (Side-Buttons)](/vim1/HowtoBootIntoUpgradeMode.html)

2). Activate Multi-Boot via Android.

* Enter `Settings->About Device->System->Updates`.
* Click select and choose `aml_autosript.zip`.
* Click update, then the system will reboot and boot from the external media image.

**WARNING: Don't use your PC as the USB-Host to supply the electrical power, lest it will fail to activate Multi-Boot!**

### NOTICE
* Android N has a permission issue. You cannot use it to boot from your external media image without damaging your SD card.

* Android O also has a permission issue. If you want to boot Ubuntu with Linux 4.9 please refer to [this guide](http://forum.khadas.com/t/armbian-kodi-ubuntu-debian-for-sd-usb-emmc/825/109).
