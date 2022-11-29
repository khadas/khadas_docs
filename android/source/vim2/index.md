title: VIM2 Beginners Guide
---

## VIM2
![image](/android/images/vim2/docs_vim2.jpg)

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="front-tab" data-toggle="tab" href="#front-vim2" role="tab" aria-controls="front" aria-selected="true">Front(Blue)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="back-tab" data-toggle="tab" href="#back-vim2" role="tab" aria-controls="back" aria-selected="false">BACK(RED)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="button-tab" data-toggle="tab" href="#button-vim2" role="tab" aria-controls="button" aria-selected="false">BUTTONS</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="led-tab" data-toggle="tab" href="#led-vim2" role="tab" aria-controls="led" aria-selected="false">Indicator LEDs</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="gpio-tab" data-toggle="tab" href="#gpio-vim2" role="tab" aria-controls="gpio" aria-selected="false">GPIO Pinout</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="front-vim2" role="tabpanel" aria-labelledby="front-tab">

||Component|Purpose|
|---:|:---|:---|
|1|USB-A|USB 2.0 speed, 500mA max output|
|2|RJ-45|Gigabit Ethernet with [Wake-On-LAN (WOL)](/android/vim2/Wol.html)|
|3|HDMI|HDMI 2.0a with CEC, 4K@60Hz|
|4|USB-C|USB 2.0 OTG and [5V power input](https://www.khadas.com/product-page/power-adapter), can be used for [upgrading the OS](/android/vim2/UpgradeViaUSBCable.html)|
|5|USB-A|USB 2.0 speed, 900mA max output|
|6|Current Limit Switch|Prevents damage to VIM2 during uneven loading conditions|
|7|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|8|Reset Button|Force reboot your VIM2 in the event of a system freeze|
|9|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](/android/vim2/BootIntoUpgradeMode.html)|
|A|Power Button|This button turns on your VIM2|
|B|M2x4 Mounting Point|For mounting to [cases](https://www.khadas.com/product-page/diy-case) and [heatsinks](https://www.khadas.com/product-page/new-vim-heatsink)|
|C|RTC Battery Header|Header for attaching a battery for the real time clock|
|D|[40-Pin GPIO](/android/vim2/GPIOPinout.html)|Learn how to access the GPIO from [here](/android/vim2/AccessGpio.html), or use it to add a [Toneboard](https://www.khadas.com/product-page/tone-board)|
|E|Infrared Module|2-channel infrared receiver for use with [Khadas IR remote](https://www.khadas.com/product-page/ir-remote)|
|F|LEDs|Status indicator LEDs|
|G|FPC Connector|10-pins, 0.5mm pitch, with I2C, IOs|
|H|I-Pex Wi-Fi / Bluetooth] Connector|Wi-Fi / BT Antenna connector|
|I|I-Pex Wi-Fi / Bluetooth] Connector|Wi-Fi / BT Antenna connector|
</div>
<div class="tab-pane fade" id="back-vim2" role="tabpanel" aria-labelledby="back-tab">

||Component|Purpose|
|---:|:---|:---|
|1|Pogo Pads|External 5V power input, can be provided by [vTV Board](https://www.khadas.com/product-page/vtv-board) (DVB Tuner)|
|2|Micro-SD Card Slot|for extra storage|
|3|500mA Fuse|Fuse for the 500mA USB port|
|4|WOL Switch|Power switch activated via Wake-On-LAN|
|5|[MCU](/android/vim2/KbiGuidance.html)|STM8S003 micro-controller with programmable EEPROM|
|6|MCU Pogo Pads|SWIM, UART, ADC, NRST|
|7|SPI Flash|Flash memory module that interfaces over SPI|
|8|20-Pin Pogo Pads|USB, I2C, DVB-Bus, IOs, for docking with the [vTV Board](https://www.khadas.com/product-page/vtv-board) (DVB Tuner)|
|9|XPWR Pads|Connect an external power switch using these pads|
|A|900mA Fuse|Fuse for the 900mA USB port|
</div>
<div class="tab-pane fade" id="button-vim2" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|Purpose|
|:---:|:---:|:---:|:---|
|x|||Force Reboot VIM2
||x||[Enter Upgrade Mode (TST)](/android/vim2/BootIntoUpgradeMode.html)|
|||x|Power On/Wake Up VIM2|
|x||x|[Enter Upgrade Mode (KEYS)](/android/vim2/BootIntoUpgradeMode.html)|
|x|x|x|[Erase EMMC](/android/vim2/EraseEMMC.html)|
</div>
<div class="tab-pane fade" id="led-vim2" role="tabpanel" aria-labelledby="led-tab">

|Colour|Behaviour|Meaning|
|---:|:---:|:---|
|Blue|OFF|Power source disconnected|
||Solid ON|Power source connected, SBC turned off|
|White|OFF|SBC turned off|
||Solid ON|SBC turned on|
|Red|None|None|

The above behaviours are default out-of-the-box, and can be altered by a user. For example the white LED can be made to blink or breathe. For more information on how to program them via your favourite OS (each OS is different), please consult with experts at [forum.khadas.com](https://forum.khadas.com).
</div>
<div class="tab-pane fade" id="gpio-vim2" role="tabpanel" aria-labelledby="gpio-tab">

SIGNAL| PIN|PIN|SIGNAL
---|:---|:---|:---
5V|1|21|GND
5V|2|22|I2C_SCK_A
HUB_DM1|3|23|I2C_SDA_A
HUB_DP1|4|24|GND
GND|5|25|I2C_SCK_B
GPIODV_21|6|26|I2C_SDA_B
GPIODV_22|7|27|3.3V
GPIODV_23|8|28|GND
GND|9|29|I2S_SCLK
ADC_CH0|10|30|I2S_MCLK
1.8V|11|31|I2S_SDO
ADC_CH2|12|32|I2S_LRCK
SPDIF|13|33|I2S_SDI
GND|14|34|GND
UART_RX_AO_B|15|35|PWM_D
UART_TX_AO_B|16|36|RTC_CLK
GND|17|37|GPIOH_5
Linux_RX|18|38|EXP_INT
Linux_TX|19|39|GPIODV_13
3.3V|20|40|GND
</div>
</div>

## VIM2 v1.4 What's New?
Khadas has recently upgraded their VIM2 to v1.4 which features several improvements, such as the addition of XPWR pads for an external power switch, as well as a larger 16MB SPI-flash.

It also has had several components moved / upgraded to accomodate a quieter cooling system:
* [New VIM Heatsink](https://www.khadas.com/product-page/new-vim-heatsink)
* [3705 Cooling Fan](https://www.khadas.com/product-page/3705-cooling-fan)

It is backwards-compatible with the DIY Case, vTV Board and Khadas Tone Board, and supports several new ROMs such as [Ubuntu 18.04](/android/vim2/FirmwareUbuntu.html) and [Google Fuchsia](https://fuchsia.googlesource.com/zircon/+/master/docs/targets/khadas-vim.md).

**Learn More:**
* [Khadas Website - VIM2 v1.4 Description](https://www.khadas.com/vim)
* [Khadas Website - VIM2 v1.4 Accessories](https://www.khadas.com/vim-add-ons)
* [Khadas Shop - VIM2 v1.4 Page](https://www.khadas.com/product-page/new-vim2)
* [Khadas Files - VIM2 v1.4 Specifications Sheet](https://dl.khadas.com/Hardware/VIM2/Specs/Khadas_VIM2_Specs_190403.pdf)
* [Distributor Guide - What's New In VIM2 v1.4](https://dl.khadas.com/Hardware/VIM2/Distributor/VIM2_v1.4_Whats_New.pdf)

## VIM2 Power Supply
Although your VIM2 SBC is compatible with various types of power supplies, these are the recommended specs for the best performance-output and stability.

1. 5V, 2000mA Power Adapter
2. USB-A to USB-C Cable

**Learn More:**
* [Khadas Shop - Power Adapter](https://www.khadas.com/product-page/power-adapter)
* [Khadas Shop - USB-C Cable](https://www.khadas.com/product-page/usb-c-cable)
* [Extra Power Input For Khadas VIMs](/android/vim2/ExtraPowerInput.html)
* [Khadas VIM Specifications](https://www.khadas.com/vim)

## Displays & User Input
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

## Upgrading eMMC Operating System Using USB-C Cable
You'll need these items if you want to use your laptop or desktop PC to upgrade your VIM2 SBC's operating system stored in its eMMC storage. For example, changing the bootup operating system from Android to Ubuntu, or installing a more exotic 3rd-party OS.

1. USB-A to USB-C Data Cable (Legacy Computers)
2. USB-C to USB-C Data Cable (Modern Computers)
3. Laptop / Desktop PC

**Learn More:**
* [Upgrade Firmware Using USB-C Cable](UpgradeViaUSBCable.html)
* [Boot Into Upgrade Mode](BootIntoUpgradeMode.html)

**Firmware Images:**
* [Android OS](/android/vim2/FirmwareAndroid.html)
* [Ubuntu OS](/android/vim2/FirmwareUbuntu.html)
* [LibreELEC](/android/vim2/FirmwareLibreelec.html)
* [Dual OS](/android/vim2/FirmwareDualos.html)
* [U-Boot](/android/vim2/FirmwareUboot.html)
* [Third Party OSes](/android/vim2/FirmwareThirdparty.html)

## Watching Movies, Expanding Internal eMMC Storage
These items are useful if you wish to use your VIM2 SBC as a media center, for storing/downloading large movie files. A microSDXC UHS-I card is expensive, but its also fast enough for 4K video playback. In addition, you can connect external USB-2.0/3.0 SSDs or HDDs for storage that can encompass your entire media library.

1. 64GB or larger, USB-2.0/3.0 HDD / SSD
2. 64GB or larger, *microSDXC UHS-I* SD-Card

**Learn More:**
* [Amazon - Samsung T5 Portable SSD](https://www.amazon.com/Samsung-T5-Portable-SSD-MU-PA1T0B/dp/B073H552FJ/ref=sr_1_1_sspa?ie=UTF8&qid=1543995277&sr=8-1-spons&keywords=external+usb+ssd&psc=1)
* [Amazon - microSDXC UHS-I SD-Card](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=microSDXC+UHS-I&rh=i%3Aaps%2Ck%3AmicroSDXC+UHS-I)

## Software Development / Advanced Crash Recovery
Extreme cases of crash-recovery will require you to use the MRegister to reset your VIM2 SBC. A USB Serial Debug Tool is also useful for developers debugging complex software issues.

1. Your fingers (for resetting a dead SBC via Khadas-TST, VIM2 V14 only)
2. Conductive Metal Tweezers (For resetting a dead SBC via MRegister)
3. USB Serial Debug Tool (For diagnosing software/hardware issues)

**Learn More:**
* [Khadas TST Upgrade Mode](/android/vim2/BootIntoUpgradeMode.html#TST-Mode-v1-4-only)
* [MRegister Upgrade Mode](/android/vim2/BootIntoUpgradeMode.html)
* [Amazon - Metal Tweezers](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=metal+tweezers)
* [Amazon - USB Serial Debug Tool](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=usb+serial+debug+tool&rh=i%3Aaps%2Ck%3Ausb+serial+debug+tool)

## VIM2 Website
For more information, please see our website, read more documentation, or visit our forum.
* [Khadas VIM2 Homepage](https://www.khadas.com/vim)
* [Khadas VIM2 Forum](https://forum.khadas.com/c/Khadas-VIM2)
