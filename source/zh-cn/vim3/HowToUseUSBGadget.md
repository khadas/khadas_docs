title: 如何使用USB Gadget
---

我们之前在[文档](/zh-cn/vim3/HowToUseDeviceTreeOverlay.html)中介绍过如何使用Device Tree Overlay

### 升级系统

你可以参考该[文档](/zh-cn/vim3/HowToUpgradeTheSystem.html)。

### 配置DTS Overlays

1、打开`/boot/env.txt`文件：
```shell
khadas@khadas:~$ sudo vim /boot/enc.txt
# Device Tree Overlays
#   uart3           -- Enable UART3 (uart_C, GPIO Header PIN15 & PIN16)
#   pwm_f           -- Enable PWM_F (GPIO Header PIN35)
#   i2c3            -- Enable i2c3 (GPIO Header PIN22 & PIN23)
#   spi1            -- Enable SPI1 (GPIO Header PIN15 & PIN16 & PIN35 & PIN37), pwm_f need to be removed
#   os08a10         -- Enable OS08A10 Camera
#   onewire         -- Enable onewire bus (GPIO Header PIN15)
#   disable-ts050   -- Disable TS050 LCD
#   m2x-eth         -- Enable M2X 100M ethernet. Note: 1G ethernet will be disabled.
#   otg-device      -- Enable USB OTG Device
overlays=uart3 pwm_f i2c3 os08a10
```
其中`uart3 pwm_f i2c3 os08a10`是默认使能的。

2、在`overlays`中增加`otg-device`使能USB OTG Device：
```shell
overlays=uart3 pwm_f i2c3 os08a10 --> overlays=uart3 pwm_f i2c3 os08a10 otg-device
```

### 使能服务
```shell
khadas@khadas:~$ sudo systemctl enable usb-gadget-khadas.service
```

### 保存文件并重启系统
```shell
khadas@khadas:~$ sync
khadas@khadas:~$ sudo reboot
```


