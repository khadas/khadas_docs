title: How To Setup PCIe/USB3.0 Port
---

Khadas VIM3 contains a 2:1 data switch chipset to switch the "combo interface" between `PCIe` and `USB 3.0`, and the default mode is `USB 3.0`.
You can refer the block below for further details:

![VIM3 PCIe/USB3.0 Block](/images/vim3/vim3_pcie_usb3_block.png)

There are three ways to setup the `PCIe/USB3.0` port:
* Setup the port using the [KBI](/vim3/KbiGuidance.html)
* Setup the port using the Android UI
* Setup the port using the Android/Ubuntu command line

### Setup the `PCIe/USB3.0` port using the KBI
You need to [setup the serial debug tool](/vim3/SetupSerialTool.html) and enter the u-boot command line.

* Initialize the KBI:

```
kvim3#kbi init
```

* Check current port mode:

```
kvim3#kbi portmode r
port mode is USB3.0
```
The default mode is USB-3.0.

* Change mode to `PCIe`:

```
kvim3#kbi portmode  w 1
set port mode to :PCIE
```

* Change mode to `USB 3.0`:

```
kvim3#kbi portmode w 0
set port mode to :USB3.0
```

**Poweroff the system to bring changes into effect:**

```
kvim3#kbi poweroff 
do_kbi_poweroff
```
Then press the `POWER KEY` to boot the system.

### Setup the `PCIe/USB3.0` port using the Android UI
You'll need to navigate to "Device Preferences" using an IR remote, mouse or attached keyboard.

![Android Device Preferences](https://github.com/tsangyoujun/khadas_docs/blob/master/settings_toggle.jpg?raw=true)
![Mode Switch UI](https://github.com/tsangyoujun/khadas_docs/blob/master/mode_switch.jpg?raw=true)

**Reboot** the system to bring changes into effect.

### Setup the `PCIe/USB3.0` port using the Android/Ubuntu command line

* Check current port mode:

```
khadas@Khadas:~$ cat /sys/class/mcu/usb_pcie_switch_mode
1
```

`0` - USB 3.0 mode
`1` - PCIe mode

* Change mode to `USB 3.0`:

```
khadas@Khadas:~$ echo 0 > /sys/class/mcu/usb_pcie_switch_mode
```

* Change mode to `PCIe`:

```
khadas@Khadas:~$ echo 1 > /sys/class/mcu/usb_pcie_switch_mode
```

**Poweroff the system to bring changes into effect:**

```
khadas@Khadas:~$ echo 1 > /sys/class/mcu/poweroff 
```

Then press the `POWER KEY` to boot the system.

### See Also
[KBI Guide](/vim3/KbiGuidance.html)
