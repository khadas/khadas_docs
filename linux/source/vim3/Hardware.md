title: VIM3/3L Hardware
---

## VIM3 Interfaces

![VIM3 Interface Top](/linux/images/vim3/vim3_interfaces_top.png)
![VIM3 Interface Bottom](/linux/images/vim3/vim3_interfaces_bottom.png)

## VIM3 Hardware Info

![image](/linux/images/vim3/docs_vim3.jpg)

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
|1|USB-A|[USB 3.0 port that swaps to 2.0 when PCI-E is active](PcieUsbPort.html), 900mA output|
|2|RJ-45|Gigabit LAN port that supports [Wake-On-LAN](Wol.html)|
|3|HDMI|HDMI port supporting CEC|
|4|USB-C|USB-C port with USB power delivery ([5](https://www.khadas.com/product-page/power-adapter)-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter) input) and 2.0 speeds, can be used for [upgrading the OS](InstallOsIntoEmmc.html)|
|5|USB-A|USB 2.0 port that supports 500mA output|
|6|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|7|Reset Button|Force reboot your VIM3 in the event of a system freeze|
|8|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](BootIntoUpgradeMode.html)|
|9|Power Button|This button turns on your VIM3|
|A|M2 Hole|M2 clearance holes for a [case](https://www.khadas.com/product-page/diy-case), or adding a [heatsink](https://www.khadas.com/product-page/new-vim-heatsink)|
|B|G-Sensor|3-axis accelerometer|
|C|RTC Header|A header for connecting a real-time clock (button) battery|
|D|40-Pin GPIO|[General input/output pins](Gpio.html) for VIM3's SoC, or plugging-in a [Toneboard](https://www.khadas.com/product-page/tone-board)|
|E|GPIO Expander|Increases VIM3's available I/O beyond what A311D can provide|
|F|[MCU](KbiGuidance.html)|STM8S003 micro-controller with programmable EEPROM|
|G|WOL Switch|Power switch activated via Wake-On-LAN|
|H|Infrared Module|2-channel infrared receiver for the [Khadas IR remote](https://www.khadas.com/product-page/ir-remote)|
|I|LEDs|Indicator LEDs|
|J|IPEX Antenna|[Wi-Fi](Wifi.html) and Bluetooth antenna connector|
|K|IPEX Antenna|Wi-Fi and [Bluetooth](Bluetooth.html) antenna connector|
</div>
<div class="tab-pane fade" id="back-vim3" role="tabpanel" aria-labelledby="back-tab">

||Component|Purpose|
|---:|:---|:---|
|1|[VIN](https://www.khadas.com/product-page/vin-to-vin-cable)|5-12V power input, supports Power-Over-Ethernet via [M2X Extension](https://www.khadas.com/product-page/m2x-extension-board)|
|2|[Micro-SD Slot](BootFromExtMedia.html)|Molex Slot, spec version 2.x/3.x/4.x (SDSC/SDHC/SDXC)|
|3|Current Limit Switch|Prevents damage to VIM3 due to faulty loading conditions|
|4|M.2 Slot|PCIe 2.0 (x1 lane), supports [M.2 2280 NVMe SSDs]()|
|5|TP|10-pin 0.5mm pitch FPC connector for [touch input](TS050.html)|
|6|[MIPI-DSI](TS050.html)|30-pin, 0.5mm pitch FPC connector for [4-lane 1080P displays](https://www.khadas.com/product-page/ts050-touchscreen)|
|7|MIPI-CSI|30-pin, 0.5mm pitch, 4-lane, dual cameras, 8MP image signal processing|
|8|[SPI Flash](BootFromSpiFlash.html)|Flash memory module that interfaces over SPI|
|9|XPWR Pads|Connect an external power switch using these pads|
|A|M-Register|Allows the EMMC to [enter MaskROM mode](BootIntoUpgradeMode.html)|
|B|S-Register|Allows the SPI Flash to [enter MaskROM mode](BootIntoUpgradeMode.html)|
</div>
<div class="tab-pane fade" id="button-vim3" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|Purpose|
|:---:|:---:|:---:|:---|
|x|||Force Reboot VIM3|
||x||[Enter Upgrade Mode (TST)](BootIntoUpgradeMode.html)|
|||x|Power ON/Wake Up VIM3|
|x||x|[Enter Upgrade Mode (KEYS)](BootIntoUpgradeMode.html)|
|x|x|x|[Erase EMMC](EraseEmmc.html)|
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

## VIM3L Interfaces

![VIM3L Interface Top](/linux/images/vim3/vim3l_interfaces_top.png)
![VIM3L Interface Bottom](/linux/images/vim3/vim3l_interfaces_bottom.png)

## VIM3L Hardware Info

![image](/linux/images/vim3/docs_vim3l.jpg)

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
|1|USB-A|[USB 3.0 port that swaps to 2.0 when PCI-E is active](PcieUsbPort.html), 900mA output|
|2|RJ-45|Gigabit LAN port that supports [Wake-On-LAN](Wol.html)|
|3|HDMI|HDMI port supporting CEC|
|4|USB-C|USB-C port with USB power delivery ([5](https://www.khadas.com/product-page/power-adapter)-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter) input) and 2.0 speeds, can be used for [upgrading the OS](InstallOsIntoEmmc.html)|
|5|USB-A|USB 2.0 port that supports 500mA output|
|6|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|7|Reset Button|Force reboot your VIM3L in the event of a system freeze|
|8|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](BootIntoUpgradeMode.html)|
|9|Power Button|This button turns on your VIM3L|
|A|M2 Hole|M2 clearance holes for a [case](https://www.khadas.com/product-page/diy-case), or adding a [heatsink](https://www.khadas.com/product-page/new-vim-heatsink)|
|B|G-Sensor|3-axis accelerometer|
|C|RTC Header|A header for connecting a real-time clock (button) battery|
|D|40-Pin GPIO|[General input/output pins](Gpio.html) for VIM3L's SoC, or plugging-in a [Toneboard](https://www.khadas.com/product-page/tone-board)|
|E|GPIO Expander|Increases VIM3L's available I/O beyond what S905D3 can provide|
|F|[MCU](KbiGuidance.html)|STM8S003 micro-controller with programmable EEPROM|
|G|WOL Switch|Power switch activated via Wake-On-LAN|
|H|Infrared Module|2-channel infrared receiver for the [Khadas IR remote](https://www.khadas.com/product-page/ir-remote)|
|I|LEDs|Indicator LEDs|
|J|IPEX Antenna|[Wi-Fi](Wifi.html) and Bluetooth antenna connector|
|K|IPEX Antenna|Wi-Fi and [Bluetooth](Bluetooth.html) antenna connector|
</div>
<div class="tab-pane fade" id="back-vim3l" role="tabpanel" aria-labelledby="back-tab">

||Component|Purpose|
|---:|:---|:---|
|1|[VIN](https://www.khadas.com/product-page/vin-to-vin-cable)|5-12V power input, supports Power-Over-Ethernet via [M2X Extension](https://www.khadas.com/product-page/m2x-extension-board)|
|2|[Micro-SD Slot](BootFromExtMedia.html)|Molex Slot, spec version 2.x/3.x/4.x (SDSC/SDHC/SDXC)|
|3|Current Limit Switch|Prevents damage to VIM3L due to faulty loading conditions|
|4|M.2 Slot|PCIe 2.0 (x1 lane), supports [M.2 2280 NVMe SSDs]()|
|5|TP|10-pin 0.5mm pitch FPC connector for [touch input](TS050.html)|
|6|[MIPI-DSI](TS050.html)|30-pin, 0.5mm pitch FPC connector for [4-lane 1080P displays](https://www.khadas.com/product-page/ts050-touchscreen)|
|7|MIPI-CSI|30-pin, 0.5mm pitch, 4-lane, single camera, no image signal processor|
|8|[SPI Flash](BootFromSpiFlash.html)|Flash memory module that interfaces over SPI|
|9|XPWR Pads|Connect an external power switch using these pads|
|A|M-Register|Allows the EMMC to [enter MaskROM mode](BootIntoUpgradeMode.html)|
|B|S-Register|Allows the SPI Flash to [enter MaskROM mode](BootIntoUpgradeMode.html)|
|C|Current Limit Switch|Prevents damage to VIM3L due to faulty loading conditions|
</div>
<div class="tab-pane fade" id="button-vim3l" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|Purpose|
|:---:|:---:|:---:|:---|
|x|||Force Reboot VIM3L|
||x||[Enter Upgrade Mode (TST)](BootIntoUpgradeMode.html)|
|||x|Power ON/Wake Up VIM3L|
|x||x|[Enter Upgrade Mode (KEYS)](BootIntoUpgradeMode.html)|
|x|x|x|[Erase EMMC](EraseEmmc.html)|
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

