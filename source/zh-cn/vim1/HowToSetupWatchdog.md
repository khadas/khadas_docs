title: 设置看门狗
---

这篇文档介绍如何在Ubuntu系统中设置看门狗。

## 使能看门狗

看门狗默认是关闭的，你可以按如下步骤来使能看门狗：

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="18.04-tab" data-toggle="tab" href="#18.04" role="tab" aria-controls="18.04" aria-selected="true">Ubuntu 18.04</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="20.04-tab" data-toggle="tab" href="#20.04" role="tab" aria-controls="20.04" aria-selected="false">Ubuntu 20.04</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="18.04" role="tabpanel" aria-labelledby="18.04-tab">

```bash
khadas@Khadas:~$ sudo ln -s  /lib/systemd/system/watchdog.service /etc/systemd/system/multi-user.target.wants/watchdog.service
khadas@Khadas:~$ sudo systemctl enable watchdog.service
khadas@Khadas:~$ sudo systemctl start watchdog.service
```

{% note info 注意 %}

这里需要手动设置服务链接，是Debian的一个bug，参考[这里](https://unix.stackexchange.com/questions/346224/problem-with-systemd-starting-watchdog?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)。

{% endnote %}

</div>
<div class="tab-pane fade show" id="20.04" role="tabpanel" aria-labelledby="20.04-tab">

```bash
khadas@Khadas:~$ sudo systemctl enable watchdog.service
khadas@Khadas:~$ sudo systemctl start watchdog.service
```

</div>
</div>

## 设置看门狗超时时间

默认超时时间是`15秒`，你可以编辑`/etc/watchdog.conf`中的`watchdog-timeout`字段来修改。

**重启看门狗服务使其生效。**

```bash
khadas@Khadas:~$ sudo systemctl restart watchdog
```

## 查看看门狗服务

```bash
khadas@Khadas:~$ systemctl status watchdog.service
● watchdog.service - watchdog daemon
     Loaded: loaded (/lib/systemd/system/watchdog.service; enabled; vendor pres>
     Active: active (running) since Fri 2021-03-26 10:00:38 UTC; 15min ago
    Process: 3381 ExecStartPre=/bin/sh -c [ -z "${watchdog_module}" ] || [ "${w>
    Process: 3382 ExecStart=/bin/sh -c [ $run_watchdog != 1 ] || exec /usr/sbin>
   Main PID: 3385 (watchdog)
      Tasks: 1 (limit: 2932)
     Memory: 864.0K
     CGroup: /system.slice/watchdog.service
             └─3385 /usr/sbin/watchdog -s -v -c /etc/watchdog.conf

Mar 26 10:15:38 Khadas watchdog[3385]: still alive after 120 interval(s)
Mar 26 10:15:39 Khadas watchdog[3385]: still alive after 121 interval(s)
Mar 26 10:15:40 Khadas watchdog[3385]: still alive after 122 interval(s)
Mar 26 10:15:41 Khadas watchdog[3385]: still alive after 123 interval(s)
Mar 26 10:15:42 Khadas watchdog[3385]: still alive after 124 interval(s)
Mar 26 10:15:43 Khadas watchdog[3385]: still alive after 125 interval(s)
Mar 26 10:15:44 Khadas watchdog[3385]: still alive after 126 interval(s)
Mar 26 10:15:45 Khadas watchdog[3385]: still alive after 127 interval(s)
Mar 26 10:15:46 Khadas watchdog[3385]: still alive after 128 interval(s)
Mar 26 10:15:47 Khadas watchdog[3385]: still alive after 129 interval(s)
lines 1-21/21 (END)
```

## 测试看门狗

* 手动触发内核奔溃。

```bash
khadas@Khadas:~$ sudo -i
root@Khadas:~# echo c > /proc/sysrq-trigger 
```

如果看门狗设置成功，系统会在你上面设置的超时时间后重启。

* 终止看门狗喂狗进程

还可以通过异常终止看门狗喂狗进程来触发看门狗复位。

```bash
khadas@Khadas:~$ sudo pkill -9 watchdog
khadas@Khadas:~$ sudo pkill -9 wd_keepalive
khadas@Khadas:~$
khadas@Khadas:~$
khadas@Khadas:~$ G12B:BL:6e7c85:2a3b91;FEAT:E0F83180:402000;POC:F;RCY:0;EMMC:0;READ:0;0.
bl2_stage_init 0x01
bl2_stage_init 0x81
hw id: 0x0000 - pwm id 0x01
bl2_stage_init 0xc1
bl2_stage_init 0x02

L0:00000000
L1:20000703
L2:00008067
L3:14000000
B2:00402000
B1:e0f83180

TE: 207260

BL2 Built : 15:22:05, Aug 28 2019. g12b g1bf2b53 - luan.yuan@droid15-sz
...

```

## 关闭看门狗

* 关闭看门狗服务

```bash
khadas@Khadas:~$ sudo systemctl disable watchdog
khadas@Khadas:~$ sudo reboot
```

* 关闭看门狗驱动【可选】

你还可以选择关闭看门狗驱动。编辑文件`/boot/env.txt`，移除`overlays`节点里面的`watchdog`，然后保存文件并重启系统。

