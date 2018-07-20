title: Upgrade Via a USB-C Cable
---
## Upgrade On Windows
### Preparations
* Download the [USB driver](https://dl.khadas.com/Tools/DriverAssitant_v4.6.zip) and extract it.
* Run `DriverInstall.exe` to install USB drivers.
  * Click `Uninstall` button to uninstall old drivers
  ![DriverInstall uninstall](/images/edge/DriverInstall_uninstall.png)
  * Click `Install` button to install drivers
  ![DriverInstall install](/images/edge/DriverInstall_install.png)
* Download the [Android Tool](https://dl.khadas.com/Tools/AndroidTool_Release_en_v2.58.zip) and extract it.
* `AndroidTool.exe` is the burning tool, you don't need to install.

### Upgrading Steps
Make sure that you have right installed the USB drivers, then follow the below steps to upgrade:

1. Open `AndroidTool.exe`, click `Upgrade Firmware-->Firmware` to chose an image for Edge.
![AndroidTool firmware select](/images/edge/AndroldTool_firmware.png)
2. Connect Edge and PC with an USB-C cable(Edge will power on automately).
3. Let Edge [enter into upgrade mode](/edge/HowtoBootIntoUpgradeMode.html) to complete the upgrading.
4. Your PC should have found Edge device as upgrade mode if you correctly follow the above operations.
* Loader mode you will see this:
![AndroidTool loader](/images/edge/AndroldTool_loader.png)
* Maskrom mode you will see this:
![AndroidTool maskrom](/images/edge/AndroldTool_maskrom.png)

Now all you need to do is to click `Upgrade` button of the tool and wait the upgrading to complete:
![AndroidTool upgrade](/images/edge/AndroldTool_upgrade.png)

## Upgrade On Ubuntu
### Preperations
```
$ sudo apt-get install libusb-dev git parted
```
### Get burning tool
Image burning tool on Ubuntu is in repository [utils](https://github.com/khadas/utils).
```
$ git clone https://github.com/khadas/utils
```
Or just pull it if you have cloned this repository.
```
$ cd /path/to/utils
$ git pull
```
### Install burning tool
You need to install USB rules and create some links.
```
$ cd /path/to/utils
$ ./INSTALL
```
You will see this if successed.
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
**NOTE:** Root privilege required.

### How to burn image on Ubuntu
There are two commands can be used to burn image: `burn-tool` and `rk-burn-tool`.

* General command `burn-tool`:

```
$ burn-tool -v rk -i /path/to/image
```

* Rockchip platform command `rk-burn-tool`:

```
$ rk-burn-tool -i /path/to/image
```

You will see the logs if successed.
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

### Uninstall burning tool
```
$ cd /path/to/utils
$ ./UNINSTALL
```

**NOTE:**This burning tool has only been verified on **Ubuntu 16.04**.

### See also
* [Howto Boot Into Upgrade Mode](/edge/HowtoBootIntoUpgradeMode.html)

