title: Force Reset Remotely
---

### Introduce
Due to the programable MCU(STM8S003F3U6), VIM2 can support more feature like:
* [WOL: Wake-on-Lan](/vim2/HowtoUseWol.html)
* Boot media setup: boot from eMMC or SPI-Flash
* IR Remote power on/off
* Timer power on/off
* [KBI: Khadas Bootloader Instructions](/vim2/KbiGuidance.html)

But for some purposes, some makers might want more features like:
* Power on the VIM2 via a PIN on the 40-PIN GPIO
* Force reset the VIM2 via a PIN on the 40-PIN GPIO
* Force reset the VIM2 remotely via LAN
* More

Here walk you through with simple step how to use the force reset features on VIM2.

*Note that this article only suit for **V05 and upper version** of MCU firmware.*

### WOL Working Modes
The WOL features is default disabled, but users can also change the WOL working mode via [KBI](/vim2/KbiGuidance.html) commands.

Here is a simple method to check the states of WOL:

* **WOL Enable State:**
  * Power on VIM2
  * VIM2 turning on shortly(Initialize the registors on PHY) then power off
  * the Blue LED is light on.

* **WOL Disable State:**
  * Power on VIM2
  * VIM2 keep turning on and the Blue LED is light off (White LED is light on).

### Enable WOL-Force-Feset feature
Boot into u-boot mode via [serial](/vim2/SetupSerialTool.html) and run following KBI sub-command to enable WOL-Force-Reset feature:
```
kvim2# kbi forcereset wol w 1
[BL31]: tee size: 0

getmac = 98:aa:fc:60:45:87
kvim2# kbi trigger wol w 1
[BL31]: tee size: 0

getmac = 98:aa:fc:60:45:87
kvim2#
```
After the command above, the VIM2 will work with WOL-Force-Reset enabled state, it means that you can force reset the VIM2 remotely for both following situations:
* VIM2 is working, like runing Android or Linux O/S.
* VIM2 is powering off

Yes, it just works like your prese the physical RESET button on the board.

### Test
Same with WOL usage, to test the WOL-Force-Reset feature, what you need to do is just sent a Magic Packet to VIM2 via any magic packet sender. Here is a example on  Ubuntu:
```
$ wakeonlan 98:aa:fc:60:45:87
```

*Notice: make sure the VIM2 and the device to sent the magic packet are on the same local network*

### Tips: Ways to get the MAC Address
* From the sticker on the bottom side of VIM2 board:
![image|487x136](/images/vim2/vim2_mac.jpg)

* From the Setting App(For Android): Setting --> network --> MAC address
![image|489x200](/images/vim2/vim2_android_mac.jpg)

* From the UART printing:
```
getmac = 98:aa:fc:60:45:87
gpio: pin GPIODV_2 (gpio 21) value is 1
Hit Enter or space or Ctrl+C key to stop autoboot -- :  0 
```

Enjoy!
