title: PPSSPP
---

{% note warn 注意 %}

* 仅仅支持 **Ubuntu 22.04 Linux 5.4**，同时需要[升级系统](upgrade_system.html)到最新版本。

{% endnote %}

## 升级系统

参考[文档](upgrade_system.html)升级系统到最新版本。

## 安装PPSSPP包

```sh
$ sudo apt update
$ sudo apt install libsdl2-2.0-0
$ mkdir /tmp/ppsspp
$ cd /tmp/ppsspp
$ wget XXXXXXXX   ## TODO
$ sudo dpkg -i *.deb
```

## 运行

运行`launch_ppsspp.sh`启动PPSSPP。

```sh
$ export SDL_VIDEODRIVER=wayland
$ launch_ppsspp.sh
```
