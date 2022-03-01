title: 通过USB升级固件
---

{% note info VIM4升级工具需要V3.2.0版本以上，若导入VIM1/VIM2/VIM3固件时会自动切换成旧版本工具，即此版本工具不能向下兼容。%}

{% endnote %}

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="win-tab" data-toggle="tab" href="#win" role="tab" aria-controls="win" aria-selected="true">Windows</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="ubu-tab" data-toggle="tab" href="#ubu" role="tab" aria-controls="ubu" aria-selected="false">Ubuntu</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="win" role="tabpanel" aria-labelledby="win-tab">

## 准备工作
* 下载升级工具[Aml_Burn_Tool_V3.2.0](https://dl.khadas.com/products/vim4/tool/Aml_Burn_Tool_V3.2.0.zip)并解压。
* 运行 `Aml_Burn_Tool.exe` 程序直接打开，不需要安装。
![image](/android/images/vim4/upgrade_tool_setup.png)

## 固件升级操作步骤
确保已经正确安装好升级工具，按照下面步骤进行升级：

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim4-tab" data-toggle="tab" href="#vim4-pins" role="tab" aria-controls="vim1" aria-selected="true">VIM4</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim123-tab" data-toggle="tab" href="#vim123-pins" role="tab" aria-controls="vim123" aria-selected="false">VIM1/VIM2/VIM3</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim4-pins" role="tabpanel" aria-labelledby="vim4-tab">

1. 打开升级工具`Aml_Burn_Tool`，点击`Setting-->Load Img`选择要升级的固件。
2. 用USB-C线连接VIMs和PC电脑（默认VIMs上电会自动开机）。
3. 进入固件更新模式
    * 长按Power键不要松开
    * 短按Rest键并松开
    * 大概10秒后松开Power键进入固件升级模式
4. 如果上面操作已正确执行，升级工具会发现`Connect`字符，点击升级工具上的`Start`按钮开始固件升级,升级进度条100%时完成升级。
   <img src="/android/images/vim4/upgrade_tool_interface.png" width="75%" height="75%">
</div>

<div class="tab-pane fade" id="vim123-pins" role="tabpanel" aria-labelledby="vim123-tab">

1. 打开升级工具`USB_Burning_Tool.exe`，点击"File-->Import image"选择要升级的固件。
2. 用USB-C线连接VIMs和PC电脑（默认VIMs上电会自动开机）。
3. 进入固件更新模式
    * 长按Power键不要松开
    * 短按Rest键并松开
    * 大概10秒后松开Power键进入固件升级模式
4. 如果上面操作已正确执行，电脑端会发现VIMs升级设备，点击升级工具上的start按钮开始固件升级,升级进度条100%时完成升级。
	<img src="/android/images/vim4/upgrade_tool_interface_VIM123.png" width="75%" height="75%">
</div>

{% note info 提示 %}

* 先点击`stop`按钮再关闭升级工具。
* 外部供电要求([VIM4](/android/zh-cn/vim4/ExtraPowerInput.html))，部分电脑供电比较弱会导致升级失败。

{% endnote %}

</div>
<div class="tab-pane fade" id="ubu" role="tabpanel" aria-labelledby="ubu-tab">

## 准备

```bash
$ sudo apt-get install libusb-dev git parted
```

## 获取ubuntu烧录工具

烧录工具在仓库[utils](https://github.com/khadas/utils)中。

```bash
$ git clone https://github.com/khadas/utils
```

如果你之前已经下载过`utils`仓库，那么你只需要更新到最新版本即可。

```bash
$ cd /path/to/utils
$ git pull
```

## 安装烧录工具

需要安装usb规则以及创建链接文件。

```bash
$ cd /path/to/utils
$ ./INSTALL
```

如果成功安装你会看到如下信息：

```bash
Installing Amlogic flash-tool...

===============================================

 Host PC: Ubuntu 16.04
 
 ===============================================
 
 Installing USB rules...
 [sudo] password for nick:
 Installing flash-tool...
 Done!
 
 Installing Rockchip flash-tool...
 
 ===============================================
         
 Host PC: Ubuntu 16.04
                 
 ===============================================
                   
 Installing USB rules...
 Installing flash-tool...
 Done!
 Installing Khadas burn
 Done!
```

{% note info 注意 %}

安装过程中需要root权限。

{% endnote %}

## 检查USB驱动
首先设置VIMs进入升级模式([VIM1](/android/zh-cn/vim1/BootIntoUpgradeMode.html)/[VIM2](/android/zh-cn/vim2/BootIntoUpgradeMode.html)/[VIM3](/android/zh-cn/vim3/BootIntoUpgradeMode.html))，然后检查USB驱动：

```bash
$ lsusb | grep Amlogic
Bus 002 Devices 036: ID 1b8e:c003 Amlogic, Inc.
```

以上信息说明PC已经识别到了VIM3

## 在Ubuntu下烧录固件

有2个命令可以用于烧录固件：`burn-tool`和`aml-burn-tool`。

以烧录VIM3为例：

* 通过烧录命令`burn-tool`：

```bash
$ burn-tool -v aml -b VIM3 -i /path/to/image
```

* Amlogic平台专用烧录命令`aml-burn-tool`：

```bash
$ aml-burn-tool -b VIM3 -i /path/to/image
```

{% note info 注意 %}

烧录VIM3一定要指定`-b VIM3`参数，否则会失败。对于VIM1或VIM2不用指定。

{% endnote %}

如果烧录成功你会看到如下信息：

```bash
Rebooting the board ........[OK]
Unpacking image [OK]
Initializing ddr ........[OK]
Running u-boot ........[OK]
Create partitions [OK]
Writing device tree [OK]
Writing bootloader [OK]
Wiping  data partition [OK]
Wiping  cache partition [OK]
Writing boot partition [OK]
Writing data partition [OK]
Writing logo partition [OK]
Writing system partition [OK]
Do you want to reset the board? y/n [n]? y
Resetting board [OK]

```

更多请参考[文档](https://github.com/khadas/utils/tree/master/aml-flash-tool/docs)。

## 卸载烧录工具

```bash
$ cd /path/to/utils
$ ./UNINSTALL
```

</div>
</div>

