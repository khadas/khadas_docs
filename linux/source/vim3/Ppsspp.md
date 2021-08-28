title: PPSSPP
---

{% note warn Note %}

* Only supports **Ubuntu 20.04 Linux 4.9**, and you need to [upgrade](UpgradeSystem.html) the firmware to latest version.
* Only support Framebuffer Console mode.

{% endnote %}

## Upgrade System

Follow this [documentation](UpgradeSystem.html) to upgrade the system to latest version.

## Install PPSSPP Package

As `PPSSPP` depends on `SDL2 Mali Library`, so please follow [SDL2 Mali Library Installation](Sdl2.html) to install `SDL2 Mali Library` before install `PPSSPP`.

```sh
$ mkdir /tmp/ppsspp
$ cd /tmp/ppsspp
$ wget https://dl.khadas.com/repos/debs/vim3/focal/ppsspp/ppsspp.tgz
$ tar xvzf ppsspp.tgz
$ cd ppsspp
$ sudo dpkg -i *.deb
```

## Run

Run `launch_ppsspp.sh` to launch PPSSPP.

```sh
$ launch_ppsspp.sh
```
