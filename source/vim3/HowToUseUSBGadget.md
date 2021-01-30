title: How To Use USB Gadget
---
We have already explained in the [documentation](/vim3/HowToUseDeviceTreeOverlay.html) how to use Device Tree Overlays.

### Update System

You can refer to this [document](HowToUpgradeTheSystem.html).

### Configure DTS Overlays

1.open`/boot/env.txt`film:
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
`uart3 pwm_f i2c3 os08a10`are enabled by default.

2.add`otg-device`to`overlays`node to make USB OTG Device enable:
```shell
overlays=uart3 pwm_f i2c3 os08a10 --> overlays=uart3 pwm_f i2c3 os08a10 otg-device
```

### Enable service
```shell
khadas@khadas:~$ sudo systemctl enable usb-gadget-khadas.service
```

### Save film and reboot the board
```shell
khadas@khadas:~$ sync
khadas@khadas:~$ sudo reboot
```

