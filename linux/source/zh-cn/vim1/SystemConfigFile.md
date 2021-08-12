title: Ubuntu系统配置文件使用说明
---

这边文档将介绍如何使用Ubuntu系统的配置文件来配置系统功能。

{% note warn 仅仅适用于Ubuntu Linux 4.9内核固件。 %}
{% endnote %}

## 介绍

`env.txt`位于`/boot`目录下，是用于配置Ubuntu系统功能的环境配置文件，系统在启动时会读取这个文件，设置HDMI、风扇、CPU频率等。

## HDMI设置

{% note info 仅适用与4.9内核的固件，对于主线内核的固件可以使用更加通用的方法！ %}

{% endnote %}

### 自动检测

默认设置为`yes`，会自动检测HDMI并设置最佳分辨率，关闭则为手动设置。

```sh
# HDMI resolution auto detection
# yes - auto detection
# no  - set HDMI resolution via 'hdmi' node
hdmi_autodetect=yes
```

关闭自动检测：

```sh
hdmi_autodetect=no
```

### 手动设置HDMI分辨率

在某些情况下，由于兼容性问题，自动检测HDMI分辨率可能会失效，这时你可以采用手动设置HDMI分辨率的方法。

只有当`hdmi_autodetect=no`时，改配置才会生效，默认为`720p`。

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

例如，修改分辨率为`1080p`：

```sh
hdmi=1080p60hz
```

保存重启系统就会生效。


## 风扇设置

{% note info 仅适用与4.9内核的固件 %}

{% endnote %}


### 风扇工作模式

风扇有5种工作模式：
* `off`: 风扇关闭。
* `low`: 风扇工作在低速模式。
* `mid`: 风扇工作在中等速度模式。
* `high`: 风扇工作在高速模式。
* `auto`: 风扇工作在自动调节速度模式，根据温度自动调节速度，这个是默认的工作模式。

### 修改风扇设置

* 设置风扇低速模式

  * 编辑`/boot/env.txt`设置`fan_mode=low`。

* 设置风扇中等速度模式

  * 编辑`/boot/env.txt`设置`fan_mode=mid`。

* 设置风扇高速模式

  * 编辑`/boot/env.txt`设置`fan_mode=high`。

* 设置风扇自动调节速度模式

  * 编辑`/boot/env.txt`设置`fan_mode=auto`。

* 关闭风扇

  * 编辑`/boot/env.txt`设置`fan_mode=off`。

编辑完后记得保存文件并重启板子。

```bash
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```


## Framebuffer旋转设置

### 查看相关配置

```sh
khadas@Khadas:~$ cat /boot/env.txt | grep "fb_rotate"
fb_rotate=0
```

### 修改配置


旋转90度：

```sh
khadas@Khadas:~$ sudo vim /boot/env.txt
[sudo] password for khadas:
```

`fb_rotate=0`修改为`fb_rotate=1`。

编辑完后记得保存文件并重启板子。

```sh
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```

重启以后就会看到framebuffer console旋转了90度。

