title: How to set HDMI resolution
---

## Modified by configuration file

### Switch to root user

* Switch to the `root` user, ordinary users do not have sufficient permission.

```shell
khadas@Khadas:~$ su
Password:
root@Khadas:/home/khadas#
```

* open configuration file

```shell
root@Khadas:/home/khadas# vim /boot/env.txt
```

### modified configuration file

* Set automatic recognition as `no`

```shell
hdmi_autodetect=yes --> hdmi_autodetect=no
```

* Select a resolution in the list, example: select `1080p60hz`.

```shell
hdmi=1080p60hz
```

Restart will take effect

## Apply settings via `HDMI Resolution`

### open application

Find `HDMI Resolution` in the list of system applications.Find `HDMI Resolution` in the list of system applications.

![gnome-HDMI-application](/images/vim1/gnome-HDMI-application.png)

Then open it.

### Set resolution

![gnome-HDMI-setting](/images/vim1/gnome-HDMI-setting.png)

Choose a resolution you need, then choose save,

![gnome-HDMI-save](/images/vim1/gnome-HDMI-save.png)

The system will automatically log out and the resolution setting will take effect
