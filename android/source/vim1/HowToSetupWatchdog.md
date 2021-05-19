title: Setup Watchdog
---

This guide is about how to setup `watchdog` in Ubuntu.


## Enable Watchdog

The watchdog is disabled by default. You can use the commands below to enable it.

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

{% note info Tips %}

You need to create the service link manually, due to a [debian bug](https://unix.stackexchange.com/questions/346224/problem-with-systemd-starting-watchdog?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa).

{% endnote %}

</div>
<div class="tab-pane fade show" id="20.04" role="tabpanel" aria-labelledby="20.04-tab">

```bash
khadas@Khadas:~$ sudo systemctl enable watchdog.service
khadas@Khadas:~$ sudo systemctl start watchdog.service
```

</div>
</div>

## Check Watchdog Service

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

## Setup Watchdog Timeout

The default timeout is `15S`, you can edit file `/etc/watchdog.conf` to change the timeout `watchdog-timeout`.

**Restart watchdog service to take effect.**

```bash
$ sudo systemctl restart watchdog
```

## Test Watchdog

* Trigger a Kernel Crash.

```bash
khadas@Khadas:~$ sudo -i
root@Khadas:~# echo c > /proc/sysrq-trigger 
```

If `watchdog` setup successfully, the system will reboot after the timeout you set above.

* Kill Watchdog Daemon

You can also kill the watchdog daemon to prevent it to feed the watchdog, so the system will reboot after the timeout set in `/etc/watchdog.conf`.

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

## Disable Watchdog

* Disable Watchdog Service

```bash
khadas@Khadas:~$ sudo systemctl disable watchdog
khadas@Khadas:~$ sudo reboot
```

* Disable Watchdog Driver [Optional]

You can also disable the watchdog driver as well. Edit `/boot/env.txt` and remove `watchdog` in `overlays` node then save and reboot the system.
