title: 如何使用Device Tree Overlay
---

从固件[V0.9.3-20200814](https://forum.khadas.com/t/vim3-vim3l-ubuntu-20-04-linux-4-9-v0-9-3-20200814-ota-release/9205)开始增加了Device Tree Overlays。
你可以通过编辑文件`/boot/env.txt`来使能或者禁止某些外设。

{% note info 这篇文档以Edge为例介绍如何使用Device Tree Overlay。%}

{% endnote %}

## 如何使用

在文件`/boot/env.txt`中你可以看到关于**Edge** Device Tree Overlay的配置，如下：

```bash
# Device Tree Overlays                                                                                       
# i2c2      -- Enable I2C2 (GPIO header PIN25 && PIN26)
# spi3      -- Enable SPI3 (GPIO header PIN15 && PIN16 && PIN22 && PIN23)
# i2s0      -- Enable I2s0 (GPIO header PIN29 && PIN31 && PIN32 && PIN33 && PIN35 && PIN36 && PIN37 && PIN38)
# onewire   -- Enable onewire bus (GPIO header PIN30)
overlays=i2c2 spi3 i2s0 onewire
```

{% note info 注意 %}

你需要保存文件`/boot/env.txt`并重启系统来使其生效。

{% endnote %}


## 创建你自己的DTBO文件

默认已经有一些可以使用的DTBO文件，你也可以创建你自己的DTBO文件来使能或者禁止系统中的某些外设。

默认DTBO文件存在于目录：`/boot/dtb/overlays/#BOARD#`

```bash
khadas@Khadas:~$ ll /boot/dtb/overlays/kedge
total 40
drwxr-xr-x 2 root root 4096 Jan 29 11:13 ./
drwxr-xr-x 6 root root 4096 Jan 29 11:13 ../
-rw-r--r-- 1 root root  223 Jan 29 09:35 i2c0.dtbo
-rw-r--r-- 1 root root  223 Jan 29 09:35 i2c2.dtbo
-rw-r--r-- 1 root root  472 Jan 29 09:35 onewire.dtbo
-rw-r--r-- 1 root root  447 Jan 29 09:35 spi3.dtbo
```

* 创建你自己的DTS文件，如：`example.dts`

```
/dts-v1/;
/plugin/;

/ {
    fragment@0 {
        target = <&i2c0>;

        __overlay__ {
            status = "okay";
        };
    };
};
```

这个Device Tree Overlay用于使能`i2c0`。


* 编译成DTBO

```
khadas@Khadas:~$ dtc -I dts -O dtb -o example.dtbo example.dts
khadas@Khadas:~$ ls example.dtbo
example.dtbo
```

* 把这个DTBO文件放到目录：`/boot/dtb/overlays/kedge`

* 编辑`/boot/env.txt`文件，在`overlays`节点中增加这个DTBO文件名

* 重启系统


