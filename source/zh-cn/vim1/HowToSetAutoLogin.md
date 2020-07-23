title: 如何设置自动登录
---

# 桌面系统

## 配置文件

配置文件为`50-greeter-wrapper.conf`

```shell
khadas@Khadas:~$ sudo vim /usr/share/lightdm/lightdm.conf.d/50-greeter-wrapper.conf
```


## 添加自动登录

增加下面的内容到文件中

```shell
[SeatDefaults]
greeter-session=lightdm-gtk-greeter
autologin-user=khadas
```


**note**: 如果你是通过ssh或者串口修改,登录过一次才能生效

# Server系统

## tty1-tty6

```shell
khadas@Khadas:~$ sudo sed -i "s/ExecStart=.*/ExecStart=-\/sbin\/agetty --noclear --autologin root \%I \$TERM/g" /lib/systemd/system/getty@.service
```

## ttyS0

```shell
khadas@Khadas:~$ sudo sed -i "s/ExecStart=.*/ExecStart=-\/sbin\/agetty --autologin root --keep-baud 115200,38400,9600 \%I \$TERM/g" /lib/systemd/system/serial-getty@.service
```
