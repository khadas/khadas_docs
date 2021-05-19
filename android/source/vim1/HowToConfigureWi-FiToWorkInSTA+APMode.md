title: Configure Wi-Fi To Work In STA+AP Mode
---
This guide is about how to configure Wi-Fi to work in STA+AP mode under Ubuntu.

## Preconditions

The image is based on the V2005 version,and [update the OTA](/vim3/HowToUpgradeTheSystem.html) to the latest version

## Start to Configure

Configrure wlan0 as STA mode, wlan1 as AP mode.

### Add wlan1

```bash
khadas@Khadas:~$ sudo iw phy phy0 interface add wlan1 type managed
```

Check the addition:

```bash
khadas@Khadas:~$ ifconfig 
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.193  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::a2f4:5aa3:a444:7845  prefixlen 64  scopeid 0x20<link>
        ether 00:15:18:01:81:31  txqueuelen 1000  (Ethernet)
        RX packets 194992  bytes 219966606 (219.9 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 38392  bytes 2602312 (2.6 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 14  

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1  (Local Loopback)
        RX packets 6  bytes 624 (624.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 6  bytes 624 (624.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether 18:93:7f:a9:9d:0e  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 2  bytes 180 (180.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan1: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether 1a:93:7f:a9:9d:0e  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

### Setup AP

Set wlan1 as a hotspot and connect automatically.The name of the hotspot is`khadas_ap`,the password is`12345678`.

```bash
$ sudo nmcli con add type wifi ifname wlan1 con-name Hostspot autoconnect yes ssid khadas_ap
$ sudo nmcli con modify Hostspot 802-11-wireless.mode ap 802-11-wireless.band bg ipv4.method shared
$ sudo nmcli con modify Hostspot wifi-sec.key-mgmt wpa-psk
$ sudo nmcli con modify Hostspot wifi-sec.psk "12345678"
$ sudo nmcli con modify Hostspot ipv4.addresses 192.168.2.20/24
$ sudo nmcli con modify Hostspot ipv4.gateway 192.168.2.1
$ sudo nmcli con up Hostspot
```

Check the setup:

```bash
khadas@Khadas:~$ ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.193  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::a2f4:5aa3:a444:7845  prefixlen 64  scopeid 0x20<link>
        ether 00:15:18:01:81:31  txqueuelen 1000  (Ethernet)
        RX packets 194992  bytes 219966606 (219.9 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 38392  bytes 2602312 (2.6 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 14

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1  (Local Loopback)
        RX packets 6  bytes 624 (624.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 6  bytes 624 (624.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether 18:93:7f:a9:9d:0e  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 2  bytes 180 (180.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.2.20  netmask 255.255.255.0  broadcast 192.168.2.255
        inet6 fe80::2069:83c5:2e4c:2614  prefixlen 64  scopeid 0x20<link>
        ether 1a:93:7f:a9:9d:0e  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 18  bytes 1312 (1.3 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

## Verify

1、Turn off Ethernet

```bash
khadas@Khadas:~$ sudo ifconfig eth0 down
```

2、Whether wlan0 can be used to surf the Internet

* [Connect Wi-Fi](/vim3/HowToConnectWifi.html)

Try to`ping www.khadas.com`:

```bash
khadas@Khadas:~$ sudo ping -I wlan0 www.khadas.com
PING td-balancer-dc11-60-161.wixdns.net (185.230.60.161) from 192.168.124.80 wlan0: 56(84) bytes of data.
64 bytes from 185.230.60.161 (185.230.60.161): icmp_seq=1 ttl=240 time=293 ms
64 bytes from 185.230.60.161 (185.230.60.161): icmp_seq=2 ttl=240 time=316 ms
64 bytes from 185.230.60.161 (185.230.60.161): icmp_seq=3 ttl=240 time=238 ms
...
```

3、Whether wlan1 can be connected as a hotpot

* Name:`khadas_ap`

* Password:`12345678`

