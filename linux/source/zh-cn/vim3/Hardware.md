title: VIM3/3L 硬件描述
---

## VIM3 接口描述

![VIM3 Interface Top](/linux/images/vim3/vim3_interfaces_top.png)
![VIM3 Interface Bottom](/linux/images/vim3/vim3_interfaces_bottom.png)


## VIM3 硬件信息

![image](/linux/images/vim3/docs_vim3.jpg)

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="front-tab" data-toggle="tab" href="#front-vim3" role="tab" aria-controls="front" aria-selected="true">正面(蓝色标识)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="back-tab" data-toggle="tab" href="#back-vim3" role="tab" aria-controls="back" aria-selected="false">背面(红色)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="button-tab" data-toggle="tab" href="#button-vim3" role="tab" aria-controls="button" aria-selected="false">按键</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="led-tab" data-toggle="tab" href="#led-vim3" role="tab" aria-controls="led" aria-selected="false">LED灯指示</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="gpio-tab" data-toggle="tab" href="#gpio-vim3" role="tab" aria-controls="gpio" aria-selected="false">GPIO管脚映射</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="front-vim3" role="tabpanel" aria-labelledby="front-tab">

||设备名称|描述说明|
|---:|:---|:---|
|1|USB-A|USB 3.0接口,最大输出电流900mA,PCIE被激活时,这个口降为2.0|
|2|RJ-45|有[WOL功能](Wol.html)的Gigabit网口|
|3|HDMI|支持3D,HDR,CEC以及HDCP2.2的HDMI接口|
|4|USB-C|USB2.0 OTG接口,接受[5V](https://www.khadas.com/product-page/power-adapter)到[20V](https://www.khadas.com/product-page/usb-c-24w-adapter)的输入,[可用于升级固件](InstallOsIntoEmmc.html)|
|5|USB-A|USB 2.0接口,最大输出电流500mA|
|6|风扇座子|PWM控制的4线制[风扇](https://www.khadas.com/product-page/3705-cooling-fan)|
|7|reset按键|用于强制重启板子,按下会直接复位|
|8|function按键|快速短按3下进入[MaskROM模式](BootIntoUpgradeMode.html)或从外部介质启动|
|9|power按键|用于关机或者配合其他按键使用|
|A|4个M2插孔|用于使用[散热器](https://www.khadas.com/product-page/new-vim-heatsink)和[DIY外壳](https://www.khadas.com/product-page/diy-case)时的固定|
|B|G-Sensor|三轴加速传感器|
|C|RTC电池接口|硬件时钟电池的接口|
|D|40脚的GPIO|可用于控制[GPIO](Gpio.html)或者与[toneboard](https://www.khadas.com/product-page/tone-board)连接|
|E|GPIO扩展芯片|为VIM3拓展可用的GPIO|
|F|[MCU](KbiGuidance.html)|可编程的EEPROM阵列的STM8S003微控制器|
|G|WOL选择开关|WOL功能的电源开关|
|H|红外模块|可用于与[khadas遥控器](https://www.khadas.com/product-page/ir-remote)通信|
|I|LED灯|用于指示板子的状态|
|J|IPEX天线|用于插[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
|k|IPEX天线|用于插[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
</div>
<div class="tab-pane fade" id="back-vim3" role="tabpanel" aria-labelledby="back-tab">

||设备名称|描述说明|
|---:|:---|:---|
|1|[VIN](https://www.khadas.com/product-page/vin-to-vin-cable)|5V电压输入|
|2|[SD卡插座](BootFromExtMedia.html)|用于从外部介质启动SD卡系统或者作为外部存储器|
|3|限流开关|防止在负载不均衡的情况下损坏VIM3|
|4|M.2接口|PCIE2.0接口(x1 lane),支持[M.2 2280 NVME固态硬盘]()|
|5|TP|10脚0.5mm间距FTP接口|
|6|[MIPI-DSI接口](TS050.html)|30脚0.5mm间距的FPC接口,可用于连接[TS050触控屏](https://www.khadas.com/product-page/ts050-touchscreen)|
|7|MIPI-CSI接口|30脚，0.5mm间距，4通道，双摄像头，8MP图像信号处理|
|8|[SPI Flash](BootFromSpiFlash.html)|通过SPI控制的Flash模块|
|9|XPWR焊盘|用于连接使用外部电源|
|A|M寄存器|可在任何情况下,强制EMMC进入[MaskROM模式](BootIntoUpgradeMode.html)|
|B|S寄存器|可在任何情况下,强制Flash进入[MaskROM模式](BootIntoUpgradeMode.html)|
|C|限流开关|防止在负载不均衡的情况下损坏VIM3|
</div>
<div class="tab-pane fade" id="button-vim3" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|描述说明|
|:---:|:---:|:---:|:---|
|x|||强制重启VIM3|
||x||[进入升级模式(TST模式)](BootIntoUpgradeMode.html)|
|||x|开机或者唤醒VIM3|
|x||x|[进入升级模式(按键模式)](BootIntoUpgradeMode.html)|
|x|x|x|[清除EMMC](EraseEmmc.html)|
</div>
<div class="tab-pane fade" id="led-vim3" role="tabpanel" aria-labelledby="led-tab">

|颜色|状态|含义|
|---:|:---:|:---|
|蓝色|关闭|电源关闭|
||常亮|已连接电源,板子处于关机状态|
|白色|关闭|板子已关机|
||常亮|板子处于开机状态|
|红灯|None|None|

上述行为是默认的，用户可以更改。例如，可以使白灯闪烁或呼吸。有关如何通过所喜爱的操作系统（每个操作系>统都不同）编程的更多信息可通过[forum.khadas.com](https://forum.khadas.com)咨询。
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

## VIM3L 接口描述

![VIM3L Interface Top](/linux/images/vim3/vim3l_interfaces_top.png)
![VIM3L Interface Bottom](/linux/images/vim3/vim3l_interfaces_bottom.png)

## VIM3L 硬件信息

![image](/linux/images/vim3/docs_vim3l.jpg)


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="front-tab" data-toggle="tab" href="#front-vim3l" role="tab" aria-controls="front" aria-selected="true">正面(蓝色标识)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="back-tab" data-toggle="tab" href="#back-vim3l" role="tab" aria-controls="back" aria-selected="false">背面(红色)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="button-tab" data-toggle="tab" href="#button-vim3l" role="tab" aria-controls="button" aria-selected="false">按键</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="led-tab" data-toggle="tab" href="#led-vim3l" role="tab" aria-controls="led" aria-selected="false">LED灯指示</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="gpio-tab" data-toggle="tab" href="#gpio-vim3l" role="tab" aria-controls="gpio" aria-selected="false">GPIO管脚映射</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="front-vim3l" role="tabpanel" aria-labelledby="front-tab">

||设备名称|描述说明|
|---:|:---|:---|
|1|USB-A|USB 3.0接口,最大输出电流900mA,PCIE被激活时,这个口降为2.0|
|2|RJ-45|有[WOL功能](Wol.html)的Gigabit网口|
|3|HDMI|支持3D,HDR,CEC以及HDCP2.2的HDMI接口|
|4|USB-C|USB2.0 OTG接口,接受[5V](https://www.khadas.com/product-page/power-adapter)到[20V](https://www.khadas.com/product-page/usb-c-24w-adapter)的输入,[可用于升级固件](InstallOsIntoEmmc.html)|
|5|USB-A|USB 2.0接口,最大输出电流500mA|
|6|风扇座子|PWM控制的4线制[风扇](https://www.khadas.com/product-page/3705-cooling-fan)|
|7|reset按键|用于强制重启板子,按下会直接复位|
|8|function按键|快速短按3下进入[MaskROM模式](BootIntoUpgradeMode.html)或从外部介质启动|
|9|power按键|用于关机或者配合其他按键使用|
|A|4个M2插孔|用于使用[散热器](https://www.khadas.com/product-page/new-vim-heatsink)和[DIY外壳](https://www.khadas.com/product-page/diy-case)时的固定|
|B|G-Sensor|三轴加速传感器|
|C|RTC电池接口|硬件时钟电池的接口|
|D|40脚的GPIO|可用于控制[GPIO](Gpio.html)或者与[toneboard](https://www.khadas.com/product-page/tone-board)连接|
|E|GPIO扩展芯片|为VIM3拓展可用的GPIO|
|F|[MCU](KbiGuidance.html)|可编程的EEPROM阵列的STM8S003微控制器|
|G|WOL选择开关|WOL功能的电源开关|
|H|红外模块|可用于与[khadas遥控器](https://www.khadas.com/product-page/ir-remote)通信|
|I|LED灯|用于指示板子的状态|
|J|IPEX天线|用于插[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
|k|IPEX天线|用于插[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
</div>
<div class="tab-pane fade" id="back-vim3l" role="tabpanel" aria-labelledby="back-tab">

||设备名称|描述说明|
|---:|:---|:---|
|1|[VIN](https://www.khadas.com/product-page/vin-to-vin-cable)|5V电压输出|
|2|[SD卡插座](BootFromExtMedia.html)|用于从外部介质启动SD卡系统或者作为外部存储器|
|3|限流开关|防止在负载不均衡的情况下损坏VIM3|
|4|M.2接口|PCIE2.0接口(x1 lane),支持[M.2 2280 NVME固态硬盘]()|
|5|TP|10脚0.5mm间距FTP接口|
|6|[MIPI-DSI接口](TS050.html)|30脚0.5mm间距的FPC接口,可用于连接[TS050触控屏](https://www.khadas.com/product-page/ts050-touchscreen)|
|7|MIPI-CSI接口|30脚，0.5mm间距，4通道，双摄像头，8MP图像信号处理|
|8|[SPI Flash](BootFromSpiFlash.html)|通过SPI控制的Flash模块|
|9|XPWR焊盘|用于连接使用外部电源|
|A|M寄存器|可在任何情况下,强制EMMC进入[MaskROM模式](BootIntoUpgradeMode.html)|
|B|S寄存器|可在任何情况下,强制Flash进入[MaskROM模式](BootIntoUpgradeMode.html)|
|C|限流开关|防止在负载不均衡的情况下损坏VIM3|
</div>
<div class="tab-pane fade" id="button-vim3l" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|描述说明|
|:---:|:---:|:---:|:---|
|x|||强制重启VIM3|
||x||[进入升级模式(TST模式)](BootIntoUpgradeMode.html)|
|||x|开机或者唤醒VIM3|
|x||x|[进入升级模式(按键模式)](BootIntoUpgradeMode.html)|
|x|x|x|[清除EMMC](EraseEmmc.html)|
</div>
<div class="tab-pane fade" id="led-vim3l" role="tabpanel" aria-labelledby="led-tab">

|颜色|状态|含义|
|---:|:---:|:---|
|蓝色|关闭|电源关闭|
||常亮|已连接电源,板子处于关机状态|
|白色|关闭|板子已关机|
||常亮|板子处于开机状态|
|红灯|None|None|

上述行为是默认的，用户可以更改。例如，可以使白灯闪烁或呼吸。有关如何通过所喜爱的操作系统（每个操作系>统都不同）编程的更多信息可通过[forum.khadas.com](https://forum.khadas.com)咨询。
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


