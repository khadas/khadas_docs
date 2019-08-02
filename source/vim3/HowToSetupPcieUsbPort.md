title: How To Setup PCIe/USB3.0 Port
---

Khadas VIM3 contains a data switch to switch the "combo interface" between `PCIe` and `USB 3.0`. The default mode is `USB 3.0`.
You can find the block below.

![VIM3 PCIe/USB3.0 Block](/images/vim3/vim3_pcie_usb3_block.png)

There are three ways to setup the `PCIe/USB3.0` port:
* Use [KBI](/vim3/KbiGuidance.html) to setup the port
* Setup the port using the Android UI
* Setup the port using the Android/Ubuntu command line

### Use KBI to setup the `PCIe/USB3.0` port
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
Then press the POWER KEY to reboot the system.

### Use Android UI to setup the `PCIe/USB3.0` port
You'll need to navigate to "Device Preferences" using an IR remote, mouse or attached keyboard.

![Android Device Preferences](https://github.com/tsangyoujun/khadas_docs/blob/master/settings_toggle.jpg?raw=true)
![Mode Switch UI](https://github.com/tsangyoujun/khadas_docs/blob/master/mode_switch.jpg?raw=true)

**Reboot** the system to bring changes into effect.

### Setup the `PCIe/USB3.0` port in command line
#### TBD

### See Also
[KBI Guide](/vim3/KbiGuidance.html)
