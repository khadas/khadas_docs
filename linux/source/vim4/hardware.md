title: VIM4 Hardware
---

## VIM4 Interfaces

<img src="{{ system }}/linux/images/vim4/vim4_interfaces_top.png" width="70%" height="70%" >
<img src="{{ system }}/linux/images/vim4/vim4_interfaces_bottom.png" width="70%" height="70%" >


## VIM4 Hardware Info

![image](/linux/images/vim4/vim4_circle_labels.png)

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="front-tab" data-toggle="tab" href="#front-vim4" role="tab" aria-controls="front" aria-selected="true">Front(Blue)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="back-tab" data-toggle="tab" href="#back-vim4" role="tab" aria-controls="back" aria-selected="false">Back(Red)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="button-tab" data-toggle="tab" href="#button-vim4" role="tab" aria-controls="button" aria-selected="false">Buttons</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="led-tab" data-toggle="tab" href="#led-vim4" role="tab" aria-controls="led" aria-selected="false">Indicator LEDs</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="gpio-tab" data-toggle="tab" href="#gpio-vim4" role="tab" aria-controls="gpio" aria-selected="false">GPIO Pinout</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="front-vim4" role="tabpanel" aria-labelledby="front-tab">

||Component|Purpose|
|---:|:---|:---|
|1|USB-A|USB 3.0 port that supports 1500mA output|
|2|RJ-45|Gigabit LAN port that supports [Wake-On-LAN](wol.html)|
|3|HDMI Output|HDMI output port supporting CEC|
|4|USB-C|USB-C port with USB power delivery (9-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter) input) and 2.0 speeds, can be used for [upgrading the OS](install_os_into_emmc.html)|
|5|USB-A|USB 2.0 port that supports 1300mA output|
|6|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|7|Reset Button|Force reboot your VIM4 in the event of a system freeze|
|8|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](boot_into_upgrade_mode.html)|
|9|Power Button|This button turns on your VIM4|
|A|RTC Header|A header for connecting a real-time clock (button) battery|
|B|M2 Hole|M2 clearance holes for a [case](https://www.khadas.com/product-page/diy-case), or adding a [heatsink](https://www.khadas.com/product-page/new-vim-heatsink)|
|C|40-Pin GPIO|[General input/output pins](gpio.html) for VIM4's SoC, or plugging-in a [Toneboard](https://www.khadas.com/product-page/tone-board)|
|D|DMIC|Digital Microphone|
|E|HDMI Input|Tpye-D HDMI input|
|F|LEDs|Indicator LEDs|
|G|[MCU](kbi_guidance.html)|STM32G0 micro-controller|
|H|MHF4 Antenna|[Wi-Fi](wifi.html) and Bluetooth antenna connector|
|I|MHF4 Antenna|Wi-Fi and [Bluetooth](bluetooth.html) antenna connector|
|J|Current Limit Switch|Prevents damage to VIM4L due to faulty loading conditions|
</div>
<div class="tab-pane fade" id="back-vim4" role="tabpanel" aria-labelledby="back-tab">

||Component|Purpose|
|---:|:---|:---|
|1|[VIN](https://www.khadas.com/product-page/vin-to-vin-cable)|9-20V power input|
|2|[Micro-SD Slot](boot_from_ext_media.html)|Molex Slot, spec version 2.x/3.x/4.x (SDSC/SDHC/SDXC)|
|3|M.2 Slot|PCIe 2.0 (x1 lane), supports [M.2 2280 NVMe SSDs]()|
|4|MIPI-CSI|20-pin, 0.5mm pitch, Provided data path for dual cameras|
|5|MIPI-CSI|30-pin, 0.5mm pitch, 4-lane, dual cameras, 16MP image signal processing|
|6|[MIPI-DSI&TP](ts050.html)/eDP|40-pin, 0.5mm pitch FPC connector for [4-lane 1080P displays && TP touch input](https://www.khadas.com/product-page/ts050-touchscreen)/eDP|
|7|V-by-One|30-pin, 0.5mm pitch|
|8|XPWR Pads|Connect an external power switch using these pads|
|9|[SPI Flash](boot_from_spi_flash.html)|Flash memory module that interfaces over SPI|
|A|Current Limit Switch|Prevents damage to VIM4L due to faulty loading conditions|
|B|G-Sensor|3-axis accelerometer|
</div>
<div class="tab-pane fade" id="button-vim4" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|Purpose|
|:---:|:---:|:---:|:---|
|x|||Force Reboot VIM4|
||x||[Enter Upgrade Mode (TST)](boot_into_upgrade_mode.html)|
|||x|Power ON/Wake Up VIM4|
|x||x|[Enter Upgrade Mode (KEYS)](boot_into_upgrade_mode.html)|
|x|x|x|[Erase EMMC](erase_emmc.html)|
</div>
<div class="tab-pane fade" id="led-vim4" role="tabpanel" aria-labelledby="led-tab">

|Colour|Behaviour|Meaning|
|---:|:---:|:---|
|Red|OFF|Power source disconnected|
||Solid ON|Power source connected, SBC turned off|
|White|OFF|SBC turned off|
||Solid ON|SBC turned on|

The above behaviours are default out-of-the-box, and can be altered by a user. For example the white LED can be made to blink or breathe. For more information on how to program them via your favourite OS (each OS is different), please consult with experts at [forum.khadas.com](https://forum.khadas.com).
</div>
<div class="tab-pane fade" id="gpio-vim4" role="tabpanel" aria-labelledby="gpio-tab">

<img src="{{ system }}/linux/images/vim4/vim4_gpio.png" width="40%" height="40%" >

</div>
</div>

