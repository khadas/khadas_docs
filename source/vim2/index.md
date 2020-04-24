title: VIM2 Beginners Guide
---

# VIM2
![image](/images/vim2/docs_vim2.jpg)

## Front (Blue)
||Component|Purpose|
|---:|:---|:---|
|1|USB-A|USB 2.0 speed, 500mA max output|
|2|RJ-45|Gigabit Ethernet with [Wake-On-LAN (WOL)](/vim2/HowtoUseWol.html)|
|3|HDMI|HDMI 2.0a with CEC, 4K@60Hz|
|4|USB-C|USB 2.0 OTG and [5V power input](https://www.khadas.com/product-page/power-adapter), can be used for [upgrading the OS](/vim2/UpgradeViaUSBCable.html)|
|5|USB-A|USB 2.0 speed, 900mA max output|
|6|Current Limit Switch|Prevents damage to VIM2 during uneven loading conditions|
|7|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|8|Reset Button|Force reboot your VIM2 in the event of a system freeze|
|9|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](/vim2/HowtoBootIntoUpgradeMode.html)|
|A|Power Button|This button turns on your VIM2|
|B|M2x4 Mounting Point|For mounting to [cases](https://www.khadas.com/product-page/diy-case) and [heatsinks](https://www.khadas.com/product-page/new-vim-heatsink)|
|C|RTC Battery Header|Header for attaching a battery for the real time clock|
|D|[40-Pin GPIO](/vim2/GPIOPinout.html)|Learn how to access the GPIO from [here](/vim2/HowToAccessGpio.html), or use it to add a [Toneboard](https://www.khadas.com/product-page/tone-board)|
|E|Infrared Module|2-channel infrared receiver for use with [Khadas IR remote](https://www.khadas.com/product-page/ir-remote)|
|F|LEDs|Status indicator LEDs|
|G|FPC Connector|10-pins, 0.5mm pitch, with I2C, IOs|
|H|I-Pex [Wi-Fi](/vim2/HowToConnectWifi.html) / [Bluetooth](/vim2/HowToSetupBluetooth.html) Connector|Wi-Fi / BT Antenna connector|
|I|I-Pex [Wi-Fi](/vim2/HowToConnectWifi.html) / [Bluetooth](/vim2/HowToSetupBluetooth.html) Connector|Wi-Fi / BT Antenna connector|

## Back (Red)
||Component|Purpose|
|---:|:---|:---|
|1|Pogo Pads|External 5V power input, can be provided by [vTV Board](https://www.khadas.com/product-page/vtv-board) (DVB Tuner)|
|2|[Micro-SD Card Slot](/vim2/BootFromExtMedia.html)|Boot alternative OSes via a micro-SD card, or just for extra storage|
|3|500mA Fuse|Fuse for the 500mA USB port|
|4|WOL Switch|Power switch activated via Wake-On-LAN|
|5|[MCU](/vim2/KbiGuidance.html)|STM8S003 micro-controller with programmable EEPROM|
|6|MCU Pogo Pads|SWIM, UART, ADC, NRST|
|7|SPI Flash|Flash memory module that interfaces over SPI|
|8|20-Pin Pogo Pads|USB, I2C, DVB-Bus, IOs, for docking with the [vTV Board](https://www.khadas.com/product-page/vtv-board) (DVB Tuner)|
|9|XPWR Pads|Connect an external power switch using these pads|
|A|900mA Fuse|Fuse for the 900mA USB port|

## Buttons
|Reset|Function|Power|Purpose|
|:---:|:---:|:---:|:---|
|x|||Force Reboot VIM2
||x||[Enter Upgrade Mode (TST)](/vim2/HowtoBootIntoUpgradeMode.html)|
|||x|Power On/Wake Up VIM2|
|x||x|[Enter Upgrade Mode (KEYS)](/vim2/HowtoBootIntoUpgradeMode.html)|
|x|x|x|[Erase EMMC](/vim2/HowtoEraseEMMC.html)|

## Indicator LEDs
|Colour|Behaviour|Meaning|
|---:|:---:|:---|
|Blue|OFF|Power source disconnected|
||Solid ON|Power source connected, SBC turned off|
|White|OFF|SBC turned off|
||Solid ON|SBC turned on|
|Red|None|None|

The above behaviours are default out-of-the-box, and can be altered by a user. For example the white LED can be made to blink or breathe. For more information on how to program them via your favourite OS (each OS is different), please consult with experts at [forum.khadas.com](forum.khadas.com).

# Krescue (Khadas-Rescue-OS)
![image](/images/docs_krescue_online_install.jpg)

[Krescue](https://dl.khadas.com/Firmware/Krescue/dump/README-rescue.txt) is an extremely small (21mb) operating system that you can boot directly from a micro-SD card or your EMMC. It is a "Swiss Army knife", and you can use it to perform a variety of low-level SBC maintenance tasks. Most notable of which are backing-up your EMMC by dumping a raw-compressed .img.gz, and rapidly installing a new OS via flashing a .img.gz back into the EMMC. As of January 2020, Krescue can download and install OS images directly from the web via wired Ethernet.

**Main Features:**
- Backup EMMC memory contents to an [SD card](https://dl.khadas.com/Firmware/Krescue/dump/image2sd.readme.txt), [USB](https://dl.khadas.com/Firmware/Krescue/dump/README-rescue-usb-otg-mode-disks.txt), [LAN host](https://dl.khadas.com/Firmware/Krescue/dump/README-rescue-http-disks.txt).
- Restore .img.gz into an EMMC on another device.
- Online OS installation via Ethernet.
- View device information.
- Rescue shell for expert users.
- [Shell access](https://dl.khadas.com/Firmware/Krescue/dump/README-rescue-access.txt) via UART, USB network, and LAN network.

**[Steps](https://dl.khadas.com/Firmware/Krescue/dump/README-rescue-begin.txt) to Boot Krescue:**
1. Download an appropriate image for VIM2 from [dl.khadas.com](https://dl.khadas.com/Firmware/Krescue/dump/)
2. Burn this image to a micro-SD card, using Rufus, dd (Linux) or [Etcher](https://www.balena.io/etcher/).
3. Plug in the micro-SD card, USB-C power, and HDMI into your VIM2 device.
4. Boot your VIM2 device into [MaskROM mode](https://dl.khadas.com/Firmware/Krescue/dump/README-rescue-boot.txt) (please read!!!).
5. Use an [IR remote control](https://www.khadas.com/product-page/ir-remote) or USB keyboard to navigate the UI menus.

**Online Installation via Shell Command:**

Online Help:
- curl -sfL dl.khadas.com/.mega | sh -s - --help
- wget -O-  dl.khadas.com/.mega | sh -s - --help

Write Krescue directly to EMMC via the web:
- curl -sfL dl.khadas.com/.mega | sh -s - VIM1  > /dev/mmcblk? <tab auto-complete>
- curl -sfL dl.khadas.com/.mega | sh -s - VIM2  > /dev/mmcblk? <tab auto-complete>
- curl -sfL dl.khadas.com/.mega | sh -s - VIM3  > /dev/mmcblk? <tab auto-complete>
- curl -sfL dl.khadas.com/.mega | sh -s - VIM3L > /dev/mmcblk? <tab auto-complete>
  
More shell commands and examples:
- [https://dl.khadas.com/Firmware/Krescue/mega/README.megaimage_online.txt](https://dl.khadas.com/Firmware/Krescue/mega/README.megaimage_online.txt)

**Learn More:**
- [YouTube - Krescue Introduction](https://youtu.be/ER4BOJUhoYU)
- [YouTube - Krescue Online OS Installation](https://youtu.be/vvpkbhnyhZY)
- [Khadas Forum - Krescue Help & Discussion](https://forum.khadas.com/t/krescue-take-full-control-of-your-vim-device/5945)

# VIM2 v1.4 What's New?
Khadas has recently upgraded their VIM2 to v1.4 which features several improvements, such as the addition of XPWR pads for an external power switch, as well as a larger 16MB SPI-flash.

It also has had several components moved / upgraded to accomodate a quieter cooling system:
* [New VIM Heatsink](https://www.khadas.com/product-page/new-vim-heatsink)
* [3705 Cooling Fan](https://www.khadas.com/product-page/3705-cooling-fan)

It is backwards-compatible with the DIY Case, vTV Board and Khadas Tone Board, and supports several new ROMs such as [Ubuntu 18.04](/vim2/FirmwareUbuntu.html) and [Google Fuchsia](https://fuchsia.googlesource.com/zircon/+/master/docs/targets/khadas-vim.md).

**Learn More:**
* [Khadas Website - VIM2 v1.4 Description](https://www.khadas.com/vim)
* [Khadas Website - VIM2 v1.4 Accessories](https://www.khadas.com/vim-add-ons)
* [Khadas Shop - VIM2 v1.4 Page](https://www.khadas.com/product-page/new-vim2)
* [Khadas Files - VIM2 v1.4 Specifications Sheet](https://dl.khadas.com/Hardware/VIM2/Specs/Khadas_VIM2_Specs_190403.pdf)
* [Distributor Guide - What's New In VIM2 v1.4](https://dl.khadas.com/Hardware/VIM2/Distributor/VIM2_v1.4_Whats_New.pdf)

# VIM2 Power Supply
Although your VIM2 SBC is compatible with various types of power supplies, these are the recommended specs for the best performance-output and stability.

1. 5V, 2000mA Power Adapter
2. USB-A to USB-C Cable

**Learn More:**
* [Khadas Shop - Power Adapter](https://www.khadas.com/product-page/power-adapter)
* [Khadas Shop - USB-C Cable](https://www.khadas.com/product-page/usb-c-cable)
* [Extra Power Input For Khadas VIMs](/vim2/ExtraPowerInput.html)
* [Khadas VIM Specifications](https://www.khadas.com/vim)

# Displays & User Input
These items are useful when you need to connect your VIM2 SBC to an external display + keyboard mouse + remote control, for use as a desktop computer or media center.

1. 4K HDMI 2.0 Cable
2. HDMI-Compatible 1080P/4K Monitor
3. Wireless USB Keyboard + Mouse
4. CEC-Compatible Remote Control

```Note: Please do not attach multiple cables with large heads that interfere with each other, as that may bend or twist the connectors, and this will cause intermittent connectivity issues after some time.```

**Learn More:**
* [Khadas Shop - HDMI Cable](https://www.khadas.com/product-page/hdmi-cable)
* [Khadas Shop - Remote Control](https://www.khadas.com/product-page/ir-remote)
* [Amazon - Wireless Keyboard + Mouse](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Delectronics&field-keywords=wireless+keyboard+and+mouse&rh=n%3A172282%2Ck%3Awireless+keyboard+and+mouse)

# Making Bootable/Burning SD-Cards/Thumbdrives
These items are useful when you want to upgrade your VIM2 SBC's operating system via SD-Card or Thumbdrive (Burning Cards). Or if you want to run operating systems that can only be run from external media (Booting Cards) like LibreELEC.

1. 8GB or Larger, SD-Card
2. SD-Card Reader
3. Laptop / Desktop PC
4. 8GB or Larger, USB-Thumbdrive (U-Disk)

**Learn More:**
* [Booting Card Vs Burning Card](/vim1/BootingCardVsBurningCard.html)
* [Upgrade Using SD-Card](/vim2/UpgradeViaTFBurningCard.html)
* [Boot From External Media](/vim2/BootFromExtMedia.html)
* [Enter Upgrade Mode](/vim2/HowtoBootIntoUpgradeMode.html)

**Tips:**
* **eMMC image** should be burned directly to the eMMC using a USB-C data cable, from a Ubuntu or Windows Host. It must not be burned into an SD-Card. For Example: Android and Ubuntu distributions containing the `EMMC` mark.
* **SD/USB image** should be copied into an SD-Card, before that card is then used to reformat the eMMC storage with a new OS. For Example: Armbian, Ubuntu distributions containing the `SD_USB` mark, as well as LibreELEC and CoreELEC.
* In order to bootup from **SD/USB images**, you need Android (V180209 or newer) or Ubuntu (V180531 or newer) running on your eMMC with Multi-Boot activated.

# Upgrading eMMC Operating System Using USB-C Cable
You'll need these items if you want to use your laptop or desktop PC to upgrade your VIM2 SBC's operating system stored in its eMMC storage. For example, changing the bootup operating system from Android to Ubuntu, or installing a more exotic 3rd-party OS.

1. USB-A to USB-C Data Cable (Legacy Computers)
2. USB-C to USB-C Data Cable (Modern Computers)
3. Laptop / Desktop PC

**Learn More:**
* [Upgrade Firmware Using USB-C Cable](/vim1/UpgradeViaUSBCable.html)
* [Boot Into Upgrade Mode](/vim1/HowtoBootIntoUpgradeMode.html)

**Firmware Images:**
* [Android OS](/vim2/FirmwareAndroid.html)
* [Ubuntu OS](/vim2/FirmwareUbuntu.html)
* [LibreELEC](/vim2/FirmwareLibreelec.html)
* [Dual OS](/vim2/FirmwareDualos.html)
* [U-Boot](/vim2/FirmwareUboot.html)
* [Third Party OSes](/vim2/FirmwareThirdparty.html)

# Watching Movies, Expanding Internal eMMC Storage
These items are useful if you wish to use your VIM2 SBC as a media center, for storing/downloading large movie files. A microSDXC UHS-I card is expensive, but its also fast enough for 4K video playback. In addition, you can connect external USB-2.0/3.0 SSDs or HDDs for storage that can encompass your entire media library.

1. 64GB or larger, USB-2.0/3.0 HDD / SSD
2. 64GB or larger, *microSDXC UHS-I* SD-Card

**Learn More:**
* [Amazon - Samsung T5 Portable SSD](https://www.amazon.com/Samsung-T5-Portable-SSD-MU-PA1T0B/dp/B073H552FJ/ref=sr_1_1_sspa?ie=UTF8&qid=1543995277&sr=8-1-spons&keywords=external+usb+ssd&psc=1)
* [Amazon - microSDXC UHS-I SD-Card](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=microSDXC+UHS-I&rh=i%3Aaps%2Ck%3AmicroSDXC+UHS-I)

**Tip:** Nowadays most people stream their media, see [How To Install LibreELEC](/vim2/InstallLibreELEC.html).

# Software Development / Advanced Crash Recovery
Extreme cases of crash-recovery will require you to use the MRegister to reset your VIM2 SBC. A USB Serial Debug Tool is also useful for developers debugging complex software issues.

1. Your fingers (for resetting a dead SBC via Khadas-TST, VIM2 V14 only)
2. Conductive Metal Tweezers (For resetting a dead SBC via MRegister)
3. USB Serial Debug Tool (For diagnosing software/hardware issues)

**Learn More:**
* [Khadas TST Upgrade Mode](/vim2/HowtoBootIntoUpgradeMode.html#TST-Mode-v1-4-only)
* [MRegister Upgrade Mode](/vim2/HowtoBootIntoUpgradeMode.html)
* [Amazon - Metal Tweezers](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=metal+tweezers)
* [Amazon - USB Serial Debug Tool](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=usb+serial+debug+tool&rh=i%3Aaps%2Ck%3Ausb+serial+debug+tool)

# VIM2 Website
For more information, please see our website, read more documentation, or visit our forum.
* [Khadas VIM2 Homepage](https://www.khadas.com/vim)
* [Khadas VIM2 Forum](https://forum.khadas.com/c/Khadas-VIM2)

# VIM2 Review Video
{% youtube FZX6c8o5kzo %}

