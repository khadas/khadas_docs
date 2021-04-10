title: Ubuntu Landscape Settings
---

TS050 is displayed in portrait mode by default, here is how to rotate the screen to landscape mode.

Adding Xorg configuration files, setting and desktop resolution can rotate TS050 to landscape in two steps

## Xorg configuration file

1. Create the directory `/etc/X11/xorg.conf.d/`

```sh
$ sudo mkdir -p /etc/X11/xorg.conf.d/
```

2. Create file `10-ts050-fbdev-rotate.conf`

```sh
$ sudo touch /etc/X11/xorg.conf.d/10-ts050-fbdev-rotate.conf 
```

3. Write configuration,

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

## Resolution setting

1. Create the directory `/etc/xdg/autostart/`

```sh
$ sudo mkdir -p /etc/xdg/autostart/
```

2. Create file `panel-setup.desktop`

```sh
$ touch /etc/xdg/autostart/panel-setup.desktop
```

3. Write configuration,

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

