title: 从SPI Flash启动系统
---

Khadas Edge包含一个16 MiB的SPI Flash， 可以用于启动系统。这篇文章介绍如何从SPI Flash启动系统。

## 编译SPI Flash Uboot
SPI flash u-boot和eMMC/SD的不同。建议使用[Fenix脚本](https://github.com/khadas/fenix)来编译u-boot，非常方便。

**假设你已经安装了基本的编译环境，如果没有，请参考[Fenix使用说明](/zh-cn/edge/FenixScript.html)。**

* 设置Fenix环境:

```sh
$ cd fenix
$ source env/setenv.sh
```
选择`Edge`开发板。

* 编译U-boot

```sh
$ make uboot
```
如果编译成功，你会在`fenix/u-boot`目录下看到SPI flash u-boot `u-boot-spi.bin`。

## 烧录U-boot到SPI Flash
拷贝`u-boot-spi.bin`到TF卡或U盘，并插入到Edge开发板。

[设置串口调试工具](/zh-cn/edge/SetupSerialTool.html)并进入u-boot命令行。

### 加载U-boot到DDR

* 从TF卡加载u-boot:

```sh
kedge# load mmc 1 $kernel_addr_r u-boot-spi.bin
```
* 从U盘加载u-boot:

```sh
kedge# usb start
kedge# load usb 0 $kernel_addr_r u-boot-spi.bin
```

### 烧录

```
kedge# sf probe
kedge# sf erase 0 +$filesize
kedge# sf write $kernel_addr_r 0 $filesize
kedge# reset
```

{% note info 注意 %}
烧录过程会持续大约3分钟，请耐心等待。
{% endnote %}

重启之后，就会从SPI Flash启动系统。

## 参考
[RK3399启动序列](http://opensource.rock-chips.com/wiki_Boot_option)
