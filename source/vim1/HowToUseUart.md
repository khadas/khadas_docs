title: How To Use Uart
---

# Confirm serial port hardware pins

Uart pin in 40 pins header is pin15 and pin16

* [VIM1-GPIO-Pin-Out](/vim1/index.html#GPIO-Pin-Out)
* [VIM2-GPIO-Pin-Out](/vim2/#GPIO-Pinout)
* [VIM3-GPIO-Pin-Out](/vim3/#GPIO-Pinout)

# Confirm whether the serial port is configured

Use `fdtget` command to open uart int dtb

* VIM1

VIM1 has open uart in default

* VIM2

```shell
khadas@Khadas:~$ sudo fdtget /boot/dtb/kvim2_linux.dtb /serial@c81004e0 status
disable
khadas@Khadas:~$ sudo fdtput -t s /boot/dtb/kvim2_linux.dtb /serial@c81004e0 status "okay"
khadas@Khadas:~$ sudo fdtget /boot/dtb/kvim2_linux.dtb /serial@c81004e0 status
okay
```

* VIM3

```shell
khadas@Khadas:~$ sudo fdtget /boot/dtb/kvim3_linux.dtb /serial@ffd22000 status
disable
khadas@Khadas:~$ sudo fdtput -t s /boot/dtb/kvim3_linux.dtb /serial@ffd22000 status "okay"
khadas@Khadas:~$ sudo fdtget /boot/dtb/kvim3_linux.dtb /serial@ffd22000 status
okay
```

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



