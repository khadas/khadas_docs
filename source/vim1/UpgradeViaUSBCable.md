title: Upgrade Via a USB-C Cable
---

**Note: The operation of VIM1, VIM2 and VIM3 is almost the same, so this document will take VIM1 as an example.**

## Upgrade On Windows
### Perparation
* Dowload the [USB Upgrade Tool](https://dl.khadas.com/Tools/USB_Burning_Tool_v2.2.0.zip) and extract it.
* Run `setup_v2.x.x.exe` to install the tool for upgrading your VIMs:
	![Image of USB_Upgrade_tool_setup_v217](/images/vim1/usb_upgrade_tool_setup_v217.png)

### Upgrade steps
Make soure that you have install the correct USB upgrade Tool, then follow the steps below to upgrade:

1. Open `USB_Burning_tool_v2.x.x.exe`, click "File-->Import Image" to choose an [image](https://dl.khadas.com/Firmware/) for your VIMs.
2. Connect your VIMs to your PC with a USB-C data cable (VIMs will power on automatically).
3. Place your VIMs into "Upgrade Mode":
	* Long press the `Power` key without releasing it.
	* Short press the `Reset` key and release it.
	* Count to 10 seconds and then release the `Power` key.
4. If you have performed steps 2 and 3 correctly, your PC will automatically discover your VIMs asa connected USB-device.

	Now all you need to do is to click the `Start` button of the tool and wait for upgrading to complete:
	![Image of USB_Upgrade_Tool_Interface_v217](/images/vim1/usb_upgrade_tool_interface_v217_en.png)

*Tips:*

* To cancel an upgrade, click the `Stop` button, then close the USB Upgrade Tool. Note that the eMMC might already have been completely erased if you went past the 15% mark.
* Extra power supply([VIM1](/vim1/ExtraPowerInput.html)/[VIM2](/vim2/ExtraPowerInput.html)/[VIM3](/vim3/ExtraPowerInput.html)) may be required in cases whereby your PC cannot provide enough electrical-current for the upgrade.

## Upgrade On Ubuntu
### Preparation
```
$sudo apt-get install libusb-dev git parted
```
### Download Burning Tool
Image burning tool for Ubuntu is in this repository [utils](https://github.com/khadas/utils).
```
$git clone https://github.com/khadas/utils
```
Or just pull it (if you have already cloned this repository).
```
$cd /path/to/utils
$git pull
```
### Install Burning Tool
You need to install USB rules and create some links.
```
$cd /path/to/utils
$sudo ./INSTALL
```
You will see this print-out if it was successful.
```
Installing Amlogic flash-tool...

===============================================

Host PC: Ubuntu 16.04

===============================================

Installing USB rules...
[sudo] password for frank:
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

### Check The USB Driver
You must now place your VIM board into "Upgrade Mode".See [VIM1](/vim1/HowtoBootIntoUpgradeMode.html)/[VIM2](/vim2/HowtoBootIntoUpgradeMode.html)/[VIM3](/vim3/HowtoBootIntoUpgradeMode.html) to enter Upgrade Mode.
Check to see if Ubuntu has detected your VIM1/VIM2 as a connected USB-device.
```
$lsusb | grep Amlogic
BUS 002 Device 036: ID 1b8e:c003 Amlogic, Inc.
```
The message above means that your VIM is connected and recogized by Ubuntu.

### How to burn an Image on Ubuntu
There are two commands that be used to burn image: `burn-tool` and `aml-burn-tool`.

For example: Burn image for VIM3

* General command `burn-tool`:

```
$burn-tool -v aml -b VIM3 -i /path/to/image
```

* Amlogic command `aml-burn-tool`:

```
$ aml-burn-tool -b VIM3 -i /path/to/image
```

**Note: For VIM3, you must specify the board with `-b VIM3` or it will fail. For VIM1 or VIM2 you can ignore this.**

You will see these teminal logs if successful.
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
For more information please refer to [docs](https://github.com/khadas/utils/tree/master/aml-flash-tool/docs).

### Uninstall Burning Tool
```
$cd /path/to/utils
$sudo ./UNINSTALL
```

**NOTE:** This burning tool has been verified to work on **Ubuntu 16.04**.

### See Also
* [Upgrade Via An SD-Card](/vim1/UpgradeViaTFBurningCard.html)
* [How To Boot Into Upgrade Mode](/vim1/HowtoBootIntoUpgradeMode.html)

