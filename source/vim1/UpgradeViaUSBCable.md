title: Upgrade Via a USB-C Cable
---
## Upgrade On Windows
### Preparations
* Download the [USB Upgrade Tool](https://dl.khadas.com/Tools/USB_Burning_Tool_v2.1.6.3_en.zip) and extract it.
* Run `setup_v2.x.x.exe` to install the tool for upgrading your VIMs:
	![Image of USB_Upgrade_Tool_Setup_V208](/images/vim1/usb_upgrade_tool_setup_v208.png)

### Upgrading Steps
Make sure that you have installed the correct USB Upgrade Tool, then follow the steps below to upgrade:

1. Open `USB_Burning_Tool_v2.x.x.exe`, click ‘File-->Import Image’ to chose an [image](https://dl.khadas.com/Firmware/) for your VIMs. To download third-party images, e.g. Voluminio: [VIM1](https://docs.khadas.com/vim1/FirmwareThirdparty.html) / [VIM2](https://docs.khadas.com/vim2/FirmwareThirdparty.html)
2. Connect your VIMs to your PC with a USB-C cable (VIMs will power on automatically).
3. Place your VIMs into "Upgrade Mode":
	* Long press the `Power` key without releasing.
	* Short press `Reset` key and release it.
	* Count to 10 seconds and release the `Power` key.
4. If you have performed steps 2 and 3 correctly, your PC will automatically discover your VIMs as a connected USB-device.

	Now all you need to do is to click the `Start` button of the tool and wait for upgrading to complete:
	![Image of USB_Upgrade_Tool_Setup_V208](/images/vim1/usb_upgrade_tool_interface_v208.png)

*Tips:*

* To cancel an upgrade, click the `Stop` button, then close the USB Upgrade Tool.
* [Extra power supply](/vim1/ExtraPowerInput.html) could be required in cases whereby your PC cannot provide enough current for the upgrade.

## Upgrade On Ubuntu
### Preparations
```
$ sudo apt-get install libusb-dev git parted
```
### Download Burning Tool
Image burning tool for Ubuntu is in this repository [utils](https://github.com/khadas/utils).
```
$ git clone https://github.com/khadas/utils
```
Or just pull it (if you have already cloned this repository).
```
$ cd /path/to/utils
$ git pull
```
### Install burning tool
You need to install USB rules and create some links.
```
$ cd /path/to/utils
$ sudo ./INSTALL
```
You will see this if it was successful.
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

### Check the USB driver
You must now place your VIMs board into "Upgrade Mode". See [VIM1](/vim1/HowtoBootIntoUpgradeMode.html)/[VIM2](/vim2/HowtoBootIntoUpgradeMode.html) to enter upgrade mode.
Check to see if Ubuntu has detected your VIM1/VIM2 as a connected USB-device.
```
$ lsusb | grep Amlogic
Bus 002 Device 036: ID 1b8e:c003 Amlogic, Inc.
```
The message above means that your board is connected and recognized by Ubuntu.

### How to Burn an Image on Ubuntu
There are two commands can be used to burn an image: `burn-tool` and `aml-burn-tool`.

* General command `burn-tool`:

```
$ burn-tool -v aml -i /path/to/image
```

* Amlogic platform command `aml-burn-tool`:

```
$ aml-burn-tool -i /path/to/image
```

You will see these logs if successful.
```
Rebooting the board ........[OK]
Unpacking image [OK]
Initializing ddr ........[OK]
Running u-boot ........[OK]
Create partitions [OK]
Writing device tree [OK]
Writing bootloader [OK]
Wiping  data partition [OK]
Wiping  cache partition [OK]
Writing boot partition [OK]
Writing data partition [OK]
Writing logo partition [OK]
Writing system partition [OK]
Do you want to reset the board? y/n [n]? y
Resetting board [OK]

```
For more usage please refer to [docs](https://github.com/khadas/utils/tree/master/aml-flash-tool/docs).

### Uninstall Burning Tool
```
$ cd /path/to/utils
$ sudo ./UNINSTALL
```

**NOTE:** This burning tool has only been verified on **Ubuntu 16.04**.

### See also
* [Upgrade Via a TF Card](/vim1/UpgradeViaTFBurningCard.html)
* [How to Boot into Upgrade Mode](/vim1/HowtoBootIntoUpgradeMode.html)

