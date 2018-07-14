title: How To Setup Watchdog
---

This tutorial is about how to setup `watchdog` in Ubuntu.


### Enable Watchdog
For `Ubuntu V180531` the watchdog is enabled by default, you don't need to do this, but for newer version it's disabled by default, you can follow the bellow commands to enable it.
```
khadas@Khadas:~$ sudo ln -s  /lib/systemd/system/watchdog.service /etc/systemd/system/multi-user.target.wants/watchdog.service
khadas@Khadas:~$ sudo systemctl enable watchdog.service
khadas@Khadas:~$ sudo systemctl start watchdog.service
```
*Note: You need to create the service link manually, due to a debian bug? See [here](https://unix.stackexchange.com/questions/346224/problem-with-systemd-starting-watchdog?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa).*

### Setup Watchdog Timeout
The default timeout is `10S`, you can change it in `/etc/watchdog.conf`.
```
khadas@Khadas:~$ sudo vim /etc/watchdog.conf
```
Modify `watchdog-timeout` to change the timeout.

Restart watchdog service.
```
khadas@Khadas:~$ sudo systemctl restart watchdog
```

### Test Watchdog
Trigger a kernel crash.
```
khadas@Khadas:~$ sudo -i
root@Khadas:~# echo c > /proc/sysrq-trigger 
```
If `watchdog` setup successfully, the system will reboot after the timeout you set above.

### Disable Watchdog
```
khadas@Khadas:~$ sudo systemctl disable watchdog
```
