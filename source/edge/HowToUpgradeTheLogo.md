title: How To Upgrade The Logo
---


We use [Fenix](/vim1/FenixScript.html) to build Ubuntu/Debian images, The default logo is  `archives/logo/Rockchip/logo.img`, so you can use your own logo image to replace the default one.

* Build the logo image

Use yor bmp file to replace the defaut logo file in linux directory.

```
$ cp yourlogo.bmp logo.bmp
$ cp youtlogo.bmp logo_kernel.bmp
```

Build the logo image:

```
$ ./scripts/pack_logo.sh
```

You will get the logo image `logo.img` in linux directory. You can use this logo image to replace the default one in fenix SDK.

You can also upgade the logo directly in the ready to use image. Copy logo.img to board and update the logo:

```
$ sudo dd if=logo.img of=/dev/mmcblk1p5
$ sync
```

*Note: The NMP file should be 24 bpp.*
