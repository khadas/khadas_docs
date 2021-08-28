title: Install OS into eMMC
---

{% note info The operation for VIM series are almost the same, so this documentation will take VIM1 as an example. %}

{% endnote %}


All the VIM series boards have onboard eMMC storage, so you can install the OS via USB upgrade tool.


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="win-tab" data-toggle="tab" href="#win" role="tab" aria-controls="win" aria-selected="true">Install on Windows</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="ubu-tab" data-toggle="tab" href="#ubu" role="tab" aria-controls="ubu" aria-selected="false">Install on Ubuntu</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="win" role="tabpanel" aria-labelledby="win-tab">

## Preparation

* Dowload the [USB Upgrade Tool](https://dl.khadas.com/Tools/USB_Burning_Tool_v2.2.0.zip) and extract it.
* Run `setup_v2.x.x.exe` to install the tool for upgrading your board.
![Image of USB_Upgrade_tool_setup_v217](/linux/images/vim1/usb_upgrade_tool_setup_v217.png)

## Installation

Make sure that you have installed the correct USB upgrade Tool, then follow the steps below:

1. Open `USB_Burning_tool_v2.x.x.exe`, click `File-->Import Image` to choose an [image](https://dl.khadas.com/Firmware/) for your board.
2. Connect your board to your PC with a USB-C data cable (the board will power on automatically).
3. Put your board into [Upgrade Mode](BootIntoUpgradeMode.html).
4. If you have performed steps 2 and 3 correctly, your PC will automatically discover your board as a connected USB-device.

    Now all you need to do is to click the `Start` button of the tool and wait for upgrading to complete:
    ![Image of USB_Upgrade_Tool_Interface_v217](/linux/images/vim1/usb_upgrade_tool_interface_v217_en.png)

{% note info Tips %}

* To cancel an upgrade, click the `Stop` button, then close the USB Upgrade Tool. Note that the eMMC might already have been completely erased if you went past the 15% mark.
* [Extra power supply](ExtraPowerInput.html) may be required in cases whereby your PC cannot provide enough electrical-current for the upgrade.

{% endnote %}

</div>
<div class="tab-pane fade" id="ubu" role="tabpanel" aria-labelledby="ubu-tab">

{% note warn Note %}

We only verify the tool on Ubuntu, for other distributions may not work properly!

{% endnote %}

## Preparation

```bash
$ sudo apt-get install libusb-dev git parted
```

## Download Burning Tool

Image burning tool for Ubuntu is in this repository [utils](https://github.com/khadas/utils).

```bash
$ git clone https://github.com/khadas/utils
```
Or just pull it (if you have already cloned this repository).

```bash
$ cd /path/to/utils
$ git pull
```

## Install Burning Tool
You need to install USB rules and create some links.

```bash
$ cd /path/to/utils
$ sudo ./INSTALL
```

You will see this print-out if it was successful.

```bash
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
{% note warn Note %}

Root privilege required.

{% endnote %}

## Check The USB Driver

You must now place your board into `Upgrade Mode`.See [how to enter upgrade mode](BootIntoUpgradeMode.html).
Check to see if Ubuntu has detected your board as a connected USB-device.

```bash
$ lsusb | grep Amlogic
BUS 002 Device 036: ID 1b8e:c003 Amlogic, Inc.
```
The message above means that your board is connected and recogized by Ubuntu.

## Install the System on Ubuntu

There are two commands that be used to install the system: `burn-tool` and `aml-burn-tool`.

For example, install the system for `VIM3`:

* General command `burn-tool`:

```bash
$ burn-tool -v aml -b VIM3 -i /path/to/image
```

* Amlogic command `aml-burn-tool`:

```bash
$ aml-burn-tool -b VIM3 -i /path/to/image
```

{% note warn Note %}

For `VIM3/VIM3L`, you must specify the board with `-b VIM3` or it will fail. For `VIM1` or `VIM2` you can ignore this.

{% endnote %}

You will see these teminal logs if successful.

```bash
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

## Uninstall Burning Tool

```bash
$ cd /path/to/utils
$ sudo ./UNINSTALL
```

</div>
</div>


## See Also
* [Boot Into Upgrade Mode](BootIntoUpgradeMode.html)

