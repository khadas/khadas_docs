title: Choose an OS
---

Khadas officially supports and updates the **Ubuntu** distribution; **OTA upgrades are supported**.

## Supported Ubuntu Distributions

`VIM1` supports `Ubuntu 18.04` and `Ubuntu 20.04`.

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="18.04-tab" data-toggle="tab" href="#18.04" role="tab" aria-controls="18.04" aria-selected="true">Ubuntu 18.04</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="20.04-tab" data-toggle="tab" href="#20.04" role="tab" aria-controls="20.04" aria-selected="false">Ubuntu 20.04</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="18.04" role="tabpanel" aria-labelledby="18.04-tab">

`Ubuntu 18.04` **desktop** and **server** versions use the **4.9 kernel**. The default desktop environment is **XFCE**.

Supported installations:

* `eMMC` - Write the OS into the eMMC using the USB Upgrade Tool
* `SD/USB` - Write the OS into an SD card or USB thumbdrive

</div>
<div class="tab-pane fade" id="20.04" role="tabpanel" aria-labelledby="20.04-tab">

`Ubuntu 20.04` **desktop** and **server** versions use the **mainline kernel**. The default desktop environment is **GNOME**.

Supported installations:

* `SD/USB` - Write the OS into an SD card or USB thumbdrive

{% note info %}
The mainline kernel can only be installed into an SD card, however you can copy the OS into the eMMC after the OS has booted up.
{% endnote %}

</div>
</div>

{% note info %}
If the image name includes the text **EMMC**, it is meant for eMMC installation. If it includes **SD-USB**, it is meant for SD card installation.
{% endnote %}

## How to Select an OS

### Linux Kernel

At present we support two Linux kernels, **4.9** and **mainline**. The older **4.9** kernel is the most stable, whilst the **mainline** kernel contains the latest improvements but is unstable.

If your priority is stability, select an OS that uses the **4.9** kernel.
If you want to experience the latest features, select an OS that uses the **mainline** kernel.

### OS Type

**server** - no GUI support, only console
**xfce** - standard desktop GUI support

### Installation Type

**eMMC** - you can write this image directly to the eMMC
**SD/USB** - you can write this image to an SD card or USB thumbdrive

## Download an OS

* VIM2 - [Compatible OS Images](/linux/firmware/Vim2UbuntuFirmware.html)
