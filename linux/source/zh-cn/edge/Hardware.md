title: Edge 硬件描述
---

## Edge系列接口描述

### Edge

![Edge TOP](/linux/images/edge/edge_top_interfaces.png)
![Edge BOTTOM](/linux/images/edge/edge_bottom_interfaces.png)

### Edge-V

![Edge-V TOP](/linux/images/edge/edge_v_top_interfaces.png)
![Edge-V BOTTOM](/linux/images/edge/edge_v_bottom_interfaces.png)


### Captain

![Captain TOP](/linux/images/edge/captain_v_top_interfaces.png)
![Captain BOTTOM](/linux/images/edge/captain_bottom_interfaces.png)


## Edge系列硬件信息

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

||设备名称|描述说明|
|---:|:---|:---|
|1|USB-A|USB 3.0 speeds|
|2|USB-C|USB 3.0,5-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter)的DP输入, 同时可用于[升级系统](InstallOsIntoEmmc.html)|
|3|HDMI 2.0|支持4K@60Hz, HDCP 2.2的HDMI接口|
|4|USB-C|5-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter)的type-C接口|
|5|USB-A|USB 2.0 speeds|
|6|风扇座子|4针的[风扇](https://www.khadas.com/product-page/3705-cooling-fan)座子接口|
|7|Reset按键|用于强制重启板子,按下会直接复位|
|8|Function按键|快速短按3下[进入TST模式](/linux/zh-cn/edge/BootIntoUpgradeMode.html)|
|9|Power按键|用于关机或者配合其他按键使用|
|A|314针的金手指|用于与[Captain](https://www.khadas.com/product-page/captain-carrier-board)等扩展板对接|
|B|I-Pex天线|用于连接[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
|C|I-Pex天线|用于连接[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|

</div>
<div class="tab-pane fade" id="back-edge" role="tabpanel" aria-labelledby="back-tab">

||设备名称|描述说明|
|---:|:---|:---|
|1|Li-Po电池接口|用于连接锂聚合物电池|
|2|备用Wi-Fi/蓝牙焊盘|用于焊接连接wifi/蓝牙天线|
|3|备用Wi-Fi/蓝牙焊盘|用于焊接连接wifi/蓝牙天线|
|4|4个M2插孔|用于[散热器](https://www.khadas.com/product-page/edge-heatsink)和[DIY外壳](https://www.khadas.com/product-page/captain-carrier-board)|
|5|FPC座子B|10-Pins, 0.5mm Pitch, USB, I2S(8ch), I2C, MCU IOs|
|6|FPC座子A|10-Pins, 0.5mm Pitch, UART, I2C, SPI, SDMMC, ADC, PWM, IOs. To add GPIO, use [Edge IO](https://www.khadas.com/product-page/edge-io)|
|7|M寄存器|强制板子进入[MaskROM模式](BootIntoUpgradeMode.html)|

</div>
<div class="tab-pane fade" id="button-edge" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|描述说明|
|:---:|:---:|:---:|:---|
|x|||强制重启板子|
||x||[进入TST模式](BootIntoUpgradeMode.html)|
|||x|Power On/Wake Up Edge|
|x||x|[进入升级模式](BootIntoUpgradeMode.html)|

</div>
<div class="tab-pane fade" id="led-edge" role="tabpanel" aria-labelledby="led-tab">

|颜色|状态|含义|
|---:|:---:|:---|
|蓝色|关|电源关闭|
||常亮|已连接电源,但是处于关机状态|
|白色|关|板子以关机|
||常亮|板子处于开机状态|
|红色|None|None|

上述行为是默认的，用户可以更改。例如，可以使白灯闪烁或呼吸。有关如何通过所喜爱的操作系统（每个操作系统都不同）编程的更多信息可通过[forum.khadas.com](https://forum.khadas.com)咨询。

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

||设备名称|描述说明|
|---:|:---|:---|
|1|USB-A|USB 3.0, 蓝色接口|
|2|RJ-45|有[WOL功能](Wol.html)的Gigabit网口|
|3|HDMI 2.0|支持4K@60Hz, HDCP 2.2的HDMI接口|
|4||USB-C|USB 3.0,5-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter)的DP输入, 同时可用于[升级系统](InstallOsIntoEmmc.html)|
|5|USB-A|USB 2.0, 黑色接口|
|6|风扇座子|4针的[风扇](https://www.khadas.com/product-page/3705-cooling-fan)座子接口|
|7|Reset按键|用于强制重启板子,按下会直接复位|
|8|Function按键|快速短按3下[进入TST模式](BootIntoUpgradeMode.html)|
|9|Power按键|用于关机或者配合其他按键使用|
|A|RTC电池座子|硬件时钟芯片供电电池座子|
|B|40脚GPIO座子|学习[连接GPIO](Gpio.html), 或者如何连接[Toneboard](https://www.khadas.com/product-page/tone-board)|
|C|Gesture Sensor|三轴加速传感器|
|D|红外模块|可用于与[khadas遥控器](https://www.khadas.com/product-page/ir-remote)通信|
|E|LED灯|可用于指示LED灯的状态|
|F|I-Pex天线|用于连接[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
|G|I-Pex天线|用于连接[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|

</div>
<div class="tab-pane fade" id="back-edgev" role="tabpanel" aria-labelledby="back-tab">

||设备名称|描述说明|
|---:|:---|:---|
|1|Li-Po电池接口|通过[juice板子](https://www.khadas.com/product-page/lipo-battery)用于连接[锂聚合物电池](https://www.khadas.com/product-page/lipo-battery)|
|2|USB-C|5-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter)的type-C接口|
|3|[SD Card 插座](UpgradeViaTFBurningCard.html)|通过SD Card启动或者只作为外部存储器|
|4|M.2接口|PCIE2.0接口(x1 lane),支持[M.2 2280 NVME固态硬盘]()以及[M2x板子](https://www.khadas.com/product-page/m2x-extension-board)|
|5|E-DP座子|用于外接eDP显示器|
|6|4个M2插孔|用于[散热器](https://www.khadas.com/product-page/edge-heatsink)和[DIY外壳](https://www.khadas.com/product-page/captain-carrier-board)|
|7|TP座子|用于连接[TP输入](TS050.html)|
|8|MIPI-TX|MIPI-DSI接口用于连接[LCD显示屏](TS050.html)|
|9|MIPI-RX|用于连接[MIPI-CSI摄像头](https://www.khadas.com/product-page/imx214-13mp-camera)|
|A|MIPI-RX/TX|连接[MIPI-CSI摄像头](https://www.khadas.com/product-page/imx214-13mp-camera)或者MIPI-DSI显示屏|
|B||M寄存器|强制板子进入[MaskROM模式](/edge/BootIntoUpgradeMode.html)|

</div>
<div class="tab-pane fade" id="button-edgev" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|描述说明|
|:---:|:---:|:---:|:---|
|x|||强制重启板子| 
||x||[进入TST模式](BootIntoUpgradeMode.html)|
|||x|Power On/Wake Up Edge|
|x||x|[进入升级模式](BootIntoUpgradeMode.html)|

</div>
<div class="tab-pane fade" id="led-edgev" role="tabpanel" aria-labelledby="led-tab">

|颜色|状态|含义| 
|---:|:---:|:---|
|蓝色|关|电源关闭| 
||常亮|已连接电源,但是处于关机状态| 
|白色|关|板子以关机| 
||常亮|板子处于开机状态| 
|红色|None|None|

上述行为是默认的，用户可以更改。例如，可以使白灯闪烁或呼吸。有关如何通过所喜爱的操作系统（每个操作系统都不同）编程的更多信息可通过[forum.khadas.com](https://forum.khadas.com)咨询。

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

||设备名称|描述说明|
|---:|:---|:---|
|1|RK3399 SoC散热器|用于减少热量集中的金属层|
|2|RJ-45|有[WOL功能](Wol.html)的Gigabit网口|
|3|40脚GPIO座子|学习[连接GPIO](Gpio.html)
|4|RTC电池座子|硬件时钟芯片供电电池座子|
|5|Reset按键|用于强制重启板子,按下会直接复位|
|6|12V DC 供电座子||替代的[12V直流电源输入](https://www.khadas.com/product-page/captain-12v-adapter.html),请参考[电源优先级]()|
|7|[SD Card 插座](UpgradeViaTFBurningCard.html)|通过SD Card启动或者只作为外部存储器|
|8|蜂鸣器|发出简单的声音|
|9|Gesture Sensor|三轴加速传感器|
|A|红外模块|可用于与[khadas遥控器](https://www.khadas.com/product-page/ir-remote)通信|
|B|右边游戏按键|通过[Kap Case](https://www.khadas.com/product-page/kap-case)可以玩简单的游戏|
|C|左边边游戏按键|通过[Kap Case](https://www.khadas.com/product-page/kap-case)可以玩简单的游戏|
|D|USIC|旧版USB总线|
|E|E-DP座子|用于外接eDP显示器|
|F|TP座子|用于连接[TP输入](TS050.html)|
|G|MIPI-TX|MIPI-DSI接口用于连接[LCD显示屏](TS050.html)|
|H|MIPI-RX/TX|连接[MIPI-CSI摄像头](https://www.khadas.com/product-page/imx214-13mp-camera)或者MIPI-DSI显示屏|
|I|MIPI-RX|用于连接[MIPI-CSI摄像头](https://www.khadas.com/product-page/imx214-13mp-camera)|
|J|3.5mm 耳机孔|与[Kap Case](https://www.khadas.com/product-page/kap-case)搭配使用|
|K|Function按键|快速短按3下[进入TST模式](BootIntoUpgradeMode.html)|
|L|麦克风|音频输入|
|M|MXM3连接器|用于连接[Edge](https://www.khadas.com/product-page/edge)|
|N|天线|用于连接[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
|O|天线|用于连接[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
|P|M3穿孔|用于与[Kap Case](https://www.khadas.com/product-page/kap-case)连接固定|
|Q|M2螺纹支架|用于固定[Edge](https://www.khadas.com/product-page/edge)|

</div>
<div class="tab-pane fade" id="back-captain" role="tabpanel" aria-labelledby="back-tab">

||设备名称|描述说明|
|---:|:---|:---|
|1|[M.2 Socket (PCI-E 2.1)]()|可用于连接NVMe SSD|
|2|外部扬声器和DMIC输入FPC连接器|用于连接一个外界的音箱|
|3|[M.2 2280 Stand-Off (M2 Threaded)]()|用于固定SSD|
|4|锂电池座子|可连接便携式[2-Cell Li-Po 电池](https://www.khadas.com/product-page/lipo-battery), 具体可查看[电源优先管理]()|
|5|右按键|自定义可编程按键|
|6|左按键|自定义可编程按键|

</div>
<div class="tab-pane fade" id="button-captain" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|描述说明|
|:---:|:---:|:---:|:---|
|x|||强制重启板子|
||x||[进入TST模式](BootIntoUpgradeMode.html)|
|||x|Power On/Wake Up Edge|
|x||x|[进入升级模式](BootIntoUpgradeMode.html)|

</div>
<div class="tab-pane fade" id="led-captain" role="tabpanel" aria-labelledby="led-tab">

|颜色|状态|含义|
|---:|:---:|:---|
|b蓝色|关|电源关闭|
||常亮|已连接电源,但是处于关机状态|
|白色|关|板子以关机|
||常亮|板子处于开机状态|
|红色|None|None|

上述行为是默认的，用户可以更改。例如，可以使白灯闪烁或呼吸。有关如何通过所喜爱的操作系统（每个操作系统都不同）编程的更多信息可通过[forum.khadas.com](https://forum.khadas.com)咨询。

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

* 正面(黄色)
||设备名称|描述说明|
|---:|:---|:---|
|1|[314针金手指](https://www.khadas.com/product-page/edge)|Edge＆Captain之间的数据交换和电源接口|
|2|RockChip RK3399 SoC|x2 1.8GHz A72, x4 1.5GHz A53|
|3|M2x4螺丝孔|用于固定edge和captain|
|4|[USB-C电源接口(5-20V)]()|电源接口|
|5|[USB-C (3.0 + DP)](InstallOsIntoEmmc.html)|电源和DP接口|
|6|USB-A|USB 3.0接口|
|7|USB-A|USB 2.0接口|
|9|HDMI|HDMI 2.0 and CEC|








