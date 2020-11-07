title: 如何使用单总线
---

以VIM1为例,VIM2请将dtb替换为`kvim2_linux.dtb`,VIM3请将dtb替换为`kvim3_linux.dtb`

# 通过Overlays打开onewire驱动

```shell
$ vim /boot/env.txt
```

将onewire添加进配置文件

```shell
overlays=uart4 pwm_ao_a pwm_f i2c0 --> overlays=uart4 pwm_ao_a pwm_f i2c0 onewire
```

关于overlays的详细说明可以参考[如何使用device tree overlays](/zh-cn/vim1/HowToUseDeviceTreeOverlay.html)

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

