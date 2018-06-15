title: 通过USB-C数据线升级固件
---

## 通过Windows升级固件
### 准备工作
* 下载升级工具[USB Upgrade Tool](http://www.mediafire.com/file/ori8sd6m3wu1dig/USB_Burning_Tool_v2.1.6.3_zh.zip/file)并解压。
* 运行Run 'setup_v2.x.x.exe'程序进行安装。
![image](/images/vim1/usb_upgrade_tool_setup_v208_zh.png) 

### 固件升级操作步骤
确保已经正确安装好升级工具，按照下面步骤进行升级：

1. 打开升级工具‘USB_Burning_Tool_v2.x.x.exe’，点击"File-->Import image"选择要升级的固件。
2. 用USB-C线连接VIM1/VIM2和PC电脑（默认VIM1/VIM2上电会自动开机）。
3. 进入固件更新模式
   * 长按Power键不要松开
   * 短按Rest键并松开
   * 大概10秒后松开Power键进入固件升级模式
4.  如果上面操作已正确执行，电脑端会发现VIM1/VIM2升级设备，点击升级工具上的start按钮开始固件升级，升级进度条100%时完成升级。
![image](/images/vim1/usb_upgrade_tool_interface_v208_zh.png)

提示：
* 先点击"stop"按钮再关闭升级工具。
* [外部供电要求](/zh-cn/vim1/ExtraPowerInput.html)，部分电脑供电比较弱会导致升级失败。

## 通过Ubuntu升级固件
### 准备
```
$ sudo apt-get install libusb-dev git parted
```
### 获取Ubuntu烧录工具
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
需要安装USB规则以及创建链接文件。
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
Installing Khadas burn-tool...
Done!
```
**注意** 安装过程需要root权限.

### 检查USB驱动
首先设置VIMs进入升级模式([VIM1](/zh-cn/vim1/HowtoBootIntoUpgradeMode.html)/[VIM2](/zh-cn/vim2/HowtoBootIntoUpgradeMode.html))，然后检查USB驱动：
```
$ lsusb | grep Amlogic
Bus 002 Device 036: ID 1b8e:c003 Amlogic, Inc.
```
以上信息表明已经识别到了VIMs。

### 如何在Ubuntu下烧录固件
有2个命令可以用于烧录固件：`burn-tool`和`aml-burn-tool`。

* 通过烧录命令`burn-tool`：

```
$ burn-tool -v aml -i /path/to/image
```

* Amlogic平台专用烧录命令`aml-burn-tool`：

```
$ aml-burn-tool -i /path/to/image
```

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
你可以添加 `--debug` 参数来查看烧录调试打印信息。更多请参考[这里](https://github.com/khadas/utils/tree/master/aml-flash-tool/docs)。

### 卸载烧录工具
```
$ cd /path/to/utils
$ ./UNINSTALL
```

**注意：**Ubuntu烧录工具仅仅在 **Ubuntu 16.04**上验证过。

### 更多资料
* [通过TF卡升级固件](/zh-cn/vim1/UpgradeViaTFBurningCard.html)
* [VIM1 怎样进入升级模式](/zh-cn/vim1/HowtoBootIntoUpgradeMode.html)
* [VIM2 怎样进入升级模式](/zh-cn/vim2/HowtoBootIntoUpgradeMode.html)

