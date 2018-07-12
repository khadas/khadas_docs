title: Upgrade Via a USB-C Cable
---
## Upgrade On Windows
### Preparations
* Download the [USB Upgrade Tool](http://dl.khadas.com/Tools/USB_Burning_Tool_v2.1.6.3_en.zip) and extract it.
* Run `setup_v2.x.x.exe` to install the tool for VIMs upgrading:
	![Image of USB_Upgrade_Tool_Setup_V208](/images/vim1/usb_upgrade_tool_setup_v208.png)

### Upgrading Steps
Make sure that you have right installed the USB Upgrade Tool, then follow the below steps to upgrade:

1. Open `USB_Burning_Tool_v2.x.x.exe`, click ‘File-->Import image’ to chose an image for VIMs.
2. Connect VIMs and PC with an USB-C cable(VIMs will power on automately).
3. Let VIMs enter into upgrade mode to complete the upgrading:
	* Long press `Power` key without release
	* Short press `Reset` key and release
	* Count 10 seconds and release the `Power` key to enter into upgrade mode
4. Your PC should have found VIMs device as upgrade mode if you correctly follow the above operations.

	Now all you need to do is to click `Start` button of the tool and wait the upgrading to complete:
	![Image of USB_Upgrade_Tool_Setup_V208](/images/vim1/usb_upgrade_tool_interface_v208.png)

*Tips:*

* Click `Stop` button first, then close the tool to quit current upgrading operation.
* [Extra power supply](/vim1/ExtraPowerInput.html) is required in some case your PC cannot provide enough current for the upgrading.

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

### Check the USB driver
You should bring your VIMs board enter upgrade mode. See [VIM1](/vim1/HowtoBootIntoUpgradeMode.html)/[VIM2](/vim2/HowtoBootIntoUpgradeMode.html) enter upgrade mode.
Check the USB driver.
```
$ lsusb | grep Amlogic
Bus 002 Device 036: ID 1b8e:c003 Amlogic, Inc.
```
The message means that your board is recognized.

### How to burn image on Ubuntu
There are two commands can be used to burn image: `burn-tool` and `aml-burn-tool`.

* General command `burn-tool`:

```
$ burn-tool -v aml -i /path/to/image
```

* Amlogic platform command `aml-burn-tool`:

```
$ aml-burn-tool -i /path/to/image
```

You will see the logs if successed.
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

### Uninstall burning tool
```
$ cd /path/to/utils
$ ./UNINSTALL
```

**NOTE:**This burning tool has only been verified on **Ubuntu 16.04**.

### See also
* [Upgrade Via a TF Burning Card](/vim1/UpgradeViaTFBurningCard.html)
* [Howto Boot Into Upgrade Mode](/vim1/HowtoBootIntoUpgradeMode.html)

