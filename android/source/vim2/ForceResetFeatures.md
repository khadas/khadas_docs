title: Force Reset Remotely
---

## Introduction
Your VIM is equipped with a programmable MCU(STM8S003F3U6), this allows it to support more features:
* [WOL: Wake-On-Lan](/vim2/HowtoUseWol.html)
* Boot Media Setup: Boot from eMMC or SPI-Flash
* IR Remote Power On/Off
* Timer Power On/Off
* [KBI: Khadas Bootloader Instructions](/vim2/KbiGuidance.html)

For other purposes, Makers could want more features like:
* Power on the VIM2 via a PIN on the 40-PIN GPIO
* Force reset the VIM2 via a PIN on the 40-PIN GPIO
* Force reset the VIM2 remotely via LAN

This guide will walk you through step-by-step, on how use the various force-reset features of your VIM2.

*This article is only suitable for **V05 and Higher Versions** of the MCU firmware.*

## WOL Working Modes
The WOL feature is disabled by default, however you can enable it using [KBI](/vim2/KbiGuidance.html) commands.

This is a simple method to check the WOL-state:

* **WOL Enabled State:**
  * Power on your VIM2.
  * A short while after your VIM2 powers on (initialization of the registers on PHY), turn it off.
  * Blue LED remains ON.

* **WOL Disabled State:**
  * Power on your VIM2
  * VIM2 remains on, and the Blue LED remains OFF (White LED is ON).

## Enable WOL-Force-Feset feature
Boot into U-Boot mode via [serial](/vim2/SetupSerialTool.html) and run following KBI sub-command to enable the WOL-Force-Reset feature:
```
kvim2# kbi forcereset wol w 1
[BL31]: tee size: 0

getmac = 98:aa:fc:60:45:87
kvim2# kbi trigger wol w 1
[BL31]: tee size: 0

getmac = 98:aa:fc:60:45:87
kvim2#
```
After the command above, the VIM2 will work with the "WOL-Force-Reset Feature" in the "Enabled State". This means that you can force reset your VIM2 remotely during the following situations:
* VIM2 is powered-on and working normally, for example running Android or Linux O/S.
* VIM2 is in a powered-off state (but still connected to LAN).

Yes! It works just as though you've pressed the physical RESET button on the VIM2 itself!

## Test
To test the WOL-Force-Reset feature, you'll need to use a "magic packet sender" to send a "magic packet" to your VIM2. For example, on Ubuntu:
```
$ wakeonlan 98:aa:fc:60:45:87
```

*Tip: Ensure your VIM2 and the Device sending the "magic packet" are on the same local network*

## Tips: Ways to get the MAC Address
* From the sticker on the backside of VIM2 board:
![image|487x136](/images/vim2/vim2_mac.jpg)

* From the Setting app (Android): Setting --> Network --> MAC Address
![image|489x200](/images/vim2/vim2_android_mac.jpg)

* From the UART print-out:
```
getmac = 98:aa:fc:60:45:87
gpio: pin GPIODV_2 (gpio 21) value is 1
Hit Enter or space or Ctrl+C key to stop autoboot -- :  0 
```

Enjoy!
