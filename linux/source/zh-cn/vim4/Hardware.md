title: VIM4硬件描述
---

## VIM4 接口描述

![VIM4 Interface Top](/linux/images/vim4/vim4_interfaces_top.png)
![VIM4 Interface Bottom](/linux/images/vim4/vim4_interfaces_bottom.png)

## VIM4 硬件信息

![image](/linux/images/vim4/vim4_circle_labels.png)

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="front-tab" data-toggle="tab" href="#front-vim4" role="tab" aria-controls="front" aria-selected="true">Front(Blue)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="back-tab" data-toggle="tab" href="#back-vim4" role="tab" aria-controls="back" aria-selected="false">BACK(Red)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="button-tab" data-toggle="tab" href="#button-vim4" role="tab" aria-controls="button" aria-selected="false">BUTTONS</a>
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

||设备名称|描述说明|
|---:|:---|:---|
|1|USB-A|USB 3.0接口,最大输出电流1500mA|
|2|RJ-45|有[WOL功能](Wol.html)的Gigabit网口|
|3|HDMI输出|支持3D,HDR,CEC以及HDCP2.2的HDMI接口|
|4|USB-C|USB2.0 OTG接口,接受5.5V到[20V](https://www.khadas.com/product-page/usb-c-24w-adapter)的输入,[可用于升级固件](InstallOsIntoEmmc.html)|
|5|USB-A|USB 2.0接口,最大输出电流1300mA|
|6|风扇座子|PWM控制的4线制[风扇](https://www.khadas.com/product-page/3705-cooling-fan)|
|7|reset按键|用于强制重启板子,按下会直接复位|
|8|function按键|快速短按3下进入[MaskROM模式](BootIntoUpgradeMode.html)或从外部介质启动|
|9|power按键|用于关机或者配合其他按键使用|
|A|RTC电池接口|硬件时钟电池的接口|
|B|4个M2插孔|用于使用[散热器](https://www.khadas.com/product-page/new-vim-heatsink)和[DIY外壳](https://www.khadas.com/product-page/diy-case)时的固定|
|C|40脚的GPIO|可用于控制[GPIO](Gpio.html)或者与[toneboard](https://www.khadas.com/product-page/tone-board)连接|
|D|Mic||
|E|HDMI输入|Type-D接口HDMI输入|
|F|LED灯|用于指示板子的状态|
|G|[MCU](KbiGuidance.html)|可编程的EEPROM阵列的STM8S003微控制器|
|H|IPEX4天线|用于插[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
|I|IPEX4天线|用于插[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
|J|限流开关|防止在负载不均衡的情况下损坏VIM4|

</div>
<div class="tab-pane fade" id="back-vim4" role="tabpanel" aria-labelledby="back-tab">

||设备名称|描述说明|
|---:|:---|:---|
|1|[VIN](https://www.khadas.com/product-page/vin-to-vin-cable)|5.5-20V电压输入|
|2|[SD卡插座](BootFromExtMedia.html)|用于从外部介质启动SD卡系统或者作为外部存储器|
|3|M.2接口|PCIE2.0接口(x1 lane),支持[M.2 2280 NVME固态硬盘]()|
|4|MIPI-CSI接口|20脚，0.5mm间距,用于双摄像头的提供数据通路|
|5|MIPI-CSI接口|30脚，0.5mm间距，4通道，双摄像头，16MP图像信号处理|
|6|[MIPI-DSI接口](TS050.html)|40脚0.5mm间距的FPC接口,可用于连接[TS050触控屏](https://www.khadas.com/product-page/ts050-touchscreen)|
|7|v-by-one|30脚, 0.5mm间距|
|8|XPWR焊盘|用于连接使用外部电源|
|9|[SPI Flash](BootFromSpiFlash.html)|通过SPI控制的Flash模块|
|A|限流开关|防止在负载不均衡的情况下损坏VIM4|
|B|G-Sensor|三轴加速传感器|

</div>
<div class="tab-pane fade" id="button-vim4" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|描述说明|
|:---:|:---:|:---:|:---|
|x|||强制重启VIM4|
||x||[进入升级模式(TST模式)](BootIntoUpgradeMode.html)|
|||x|开机或者唤醒VIM4|
|x||x|[进入升级模式(按键模式)](BootIntoUpgradeMode.html)|
|x|x|x|[清除EMMC](EraseEmmc.html)|

</div>
<div class="tab-pane fade" id="led-vim4" role="tabpanel" aria-labelledby="led-tab">

|颜色|状态|含义|
|---:|:---:|:---|
|红色|关闭|电源关闭|
||常亮|已连接电源,板子处于关机状态|
|白色|关闭|板子已关机|

上述行为是默认的，用户可以更改。例如，可以使白灯闪烁或呼吸。有关如何通过所喜爱的操作系统（每个操作系>统都不同）编程的更多信息可通过[forum.khadas.com](https://forum.khadas.com)咨询。
</div>
<div class="tab-pane fade" id="gpio-vim4" role="tabpanel" aria-labelledby="gpio-tab">

![VIM4 Interface Bottom](/linux/images/vim4/vim4_gpio.png)

</div>
</div>












