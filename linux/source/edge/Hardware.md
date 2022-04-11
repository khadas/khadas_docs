title: Edge Series Hwardware
---

## Edge Series Interfaces

### Edge

![Edge TOP](/linux/images/edge/edge_top_interfaces.png)
![Edge BOTTOM](/linux/images/edge/edge_bottom_interfaces.png)

### Edge-V

![Edge-V TOP](/linux/images/edge/edge_v_top_interfaces.png)
![Edge-V BOTTOM](/linux/images/edge/edge_v_bottom_interfaces.png)


### Captain

![Captain TOP](/linux/images/edge/captain_v_top_interfaces.png)
![Captain BOTTOM](/linux/images/edge/captain_bottom_interfaces.png)


## Edge Series Hardware Info

### Edge

![image](/linux/images/edge/docs_edge_labels.jpg)

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="front-tab" data-toggle="tab" href="#front-edge" role="tab" aria-controls="front" aria-selected="true">Front(Blue)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="back-tab" data-toggle="tab" href="#back-edge" role="tab" aria-controls="back" aria-selected="false">BACK(RED)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="button-tab" data-toggle="tab" href="#button-edge" role="tab" aria-controls="button" aria-selected="false">BUTTONS</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="led-tab" data-toggle="tab" href="#led-edge" role="tab" aria-controls="led" aria-selected="false">Indicator LEDs</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="front-edge" role="tabpanel" aria-labelledby="front-tab">

||Component|Purpose|
|---:|:---|:---|
|1|USB-A|USB 3.0 speeds|
|2|USB-C|USB 3.0, Display Port v1.2, with 5-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter) input (USB power delivery), can be used for [upgrading the OS](InstallOsIntoEmmc.html)|
|3|HDMI 2.0|Type-A Female, up to 4K@60Hz, HDCP 2.2|
|4|USB-C|USB-C port with 5-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter) input (USB power delivery)|
|5|USB-A|USB 2.0 speeds|
|6|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|7|Reset Button|Force reboot your Edge in the event of a system freeze|
|8|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](BootIntoUpgradeMode.html)|
|9|Power Button|This button turns on your Edge|
|A|314-Pin Gold Fingers|For docking with expansion boards such as the [Captain](https://www.khadas.com/product-page/captain-carrier-board)|
|B|I-Pex [Wi-Fi](Wifi.html) / Bluetooth Connector|Connect Wi-Fi / Bluetooth antennas|
|C|I-Pex Wi-Fi / [Bluetooth](Bluetooth.html) Connector|Connect Wi-Fi / Bluetooth antennas|

</div>
<div class="tab-pane fade" id="back-edge" role="tabpanel" aria-labelledby="back-tab">

||Component|Purpose|
|---:|:---|:---|
|1|Li-Po Battery Connector|For connecting Lithium Polymer batteries|
|2|Secondary Wi-Fi / Bluetooth Pad|Extra pad for mounting Wi-Fi / Bluetooth antennas|
|3|Secondary Wi-Fi / Bluetooth Pad|Extra pad for mounting Wi-Fi / Bluetooth antennas|
|4|M2x4 Mounting Point|For mounting a [heatsink](https://www.khadas.com/product-page/linux/edge-heatsink) or [carrier board](https://www.khadas.com/product-page/captain-carrier-board)|
|5|FPC Connector B|10-Pins, 0.5mm Pitch, USB, I2S(8ch), I2C, MCU IOs|
|6|FPC Connector A|10-Pins, 0.5mm Pitch, UART, I2C, SPI, SDMMC, ADC, PWM, IOs. To add GPIO, use [Edge IO](https://www.khadas.com/product-page/linux/edge-io)|
|7|M-Register|Allows the EMMC to [enter MaskROM mode](BootIntoUpgradeMode.html)|

</div>
<div class="tab-pane fade" id="button-edge" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|Purpose|
|:---:|:---:|:---:|:---|
|x|||Force Reboot Edge|
||x||[Enter Upgrade Mode (TST)](BootIntoUpgradeMode.html)|
|||x|Power On/Wake Up Edge|
|x||x|[Enter Upgrade Mode (KEYS)](BootIntoUpgradeMode.html)|

</div>
<div class="tab-pane fade" id="led-edge" role="tabpanel" aria-labelledby="led-tab">

|Colour|Behaviour|Meaning|
|---:|:---:|:---|
|Blue|OFF|Power source disconnected|
||Solid ON|Power source connected, SBC turned off|
|White|OFF|SBC turned off|
||Solid ON|SBC turned on|
|Red|None|None|

The above behaviours are default out-of-the-box, and can be altered by a user. For example the white LED can be made to blink or breathe. For more information on how to program them via your favourite OS (each OS is different), please consult with experts at [forum.khadas.com](https://forum.khadas.com).

</div>
</div>


### Edge-V

![image](/linux/images/edge/docs_edge_v_labels.jpg)

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="front-tab" data-toggle="tab" href="#front-edgev" role="tab" aria-controls="front" aria-selected="true">Front(Blue)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="back-tab" data-toggle="tab" href="#back-edgev" role="tab" aria-controls="back" aria-selected="false">BACK(RED)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="button-tab" data-toggle="tab" href="#button-edgev" role="tab" aria-controls="button" aria-selected="false">BUTTONS</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="led-tab" data-toggle="tab" href="#led-edgev" role="tab" aria-controls="led" aria-selected="false">Indicator LEDs</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="gpio-tab" data-toggle="tab" href="#gpio-edgev" role="tab" aria-controls="gpio" aria-selected="false">GPIO Pinout</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="front-edgev" role="tabpanel" aria-labelledby="front-tab">

||Component|Purpose|
|---:|:---|:---|
|1|USB-A|USB 3.0, blue colour|
|2|RJ-45|Gigabit Ethernet with [Wake-On-LAN (WOL)](Wol.html)|
|3|HDMI|Type-A Female, up to 4K@60Hz, HDCP 2.2|
|4|USB-C|USB 3.0, Display Port v1.2, can be used for [upgrading the OS](InstallOsIntoEmmc.html)|
|5|USB-A|USB 2.0, black colour|
|6|Fan Header|4-wire [fan](https://www.khadas.com/product-page/3705-cooling-fan) header utilising pulse width modulation|
|7|Reset Button|Force reboot your Edge-V in the event of a system freeze|
|8|Function Button|Press this 3 times in 2 seconds to [enter MaskROM mode](BootIntoUpgradeMode.html)|
|9|Power Button|This button turns on your Edge-V|
|A|RTC Battery Header|Header for attaching a battery for the real time clock|
|B|40-Pin GPIO|Learn how to access GPIO [here](Gpio.html), or use it to add a [Toneboard](https://www.khadas.com/product-page/tone-board)|
|C|Gesture Sensor|Control your Edge-V with a hand-wave|
|D|Infrared Module|2-channel infrared receiver for use with [Khadas IR remote](https://www.khadas.com/product-page/ir-remote)|
|E|LEDs|Status indicator LEDs|
|F|I-Pex [Wi-Fi](Wifi.html) / [Bluetooth](Bluetooth.html) Connector|Wi-Fi / BT Antenna connector|
|G|I-Pex [Wi-Fi](Wifi.html) / [Bluetooth](Bluetooth.html) Connector|Wi-Fi / BT Antenna connector|

</div>
<div class="tab-pane fade" id="back-edgev" role="tabpanel" aria-labelledby="back-tab">

||Component|Purpose|
|---:|:---|:---|
|1|Li-Po Battery Connector|Connect a [Lithium Polymer battery](https://www.khadas.com/product-page/lipo-battery) with the [Juice Board](https://www.khadas.com/product-page/juice-board)|
|2|USB-C|USB-C port that accepts 5-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter) power input (USB power delivery)|
|3|[Micro-SD Card Slot](UpgradeViaTFBurningCard.html)|Boot alternative OSes via a Micro-SD card, or just for extra storage|
|4|M.2 Socket (PCI-E 2.1)|Connect 2280 NVMe SSDS at 4-lane speed with [M2X Extension](https://www.khadas.com/product-page/m2x-extension-board)|
|5|E-DP Display|For connecting to external displays via E-DP|
|6|M2x4 Mounting Point|For mounting to [cases](https://www.khadas.com/product-page/diy-case) and [heatsinks](https://www.khadas.com/product-page/new-vim-heatsink)|
|7|Touch Panel|For accepting [touch-input](TS050.html)|
|8|MIPI-TX|MIPI-DSI header for connecting [LCD screens](TS050.html)|
|9|MIPI-RX|For connecting to [MIPI-CSI cameras](https://www.khadas.com/product-page/imx214-13mp-camera)|
|A|MIPI-RX/TX|Configurable, connect to [MIPI-CSI cameras](https://www.khadas.com/product-page/imx214-13mp-camera) or MIPI-DSI displays|
|B|M-Register|Another way for entering [upgrade mode](BootIntoUpgradeMode.html)|

</div>
<div class="tab-pane fade" id="button-edgev" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|Purpose|
|:---:|:---:|:---:|:---|
|x|||Force Reboot Edge-V|
||x||[Enter Upgrade Mode (TST)](BootIntoUpgradeMode.html)|
|||x|Power On/Wake Up Edge-V|
|x||x|[Enter Upgrade Mode (KEYS)](BootIntoUpgradeMode.html)|

</div>
<div class="tab-pane fade" id="led-edgev" role="tabpanel" aria-labelledby="led-tab">

|Colour|Behaviour|Meaning|
|---:|:---:|:---|
|Blue|OFF|Power source disconnected|
||Solid ON|Power source connected, SBC turned off|
|White|OFF|SBC turned off|
||Solid ON|SBC turned on|
|Red|None|None|

The above behaviours are default out-of-the-box, and can be altered by a user. For example the white LED can be made to blink or breathe. For more information on how to program them via your favourite OS (each OS is different), please consult with experts at [forum.khadas.com](https://forum.khadas.com).

</div>
<div class="tab-pane fade" id="gpio-edgev" role="tabpanel" aria-labelledby="gpio-tab">

SIGNAL| PIN|PIN|SIGNAL
---|:---|:---|:---
5V|1|21|GND
5V|2|22|SPI3_RXD/I2C0_SCK/GPIO1_C0
HOST1_DM|3|23|SPI3_TXD/I2C0_SDA/GPIO1_B7
HOST1_DP|4|24|GND
GND|5|25|I2C2_SCL/GPIO2_A1
MCU_TX|6|26|I2C2_SDA/GPIO2_A0
MCU_NRST|7|27|3.3V
MCU_SWIM|8|28|GND
GND|9|29|I2S0_SCLK/GPIO3_D0
ADC_IN2|10|30|I2S_CLK/GPIO4_A0
1.8V|11|31|I2S0_SDO0/GPIO3_D7
ADC_IN3|12|32|2S0_LRCK_TX/GPIO3_D2
SPDIF/GPIO3_C0|13|33|I2S0_SDI0/GPIO3_D3
GND|14|34|GND
SPI3_CS/GPIO1_C2|15|35|I2S0_SDI3SDO1/GPIO3_D6
SPI3_CLK/GPIO1_C1|16|36|2S0_SDI2SDO2/GPIO3_D5
GND|17|37|I2S0_SDI1SDO3/GPIO3_D4
Linux_RX|18|38|I2S0_LRCK_RX/GPIO3_D1
Linux_TX|19|39|MCU_PA1
3.3V|20|40|GND

</div>
</div>


### Captain

![image](/linux/images/edge/docs_captain_labels.jpg)

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="front-tab" data-toggle="tab" href="#front-captain" role="tab" aria-controls="front" aria-selected="true">Front(Blue)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="back-tab" data-toggle="tab" href="#back-captain" role="tab" aria-controls="back" aria-selected="false">BACK(RED)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="button-tab" data-toggle="tab" href="#button-captain" role="tab" aria-controls="button" aria-selected="false">BUTTONS</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="led-tab" data-toggle="tab" href="#led-captain" role="tab" aria-controls="led" aria-selected="false">Indicator LEDs</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="gpio-tab" data-toggle="tab" href="#gpio-captain" role="tab" aria-controls="gpio" aria-selected="false">GPIO Pinout</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="front-captain" role="tabpanel" aria-labelledby="front-tab">

||Component|Purpose|
|---:|:---|:---|
|1|RK3399 SoC Heat Spreader|Metallic layer for reducing heat concentration|
|2|RJ-45|Gigabit Ethernet port with [Wake-On-LAN (WOL)](/linux/edge/Wol.html)|
|3|40-Pin GPIO|Learn how to access the GPIO [here](/linux/edge/Gpio.html)|
|4|RTC Header|For connecting an external button battery for the real-time clock|
|5|Reset Button|Forcefully reboot Edge+Captain if your system freezes|
|6|12V DC Barrel Jack|Alternative [12V DC power input](https://www.khadas.com/product-page/captain-12v-adapter), see [power priority]()|
|7|Micro-SD Card Slot|Boot additional OSes via [Micro-SD](/linux/edge/UpgradeViaTFBurningCard.html), or just for extra storage|
|8|Buzzer|Produces simple sounds|
|9|Gesture Sensor|Control your Edge+Captain with a hand-wave|
|A|IR Receiver|2-channel infrared module, for use with the [Khadas IR remote](https://www.khadas.com/product-page/ir-remote)|
|B|Right Game Pad|For games, use with the [Kap Case](https://www.khadas.com/product-page/kap-case)|
|C|Left Game Pad|For games, use with the [Kap Case](https://www.khadas.com/product-page/kap-case)|
|D|USIC|Legacy USB-bus, unpopular|
|E|E-DP Display|For connecting to external displays via E-DP|
|F|Touch Panel|For accepting [touch-input](/linux/edge/TS050.html)|
|G|MIPI-TX|MIPI-DSI header for connecting [LCD screens](/linux/edge/TS050.html)|
|H|MIPI-RX/TX|Configurable MIPI-CSI/DSI header|
|I|MIPI-RX|For connecting to [MIPI-CSI cameras](https://www.khadas.com/product-page/imx214-13mp-camera)|
|J|3.5mm Audio Jack|Audio output, works with the [Kap Case](https://www.khadas.com/product-page/kap-case)|
|K|Function Button|For entering [upgrade mode](/linux/edge/BootIntoUpgradeMode.html)|
|L|Microphone|Audio input|
|M|MXM3 Connector|For docking with the [Edge](https://www.khadas.com/product-page/linux/edge)|
|N|[Wi-Fi](/linux/edge/Wifi.html) / [Bluetooth](/linux/edge/Bluetooth.html) Chip Antenna|Wi-Fi and BT antenna|
|O|[Wi-Fi](/linux/edge/Wifi.html) / [Bluetooth](/linux/edge/Bluetooth.html) Chip Antenna|Wi-Fi and BT antenna|
|P|M3 Clearance Hole|For mounting and cases, such as the [Kap Case](https://www.khadas.com/product-page/kap-case)|
|Q|M2 Threaded Stand-Off|For mounting the [Edge](https://www.khadas.com/product-page/linux/edge)|

</div>
<div class="tab-pane fade" id="back-captain" role="tabpanel" aria-labelledby="back-tab">

||Component|Purpose|
|---:|:---|:---|
|1|[M.2 Socket (PCI-E 2.1)]()|Connect directly to 2280 NVMe SSDs|
|2|External Speaker & DMIC Input FPC Connector|Connecting to an external speaker|
|3|[M.2 2280 Stand-Off (M2 Threaded)]()|Boss for securing an SSD to the Captain|
|4|Lithium Polymer Battery Connector|Add a [2-Cell Li-Po battery](https://www.khadas.com/product-page/lipo-battery) for portable usage, see [power priority]()|
|5|Right Function Button|User programmable button|
|6|Left Function Button|User programmable button|

</div>
<div class="tab-pane fade" id="button-captain" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Left Gamepad|Right Gamepad|Left Function|Right Function|Purpose|
|:---:|:---:|:---:|:---:|:---:|:---:|:---|
|x||||||Force reboot Edge+Captain if the system freezes|
||x|||||[Enter Upgrade Mode (TST)](/linux/edge/BootIntoUpgradeMode.html)|
|||x||||User programmable button|
||||x|||User programmable button|
|||||x||User programmable button|
||||||x|User programmable button|

</div>
<div class="tab-pane fade" id="led-captain" role="tabpanel" aria-labelledby="led-tab">

|Colour|Behaviour|Meaning|
|---:|:---:|:---|
|Blue|OFF|Power source disconnected|
||Solid ON|Power source connected, SBC turned off|
|White|OFF|SBC turned off|
||Solid ON|SBC turned on|
|Red|None|None|

The above behaviours are default out-of-the-box, and can be altered by a user. For example the white LED can be made to blink or breathe. For more information on how to program them via your favourite OS (each OS is different), please consult with experts at [forum.khadas.com](https://forum.khadas.com).

</div>
<div class="tab-pane fade" id="gpio-captain" role="tabpanel" aria-labelledby="gpio-tab">

SIGNAL| PIN|PIN|SIGNAL
---|:---|:---|:---
5V|1|21|GND
5V|2|22|SPI3_RXD/I2C0_SCK/GPIO1_C0
HOST1_DM|3|23|SPI3_TXD/I2C0_SDA/GPIO1_B7
HOST1_DP|4|24|GND
GND|5|25|I2C2_SCL/GPIO2_A1
MCU_TX|6|26|I2C2_SDA/GPIO2_A0
MCU_NRST|7|27|3.3V
MCU_SWIM|8|28|GND
GND|9|29|I2S0_SCLK/GPIO3_D0
ADC_IN2|10|30|I2S_CLK/GPIO4_A0
1.8V|11|31|I2S0_SDO0/GPIO3_D7
ADC_IN3|12|32|2S0_LRCK_TX/GPIO3_D2
SPDIF/GPIO3_C0|13|33|I2S0_SDI0/GPIO3_D3
GND|14|34|GND
SPI3_CS/GPIO1_C2|15|35|I2S0_SDI3SDO1/GPIO3_D6
SPI3_CLK/GPIO1_C1|16|36|2S0_SDI2SDO2/GPIO3_D5
GND|17|37|I2S0_SDI1SDO3/GPIO3_D4
Linux_RX|18|38|I2S0_LRCK_RX/GPIO3_D1
Linux_TX|19|39|MCU_PA1
3.3V|20|40|GND

</div>
</div>

### Captain + Edge

![image](/linux/images/edge/docs_captain_with_edge_labels.jpg)

* Front (Yellow)
||Component|Purpose|
|---:|:---|:---|
|1|[314-Pin "Edge Connector"](https://www.khadas.com/product-page/linux/edge)|Data and power interface between Edge & Captain|
|2|RockChip RK3399 SoC|x2 1.8GHz A72, x4 1.5GHz A53|
|3|M2x4 Screw|Use M2 screws to secure to the Captain|
|4|[USB-C Power Delivery (5-20V)]()|USB-C power input|
|5|[USB-C (3.0 + Display Port)](/linux/edge/InstallOsIntoEmmc.html)|USB-C power input, and display port output|
|6|USB-A|USB 3.0 speed|
|7|USB-A|USB 2.0 speed|
|9|HDMI|HDMI 2.0 and CEC|

