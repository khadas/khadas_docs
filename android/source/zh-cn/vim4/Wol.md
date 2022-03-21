title: WOL使用说明
---

以太网唤醒（WOL）允许你用手机或电脑通过局域网或广域网唤醒设备。

VIM2、VIM3、VIM4和Edge不同于VIM1的一点就是具有以太网唤醒功能。

首先，你需要把VIM4通过网线接入局域网，并查看VIM4的MAC地址。

## 获取以太网MAC地址

通过`Settings-->Khadas Settings-->Ethernet`菜单查下MAC地址。

<img src="/android/images/vim4/Vim4AndroidMAC.png" width="75%" height="75%">

## 使能WOL功能
 
通过`Settings-->Khadas Settings-->WOL`使能**WOL**。

<img src="/android/images/vim4/Vim4AndroidWOL.png" width="75%" height="75%">

## 开始测试

1. 通过网线连接VIM4到局域网。
2. 关闭VIM4。
3. 在Android系统下通过以太网唤醒WOL。

* 在Windows下， 你需要下载安装 **[Wake-On-LAN Sender](http://www.yarovy.com/wol/)** 工具

![sender](/android/images/vim2/wol_sender_main.png)

* 添加远程电脑

![sender_add](/android/images/vim2/wol_sender_add_remote.png)

* 通过如下按钮唤醒VIM4

![sender](/android/images/vim2/wol_sender_send.png)


* 注意：在iPhone下， 你可以在应用商店搜索 **Wake On Lan** 工具

## 更多
[KBI参考](/android/zh-cn/vim4/KbiGuidance.html)
