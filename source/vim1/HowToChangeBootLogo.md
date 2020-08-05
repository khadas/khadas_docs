title: How To Change Boot Logo
---

* Where is Logo

Logo is stored in the `/usr/share` directory.

```shell
$ ls /usr/share/fenix/logo/logo.bmp
/usr/share/fenix/logo/logo.bmp
```

* Logo format

The image format requires a BMP format with a resolution of 500x500px and the Bit-Depth of 24 bits.

```shell
$ file /usr/share/fenix/logo/logo.bmp
/usr/share/fenix/logo/logo.bmp: PC bitmap, Windows 3.x format, 500 x 500 x 24, image size 750002, resolution 2834 x 2834 px/m, cbSize 750056, bits offset 54
```

* How To Change

Switch to root user

```shell
$ su
Password:
root@Khadas:/home/khadas#
```

Replace the logo in the correct format, and you will see the new logo after restarting

```shell
root@Khadas:/home/khadas# cp ${new-logo}.bmp /usr/share/fenix/logo/logo.bmp
root@Khadas:/home/khadas# sync
root@Khadas:/home/khadas# reboot
```
