title: 增加中文支持
---

## Android

你可以在设置里将语言切换成中文。

`More Setting` --> `Device Preferences` --> `Language` --> `中文(简体)/中文(繁軆)`。

## Ubuntu


目前发布的Ubuntu固件都是英文版本的，显示汉字会出现乱码，这篇文档介绍如何在Ubuntu下安装中文语言包，需要安装以下软件包：
```
khadas@khadas:~$ sudo apt-get -y install language-pack-zh-* ttf-wqy-microhei language-pack-zh-han* ttf-wqy-zenhei fonts-droid-fallback
```

安装字体：

```
khadas@khadas:~$ sudo apt-get -y install fonts-arphic-uming fonts-arphic-ukai
```

设置语言：

```
hadas@khadas:~$ sudo locale-gen "zh_CN.UTF-8"
hadas@khadas:~$ sudo export LC_ALL="zh_CN.utf8"
hadas@khadas:~$ sudo update-locale LC_ALL="zh_CN.UTF-8" LANG="zh_CN.UTF-8" LC_MESSAGES=POSIX
hadas@khadas:~$ sudo dpkg-reconfigure -f noninteractive locales
hadas@khadas:~$ sudo reboot
```

安装完后重启就会看到中文显示了。
