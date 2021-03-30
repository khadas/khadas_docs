title: Khadas VIM2 Ubuntu Firmware Release Notes
---

{% note info For OTA Releases %}

Please check [How To Upgrade The System](/vim2/HowToUpgradeTheSystem.html) to upgrade the system to latest OTA release.

{% endnote %}


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="4.9-tab" data-toggle="tab" href="#4.9" role="tab" aria-controls="4.9" aria-selected="true">Linux 4.9</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="mainline-tab" data-toggle="tab" href="#mainline" role="tab" aria-controls="mainline" aria-selected="false">Mainline</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="4.9" role="tabpanel" aria-labelledby="4.9-tab">


{% note warn VIM2 Only support Ubuntu 18.04 for Linux 4.9. %}

{% endnote %}

--------------------------------------------------------------------------------------------------
**V1.0.4-210330: (OTA Release)**

1. fix watchdog
2. add ubuntu splash support
3. improve loglevel setup
4. fix board dependencies

--------------------------------------------------------------------------------------------------
**V1.0.3-210317: (OTA Release)**

1. enable more governors
2. add hwmon support for amlogic_thermal
3. fix ge2d phy source
4. add usb otg device overlays descriptions
5. add kernel options
6. add usb gadget setup
7. fix board package dependencies issue
8. fix desktop package dependencies issue

--------------------------------------------------------------------------------------------------
**V1.0-210112: (OTA Release)**

1. Linux 4.9.241
2. add vfm grabber driver for hardware decoding
3. update ge2d drivers
4. update ge2d libraries & headers
5. update ion libraries & headers

--------------------------------------------------------------------------------------------------
**V0.9.8-201201: (OTA Release)**

1. Linux 4.9.241
2. Add usb vendor id as DSD-capable for Khadas devices
3. Enable some joysticks
4. Fix mcu
5. Fix kplayer sound issue
6. Fix gstreamer sound issue
7. Added H264/H265 encoder libraries
8. Fix wiringpi

--------------------------------------------------------------------------------------------------
**V191231: (Base Release)**
1. linux 4.9.206
2. fixed eMMC image bootup delay about 30S
3. added HDMI resolution auto detection
4. added HDMI resolution UI setting menu (Applications->Settings->HDMI Resolution Setting)
5. added kplayer command line player support
6. added gsteramer support
7. added opencv support
8. fixed WiringPi GPOIO AO domain
9. added WiringPi python3 support
10. preinstall firefox browser (has better performance for youtube video playback than chromium)
11. added system information UI menu (Applications->System->System Information)
12. added more compress/extract method
13. added cooling FAN UI setting menu (Applications->Settings->FAN Setting)
14. added WOL UI setting menu (Applications->Settings->Wake On LAN Setting)
15. load bmp logo from rootfs partition

--------------------------------------------------------------------------------------------------
**V190830:**

1. kernel update to 4.9.190
2. add initial support for OTA
3. add u-boot package support
4. add install SD image to eMMC script support
5. switch kodi to 18.3 stable version
6. add initial support for WiringPi
7. add V14 support
8. update ubuntu rootfs

--------------------------------------------------------------------------------------------------
**V190604:**

1. update kernel to 4.9.179
2. add Kodi (19.0-ALPHA1) support for VIM1
3. fixup bluetooth issue
4. fixup RTC issue
5. update ubuntu rootfs

Known issues:
1. Kodi drags progress bar will cause the system to crash

</div>
<div class="tab-pane fade show" id="mainline" role="tabpanel" aria-labelledby="mainline-tab">

{% note warn VIM2 Only support Ubuntu 20.04 for Mainline Linux. %}

{% endnote %}

--------------------------------------------------------------------------------------------------
**V0.9.1-20200602: (OTA Release)**

1. Linux 5.7.0

--------------------------------------------------------------------------------------------------
**V20200530: (Base Release)**

1. Initial support for Ubuntu 20.04 Focal
2. U-boot 2020.04
3. Linux 5.7-rc7

</div>
</div>
