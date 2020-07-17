title: How To Set Auto Login
---


# configiure file

configiure file is `50-greeter-wrapper.conf`

```shell
khadas@Khadas:~$ sudo vim /usr/share/lightdm/lightdm.conf.d/50-greeter-wrapper.conf
```


# Add auto login Configuration information

Add the following content to the file

```shell
[SeatDefaults]
greeter-session=lightdm-gtk-greeter
autologin-user=khadas
```


**note**: If you modify it through ssh or serial port, it will take effect after you log in once.


