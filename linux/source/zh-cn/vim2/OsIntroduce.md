title: 选择操作系统
---

目前我们官方支持维护的Linux发行版为**Ubuntu**，会持续更新，**支持OTA在线升级**。

## 支持的操作系统版本

对于`VIM2`，目前支持`Ubuntu 18.04`和`Ubuntu 20.04`两个版本。

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="18.04-tab" data-toggle="tab" href="#18.04" role="tab" aria-controls="18.04" aria-selected="true">Ubuntu 18.04</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="20.04-tab" data-toggle="tab" href="#20.04" role="tab" aria-controls="20.04" aria-selected="false">Ubuntu 20.04</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="18.04" role="tabpanel" aria-labelledby="18.04-tab">

`Ubuntu 18.04`使用的Linux内核为**4.9**，包含**桌面系统**和**server**两个版本。桌面环境默认为**XFCE**桌面。

系统安装类型如下：

* `eMMC` - 使用USB烧录工具直接烧写到eMMC，系统从eMMC启动
* `SD/USB` - 使用工具把系统烧写到SD卡或U盘，系统从SD卡或U盘启动

</div>
<div class="tab-pane fade" id="20.04" role="tabpanel" aria-labelledby="20.04-tab">

`Ubuntu 20.04`使用的Linux内核为**主线内核**，包含**桌面系统**和**server**两个版本。桌面环境默认为**GNOME**桌面。

系统安装类型如下：

* `SD/USB` - 使用工具把系统烧写到SD卡或U盘，系统从SD卡或U盘启动

{% note info %}
主线固件目前支持SD启动，但是在系统启动后还是可以通过命令把固件写入到eMMC。
{% endnote %}

</div>
</div>

{% note info %}
固件名称中包含**EMMC**的为eMMC安装固件，包含**SD-USB**的为SD卡或U盘安装固件。
{% endnote %}

## 如何选择固件

### 根据内核版本选择

目前有**4.9**和**主线内核**两个版本内核，其中，**4.9**内核功能完善，支持好，但是版本较旧；**主线内核**版本为最新版本，并且会持续更新，但是功能相对不是很完善。

如果你想使用稳定完善的功能，那么选择**4.9**内核固件；如果想体验最新内核特性，那么选择**主线内核**固件。

### 根据系统类型选择

如果你不需要桌面环境，只需要命令行界面，那么选择**server**版本固件。
如果你需要桌面环境，那么选择**xfce**桌面固件。

### 根据安装方式选择

如果你需要把固件直接烧写到板载eMMC，那么选择**EMMC**安装固件。
如果你想把系统写入到SD卡或U盘，那么选择**SD-USB**安装固件。

## 固件下载


点击[下载固件](/linux/zh-cn/firmware/Vim2UbuntuFirmware.html)。
