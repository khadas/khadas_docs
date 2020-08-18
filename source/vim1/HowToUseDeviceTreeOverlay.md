title: How To Use Device Tree Overlay
---

From release [V0.9.3-20200814](https://forum.khadas.com/t/vim3-vim3l-ubuntu-20-04-linux-4-9-v0-9-3-20200814-ota-release/9205) device tree overlay is enabled.
You can edit environment file `/boot/env.txt` to setup the device tree overlays to enable or disable the peripherals.

### How To Use

In this documentation, we will take **VIM3** as an example to descripe how to use the device tree overlays.

You can find the device tree overlays configuration in `/boot/env.txt` for **VIM3**.

```sh
# Device Tree Overlays
#   uart3           -- Enable UART3 (uart_C, GPIO Header PIN15 & PIN16)
#   pwm_f           -- Enable PWM_F (GPIO Header PIN35)
#   i2c3            -- Enable i2c3 (GPIO Header PIN22 & PIN23)
#   spi1            -- Enable SPI1 (GPIO Header PIN15 & PIN16 & PIN35 & PIN37), pwm_f need to be removed
#   os08a10         -- Enable OS08A10 Camera
#   onewire         -- Enable onewire bus (PIO Header PIN15)
#   disable-ts050   -- Disable TS050 LCD
overlays=uart3 pwm_f i2c3 os08a10
```

`uart3 pwm_f i2c3 os08a10` are enabled by default.

* If you want to disable `pwm_f` you can remove `pwm_f` in `overlays` node.

* If you want to enable `onewire`, you can add `onewire` to `overlays` node.

*Note: You need to save the file `/boot/env.txt` and reboot the board to make it available.*

### Make Your Own DTBO Files

There are some ready to use dtbo files, you can also add your own dtbos to enable or disable the peripherals.

The default dtbo files are stored in directory: `/boot/dtb/overlays/#BOARD#`

```sh
khadas@Khadas:~$ ll /boot/dtb/overlays/kvim3
total 36
drwxr-xr-x 2 root root 4096 Aug 15 15:49 ./
drwxr-xr-x 6 root root 4096 Aug 15 15:49 ../
-rw-r--r-- 1 root root  352 Aug 14 11:07 disable-ts050.dtbo
-rw-r--r-- 1 root root  223 Aug 14 11:07 i2c3.dtbo
-rw-r--r-- 1 root root  472 Aug 14 11:07 onewire.dtbo
-rw-r--r-- 1 root root 1072 Aug 14 11:07 os08a10.dtbo
-rw-r--r-- 1 root root  345 Aug 14 11:07 pwm_f.dtbo
-rw-r--r-- 1 root root  447 Aug 14 11:07 spi1.dtbo
-rw-r--r-- 1 root root  225 Aug 14 11:07 uart3.dtbo
```

* Write your own device tree overlay file, for example `example.dts`:

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

This device tree overlay is to enable `i2c3`.

* Compile it to dtbo

```
khadas@Khadas:~$ dtc -I dts -O dtb -o example.dtbo example.dts
khadas@Khadas:~$ ls example.dtbo
example.dtbo
```

* Move the dtbo file to `/boot/dtb/overlays/kvim3`

* Edit `/boot/env.txt` to add in node `overlays`

* Reboot the board
