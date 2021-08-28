title: VIM1 硬件描述
---

## VIM1 接口描述

![Top view](/linux/images/vim1/vim_interfaces_top.png)
![Bottom view](/linux/images/vim1/vim_interfaces_bot.png)


## VIM1 硬件信息

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

||设备名称|描述说明|
|---:|:---|:---|
|1|USB-A|USB 2.0接口,最大输出电流500mA|
|2|RJ-45|10/100 Mbps的网口|
|3|HDMI|支持3D,HDR,CEC以及HDCP2.2的HDMI接口|
|4|USB-C|USB2.0 OTG接口,[5V输出](https://www.khadas.com/product-page/power-adapter),[可用于升级固件](InstallOsIntoEmmc.html)|
|5|USB-A|USB 2.0接口,最大输出电流900mA|
|6|风扇座子|PWM控制的4线制风扇|
|7|reset按键|用于强制重启板子,按下会直接复位|
|8|function按键|快速短按3下进入[MaskROM模式](BootIntoUpgradeMode.html)或从外部介质启动|
|9|power按键|用于关机或者配合其他按键使用|
|A|4个M2插孔|用于使用[散热器](https://www.khadas.com/product-page/new-vim-heatsink)和[DIY外壳](https://www.khadas.com/product-page/diy-case)时的固定|
|B|RTC电池接口|硬件时钟电池的接口|
|C|40脚的GPIO|可用于控制[GPIO](Gpio.html)或者与[toneboard](https://www.khadas.com/product-page/tone-board)连接|
|D|红外模块|可用于与[khadas遥控器](https://www.khadas.com/product-page/ir-remote)通信|
|E|LED灯|用于指示板子的状态|
|F|天线座子|用于插[wifi](Wifi.html)和[蓝牙](Bluetooth.html)的天线|
</div>
<div class="tab-pane fade" id="back-vim1" role="tabpanel" aria-labelledby="back-tab">

||设备名称|描述说明|
|---:|:---|:---|
|1|[VIN](https://www.khadas.com/product-page/vin-to-vin-cable)|5V电压输入|
|2|[SD卡插座](BootFromExtMedia.html)|用于从外部介质启动SD卡系统或者作为外部存储器|
|3|M寄存器触点|[强制进入MaskROM模式](BootIntoUpgradeMode.html)|
|4|XPWR焊盘|用于连接使用外部电源|
</div>
<div class="tab-pane fade" id="button-vim1" role="tabpanel" aria-labelledby="button-tab">

|Reset|Function|Power|描述说明|
|:---:|:---:|:---:|:---|
|x|||强制重启VIM1|
||x||[进入升级模式(TST模式)](BootIntoUpgradeMode.html)|
|||x|开机或者唤醒VIM1|
|x||x|[进入升级模式(按键模式)](BootIntoUpgradeMode.html)|
|x|x|x|[清除EMMC](EraseEmmc.html)|
</div>
<div class="tab-pane fade" id="led-vim1" role="tabpanel" aria-labelledby="led-tab">

|颜色|状态|含义|
|---:|:---:|:---|
|蓝色|关闭|电源关闭|
||常亮|已连接电源,板子处于关机状态|
|白色|关闭|板子已关机|
||常亮|板子处于开机状态|
|红灯|None|None|

上述行为是默认的，用户可以更改。例如，可以使白灯闪烁或呼吸。有关如何通过所喜爱的操作系统（每个操作系统都不同）编程的更多信息可通过[forum.khadas.com](https://forum.khadas.com)咨询。
</div>
<div class="tab-pane fade" id="gpio-vim1" role="tabpanel" aria-labelledby="gpio-tab">

![Image of Vim GPIO](/linux/images/vim1/vim_pinout.png)
</div>
</div>

