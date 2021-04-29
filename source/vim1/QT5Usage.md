title: QT5 Usage
---

The default QT packages from Ubuntu official are built with OpenGL Desktop support, but for VIMs, there don't have Mali GPU driver under X11, so you can't use QT with GPU.

In order to use QT with GPU (fbdev), we have rebuilt the QT packages with eglfs Mali GPU support, this documentation will describe how to use QT5 with eglfs Mali GPU (fbdev) under Ubuntu.

{% note warn Note %}

The QT5 with eglfs Mali GPU (fbdev) only supports **Ubuntu 20.04 Linux 4.9**, and you need to [upgrade](/vim1/HowToUpgradeTheSystem.html) the firmware to latest version.

{% endnote %}

## Install QT5 Packages

```bash
$ sudo apt update
$ sudo apt install qt5-default qtbase5-examples
```

## Check

As the GPU only support `fbdev` mode, so you have to switch to framebuffer console to run the demo, for desktop image, you can use `Ctrl+Alt+F1` to switch to framebuffer console mode.

Before running the demo, you need to setup the environment variables below:

```bash
$ export QT_QPA_PLATFORM=eglfs
$ export QT_QPA_EGLFS_INTEGRATION=eglfs_mali
```

**Runing demo:**

```bash
$ /usr/lib/aarch64-linux-gnu/qt5/examples/opengl/qopenglwidget/qopenglwidget
```

If every thing works you will see the QT demo running on screen. For more demos, please check `/usr/lib/aarch64-linux-gnu/qt5/examples`.

## Setup for TS050 Touchscreen (Only for VIM3/VIM3L)

If you want to run the QT demo on TS050 touchscreen you need to remove the HDMI cable first.

The TS050 touchscreen is `portrait mode` by default, if you want to use the QT under `landscape mode` you need to setup the environment variables below to rotate the screen and touchscreen:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim3-tab" data-toggle="tab" href="#vim3" role="tab" aria-controls="vim3" aria-selected="true">VIM3</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3l-tab" data-toggle="tab" href="#vim3l" role="tab" aria-controls="vim3l" aria-selected="false">VIM3L</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

```bash
$ export QT_QPA_EGLFS_ROTATION=90
$ export QT_QPA_EGLFS_DISABLE_INPUT=1
$ export QT_QPA_EVDEV_TOUCHSCREEN_PARAMETERS=/dev/input/event3:rotate=90
$ export QT_QPA_GENERIC_PLUGINS=evdevtouch:/dev/input/event3
```

</div>
<div class="tab-pane fade show" id="vim3l" role="tabpanel" aria-labelledby="vim3l-tab">

```bash
$ export QT_QPA_EGLFS_ROTATION=90
$ export QT_QPA_EGLFS_DISABLE_INPUT=1
$ export QT_QPA_EVDEV_TOUCHSCREEN_PARAMETERS=/dev/input/event4:rotate=90
$ export QT_QPA_GENERIC_PLUGINS=evdevtouch:/dev/input/event4
```

</div>
</div>

For other orientation rotation, you can change them yourself.

## See Also
[Qt for Embedded Linux](https://doc.qt.io/qt-5/embedded-linux.html)

