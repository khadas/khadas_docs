title: 如何使用单总线
---

以Edge-V为例,Captian请将dtb替换为`rk3399-khadas-captain-linux.dtb`.Edge不支持这个驱动

# 连接单总线设备

这里以`ds18b20`模块为例.将设备连接到物理引脚`Pin15`上.

# 打开dtb节点

* 切换root用户

```shell
khadas@Khadas:~$ su
Password:
root@Khadas:/home/khadas#
```


* 确认节点状态

``shell
root@Khadas:/home/khadas# fdtget /boot/dtb/rk3399-khadas-edgev-linux.dtb /onewire status
disable
```

* 打开节点

```shell
root@Khadas:/home/khadas# fdtput -t s /boot/dtb/rk3399-khadas-edgev-linux.dtb /onewire status "okay"
root@Khadas:/home/khadas# fdtget /boot/dtb/rk3399-khadas-edgev-linux.dtb /onewire status
okay
```

不使用时使用这个命令关闭节点

```shell
root@Khadas:/home/khadas# fdtput -t s /boot/dtb/rk3399-khadas-edgev-linux.dtb /onewire status "disable"
```

* 重启

重启设备,加载单总线驱动.

# 使用单总线

进入驱动目录,

```shell
khadas@Khadas:~$ cd /sys/bus/w1/devices
khadas@Khadas:/sys/bus/w1/devices$ ls
28-0119395ebf91  w1_bus_master1
```
可以看见`ds18b20`的设备节点是`28-0119395ebf91`.进入节点目录,

```shell
khadas@Khadas:/sys/bus/w1/devices$ cd 28-0119395ebf91
khadas@Khadas:/sys/bus/w1/devices/28-0119395ebf91$ ls
driver  id  name  power  subsystem  uevent  w1_slave
```

其中读取`w1_slave`文件就可以读取到模块的值

```shell
khadas@Khadas:/sys/bus/w1/devices/28-0119395ebf91$ cat w1_slave 
b1 01 4b 46 7f ff 0c 10 d8 : crc=d8 YES
b1 01 4b 46 7f ff 0c 10 d8 t=27062
```

