title: 如何通过overlays方式使能M2X ETH
---

我们之前在[文档](/zh-cn/vim3/HowToUseDeviceTreeOverlay.html)中介绍过如何使用Device Tree Overlay

## 在Ubuntu下使能M2X ETH

### 升级系统

```shell
$ sudo apt update
$ sudo apt full-upgrade
$ sudo do-fenix-full-upgrade
$ sync
$ sudo reboot
```

### 更改Device Tree Overlay的配置，如下：

1、打开`/boot/env.txt`文件：

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
#   otg-device      -- Enable USB OTG Device
overlays=uart3 pwm_f i2c3 os08a10
```

其中`uart3 pwm_f i2c3 os08a10`是默认使能的

2、在`overlays`中增加`m2x-eth`使能M2X ETH

```shell
overlays=uart3 pwm_f i2c3 os08a10 --> overlays=uart3 pwm_f i2c3 os08a10 m2x-eth
```

3、保存文件`/boot/env.txt`并重启系统来使其生效

```shell
khadas@khadas:~$ sync
khadas@khadas:~$ sudo reboot
```

### 验证M2X ETH是否使能

1、是否可以获取IP地址

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

2、是否可以上网

```shell
khadas@Khadas:~$ ping www.khadas.com
PING td-balancer-sv5-61-96.wixdns.net (185.230.61.96) 56(84) bytes of data.
64 bytes from 185.230.61.96 (185.230.61.96): icmp_seq=1 ttl=241 time=183 ms
64 bytes from 185.230.61.96 (185.230.61.96): icmp_seq=2 ttl=241 time=164 ms
64 bytes from 185.230.61.96 (185.230.61.96): icmp_seq=3 ttl=241 time=165 ms
……
```

