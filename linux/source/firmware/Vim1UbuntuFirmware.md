title: Khadas VIM1 Ubuntu Firmware
---

Check [Release Note](Vim1UbuntuFirmwareReleaseNote.html).

## Linux 4.9 Images

{% note info Note %}

VIM1 Only support **Ubuntu 18.04** for Linux 4.9.

{% endnote %}


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="server-tab" data-toggle="tab" href="#server" role="tab" aria-controls="server" aria-selected="true">Server (Headless)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktop-tab" data-toggle="tab" href="#desktop" role="tab" aria-controls="desktop" aria-selected="false">Desktop</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="server" role="tabpanel" aria-labelledby="server-tab">

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="emmc-tab" data-toggle="tab" href="#emmc" role="tab" aria-controls="emmc" aria-selected="true">EMMC Installation</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="sd-tab" data-toggle="tab" href="#sd" role="tab" aria-controls="sd" aria-selected="false">SD/USB Installation</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="emmc" role="tabpanel" aria-labelledby="emmc-tab">

* [vim1-ubuntu-18.04-server-linux-4.9-fenix-1.1.1-220725](http://dl.khadas.com/firmware/VIM1/Ubuntu/EMMC/vim1-ubuntu-18.04-server-linux-4.9-fenix-1.1.1-220725-emmc.img.xz)

</div>
<div class="tab-pane fade show" id="sd" role="tabpanel" aria-labelledby="sd-tab">

* [vim1-ubuntu-18.04-server-linux-4.9-fenix-1.1.1-220725](http://dl.khadas.com/firmware/VIM1/Ubuntu/SD_USB/vim1-ubuntu-18.04-server-linux-4.9-fenix-1.1.1-220725.img.xz)

</div>
</div>

</div>
<div class="tab-pane fade show" id="desktop" role="tabpanel" aria-labelledby="desktop-tab">

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="emmc2-tab" data-toggle="tab" href="#emmc2" role="tab" aria-controls="emmc2" aria-selected="true">EMMC Installation</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="sd2-tab" data-toggle="tab" href="#sd2" role="tab" aria-controls="sd2" aria-selected="false">SD/USB Installation</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="emmc2" role="tabpanel" aria-labelledby="emmc2-tab">

* [vim1-ubuntu-18.04-xfce-linux-4.9-fenix-1.1.1-220725](http://dl.khadas.com/firmware/VIM1/Ubuntu/EMMC/vim1-ubuntu-18.04-xfce-linux-4.9-fenix-1.1.1-220725-emmc.img.xz)

</div>
<div class="tab-pane fade show" id="sd2" role="tabpanel" aria-labelledby="sd2-tab">

* [vim1-ubuntu-18.04-xfce-linux-4.9-fenix-1.1.1-220725](http://dl.khadas.com/firmware/VIM1/Ubuntu/SD_USB/vim1-ubuntu-18.04-xfce-linux-4.9-fenix-1.1.1-220725.img.xz)

</div>
</div>


</div>
</div>

## Mainline Kernel Images

{% note info Only for SD/USB Installation. %}


{% endnote %}

{% note info Note %}

VIM1 Only support **Ubuntu 20.04** for Mainline Linux.

{% endnote %}


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="server2-tab" data-toggle="tab" href="#server2" role="tab" aria-controls="server2" aria-selected="true">Server (Headless)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="desktop2-tab" data-toggle="tab" href="#desktop2" role="tab" aria-controls="desktop2" aria-selected="false">Desktop</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="server2" role="tabpanel" aria-labelledby="server2-tab">

* [vim1-ubuntu-20.04-server-linux-5.18-fenix-1.1.1-220725](http://dl.khadas.com/firmware/VIM1/Ubuntu/SD_USB/vim1-ubuntu-20.04-server-linux-5.18-fenix-1.1.1-220725.img.xz)

</div>
<div class="tab-pane fade show" id="desktop2" role="tabpanel" aria-labelledby="desktop2-tab">

* [vim1-ubuntu-20.04-gnome-linux-5.18-fenix-1.1.1-220725](http://dl.khadas.com/firmware/VIM1/Ubuntu/SD_USB/vim1-ubuntu-20.04-gnome-linux-5.18-fenix-1.1.1-220725.img.xz)

</div>
</div>

{% note warn EMMC Installation %}

**Images used to be flashed to onboard eMMC via Amlogic USB Burning Tool.**
Check [Upgrade Via USB Cable Documentation](/vim1/UpgradeViaUSBCable.html).

{% endnote %}

{% note warn SD/USB Installation %}

**Images used to be flashed to SD/USB storage.**
Check [Boot From Ext Media Documentation](/vim1/BootFromExtMedia.html).
Check [Write SD Image To eMMC](/vim1/HowToWriteSDImageToEmmc.html) to write the image to onboard eMMC.
{% endnote %}
