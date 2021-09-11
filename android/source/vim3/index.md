title: VIM3 Beginners Guide
---

## VIM3

![image](/android/images/vim3/docs_vim3.jpg)

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="front-tab" data-toggle="tab" href="#front-vim3" role="tab" aria-controls="front" aria-selected="true">Front(Blue)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="back-tab" data-toggle="tab" href="#back-vim3" role="tab" aria-controls="back" aria-selected="false">BACK(Red)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="button-tab" data-toggle="tab" href="#button-vim3" role="tab" aria-controls="button" aria-selected="false">BUTTONS</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="led-tab" data-toggle="tab" href="#led-vim3" role="tab" aria-controls="led" aria-selected="false">Indicator LEDs</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="gpio-tab" data-toggle="tab" href="#gpio-vim3" role="tab" aria-controls="gpio" aria-selected="false">GPIO Pinout</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="front-vim3" role="tabpanel" aria-labelledby="front-tab">

||Component|Purpose|
|---:|:---|:---|
|1|USB-A|[USB 3.0 port that swaps to 2.0 when PCI-E is active](/android/vim3/SetupPcieUsbPort.html), 900mA output|
|2|RJ-45|Gigabit LAN port that supports [Wake-On-LAN](/android/vim3/Wol.html)|
|3|HDMI|HDMI port supporting CEC|
|4|USB-C|USB-C port with USB power delivery ([5](https://www.khadas.com/product-page/power-adapter)-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter) input) and 2.0 speeds, can be used for [upgrading the OS](/android/vim3/UpgradeViaUSBCable.html)|
|5|USB-A|USB 2.0 port that supports 500mA output|
|6|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|7|Reset Button|Force reboot your VIM3 in the event of a system freeze|
|8|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](/android/vim3/BootIntoUpgradeMode.html)|
|9|Power Button|This button turns on your VIM3|
|A|M2 Hole|M2 clearance holes for a [case](https://www.khadas.com/product-page/diy-case), or adding a [heatsink](https://www.khadas.com/product-page/new-vim-heatsink)|
|B|G-Sensor|3-axis accelerometer|
|C|RTC Header|A header for connecting a real-time clock (button) battery|
|D|[40-Pin GPIO](/android/vim3/GPIOPinout.html)|[General input/output pins](/android/vim3/AccessGpio.html) for VIM3's SoC, or plugging-in a [Toneboard](https://www.khadas.com/product-page/tone-board)|
|E|GPIO Expander|Increases VIM3's available I/O beyond what A311D can provide|
|F|[MCU](/android/vim3/KbiGuidance.html)|STM8S003 micro-controller with programmable EEPROM|
|G|WOL Switch|Power switch activated via Wake-On-LAN|
|H|Infrared Module|2-channel infrared receiver for the [Khadas IR remote](https://www.khadas.com/product-page/ir-remote)|
|I|LEDs|Indicator LEDs|
|J|IPEX Antenna|Wi-Fi and Bluetooth antenna connector|
|K|IPEX Antenna|Wi-Fi and Bluetooth antenna connector|
</div>
<div class="tab-pane fade" id="back-vim3" role="tabpanel" aria-labelledby="back-tab">

||Component|Purpose|
|---:|:---|:---|
|1|[VIN](https://www.khadas.com/product-page/vin-to-vin-cable)|5-12V power input, supports Power-Over-Ethernet via [M2X Extension](https://www.khadas.com/product-page/m2x-extension-board)|
|2|[Micro-SD Slot](/android/vim3/BootFromExtMedia.html)|Molex Slot, spec version 2.x/3.x/4.x (SDSC/SDHC/SDXC)|
|3|Current Limit Switch|Prevents damage to VIM3 due to faulty loading conditions|
|4|M.2 Slot|PCIe 2.0 (x1 lane), supports [M.2 2280 NVMe SSDs](/android/vim3/ListOfCompatibleNVMeSSDs.html)|
|5|TP|10-pin 0.5mm pitch FPC connector for [touch input](/android/vim3/ConnectLcd.html)|
|6|[MIPI-DSI](/android/vim3/ConnectLcd.html)|30-pin, 0.5mm pitch FPC connector for [4-lane 1080P displays](https://www.khadas.com/product-page/ts050-touchscreen)|
|7|MIPI-CSI|30-pin, 0.5mm pitch, 4-lane, dual cameras, 8MP image signal processing|
|8|[SPI Flash](/android/vim3/BootFromSpiFlash.html)|Flash memory module that interfaces over SPI|
|9|XPWR Pads|Connect an external power switch using these pads|
|A|M-Register|Allows the EMMC to [enter MaskROM mode](/android/vim3/BootIntoUpgradeMode.html)|
|B|S-Register|Allows the SPI Flash to [enter MaskROM mode](/android/vim3/BootIntoUpgradeMode.html)|
</div>
<div class="tab-pane fade" id="button-vim3" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|Purpose|
|:---:|:---:|:---:|:---|
|x|||Force Reboot VIM3|
||x||[Enter Upgrade Mode (TST)](/android/vim3/BootIntoUpgradeMode.html)|
|||x|Power ON/Wake Up VIM3|
|x||x|[Enter Upgrade Mode (KEYS)](/android/vim3/BootIntoUpgradeMode.html)|
|x|x|x|[Erase EMMC](/android/vim3/EraseEMMC.html)|
</div>
<div class="tab-pane fade" id="led-vim3" role="tabpanel" aria-labelledby="led-tab">

|Colour|Behaviour|Meaning|
|---:|:---:|:---|
|Blue|OFF|Power source disconnected|
||Solid ON|Power source connected, SBC turned off|
|White|OFF|SBC turned off|
||Solid ON|SBC turned on|
|Red|None|None|

The above behaviours are default out-of-the-box, and can be altered by a user. For example the white LED can be made to blink or breathe. For more information on how to program them via your favourite OS (each OS is different), please consult with experts at [forum.khadas.com](https://forum.khadas.com).
</div>
<div class="tab-pane fade" id="gpio-vim3" role="tabpanel" aria-labelledby="gpio-tab">

SIGNAL| PIN|PIN|SIGNAL
---|:---|:---|:---
5V|1|21|GND
5V|2|22|I2C_M3_SCL
USB_DM|3|23|I2C_M3_SDA
USB_DP|4|24|GND
GND|5|25|I2C_AO_SCK
VCC_MCU|6|26|I2C_AO_SDA
MCU_NRST|7|27|3.3V
MCU_SWIM|8|28|GND
GND|9|29|I2SB_SCLK
ADC_CH0|10|30|I2S_MCLK0
1.8V|11|31|I2SB_SDO
ADC_CH3|12|32|I2SB_LRCK
SPDIF_OUT|13|33|I2SB_SDI
GND|14|34|GND
UARTC_RX|15|35|PWM_F
UARTC_TX|16|36|RTC_CLK
GND|17|37|GPIOH_4
Linux_RX|18|38|MCU_PA1
Linux_TX|19|39|GPIODZ_15
3.3V|20|40|GND
</div>
</div> 


## VIM3L

![image](/android/images/vim3/docs_vim3l.jpg)

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="front-tab" data-toggle="tab" href="#front-vim3l" role="tab" aria-controls="front" aria-selected="true">Front(Blue)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="back-tab" data-toggle="tab" href="#back-vim3l" role="tab" aria-controls="back" aria-selected="false">BACK(RED)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="button-tab" data-toggle="tab" href="#button-vim3l" role="tab" aria-controls="button" aria-selected="false">BUTTONS</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="led-tab" data-toggle="tab" href="#led-vim3l" role="tab" aria-controls="led" aria-selected="false">Indicator LEDs</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="gpio-tab" data-toggle="tab" href="#gpio-vim3l" role="tab" aria-controls="gpio" aria-selected="false">GPIO Pinout</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="front-vim3l" role="tabpanel" aria-labelledby="front-tab">

||Component|Purpose|
|---:|:---|:---|
|1|USB-A|[USB 3.0 port that swaps to 2.0 when PCI-E is active](/android/vim3/SetupPcieUsbPort.html), 900mA output|
|2|RJ-45|Gigabit LAN port that supports [Wake-On-LAN](/android/vim3/Wol.html)|
|3|HDMI|HDMI port supporting CEC|
|4|USB-C|USB-C port with USB power delivery ([5](https://www.khadas.com/product-page/power-adapter)-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter) input) and 2.0 speeds, can be used for [upgrading the OS](/android/vim3/UpgradeViaUSBCable.html)|
|5|USB-A|USB 2.0 port that supports 500mA output|
|6|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|7|Reset Button|Force reboot your VIM3L in the event of a system freeze|
|8|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](/android/vim3/BootIntoUpgradeMode.html)|
|9|Power Button|This button turns on your VIM3L|
|A|M2 Hole|M2 clearance holes for a [case](https://www.khadas.com/product-page/diy-case), or adding a [heatsink](https://www.khadas.com/product-page/new-vim-heatsink)|
|B|G-Sensor|3-axis accelerometer|
|C|RTC Header|A header for connecting a real-time clock (button) battery|
|D|[40-Pin GPIO](/android/vim3/GPIOPinout.html)|[General input/output pins](/android/vim3/AccessGpio.html) for VIM3L's SoC, or plugging-in a [Toneboard](https://www.khadas.com/product-page/tone-board)|
|E|GPIO Expander|Increases VIM3L's available I/O beyond what S905D3 can provide|
|F|[MCU](/android/vim3/KbiGuidance.html)|STM8S003 micro-controller with programmable EEPROM|
|G|WOL Switch|Power switch activated via Wake-On-LAN|
|H|Infrared Module|2-channel infrared receiver for the [Khadas IR remote](https://www.khadas.com/product-page/ir-remote)|
|I|LEDs|Indicator LEDs|
|J|IPEX Antenna|[Wi-Fi](/android/vim3/HowToConnectWifi.html) and Bluetooth antenna connector|
|K|IPEX Antenna|Wi-Fi and [Bluetooth](/android/vim3/HowToSetupBluetooth.html) antenna connector|
</div>
<div class="tab-pane fade" id="back-vim3l" role="tabpanel" aria-labelledby="back-tab">

||Component|Purpose|
|---:|:---|:---|
|1|[VIN](https://www.khadas.com/product-page/vin-to-vin-cable)|5-12V power input, supports Power-Over-Ethernet via [M2X Extension](https://www.khadas.com/product-page/m2x-extension-board)|
|2|Micro-SD Slot|Molex Slot, spec version 2.x/3.x/4.x (SDSC/SDHC/SDXC)|
|3|Current Limit Switch|Prevents damage to VIM3L due to faulty loading conditions|
|4|M.2 Slot|PCIe 2.0 (x1 lane), supports [M.2 2280 NVMe SSDs](/android/vim3/ListOfCompatibleNVMeSSDs.html)|
|5|TP|10-pin 0.5mm pitch FPC connector for [touch input](/android/vim3/ConnectLcd.html)|
|6|[MIPI-DSI](/android/vim3/ConnectLcd.html)|30-pin, 0.5mm pitch FPC connector for [4-lane 1080P displays](https://www.khadas.com/product-page/ts050-touchscreen)|
|7|MIPI-CSI|30-pin, 0.5mm pitch, 4-lane, single camera, no image signal processor|
|8|[SPI Flash](/android/vim3/BootFromSpiFlash.html)|Flash memory module that interfaces over SPI|
|9|XPWR Pads|Connect an external power switch using these pads|
|A|M-Register|Allows the EMMC to [enter MaskROM mode](/android/vim3/BootIntoUpgradeMode.html)|
|B|S-Register|Allows the SPI Flash to [enter MaskROM mode](/android/vim3/BootIntoUpgradeMode.html)|
|C|Current Limit Switch|Prevents damage to VIM3L due to faulty loading conditions|
</div>
<div class="tab-pane fade" id="button-vim3l" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|Purpose|
|:---:|:---:|:---:|:---|
|x|||Force Reboot VIM3L|
||x||[Enter Upgrade Mode (TST)](/android/vim3/BootIntoUpgradeMode.html)|
|||x|Power ON/Wake Up VIM3L|
|x||x|[Enter Upgrade Mode (KEYS)](/android/vim3/BootIntoUpgradeMode.html)|
|x|x|x|[Erase EMMC](/android/vim3/EraseEMMC.html)|
</div>
<div class="tab-pane fade" id="led-vim3l" role="tabpanel" aria-labelledby="led-tab">

|Colour|Behaviour|Meaning|
|---:|:---:|:---|
|Blue|OFF|Power source disconnected|
||Solid ON|Power source connected, SBC turned off|
|White|OFF|SBC turned off|
||Solid ON|SBC turned on|
|Red|None|None|

The above behaviours are default out-of-the-box, and can be altered by a user. For example the white LED can be made to blink or breathe. For more information on how to program them via your favourite OS (each OS is different), please consult with experts at [forum.khadas.com](https://forum.khadas.com).
</div>
<div class="tab-pane fade" id="gpio-vim3l" role="tabpanel" aria-labelledby="gpio-tab">

SIGNAL| PIN|PIN|SIGNAL
---|:---|:---|:---
5V|1|21|GND
5V|2|22|I2C_M3_SCL
USB_DM|3|23|I2C_M3_SDA
USB_DP|4|24|GND
GND|5|25|I2C_AO_SCK
VCC_MCU|6|26|I2C_AO_SDA
MCU_NRST|7|27|3.3V
MCU_SWIM|8|28|GND
GND|9|29|I2SB_SCLK
ADC_CH0|10|30|I2S_MCLK0
1.8V|11|31|I2SB_SDO
ADC_CH3|12|32|I2SB_LRCK
SPDIF_OUT|13|33|I2SB_SDI
GND|14|34|GND
UARTC_RX|15|35|PWM_F
UARTC_TX|16|36|RTC_CLK
GND|17|37|GPIOH_4
Linux_RX|18|38|MCU_PA1
Linux_TX|19|39|GPIODZ_15
3.3V|20|40|GND

</div>
</div> 

## Amlogic A311D, NPU Usage Guides
These following documentation links will help you get started with your VIM3's 5.0 TOPS neural processing unit.

**Learn More:**
* [VIM3 NPU usage](https://forum.khadas.com/t/vim3-vim3l-android-npu-app-initial-version-release/12658)

## Flashing eMMC Operating System Using USB-C Cable
You'll need these items if you want to use your laptop or desktop PC to upgrade your VIM3 SBC's operating system stored in the eMMC storage. For example, Changing the bootup operating system from Android to Ubuntu, or installing a more exotic 3rd-party OS.

1. USB to USB-C Cable (Older Computers)
2. USB-C Male-to-Male Cable (Current Computers)
3. Computer running Linux or Windows.

**Learn More:**
* [Upgrade OS Using USB-C Cable](/android/vim3/UpgradeViaUSBCable.html)
* [Boot Into Upgrade Mode](/android/vim3/BootIntoUpgradeMode.html)

**Firmware Images:**
* [Android OS](/android/vim3/FirmwareAndroid.html)
* [Ubuntu OS](/android/vim3/FirmwareUbuntu.html)
* [LibreELEC](/android/vim3/FirmwareLibreelec.html)
* [Dual](/android/vim3/FirmwareDualos.html)
* [U-Boot](/android/vim3/FirmwareUboot.html)
* [Third Party OSes](/android/vim3/FirmwareThirdparty.html)

## VIM3 Power Supply
Although your VIM3 SBC is compatible with various types of power supplies, these are the recommended specs for the best performance-output and stability.

1. USB-C 24W Adapter
2. USB-C Male-to-Male Cable

**Learn More:**
* [Khadas Shop - USB-C 24W Adapter](https://www.khadas.com/product-page/usb-c-24w-adapter)
* [Khadas Shop - USB-C Cable (Male-to-Male)](https://www.khadas.com/product-page/usb-c-cable-male-to-male)
* [Extra Power Input For Khadas VIMs](/android/vim3/ExtraPowerInput.html)
* [Khadas VIM Specifications](https://www.khadas.com/vim)

## Displays & User Input
These items are useful when you need to connect your VIM3 SBC to an external display + keyBoard mouse + remote control, for use as a desktop computer or media center.

1. 4K HDMI 2.0 Cable
2. HDMI-Compatible 1080P/4K Monitor
3. Wireless USB KeyBoard + Mouse
4. CEC-Compatible Remote Control

```Note: Please do not attach multiple cables with large heads that interfere with each other, as that may bend or twist the connectors, and this will cause intermittent connectivity issues after some time.```

**Learn More:**
* [Khadas Shop - HDMI Cable](https://www.khadas.com/product-page/hdmi-cable)
* [Khadas Shop - Remote Control](https://www.khadas.com/product-page/ir-remote)

## Watching Movies, Expanding Internal eMMC Storage
These items are useful if you wish to use your VIM3 SBC as a media center, for storing/downloading large movie files. A microSDXC UHS-I card is expensive, but its also fast enough for 4K video playback. In addition, you can connect external USB-2.0/3.0 SSDs or HDDs for storage that can encompass your entire media library.

1. 64GB or larger, USB-2.0/3.0 HDD/SSD
2. 64GB or larger, *microSDXC UHS-I* SD-Card

**Learn More:**
* [Amazon - Samsung T5 Portable SSD](https://www.amazon.com/Samsung-T5-Portable-SSD-MU-PA1T0B/dp/B073H552FJ/ref=sr_1_1_sspa?ie=UTF8&qid=1543995277&sr=8-1-spons&keywords=external+usb+ssd&psc=1)
* [Amazon - microSDXC UHS-I SD-Card](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=microSDXC+UHS-I&rh=i%3Aaps%2Ck%3AmicroSDXC+UHS-I)

**Tip:** Nowadays most people stream their media , see [How To Install LibreELEC](/android/vim3/InstallLibreELEC.html).

## Software Development / Advanced Crash Recovery
Extreme cases of crash-recovery will require you to use either the Khadas TST (VIM3), or the MRegister to reset your VIM3 SBC. A USB Serial Debug Tool is also useful for developers debugging complex software issues.

1. Your fingers (for resetting a dead SBC via Khadas-TST, VIM3 only)
2. Conductive Metal Tweezers (for resetting a dead SBC via MRegister)
3. USB Serial Debug Tool(For diagnosing software/hardware issues)

**Learn More:**
* [Khadas TST Upgrade Mode](/android/vim3/BootIntoUpgradeMode.html#TST-Mode-Recommended)
* [Mregister Upgrade Mode](/android/vim3/BootIntoUpgradeMode.html)
* [Amazon - Metal Tweezers](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=metal+tweezers)
* [Amazon - USB Serial Debug Tool](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=usb+serial+debug+tool&rh=i%3Aaps%2Ck%3Ausb+serial+debug+tool)

## VIM3 Website
For more information, please see our website, read more decumentation, or visit our forum.
* [Khadas VIM3 Homepage](https://www.khadas.com/vim)
* [Khadas VIM3 Forum](https://forum.khadas.com/c/Khadas-VIM3)


