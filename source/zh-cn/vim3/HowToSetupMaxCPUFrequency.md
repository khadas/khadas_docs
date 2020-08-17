title: 如何设置最大CPU频率
---

Khadas VIM3包含两个cortex-A53小核和四个cortex-A73大核。
Khadas VIM3L包含四个cortex-A55核心。

**对于VIM3：**

* 小核，cortex-A53：CPU0和CPU1。

```
$ # cat /sys/devices/system/cpu/cpufreq/policy0/related_cpus
0 1
```

* 大核，cortex-A73：CPU2，CPU3，CPU4和CPU5。

```
$ # cat /sys/devices/system/cpu/cpufreq/policy2/related_cpus
2 3 4 5
```

**对于VIM3L：**

* cortex-A55：CPU0，CPU1，CPU2和CPU3。

```
$ # cat /sys/devices/system/cpu/cpufreq/policy0/related_cpus
0 1 2 3
```

**对于固件版本为`V0.9.3-20200814`或更高可以设置最大CPU频率。**

## Server固件

可以编辑`/boot/env.txt`文件来设置最大CPU频率。

**对于VIM3：**

* max_freq_a53 - 表示小核最大频率，默认值为**1800MHz**
* max_freq_a73 - 表示大核最大频率，默认值为**2208MHz**

**对于VIM3L：**

* max_freq_a55 - 表示核心最大频率，默认值为**1908MHz**

你可以通过修改`max_freq_*`节点来设置最大CPU频率。

*注意：修改频率后需要通过重启来生效。*


## 桌面固件

* 可以直接通过`Applications->CPU Frequency Setting`来设置最大CPU频率。

* 或者直接通过编辑`/boot/env.txt`文件来设置，同`Server固件`。


## 超频

这里提供了一些超频频率，**但是我们不能保证所有的VIM3/VIM3L板子都可以稳定运行这些超频频率，同时你需要接上风扇！！！**
这里提供了一些超频频率，**但是我们不能保证所有的VIM3/VIM3L板子都可以稳定运行这些超频频率，同时你需要接上风扇！！！**
这里提供了一些超频频率，**但是我们不能保证所有的VIM3/VIM3L板子都可以稳定运行这些超频频率，同时你需要接上风扇！！！**

* **VIM3小核频率列表**

|  Frequency (MHz)   | ENV Node  |
|  ----  | ----  |
| 500  | 500 |
| 667  | 667 |
| 1000  | 1000 |
| 1200  | 1200 |
| 1398  | 1398 |
| 1512  | 1512 |
| 1608  | 1608 |
| 1704  | 1704 |
| 1800  | 1800 (Default)|
| **1908**  | **1908 (Overclocking)**|
| **2016**  | **2016 (Overclocking)**|
| **2100**  | **2100 (Overclocking)**|
| **2208**  | **2208 (Overclocking)**|

* **VIM3大核频率列表**

|  Frequency (MHz)   | ENV Node  |
|  ----  | ----  |
| 500  | 500 |
| 667  | 667 |
| 1000  | 1000 |
| 1200  | 1200 |
| 1398  | 1398 |
| 1512  | 1512 |
| 1608  | 1608 |
| 1704  | 1704 |
| 1800  | 1800 |
| 1908  | 1908 |
| 2016  | 2016 |
| 2100  | 2100 |        
| 2208  | 2208 (Default)|
| **2304**  | **2304 (Overclocking)**|
| **2400**  | **2400 (Overclocking)**|

* **VIM3L频率列表**

|  Frequency (MHz)   | ENV Node  |
|  ----  | ----  |
| 500  | 500 |
| 667  | 667 |
| 1000  | 1000 |
| 1200  | 1200 |
| 1398  | 1398 |
| 1512  | 1512 |
| 1608  | 1608 |
| 1704  | 1704 |
| 1800  | 1800 |
| 1908  | 1908 (Default)|
| **2016**  | **2016 (Overclocking)**|
| **2100**  | **2100 (Overclocking)**|
| **2208**  | **2208 (Overclocking)**|


## 查看CPU频率

可以通过命令`cpufreq-info`来查看CPU频率。

例如，查看CPU0和CPU3的频率：

```
khadas@Khadas:~$ cpufreq-info -c 0 -f
1800000
khadas@Khadas:~$ cpufreq-info -c 3 -f
2208000
```
