title: How To Setup the Maximum CPU Frequency
---

{% note info %}

Khadas VIM3 has dual-core cortex-A53 (little core) and quad-core cortex-A73 (big core).
Khadas VIM3L has quad-core cortex-A55.

{% endnote %}

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim3-tab" data-toggle="tab" href="#vim3" role="tab" aria-controls="vim3" aria-selected="true">VIM3</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3l-tab" data-toggle="tab" href="#vim3l" role="tab" aria-controls="vim3l" aria-selected="false">VIM3L</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

* Little Cores, cortex-A53: CPU0 & CPU1.

```bash
$ # cat /sys/devices/system/cpu/cpufreq/policy0/related_cpus
0 1
```

* Big cores, cortex-A73: CPU2, CPU3, CPU4 & CPU5.

```bash
$ # cat /sys/devices/system/cpu/cpufreq/policy2/related_cpus
2 3 4 5
```
</div>
<div class="tab-pane fade show" id="vim3l" role="tabpanel" aria-labelledby="vim3l-tab">

* cortex-A55: CPU0, CPU1, CPU2 & CPU3.

```bash
$ # cat /sys/devices/system/cpu/cpufreq/policy0/related_cpus
0 1 2 3
```

</div>
</div>

{% note info From release V0.9.3-20200814, we can setup the maximum CPU frequency. %}

{% endnote %}

{% note warn Only for Linux 4.9. %}

{% endnote %}


{% note info There are 2 ways to setup the cpu frequency: %}

* Setup via configuration file
* Setup via desktop application (Only for desktop image)

{% endnote %}

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="file-tab" data-toggle="tab" href="#file" role="tab" aria-controls="file" aria-selected="true">Configuration File</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="app-tab" data-toggle="tab" href="#app" role="tab" aria-controls="app" aria-selected="false">Application (Only for desktop image)</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="file" role="tabpanel" aria-labelledby="file-tab">

You can edit `/boot/env.txt` to setup the maximux CPU frequency.

**For VIM3:**

* max_freq_a53 - maximum CPU frequency of little cores, default value is **1800MHz**
* max_freq_a73 - maximum CPU frequency of big cores, default value is **2208MHz**

**For VIM3L:**

* max_freq_a55 - maximum CPU frequency of little cores, default value is **1908MHz**

You can edit `max_freq_*` node to change the maximum CPU frequency.

{% note info Note %}

You need to reboot the board after change the frequency.

{% endnote %}

</div>
<div class="tab-pane fade show" id="app" role="tabpanel" aria-labelledby="app-tab">

* You can access `Applications->CPU Frequency Setting` to setup the maximux CPU frequency.

</div>
</div>

## Overclocking

{% note warn Note %}

There are several overclocking frequencies for you to setup, **but there is NO GUARANTEE that all VIM3/VIM3L boards are stable with those frequencies, and a FAN is needed!!!**

{% endnote %}

### Frequencies List

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim3-2-tab" data-toggle="tab" href="#vim3-2" role="tab" aria-controls="vim3-2" aria-selected="true">VIM3</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3l-2-tab" data-toggle="tab" href="#vim3l-2" role="tab" aria-controls="vim3l-2" aria-selected="false">VIM3L</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim3-2" role="tabpanel" aria-labelledby="vim3-2-tab">


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

</div>
<div class="tab-pane fade show" id="vim3l-2" role="tabpanel" aria-labelledby="vim3l-2-tab">

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

</div>
</div>

## Check CPU Frequency

You can use command `cpufreq-info` to get the CPU frequency.

For example, get CPU0 & CPU3 frequency:

```sh
khadas@Khadas:~$ cpufreq-info -c 0 -f
1800000
khadas@Khadas:~$ cpufreq-info -c 3 -f
2208000
```
