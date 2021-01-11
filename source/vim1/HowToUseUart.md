title: How To Use Uart
---

# Confirm serial port hardware pins

Uart pin in 40 pins header is pin15 and pin16

* [VIM1-GPIO-Pin-Out](/vim1/index.html#GPIO-Pin-Out)
* [VIM2-GPIO-Pin-Out](/vim2/#GPIO-Pinout)
* [VIM3-GPIO-Pin-Out](/vim3/#GPIO-Pinout)

# Open uart node

openg uart node via device tree overlays.

```shell
$ vim /boot/env.txt
```

Make sure UART is in the overlays list (default is enable).

```shell
overlays=uart4 pwm_ao_a pwm_f i2c0
```

**note: VIM1/VIM2 is uar4,VIM3/VIM3L is uart3**

# Setting serial tool in PC

Connect you board's uart and you PC via ttytoUSB tool.

The baud rate is set to `115200`, here is Ubuntu as an example:

```shell
$ sudo minicom -b 115200 -D /dev/ttyUSBx
```


# How to Use

Open the terminal on the board and set the serial port baud rate.

```shell
$ sudo stty -F /dev/ttySx 115200
```

Print info via `echo` command

```shell
$ echo khadas | sudo tee /dev/ttySx
```

You will receive `khadas` in you PC



