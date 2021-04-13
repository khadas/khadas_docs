title: TS050屏幕旋转
---

TS050默认情况下是竖屏显示的，这里介绍如何旋转屏幕成横屏。


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#and" role="tab" aria-controls="and" aria-selected="true">Android</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#ubud" role="tab" aria-controls="ubud" aria-selected="false">Ubuntu Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#ubus" role="tab" aria-controls="ubus" aria-selected="false">Ubuntu Server</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="and" role="tabpanel" aria-labelledby="and-tab">


Android系统会自动旋转，不需要设置。

</div>
<div class="tab-pane fade" id="ubud" role="tabpanel" aria-labelledby="ubud-tab">


需要增加Xorg配置文件和开机启动设置分辨率脚本。

1. 创建Xorg配置文件

创建文件`/etc/X11/xorg.conf.d/10-ts050-fbdev-rotate.conf`包含如下内容：

```sh
Section "Device"
    Identifier "Configured Video Device"
    # Rotate off
#   Option "Rotate" "off"
    # Rotate Right / clockwise, 90 degrees
    Option "Rotate" "CW"
    # Rotate upside down, 180 degrees
#   Option "Rotate" "UD"
    # Rotate counter clockwise, 270 degrees
#   Option "Rotate" "CCW"

EndSection

Section "InputClass"
    Identifier "Coordinate Transformation Matrix"
    MatchIsTouchscreen "on"
    MatchProduct "EP0000M09"
    MatchDriver "libinput"
    # Rotate Right / clockwise, 90 degrees 
    Option "CalibrationMatrix" "0 1 0 -1 0 1 0 0 1"
    # Rotate upside down, 180 degrees
#   Option "CalibrationMatrix" "-1 0 1 0 -1 1 0 0 1"
    # otate counter clockwise, 270 degrees 
#   Option "CalibrationMatrix" "0 -1 1 1 0 0 0 0 1"
EndSection
```

2. 增加分辨率设置启动脚本

创建文件`/etc/xdg/autostart/panel-setup.desktop`包含以下内容：

```sh
[Desktop Entry]
Version=1.0
Name=pixel
Exec=xrandr --output "default" --mode "1920x1088"
Terminal=false
Type=Application
Categories=
GenericName=
X-GNOME-Autostart-Phase=Initialization
X-KDE-autostart-phase=1
NoDisplay=true
```

重启系统，屏幕就会自动配置成横屏。

{% note info Note %}

上面的配置是旋转到`横屏`模式，你同样可以设置旋转到其他模式，只需要取消注释对应的模式即可。 
还有一点要注意就是分辨率的设置，如果是`横屏`，分辨率要设置为`1920x1088`，如果是`竖屏`，分辨率要设置为`1088x1920`。

{% endnote %}


{% note warn 这些配置同样会影响HDMI显示，如果你想要用HDMI显示，那么需要移除这些配置。 %}

{% endnote %}

</div>
<div class="tab-pane fade" id="ubus" role="tabpanel" aria-labelledby="ubus-tab">

请参考[如何旋转framebuffer](/zh-cn/vim3/HowToRotateFramebuffer.html)

</div>
</div>

