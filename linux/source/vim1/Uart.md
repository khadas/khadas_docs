title: UART
---

This documentation will introduce how to use the uart of 40PIN headers.

## Check Uart Hardware PINs

Uart PIN in 40 PINs header is `PIN15` and `PIN16`:

* [VIM1-GPIO-Pin-Out](/linux/vim1/Hardware#VIM3-Hardware-Info)
* [VIM2-GPIO-Pin-Out](/linux/vim2/Hardware#VIM3-Hardware-Info)
* [VIM3-GPIO-Pin-Out](/linux/vim3/Hardware#VIM3-Hardware-Info)

## Enable Uart Node

Enable uart node via device tree overlays. Edit `/boot/env.txt` to add `uartX` to `overlays`.

e.g.

```bash
overlays=uart4 pwm_ao_a pwm_f i2c0
```

{% note info e.g. %}

* VIM1/VIM2  - **uar4**
* VIM3/VIM3L - **uart3**

{% endnote %}

Reboot to take effect.

## Check the Uart Device Node

After reboot, you will see the uart device node.

{% note info e.g. %}

* VIM1/VIM2  - **/dev/ttyS4**
* VIM3/VIM3L - **/dev/ttyS3**

{% endnote %}

