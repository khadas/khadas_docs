title: 快速上手
---

这篇主要介绍在拿到板子以后如何快速上手，让系统跑起来。

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="edge-v-tab" data-toggle="tab" href="#edge-v-q" role="tab" aria-controls="edge-v" aria-selected="true">Edge-V</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="edge-tab" data-toggle="tab" href="#edge-q" role="tab" aria-controls="edge" aria-selected="false">Edge</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="captain-tab" data-toggle="tab" href="#captain-q" role="tab" aria-controls="captain" aria-selected="false">Captain</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="edge-v-q" role="tabpanel" aria-labelledby="edge-v-tab">

<iframe class="bilibili" src="//player.bilibili.com/player.html?aid=720164941&bvid=BV1hQ4y1h7rh&cid=400374941&page=5" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

</div>
<div class="tab-pane fade" id="edge-q" role="tabpanel" aria-labelledby="edge-tab">

<iframe class="bilibili" src="//player.bilibili.com/player.html?aid=720164941&bvid=BV1hQ4y1h7rh&cid=400374941&page=4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

</div>
<div class="tab-pane fade" id="captain-q" role="tabpanel" aria-labelledby="captain-tab">

<iframe class="bilibili" src="//player.bilibili.com/player.html?aid=720164941&bvid=BV1hQ4y1h7rh&cid=400374941&page=6" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

</div>
</div>

## 电源选择

适配器和数据线如下：

<img src="/linux/images/edge/usb-c_adapter_24w_2.jpg" width=800px>

* Khadas USB-C 24W适配器
* Khadas USB-C 数据线

**相关链接:**

* [Khadas Shop - 24W电源适配器](https://www.khadas.cn/product-page/24w-power-adapter?post_type=product)
* [Khadas Shop - USB-C male to male线](https://www.khadas.cn/product-page/usb-c-cable-male-to-male?post_type=product)
* [Khadas Edge 配件](https://www.khadas.com/edge-add-ons)

## 显示和用户输入

当您需要将Edge SBC连接到外部显示器+键盘鼠标+遥控器以用作台式计算机或媒体中心时，这些项目很有用。*Edge系列SBC具有USB-C显示端口功能，可将它们直接连接到支持Type-C的4K监视器，并通过单根电缆>交换电源，数据，视频和音频。*

1. 4K HDMI 2.0数据线
2. 带有type-c或者HDMI的兼容4K的显示器
3. 无线鼠标或者键盘
4. 兼容CEC的遥控器

**相关链接:**
* [Khadas Shop - HDMI数据线](https://www.khadas.com/product-page/hdmi-cable)
* [Khadas Shop - 遥控器](https://www.khadas.com/product-page/ir-remote)

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
<img src="/linux/images/edge/quick_start-edge.jpg" width="50%" height="50%">
</div>
<div class="tab-pane fade" id="edge-v" role="tabpanel" aria-labelledby="edge-v-tab">
<img src="/linux/images/edge/quick_start-edge-v.jpg" width="50%" height="50%">
</div>
<div class="tab-pane fade" id="captain" role="tabpanel" aria-labelledby="captain-tab">
<img src="/linux/images/edge/quick_start-captain.jpg" width="50%" height="50%">
</div>
</div>

上电以后正常启动，可以从显示屏看到Khadas Logo，以及白灯闪烁。

## 故障排查

1. 蓝色灯常亮没有看到开机画面：WoL功能已打开，按Power按键可以正常开机，关闭WOL->[如何使用WOL](Wol)
2. 反复重启开机: 供电不足，请使用官方推荐的外部供电器供电

## 常用文档

1. [通过USB线安装系统到eMMC](InstallOsIntoEmmc.html)
2. [安装系统到SD卡或U盘](InstallOsIntoSdusb.html)
3. [进入升级模式](BootIntoUpgradeMode.html)
5. [Ubuntu固件](/linux/zh-cn/firmware/Vim1UbuntuFirmware.html)
6. [Wi-Fi](Wifi.html)

## Edge相关网页
更多的相关信息，请查看我们的网页，阅读文档，或者到论坛浏览以及提问。
* [Edge商店](https://www.khadas.com/shop?Collection=Edge&sort=price_descending)
* [Edge网站首页](https://www.khadas.com/edge)
* [Edge论坛页](https://forum.khadas.com/c/Khadas-Edge)              

