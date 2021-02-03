title: 如何使用Device Tree Overlay
---

从固件[V0.9.3-20200814](https://forum.khadas.com/t/vim3-vim3l-ubuntu-20-04-linux-4-9-v0-9-3-20200814-ota-release/9205)开始增加了Device Tree Overlays。
你可以通过编辑文件`/boot/env.txt`来使能或者禁止某些外设。


### 如何使用

这边文档以**VIM3**为例介绍如何使用Device Tree Overlay。

在文件`/boot/env.txt`中你可以看到关于**VIM3** Device Tree Overlay的配置，如下：

```sh
# Device Tree Overlays
#   uart3           -- Enable UART3 (uart_C, GPIO Header PIN15 & PIN16)
#   pwm_f           -- Enable PWM_F (GPIO Header PIN35)
#   i2c3            -- Enable i2c3 (GPIO Header PIN22 & PIN23)
#   spi1            -- Enable SPI1 (GPIO Header PIN15 & PIN16 & PIN35 & PIN37), pwm_f need to be removed
#   os08a10         -- Enable OS08A10 Camera
#   onewire         -- Enable onewire bus (PIO Header PIN15)
#   disable-ts050   -- Disable TS050 LCD
#   m2x-eth         -- Enable M2X 100M ethernet. Note: 1G ethernet will be disabled.
#   otg-device      -- Enable USB OTG Device
overlays=uart3 pwm_f i2c3 os08a10
```

`uart3 pwm_f i2c3 os08a10`是默认使能的。


* 如果你想要禁止`pwm_f`，你可以从`overlays`节点中移除`pwm_f`

* 如果你想要使能`onewire`，你可以在`overlays`节点中增加`onewire`


*注意：你需要保存文件`/boot/env.txt`并重启系统来使其生效。*


### 创建你自己的DTBO文件

默认已经有一些可以使用的DTBO文件，你也可以创建你自己的DTBO文件来使能或者禁止系统中的某些外设。

默认DTBO文件存在于目录：`/boot/dtb/overlays/#BOARD#`

```sh
khadas@Khadas:~$ ll /boot/dtb/overlays/kvim3
total 40
drwxr-xr-x 2 root root 4096 Jan 29 11:13 ./
drwxr-xr-x 6 root root 4096 Jan 29 11:13 ../
-rw-r--r-- 1 root root  352 Jan 29 09:35 disable-ts050.dtbo
-rw-r--r-- 1 root root  223 Jan 29 09:35 i2c3.dtbo
-rw-r--r-- 1 root root  277 Jan 29 09:35 m2x-eth.dtbo
-rw-r--r-- 1 root root  472 Jan 29 09:35 onewire.dtbo
-rw-r--r-- 1 root root 1072 Jan 29 09:35 os08a10.dtbo
-rw-r--r-- 1 root root  345 Jan 29 09:35 pwm_f.dtbo
-rw-r--r-- 1 root root  447 Jan 29 09:35 spi1.dtbo
-rw-r--r-- 1 root root  225 Jan 29 09:35 uart3.dtbo
```

* 创建你自己的DTS文件，如：`example.dts`

```
/dts-v1/;
/plugin/;

/ {
    fragment@0 {
        target = <&i2c3>;

        __overlay__ {
            status = "okay";
        };
    };
};
```

这个Device Tree Overlay用于使能`i2c3`。


* 编译成DTBO

```
khadas@Khadas:~$ dtc -I dts -O dtb -o example.dtbo example.dts
khadas@Khadas:~$ ls example.dtbo
example.dtbo
```

* 把这个DTBO文件放到目录：`/boot/dtb/overlays/kvim3`

* 编辑`/boot/env.txt`文件，在`overlays`节点中增加这个DTBO文件名

* 重启系统


