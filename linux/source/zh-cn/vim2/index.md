title: 快速上手
---

这篇主要介绍在拿到开发板以后如何快速上手，让系统跑起来。

## VIM2 电源选择
尽管您的VIM2 SBC与各种类型的电源兼容，但这些是最佳性能输出和稳定性的推荐规格。

1. 5V,2A 电源适配器
2. Type-C数据线

**更多：**
* [Khadas Shop - 电源适配器](https://www.khadas.com/product-page/power-adapter)
* [Khadas Shop - Type-C数据线](https://www.khadas.com/product-page/usb-c-cable)
* [Khadas VIMs 外部供电接口](/linux/zh-cn/vim2/ExtraPowerInput.html)
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

## 快速连接开机

1. Type-C: Type-C口为电源连接口

2. HDMI: 标准HDMI座子，连接你的显示屏

3. ETH(可选): 网口座子

<img src="/linux/images/vim3/QuickConnect.jpg" width=800px>

上电以后正常启动，可以从显示屏看到Khadas Logo，以及白灯闪烁

## 故障排查

1. 蓝色灯常亮没有看到开机画面：WoL功能已打开，按Power按键可以正常开机,关闭WOL->[如何使用WOL](/linux/zh-cn/vim2/Wol)
2. 反复重启开机: 供电不足，请使用官方推荐的外部供电器供电

## 常用文档

1. [通过USB线安装系统到eMMC](/linux/zh-cn/vim2/InstallOsIntoEmmc.html)
2. [安装系统到SD卡或U盘](/linux/zh-cn/vim2/InstallOsIntoSdusb.html)
3. [进入升级模式](/linux/zh-cn/vim2/BootIntoUpgradeMode.html)
4. [从外部媒体介质启动系统](/linux/zh-cn/vim2/BootFromExtMedia.html)
5. [Ubuntu固件](/linux/zh-cn/firmware/Vim2UbuntuFirmware.html)
6. [Wifi](/linux/zh-cn/vim2/Wifi.html)

## VIM2相关网页
更多的相关信息，请查看我们的网页，阅读文档，或者到论坛浏览以及提问。
* [VIM2商店](https://www.khadas.com/shop?Collection=VIM2&sort=price_descending)
* [VIM2网站首页](https://www.khadas.com/vim)
* [VIM2论坛页](https://forum.khadas.com/c/Khadas-VIM2)              

