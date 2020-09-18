title: 如何自定义以太网MAC地址
---

# 查看以太网MAC地址

* 通过`cmdline`查看

```shell
khadas@Khadas:~$ cat /proc/cmdline
root=UUID=be7fd8e4-c575-444f-832f-00bf27631d9f rootfstype=ext4 rootflags=data=writeback rw ubootpart=NULL console=ttyS0,115200n8 console=tty0 no_console_suspend consoleblank=0 loglevel=7 logo=osd0,loaded,0x3d800000,1080p60hz vout=1080p60hz,enable hdmimode=1080p60hz  fsck.repair=yes net.ifnames=0 ddr_size= wol_enable=0 max_freq_a53=2208 max_freq_a73=2400 jtag=disable mac=c8:63:14:70:43:e4 androidboot.mac=c8:63:14:70:43:e4  fan=auto khadas_board=VIM3 hwver=VIM3.V12 coherent_pool=2M reboot_mode=normal imagetype=EMMC uboottype=vendor
```

可以从`mac`和`androidboot.mac`字段看到地址为`c8:63:14:70:43:e4`

* 通过`ifconfig`命令查看

```shell
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.118  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::17e7:5b1e:c841:a035  prefixlen 64  scopeid 0x20<link>
        ether c8:63:14:70:43:e4  txqueuelen 1000  (Ethernet)
        RX packets 210  bytes 20318 (20.3 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 236  bytes 23009 (23.0 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 14
```

从`ether`字段可以看到MAC地址为`c8:63:14:70:43:e4`

# 自定义以太网MAC地址

* 打开`/boot/env.txt`文件,

```shell
khadas@Khadas:~$ sudo vim /boot/env.txt
```

* 修改`custom_ethmac`,自定义为你想要的MAC地址,格式为`xx:xx:xx:xx:xx:xx`,例如`c8:63:14:70:43:e6`,

```shell
custom_ethmac=c8:63:14:70:43:e6
```

* 重启生效

```shell
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```

# 确认修改是否生效

* 通过`cmdline`查看

```shell
cat /proc/cmdline
root=UUID=be7fd8e4-c575-444f-832f-00bf27631d9f rootfstype=ext4 rootflags=data=writeback rw ubootpart=NULL console=ttyS0,115200n8 console=tty0 no_console_suspend consoleblank=0 loglevel=7 logo=osd0,loaded,0x3d800000,1080p60hz vout=1080p60hz,enable hdmimode=1080p60hz  fsck.repair=yes net.ifnames=0 ddr_size= wol_enable=0 max_freq_a53=2208 max_freq_a73=2400 jtag=disable mac=c8:63:14:70:43:e6 androidboot.mac=c8:63:14:70:43:e6  fan=auto khadas_board=VIM3 hwver=VIM3.V12 coherent_pool=2M reboot_mode=normal imagetype=EMMC uboottype=vendor
```

* 通过`ifconfig`命令查看

```shell
khadas@Khadas:~$ ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.120  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::17e7:5b1e:c841:a035  prefixlen 64  scopeid 0x20<link>
        ether c8:63:14:70:43:e6  txqueuelen 1000  (Ethernet)
        RX packets 100  bytes 10737 (10.7 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 151  bytes 16279 (16.2 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 14
```



**注意**:

1. 如果在`boot/env.txt`里面没有`custom_ethmac`字段,可以在末尾添加
2. 自定义的以太网要符合规则,如果你自定义的网址不符合规则,在`ifconfig`命令查看时,会显示和你的自定义地址不一样的结果
