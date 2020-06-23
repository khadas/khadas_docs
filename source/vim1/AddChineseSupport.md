title: Add Chinese Support
---

# Android

You can change language to `Chinese` in settings

`More Setting` --> `Device Preferences` --> `Language` --> `中文(简体)/中文(繁軆)`

# Ubuntu

English is the default language of Ubuntu. Therefore, it can't display Chinese Characters until you install the following packages:
```
$ sudo apt-get -y install language-pack-zh-* ttf-wqy-microhei language-pack-zh-han* ttf-wqy-zenhei fonts-droid-fallback
```

Install Font:
```
$ sudo apt-get -y install fonts-arphic-uming fonts-arphic-ukai
```

Setup Language:
```
$ sudo locale-gen "zh_CN.UTF-8"
$ export LC_ALL="zh_CN.utf8"
$ sudo update-locale LC_ALL="zh_CN.UTF-8" LANG="zh_CN.UTF-8" LC_MESSAGES=POSIX
$ sudo dpkg-reconfigure -f noninteractive locales
$ sudo reboot
```

*Tip: After rebooting Ubuntu, you'll see the OS in Chinese.*
