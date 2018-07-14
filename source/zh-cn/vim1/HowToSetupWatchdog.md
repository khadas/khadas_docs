title: 如何设置看门狗
---

这边文档介绍如何在Ubuntu系统中设置看门狗。

### 使能看门狗
对于`Ubuntu V180531`看门狗默认是使能的，你不需要再次设置，可以跳过此步骤；但是对于更新版本的Ubuntu，看门狗默认是关闭的，你可以按如下步骤设置。
```
khadas@Khadas:~$ sudo ln -s  /lib/systemd/system/watchdog.service /etc/systemd/system/multi-user.target.wants/watchdog.service
khadas@Khadas:~$ sudo systemctl enable watchdog.service
khadas@Khadas:~$ sudo systemctl start watchdog.service
```
*注意：这里需要手动设置服务链接，是Debian的一个bug，参考[这里](https://unix.stackexchange.com/questions/346224/problem-with-systemd-starting-watchdog?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)。*

### 设置看门狗超时时间
默认超时时间是`10秒`，你可以编辑`/etc/watchdog.conf`来修改。
```
khadas@Khadas:~$ sudo vim /etc/watchdog.conf
```
修改`watchdog-timeout`字段为你想要的超时时间。

重启看门狗服务。
```
khadas@Khadas:~$ sudo systemctl restart watchdog
```

### 测试看门狗
手动触发内核奔溃。
```
khadas@Khadas:~$ sudo -i
root@Khadas:~# echo c > /proc/sysrq-trigger 
```

如果看门狗设置成功，系统会在你上面设置的超时时间后重启。

### 关闭看门狗
```
khadas@Khadas:~$ sudo systemctl disable watchdog
```
