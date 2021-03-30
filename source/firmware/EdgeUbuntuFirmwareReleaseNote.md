title: Khadas Edge Ubuntu Firmware Release Notes
---

{% note warn For OTA Releases %}

Please check [How To Upgrade The System](/edge/HowToUpgradeTheSystem.html) to upgrade the system to latest release.

{% endnote %}


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="4.4-tab" data-toggle="tab" href="#4.4" role="tab" aria-controls="4.4" aria-selected="true">Linux 4.4</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mainline-tab" data-toggle="tab" href="#mainline" role="tab" aria-controls="mainline" aria-selected="false">Mainline</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="4.4" role="tabpanel" aria-labelledby="4.4-tab">

{% note warn Edge Only support Ubuntu 18.04 for Linux 4.4. %}

{% endnote %}

-------------------------------------------------------------------
**V20200110: (Base Release)**

1. updated kernel to 4.4.194
2. added fenix updater package
3. fixed WiringPi
4. added WiringPi Python3 package
5. fixed u-boot installation
6. fixed RT5651 codec
7. enabled SPDIF output
8. added pulseaudio default configration
9. added CEC support for Kodi
10. preinstall firefox browser
11. added system information UI menu
12. added more compress/extract method
13. added cooling FAN UI setting menu
14. added WOL UI setting menu

-------------------------------------------------------------------
**V20190830:**

1. Update kernel to 4.4.179
2. Update loader
3. Add initial support for OTA
4. Fixup auto upgrade issue
5. Update ubuntu rootfs

-------------------------------------------------------------------
**V20190116:**

1. Add Kodi support
2. Update loader, fixup LPDDR4 issue

-------------------------------------------------------------------
**V20181225:**

1. Add docker support
2. Add QT5 player

-------------------------------------------------------------------
**V20181115:**

1. Update zram configuration
2. Increasing DMA block memory allocation to 2048
3. Add configurations for iotop

-------------------------------------------------------------------
**V20181102:**

1. Fixup DP display
2. Fixup HDMI & DP hotplug issue

-------------------------------------------------------------------
**V20181012:**

1. support new cooling FAN

-------------------------------------------------------------------
**V20180920:**

1. Add X11 GPU support
2. Add gstreamer with hardware acceleration support
3. Add Chromium WebGL support
4. Add Chromium video play with hardware acceleration support

</div>
<div class="tab-pane fade show" id="mainline" role="tabpanel" aria-labelledby="mainline-tab">

{% note warn Edge Only support Ubuntu 20.04 for Mainline Linux. %}

{% endnote %}

-------------------------------------------------------------------
**V0.9.1-20200602: (Base Release)**

1. Initial support for Ubuntu 20.04 Focal
2. U-boot 2020.04
3. Linux 5.7.0

</div>
</div>
