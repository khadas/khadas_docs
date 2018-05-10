title: Upgrade Via a USB-C Cable
---
## Upgrade On Windows
### Preparations
* Download the [USB driver](http://www.mediafire.com/file/h2adcu2u9245y12/DriverAssitant_v4.6.zip) and extract it.
* Run `DriverInstall.exe` to install USB drivers.
  * Click `Uninstall` button to uninstall old drivers
  ![DriverInstall uninstall](/images/edge/DriverInstall_uninstall.png)
  * Click `Install` button to install drivers
  ![DriverInstall install](/images/edge/DriverInstall_install.png)
* Download the [Android Tool](http://www.mediafire.com/file/2oqjf121abbe73j/AndroidTool_Release_en_v2.52.zip) and extract it.
* `AndroidTool.exe` is the burning tool, you don't need to install.

### Upgrading Steps
Make sure that you have right installed the USB drivers, then follow the below steps to upgrade:

#### Upgradeing Android

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
```
$ burn-tool -v rk -i /path/to/image
```
You will see the logs if successed.
```
Try to burn Rockchip image...
Rockchip Linux image with GPT found!
Try to burn Rockchip Linux image...
Burn to eMMC...
PARTITIONS OFFSET: 0 sectors.
Loading loader...
Support Type:RK330C	Loader ver:1.12	Loader Time:2018-04-26 10:24:40
Upgrade loader ok.
Write LBA from file (100%)
directlba=1,first4access=1,gpt=1
Write gpt...
Write gpt ok.
Reset Device OK.
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

