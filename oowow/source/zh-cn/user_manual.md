title: 用户手册
---

![oowow](/oowow/images/oowow.png)

## 什么是OOWOW？

OOWOW是一个轻量级嵌入式系统（集成在板子上）- 如果你想控制你的板子，你可以在任何情况下启动并运行这个系统。

*说明：VIM4是Khadas第一款出厂预装OOWOW系统的SBC。虽然没有出厂预装Android或Ubuntu等系统，但是用户可以通过OOWOW轻松地选择安装自己感兴趣的系统。*

## OOWOW功能

OOWOW提供快速在线下载和安装系统等功能，可以大大提升使用SBC安装系统时的体验 - 你可以使用OOWOW在2~3分钟内安装或重装任何兼容的操作系统。

## OOWOW向导

如果你的SBC还没有安装任何操作系统，那么在上电后会默认启动OOWOW并进入向导模式，通过向导模式你可以用4步操作完成新系统的安装。

* 通过网线或Wi-Fi连接到网络
* 浏览SBC支持的系统
* 选择你要安装的系统
* 下载并安装系统到你的SBC

查看[向导模式操作示例](https://dl.khadas.com/.temp/oowow/screencast/quick-start/-gallery?play=loop)。

***提示：如果你想体验更多功能，你可以退出向导模式并进入主菜单界面。***

## 主要功能

* 安装、重装系统
* 在线下载系统固件
* 备份、还原系统
* 查看SBC信息
* 配置SBC
* SBC硬件功能测试
* 在线脚本
* 系统救援终端
* 开发者和高级功能

## 硬件

### 硬件按键

你可以使用板载的3个按键与OOWOW进行交互，接下来会详细介绍如何交互。

* RESET - 复位重启设备
* FUNCTION - 多功能
* POWER - 多功能

### VIM4按键说明

* 启动OOWOW - 按住**FUNCTION**按键不松手，然后短按**RESET**按键，再松开**FUNCTION**按键
* 切换Easy Wi-Fi - 短按**POWER**按键
* 切换Wi-Fi热点 - 短按**FUNCTION**按键
* 允许连接Wi-Fi热点 - 短按**POWER**按键
* 关机 - 长按**POWER**按键直至关机
* 进入多功能模式 - 长按**FUNCTION**按键(循环功能模式：热点 -> 防火墙允许连接 -> 防火墙禁止连接 -> 取消，每个模式切换等待2S)，释放按键激活当前功能

***提示：所有的状态切换都在OOWOW状态栏有显示，同时也会有LED指示。***

### 启动OOWOW

* 在启动OOWOW前先移除TF卡（TF卡拥有最高启动优先级）
* 开机状态下启动：按住**FUNCTION**按键同时短按**RESET**按键，然后释放**FUNCTION**按键
* 关机状态下启动：按住**FUNCTION**按键，然后接上电源并释放**FUNCTION**按键

### LED状态指示

大部分的系统事件都有对应的LED状态指示：

* 设备启动或重启：**白灯常亮**
* 设备关机：**红灯常亮**
* 系统启动默认模式：**白灯心跳闪烁**
* 网络连接上：**白灯常亮**
* 激活热点模式：**白灯快闪**
* 热点模式准备好：**白灯常亮**
* 等待连接热点模式：**白灯和红灯同时闪烁**
* 允许连接热点：**白灯慢闪**
* 关闭热点模式：**白灯心跳闪烁**
* 激活Easy Wi-Fi：**白灯闪烁**
* Easy Wi-Fi模式等待连接：**白灯慢闪**
* 关闭Easy Wi-Fi：**白灯心跳闪烁**
* 防火墙阻止连接：**红灯呼吸**
* 防火墙允许连接：**白灯常亮**
* 防火墙关闭：**红等闪烁**
* 安装固件：**红灯和白灯闪烁**
* 固件安装完成：**白灯常亮，红灯关闭**

多功能模式：

* 热点：**白灯关闭**
* 防火墙阻止连接：**白灯常亮，红灯关闭**
* 防火墙允许连接：**白灯和红灯常亮**
* 取消：**白灯闪烁**

## 接口

### 主菜单

OOWOW提供通用的用户界面（终端菜单+顶部状态栏），可以通过HDMI显示器、网页、SSH、串口终端等显示（所有接口都是同时工作的）。

#### 导航

* 按键：0-9 A-Z ⇦ ⇨ ⇧ ⇩ Space Enter Esc Tab
* 鼠标：选择菜单、单击

#### HDMI显示器+键盘

HDMI显示器和键盘是首选的交互方式。

#### 网页访问

示例：

* http://DEVICE_IP 或 http://DEVICE_HOST_NAME - 设备页面
* http://vim4-xxxxx.local/x/ - 欢迎页面
* http://vim4-xxxxx.local/x/control - 主界面

***提示：可以通过防火墙拒绝连接。***

#### 移动端导航

* 按键：0-9 A-Z Space Enter
* 触摸屏: 选择菜单、单点触摸
* 虚拟键盘：⇦ ⇨ ⇧ ⇩ Esc Tab

#### SSH访问

* 默认免密码root用户登录
* `ssh root@vim4-xxxxx.local` - 原始终端，无菜单
* `ssh root@vim4-xxxxx.local system` - 主菜单

***提示：可以通过防火墙拒绝连接。***

#### 串口访问

仅仅适用于开发者。

* 参考[文档](setup_serial_tool.html)配置串口
* 默认root用户免密码登录
* 执行`system`命令进入主菜单

### WEB API

仅仅适用于开发者。

## 网络

网络用于以下场景：

* 系统下载和安装
* OOWOW系统更新
* 动态同步在线脚本
* 远程控制

### 设备网络域名

每一个OOWOW设备都有一个唯一的网络域名。

device-xxxxx:

* device: 设备名字，全小写，如：vim4
* xxxxx: 序列号最后五位

网络域名示例：

* vim4-00010
* vim4-00012
* vim3-12333

### 域名解析

取决于网络配置，例如：

* vim4-00010 - dns resolver
* vim4-00010.local - umdns resolving - canonical variant for OOWOW
* …

***提示：***

* *如果域名无法解析则可以使用ip地址*
* *OOWOW使用DHCP主机名*
* *OOWOW使用MDNS主机名*

### 网络域名使用示例

```bash
# ping vim4-05690
PING vim4-05690 (192.168.30.203) 56(84) bytes of data.
64 bytes from 192.168.30.203 (192.168.30.203): icmp_seq=1 ttl=64 time=37.3 ms

# ping -c1 vim4-05690.local
PING vim4-05690.local (192.168.30.203) 56(84) bytes of data.
64 bytes from 192.168.30.203 (192.168.30.203): icmp_seq=1 ttl=64 time=37.3 ms

# curl http://vim4-05690.local
# curl http://192.168.30.203
# curl 192.168.30.203
# ssh root@vim4-05690
# ssh root@vim4-05690.local
```

### 以太网局域网

以太网只需通过网线连接到路由器即可以使用。

### 无线局域网

可以通过如下菜单选项连接无线局域网：
***Network -> Wi-Fi -> Wi-Fi Select Connection***

***提示：***

* *Wi-Fi配置信息会自动保存*
* *所有的系统配置必须在正常关机的情况下才会保存。查看[关机流程动画演示](http://dl.khadas.com/.temp/oowow/screencast/howto-save-setting/-gallery?play=auto&delay=2)*

### Easy Wi-Fi

Easy Wi-Fi用于在没有有线网络和Wi-Fi路由器的场景，这时你可以自己开通一个特定的Wi-Fi热点（比如使用手机开通热点）来让OOWOW连接。

你可以通过如下两种方式打开Easy Wi-Fi模式：

* 切换Easy Wi-Fi - 短按**POWER**按键
* ***Network -> Wi-Fi -> Easy Wi-Fi oowow > Enable / Disable***

配置热点用户名和密码如下：

* SSID: **oowow**
* Password: **12345678**

当OOWOW处于Easy Wi-Fi模式，同时你也打开了如上SSID和密码的Wi-Fi热点时，OOWOW会自动连接到这个Wi-Fi热点。

### 热点

你可以通过如下两种方法打开热点模式：

* 切换热点 - 短按**FUNCTION**按键
* ***Network -> Hotspot -> Hotspot Enable / Disable***

OOWOW热点模式热点SSID和密码如下：

* SSID: **vim4-xxxxx** ( xxxxx - 序列号最后5位)
* Password: **12345678**

热点模式下可以通过主机名来访问，如下：

* http://172.23.0.1
* http://oowow 或 http://oowow.local - 仅仅适用于热点模式
* http://vim4-xxxxx 或 http://vim4-xxxxx.local

***提示：出于安全考虑，你必须手动允许设备连接到热点 - 短按POWER按键允许连接。***

### 热点二维码

***Network -> Hotspot -> Hotspot QR code***

### 网页访问二维码

* ***Network -> Hotspot -> Device Web Access QR code***
* ***Network -> Wi-Fi -> Device Web Access QR code***

### USB网络

仅仅适用于开发者。通过USB数据线连接设备和电脑，连接为点对点连接。

### 防火墙

***Network -> Firewall Mode:***

* block - 阻止所有连接 **安全**
* allow - 允许所有局域网连接 **推荐**
* disabled -  关闭防火墙，允许所有连接 **风险**


***提示：***

* *防火墙默认禁止远程连接*
* *可以轻松地通过按键切换防火墙模式*
* *ICMP包是允许的*
* *热点模式下仅仅在按下POWER按键后才允许连接（设备访问：172.23.0.1或http://172.23.0.1）*
* *USB连接访问总是允许的*

### 用法举例

#### Wi-Fi配置向导

查看[这里](http://dl.khadas.com/.temp/oowow/screencast/wizard-wifi-usage/-gallery?play=loop)。

#### Wi-Fi连接

查看[这里](http://dl.khadas.com/.temp/oowow/screencast/network-wifi-setup/-gallery?play=loop)。

#### Easy Wi-Fi连接

查看[这里](http://dl.khadas.com/.temp/oowow/screencast/easy-wifi-mode/-gallery)。

#### 热点模式

查看[这里](http://dl.khadas.com/.temp/oowow/screencast/hotspot-mode/-gallery)。

#### 热点模式 + 以太网

网线提供以太网访问，热点用于设备访问。

#### 热点模式 + Wi-Fi连接

Wi-Fi提供以太网访问，热点用于设备访问。

#### 以太网

待补充。

## 安全和隐私

* OOWOW仅按用户需求工作，绝不在后台工作
* OOWOW不会发送任何设备相关隐私数据到网络
* 默认情况下远程访问是被防火墙禁止的

## 功能限制

* Unicode 国际符号无法正确在HDMI显示器显示（Wi-Fi SSID）
* IPV6当前是禁止的

## 系统升级

* 在网络可用时会自动获取更新并提示用户进行升级
* 用户必须手动操作允许系统升级
* 在升级过程中不要关闭设备，否则可能导致系统无法启动

## 下载OOWOW

查看[这里](https://dl.khadas.com/products/vim4/firmware/oowow/system/)获取OOWOW系统固件。

### 固件类型

* vim4-oowow-latest-sd.img.gz - 最新的用于烧写到TF卡或U盘的固件
* vim4-oowow-latest-spi.img.gz - 最新的用于烧写到SPI Flash的固件
* vim4-oowow-latest-spi-upgrade-sd.img.gz - 最新的用于通过TF卡更新SPI Flash的固件

### 最新OOWOW固件

* vim4-oowow-latest-sd.img.gz -> versions/vim4/vim4-oowow-VERSION-sd.img.gz

***提示：使用这个连接可以下载最新的OOWOW固件：https://dl.khadas.com/products/vim4/firmware/oowow/system/vim4-oowow-latest-sd.img.gz***。

命令行下载：

* `curl -JOL https://dl.khadas.com/products/vim4/firmware/oowow/system/vim4-oowow-latest-sd.img.gz`
* `wget --content-disposition https://dl.khadas.com/products/vim4/firmware/oowow/system/vim4-oowow-latest-sd.img.gz`

## 关于OOWOW

### 为什么开发OOWOW？

对于普通SBC用户来说安装系统是一件很头疼的事情，按照以往的方式，为了安装系统必须阅读各种各样的手册文档去学习如果通过电脑来烧写安装系统，如果操作不当很有可能导致系统无法启动（虽然我们可以通过TST模式在任何情况下烧写固件）。

换句话说，任何系统升级、维护或系统安装都需要基本的操作技能和额外的硬件设备（电脑），但是这通常对于普通用户来说是有一定难度的或者在没有电脑的情况下是无法操作的。如果使用OOWOW，你的SBC就变成了一台独立的设备，你可以在这台设备上进行所有的操作。

OOWOW深入了解终端用户, 它为当今和未来市场上的所有SBC提供开箱即用的通用操作系统交付和设备配置解决方案。

用OOWOW让生活变得更轻松！

### OOWOW是什么意思？

oowow - infinity level wow (will be a new 77th word in the English dictionary).

* 发音：/uː/  +  /wau/ = /u:wau/
* Variations: ∞wow, infinity wow, endless wow

***提示：***
* *https://en.wiktionary.org/wiki/wow*
* *https://www.crosswordsolver.org/words-starting-with-oo*
