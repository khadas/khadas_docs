title: 如何设置最大CPU频率
---

{% note info %}

Khadas VIM3包含两个cortex-A53小核和四个cortex-A73大核。
Khadas VIM3L包含四个cortex-A55核心。

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

* 小核，cortex-A53：CPU0和CPU1。

```sh
$ # cat /sys/devices/system/cpu/cpufreq/policy0/related_cpus
0 1
```

* 大核，cortex-A73：CPU2，CPU3，CPU4和CPU5。

```sh
$ # cat /sys/devices/system/cpu/cpufreq/policy2/related_cpus
2 3 4 5
```
</div>
<div class="tab-pane fade show" id="vim3l" role="tabpanel" aria-labelledby="vim3l-tab">

* cortex-A55：CPU0，CPU1，CPU2和CPU3。

```sh
$ # cat /sys/devices/system/cpu/cpufreq/policy0/related_cpus
0 1 2 3
```

</div>
</div>

{% note info 对于固件版本为`V0.9.3-20200814`或更高可以设置最大CPU频率。%}

{% endnote %}

{% note warn 仅适用于4.9内核。%}

{% endnote %}

{% note info 有两种方式可以设置CPU频率：%}

* 通过配置文件设置
* 通过桌面应用设置（仅适用于桌面系统）

{% endnote %}


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="file-tab" data-toggle="tab" href="#file" role="tab" aria-controls="file" aria-selected="true">配置文件</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="app-tab" data-toggle="tab" href="#app" role="tab" aria-controls="app" aria-selected="false">桌面应用（仅适用于桌面系统）</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="file" role="tabpanel" aria-labelledby="file-tab">

可以编辑`/boot/env.txt`文件来设置最大CPU频率。

**对于VIM3：**

* max_freq_a53 - 表示小核最大频率，默认值为**1800MHz**
* max_freq_a73 - 表示大核最大频率，默认值为**2208MHz**

**对于VIM3L：**

* max_freq_a55 - 表示核心最大频率，默认值为**1908MHz**

你可以通过修改`max_freq_*`节点来设置最大CPU频率。

{% note info 注意 %}

修改频率后需要通过重启来生效。

{% endnote %}

</div>
<div class="tab-pane fade show" id="app" role="tabpanel" aria-labelledby="app-tab">

* 可以直接通过`Applications->CPU Frequency Setting`来设置最大CPU频率。

</div>
</div>

## 超频

{% note warn 注意 %}

这里提供了一些超频频率，**但是我们不能保证所有的VIM3/VIM3L板子都可以稳定运行这些超频频率，同时你需要接上风扇！！！**

{% endnote %}

### 频率列表

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

</div>
<div class="tab-pane fade show" id="vim3l-2" role="tabpanel" aria-labelledby="vim3l-2-tab">

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

</div>
</div>

## 查看CPU频率

可以通过命令`cpufreq-info`来查看CPU频率。

例如，查看CPU0和CPU3的频率：

```sh
khadas@Khadas:~$ cpufreq-info -c 0 -f
1800000
khadas@Khadas:~$ cpufreq-info -c 3 -f
2208000
```
