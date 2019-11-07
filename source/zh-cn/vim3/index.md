title: VIM3 相关文档
---

# VIM3 电源选择
尽管您的VIM3 SBC与各种类型的电源兼容，但这些是最佳性能输出和稳定性的推荐规格。

1. 5V,2A 电源适配器
2. Type-C数据线

**更多：**
* [Khadas Shop - 电源适配器](https://www.khadas.com/product-page/power-adapter)
* [Khadas Shop - Type-C数据线](https://www.khadas.com/product-page/usb-c-cable)
* [Khadas VIMs 外部供电接口](https://docs.khadas.com/zh-cn/vim3/ExtraPowerInput.html)
* [Khadas VIM 规格](https://www.khadas.com/vim)

# 显示器　&& 用户输入
当您需要将VIM3 SBC连接到外部显示器+键盘鼠标+遥控器，以用作台式计算机或媒体中心时，这些选项非常有用

1. 4K HDMI 2.0 的数据线
2. 兼容1080P和4K的显示器
3. 无线的鼠标和键盘
4. 兼容CEC的遥控器

**更多：**
[Khadas Shop - HDMI数据线](https://www.khadas.com/product-page/hdmi-cable)
[Khadas Shop - 遥控器](https://www.khadas.com/product-page/ir-remote)
[亚马逊－无线鼠标和键盘](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Delectronics&field-keywords=wireless+keyboard+and+mouse&rh=n%3A172282%2Ck%3Awireless+keyboard+and+mouse)

# 制作可引导/烧录的SD卡/U盘驱动器
当您想通过SD卡或U盘驱动器（烧录卡）升级VIM3 SBC的操作系统时，这些项目非常有用。或者，如果您想运行只能从外部Medi A（烧录卡）运行的操作系统，如LibreELEC。

1. 不小于8GB的SD卡。
2. 读卡器。
3. 笔记本电脑、台式电脑。
4. 不小于8GB的U盘。

**更多：**
[启动卡与烧录卡的比较](https://docs.khadas.com/zh-cn/vim3/BootingCardVsBurningCard.html)
[通过TF卡升级安卓](https://docs.khadas.com/zh-cn/vim3/UpgradeViaTFBurningCard.html)
[从外部媒体介质启动系统](https://docs.khadas.com/zh-cn/vim3/BootFromExtMedia.html)
[如何进入升级模式](https://docs.khadas.com/vim3/HowtoBootIntoUpgradeMode.html)

**提示:**
* 应使用USB-C数据线从Ubuntu或Windows主机直接将**emmc固件**刻录到`emmc`。不能将其烧录到SD卡中。例如：android和ubuntu发行版包含“emmc”标记。
* **sd/usb固件**应复制到一张sd卡中，然后使用该卡用新操作系统重新格式化emmc存储。例如：Armbian、Ubuntu发行版包含到'sd_usb'标记，以及LibELEC。
* 为了从**sd/usb images**启动，您需要在您的emmc上运行android或ubuntu，并激活多启动。

# 使用Type-C升级EMMC系统
如果您想使用笔记本电脑或台式电脑升级存储在EMMC存储器中的VIM3 SBC操作系统，则需要这些项目。例如，将启动操作系统从android改为ubuntu，或者安装更具特色的第三方操作系统。

1. 常见Tpye-C数据线 (传统PC) 
2. 两头Type-C的数据线 (现代PC)

**更多：**
* [通过USB升级固件](https://docs.khadas.com/zh-cn/vim3/UpgradeViaUSBCable.html)
* [进入升级模式](https://docs.khadas.com/zh-cn/vim3/HowtoBootIntoUpgradeMode.html)

**固件**
* [安卓固件](https://docs.khadas.com/zh-cn/vim3/FirmwareAndroid.html)
* [Ubuntu固件](https://docs.khadas.com/zh-cn/vim3/FirmwareUbuntu.html)
* [LibreELEC](https://docs.khadas.com/zh-cn/vim3/FirmwareLibreelec.html)
* [Dual](https://docs.khadas.com/vim3/zh-cn/FirmwareDualos.html)
* [U-Boot](https://docs.khadas.com/vim3/zh-cn/FirmwareUboot.html)
* [Third Party OSes](https://docs.khadas.com/vim3/zh-cn/FirmwareThirdparty.html)

# 观看电影，扩展内部emmc存储
如果您希望将VIM3 SBC用作媒体中心，用于存储/下载大型电影文件，这些项目非常有用。一个microDXC的UHS-I卡很贵，但它的速度也足以支持4K视频播放。此外，您还可以连接外部USB-2.0/3.0 SSD或HDD以存储整个媒体库。

1. 不小于64GB的USB-2.0/3.0 HDD/SSD
2. 不小于64GB的*microSDXC UHS-I* SD-Card

**更多:**
* [Amazon - Samsung T5 Portable SSD](https://www.amazon.com/Samsung-T5-Portable-SSD-MU-PA1T0B/dp/B073H552FJ/ref=sr_1_1_sspa?ie=UTF8&qid=1543995277&sr=8-1-spons&keywords=external+usb+ssd&psc=1)
* [Amzon - microSDXC UHS-I SD-Card](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=microSDXC+UHS-I&rh=i%3Aaps%2Ck%3AmicroSDXC+UHS-I)

**提示:** 如今，大多数人都通过流媒体使用，可以参考[如何安装LibreELEC](https://docs.khadas.com/zh-cn/vim3/InstallLibreELEC.html)

# 软件开发/高级CRACH恢复
在系统完全崩溃需要手动恢复的极端情况下，需要使用mregister重置VIM3 SBC。USB串行调试工具对于开发人员调试复杂软件问题也很有用。

1. 可导电的金属镊子（用于通过mregister重置死掉的sbc）
2. USB串行调试工具（用于诊断软件/硬件问题）

**更多:**
* [升级模式](https://docs.khadas.com/zh-cn/vim3/HowtoBootIntoUpgradeMode.html)
* [亚马逊－金属镊子](https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=metal+tweezers)
* [亚马逊-USB调试工具](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=usb+serial+debug+tool&rh=i%3Aaps%2Ck%3Ausb+serial+debug+tool)

# VIM3相关网页
更多的相关信息，请查看我们的网页，阅读文档，或者到论坛浏览以及提问。
* [VIM3网站首页](https://www.khadas.com/vim)
* [VIM3论坛页](https://forum.khadas.com/c/Khadas-VIM3)
