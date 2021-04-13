title: Rotate TS050
---

TS050 is portrait mode by default, here is a guide to rotate the screen to landscape mode.

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

Android will automatically rotate the system.No need to set.

</div>
<div class="tab-pane fade" id="ubud" role="tabpanel" aria-labelledby="ubud-tab">

You need to create Xorg configuration file and autostart script for setting the resolution.

1. Create Xorg configuration file

Create file `/etc/X11/xorg.conf.d/10-ts050-fbdev-rotate.conf` with the contents below:

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

2. Create Resolution setting autostart file

Create the file `/etc/xdg/autostart/panel-setup.desktop` with contents below:

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

Restart the system and the screen will automatically be configured as a landscape screen.

{% note info Note %}

The configuration above will rotate to `landscape` mode, you can also rotate to other modes, simply uncomment the mode you want.
And please note the resolution for `landscape` mode is `1920x1088`, for `portrait` mode is `1088x1920`.

{% endnote %}


{% note warn These configurations will also effect the HDMI display, so if you want to use HDMI display, you need to remove them. %}

{% endnote %}

</div>
<div class="tab-pane fade" id="ubus" role="tabpanel" aria-labelledby="ubus-tab">

Please refer to [How To Ratote Framebuffer](/vim3/HowToRotateFramebuffer.html)

</div>
</div>


