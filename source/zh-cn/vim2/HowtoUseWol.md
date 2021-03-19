title: 如何使用WOL
---

以太网唤醒（WOL）允许你用手机或电脑通过局域网或广域网唤醒设备。

VIM2、VIM3和Edge不同于VIM1的一点就是具有以太网唤醒功能。

**注意：由于VIM2、VIM3和Edge操作方式基本相同，所以本文以VIM2为例进行说明。**

首先，你需要把VIM2通过网线接入局域网，并查看VIM2的MAC地址。

## Ubuntu

### 获取以太网MAC地址

1.在VIM2背面贴有MAC地址。

![mac_page](/images/vim2/vim2_mac.jpg)

如果VIM2背面贴的MAC地址损坏了，你还可以通过如下方式获取MAC地址。

2.在终端执行 `ifconfig` 获取MAC地址。
```
khadas@khadas:~$ ifconfig
eth0      Link encap:Ethernet  HWaddr 98:aa:fc:60:46:de
          inet addr:192.168.1.142  Bcast:192.168.1.255  Mask:255.255.255.0 
          inet6 addr: fe80::9aaa:fcff:fe60:46de/64 Scope: Link


```
可以看到以太网MAC地址为**98:aa:fc:60:46:de**。

### 使能WOL功能

1) 默认`WOL`功能是关闭的，你可以通过[KBI](/zh-cn/vim2/KbiGuidance.html)命令使能`WOL`功能。

```sh
kvim2# kbi trigger wol w 1
``` 

通过如下命令可以查看WOL状态。

```sh
kvim2# kbi trigger wol r
boot wol: enable
```

2) 在Ubuntu系统中，可以通过 **Applications->Wake On LAN Setting** 使能 **WOL**。
 
![wol](/images/vim2/vim2_ubuntu_wol1.png)
 
* 选择模式为 **On** 即可。
 
![wol](/images/vim2/vim2_ubuntu_wol2.png)

### 开始测试

**1) 通过网线连接VIM2到局域网**
 
**2) 关闭VIM2**
 
**3) 在ubuntu系统下通过以太网唤醒WOL**

* 安装**wakeonlan** 工具
```
terry@terry:~$ sudo apt-get install wakeonlan
```
执行以下命令来唤醒VIM2：
``` 
terry@terry:~$ wakeonlan 98:aa:fc:60:46:de
```


## Android

### 获取以太网MAC地址

通过**Settings->More Settings->About->Status**菜单查下MAC地址

![mac](/images/vim2/vim2_android_mac.png)

### 使能WOL功能
 
通过**Setting->More Settings->WOL**使能**WOL**。

![wol](/images/vim2/vim2_android_wol.png)

### 开始测试
 
**1) 通过网线连接VIM2到局域网**
  
**2) 关闭VIM2**
 
**3) 在Android系统下通过以太网唤醒WOL**

* 在Windows下, 你需要下载安装 **[Wake-On-LAN Sender](http://www.yarovy.com/wol/)** 工具

![sender](/images/vim2/wol_sender_main.png)

* 添加远程电脑：

![sender_add](/images/vim2/wol_sender_add_remote.png)

* 通过如下按钮唤醒VIM2：

![sender](/images/vim2/wol_sender_send.png)


* 注意：在iPhone下, 你可以在应用商店搜索 **wake on lan** 工具。

## 更多
[KBI参考](/zh-cn/vim2/KbiGuidance.html)
