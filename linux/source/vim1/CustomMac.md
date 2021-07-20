title: How To Setup Customer Ethernet MAC Address
---

## Check Ethernet MAC address

* Check Ethernet MAC address via `cmdline`

```bash
khadas@Khadas:~$ cat /proc/cmdline
root=UUID=be7fd8e4-c575-444f-832f-00bf27631d9f rootfstype=ext4 rootflags=data=writeback rw ubootpart=NULL console=ttyS0,115200n8 console=tty0 no_console_suspend consoleblank=0 loglevel=7 logo=osd0,loaded,0x3d800000,1080p60hz vout=1080p60hz,enable hdmimode=1080p60hz  fsck.repair=yes net.ifnames=0 ddr_size= wol_enable=0 max_freq_a53=2208 max_freq_a73=2400 jtag=disable mac=c8:63:14:70:43:e4 androidboot.mac=c8:63:14:70:43:e4  fan=auto khadas_board=VIM3 hwver=VIM3.V12 coherent_pool=2M reboot_mode=normal imagetype=EMMC uboottype=vendor
```

You can see from the `mac` and `androidboot.mac` fields that the address is `c8:63:14:70:43:e4`.

* Check Ethernet MAC address via `ifconfig` command

```bash
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

You can see from the `ether` fields that the address is `c8:63:14:70:43:e4`.

## Setup Customer Ethernet MAC Address

Edit file `/boot/env.txt` to add node `custom_ethmac=xx:xx:xx:xx:xx:xx`.
	 
For example:

```bash
custom_ethmac=c8:63:14:70:43:e6
```

{% note warn Please make sure the MAC address format is correct. %}

{% endnote %}

Reboot to take effect

## Check the MAC Address

* Check Ethernet MAC address via `cmdline`

```bash
cat /proc/cmdline
root=UUID=be7fd8e4-c575-444f-832f-00bf27631d9f rootfstype=ext4 rootflags=data=writeback rw ubootpart=NULL console=ttyS0,115200n8 console=tty0 no_console_suspend consoleblank=0 loglevel=7 logo=osd0,loaded,0x3d800000,1080p60hz vout=1080p60hz,enable hdmimode=1080p60hz  fsck.repair=yes net.ifnames=0 ddr_size= wol_enable=0 max_freq_a53=2208 max_freq_a73=2400 jtag=disable mac=c8:63:14:70:43:e6 androidboot.mac=c8:63:14:70:43:e6  fan=auto khadas_board=VIM3 hwver=VIM3.V12 coherent_pool=2M reboot_mode=normal imagetype=EMMC uboottype=vendor
```

* Check Ethernet MAC address via `ifconfig` command

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



{% note info Note %}

1. If there is no `custom_ethmac` field in `boot/env.txt`, you can add it at the end.
2. The custom Ethernet must comply with the rules. If your custom URL does not comply with the rules, when you view it in the `ifconfig` command, it will display a result that is different from your custom address.

{% endnote %}
