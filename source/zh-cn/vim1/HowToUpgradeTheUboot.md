title: 如何更新u-boot
---

我们使用[Fenix](/zh-cn/vim1/FenixScript.html)来编译Ubuntu/Debian固件。你同样可以使用它来编译u-boot debian包。

* 设置Fenix环境

```
$ source source env/setenv.sh
```

* 编译u-boot debian包

```
$ make uboot
$ make uboot-deb
```

你会在目录`build/images/debs/FENIX-VERSION/BOARD`找到生成的debian包。

**FENIX-VERSION:** 表示Fenix SDK版本号。如： **0.8.3**
**BOARD:** 表示你选择的khadas板子型号。如： **VIM3**

所以生成的debian包可能在目录`build/images/debs/FENIX-VERSION/BOARD`，包可能为：`linux-u-boot-vim3-vendor_0.8.3-2015.01_arm64.deb`

* 更新u-boot

拷贝编译好的debian到板子并安装：

```
$ sudo dpkg -i linux-u-boot-vim3-vendor_0.8.3-2015.01_arm64.deb
$ sync
$ sudo reboot
```
