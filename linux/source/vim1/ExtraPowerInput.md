title: Secondary Power Input
---

{% note info NOTE %}

**The USB-C port supplies primary input power, this guide is for adding a secondary input source!**

{% endnote %}

## Overview
Khadas SBCs are designed with two power supply ports:

1. USB-C Port: This is used for both power supply and USB data transmission.
2. VIN Port: 4-pin port which is situated near the USB-C port.

<img src="/linux/images/vim3/ext_usbc.png" width="50%" height="50%" >

## VIN Port - Secondary Input Power

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

The VIN port is a 4-pin 1.25mm port.

The voltage range is from 0 ~ 5V.

</div>
<div class="tab-pane fade" id="vim1v14" role="tabpanel" aria-labelledby="vim1v14-tab">

<img src="/linux/images/vim1/vim1_v14_ext.png" width="50%" height="50%" >

The VIN "jack" on the SBC is the [Molex 78171](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781710004_PCB_HEADERS.xml&channel=Products&Lang=en-US).
And the corresponding VIN "plug" is [Molex 78172](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781720004_CRIMP_HOUSINGS.xml).

Pin-1 is marked with a triangle. Pin-1 and pin-2 are positive, Pin-3 and Pin-4 are negative.

The voltage range is 0 ~ 5V.

</div>
<div class="tab-pane fade" id="vim2v12" role="tabpanel" aria-labelledby="vim2v12-tab">

<img src="/linux/images/vim2/vim2_v12_ext.png" width="50%" height="50%" >

The voltage range is 0 ~ 5V.

</div>
<div class="tab-pane fade" id="vim2v14" role="tabpanel" aria-labelledby="vim2v14-tab">

<img src="/linux/images/vim2/vim2_v14_ext.png" width="50%" height="50%" >

The voltage range is 0 ~ 5V.

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

<img src="/linux/images/vim3/vim3_v12_ext.png" width="50%" height="50%" >

The VIN "jack" on the SBC is the [Molex 78171](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781710004_PCB_HEADERS.xml&channel=Products&Lang=en-US).
And the corresponding VIN "plug" is [Molex 78172](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781720004_CRIMP_HOUSINGS.xml).

Pin-1 is marked with a triangle. Pin-1 and pin-2 are positive, Pin-3 and Pin-4 are negative.

The voltage range is 0 ~ 20V.

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

<img src="/linux/images/vim4/vim4_v11_ext.png" width="50%" height="50%" >

The VIN "jack" on the SBC is the [Molex 78171](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781710004_PCB_HEADERS.xml&channel=Products&Lang=en-US).
And the corresponding VIN "plug" is [Molex 78172](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781720004_CRIMP_HOUSINGS.xml).

Pin-1 is marked with a triangle. Pin-1 and pin-2 are positive, Pin-3 and Pin-4 are negative.

The voltage range is 0 ~ 20V.

</div>
</div>                                                                                                                                                

{% note info Tips %}

You can purchase a VIN to VIN cable from [Khadas Shop](https://www.khadas.com/product-page/vin-to-vin-cable).

{% endnote %}

## See Also
* [Khadas Shop - VIN to VIN Cable](https://www.khadas.com/product-page/vin-to-vin-cable)
