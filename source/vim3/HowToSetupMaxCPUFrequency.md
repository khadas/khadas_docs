title: How To Setup the Maximum CPU Frequency
---

Khadas VIM3 has dual-core cortex-A53 (little core) and quad-core cortex-A73 (big core).
Khadas VIM3L has quad-core cortex-A55.

**For VIM3:**

* Little Cores, cortex-A53: CPU0 & CPU1.

```
$ # cat /sys/devices/system/cpu/cpufreq/policy0/related_cpus
0 1
```

* Big cores, cortex-A73: CPU2, CPU3, CPU4 & CPU5.

```
$ # cat /sys/devices/system/cpu/cpufreq/policy2/related_cpus
2 3 4 5
```

**For VIM3L:**

* cortex-A55: CPU0, CPU1, CPU2 & CPU3.

```
$ # cat /sys/devices/system/cpu/cpufreq/policy0/related_cpus
0 1 2 3
```

**For release `V0.9.3-20200814` or later, we can setup the maximum CPU frequency.**

## Server Images

You can edit `/boot/env.txt` to setup the maximux CPU frequency.

**For VIM3:**

* max_freq_a53 - maximum CPU frequency of little cores, default value is **1800MHz**
* max_freq_a73 - maximum CPU frequency of big cores, default value is **2208MHz**

**For VIM3L:**

* max_freq_a55 - maximum CPU frequency of little cores, default value is **1908MHz**

You can edit `max_freq_*` node to change the maximum CPU frequency.

*Note: You need to reboot the board after change the frequency.*


## Desktop Images

* You can access `Applications->CPU Frequency Setting` to setup the maximux CPU frequency.

* Edit `/boot/env.txt` to setup the maximux CPU frequency. Seam as `Server Images`.

## Overclocking

There are several overclocking frequencies for you to setup, **but there is NO GUARANTEE that all VIM3/VIM3L boards are stable with those frequencies, and a FAN is needed!!!**
There are several overclocking frequencies for you to setup, **but there is NO GUARANTEE that all VIM3/VIM3L boards are stable with those frequencies, and a FAN is needed!!!**
There are several overclocking frequencies for you to setup, **but there is NO GUARANTEE that all VIM3/VIM3L boards are stable with those frequencies, and a FAN is needed!!!**

* **VIM3 Little Cores Frequencies List**

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

* **VIM3 Big Cores Frequencies List**

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

* **VIM3L Frequencies List**

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


## Check CPU Frequency

You can use command `cpufreq-info` to get the CPU frequency.

For example, get CPU0 & CPU3 frequency:

```
khadas@Khadas:~$ cpufreq-info -c 0 -f
1800000
khadas@Khadas:~$ cpufreq-info -c 3 -f
2208000
```



