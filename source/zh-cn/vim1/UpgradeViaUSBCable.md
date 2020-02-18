title: 通过USB升级固件
---

**注意：由于VIM1、VIM2和VIM3操作方式基本上是一样的，所以本文档以VIM1为例进行说明。**

## 通过Windows升级固件
### 准备工作
* 下载升级工具[USB Upgrade Tool](https://dl.khadas.com/Tools/USB_Burning_Tool_v2.2.0.zip)并解压。
* 运行`setup_v2.x.x.exe`程序进行安装。
![image](/images/vim1/usb_upgrade_tool_setup_v217_zh.png)

### 固件升级操作步骤
确保已经正确安装好升级工具，按照下面步骤进行升级：

1. 打开升级工具`USB_Burning_Tool_v2.x.x.exe`，点击"File-->Import image"选择要升级的固件。
2. 用USB-C线连接VIMs和PC电脑（默认VIMs上电会自动开机）。
3. 进入固件更新模式
	* 长按Power键不要松开
	* 短按Rest键并松开
	* 大概10秒后松开Power键进入固件升级模式
4. 如果上面操作已正确执行，电脑端会发现VIMs升级设备，点击升级工具上的start按钮开始固件升级,升级进度条100%时完成升级。
![image](/images/vim1/usb_upgrade_tool_interface_v217_zh.png)

提示：
* 先点击"stop"按钮再关闭升级工具。
* 外部供电要求([VIM1](/zh-cn/vim1/ExtraPowerInput.html)/[VIM2](/zh-cn/vim2/ExtraPowerInput.html)/[VIM3](/zh-cn/vim3/ExtraPowerInput.html))，部分电脑供电比较弱会导致升级失败。

## 通过Ubuntu升级固件
### 准备
```
$ sudo apt-get install libusb-dev git parted
```
### 获取ubuntu烧录工具
烧录工具在仓库[utils](https://github.com/khadas/utils)中.
```
$ git clone https://github.com/khadas/utils
```
如果你之前已经下载过`utils`仓库，那么你只需要更新到最新版本即可。
```
$ cd /path/to/utils
$ git pull
```
### 安装烧录工具
需要安装usb规则以及创建链接文件。
```
$ cd /path/to/utils
$ ./INSTALL
```
如果成功安装你会看到如下信息：
```
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
**注意** 安装过程中需要root权限。

### 检查USB驱动
首先设置VIMs进入升级模式([VIM1](/zh-cn/vim1/HowtoBootIntoUpgradeMode.html)/[VIM2](/zh-cn/vim2/HowtoBootIntoUpgradeMode.html)/[VIM3](/zh-cn/vim3/HowtoBootIntoUpgradeMode.html))，然后检查USB驱动：
```
$ lsusb | grep Amlogic
Bus 002 Devices 036: ID 1b8e:c003 Amlogic, Inc.
```
以上信息说明PC已经识别到了VIM3

### 如何在Ubuntu下烧录固件
有2个命令可以用于烧录固件：`burn-tool`和`aml-burn-tool`。


以烧录VIM3为例：

* 通过烧录命令`burn-tool`：

```
$ burn-tool -v aml -b VIM3 -i /path/to/image
```

* Amlogic平台专用烧录命令`aml-burn-tool`：

```
$ aml-burn-tool -b VIM3 -i /path/to/image
```

**注意：烧录VIM3一定要指定`-b VIM3`参数，否则会失败。对于VIM1或VIM2，可以指定，也可以不指定。**

如果烧录成功你会看到如下信息：
```
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

### 卸载烧录工具
```
$ cd /path/to/utils
$ ./UNINSTALL
```
