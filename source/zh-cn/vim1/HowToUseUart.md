title: 如何使用串口
---

# 确认串口硬件引脚

uart_c引出到40Pin的引脚是15脚以及16脚

* [VIM1-GPIO-Pin-Out](/vim1/index.html#GPIO-Pin-Out)
* [VIM2-GPIO-Pin-Out](/vim2/#GPIO-Pinout)
* [VIM3-GPIO-Pin-Out](/vim3/#GPIO-Pinout)


# 打开串口

通过Overlays打开uart的节点

```shell
$ vim /boot/env.txt
```

确保uart已经在overlays的列表中(默认已经打开)

```shell
overlays=uart4 pwm_ao_a pwm_f i2c0
```

**注意: VIM1/VIM2是uar4,VIM3/VIM3L是uart3**

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



