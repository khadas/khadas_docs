title: How To Setup Watchdog
---

This guide is about how to setup `watchdog` in Ubuntu.


### Enable Watchdog
For `Ubuntu V180531` the watchdog is enabled by default. However, for newer versions it's disabled by default. You can use the following commands to enable it.
```
$ sudo ln -s  /lib/systemd/system/watchdog.service /etc/systemd/system/multi-user.target.wants/watchdog.service
$ sudo systemctl enable watchdog.service
$ sudo systemctl start watchdog.service
```
*Tip: You need to create the service link manually, due to a [debian bug](https://unix.stackexchange.com/questions/346224/problem-with-systemd-starting-watchdog?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa).*

### Setup Watchdog Timeout
The default timeout is `10S`, you can change it in `/etc/watchdog.conf`.
```
$ sudo vim /etc/watchdog.conf
```
Modify `watchdog-timeout` to change the timeout.

Restart watchdog service.
```
$ sudo systemctl restart watchdog
```

### Test Watchdog
Trigger a Kernel crash.
```
$ sudo -i
root@Khadas:~# echo c > /proc/sysrq-trigger 
```
If `watchdog` setup successfully, the system will reboot after the timeout you set above.

### Disable Watchdog
```
$ sudo systemctl disable watchdog
```
