title: 如何更新Logo
---


我们使用[Fenix](/zh-cn/vim1/FenixScript.html)来编译Ubuntu/Debian固件。默认logo为`archives/logo/Rockchip/logo.img`，你可以自己编译logo来替换默认的。

* 编译logo镜像

使用你自己的bmp文件来替换默认的文件，文件在linux目录下。

```
$ cp yourlogo.bmp logo.bmp
$ cp youtlogo.bmp logo_kernel.bmp
```

编译logo镜像

```
$ ./scripts/pack_logo.sh
```

执行过后会在linux目录下得到新的镜像`logo.img`，你可以使用这个文件替换SDK里面的默认logo镜像。

你还可以直接在固件中更新logo镜像。拷贝`logo.img`到板子并执行如下命令更新logo。


```
$ sudo dd if=logo.img of=/dev/mmcblk1p5
$ sync
```

*注意：Logo镜像需要为24位位深。*
