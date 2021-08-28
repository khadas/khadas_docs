title: 更新U-Boot
---

## 在Linux下升级

我们使用[Fenix](FenixScript.html)来编译Ubuntu/Debian固件。你同样可以使用它来编译u-boot debian包。

* 设置Fenix环境

```
$ source env/setenv.sh
```

* 编译u-boot debian包

```
$ make uboot
$ make uboot-deb
```

你会在目录`build/images/debs/FENIX-VERSION/BOARD`找到生成的debian包。

**FENIX-VERSION:** 表示Fenix SDK版本号。如： **1.0.5**
**BOARD:** 表示你选择的khadas板子型号。如： **Edge**

所以生成的debian包可能在目录`build/images/debs/FENIX-VERSION/BOARD`，包可能为：`linux-u-boot-edge-mainline_1.0.5-v2021.04_arm64.deb`

* 更新u-boot

拷贝编译好的debian包到板子并安装：

```
$ sudo dpkg -i linux-u-boot-edge-mainline_1.0.5-v2021.04_arm64.deb
$ sync
$ sudo reboot
```

## 在U-Boot命令行下升级

我们也可以在U-Boot命令行下升级，你需要先设置[串口](SetupSerialTool.html)。

使用 [Fenix](FenixScript.html)来编译U-Boot：

```
$ make uboot
```

编译好的U-Boot在：`u-boot/fip/_tmp/u-boot.bin`。

* 板子上电，并进入y-boot命令行
* 拷贝`u-boot.bin`到U盘
* 把U盘插入到板子上
* 执行下面的命令升级u-boot

```
kedge# usb_update bootloader u-boot.bin
kedge# reboot
```

