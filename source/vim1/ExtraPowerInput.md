title: Extra Power Input for Khadas VIMs
---

{% note info NOTE %}

* **MAIN POWER SUPPLY COMES FROM THE USB-C PORT, THIS GUIDE IS FOR THE EXTRA POWER SUPPLY ONLY.**
* **ENSURE THAT THE VOLTAGE OF YOUR POWER ADAPTER IS LISTED AS: 5.2V MAX, 2000mA.**

{% endnote %}

## Overview
Khadas VIM1/VIM2 is designed with three power supply ports:

1. USB-C Port: This is used for both Power Supply and USB Data Transmission.
2. 4-Pin VIN port which is situated near the USB-C port.
3. USB-Port beside the USB-C port, is the final power source (Optional USB Host).

## Using USB-C as Extra Power Input
USB-C is the normal power supply interface. It can also transport data at the same time; burning firmware, ADB debug...
![image](/images/vim1/usbc_extra_power.png)

## Using VIN as Extra Power Input

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

The VIN port is a 4-Pin 1.25mm port.

The voltage range is 0~5V.

</div>
<div class="tab-pane fade" id="vim1v14" role="tabpanel" aria-labelledby="vim1v14-tab">

![image](/images/vim1/vim1v14-vin_extra_power.jpg)

The VIN port is a 4-Pin 1.2mm port.

The one marked with a triangle is pin 1. Pin 1 and Pin 2 are positive, pin3 and pin 4 are negative

The voltage range is 0~5V.

</div>
<div class="tab-pane fade" id="vim2v12" role="tabpanel" aria-labelledby="vim2v12-tab">

![image](/images/vim2/vim2v12-vin_extra_power.jpg)

The voltage range is 0~5V.

</div>
<div class="tab-pane fade" id="vim2v14" role="tabpanel" aria-labelledby="vim2v14-tab">

![image](/images/vim2/vim2v14-vin_extra_power.jpg)

The voltage range is 0~5V.

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

![image](/images/vim3/vim3-vin_extra_power.jpg)

The VIN port is a 4-Pin 1.2mm port.

The one marked with a triangle is pin 1. Pin 1 and Pin 2 are positive, pin3 and pin 4 are negative

The voltage range is 0~20V.

</div>
</div>                                                                                                                                                

{% note info Tips %}

We don't have a VIN cable for sale, you'll need to DIY one by yourself.

{% endnote %}

## See Also
* [Interfaces Description](/vim1/VimInterfaces.html)
