title: Install OS into SD/USB Media
---

{% note info Note %}

You can only install an SD/USB image into an SD/USB flash drive. If you install other images to an SD/USB flash drive, then the image will not bootup correctly.

{% endnote %}

There are several ways to install the image into an SD card or USB storage:

* [Etcher](https://www.balena.io/etcher/) has a user-friendly GUI for beginners, and it is compatible with Mac, Windows and Linux. Simply select an image and it will automatically identify your flash drive and burn the image. **(Recommended)**

![How to Use Etcher](/linux/images/vim1/howto_use_etcher.gif)

* Alternatively, utilise the `dd` command from within the Ubuntu Terminal:

```
$ sudo dd if=/path/to/image of=/dev/sdX bs=8M
```
