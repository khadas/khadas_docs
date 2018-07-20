title: Add Chinese Support
---

The default language of Ubuntu is English, so can't display Chinese well, you can install the following packages to support Chinese:
```
khadas@khadas:~$ sudo apt-get -y install language-pack-zh-* ttf-wqy-microhei language-pack-zh-han* ttf-wqy-zenhei fonts-droid-fallback
```

Install font:
```
khadas@khadas:~$ sudo apt-get -y install fonts-arphic-uming fonts-arphic-ukai
```

Setup Language:
```
hadas@khadas:~$ sudo locale-gen "zh_CN.UTF-8"
hadas@khadas:~$ sudo export LC_ALL="zh_CN.utf8"
hadas@khadas:~$ sudo update-locale LC_ALL="zh_CN.UTF-8" LANG="zh_CN.UTF-8" LC_MESSAGES=POSIX
hadas@khadas:~$ sudo dpkg-reconfigure -f noninteractive locales
hadas@khadas:~$ sudo reboot
```

After reboot the system you will see the Chinese language.
