title: KBI Guidance for Khadas VIM2
---

The KBI is an abbreviation for Khadas Bootloader Instructions, which is developed based on the following purposes:
* Manage the programable MCU
* Do the low level hardware management
* Let developers rock all the features of Khadas VIM2

The document describes how to setup, configure and use the KBI. As the KBI is one of the [U-Boot](http://www.denx.de) commands, so to get start you have to [setup the Serial Debugging Tool](/vim1/SetupSerialTool.html) first.

To continue the reading, make sure you have boot into the U-Boot:
```
normal power off
boot wol: enable
Hit Enter or space or Ctrl+C key to stop autoboot -- :  0 
kvim2#
```

### Get help
Similar with other U-Boot commands, you can get the help information by typing **kbi**:
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
The MCU firmware can be upgrade by [TBD]().

**2) Get the device serial number:**
```
kvim2# kbi usid
usid: 000000
```

**3) Get ADC value:**
```
kvim2# kbi adc
adc: 0x236
```
*The ADC value can be used to distinguish different hardware modules.*

**4) Power off device:**
```
kvim2# kbi poweroff
```

**5) Get the Ethernet MAC address:**
```
kvim2# kbi ethmac
mac address: 98:aa:fc:60:44:c0
```

**6) Setup the blue LED:**
The blue LED has different working modes like `Always Off`, `Always on`, `Breathe` and `Heartbeat` to indicate different status.

The blue LED is controlled by MCU, and the MCU do the system power management for VIM2, so different with the white LED which is contorlled by the CPU, the blue LED still works even you power off the VIM2 device.

Actually, the KBI can setup the blue LED for two different status:
* system off / idle: power off status, the CPU/S912 is powered down.
* system on / working: power on status, the CPU/S912 is in working mode.

Examples:

To check the blue LED mode on system off / idle status:
```
kvim2# kbi led systemoff r
led mode: breathe  [systemoff]
```

To check the blue LED mode on system on / working status:
```
kvim2# kbi led systemon r
led mode: off  [systemon]
```

Above says that the blue LED is on `Always off` mode when you power on the VIM2, you might want to change to `breathe` mode:
```
kvim2# kbi led systemon w breathe
```

Same with system off / idle status, you can also setup the status for system on / working status:
```
kvim2# kbi led systemon w breathe
```

**7) Boot Mode**
As VIM2 specs with both SPI Flash and eMMC storage, the KBI can be used to setup one of these as the boot media.

To set the default boot meidia as SPI Flash:
```
kvim2# kbi bootmode w spi
```
*About SPI Flash boot mode, you might need further reading at [How to boot from SPI Flash](http://forum.khadas.com/t/how-to-boot-from-spi-flash/1354)*.

To set the default boot media as eMMC storage:
```
kvim2# kbi bootmode w emmc
```

You can check current boot media by running:
```
kvim2# kbi bootmode r
bootmode: emmc
```

**8) Boot Trigger Events**
VIM2 support different boot trigger evnents:
* WOL: Wake on Lan
* RTC: RTC timer
* IR: IR remote controller
* DCIN: Plug in the DC adapter
* Key: Power Key/Button
* GPIO: External GPIO events

It means that when VIM2 is power off, any of above trigger event can power on the VIM2 in the case that the trigger event is in enable status.

Examples:

Read the status of WOL trigger event:
```
kvim2# kbi trigger wol r
boot wol: disable
```

By default, WOL is disabled for the preinstalled ROM, you can enable it by write a new value/status:

```
kvim2# kbi trigger wol w 1
set_wol: 1
```

Of course, for security reason, you might want to disable the WOL:
```
kvim2# kbi trigger wol w 0
set_wol: 0
```
### See also
[WOL setup and usage](/vim2/HowtoUseWol.html).
