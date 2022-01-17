title: Choose an OS
---

Khadas officially supports and updates the **Ubuntu** distribution; **OTA upgrades are supported**.

## Supported Ubuntu Distributions

`VIM4` supports `Ubuntu 20.04`.

`Ubuntu 20.04` **desktop** and **server** versions use the **mainline kernel**. The default desktop environment is **GNOME**.

Supported installations:

* `SD/USB` - Write the OS into an SD card or USB thumbdrive

{% note info %}
The mainline kernel can only be installed into an SD card, however you can copy the OS into the eMMC after the OS has booted up.
{% endnote %}

{% note info %}
If the image name includes the text **EMMC**, it is meant for eMMC installation. If it includes **SD-USB**, it is meant for SD card installation.
{% endnote %}

## How to Select an OS

### Linux Kernel

At present we support two Linux kernels, **5.4** and **mainline**. The older **5.4** kernel is the most stable, whilst the **mainline** kernel contains the latest improvements but is unstable.

If your priority is stability, select an OS that uses the **5.4** kernel.
If you want to experience the latest features, select an OS that uses the **mainline** kernel.

### OS Type

**server** - no GUI support, only console
**xfce** - standard desktop GUI support

### Installation Type

**eMMC** - you can write this image directly to the eMMC
**SD/USB** - you can write this image to an SD card or USB thumbdrive

## Download an OS

* VIM4 - [Compatible OS Images](/linux/firmware/Vim4UbuntuFirmware.html)
