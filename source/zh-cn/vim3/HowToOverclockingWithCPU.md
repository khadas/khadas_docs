title: 如何设置CPU超频
---

## 超频设置

1. 超频配置文件路径:`/boot/env.txt`

2. 编辑配置文件

```shell
sudo vim /boot/env.txt
```

3. 修改超频设置

* VIM3

小核超频设置

```shell
max_freq_a53=1800
```

大核超频设置

```shell
max_freq_a73=2208
```

* VIM3L

```shell
max_freq_a55=1908
```

在每一个频率设置上面都有一个频率列表,可以设置成列表里任意一个.

4. 重启

频率设置以后,需要重启才会生效.

## 查看设置是否生效

通过系统查看频率值

```shell
cat /sys/devices/system/cpu/cpufreq/policyX/cpuinfo_cur_freq
```

**注意**: `policyX` 需要按照你需要查看的CPU核心进行替换 

## 查看温度

查看不同频率下的CPU温度

```shell
cat /sys/class/thermal/thermal_zone0/temp
```

**注意**: 超频以后,CPU温度会更高,最好配合散热器和风扇一起使用

