title: VIM2 Hardware
---

## VIM2 Interfaces

### VIM2 V14
![TOP image](/linux/images/vim2/VIM2_v1.4_top_port_labels.png)
![Bottom image](/linux/images/vim2/VIM2_v1.4_bottom_port_labels.png)

### VIM2 V12
![image](/linux/images/vim2/vim2_interfaces.png)

## VIM2 Hardware Info

![image](/linux/images/vim2/docs_vim2.jpg)

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
|2|RJ-45|Gigabit Ethernet with [Wake-On-LAN (WOL)](Wol.html)|
|3|HDMI|HDMI 2.0a with CEC, 4K@60Hz|
|4|USB-C|USB 2.0 OTG and [5V power input](https://www.khadas.com/product-page/power-adapter), can be used for [upgrading the OS](InstallOsIntoEmmc.html)|
|5|USB-A|USB 2.0 speed, 900mA max output|
|6|Current Limit Switch|Prevents damage to VIM2 during uneven loading conditions|
|7|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|8|Reset Button|Force reboot your VIM2 in the event of a system freeze|
|9|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](BootIntoUpgradeMode.html)|
|A|Power Button|This button turns on your VIM2|
|B|M2x4 Mounting Point|For mounting to [cases](https://www.khadas.com/product-page/diy-case) and [heatsinks](https://www.khadas.com/product-page/new-vim-heatsink)|
|C|RTC Battery Header|Header for attaching a battery for the real time clock|
|D|40-Pin GPIO|Learn how to access the GPIO from [here](Gpio.html), or use it to add a [Toneboard](https://www.khadas.com/product-page/tone-board)|
|E|Infrared Module|2-channel infrared receiver for use with [Khadas IR remote](https://www.khadas.com/product-page/ir-remote)|
|F|LEDs|Status indicator LEDs|
|G|FPC Connector|10-pins, 0.5mm pitch, with I2C, IOs|
|H|I-Pex [Wi-Fi](Wifi.html) / [Bluetooth](Bluetooth.html) Connector|Wi-Fi / BT Antenna connector|
|I|I-Pex [Wi-Fi](Wifi.html) / [Bluetooth](Bluetooth.html) Connector|Wi-Fi / BT Antenna connector|
</div>
<div class="tab-pane fade" id="back-vim2" role="tabpanel" aria-labelledby="back-tab">

||Component|Purpose|
|---:|:---|:---|
|1|Pogo Pads|External 5V power input, can be provided by [vTV Board](https://www.khadas.com/product-page/vtv-board) (DVB Tuner)|
|2|[Micro-SD Card Slot](BootFromExtMedia.html)|Boot alternative OSes via a micro-SD card, or just for extra storage|
|3|500mA Fuse|Fuse for the 500mA USB port|
|4|WOL Switch|Power switch activated via Wake-On-LAN|
|5|[MCU](KbiGuidance.html)|STM8S003 micro-controller with programmable EEPROM|
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
||x||[Enter Upgrade Mode (TST)](BootIntoUpgradeMode.html)|
|||x|Power On/Wake Up VIM2|
|x||x|[Enter Upgrade Mode (KEYS)](BootIntoUpgradeMode.html)|
|x|x|x|[Erase EMMC](EraseEmmc.html)|
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

