title: OS Introduce
---

We official supported Linux distribution is **Ubuntu** and will keep updating, **OTA upgrade is supported**.

## Supported Ubuntu Distributions

For `VIM2`, we support `Ubuntu 18.04` and `Ubuntu 20.04`.

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

The Linux kernel of `Ubuntu 18.04` is **4.9**, including **desktop** and **server**. The default desktop environment is **XFCE**.

Supported installations:

* `eMMC` - Use USB upgrade tool to write OS into eMMC
* `SD/USB` - Use tool to write OS into SD card or U-Disk

</div>
<div class="tab-pane fade" id="20.04" role="tabpanel" aria-labelledby="20.04-tab">

The Linux kernel of `Ubuntu 20.04` is **mainline kernel**, including **desktop** and **server**. The default desktop environment is **GNOME**.

Supported installations:

* `SD/USB` - Use tool to write OS into SD card or U-Disk

{% note info %}
Mainline kernel OS only support SD card installation, but you can wirte the OS to eMMC when the system bootup.
{% endnote %}

</div>
</div>

{% note info %}
The OS name include **EMMC** means for eMMC installation, include **SD-USB** means SD card installation.
{% endnote %}

## How To Choose OS

### Choose According to Linux Kernel

There are **4.9** and **mainline** two Linux kernel, **4.9** kernel has best support, but the kernel version is old; **mainline kernel** is the latest version, but some functions may not work well.

If you want to use the stable version, you can choose **4.9** kernel OS.
If you want to experience the new features of lstest kernel, you can choose **mainline kernel** OS.

### Choose According to OS Type

If you don't need desktop environment, you can choose **server** OS.
If you need desktop environment, you can choose **xfce** desktop OS.

### Choose According to Installation

If you want to write the OS to eMMC, you can choose **EMMC** OS.
If you want to write the OS to SD card or U-Disk, you can choose **SD-USB** OS.

## OS Donwload

Click to [Download OS](/linux/firmware/Vim2UbuntuFirmware.html).
