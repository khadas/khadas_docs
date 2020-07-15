title: 如何使用串口
---

# 确认串口硬件引脚

uart_c引出到40Pin的引脚是15脚以及16脚

* [VIM1-GPIO-Pin-Out](/vim1/index.html#GPIO-Pin-Out)
* [VIM2-GPIO-Pin-Out](/vim2/#GPIO-Pinout)
* [VIM3-GPIO-Pin-Out](/vim3/#GPIO-Pinout)

# 确认串口是否配置

使用`fdtget`命令打开uart_c的dtb配置

* VIM1

VIM1的串口默认已经打开

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

# PC设置串口工具

通过tty转USB的串口工具连接板子上的串口与PC

波特率设置成`115200`,这里以Ubuntu为例

```shell
$ sudo minicom -b 115200 -D /dev/ttyUSBx
```


# 使用串口

在板子上打开终端,设置串口波特率

```shell
$ sudo stty -F /dev/ttySx 115200
```

通过`echo`输出信息

```shell
$ echo khadas | sudo tee /dev/ttySx
```

在PC上就会看到对应的`khadas`



