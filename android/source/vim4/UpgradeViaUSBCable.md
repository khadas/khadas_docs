title: USB-C Upgrading
---

{% note info Use v3.1.9 (or newer) "Amlogic Flashing Tool" with VIM4. %}

{% endnote %}

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="win-tab" data-toggle="tab" href="#win" role="tab" aria-controls="win" aria-selected="true">Windows</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="ubu-tab" data-toggle="tab" href="#ubu" role="tab" aria-controls="ubu" aria-selected="false">Ubuntu</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="win" role="tabpanel" aria-labelledby="win-tab">

## Preparation
* Dowload the [Amlogic Flashing Tool v3.2.0](https://dl.khadas.com/products/vim4/tool/Aml_Burn_Tool_V3.2.0.zip) and extract it.
* Run `Aml_Burn_Tool.exe` to flash your VIM4's eMMC image:
    ![image](/android/images/vim4/upgrade_tool_setup.png)

## Upgrade steps
Ensure that you are using the correct Amlogic Flashing Tool, then continue with upgrading:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim4-tab" data-toggle="tab" href="#vim4-pins" role="tab" aria-controls="vim1" aria-selected="true">VIM4</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim123-tab" data-toggle="tab" href="#vim123-pins" role="tab" aria-controls="vim123" aria-selected="false">VIM1/VIM2/VIM3</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim4-pins" role="tabpanel" aria-labelledby="vim4-tab">

1. Open `Aml_Burn_Tool.exe`, click `Setting-->Load Img` to choose an [image](https://dl.khadas.com/Firmware/) for your SBC.
2. Connect your SBC to your PC with a USB-C data cable (it will power-on automatically).
3. Place your SBC into "upgrade mode":
    * Long press the `POWER` key without releasing it.
    * Short press the `RESET` key and release it.
    * Count to 10 seconds and then release the `POWER` key.
4. If you have performed steps 2 and 3 correctly, your SBC will appear as an attached device on your PC.

    Click the `Start` button and wait for burning to complete:
	<img src="/android/images/vim4/upgrade_tool_interface.png" width="75%" height="75%">
</div>

<div class="tab-pane fade" id="vim123-pins" role="tabpanel" aria-labelledby="vim123-tab">

1. Open `USB_Burning_Tool.exe`, click "File-->Import Image" to choose an [image](https://dl.khadas.com/Firmware/) for your SBC.
2. Connect your SBC to your PC with a USB-C data cable (it will power-on automatically).
3. Place your SBC into "Upgrade Mode":
    * Long press the `POWER` key without releasing it.
    * Short press the `RESET` key and release it.
    * Count to 10 seconds and then release the `POWER` key.
4. If you have performed steps 2 and 3 correctly, your SBC will appear as an attached device on your PC.

    Click the `Start` button and wait for burning to complete:
	<img src="/android/images/vim4/upgrade_tool_interface_VIM123.png" width="75%" height="75%">
</div>

{% note info Tips %}

* To cancel an upgrade, click the `Stop` button, then close the Amlogic Burning Tool. Note that the eMMC might already have been completely erased if you went past 15%.
* Additional power ([VIM1](/android/vim1/BootIntoUpgradeMode.html)/[VIM2](/android/vim2/BootIntoUpgradeMode.html)/[VIM3](/android/vim3/BootIntoUpgradeMode.html)/[VIM4](/android/vim4/ExtraPowerInput.html)) may be required in cases whereby your PC cannot provide enough electrical power via USB.

{% endnote %}

</div>
<div class="tab-pane fade" id="ubu" role="tabpanel" aria-labelledby="ubu-tab">

## Preparation

```bash
$ sudo apt-get install libusb-dev git parted
```

## Download flashing tool

The Amlogic Flashing Tool for Ubuntu is in this repository [utils](https://github.com/khadas/utils).

```bash
$ git clone https://github.com/khadas/utils
```
Or pull it (if you have already cloned this repository).

```bash
$ cd /path/to/utils
$ git pull
```

## Install flashing tool
Install USB rules and create some links.

```bash
$ cd /path/to/utils
$ sudo ./INSTALL
```

This print-out will appear once installation is successful.

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

## Check the USB driver

Put your SBC into "upgrade mode". See instructions for [VIM1](/android/vim1/BootIntoUpgradeMode.html)/[VIM2](/android/vim2/BootIntoUpgradeMode.html)/[VIM3](/android/vim3/BootIntoUpgradeMode.html)/[VIM4](/android/vim4/BootIntoUpgradeMode.html) to enter upgrade mode. After entering "upgrade mode", check to see if Ubuntu has detected your SBC as a connected USB-device.

```bash
$ lsusb | grep Amlogic
BUS 002 Device 036: ID 1b8e:c003 Amlogic, Inc.
```
The message above means that your SBC is connected and recognized by Ubuntu.

## Flash an image
There are two commands that be used to flash: `burn-tool` and `aml-burn-tool`.

For example: Flash image for VIM3

* General command `burn-tool`:

```bash
$ burn-tool -v aml -b VIM3 -i /path/to/image
```

* Amlogic command `aml-burn-tool`:

```bash
$ aml-burn-tool -b VIM3 -i /path/to/image
```

{% note warn Note %}

For VIM3/VIM3L, you must use the argument `-b VIM3` or it will fail. For VIM1 or VIM2 you can ignore this.

{% endnote %}

You will see these Terminal logs if successful.

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
For more information please refer to [Amlogic Documentation](https://github.com/khadas/utils/tree/master/aml-flash-tool/docs).

## Uninstall flashing tool

```bash
$ cd /path/to/utils
$ sudo ./UNINSTALL
```

</div>
</div>


## See also
* [Upgrade with SD card](/android/vim1/UpgradeViaTFBurningCard.html)
* [Boot into Upgrade Mode](/android/vim1/BootIntoUpgradeMode.html)

