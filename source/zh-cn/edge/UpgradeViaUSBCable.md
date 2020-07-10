title: 通过USB升级固件
---
## 通过Windows升级
### 准备
* 下载[USB驱动_v4.91](https://dl.khadas.com/Tools/DriverAssitant_v4.91.zip)并解压。
* 运行`DriverInstall.exe`来安装USB驱动。
  * 先点击`驱动卸载`来卸载旧的驱动。
  ![DriverInstall uninstall](/images/edge/DriverInstall_uninstall_zh.png)
  * 在点击`驱动安装`来安装新的驱动。
  ![DriverInstall install](/images/edge/DriverInstall_install_zh.png)
* 下载[AndroidTool_Release_zh_v2.71](https://dl.khadas.com/Tools/AndroidTool_Release_zh_v2.71.zip)并解压。
* `AndroidTool.exe`就是烧录工具，是免安装的，直接运行即可。

### 升级步骤
确保USB驱动已经安装，并按如下步骤进行升级。

1. 运行`AndroidTool.exe`, 点击`升级固件-->固件`来加载镜像文件。
![AndroidTool firmware select](/images/edge/AndroldTool_firmware_zh.png)
2. 通过USB-C数据线连接Edge和PC。
3. 使Edge[进入升级模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)。
4. 执行上述操作后你会看到Edge升级模式设备。
* Loader模式如下：
![AndroidTool loader](/images/edge/AndroldTool_loader_zh.png)
* Maskrom模式如下：
![AndroidTool maskrom](/images/edge/AndroldTool_maskrom_zh.png)

如果板子为 `android 7.1` 升级到 `android 9.0` 固件或者
板子为 `android 9.0` 升级到 `android 7.1` 固件，需要先执行`擦除Flash`。
* 擦除Flash模式如下：
![AndroidTool maskrom](/images/edge/AndroidTool_erase_zh.png)

现在执行`升级`就会开始升级：
![AndroidTool upgrade](/images/edge/AndroldTool_upgrade_zh.png)

## 在Ubuntu下升级固件
### 准备
```
$ sudo apt-get install libusb-dev git parted
```
### 获取烧录工具
镜像烧录工具在仓库[utils](https://github.com/khadas/utils)中。
```
$ git clone https://github.com/khadas/utils
```
如果以前克隆过仓库，只需更新即可：
```
$ cd /path/to/utils
$ git pull
```
### 安装烧录工具
需要安装USB规则文件以及创建链接文件。
```
$ cd /path/to/utils
$ ./INSTALL
```
如果成功你会看到如下打印信息：
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
**注意：** 安装需要`root`权限。

### 如何在Ubuntu下烧录镜像
有2个命令可以用于烧录镜像：`burn-tool`和`rk-burn-tool`。

* 使用通用命令`burn-tool`烧录：

```
$ burn-tool -v rk -i /path/to/image
```

* 使用Rockchip平台专用命令`rk-burn-tool`烧录：

```
$ rk-burn-tool -i /path/to/image
```

如果执行成功你会看到如下打印信息：
```
Try to burn Rockchip image...
Rockchip Android image (or linux image compatible with AndroidTool one image burning) found!
Try to burn Rockchip image...
Loading firmware...
Support Type:RK330C	FW Ver:6.0.277	FW Time:2018-06-15 17:10:26
Loader ver:1.12	Loader Time:2018-06-15 16:59:09
Upgrade firmware ok.
Done!
```

### 如何卸载烧录工具
```
$ cd /path/to/utils
$ ./UNINSTALL
```

**注意：**烧录工具只在**Ubuntu 16.04**上验证过。

### 参考
* [如何进入升级模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)

