title: 如何更换开机Logo
---

* 存放位置

Logo存放在`/usr/share`目录下

```shell
$ ls /usr/share/fenix/logo/logo.bmp
/usr/share/fenix/logo/logo.bmp
```

* Logo格式

图片格式要求为BMP格式,分辨率为500x500px,位深为24位.

```shell
$ file /usr/share/fenix/logo/logo.bmp
/usr/share/fenix/logo/logo.bmp: PC bitmap, Windows 3.x format, 500 x 500 x 24, image size 750002, resolution 2834 x 2834 px/m, cbSize 750056, bits offset 54
```

* 如何替换

切换到root用户

```shell
$ su
Password:
root@Khadas:/home/khadas#
```

将正确格式的Logo替换进去,重启就会看到新的Logo

```shell
root@Khadas:/home/khadas# cp ${new-logo}.bmp /usr/share/fenix/logo/logo.bmp
root@Khadas:/home/khadas# sync
root@Khadas:/home/khadas# reboot
```
