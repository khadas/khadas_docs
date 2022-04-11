title: VIM2 硬件描述
---

## VIM2 硬件接口描述

### VIM2 V14
![TOP image](/linux/images/vim2/VIM2_v1.4_top_port_labels.png)
![Bottom image](/linux/images/vim2/VIM2_v1.4_bottom_port_labels.png) 

### VIM2 V12
![image](/linux/images/vim2/vim2_interfaces.png)


## VIM2 硬件信息

![image](/linux/images/vim2/docs_vim2.jpg)

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="front-tab" data-toggle="tab" href="#front-vim2" role="tab" aria-controls="front" aria-selected="true">正面(蓝色标识)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="back-tab" data-toggle="tab" href="#back-vim2" role="tab" aria-controls="back" aria-selected="false">背面(红色)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="button-tab" data-toggle="tab" href="#button-vim2" role="tab" aria-controls="button" aria-selected="false">按键</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="led-tab" data-toggle="tab" href="#led-vim2" role="tab" aria-controls="led" aria-selected="false">LED灯指示</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="gpio-tab" data-toggle="tab" href="#gpio-vim2" role="tab" aria-controls="gpio" aria-selected="false">GPIO管脚映射</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="front-vim2" role="tabpanel" aria-labelledby="front-tab">

||设备名称|描述说明|
|---:|:---|:---|
|1|USB-A|USB 2.0接口,最大输出电流500mA|
|2|RJ-45|有[WOL功能](Wol.html)的Gigabit网口|
|3|HDMI|支持3D,HDR,CEC以及HDCP2.2的HDMI接口|
|4|USB-C|USB2.0 OTG接口,[5V输出](https://www.khadas.com/pr/oduct-page/power-adapter),[可用于升级固件](InstallOsIntoEmmc.html)|
|5|USB-A|USB 2.0接口,最大输出电流900mA|
|6|限流开关|防止在负载不均衡的情况下损坏VIM2|
|7|风扇座子|PWM控制的4线制[风扇](https://www.khadas.com/product-page/3705-cooling-fan)|
|8|reset按键|用于强制重启板子,按下会直接复位|
|9|function按键|快速短按3下进入[MaskROM模式](BootIntoUpgradeMode.html)或从外部介质启动|
|A|power按键|用于关机或者配合其他按键使用|
|B|4个M2插孔|用于使用[散热器](https://www.khadas.com/product-page/new-vim-heatsink)和[DIY外壳](https://www.khadas.com/product-page/diy-case)时的固定|
|C|RTC电池接口|硬件时钟电池的接口|
|D|40脚的GPIO|可用于控制[GPIO](Gpio.html)或者与[toneboard](https://www.khadas.com/product-page/tone-board)连接|
|E|红外模块|可用于与[khadas遥控器](https://www.khadas.com/product-page/ir-remote)通信|
|F|LED灯|用于指示板子的状态|
|G|FPC控制器|10个引脚,0.5mm间距,具有I2C和IOs的功能|
|H|天线座子|用于插[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
|I|天线座子|用于插[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
</div>
<div class="tab-pane fade" id="back-vim2" role="tabpanel" aria-labelledby="back-tab">

||设备名称|描述说明|
|---:|:---|:---|
|1|Pogo焊盘|外部5V电压输入,可有[VTV板子](https://www.khadas.com/product-page/vtv-board)提供|
|2|[SD卡插座](BootFromExtMedia.html)|用于从外部介质启动SD卡系统或者作为外部存储器|
|3|500mA保险丝|为USB口提供500mA的电流保护|
|4|WOL选择开关|打开以后可以用WOL的方式唤醒板子|
|5|[MCU](KbiGuidance.html)|可编程EEPROM阵列的STM8S003微控制器|
|6|MCU焊盘|SWIM, UART, ADC, NRST|
|7|SPI Flash|通过SPI控制的FLash模块|
|8|20叫Pogo焊盘|用于[VTV板子](https://www.khadas.com/product-page/vtv-board)的USB, I2C, DVB-Bus, IOs接口|
|9|XPWR焊盘|用于连接使用外部电源|
|A|900mA保险丝|为900mA的USB口提供保护|
</div>
<div class="tab-pane fade" id="button-vim2" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|描述说明|
|:---:|:---:|:---:|:---|
|x|||强制重启VIM2|
||x||[进入升级模式(TST模式)](BootIntoUpgradeMode.html)|
|||x|开机或者唤醒VIM2|
|x||x|[进入升级模式(按键模式)](BootIntoUpgradeMode.html)|
|x|x|x|[清除EMMC](EraseEmmc.html)|
</div>
<div class="tab-pane fade" id="led-vim2" role="tabpanel" aria-labelledby="led-tab">

|颜色|状态|含义|
|---:|:---:|:---|
|蓝色|关闭|电源关闭|
||常亮|已连接电源,板子处于关机状态|
|白色|关闭|板子已关机|
||常亮|板子处于开机状态|
|红灯|None|None|

上述行为是默认的，用户可以更改。例如，可以使白灯闪烁或呼吸。有关如何通过所喜爱的操作系统（每个操作系统都不同）编程的更多信息可通过[forum.khadas.com](https://forum.khadas.com)咨询。
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

