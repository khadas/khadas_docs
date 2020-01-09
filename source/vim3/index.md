title: VIM3 Beginners Guide
---

# VIM3

![image](/images/vim3/docs_vim3.jpg)

## Front (Blue)
||Component|Purpose|
|---:|:---|:---|
|1|USB-A|[USB 3.0 port that swaps to 2.0 when PCI-E is active](https://docs.khadas.com/vim3/HowToSetupPcieUsbPort.html), 900mA output|
|2|RJ-45|Gigabit LAN port that supports [Wake-On-LAN](https://docs.khadas.com/vim3/HowtoUseWol.html)|
|3|HDMI|HDMI port supporting CEC|
|4|USB-C|USB-C port with USB power delivery ([5](https://www.khadas.com/product-page/power-adapter)-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter) input) and 2.0 speeds, can be used for [upgrading the OS](https://docs.khadas.com/vim3/UpgradeViaUSBCable.html)|
|5|USB-A|USB 2.0 port that supports 500mA output|
|6|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|7|Reset Button|Force reboot your VIM3 in the event of a system freeze|
|8|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)|
|9|Power Button|This button turns on your VIM3|
|A|M2 Hole|M2 clearance holes for a [case](https://www.khadas.com/product-page/diy-case), or adding a [heatsink](https://www.khadas.com/product-page/new-vim-heatsink)|
|B|G-Sensor|6-axis accelerometer|
|C|RTC Header|A header for connecting a real-time clock (button) battery|
|D|[40-Pin GPIO](https://docs.khadas.com/vim3/GPIOPinout.html)|[General input/output pins](https://docs.khadas.com/vim3/HowToAccessGpio.html) for VIM3's SoC, or plugging-in a [Toneboard](https://www.khadas.com/product-page/tone-board)|
|E|GPIO Expander|Increases VIM3's available I/O beyond what A311D can provide|
|F|[MCU](https://docs.khadas.com/vim3/KbiGuidance.html)|STM8S003 micro-controller with programmable EEPROM|
|G|WOL Switch|Power switch activated via Wake-On-LAN|
|H|Infrared Module|2-channel infrared receiver for the [Khadas IR remote](https://www.khadas.com/product-page/ir-remote)|
|I|LEDs|Indicator LEDs|
|J|IPEX Antenna|[Wi-Fi](https://docs.khadas.com/vim3/HowToConnectWifi.html) and Bluetooth antenna connector|
|K|IPEX Antenna|Wi-Fi and [Bluetooth](https://docs.khadas.com/vim3/HowToSetupBluetooth.html) antenna connector|

## Back (Red)
||Component|Purpose|
|---:|:---|:---|
|1|[VIN](https://www.khadas.com/product-page/vin-to-vin-cable)|5-12V power input, supports Power-Over-Ethernet via [M2X Extension](https://www.khadas.com/product-page/m2x-extension-board)|
|2|[Micro-SD Slot](https://docs.khadas.com/vim3/BootFromExtMedia.html)|Molex Slot, spec version 2.x/3.x/4.x (SDSC/SDHC/SDXC)|
|3|Current Limit Switch|Prevents damage to VIM3 due to faulty loading conditions|
|4|M.2 Slot|PCIe 2.0 (x1 lane), supports [M.2 2280 NVMe SSDs](https://docs.khadas.com/vim3/ListOfCompatibleNVMeSSDs.html)|
|5|TP|10-pin 0.5mm pitch FPC connector for [touch input](https://docs.khadas.com/vim3/ConnectLcd.html)|
|6|[MIPI-DSI](https://docs.khadas.com/vim3/ConnectLcd.html)|30-pin, 0.5mm pitch FPC connector for [4-lane 1080P displays](https://www.khadas.com/product-page/ts050-touchscreen)|
|7|MIPI-CSI|30-pin, 0.5mm pitch, 4-lane, dual cameras, 8MP image signal processing|
|8|[SPI Flash](https://docs.khadas.com/vim3/BootFromSpiFlash.html)|Flash memory module that interfaces over SPI|
|9|XPWR Pads|Connect an external power switch using these pads|
|A|M-Register|Allows the EMMC to [enter MaskROM mode](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)|
|B|S-Register|Allows the SPI Flash to [enter MaskROM mode](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)|
|C|Current Limit Switch|Prevents damage to VIM3 due to faulty loading conditions|

## Buttons
|Reset|Function|Power|Purpose|
|:---:|:---:|:---:|:---|
|x|||Force Reboot VIM3|
||x||[Enter Upgrade Mode (TST)](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)|
|||x|Power ON/Wake Up VIM3|
|x||x|[Enter Upgrade Mode (KEYS)](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)|
|x|x|x|[Erase EMMC](https://docs.khadas.com/vim3/HowtoEraseEMMC.html)|

## Indicator LEDs
|Colour|Behaviour|Meaning|
|---:|:---:|:---|
|Blue|OFF|Power source disconnected|
||Solid ON|Power source connected, SBC turned off|
|White|OFF|SBC turned off|
||Solid ON|SBC turned on|
|Red|None|None|

The above behaviours are default out-of-the-box, and can be altered by a user. For example the white LED can be made to blink or breathe. For more information on how to program them via your favourite OS (each OS is different), please consult with experts at [forum.khadas.com](forum.khadas.com).

# VIM3L

![image](/images/vim3/docs_vim3l.jpg)

## Front (Blue)
||Component|Purpose|
|---:|:---|:---|
|1|USB-A|[USB 3.0 port that swaps to 2.0 when PCI-E is active](https://docs.khadas.com/vim3/HowToSetupPcieUsbPort.html), 900mA output|
|2|RJ-45|Gigabit LAN port that supports [Wake-On-LAN](https://docs.khadas.com/vim3/HowtoUseWol.html)|
|3|HDMI|HDMI port supporting CEC|
|4|USB-C|USB-C port with USB power delivery ([5](https://www.khadas.com/product-page/power-adapter)-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter) input) and 2.0 speeds, can be used for [upgrading the OS](https://docs.khadas.com/vim3/UpgradeViaUSBCable.html)|
|5|USB-A|USB 2.0 port that supports 500mA output|
|6|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|7|Reset Button|Force reboot your VIM3L in the event of a system freeze|
|8|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)|
|9|Power Button|This button turns on your VIM3L|
|A|M2 Hole|M2 clearance holes for a [case](https://www.khadas.com/product-page/diy-case), or adding a [heatsink](https://www.khadas.com/product-page/new-vim-heatsink)|
|B|G-Sensor|6-axis accelerometer|
|C|RTC Header|A header for connecting a real-time clock (button) battery|
|D|[40-Pin GPIO](https://docs.khadas.com/vim3/GPIOPinout.html)|[General input/output pins](https://docs.khadas.com/vim3/HowToAccessGpio.html) for VIM3L's SoC, or plugging-in a [Toneboard](https://www.khadas.com/product-page/tone-board)|
|E|GPIO Expander|Increases VIM3L's available I/O beyond what S905D3 can provide|
|F|[MCU](https://docs.khadas.com/vim3/KbiGuidance.html)|STM8S003 micro-controller with programmable EEPROM|
|G|WOL Switch|Power switch activated via Wake-On-LAN|
|H|Infrared Module|2-channel infrared receiver for the [Khadas IR remote](https://www.khadas.com/product-page/ir-remote)|
|I|LEDs|Indicator LEDs|
|J|IPEX Antenna|[Wi-Fi](https://docs.khadas.com/vim3/HowToConnectWifi.html) and Bluetooth antenna connector|
|K|IPEX Antenna|Wi-Fi and [Bluetooth](https://docs.khadas.com/vim3/HowToSetupBluetooth.html) antenna connector|

## Back (Red)
||Component|Purpose|
|---:|:---|:---|
|1|[VIN](https://www.khadas.com/product-page/vin-to-vin-cable)|5-12V power input, supports Power-Over-Ethernet via [M2X Extension](https://www.khadas.com/product-page/m2x-extension-board)|
|2|[Micro-SD Slot](https://docs.khadas.com/vim3/BootFromExtMedia.html)|Molex Slot, spec version 2.x/3.x/4.x (SDSC/SDHC/SDXC)|
|3|Current Limit Switch|Prevents damage to VIM3L due to faulty loading conditions|
|4|M.2 Slot|PCIe 2.0 (x1 lane), supports [M.2 2280 NVMe SSDs](https://docs.khadas.com/vim3/ListOfCompatibleNVMeSSDs.html)|
|5|TP|10-pin 0.5mm pitch FPC connector for [touch input](https://docs.khadas.com/vim3/ConnectLcd.html)|
|6|[MIPI-DSI](https://docs.khadas.com/vim3/ConnectLcd.html)|30-pin, 0.5mm pitch FPC connector for [4-lane 1080P displays](https://www.khadas.com/product-page/ts050-touchscreen)|
|7|MIPI-CSI|30-pin, 0.5mm pitch, 4-lane, single camera, no image signal processor|
|8|[SPI Flash](https://docs.khadas.com/vim3/BootFromSpiFlash.html)|Flash memory module that interfaces over SPI|
|9|XPWR Pads|Connect an external power switch using these pads|
|A|M-Register|Allows the EMMC to [enter MaskROM mode](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)|
|B|S-Register|Allows the SPI Flash to [enter MaskROM mode](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)|
|C|Current Limit Switch|Prevents damage to VIM3L due to faulty loading conditions|

## Buttons
|Reset|Function|Power|Purpose|
|:---:|:---:|:---:|:---|
|x|||Force Reboot VIM3L|
||x||[Enter Upgrade Mode (TST)](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)|
|||x|Power ON/Wake Up VIM3L|
|x||x|[Enter Upgrade Mode (KEYS)](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)|
|x|x|x|[Erase EMMC](https://docs.khadas.com/vim3/HowtoEraseEMMC.html)|

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
1. Download an appropriate image for VIM3/3L from [dl.khadas.com](https://dl.khadas.com/Firmware/Krescue/dump/)
2. Burn this image to a micro-SD card, using Rufus, dd (Linux) or [Etcher](https://www.balena.io/etcher/).
3. Plug in the micro-SD card, USB-C power, and HDMI into your VIM3/3L device.
4. Boot your VIM3/3L device into [MaskROM mode](https://dl.khadas.com/Firmware/Krescue/dump/README-rescue-boot.txt) (please read!!!).
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

# Amlogic A311D, NPU Usage Guides
These following documentation links will help you get started with your VIM3's 5.0 TOPS neural processing unit.

1. [How to Use NPU](https://docs.khadas.com/vim3/HowToUseNpu.html)
2. [Install Darknet](https://docs.khadas.com/vim3/HowToInstallDarknet.html)
3. [Train Yolo](https://docs.khadas.com/vim3/HowToTrainYolo.html)
4. [Transform Yolo](https://docs.khadas.com/vim3/HowToTransformYolo.html)
5. [Train Inception](https://docs.khadas.com/vim3/HowToTrainInception.html)

**Learn More:**
* [YouTube: VIM3 - Realtime Object Detection Using Yolo v3](https://www.youtube.com/watch?v=aQ-g_CBrzEU)

# Booting 3rd-Party ROMs from Micro SD-Card
These items are useful when you want to boot your VIM3 from an SD-Card, to run 3rd-party ROMs such as LibreELEC.

1. 8GB or larger, Micro SD-card.
2. Computer with USB and/or a Micro SD-card reader.

Steps to boot your VIM3 from a Micro SD-card:

1. Insert your 8GB or larger Micro SD-card into your computer.
2. Flash the ROM file (.img) to your Micro SD-card, using [Etcher](https://www.balena.io/etcher/).
3. Make sure you select the correct VIM3 .dtb file (follow instructions specific to the ROM!).
4. Ensure that your VIM3 has Android 9.0 installed, and is connected to a power adapter (not PC!).
5. Insert the SD-card into your VIM3, and power it on.
6. Use [keys-mode](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html) to enter upgrade mode.
7. If you have done all the above steps correctly, your VIM3 will boot from the Micro SD-card.

**Learn More:**
* [Enter Upgrade Mode](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)
* [Upgrade Using SD-Card](https://docs.khadas.com/vim3/UpgradeViaTFBurningCard.html)
* [Boot From External Media](https://docs.khadas.com/vim3/BootFromExtMedia.html)
* [Booting Card Vs Burning Card](https://docs.khadas.com/vim3/BootingCardVsBurningCard.html)

**Tips:**
* **EMMC image** should be burned directly to the eMMC using a USB-C data cable, from a Ubuntu or Windows Host. It must not be burned into an SD-Card. For Example: Android and Ubuntu distributions Containing the `EMMC` mark.
* **SD/USB image** should be copied into an SD-Card, before that card is then used to reformat the eMMC storage with a new OS. For Example: Armbian, Ubuntu distributions containing to `SD_USB` mark, as well as LibreELEC and CoreELEC.
* In order to bootup from **SD/USB images**, you need Android or Ubuntu running on your eMMC with Multi-Boot activated.

# Flashing eMMC Operating System Using USB-C Cable
You'll need these items if you want to use your laptop or desktop PC to upgrade your VIM3 SBC's operating system stored in the eMMC storage. For example, Changing the bootup operating system from Android to Ubuntu, or installing a more exotic 3rd-party OS.

1. USB to USB-C Cable (Older Computers)
2. USB-C Male-to-Male Cable (Current Computers)
3. Computer running Linux or Windows.

**Learn More:**
* [Upgrade OS Using USB-C Cable](https://docs.khadas.com/vim3/UpgradeViaUSBCable.html)
* [Boot Into Upgrade Mode](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)

**Firmware Images:**
* [Android OS](https://docs.khadas.com/vim3/FirmwareAndroid.html)
* [Ubuntu OS](https://docs.khadas.com/vim3/FirmwareUbuntu.html)
* [LibreELEC](https://docs.khadas.com/vim3/FirmwareLibreelec.html)
* [Dual](https://docs.khadas.com/vim3/FirmwareDualos.html)
* [U-Boot](https://docs.khadas.com/vim3/FirmwareUboot.html)
* [Third Party OSes](https://docs.khadas.com/vim3/FirmwareThirdparty.html)

# VIM3 Power Supply
Although your VIM3 SBC is compatible with various types of power supplies, these are the recommended specs for the best performance-output and stability.

1. USB-C 24W Adapter
2. USB-C Male-to-Male Cable

**Learn More:**
* [Khadas Shop - USB-C 24W Adapter](https://www.khadas.com/product-page/usb-c-24w-adapter)
* [Khadas Shop - USB-C Cable (Male-to-Male)](https://www.khadas.com/product-page/usb-c-cable-male-to-male)
* [Extra Power Input For Khadas VIMs](https://docs.khadas.com/vim3/ExtraPowerInput.html)
* [Khadas VIM Specifications](https://www.khadas.com/vim)

# Displays & User Input
These items are useful when you need to connect your VIM3 SBC to an external display + keyBoard mouse + remote control, for use as a desktop computer or media center.

1. 4K HDMI 2.0 Cable
2. HDMI-Compatible 1080P/4K Monitor
3. Wireless USB KeyBoard + Mouse
4. CEC-Compatible Remote Control

```Note: Please do not attach multiple cables with large heads that interfere with each other, as that may bend or twist the connectors, and this will cause intermittent connectivity issues after some time.```

**Learn More:**
* [Khadas Shop - HDMI Cable](https://www.khadas.com/product-page/hdmi-cable)
* [Khadas Shop - Remote Control](https://www.khadas.com/product-page/ir-remote)

# Watching Movies, Expanding Internal eMMC Storage
These items are useful if you wish to use your VIM3 SBC as a media center, for storing/downloading large movie files. A microSDXC UHS-I card is expensive, but its also fast enough for 4K video playback. In addition, you can connect external USB-2.0/3.0 SSDs or HDDs for storage that can encompass your entire media library.

1. 64GB or larger, USB-2.0/3.0 HDD/SSD
2. 64GB or larger, *microSDXC UHS-I* SD-Card

**Learn More:**
* [Amazon - Samsung T5 Portable SSD](https://www.amazon.com/Samsung-T5-Portable-SSD-MU-PA1T0B/dp/B073H552FJ/ref=sr_1_1_sspa?ie=UTF8&qid=1543995277&sr=8-1-spons&keywords=external+usb+ssd&psc=1)
* [Amazon - microSDXC UHS-I SD-Card](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=microSDXC+UHS-I&rh=i%3Aaps%2Ck%3AmicroSDXC+UHS-I)

**Tip:** Nowadays most people stream their media , see [How To Install LibreELEC](https://docs.khadas.com/vim3/InstallLibreELEC.html).

# Software Development / Advanced Crash Recovery
Extreme cases of crash-recovery will require you to use either the Khadas TST (VIM3), or the MRegister to reset your VIM3 SBC. A USB Serial Debug Tool is also useful for developers debugging complex software issues.

1. Your fingers (for resetting a dead SBC via Khadas-TST, VIM3 only)
2. Conductive Metal Tweezers (for resetting a dead SBC via MRegister)
3. USB Serial Debug Tool(For diagnosing software/hardware issues)

**Learn More:**
* [Khadas TST Upgrade Mode](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html#TST-Mode-Recommended)
* [Mregister Upgrade Mode](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)
* [Amazon - Metal Tweezers](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=metal+tweezers)
* [Amazon - USB Serial Debug Tool](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=usb+serial+debug+tool&rh=i%3Aaps%2Ck%3Ausb+serial+debug+tool)

# VIM3 Website
For more information, please see our website, read more decumentation, or visit our forum.
* [Khadas VIM3 Homepage](https://www.khadas.com/vim)
* [Khadas VIM3 Forum](https://forum.khadas.com/c/Khadas-VIM3)


