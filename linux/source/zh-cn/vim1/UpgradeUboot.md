title: 更新U-Boot
---

## 编译U-Boot

参考文档[编译U-Boot](BuildUboot.html)来编译编译U-Boot。

## 在Linux下更新

拷贝编译好的Debian包到板子并安装：

```
$ sudo dpkg -i linux-u-boot-vim3-vendor_1.0.7-2015.01_arm64.deb
$ sync
$ sudo reboot
```

## 在U-Boot命令行下更新

{% note warn %}
仅仅适用于烧写芯片原厂U-Boot到eMMC。
{% endnote %}

我们也可以在U-Boot命令行下更新，你需要先设置[串口](SetupSerialTool.html)。

编译好的U-Boot在：`build/u-boot/fip/_tmp/u-boot.bin`。

* 板子上电，并进入U-Boot命令行
* 拷贝`u-boot.bin`到U盘
* 把U盘插入到板子上
* 执行下面的命令更新U-Boot

```
kvim3#usb_update bootloader u-boot.bin
kvim3#reboot
```
## 参考
[编译U-Boot](BuildUboot.html)
