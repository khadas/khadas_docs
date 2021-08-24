title: 快速上手
---

这篇主要介绍在拿到开发板以后如何快速上手，让系统跑起来。

## Edge电源
尽管Edge SBC可与各种类型的电源兼容，但建议使用这些规格以获得最佳的性能输出和稳定性。

<img src="/linux/images/edge/usb-c_adapter_24w_2.jpg" width=800px>

1. Khadas USB-C 24W供电器
2. Khadas USB-C 数据线

{% note info 提示 %}
这些物品现在在Khadas商店有售
{% endnote %}

**更多:**
* [Edge+Captain电源优先管理](/linux/zh-cn/edge/EdgeCaptainPowerPriority.html)
* [Khadas Edge 文档](https://khadas.com/edge)
* [Khadas Edge 配件](https://www.khadas.com/edge-add-ons)

## 显示和用户输入
当您需要将Edge SBC连接到外部显示器+键盘鼠标+遥控器以用作台式计算机或媒体中心时，这些项目很有用。*Edge系列SBC具有USB-C显示端口功能，可将它们直接连接到支持Type-C的4K监视器，并通过单根电缆>交换电源，数据，视频和音频.*

1. 4K HDMI 2.0数据线
2. 带有type-c或者HDMI的兼容4K的显示器
3. 无线鼠标或者键盘
4. 兼容CEC的遥控器

**更多:**
* [Khadas Shop - HDMI数据线](https://www.khadas.com/product-page/hdmi-cable)
* [Khadas Shop - 遥控器](https://www.khadas.com/product-page/ir-remote)
* [Amazon - LG 4K显示器](https://www.amazon.com/LG-27UD88-W-LED-Lit-Monitor-Type-C/dp/B01CDYB0QS/ref=sr_1_7?ie=UTF8&qid=1543993886&sr=8-7&keywords=usb-c+compatible+monitor)
* [Amazon - 无线键盘鼠标](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Delectronics&field-keywords=wireless+keyboard+and+mouse&rh=n%3A172282%2Ck%3Awireless+keyboard+and+mouse)

{% note info 注意 %}
请不要连接多头相互干扰的大头电缆，否则可能会弯曲或扭曲连接器，这将在一段时间后导致间歇性连接问题。
{% endnote %}

## 快速连接开机

1. Type-C: Type-C口为电源连接口

2. HDMI: 标准HDMI座子，连接你的显示屏

3. ETH(可选): 网口座子

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="edge-tab" data-toggle="tab" href="#edge" role="tab" aria-controls="edge" aria-selected="true">Edge</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="edge-v-tab" data-toggle="tab" href="#edge-v" role="tab" aria-controls="edge-v" aria-selected="false">Edge-V</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="captain-tab" data-toggle="tab" href="#captain" role="tab" aria-controls="Captain" aria-selected="false">Captain</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="edge" role="tabpanel" aria-labelledby="edge-tab">
<img src="/linux/images/edge/QuickStart-edge.jpg" width=800px>
</div>
<div class="tab-pane fade" id="edge-v" role="tabpanel" aria-labelledby="edge-v-tab">
<img src="/linux/images/edge/QuickStart-edge-v.jpg" width=800px>
</div>
<div class="tab-pane fade" id="captain" role="tabpanel" aria-labelledby="captain-tab">
<img src="/linux/images/edge/QuickStart-captain.jpg" width=800px>
</div>
</div>

上电以后正常启动，可以从显示屏看到Khadas Logo，以及白灯闪烁

## 故障排查

1. 蓝色灯常亮没有看到开机画面：WoL功能已打开，按Power按键可以正常开机,关闭WOL->[如何使用WOL](/linux/zh-cn/edge/Wol)
2. 反复重启开机: 供电不足，请使用官方推荐的外部供电器供电

## 常用文档

1. [通过USB线安装系统到eMMC](/linux/zh-cn/edge/InstallOsIntoEmmc.html)
2. [安装系统到SD卡或U盘](/linux/zh-cn/edge/InstallOsIntoSdusb.html)
3. [进入升级模式](/linux/zh-cn/edge/BootIntoUpgradeMode.html)
4. [从外部媒体介质启动系统](/linux/zh-cn/edge/BootFromExtMedia.html)
5. [Ubuntu固件](/linux/zh-cn/firmware/Vim1UbuntuFirmware.html)
6. [Wifi](/linux/zh-cn/edge/Wifi.html)

## Edge相关网页
更多的相关信息，请查看我们的网页，阅读文档，或者到论坛浏览以及提问。
* [Edge商店](https://www.khadas.com/shop?Collection=Edge&sort=price_descending)
* [Edge网站首页](https://www.khadas.com/edge)
* [Edge论坛页](https://forum.khadas.com/c/Khadas-Edge)              

