title: WOL使用说明
---

以太网唤醒（WOL）允许你用手机或电脑通过局域网或广域网唤醒设备。

VIM2、VIM3和Edge不同于VIM1的一点就是具有以太网唤醒功能。

**注意：由于VIM2、VIM3和Edge操作方式基本相同，所以本文以VIM2为例进行说明。**

首先，你需要把VIM2通过网线接入局域网，并查看VIM2的MAC地址。

## Android

### 获取以太网MAC地址

通过**Settings->More Settings->About->Status**菜单查下MAC地址

![mac](/android/images/vim2/vim2_android_mac.png)

### 使能WOL功能
 
通过**Setting->More Settings->WOL**使能**WOL**。

![wol](/android/images/vim2/vim2_android_wol.png)

### 开始测试
 
**1) 通过网线连接VIM2到局域网**
  
**2) 关闭VIM2**
 
**3) 在Android系统下通过以太网唤醒WOL**

* 在Windows下, 你需要下载安装 **[Wake-On-LAN Sender](http://www.yarovy.com/wol/)** 工具

![sender](/android/images/vim2/wol_sender_main.png)

* 添加远程电脑：

![sender_add](/android/images/vim2/wol_sender_add_remote.png)

* 通过如下按钮唤醒VIM2：

![sender](/android/images/vim2/wol_sender_send.png)


* 注意：在iPhone下, 你可以在应用商店搜索 **wake on lan** 工具。

## 更多
[KBI参考](/android/zh-cn/vim2/KbiGuidance.html)
