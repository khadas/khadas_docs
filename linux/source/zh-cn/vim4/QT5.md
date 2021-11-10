title: QT5
---

Ubuntu系统默认自带的QT版本是针对OpenGL桌面环境的，但是对于VIM系列来说，由于不支持桌面环境下的GPU，所以在使用时是不能用GPU进行加速的。

为了使用GPU加速，我们重新编译了QT软件包，增加了eglfs Mali GPU（fbdev）支持，这篇文档将会介绍如何使用。

{% note warn 注意 %}

* 目前QT5 eglfs Mali GPU（fbdev）仅仅支持**Ubuntu 20.04 Linux 4.9内核**，同时需要先[更新系统](UpgradeSystem.html)到最新版本。
* 仅支持Framebuffer Console模式。
* 安装这个版本的库会破坏一些对这个库有依赖的官方软件包。

{% endnote %}

## 更新系统

参考这篇[文档](UpgradeSystem.html)升级系统到最新版本。

## 安装QT5软件包

```bash
$ sudo apt update
$ sudo apt install qt5-default qtbase5-examples
$ mkdir /tmp/qt5
$ cd /tmp/qt5
$ wget https://dl.khadas.com/repos/debs/vim3/focal/qt5/libqt5gui5_5.12.8%2Bdfsg-0ubuntu2_arm64.deb
$ sudo dpkg -i libqt5gui5_5.12.8+dfsg-0ubuntu2_arm64.deb
```

## 检查

由于GPU仅仅支持`fbdev`模式，所以为了运行QT例程，必须先切换到framebuffer console模式下，对于桌面系统可以通过`Ctrl+Alt+F1`来切换到framebuffer console模式。

在运行例程之前，还需要设置如下环境变量：

```bash
$ export QT_QPA_PLATFORM=eglfs
$ export QT_QPA_EGLFS_INTEGRATION=eglfs_mali
```

**运行例程：**

```bash
$ /usr/lib/aarch64-linux-gnu/qt5/examples/opengl/qopenglwidget/qopenglwidget
```

如果一些正常，你会在显示器上看到QT例程的运行情况。更多deno请查看`/usr/lib/aarch64-linux-gnu/qt5/examples`目录。

## 触摸屏设置（仅适用于VIM3/VIM3L）

由于目前不支持双显，所以要使用TS050触摸屏，你必须先拔掉HDMI显示器。

TS050默认是`竖屏模式`，如果你要使用`横屏模式`，你可以设置如下环境变量来旋转屏幕：

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

如果你想要旋转到其他方向，可以自己修改相应的参数。

## 错误排查

在安装了这个版本的库后会破坏一些对这个库有依赖的软件包（如：`qtcreator`），导致这些包无法正常运行，这时你可以按如下方法回退到默认的版本。

```bash
$ wget http://ports.ubuntu.com/pool/universe/q/qtbase-opensource-src/libqt5gui5_5.12.8+dfsg-0ubuntu1_arm64.deb
$ sudo dpkg -i libqt5gui5_5.12.8+dfsg-0ubuntu1_arm64.deb
```

## 参考
[Qt for Embedded Linux](https://doc.qt.io/qt-5/embedded-linux.html)

