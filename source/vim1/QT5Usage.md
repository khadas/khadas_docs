title: QT5 Usage
---

{% note info This document describes how to use QT under VIMs Ubuntu.%}

{% endnote %}

{% note warn %}

The library only supports Ubuntu 20.04, and the firmware needs to be [upgraded](https://docs.khadas.com/vim3/HowToUpgradeTheSystem.html) to the latest version.

{% endnote %}

## Install

```bash
$ sudo apt update
$ sudo apt install qt5-default qtbase5-examples
```

{% note info %}

If there is an error in installation, please confirm whether you have upgraded to the latest version of firmware. If you have not upgraded to the latest version, please re-burn the firmware and try again.

{% endnote %}

## Run

{% note info %}

Under desktop firmware, it can be used under framebuffer (Ctrl+Alt+F1 enters, Ctrl+Alt+F7 exits). it is recommended to use it under server.

{% endnote %}

**Set the following environment before running**

```bash
$ export QT_QPA_PLATFORM=eglfs
$ export QT_QPA_EGLFS_INTEGRATION=eglfs_mali
```

**Runing demo**

```bash
$ /usr/lib/aarch64-linux-gnu/qt5/examples/opengl/qopenglwidget/qopenglwidget
```

## More

The TS050 touch screen can also be used under the desktop firmware (the HDMI plug needs to be unplugged)
On this basis, the TS050 touch screen can be adjusted to rotate the screen display. Routine is as follows:

```bash
$ export QT_DEBUG_PLUGINS=1
$ export QT_QPA_EGLFS_ROTATION=90
$ export QT_QPA_EGLFS_DISABLE_INPUT=1
$ export QT_QPA_EVDEV_TOUCHSCREEN_PARAMETERS=/dev/input/event3:rotate=90
$ export QT_QPA_GENERIC_PLUGINS=evdevtouch:/dev/input/event3
```

The example above is to rotate the display of the touch screen by 90 degrees, or try different angles, just change the 90 in the second paragraph to the corresponding 0-360.
