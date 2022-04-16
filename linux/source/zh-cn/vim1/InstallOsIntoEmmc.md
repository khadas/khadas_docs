title: 安装操作系统到eMMC
---

所有VIM系列板子都有**板载eMMC存储**，可以通过**USB烧录工具**把**系统**安装到**eMMC**。

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="win-tab" data-toggle="tab" href="#win" role="tab" aria-controls="win" aria-selected="true">在Windows下安装</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="ubu-tab" data-toggle="tab" href="#ubu" role="tab" aria-controls="ubu" aria-selected="false">在Ubuntu下安装</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="win" role="tabpanel" aria-labelledby="win-tab">

## 准备

1. 下载升级工具[USB Upgrade Tool](http://dl.khadas.com/products/vim4/tool/Aml_Burn_Tool_V3.2.0.zip)并解压。
2. 烧录工具目录说明：
  ![image](/linux/images/vim1/usb_upgrade_tool_dir_1.png)
  * `V2`和`V3`文件夹存放了原始的烧录工具文件
  * `burn tool`文件夹存放的是不同板子的烧录工具以及驱动
3. `burn tool`目录说明：
  ![image](/linux/images/vim1/usb_upgrade_tool_dir_2.png)
  * `Driver-VIM1_2_3` VIM1/VIM2/VIM3/VIM3L板子的驱动文件
  * `Driver-VIM4` VIM4板子的驱动文件
  * `VIM1_2_3.exe` VIM1/VIM2/VIM3/VIM3L板子的烧录工具
  * `VIM4.exe` VIM4板子的烧录工具

## 安装系统到eMMC

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim1-tab" data-toggle="tab" href="#vim1-tool" role="tab" aria-controls="vim1" aria-selected="true">VIM1/VIM2/VIM3</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-tab" data-toggle="tab" href="#vim4-tool" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1-tool" role="tabpanel" aria-labelledby="vim1-tab">

**安装驱动**

1. 进入`Driver-VIM1_2_3`目录，安装`dpscat.exe`，此安装过程很快，并且没有任何显示。
2. 安装`dpinst64.exe`。安装成功，就可以烧录固件了。

**确保已经正确安装好驱动，然后按照下面步骤进行升级：**

1. 进入`burn tool`目录，打开升级工具`VIM1_2_3.exe`，点击`File-->Import image`选择要升级的固件。
2. 用USB-C线连接板子和PC电脑（默认板子上电会自动开机）。
3. 进入固件[升级模式](BootIntoUpgradeMode.html)。
4. 如果上面操作已正确执行，电脑端会发现板子升级设备，点击升级工具上的`开始`按钮开始固件升级,升级进度条100%时完成升级。

![image](/linux/images/vim1/usb_upgrade_tool_interface_v217_zh.png)

</div>
<div class="tab-pane fade" id="vim4-tool" role="tabpanel" aria-labelledby="vim4-tab">

**安装驱动**

1. 进入`Driver-VIM4`目录，安装`dpscat.exe`，此安装过程很快，并且没有任何显示。
2. 安装`dpinst64.exe`。安装成功，就可以烧录固件了。


**确保已经正确安装好驱动，然后按照下面步骤进行升级：**

1. 进入`burn tool`目录，打开升级工具`VIM4.exe`，点击`设置-->加载镜像`选择要升级的固件。
2. 用USB-C线连接板子和PC电脑（默认板子上电会自动开机）。
3. 进入固件[升级模式](BootIntoUpgradeMode.html)。
4. 如果上面操作已正确执行，电脑端会发现板子升级设备，点击升级工具上的`Start`按钮开始固件升级,升级进度条100%时完成升级。

![image](/linux/images/vim4/usb_upgrade_tool_interface_zh.png)

</div>

{% note info 提示 %}

* 先点击`停止`按钮再关闭升级工具
* [外部供电要求](ExtraPowerInput.html)，部分电脑供电比较弱会导致升级失败
* 如果你的系统是32位的系统，在安装驱动时，请选择`dpinst32.exe`
{% endnote %}

</div>
</div>
<div class="tab-pane fade" id="ubu" role="tabpanel" aria-labelledby="ubu-tab">

## 准备

```bash
$ sudo apt-get install libusb-dev git parted
```

## 获取Ubuntu烧录工具

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
首先设置VIMs进入[升级模式](BootIntoUpgradeMode.html)，然后检查USB驱动：

```bash
$ lsusb | grep Amlogic
Bus 002 Devices 036: ID 1b8e:c003 Amlogic, Inc.
```

以上信息说明PC已经识别到了VIM3。

## 安装系统到eMMC

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="boards-tab" data-toggle="tab" href="#vim1vim2" role="tab" aria-controls="vim1vim2" aria-selected="true">VIM1/VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3-tab" data-toggle="tab" href="#vim3" role="tab" aria-controls="vim3" aria-selected="false">VIM3/VIM3L</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-tab" data-toggle="tab" href="#vim4" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim1vim2" role="tabpanel" aria-labelledby="boards-tab">

```bash
$ aml-burn-tool -i /path/to/image
```

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

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

```bash
$ aml-burn-tool -b VIM3 -i /path/to/image
```

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

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

```bash
$ aml-burn-tool -b VIM4 -i /path/to/image
```

</div>
</div>


更多请参考[文档](https://github.com/khadas/utils/tree/master/aml-flash-tool/docs)。

## 卸载烧录工具

```bash
$ cd /path/to/utils
$ ./UNINSTALL
```

</div>
</div>

