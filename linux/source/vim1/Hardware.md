title: VIM1 Hardware
---

## VIM1 Interfaces

![Top view](/linux/images/vim1/vim_interfaces_top.png)
![Bottom view](/linux/images/vim1/vim_interfaces_bot.png)

## VIM1 Hardware Info

![image](/linux/images/vim1/docs_vim1.jpg)

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="front-tab" data-toggle="tab" href="#front-vim1" role="tab" aria-controls="front" aria-selected="true">Front(Blue)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="back-tab" data-toggle="tab" href="#back-vim1" role="tab" aria-controls="back" aria-selected="false">BACK(RED)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="button-tab" data-toggle="tab" href="#button-vim1" role="tab" aria-controls="button" aria-selected="false">BUTTONS</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="led-tab" data-toggle="tab" href="#led-vim1" role="tab" aria-controls="led" aria-selected="false">Indicator LEDs</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="gpio-tab" data-toggle="tab" href="#gpio-vim1" role="tab" aria-controls="gpio" aria-selected="false">GPIO Pinout</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="front-vim1" role="tabpanel" aria-labelledby="front-tab">

||Component|Purpose|
|---:|:---|:---|
|1|USB-A|USB 2.0 speed, 500mA max output|
|2|RJ-45|10/100 Mbps Ethernet|
|3|HDMI|HDMI 2.0b with 3D, HDR, CEC and HDCP 2.2|
|4|USB-C|USB 2.0 OTG and [5V power input](https://www.khadas.com/product-page/power-adapter), can be used for [upgrading the OS](InstallOsIntoEmmc.html)|
|5|USB-A|USB 2.0 speed, 900mA max output|
|6|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|7|Reset Button|Force reboot your VIM1 in the event of a system freeze|
|8|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](BootIntoUpgradeMode.html)|
|9|Power Button|This button turns on your VIM1|
|A|M2x4 Mounting Point|For mounting to [cases](https://www.khadas.com/product-page/diy-case) and [heatsinks](https://www.khadas.com/product-page/new-vim-heatsink)|
|B|RTC Battery Header|Header for attaching a battery for the real time clock|
|C|40-Pin GPIO|Learn how to access the GPIO from [here](Gpio.html), or use it to add a [Toneboard](https://www.khadas.com/product-page/tone-board)|
|D|Infrared Module|2-channel infrared receiver for use with [Khadas IR remote](https://www.khadas.com/product-page/ir-remote)|
|E|LEDs|Status indicator LEDs|
|F|I-Pex [Wi-Fi](Wifi.html) / [Bluetooth](Bluetooth.html) Connector|Wi-Fi / BT Antenna connector|
</div>
<div class="tab-pane fade" id="back-vim1" role="tabpanel" aria-labelledby="back-tab">

||Component|Purpose|
|---:|:---|:---|
|1|[VIN](https://www.khadas.com/product-page/vin-to-vin-cable)|5V power input|
|2|[Micro-SD Card Slot](BootFromExtMedia.html)|Boot alternative OSes via a Micro-SD card, and for extra storage|
|3|M-Register|Allows the EMMC to [enter MaskROM mode](BootIntoUpgradeMode.html)|
|4|XPWR Pads|Connect an external power switch using these pads|
</div>
<div class="tab-pane fade" id="button-vim1" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|Purpose|
|:---:|:---:|:---:|:---|
|x|||Force Reboot VIM1
||x||[Enter Upgrade Mode (TST)](BootIntoUpgradeMode.html)|
|||x|Power On/Wake Up VIM1|
|x||x|[Enter Upgrade Mode (KEYS)](BootIntoUpgradeMode.html)|
|x|x|x|[Erase EMMC](EraseEmmc.html)|
</div>
<div class="tab-pane fade" id="led-vim1" role="tabpanel" aria-labelledby="led-tab">

|Colour|Behaviour|Meaning|
|---:|:---:|:---|
|Blue|OFF|Power source disconnected|
||Solid ON|Power source connected, SBC turned off|
|White|OFF|SBC turned off|
||Solid ON|SBC turned on|
|Red|None|None|

The above behaviours are default out-of-the-box, and can be altered by a user. For example the white LED can be made to blink or breathe. For more information on how to program them via your favourite OS (each OS is different), please consult with experts at [forum.khadas.com](https://forum.khadas.com).
</div>
<div class="tab-pane fade" id="gpio-vim1" role="tabpanel" aria-labelledby="gpio-tab">

![Image of Vim GPIO](/linux/images/vim1/vim_pinout.png)
</div>
</div>

