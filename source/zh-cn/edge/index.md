title: Edge文档
---

# Edge
![image](/images/edge/docs_edge_labels.jpg)

## 正面(蓝色)
||设备名称|描述说明|
|---:|:---|:---|
|1|USB-A|USB 3.0 speeds|
|2|USB-C|USB 3.0,5-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter)的DP输入, 同时可用于[升级系统](/zh-cn/edge/UpgradeViaUSBCable.html)|
|3|HDMI 2.0|支持4K@60Hz, HDCP 2.2的HDMI接口|
|4|USB-C|5-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter)的type-C接口|
|5|USB-A|USB 2.0 speeds|
|6|风扇座子|4针的[风扇](https://www.khadas.com/product-page/3705-cooling-fan)座子接口|
|7|Reset按键|用于强制重启板子,按下会直接复位|
|8|Function按键|快速短按3下[进入TST模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)|
|9|Power按键|用于关机或者配合其他按键使用|
|A|314针的金手指|用于与[Captain](https://www.khadas.com/product-page/captain-carrier-board)等扩展板对接|
|B|I-Pex天线|用于连接[wifi](/zh-cn/edge/HowToConnectWifi.html)和[蓝牙](/zh-cn/edge/HowToSetupBluetooth.html)的天线|
|C|I-Pex天线|用于连接[wifi](/zh-cn/edge/HowToConnectWifi.html)和[蓝牙](/zh-cn/edge/HowToSetupBluetooth.html)的天线|

## 背面(红色)
||设备名称|描述说明|
|---:|:---|:---|
|1|Li-Po电池接口|用于连接锂聚合物电池|
|2|备用Wi-Fi/蓝牙焊盘|用于焊接连接wifi/蓝牙天线|
|3|备用Wi-Fi/蓝牙焊盘|用于焊接连接wifi/蓝牙天线|
|4|4个M2插孔|用于[散热器](https://www.khadas.com/product-page/edge-heatsink)和[DIY外壳](https://www.khadas.com/product-page/captain-carrier-board)|
|5|FPC座子B|10-Pins, 0.5mm Pitch, USB, I2S(8ch), I2C, MCU IOs|
|6|FPC座子A|10-Pins, 0.5mm Pitch, UART, I2C, SPI, SDMMC, ADC, PWM, IOs. To add GPIO, use [Edge IO](https://www.khadas.com/product-page/edge-io)|
|7|M寄存器|强制板子进入[MaskROM模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)|

## 按键
|Reset|Function|Power|描述说明|
|:---:|:---:|:---:|:---|
|x|||强制重启板子|
||x||[进入TST模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)|
|||x|Power On/Wake Up Edge|
|x||x|[进入升级模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)|

## LED灯指示
|颜色|状态|含义|
|---:|:---:|:---|
|蓝色|关|电源关闭|
||常亮|已连接电源,但是处于关机状态|
|白色|关|板子以关机|
||常亮|板子处于开机状态|
|红色|None|None|

上述行为是默认的，用户可以更改。例如，可以使白灯闪烁或呼吸。有关如何通过所喜爱的操作系统（每个操作系统都不同）编程的更多信息可通过[forum.khadas.com](https://forum.khadas.com)咨询。

# Edge-V
![image](/images/edge/docs_edge_v_labels.jpg)

## Front (Blue)
||设备名称|描述说明|
|---:|:---|:---|
|1|USB-A|USB 3.0, 蓝色接口|
|2|RJ-45|有[WOL功能](/zh-cn/edge/HowtoUseWol.html)的Gigabit网口|
|3|HDMI 2.0|支持4K@60Hz, HDCP 2.2的HDMI接口|
|4||USB-C|USB 3.0,5-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter)的DP输入, 同时可用于[升级系统](/zh-cn/edge/UpgradeViaUSBCable.html)|
|5|USB-A|USB 2.0, 黑色接口|
|6|风扇座子|4针的[风扇](https://www.khadas.com/product-page/3705-cooling-fan)座子接口|
|7|Reset按键|用于强制重启板子,按下会直接复位|
|8|Function按键|快速短按3下[进入TST模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)|
|9|Power按键|用于关机或者配合其他按键使用|
|A|RTC电池座子|硬件时钟芯片供电电池座子|
|B|[40脚GPIO座子](/zh-cn/edge/EdgeVGPIOPinout.html)|学习[连接GPIO](/zh-cn/edge/HowToAccessGpio.html), 或者如何连接[Toneboard](https://www.khadas.com/product-page/tone-board)|
|C|Gesture Sensor|三轴加速传感器|
|D|红外模块|可用于与[khadas遥控器](https://www.khadas.com/product-page/ir-remote)通信|
|E|LED灯|可用于指示LED灯的状态|
|F|I-Pex天线|用于连接[wifi](/zh-cn/edge/HowToConnectWifi.html)和[蓝牙](/zh-cn/edge/HowToSetupBluetooth.html)的天线|
|G|I-Pex天线|用于连接[wifi](/zh-cn/edge/HowToConnectWifi.html)和[蓝牙](/zh-cn/edge/HowToSetupBluetooth.html)的天线|

## 背面(红色)
||设备名称|描述说明|
|---:|:---|:---|
|1|Li-Po电池接口|通过[juice板子](https://www.khadas.com/product-page/lipo-battery)用于连接[锂聚合物电池](https://www.khadas.com/product-page/lipo-battery)|
|2|USB-C|5-[20V](https://www.khadas.com/product-page/usb-c-24w-adapter)的type-C接口|
|3|[SD Card 插座](/zh-cn/edge/UpgradeViaTFBurningCard.html)|通过SD Card启动或者只作为外部存储器|
|4|M.2接口|PCIE2.0接口(x1 lane),支持[M.2 2280 NVME固态硬盘](/zh-cn/vim3/ListOfCompatibleNVMeSSDs.html)以及[M2x板子](https://www.khadas.com/product-page/m2x-extension-board)|
|5|E-DP座子|用于外接eDP显示器|
|6|4个M2插孔|用于[散热器](https://www.khadas.com/product-page/edge-heatsink)和[DIY外壳](https://www.khadas.com/product-page/captain-carrier-board)|
|7|TP座子|用于连接[TP输入](/zh-cn/edge/ConnectLcd.html)|
|8|MIPI-TX|MIPI-DSI接口用于连接[LCD显示屏](/zh-cn/edge/ConnectLcd.html)|
|9|MIPI-RX|用于连接[MIPI-CSI摄像头](https://www.khadas.com/product-page/imx214-13mp-camera)|
|A|MIPI-RX/TX|连接[MIPI-CSI摄像头](https://www.khadas.com/product-page/imx214-13mp-camera)或者MIPI-DSI显示屏|
|B||M寄存器|强制板子进入[MaskROM模式](/edge/HowtoBootIntoUpgradeMode.html)|

## 按键
|Reset|Function|Power|描述说明| 
|:---:|:---:|:---:|:---|
|x|||强制重启板子| 
||x||[进入TST模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)|
|||x|Power On/Wake Up Edge|
|x||x|[进入升级模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)|

## LED灯指示
|颜色|状态|含义| 
|---:|:---:|:---|
|蓝色|关|电源关闭| 
||常亮|已连接电源,但是处于关机状态| 
|白色|关|板子以关机| 
||常亮|板子处于开机状态| 
|红色|None|None|

上述行为是默认的，用户可以更改。例如，可以使白灯闪烁或呼吸。有关如何通过所喜爱的操作系统（每个操作系统都不同）编程的更多信息可通过[forum.khadas.com](https://forum.khadas.com)咨询。

## GPIO管脚

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

# Captain
![image](/images/edge/docs_captain_labels.jpg)

## 正面(蓝色)
||设备名称|描述说明|
|---:|:---|:---|
|1|RK3399 SoC散热器|用于减少热量集中的金属层|
|2|RJ-45|有[WOL功能](/zh-cn/edge/HowtoUseWol.html)的Gigabit网口|
|3|[40脚GPIO座子](/zh-cn/edge/CaptainGPIOPinout.html)|学习[连接GPIO](/zh-cn/edge/HowToAccessGpio.html)
|4|RTC电池座子|硬件时钟芯片供电电池座子|
|5|Reset按键|用于强制重启板子,按下会直接复位|
|6|12V DC 供电座子||替代的[12V直流电源输入](https://www.khadas.com/product-page/captain-12v-adapter.html),请参考[电源优先级](/zh-cn/edge/EdgeCaptainPowerPriority.html)|
|7|[SD Card 插座](/zh-cn/edge/UpgradeViaTFBurningCard.html)|通过SD Card启动或者只作为外部存储器|
|8|蜂鸣器|发出简单的声音|
|9|Gesture Sensor|三轴加速传感器|
|A|红外模块|可用于与[khadas遥控器](https://www.khadas.com/product-page/ir-remote)通信|
|B|右边游戏按键|通过[Kap Case](https://www.khadas.com/product-page/kap-case)可以玩简单的游戏|
|C|左边边游戏按键|通过[Kap Case](https://www.khadas.com/product-page/kap-case)可以玩简单的游戏| 
|D|USIC|旧版USB总线|
|E|E-DP座子|用于外接eDP显示器|
|F|TP座子|用于连接[TP输入](/zh-cn/edge/ConnectLcd.html)|
|G|MIPI-TX|MIPI-DSI接口用于连接[LCD显示屏](/zh-cn/edge/ConnectLcd.html)|
|H|MIPI-RX/TX|连接[MIPI-CSI摄像头](https://www.khadas.com/product-page/imx214-13mp-camera)或者MIPI-DSI显示屏|
|I|MIPI-RX|用于连接[MIPI-CSI摄像头](https://www.khadas.com/product-page/imx214-13mp-camera)|
|J|3.5mm 耳机孔|与[Kap Case](https://www.khadas.com/product-page/kap-case)搭配使用|
|K|Function按键|快速短按3下[进入TST模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)|
|L|麦克风|音频输入|
|M|MXM3连接器|用于连接[Edge](https://www.khadas.com/product-page/edge)|
|N|天线|用于连接[wifi](/zh-cn/edge/HowToConnectWifi.html)和[蓝牙](/zh-cn/edge/HowToSetupBluetooth.html)的天线|
|O|天线|用于连接[wifi](/zh-cn/edge/HowToConnectWifi.html)和[蓝牙](/zh-cn/edge/HowToSetupBluetooth.html)的天线|
|P|M3穿孔|用于与[Kap Case](https://www.khadas.com/product-page/kap-case)连接固定|
|Q|M2螺纹支架|用于固定[Edge](https://www.khadas.com/product-page/edge)|

## 背面(红色)
||设备名称|描述说明|
|---:|:---|:---|
|1|[M.2 Socket (PCI-E 2.1)](/zh-cn/edge/ListOfCompatibleNVMeSSDs.html)|可用于连接NVMe SSD|
|2|外部扬声器和DMIC输入FPC连接器|用于连接一个外界的音箱|
|3|[M.2 2280 Stand-Off (M2 Threaded)](/zh-cn/edge/ListOfCompatibleNVMeSSDs.html)|用于固定SSD|
|4|锂电池座子|可连接便携式[2-Cell Li-Po 电池](https://www.khadas.com/product-page/lipo-battery), 具体可查看[电源优先管理](/zh-cn/edge/EdgeCaptainPowerPriority.html)|
|5|右按键|自定义可编程按键|
|6|左按键|自定义可编程按键|

## 按键
|Reset|Function|Power|描述说明|
|:---:|:---:|:---:|:---|
|x|||强制重启板子|
||x||[进入TST模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)|
|||x|Power On/Wake Up Edge|
|x||x|[进入升级模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)|

## LED灯指示
|颜色|状态|含义|
|---:|:---:|:---|
|蓝色|关|电源关闭|
||常亮|已连接电源,但是处于关机状态|
|白色|关|板子以关机|
||常亮|板子处于开机状态|
|红色|None|None|

上述行为是默认的，用户可以更改。例如，可以使白灯闪烁或呼吸。有关如何通过所喜爱的操作系统（每个操作系统都不同）编程的更多信息可通过[forum.khadas.com](https://forum.khadas.com)咨询。

## GPIO管脚

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

# Captain + Edge
![image](/images/edge/docs_captain_with_edge_labels.jpg)

## 正面(黄色)
||设备名称|描述说明|
|---:|:---|:---|
|1|[314针金手指](https://www.khadas.com/product-page/edge)|Edge＆Captain之间的数据交换和电源接口|
|2|RockChip RK3399 SoC|x2 1.8GHz A72, x4 1.5GHz A53|
|3|M2x4螺丝孔|用于固定edge和captain|
|4|[USB-C电源接口(5-20V)](/zh-cn/edge/EdgeCaptainPowerPriority.html)|电源接口|
|5|[USB-C (3.0 + DP)](/zh-cn/edge/UpgradeViaUSBCable.html)|电源和DP接口|
|6|USB-A|USB 3.0接口|
|7|USB-A|USB 2.0接口|
|9|HDMI|HDMI 2.0 and CEC|

# Edge电源
尽管Edge SBC可与各种类型的电源兼容，但建议使用这些规格以获得最佳的性能输出和稳定性。

![image](/images/edge/usb-c_adapter_24w_2.jpg)

1. Khadas USB-C 24W供电器
2. Khadas USB-C 数据线

**提示:** 这些物品现在在Khadas商店有售

**更多:**
* [Edge+Captain电源优先管理](/zh-cn/edge/EdgeCaptainPowerPriority.html)
* [Khadas Edge 文档](https://khadas.com/edge)
* [Khadas Edge 配件](https://www.khadas.com/edge-add-ons)

# 显示和用户输入
当您需要将Edge SBC连接到外部显示器+键盘鼠标+遥控器以用作台式计算机或媒体中心时，这些项目很有用。*Edge系列SBC具有USB-C显示端口功能，可将它们直接连接到支持Type-C的4K监视器，并通过单根电缆交换电源，数据，视频和音频.*

1. 4K HDMI 2.0数据线
2. 带有type-c或者HDMI的兼容4K的显示器
3. 无线鼠标或者键盘
4. 兼容CEC的遥控器

**更多:**
* [Khadas Shop - HDMI数据线](https://www.khadas.com/product-page/hdmi-cable)
* [Khadas Shop - 遥控器](https://www.khadas.com/product-page/ir-remote)
* [Amazon - LG 4K显示器](https://www.amazon.com/LG-27UD88-W-LED-Lit-Monitor-Type-C/dp/B01CDYB0QS/ref=sr_1_7?ie=UTF8&qid=1543993886&sr=8-7&keywords=usb-c+compatible+monitor)
* [Amazon - 无线键盘鼠标](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Delectronics&field-keywords=wireless+keyboard+and+mouse&rh=n%3A172282%2Ck%3Awireless+keyboard+and+mouse)

```注意: 请不要连接多头相互干扰的大头电缆，否则可能会弯曲或扭曲连接器，这将在一段时间后导致间歇性连接问题。```

# 制作可启动/刻录SD卡/U盘驱动器
当您想通过SD卡或Thumbdrive（刻录卡）升级Edge SBC的操作系统时，这些项目很有用。 或者，如果您要运行只能从外部介质（引导卡）（如LibreELEC）运行的操作系统。

1. 至少8GB的SD-Card
2. 读卡器
3. 电脑
4. 至少8GB的U盘

**更多:**
* [使用SD卡升级](/zh-cn/edge/UpgradeViaTFBurningCard.html)
* [从外部介质启动](/zh-cn/vim2/BootFromExtMedia.html)
* [进入升级模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)

**提示:**
* **eMMC映像**应该使用USB-C数据线从Ubuntu或Windows主机直接刻录到eMMC。 请勿将其刻录到SD卡中。 例如：包含`EMMC`标记的Android和Ubuntu发行版。
* ** SD / USB映像**应复制到SD卡中，然后再使用该卡通过新的OS重新格式化eMMC存储。 例如：Armbian，包含`SD_USB`标记的Ubuntu发行版，以及LibreELEC和CoreELEC。
* 为了从**SD / USB映像**引导，您需要在eMMC上运行Android（V180209或更高版本）或Ubuntu（V180531或更高版本）并激活Multi-Boot。

# 通过type-C口升级系统
如果要使用笔记本电脑或台式PC升级存储在其eMMC存储中的Edge SBC操作系统，则需要这些物品。 例如，将启动操作系统从Android更改为Ubuntu，或安装更具异国情调的第三方操作系统。

1. 一头USBA,一头USBC的数据线
2. 或者双USBC的数据线
3. 一台电脑

**更多:**
* [通过USBC升级系统](/zh-cn/edge/UpgradeViaUSBCable.html)
* [进入升级模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)

**固件:**
* [Android OS](/zh-cn/firmware/EdgeFirmware.html#android)
* [Ubuntu OS](/zh-cn/firmware/EdgeFirmware.html#Ubuntu)

# 观看电影，扩展内部eMMC存储
如果您希望将Edge-V或Edge + Captain SBC用作媒体中心，以存储/下载大型电影文件，则这些项目很有用。 microSDXC UHS-I卡价格昂贵，但也足够进行4K视频播放。 外部NVMe M.2插槽SSD也足够大，可以容纳整个媒体库。

1. NVMe SSD
2. 高速SD卡

**更多:**
* [Amazon - Samsung 970 EVO NVMe SSD](https://www.amazon.com/Samsung-970-EVO-500GB-MZ-V7E500BW/dp/B07BN4NJ2J/ref=sr_1_3?ie=UTF8&qid=1543993490&sr=8-3&keywords=samsung+m.2+ssd)
* [Amazon - 高速SD卡](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=microSDXC+UHS-I&rh=i%3Aaps%2Ck%3AmicroSDXC+UHS-I)

# 软件开发/崩溃恢复

1. Edge系列SBC配备了“ Terry的智能镊子”，即使在引导加载程序损坏的情况下，也不需要导电金属镊子即可进行故障恢复。*极端的故障恢复情况将要求您使用MRegister重置Edge SBC。 USB串行调试工具对于开发人员调试复杂的软件问题也很有用。

2. 导电金属镊子(用于通过MRegister重置失效的SBC)
3. USB串行调试工具(用于诊断软件/硬件问题)

**更多:**
* [Terry's Smart Tweezers](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)
* [如何进入升级模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)
* [Amazon - Metal Tweezers](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=metal+tweezers)
* [Amazon - 串口调试工具](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=usb+serial+debug+tool&rh=i%3Aaps%2Ck%3Ausb+serial+debug+tool)

# Edge 网页
有关更多信息，请访问我们的网站，阅读更多文档或访问我们的论坛。
* [Khadas Edge文档](https://www.khadas.com/edge)
* [Khadas Edge论坛](https://forum.khadas.com/c/Khadas-Edge)
