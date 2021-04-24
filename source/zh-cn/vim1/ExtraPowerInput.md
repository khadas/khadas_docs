title: Khadas VIMs外部供电接口
---

## 前言
 * 设备主要由USB-C接口供电。
 * 电源适配器电压确保最高为5.2V，电流推荐值为2000mA。

## 概述
Khadas vim1设计了两个主要电源输入接口
 * USB-C：可以用作供电，也可以作USB数据传输。
 * VIN：只用于供电
 * 备用供电接口：靠近USB-C的USB Host接口，需要准备一个公对公的USB线进行连接。

## 使用USB-C作为外部供电接口
USB-C是常用的供电接口，在供电的同时也可以作数据传输，比如烧录系统固件、ADB调试...
![image](/images/vim1/usbc_extra_power.png)

## 使用VIN作为外部供电

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim1v12-tab" data-toggle="tab" href="#vim1v12" role="tab" aria-controls="vim1v12" aria-selected="true">VIM1 V12</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim1v14-tab" data-toggle="tab" href="#vim1v14" role="tab" aria-controls="vim1v14" aria-selected="false">VIM1 V14</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim2v12-tab" data-toggle="tab" href="#vim2v12" role="tab" aria-controls="vim2v12" aria-selected="false">VIM2 V12</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim2v14-tab" data-toggle="tab" href="#vim2v14" role="tab" aria-controls="vim2v14" aria-selected="false">VIM2 V14</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3-tab" data-toggle="tab" href="#vim3" role="tab" aria-controls="vim3" aria-selected="false">VIM3/VIM3L</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1v12" role="tabpanel" aria-labelledby="vim1v12-tab">

![image](/images/vim1/vim1v12-vin_extra_power.png)

VIN供电接口座子规格参数：4-Pin 1.25mm间距。

电压范围是0~5V。

</div>
<div class="tab-pane fade" id="vim1v14" role="tabpanel" aria-labelledby="vim1v14-tab">

VIN供电接口座子规格参数：4-Pin 1.2mm间距。

带有三角形标志的为1号脚。1号脚和2号脚为电源正极，3号和4号脚为电源负极。

![image](/images/vim1/vim1v14-vin_extra_power.jpg)

电压范围是0~5V。

</div>
<div class="tab-pane fade" id="vim2v12" role="tabpanel" aria-labelledby="vim2v12-tab">

![image](/images/vim2/vim2v12-vin_extra_power.jpg)

电压范围是0~5V。

</div>
<div class="tab-pane fade" id="vim2v14" role="tabpanel" aria-labelledby="vim2v14-tab">

![image](/images/vim2/vim2v14-vin_extra_power.jpg)

电压范围是0~5V。

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

![image](/images/vim3/vim3-vin_extra_power.jpg)

VIN供电接口座子规格参数：4-Pin 1.2mm间距。

带有三角形标志的为1号脚。1号脚和2号脚为电源正极，3号和4号脚为电源负极。

电压范围是0~20V。

</div>
</div>
	

{% note info 提示 %}

目前我们还没有VIN接口的电源线售卖，需要用户自己DIY。

{% endnote %}


## 更多资料
* [VIM1接口描述](/zh-cn/vim1/VimInterfaces.html)
* [VIM2接口描述](/zh-cn/vim2/Vim2Interfaces.html)
* [VIM3接口描述](/zh-cn/vim3/Vim3Interfaces.html)
* [vin对vin连接线](https://www.khadas.com/product-page/vin-to-vin-cable)
