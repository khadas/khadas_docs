title: Quickstart
---

This article mainly introduces how to quickly get started after getting the board to make the system run.

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

<iframe class="bilibili" src="https://www.youtube.com/embed/-e-LjtqjCsM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<div class="tab-pane fade" id="edge-q" role="tabpanel" aria-labelledby="edge-tab">

<iframe class="bilibili" src="https://www.youtube.com/embed/6D5iG3COopc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
<div class="tab-pane fade" id="captain-q" role="tabpanel" aria-labelledby="captain-tab">

<iframe class="bilibili" src="https://www.youtube.com/embed/SJZWBQ97X44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>
</div>

## Power Supply
Although your Edge SBC is compatible with various types of power supplies, these are the recommended specs for the best performance-output and stability.

<img src="/linux/images/edge/usb-c_adapter_24w_2.jpg" width=800px>

* Khadas USB-C 24W Power Adapter (USB Power Delivery)
* Khadas USB-C Cable (Male-to-Male)

**Related Links:**

* [Khadas Shop - 24W USB-C Adapter](https://www.khadas.com/product-page/usb-c-24w-adapter)
* [Khadas Shop - USB-C Cable](https://www.khadas.com/product-page/usb-c-cable-male-to-male)
* [Khadas Edge Specifications](https://khadas.com/edge)
* [Khadas Edge Accessories](https://www.khadas.com/edge-add-ons)

## Displays & User Input
These items are useful when you need to connect your Edge SBC to an external display + keyboard mouse + remote control, for use as a desktop computer or media center. *Edge series SBCs h
ave USB-C display-port capability, which allows them to connect directly to Type-C enabled 4K monitors, to exchange power, data, video, and audio over a single cable.*

1. 4K HDMI 2.0 Cable
2. HDMI-Compatible 1080P/4K Monitor w/ USB Type-C
3. Wireless USB Keyboard + Mouse
4. CEC-Compatible Remote Control

**Related Links:**
* [Khadas Shop - HDMI Cable](https://www.khadas.com/product-page/hdmi-cable)
* [Khadas Shop - Remote Control](https://www.khadas.com/product-page/ir-remote)
* [Amazon - LG 4K Monitor w/ USB Type-C](https://www.amazon.com/LG-27UD88-W-LED-Lit-Monitor-Type-C/dp/B01CDYB0QS/ref=sr_1_7?ie=UTF8&qid=1543993886&sr=8-7&keywords=usb-c+compatible+monitor)
* [Amazon - Wireless Keyboard + Mouse](https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Delectronics&field-keywords=wireless+keyboard+and+mouse&rh=n%3A172282%2Ck%3Awireless+keyboard+and+mouse)

{% note info Note %}
Please do not attach multiple cables with large heads that interfere with each other, as that may bend or twist the connectors, and this will cause intermittent connectivity issues after
 some time.
{% endnote %}

## Quick connect and boot

1. Type-C: Type-C port is the power connection port

2. HDMI: Standard HDMI socket, connect your display

3. ETH (optional): Ethernet port holder

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

After the power is turned on, it starts normally, and you can see the Khadas Logo on the display, and the white light flashes

## Troubleshooting

1. The blue light is always on and the boot screen is not seen: the WoL function is turned on, press the Power button to boot normally, turn off WOL->[How to use WOL](Wol.html)
2. Repeated restarts: insufficient power supply, please use the official recommended external power supply

## Commonly used documents

1. [Install OS into eMMC](InstallOsIntoEmmc.html)
2. [Install System into SD/USB Storage](InstallOsIntoSdusb.html)
3. [Enter Upgrade Mode](BootIntoUpgradeMode.html)
5. [Ubuntu Firmware](/linux/firmware/Vim1UbuntuFirmware.html)
6. [Wi-Fi](Wifi.html)

## Edge Website
For more information, please see our website, read more decumentation, or visit our forum.
* [Khadas Edge Homepage](https://www.khadas.com/edge)
* [Khadas Edge Forum](https://forum.khadas.com/c/Khadas-Edge)

