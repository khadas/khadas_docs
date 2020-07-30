title: How To Set Auto Login
---

# Desktop 

## configiure file

configiure file is `50-greeter-wrapper.conf`

```shell
khadas@Khadas:~$ sudo vim /usr/share/lightdm/lightdm.conf.d/50-greeter-wrapper.conf
```


## Add auto login Configuration information

Add the following content to the file

```shell
[SeatDefaults]
greeter-session=lightdm-gtk-greeter
autologin-user=khadas
```


**note**: If you modify it through ssh or serial port, it will take effect after you log in once.

# Server

## tty1-tty6

```shell
khadas@Khadas:~$ sudo sed -i "s/ExecStart=.*/ExecStart=-\/sbin\/agetty --noclear --autologin root \%I \$TERM/g" /lib/systemd/system/getty@.service
```

## ttyS0

```shell
khadas@Khadas:~$ sudo sed -i "s/ExecStart=.*/ExecStart=-\/sbin\/agetty --autologin root --keep-baud 115200,38400,9600 \%I \$TERM/g" /lib/systemd/system/serial-getty@.service
```
