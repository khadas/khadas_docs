title: QT的用法
---

## 准备

* 使用ubuntu固件的VIM1/2/3一个

这篇文档介绍如何在VIMs Ubuntu下使用QT。

## 安装

注意：该库只支持Ubuntu 20.04，且需要将固件[升级](https://docs.khadas.com/zh-cn/vim3/HowToUpgradeTheSystem.html)到最新版本

```bush
$ sudo apt update
$ sudo apt install qt5-default qtbase5-examples
```

若安装出现错误，请确认是否有升级到最新版本固件。若无升级到最新版本，请重新烧录固件后重试。

## 运行

在桌面固件下可在framebuffer下使用（Ctrl+Alt+F1进入，Ctrl+Alt+F7退出）建议是在server下使用。

**在运行前需要设置下面的环境**

```bush
$ export QT_QPA_PLATFORM=eglfs
$ export QT_QPA_EGLFS_INTEGRATION=eglfs_mali
```

运行例程

```bush
$ /usr/lib/aarch64-linux-gnu/qt5/examples/opengl/qopenglwidget/qopenglwidget
```

## 其他

在桌面固件下也可使用TS050触摸屏使用（需将HDMI插头拔出）
在此基础上，可对TS050触摸屏做出旋转屏幕显示的调整设置。例程如下：

```bush
$ export QT_DEBUG_PLUGINS=1
$ export QT_QPA_EGLFS_ROTATION=90
$ export QT_QPA_EGLFS_DISABLE_INPUT=1
$ export QT_QPA_EVDEV_TOUCHSCREEN_PARAMETERS=/dev/input/event3:rotate=90
$ export QT_QPA_GENERIC_PLUGINS=evdevtouch:/dev/input/event3
```

以上的例子为将触摸屏的显示旋转90度，也可尝试不同的角度，只需将第二段的90改成对应的0-360即可。
