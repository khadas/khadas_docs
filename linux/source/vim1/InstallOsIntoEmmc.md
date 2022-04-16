title: Install OS into eMMC
---

All VIM series boards have **onboard eMMC storage**, so you can install the **OS** into the **eMMC** using the **USB upgrade tool**.

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

1. Dowload the [USB Upgrade Tool](http://dl.khadas.com/products/vim4/tool/Aml_Burn_Tool_V3.2.0.zip) and extract it.
2. Description of the USB Upgrade Tool's directory contents:
  ![image](/linux/images/vim1/usb_upgrade_tool_dir_1.png)
  * The `V2` and `V3` folders hold the original burning tool files
  * The `burn tool` folder stores burning tools and drivers for different boards
3. Description of the `burn tool` directory contents:
  ![image](/linux/images/vim1/usb_upgrade_tool_dir_2.png)
  * `Driver-VIM1_2_3` Driver files for VIM1/VIM2/VIM3/VIM3L boards
  * `Driver-VIM4` Driver files for the VIM4 board
  * `VIM1_2_3.exe` Burning tool for VIM1/VIM2/VIM3/VIM3L boards
  * `VIM4.exe` Burning tool for the VIM4 board

## Installation

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim1-tab" data-toggle="tab" href="#vim1-tool" role="tab" aria-controls="vim1" aria-selected="true">VIM1/VIM2/VIM3</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-tab" data-toggle="tab" href="#vim4-tool" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1-tool" role="tabpanel" aria-labelledby="vim1-tab">

**Driver Installation**

1. Enter the `Driver-VIM1_2_3` directory, and install `dpscat.exe`. The installation process is quick, and there's is no GUI display.
2. Install `dpinst64.exe`. After the installation is successful, you can burn the firmware.

**Make sure the driver is installed correctly, then follow the steps below to burn firmware:**

1. Enter the `burn tool` directory, open `VIM1_2_3.exe`, click `File-->Import Image`, then choose an [image](https://dl.khadas.com/Firmware/) for your board.
2. Connect your board to your PC with a USB-C data cable (the board will power on automatically).
3. Put your board into [Upgrade Mode](BootIntoUpgradeMode.html).
4. If you have performed steps 2 and 3 correctly, your PC will automatically discover your board as an attached USB-device.

    Now all you need to do is to click the `Start` button and wait for burning to complete:
    ![Image of USB_Upgrade_Tool_Interface_v217](/linux/images/vim1/usb_upgrade_tool_interface_v217_en.png)

</div>
<div class="tab-pane fade" id="vim4-tool" role="tabpanel" aria-labelledby="vim4-tab">

**Driver Installation**

1. Enter the `Driver-VIM4` directory, install `dpscat.exe`. The installation process is quick, and there is no GUI display.
2. Install `dpinst64.exe`. After the installation is successful, you can burn the firmware.

**Make sure the driver is installed correctly, then follow the steps below to upgrade:**

1. Enter the `burn tool` directory, open `VIM4.exe`, click `Setup-->Load Image`, then choose an [image](https://dl.khadas.com/Firmware/) for your board.
2. Connect your board to your PC with a USB-C data cable (the board will power on automatically).
3. Put your board into [Upgrade Mode](boot_into_upgrade_mode.html).
4. If you have performed steps 2 and 3 correctly, your PC will automatically discover your board as an attached USB-device.

    Now all you need to do is to click the `Start` button and wait for burning to complete:
    ![Image of USB_Upgrade_Tool_Interface_v217](/linux/images/vim4/usb_upgrade_tool_interface_en.png)

</div>

{% note info Tips %}

* To interrupt burning, click the `Stop` button, then close the USB Upgrade Tool. Note that the eMMC may already have been completely erased if you went past the 15% mark
* An [External Power Supply](ExtraPowerInput.html) may be required in cases where your PC cannot provide enough electrical power for the burning process
* If your system is a 32-bit system, please select `dpinst32.exe` when installing the driver

{% endnote %}

</div>
</div>
<div class="tab-pane fade" id="ubu" role="tabpanel" aria-labelledby="ubu-tab">

{% note warn Note %}

Tools were verified to function properly on Ubuntu only, we make no guarantees for other Linux distributions!

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
[sudo] password for User:
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

Root privilege is required.

{% endnote %}

## Check the USB Driver

You must now place your board into `Upgrade Mode`. See [how to enter upgrade mode](BootIntoUpgradeMode.html).
Check to see if Ubuntu has detected your board as an attached USB-device.

```bash
$ lsusb | grep Amlogic
BUS 002 Device 036: ID 1b8e:c003 Amlogic, Inc.
```
The message above means that your board is connected and recogized by Ubuntu.

## Install the System on Ubuntu


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="boards-tab" data-toggle="tab" href="#vim1vim2" role="tab" aria-controls="vim1vim2" aria-selected="true">VIM1/VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3-tab" data-toggle="tab" href="#vim3" role="tab" aria-controls="vim3" aria-selected="false">VIM3/VIM3L</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-tab" data-toggle="tab" href="#vim4" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1vim2" role="tabpanel" aria-labelledby="boards-tab">

```bash
$ aml-burn-tool -i /path/to/image
```

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

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

```bash
$ aml-burn-tool -b VIM3 -i /path/to/image
```

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

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

```bash
$ aml-burn-tool -b VIM4 -i /path/to/image
```

</div>
</div>


For more information please refer to [docs](https://github.com/khadas/utils/tree/master/aml-flash-tool/docs).

## Uninstall Burning Tool

```bash
$ cd /path/to/utils
$ sudo ./UNINSTALL
```

</div>
</div>


## See Also
* [Boot into Upgrade Mode](BootIntoUpgradeMode.html)

