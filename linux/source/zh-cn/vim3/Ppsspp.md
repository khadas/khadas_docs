title: PPSSPP使用说明
---

{% note warn 注意 %}

* 目前仅仅支持**Ubuntu 20.04 Linux 4.9内核**，同时需要先[更新系统](UpgradeSystem.html)到最新版本。
* 仅支持Framebuffer Console模式。

{% endnote %}

## 更新系统

参考这篇[文档](UpgradeSystem.html)升级系统到最新版本。


## 安装PPSSPP

由于`PPSSPP`依赖`SDL2 Mali库`，因此在安装`PPSSPP`前请先参考[SDL2 Mali库安装](Sdl2.html)文档安装`SDL2 Mali库`。

```sh
$ mkdir /tmp/ppsspp
$ cd /tmp/ppsspp
$ wget https://dl.khadas.com/repos/debs/vim3/focal/ppsspp/ppsspp.tgz
$ tar xvzf ppsspp.tgz
$ cd ppsspp 
$ sudo dpkg -i *.deb
```


## 运行

运行`launch_ppsspp.sh`就能运行起来模拟器。

```sh
$ launch_ppsspp.sh
```


