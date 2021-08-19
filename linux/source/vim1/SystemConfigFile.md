title: Ubuntu System Configuration File
---

This documentation will introduce how to use the configuration file of the Ubuntu system.

{% note warn The config file is only for Ubuntu system with Linux 4.9 kernel. %}
{% endnote %}

## Introduction

`env.txt` is located in the `/boot` directory and is an environment configuration file used to configure the functions of the Ubuntu system.
The system will read this file when it starts to set HDMI, fan, CPU frequency, etc.

## HDMI Setting

{% note info Only applicable to the firmware of the 4.9 kernel, a more general method can be used for the firmware of the mainline kernel! %}

{% endnote %}

### Auto Detect

The default setting is `yes`, it will automatically detect HDMI and set the best resolution, if it is closed, it will be set manually:

```sh
# HDMI resolution auto detection
# yes - auto detection
# no  - set HDMI resolution via 'hdmi' node
hdmi_autodetect=yes
```

Disable auto detect:

```sh
hdmi_autodetect=no
```

### HDMI Resolution Setting

In some situations HDMI resolution auto detect will not work, and you can try to setup the HDMI resolution manually.

Only when `hdmi_autodetect=no`, the changed configuration will take effect, the default is `720p`.

```sh
# HDMI mode
# Resolution Configuration
#    Symbol             | Resolution
# ----------------------+-------------
#    "480x272p60hz"     | 480x272 Progressive 60Hz
#    "480x320p60hz"     | 480x320 Progressive 60Hz
#    "480p60hz"         | 720x480 Progressive 60Hz
#    "576p50hz"         | 720x576 Progressive 50Hz
#    "720p60hz"         | 1280x720 Progressive 60Hz
#    "720p50hz"         | 1280x720 Progressive 50Hz
#    "1080p60hz"        | 1920x1080 Progressive 60Hz
#    "1080p50hz"        | 1920x1080 Progressive 50Hz
#    "1080p30hz"        | 1920x1080 Progressive 30Hz
#    "1080p24hz"        | 1920x1080 Progressive 24Hz
#    "1080i60hz"        | 1920x1080 Interlaced 60Hz
#    "1080i50hz"        | 1920x1080 Interlaced 50Hz
#    "2160p60hz"        | 3840x2160 Progressive 60Hz
#    "2160p50hz"        | 3840x2160 Progressive 50Hz
#    "2160p30hz"        | 3840x2160 Progressive 30Hz
#    "2160p25hz"        | 3840x2160 Progressive 25Hz
#    "2160p24hz"        | 3840x2160 Progressive 24Hz
#    "smpte24hz"        | 3840x2160 Progressive 24Hz SMPTE
#    "2160p60hz420"     | 3840x2160 Progressive 60Hz YCbCr 4:2:0
#    "2160p50hz420"     | 3840x2160 Progressive 50Hz YCbCr 4:2:0
#    "640x480p60hz"     | 640x480 Progressive 60Hz
#    "800x480p60hz"     | 800x480 Progressive 60Hz
#    "800x600p60hz"     | 800x600 Progressive 60Hz
#    "1024x600p60hz"    | 1024x600 Progressive 60Hz
#    "1024x768p60hz"    | 1024x768 Progressive 60Hz
#    "1280x800p60hz"    | 1280x800 Progressive 60Hz
#    "1280x1024p60hz"   | 1280x1024 Progressive 60Hz
#    "1360x768p60hz"    | 1360x768 Progressive 60Hz
#    "1440x900p60hz"    | 1440x900 Progressive 60Hz
#    "1600x900p60hz"    | 1600x900 Progressive 60Hz
#    "1600x1200p60hz"   | 1600x1200 Progressive 60Hz
#    "1680x1050p60hz"   | 1680x1050 Progressive 60Hz
#    "1920x1200p60hz"   | 1920x1200 Progressive 60Hz
#    "2560x1080p60hz"   | 2560x1080 Progressive 60Hz
#    "2560x1440p60hz"   | 2560x1440 Progressive 60Hz
#    "2560x1600p60hz"   | 2560x1600 Progressive 60Hz
#    "3440x1440p60hz"   | 3440x1440 Progressive 60Hz
hdmi=720p60hz
```

Set to `1080p`:

```sh
hdmi=1080p60hz
```

Restart the system to take effect.

## Fan Setting

{% note info Only applicable to the firmware of the 4.9 kernel %}

{% endnote %}

### Fan level

* `off` : Cooling fan is disabled.
* `low` : Cooling fan is working at low speed mode.
* `mid` : Coolinn fan is working at middle speed mode.
* `high`: Cooling fan is working at high speed mode.
* `auto`: Cooling fan is working at auto speed mode. By default, the fan speed is determined by CPU temperature.

### Change Fan Level

* Set cooling fan to `low` speed mode:

  * Edit file `/boot/env.txt` and set `fan_mode=low`.

* Set cooling fan to `mid` speed mode:

  * Edit file `/boot/env.txt` and set `fan_mode=mid`.

* Set cooling fan to `high` speed mode:

  * Edit file `/boot/env.txt` and set `fan_mode=high`.

* Set cooling fan to `auto` speed mode:

  * Edit file `/boot/env.txt` and set `fan_mode=auto`.

* Disable cooling fan:

  * Edit file `/boot/env.txt` and set `fan_mode=off`.

After edit the file, you need to save the file and reboot the board.

```bash
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```

## Framebuffer Rotate

### Check related configuration

```sh
khadas@Khadas:~$ cat /boot/env.txt | grep "fb_rotate"
fb_rotate=0
```

### Change Setting

Rotate 90 degrees:

```sh
khadas@Khadas:~$ sudo vim /boot/env.txt
[sudo] password for khadas:
```

`fb_rotate=0` change to `fb_rotate=1`.

After edit the file, you need to save the file and reboot the board.

```sh
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```

After restarting, you will see the framebuffer console rotated 90 degrees.

