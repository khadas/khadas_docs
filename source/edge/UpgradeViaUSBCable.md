title: Upgrade Using a USB-C Cable
---
## Upgrade Using Windows
### Preparations
* Download the [USB driver_v4.91](https://dl.khadas.com/Tools/DriverAssitant_v4.91.zip) and extract it.
* Run `DriverInstall.exe` to install USB drivers.
  * Click the `Uninstall` button to uninstall old drivers
  ![DriverInstall uninstall](/images/edge/DriverInstall_uninstall.png)
  * Click the `Install` button to install drivers
  ![DriverInstall install](/images/edge/DriverInstall_install.png)
* Download the [AndroidTool_Release_en_v2.71](https://dl.khadas.com/Tools/AndroidTool_Release_en_v2.71.zip) and extract it.
* `AndroidTool.exe` is the burning tool, you don't need to install it.

### Upgrading Steps
Make sure that you have installed the correct USB drivers, then follow these steps to upgrade:

1. Open `AndroidTool.exe`, click `Upgrade Firmware-->Firmware` to choose an image for Edge.
![AndroidTool firmware select](/images/edge/AndroldTool_firmware.png)
2. Connect Edge and PC with a USB-C data-cable (Edge will power-on automatically).
3. Let Edge [enter into Upgrade Mode](/edge/HowtoBootIntoUpgradeMode.html) to complete the upgrading.
4. Your PC should have found your Edge device as a connected USB device, if you had correctly followed the instructions above.
* Loader Mode:
![AndroidTool loader](/images/edge/AndroldTool_loader.png)
* Maskrom Mode:
![AndroidTool maskrom](/images/edge/AndroldTool_maskrom.png)

If the board is upgraded from `android 7.1` to `android 9.0 ` firmware or the board is upgraded from `android 9.0` to `android 7.1 ` firmware, 
which requires `erasing Flash`.
* Erasing Flash Mode:
![AndroidTool maskrom](/images/edge/AndroidTool_erase_en.png)

Now all you need to do is to click the `Upgrade` button of the tool and wait for upgrading to complete:
![AndroidTool upgrade](/images/edge/AndroldTool_upgrade.png)

## Upgrade Using Ubuntu
### Preparations
```
$ sudo apt-get install libusb-dev git parted
```
### Get Burning Tool
Image Burning Tool on Ubuntu is in this repository [Utils](https://github.com/khadas/utils).
```
$ git clone https://github.com/khadas/utils
```
Or just pull it if you have already cloned this repository.
```
$ cd /path/to/utils
$ git pull
```
### Install Burning Tool
You need to install the USB rules and create some links.
```
$ cd /path/to/utils
$ ./INSTALL
```
You will see this if successful.
```
Installing Amlogic flash-tool...

===============================================

Host PC: Ubuntu 16.04

===============================================

Installing USB rules...
[sudo] password for nick: 
Installing flash-tool...
Done!

Installing Rockchip flash-tool...

===============================================

Host PC: Ubuntu 16.04

===============================================

Installing USB rules...
Installing flash-tool...
Done!
Installing Khadas burn-tool...
Done!
```
**NOTE:** Root privilege is required.

### How to Burn Images Using Ubuntu
There are two commands that can be used to burn images: `burn-tool` and `rk-burn-tool`.

* General Command `burn-tool`:

```
$ burn-tool -v rk -i /path/to/image
```

* Rockchip Command `rk-burn-tool`:

```
$ rk-burn-tool -i /path/to/image
```

You will see these logs if successful.
```
Try to burn Rockchip image...
Rockchip Android image (or linux image compatible with AndroidTool one image burning) found!
Try to burn Rockchip image...
Loading firmware...
Support Type:RK330C	FW Ver:6.0.277	FW Time:2018-06-15 17:10:26
Loader ver:1.12	Loader Time:2018-06-15 16:59:09
Upgrade firmware ok.
Done!
```

### Uninstall Burning Tool
```
$ cd /path/to/utils
$ ./UNINSTALL
```

**NOTE: This burning tool has only been verified on Ubuntu 16.04**.

### See Also
* [How To Boot Into Upgrade Mode](/edge/HowtoBootIntoUpgradeMode.html)

