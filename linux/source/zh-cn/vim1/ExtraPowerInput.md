title: Khadas VIMs外部供电接口
---

## 前言

设备主要由USB-C接口供电，但同时也支持外部接口供电。

## 概述
Khadas VIM设计了两个主要电源输入接口
 * USB-C：可以用作供电，也可以作USB数据传输。
 * VIN：只用于供电

## 使用USB-C作为外部供电接口
USB-C是常用的供电接口，在供电的同时也可以作数据传输，比如烧录系统固件、ADB调试...

<img src="/linux/images/vim3/ext_usbc.png" width="50%" height="50%" >

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
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-tab" data-toggle="tab" href="#vim4" role="tab" aria-controls="vim4" aria-selected="true">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1v12" role="tabpanel" aria-labelledby="vim1v12-tab">

<img src="/linux/images/vim1/vim1_v12_ext.png" width="50%" height="50%" >

VIN供电接口座子规格参数：4-Pin 1.25mm间距。

电压范围是0~5V。

</div>
<div class="tab-pane fade" id="vim1v14" role="tabpanel" aria-labelledby="vim1v14-tab">

<img src="/linux/images/vim1/vim1_v14_ext.png" width="50%" height="50%" >

板载VIN供电接口座子型号为：[Molex 78171](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781710004_PCB_HEADERS.xml&channel=Products&Lang=en-US)。
连接器型号为：[Molex 78172](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781720004_CRIMP_HOUSINGS.xml)。

带有三角形标志的为1号脚。1号脚和2号脚为电源正极，3号和4号脚为电源负极。


电压范围是0~5V。

</div>
<div class="tab-pane fade" id="vim2v12" role="tabpanel" aria-labelledby="vim2v12-tab">

<img src="/linux/images/vim2/vim2_v12_ext.png" width="50%" height="50%" >

电压范围是0~5V。

</div>
<div class="tab-pane fade" id="vim2v14" role="tabpanel" aria-labelledby="vim2v14-tab">

<img src="/linux/images/vim2/vim2_v14_ext.png" width="50%" height="50%" >

电压范围是0~5V。

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

<img src="/linux/images/vim3/vim3_v12_ext.png" width="50%" height="50%" >

板载VIN供电接口座子型号为：[Molex 78171](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781710004_PCB_HEADERS.xml&channel=Products&Lang=en-US)。
连接器型号为：[Molex 78172](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781720004_CRIMP_HOUSINGS.xml)。

带有三角形标志的为1号脚。1号脚和2号脚为电源正极，3号和4号脚为电源负极。

电压范围是0~20V。

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

<img src="/linux/images/vim4/vim4_v11_ext.png" width="50%" height="50%" >

板上VIN供电接口 [Molex 78171](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781710004_PCB_HEADERS.xml&channel=Products&Lang=en-US)。
板上VIN供电接口连接器 [Molex 78172](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781720004_CRIMP_HOUSINGS.xml)。

VIN供电接口座子规格参数：4-Pin 1.2mm间距。

带有三角形标志的为1号脚。1号脚和2号脚为电源正极，3号和4号脚为电源负极。

电压范围是0~20V。

</div>
</div>
	

{% note info 提示 %}

目前我们还没有VIN接口的电源线售卖，需要用户自己DIY。

{% endnote %}


## 更多资料
* [vin对vin连接线](https://www.khadas.com/product-page/vin-to-vin-cable)
