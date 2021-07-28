title: How To Use Device Tree Overlay
---

From release [V0.9.3-20200814](https://forum.khadas.com/t/vim3-vim3l-ubuntu-20-04-linux-4-9-v0-9-3-20200814-ota-release/9205) device tree overlay is enabled.
You can edit environment file `/boot/env.txt` to setup the device tree overlays to enable or disable the peripherals.

{% note info In this documentation, we will take Edge as an example to descripe how to use the device tree overlays. %}

{% endnote %}

## How To Use

You can find the device tree overlays configuration in `/boot/env.txt` for **Edge**.

```bash
# Device Tree Overlays                                                                                       
# i2c2      -- Enable I2C2 (GPIO header PIN25 && PIN26)
# spi3      -- Enable SPI3 (GPIO header PIN15 && PIN16 && PIN22 && PIN23)
# i2s0      -- Enable I2s0 (GPIO header PIN29 && PIN31 && PIN32 && PIN33 && PIN35 && PIN36 && PIN37 && PIN38)
# onewire   -- Enable onewire bus (GPIO header PIN30)
overlays=i2c2 spi3 i2s0 onewire
```


{% note info Note %}

You need to save the file `/boot/env.txt` and reboot the board to take effect.

{% endnote %}

## Make Your Own DTBO Files

There are some ready to use dtbo files, you can also add your own dtbos to enable or disable the peripherals.

The default dtbo files are stored in directory: `/boot/dtb/overlays/#BOARD#`

```bash
khadas@Khadas:~$ ll /boot/dtb/overlays/kedge
total 40
drwxr-xr-x 2 root root 4096 Jan 29 11:13 ./
drwxr-xr-x 6 root root 4096 Jan 29 11:13 ../
-rw-r--r-- 1 root root  225 Jan 29 09:35 i2c0.dtbo
-rw-r--r-- 1 root root  223 Jan 29 09:35 i2c2.dtbo
-rw-r--r-- 1 root root  472 Jan 29 09:35 onewire.dtbo
-rw-r--r-- 1 root root  447 Jan 29 09:35 spi3.dtbo
```

* Write your own device tree overlay file, for example `example.dts`:

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

This device tree overlay is to enable `i2c0`.

* Compile it to dtbo

```
khadas@Khadas:~$ dtc -I dts -O dtb -o example.dtbo example.dts
khadas@Khadas:~$ ls example.dtbo
example.dtbo
```

* Move the dtbo file to `/boot/dtb/overlays/kedge`

* Edit `/boot/env.txt` to add in node `overlays`

* Reboot the board
