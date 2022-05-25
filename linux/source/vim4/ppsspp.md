title: PPSSPP
---

{% note warn Note %}

* Only supports **Ubuntu 22.04 Linux 5.4**, and you need to [upgrade](upgrade_system.html) the system to latest version.

{% endnote %}

## Upgrade System

Follow this [documentation](upgrade_system.html) to upgrade the system to latest version.

## Install PPSSPP Package

```sh
$ sudo apt update
$ sudo apt install libsdl2-2.0-0
$ mkdir /tmp/ppsspp
$ cd /tmp/ppsspp
$ wget XXXXXXXX   ## TODO
$ sudo dpkg -i *.deb
```

## Run

Run `launch_ppsspp.sh` to launch PPSSPP.

```sh
$ export SDL_VIDEODRIVER=wayland
$ launch_ppsspp.sh
```
