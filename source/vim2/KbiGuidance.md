title: KBI Guidance for Khadas VIM2/VIM3/Edge
---

KBI is an abbreviation for Khadas Bootloader Instructions, which is developed to fulfill the following purposes:
* Manage the programmable MCU
* Carry out low level hardware management
* Let developers utilise all the features of Khadas VIM2/VIM3/Edge

This document describes how to setup, configure and use the KBI. As KBI is one of the [U-Boot](http://www.denx.de) commands, to get started you have to setup a Serial Debugging Tool([VIM2](/vim1/SetupSerialTool.html)/[VIM3](/vim1/SetupSerialTool.html)/[Edge](/edge/SetupSerialTool.html)).

*Note: This document uses VIM2 as an example, VIM3 and Edge are similar.*

Before continuing, make sure you have booted into U-Boot:
```
normal power off
boot wol: enable
Hit Enter or space or Ctrl+C key to stop autoboot -- :  0 
kvim2#
```

### Get help
You can get help information by typing **kbi**:
```
kvim2# kbi
kbi - Khadas Bootloader Instructions sub-system

Usage:
kbi [function] [mode] [write|read] <value>

kbi version - read version information
kbi usid - read usid information
kbi adc - read adc value
kbi powerstate - read power on state
kbi poweroff - power off device
kbi ethmac - read ethernet mac address

kbi led [systemoff|systemon] w <off|on|breathe|heartbeat> - set blue led mode
kbi led [systemoff|systemon] r - read blue led mode

kbi bootmode w <emmc|spi> - set bootmode to emmc or spi
kbi bootmode r - read current bootmode

kbi trigger [wol|rtc|ir|dcin|key|gpio] w <0|1> - disable/enable boot trigger
kbi trigger [wol|rtc|ir|dcin|key|gpio] r - read mode of a boot trigger
```

### Command Usage

**1) Get the MCU firmware version:**
```
kvim2# kbi version
version: 03
```

**2) Initialize the KBI:**
```
kvim2# kbi init
```

**3) Get the device serial number:**
```
kvim2# kbi usid
usid: 000000
```

**4) Get ADC value:**
```
kvim2# kbi adc
adc: 0x236
```
*The ADC value can be used to distinguish different hardware modules.*

**5) Power off device:**
```
kvim2# kbi poweroff
```

**6) Get the Ethernet MAC address:**
```
kvim2# kbi ethmac
mac address: 98:aa:fc:60:44:c0
```

**7) Setup the blue LED:**
The blue LED has different working modes: `Always Off`, `Always on`, `Breathe` and `Heartbeat`. These indicate different VIM status-modes.

The blue LED is controlled by the MCU, and the MCU is in charge of system power management. The white LED is controlled by the CPU; therefore the blue LED still works even after you have powered off your VIM2.

The KBI can be used to program the blue LED for two different status-modes:
* system off / idle: power off status, the CPU is powered down.
* system on / working: power on status, the CPU is in working mode.

Examples:

To check the blue LED's setting for "system off / idle status":
```
kvim2# kbi led systemoff r
led mode: breathe  [systemoff]
```

To check the blue LED's setting for "system on / working status":
```
kvim2# kbi led systemon r
led mode: off  [systemon]
```

The terminal printout above says that the blue LED is to remain `Always off` when you power on the VIM2. You could instead change it to the `breathe` mode:
```
kvim2# kbi led systemon w breathe
```

You can also change the setting for "system on / working status":
```
kvim2# kbi led systemon w breathe
```

**8) Boot Mode**
VIM2 comes with both SPI flash and eMMC Storage. The KBI can be used to setup one of these as the default boot media.

To set the default boot media as SPI flash:
```
kvim2# kbi bootmode w spi
```
*For more information about the SPI flash boot mode, see How to boot from SPI Flash([VIM2](http://forum.khadas.com/t/how-to-boot-from-spi-flash/1354)/[VIM3](/vim3/BootFromSpiFlash.html)/[Edge](/edge/BootFromSpiFlash.html))*.

To set the default boot media as eMMC storage:
```
kvim2# kbi bootmode w emmc
```

You can check the default boot media by running:
```
kvim2# kbi bootmode r
bootmode: emmc
```

**9) Boot Trigger Events**
VIM2 supports different events for triggering boot-up:
* WOL:  Wake on Lan
* RTC:  RTC timer
* IR:   IR remote controller
* DCIN: Plug in the DC adapter
* Key:  Power Key/Button
* GPIO: External GPIO events

This means that when your VIM2 is powered-off, any of the above events can trigger it to power-on; when that trigger event has been set to the "enabled" status.

Examples:

Get the status for a WOL trigger event:
```
kvim2# kbi trigger wol r
boot wol: disable
```

By default, WOL is disabled for the preinstalled ROM, you can enable it by writing a new value:

```
kvim2# kbi trigger wol w 1
set_wol: 1
```

Of course, for security reasons, you might want to disable the WOL:
```
kvim2# kbi trigger wol w 0
set_wol: 0
```
### See also
[WOL setup and usage](/vim2/HowtoUseWol.html).
[Edge-V MCU Register Map](https://dl.khadas.com/Hardware/Edge/MCU/Edge-V_MCU_REG_EN.pdf)
[VIM2 MCU Register Map](https://dl.khadas.com/Hardware/VIM2/MCU/VIM2_MCU_REG_EN.pdf)
[VIM3 MCU Register Map](https://dl.khadas.com/Hardware/VIM3/MCU/VIM3_MCU_REG_EN.pdf)
