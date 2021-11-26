title: Upgrade System
---

{% note warn Note %}

Only for official released Ubuntu images, check [here](https://dl.khadas.com/Firmware/) for official images.

{% endnote %}

If you already have our official released Ubuntu image in the eMMC, then you can follow the instructions to upgrade your system to latest release.

```sh
$ sudo apt update
$ sudo apt full-upgrade
$ sudo do-fenix-full-upgrade
$ sync
$ sudo reboot
```

{% note info Troubleshooting %}

If you get the errors below:

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

You can follow the instructions below to fix it:

```bash
$ sudo sed -i 's/https/http/g' /etc/apt/sources.list.d/fenix.list
$ sudo apt update
$ sudo apt full-upgrade
$ sudo do-fenix-full-upgrade
$ sync
$ sudo reboot
```

{% endnote %}
