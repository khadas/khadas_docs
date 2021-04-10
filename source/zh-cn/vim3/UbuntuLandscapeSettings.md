title: LCD横屏显示设置
---

TS050默认情况下是竖屏显示的，这里介绍如何旋转屏幕成横屏。

添加Xorg配置文件以及设置及桌面分辨率两步就能将TS050旋转成横屏

## Xorg配置文件

1. 创建目录`/etc/X11/xorg.conf.d/`

```sh
$ sudo mkdir -p /etc/X11/xorg.conf.d/
```

2. 创建文件`10-ts050-fbdev-rotate.conf`

```sh
$ sudo touch /etc/X11/xorg.conf.d/10-ts050-fbdev-rotate.conf 
```

3. 写入配置

```sh
Section "Device"
	Identifier "Configured Video Device"
	# Rotate off
#	Option "Rotate" "off"
	# Rotate Right / clockwise, 90 degrees
	Option "Rotate" "CW"
	# Rotate upside down, 180 degrees
#	Option "Rotate" "UD"
	# Rotate counter clockwise, 270 degrees
#	Option "Rotate" "CCW"

EndSection

Section "InputClass"
	Identifier "Coordinate Transformation Matrix"
	MatchIsTouchscreen "on"
	MatchProduct "EP0000M09"
	MatchDriver "libinput"
	# Rotate Right / clockwise, 90 degrees
	Option "CalibrationMatrix" "0 1 0 -1 0 1 0 0 1"
	# Rotate upside down, 180 degrees
#	Option "CalibrationMatrix" "-1 0 1 0 -1 1 0 0 1"
	# otate counter clockwise, 270 degrees
#	Option "CalibrationMatrix" "0 -1 1 1 0 0 0 0 1"
EndSection
```

## 分辨率设置

1. 创建目录`/etc/xdg/autostart/`

```sh
$ sudo mkdir -p /etc/xdg/autostart/
```

2. 创建配置文件`panel-setup.desktop`

```sh
$ touch /etc/xdg/autostart/panel-setup.desktop
```

3. 写入内容

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

