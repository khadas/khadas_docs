title: VIM2 文档
---

## VIM2
![image](/images/vim2/docs_vim2.jpg)

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
|2|RJ-45|有[WOL功能](/zh-cn/vim2/HowtoUseWol.html)的Gigabit网口|
|3|HDMI|支持3D,HDR,CEC以及HDCP2.2的HDMI接口|
|4|USB-C|USB2.0 OTG接口,[5V输出](https://www.khadas.com/pr/oduct-page/power-adapter),[可用于升级固件](/zh-cn/vim2/UpgradeViaUSBCable.html)|
|5|USB-A|USB 2.0接口,最大输出电流900mA|
|6|限流开关|防止在负载不均衡的情况下损坏VIM2|
|7|风扇座子|PWM控制的4线制[风扇](https://www.khadas.com/product-page/3705-cooling-fan)|
|8|reset按键|用于强制重启板子,按下会直接复位|
|9|function按键|快速短按3下进入[MaskROM模式](/zh-cn/vim2/HowtoBootIntoUpgradeMode.html)或从外部介质启动|
|A|power按键|用于关机或者配合其他按键使用|
|B|4个M2插孔|用于使用[散热器](https://www.khadas.com/product-page/new-vim-heatsink)和[DIY外壳](https://www.khadas.com/product-page/diy-case)时的固定|
|C|RTC电池接口|硬件时钟电池的接口|
|D|[40脚的GPIO](/zh-cn/vim2/GPIOPinout.html)|可用于控制[GPIO](/zh-cn/vim2/HowToAccessGpio.html)或者与[toneboard](https://www.khadas.com/product-page/tone-board)连接|
|E|红外模块|可用于与[khadas遥控器](https://www.khadas.com/product-page/ir-remote)通信|
|F|LED灯|用于指示板子的状态|
|G|FPC控制器|10个引脚,0.5mm间距,具有I2C和IOs的功能|
|H|天线座子|用于插[wifi](/zh-cn/vim2/HowToConnectWifi.html)和[蓝牙](/zh-cn/vim2/HowToSetupBluetooth.html)的天线|
|I|天线座子|用于插[wifi](/zh-cn/vim2/HowToConnectWifi.html)和[蓝牙](/zh-cn/vim2/HowToSetupBluetooth.html)的天线|
</div>
<div class="tab-pane fade" id="back-vim2" role="tabpanel" aria-labelledby="back-tab">

||设备名称|描述说明|
|---:|:---|:---|
|1|Pogo焊盘|外部5V电压输入,可有[VTV板子](https://www.khadas.com/product-page/vtv-board)提供|
|2|[SD卡插座](/zh-cn/vim2/BootFromExtMedia.html)|用于从外部介质启动SD卡系统或者作为外部存储器|
|3|500mA保险丝|为USB口提供500mA的电流保护|
|4|WOL选择开关|打开以后可以用WOL的方式唤醒板子|
|5|[MCU](/zh-cn/vim2/KbiGuidance.html)|可编程EEPROM阵列的STM8S003微控制器|
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
||x||[进入升级模式(TST模式)](/zh-cn/vim2/HowtoBootIntoUpgradeMode.html)|
|||x|开机或者唤醒VIM2|
|x||x|[进入升级模式(按键模式)](/zh-cn/vim2/HowtoBootIntoUpgradeMode.html)|
|x|x|x|[清除EMMC](/zh-cn/vim2/HowtoEraseEMMC.html)|
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


## Krescue (Khadas Rescue OS)
![image](/images/docs_krescue_online_install.jpg)

[Krescue](https://dl.khadas.com/Firmware/Krescue/dump/README.txt) 是一个非常小（21MB）的操作系统，您可以直接从micro-SD卡或EMMC启动。它就像是一把"瑞士军刀"，你可以用它来执行各种低级的SBC维修任务。其中最值得注意的是通过转储一个原始压缩的.img.gz来备份EMMC，并通过将.img.gz刷新回EMMC来快速安装新操作系统。从2020年1月起，Krescue可以通过有线以太网直接从网络下载和安装操作系统映像。

**主要特性:**
- 将EMMC的中的内容通过[SD卡](https://dl.khadas.com/Firmware/Krescue/dump/image2sd.readme.txt),[USB存储设备](https://dl.khadas.com/Firmware/Krescue/dump/README-rescue-usb-otg-mode-disks.txt)或者[网络](https://dl.khadas.com/Firmware/Krescue/dump/README-rescue-http-disks.txt)备份。
- 从其他设备或者网络覆写img.gz格式的固件到EMMC
- 通过网络直接安装系统
- 查看硬件谁设备信息
- 给有专业知识的用户准备的应急shell
- 通过串口，USB网络接口或者网络接口使用[shell访问](https://dl.khadas.com/Firmware/Krescue/dump/README-rescue-access.txt)系统。

**启动Krescue的[步骤](https://dl.khadas.com/Firmware/Krescue/dump/README-rescue-begin.txt)**
1. 从[dl.khadas.com](https://dl.khadas.com/Firmware/Krescue/dump/)上下载合适你板子使用的VIM2的镜像。
2. 使用启动盘制作工具([Etcher](https://www.balena.io/etcher/)，[rufus](https://rufus.ie/))将下载的镜像烧录到SD中。
3. 将SD卡插到板子上，同时插上HDMI，用USB-C供电
4. 启动板子进入[MaskROM模式](https://dl.khadas.com/Firmware/Krescue/dump/README-rescue-boot.txt)(请仔细阅读这个谅解的文档！！！)
5. 使用[khadas遥控器](https://www.khadas.com/product-page/ir-remote)和USB的键盘就可以操作UI界面了。

**通过shell命令在线安装**

获取帮助信息:
```
curl -sfL dl.khadas.com/.mega | sh -s - --help
wget -O-  dl.khadas.com/.mega | sh -s - --help
```

通过web将Krescue目录下载到EMMC
```
curl -sfL dl.khadas.com/.mega | sh -s - VIM1  > /dev/mmcblk? <tab auto-complete>
curl -sfL dl.khadas.com/.mega | sh -s - VIM2  > /dev/mmcblk? <tab auto-complete>
curl -sfL dl.khadas.com/.mega | sh -s - VIM3  > /dev/mmcblk? <tab auto-complete>
curl -sfL dl.khadas.com/.mega | sh -s - VIM3L > /dev/mmcblk? <tab auto-complete>
```

更多shell命令和示例:
- [README.megaimage_online.txt](https://dl.khadas.com/Firmware/Krescue/mega/README.megaimage_online.txt)

**更多:**
- [YouTube - Krescue Introduction](https://youtu.be/ER4BOJUhoYU)
- [YouTube - Krescue Online OS Installation](https://youtu.be/vvpkbhnyhZY)
- [Khadas Forum - Krescue Help & Discussion](https://forum.khadas.com/t/krescue-take-full-control-of-your-vim-device/5945)

## VIM2 电源选择
尽管您的VIM2 SBC与各种类型的电源兼容，但这些是最佳性能输出和稳定性的推荐规格。

1. 5V,2A 电源适配器
2. Type-C数据线

**更多：**
* [Khadas Shop - 电源适配器](https://www.khadas.com/product-page/power-adapter)
* [Khadas Shop - Type-C数据线](https://www.khadas.com/product-page/usb-c-cable)
* [Khadas VIMs 外部供电接口](/zh-cn/vim2/ExtraPowerInput.html)
* [Khadas VIM 规格](https://www.khadas.com/vim)

## 显示器　&& 用户输入
当您需要将VIM2 SBC连接到外部显示器+键盘鼠标+遥控器，以用作台式计算机或媒体中心时，这些选项非常有用

1. 4K HDMI 2.0 的数据线
2. 兼容1080P和4K的显示器
3. 无线的鼠标和键盘
4. 兼容CEC的遥控器

**更多：**
[Khadas Shop - HDMI数据线](https://www.khadas.com/product-page/hdmi-cable)
[Khadas Shop - 遥控器](https://www.khadas.com/product-page/ir-remote)
[亚马逊－无线鼠标和键盘](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Delectronics&field-keywords=wireless+keyboard+and+mouse&rh=n%3A172282%2Ck%3Awireless+keyboard+and+mouse)

## 制作可引导 / 烧录的SD卡 / U盘驱动器
当您想通过SD卡或U盘驱动器（烧录卡）升级VIM2 SBC的操作系统时，这些项目非常有用。或者，如果您想运行只能
从外部Medi A（烧录卡）运行的操作系统，如LibreELEC。

1. 不小于8GB的SD卡。
2. 读卡器。
3. 笔记本电脑、台式电脑。
4. 不小于8GB的U盘。

**更多：**
[启动卡与烧录卡的比较](/zh-cn/vim2/BootingCardVsBurningCard.html)
[通过TF卡升级安卓](/zh-cn/vim2/UpgradeViaTFBurningCard.html)
[从外部媒体介质启动系统](/zh-cn/vim2/BootFromExtMedia.html)
[如何进入升级模式](/zh-cn/vim2/HowtoBootIntoUpgradeMode.html)

{% note info 提示 %}

* 应使用USB-C数据线从Ubuntu或Windows主机直接将**emmc固件**刻录到`emmc`。不能将其烧录到SD卡中。例如：android和ubuntu发行版包含“emmc”标记。
* **sd/usb固件**应复制到一张sd卡中，然后使用该卡用新操作系统重新格式化emmc存储。例如：Armbian、Ubuntu发行版包含到'sd_usb'标记，以及LibELEC。
* 为了从**sd/usb images**启动，您需要在您的emmc上运行android或ubuntu，并激活多启动。

{% endnote %}

## 使用Type-C升级EMMC系统
如果您想使用笔记本电脑或台式电脑升级存储在EMMC存储器中的VIM2 SBC操作系统，则需要这些项目。例如，将启动操作系统从android改为ubuntu，或者安装更具特色的第三方操作系统。

1. 常见Tpye-C数据线 (传统PC)
2. 两头Type-C的数据线 (现代PC)

**更多：**
* [通过USB升级固件](/zh-cn/vim2/UpgradeViaUSBCable.html)
* [进入升级模式](/zh-cn/vim2/HowtoBootIntoUpgradeMode.html)

**固件**
* [安卓固件](/zh-cn/vim2/FirmwareAndroid.html)
* [Ubuntu固件](/zh-cn/vim2/FirmwareUbuntu.html)
* [LibreELEC](/zh-cn/vim2/FirmwareLibreelec.html)
* [Dual](/zh-cn/vim2/FirmwareDualos.html)
* [U-Boot](/zh-cn/vim2/FirmwareUboot.html)
* [Third Party OSes](/zh-cn/vim2/FirmwareThirdparty.html)

## 观看电影，扩展内部emmc存储
如果您希望将VIM2 SBC用作媒体中心，用于存储/下载大型电影文件，这些项目非常有用。一个microDXC的UHS-I卡很贵，但它的速度也足以支持4K视频播放。此外，您还可以连接外部USB-2.0 SSD或HDD以存储整个媒体库。

1. 不小于64GB的USB-2.0 HDD/SSD
2. 不小于64GB的*microSDXC UHS-I* SD-Card

**更多:**
* [Amazon - Samsung T5 Portable SSD](https://www.amazon.com/Samsung-T5-Portable-SSD-MU-PA1T0B/dp/B073H552FJ/ref=sr_1_1_sspa?ie=UTF8&qid=1543995277&sr=8-1-spons&keywords=external+usb+ssd&psc=1)
* [Amzon - microSDXC UHS-I SD-Card](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=microSDXC+UHS-I&rh=i%3Aaps%2Ck%3AmicroSDXC+UHS-I)

{% note info 提示 %}

如今，大多数人都通过流媒体使用，可以参考[如何安装LibreELEC](/zh-cn/vim2/InstallLibreELEC.html)。

{% endnote %}

## 软件开发 / 高级CRACH恢复
在系统完全崩溃需要手动恢复的极端情况下，需要使用mregister重置VIM2 SBC。USB串行调试工具对于开发人员调>试复杂软件问题也很有用。

1. 可导电的金属镊子（用于通过mregister重置死掉的sbc）
2. USB串行调试工具（用于诊断软件/硬件问题）

**更多:**
* [升级模式](/zh-cn/vim2/HowtoBootIntoUpgradeMode.html)
* [亚马逊－金属镊子](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=metal+tweezers)
* [亚马逊-USB调试工具](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=usb+serial+debug+tool&rh=i%3Aaps%2Ck%3Ausb+serial+debug+tool)

## VIM2相关网页
更多的相关信息，请查看我们的网页，阅读文档，或者到论坛浏览以及提问。
* [VIM2网站首页](https://www.khadas.com/vim)
* [VIM2论坛页](https://forum.khadas.com/c/Khadas-VIM2)

## VIM2 介绍视频
{% youtube FZX6c8o5kzo %}

