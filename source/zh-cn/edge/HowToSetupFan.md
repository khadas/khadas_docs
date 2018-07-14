title: 如何设置风扇
---

这篇文档介绍如何在Ubuntu/Debian下设置风扇。

风扇有5种工作模式：
* `off`: 风扇关闭。
* `low`: 风扇工作在低速模式。
* `mid`: 风扇工作在中等速度模式。
* `high`: 风扇工作在高速模式。
* `auto`: 风扇工作在自动调节速度模式，根据温度自动调节速度，这个是默认的工作模式。

### 查看当前工作模式
```
khadas@Khadas:~$ fw_printenv fan
fan=auto
```
`fan=auto`标识工作在自动调节模式。

### 设置工作模式

* 设置风扇低速模式

```
khadas@Khadas:~$ sudo fw_setenv fan low
khadas@Khadas:~$ sudo reboot
```

* 设置风扇中等速度模式

```
khadas@Khadas:~$ sudo fw_setenv fan mid
khadas@Khadas:~$ sudo reboot
```
* 设置风扇高速模式

```
khadas@Khadas:~$ sudo fw_setenv fan high
khadas@Khadas:~$ sudo reboot
```

* 设置风扇自动调节速度模式

```
khadas@Khadas:~$ sudo fw_setenv fan auto
khadas@Khadas:~$ sudo reboot
```

* 关闭风扇

```
khadas@Khadas:~$ sudo fw_setenv fan off
khadas@Khadas:~$ sudo reboot
```
