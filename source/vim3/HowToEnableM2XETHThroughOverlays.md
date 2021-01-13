title: How to enable M2X ETH through overlays
---
We have already explained in the [documentation](/vim3/HowToUseDeviceTreeOverlay.html) how to useDevice Tree Overlays.
## Enable M2X ETH Under Ubuntu

### Update System:
```shell
$ sudo apt update
$ sudo apt full-upgrade
$ sudo do-fenix-full-upgrade
$ sync
$ sudo reboot
```

### Change The Configuration Of Device Tree Overlays
1、open`/boot/env.txt`film:
```shell
khadas@khadas:~$ sudo vim /boot/enc.txt
# Device Tree Overlays
#   uart3           -- Enable UART3 (uart_C, GPIO Header PIN15 & PIN16)
#   pwm_f           -- Enable PWM_F (GPIO Header PIN35)
#   i2c3            -- Enable i2c3 (GPIO Header PIN22 & PIN23)
#   spi1            -- Enable SPI1 (GPIO Header PIN15 & PIN16 & PIN35 & PIN37), pwm_f need to be removed
#   os08a10         -- Enable OS08A10 Camera
#   onewire         -- Enable onewire bus (GPIO Header PIN15)
#   disable-ts050   -- Disable TS050 LCD
#   m2x-eth         -- Enable M2X 100M ethernet. Note: 1G ethernet will be disabled.
overlays=uart3 pwm_f i2c3 os08a10
```
`uart3 pwm_f i2c3 os08a10`are enabled by default.

2、add`m2x-eth`to`overlays`node to make M2X ETH eenable
```shell
overlays=uart3 pwm_f i2c3 os08a10 --> overlays=uart3 pwm_f i2c3 os08a10 m2x-eth
```

3、save the film`/boot/env.txt` and reboot the board to make it available.
```shell
khadas@khadas:~$ sync
khadas@khadas:~$ reboot
```

### Check If M2X ETH Is Enable
1、whether you can get the IP addresss
```shell
khadas@Khadas:~$ ifconfig
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.0.100  netmask 255.255.255.0  broadcast 192.168.0.255
        inet6 fe80::c531:9c16:df20:94f9  prefixlen 64  scopeid 0x20<link>
        ether 02:42:82:4b:1d:2f  txqueuelen 1000  (Ethernet)
        RX packets 113  bytes 13320 (13.3 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 122  bytes 10072 (10.0 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 14
```
2、whether you can go online
```shell
khadas@Khadas:~$ ping www.khadas.com
PING td-balancer-sv5-61-96.wixdns.net (185.230.61.96) 56(84) bytes of data.
64 bytes from 185.230.61.96 (185.230.61.96): icmp_seq=1 ttl=241 time=183 ms
64 bytes from 185.230.61.96 (185.230.61.96): icmp_seq=2 ttl=241 time=164 ms
64 bytes from 185.230.61.96 (185.230.61.96): icmp_seq=3 ttl=241 time=165 ms
……
```
