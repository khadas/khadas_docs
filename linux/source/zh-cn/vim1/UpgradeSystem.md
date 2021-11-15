title: 升级固件到最新版本
---

{% note warn 注意 %}

仅仅适用于我们官方发布的Ubuntu固件，访问[这里](https://dl.khadas.com/Firmware/)获取固件。

{% endnote %}

如果你的板子上已经运行的是我们官方发布的Ubuntu固件，那么你可以通过如下命令升级系统到最新版本。

```sh
$ sudo apt update
$ sudo apt full-upgrade
$ sudo do-fenix-full-upgrade
$ sync
$ sudo reboot
```

{% note info 错误排查 %}

如果碰到了如下错误：

```bash
khadas@Khadas:~$ sudo apt update
Ign:1 https://dl.khadas.com/repos/vim3 focal InRelease
Hit:2 http://ports.ubuntu.com focal InRelease
Hit:3 http://ports.ubuntu.com focal-security InRelease
Hit:4 http://ports.ubuntu.com focal-updates InRelease
Hit:5 http://ports.ubuntu.com focal-backports InRelease
Err:6 https://dl.khadas.com/repos/vim3 focal Release
  Certificate verification failed: The certificate is NOT trusted. The certificate chain uses expired certificate.  Could not handshake: Error in the certificate verification. [IP: 135.181.182.36 443]
Reading package lists... Done
E: The repository 'https://dl.khadas.com/repos/vim3 focal Release' does not have a Release file.
N: Updating from such a repository can't be done securely, and is therefore disabled by default.
N: See apt-secure(8) manpage for repository creation and user configuration details.
```

可以使用如下命令修复：

```bash
$ sudo sed -i 's/https/http/g' /etc/apt/sources.list.d/fenix.list
$ sudo apt update
$ sudo apt full-upgrade
$ sudo do-fenix-full-upgrade
$ sync
$ sudo reboot
```

{% endnote %}
