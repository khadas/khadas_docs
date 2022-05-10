title: Extra Power Input for Khadas VIMs
---

{% note info NOTE %}

* **MAIN POWER SUPPLY COMES FROM THE USB-C PORT, THIS GUIDE IS FOR THE EXTRA POWER SUPPLY ONLY.**

{% endnote %}

## Overview
Khadas VIMs is designed with three power supply ports:

1. USB-C Port: This is used for both Power Supply and USB Data Transmission.
2. 4-Pin VIN port which is situated near the USB-C port.

## Using USB-C as Extra Power Input
USB-C is the normal power supply interface. It can also transport data at the same time; burning firmware, ADB debug...

<img src="/android/images/vim3/EXT_USBC.png" width="50%" height="50%" >

## Using VIN as Extra Power Input

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim1v12-tab" data-toggle="tab" href="#vim1v12" role="tab" aria-controls="vim1v12" aria-selected="false">VIM1 V12</a>
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
    <a class="nav-link active" id="vim4-tab" data-toggle="tab" href="#vim4" role="tab" aria-controls="vim4" aria-selected="true">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade" id="vim1v12" role="tabpanel" aria-labelledby="vim1v12-tab">

<img src="/android/images/vim1/vim1_v12_ext.png" width="50%" height="50%" >

The VIN port is a 4-Pin 1.25mm port.

The voltage range is 0~5V.

</div>
<div class="tab-pane fade" id="vim1v14" role="tabpanel" aria-labelledby="vim1v14-tab">

<img src="/android/images/vim1/vim1_v14_ext.png" width="50%" height="50%" >

The VIN port on board is [Molex 78171](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781710004_PCB_HEADERS.xml&channel=Products&Lang=en-US).
And the connector is [Molex 78172](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781720004_CRIMP_HOUSINGS.xml).

The one marked with a triangle is Pin 1. Pin 1 and Pin 2 are positive, Pin3 and Pin 4 are negative

The voltage range is 0~5V.

</div>
<div class="tab-pane fade" id="vim2v12" role="tabpanel" aria-labelledby="vim2v12-tab">

<img src="/android/images/vim2/vim2_v12_ext.png" width="50%" height="50%" >

The voltage range is 0~5V.

</div>
<div class="tab-pane fade" id="vim2v14" role="tabpanel" aria-labelledby="vim2v14-tab">

<img src="/android/images/vim2/vim2_v14_ext.png" width="50%" height="50%" >

The voltage range is 0~5V.

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

<img src="/android/images/vim3/vim3_v12_ext.png" width="50%" height="50%" >

The VIN port on board is [Molex 78171](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781710004_PCB_HEADERS.xml&channel=Products&Lang=en-US).
And the connector is [Molex 78172](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781720004_CRIMP_HOUSINGS.xml).

The one marked with a triangle is Pin 1. Pin 1 and Pin 2 are positive, Pin3 and Pin 4 are negative

The voltage range is 0~20V.
</div>

<div class="tab-pane fade show active" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

<img src="/android/images/vim4/vim4_v12_ext.png" width="50%" height="50%" >

The VIN port on board is [Molex 78171](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781710004_PCB_HEADERS.xml&channel=Products&Lang=en-US).
And the connector is [Molex 78172](https://www.molex.com/molex/products/datasheet.jsp?part=active/0781720004_CRIMP_HOUSINGS.xml).

The one marked with a triangle is Pin 1. Pin 1 and Pin 2 are positive, Pin3 and Pin 4 are negative.

The voltage range is 0~20V.

</div>
</div>                                                                                                                                                

{% note info Tips %}

We don't have a VIN cable for sale, you'll need to DIY one by yourself.

{% endnote %}

## See Also
* [Interfaces Description](Hardware.html#VIM1-Interfaces)
