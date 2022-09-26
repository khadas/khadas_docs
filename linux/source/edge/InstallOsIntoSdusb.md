title: Install System into SD/USB Storage
---

{% note info Note %}

You can only install a SD/USB image to the SD/USB storage, if you install other images to the SD/USB storage then the image will not bootup properly.

{% endnote %}

There are several ways to install the image to a SD card or USB storage:

* [Etcher](https://www.balena.io/etcher/) got a user-friendly GUI for beginners, and is compatible with Mac, Windows and Linux. Simply select an image and it will automatically identify your external device which the image is going to be burned to. **(Recommended)**

![How to Use Etcher](/linux/images/vim1/howto_use_etcher.gif)

* `dd` on Ubuntu with command line:

```
$ sudo dd if=/path/to/image of=/dev/sdX bs=8M
```
