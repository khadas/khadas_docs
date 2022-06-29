title: 远程唤醒
---

以太网唤醒（WOL）允许你用手机或电脑通过局域网或广域网唤醒设备。

VIM2、VIM3、VIM4和Edge不同于VIM1的一点就是具有以太网唤醒功能。

首先，你需要把VIM4通过网线接入局域网，并查看VIM4的MAC地址。

## 获取以太网MAC地址

通过执行`cat sys/class/net/eth0/address`命令获取MAC地址。

```sh
VIM4:/ $ cat sys/class/net/eth0/address
02:ad:36:01:e4:a1
```
## 使能WOL功能

通过`Settings-->Khadas Settings-->WOL`使能**WOL**。

<img src="/android/images/vim4/vim4_android_wol.png" width="75%" height="75%">

## 开始测试

**1. 通过网线连接VIM4到局域网。**
**2. 关机。**
**3. 在Ubuntu系统下通过以太网唤醒VIM4。**

* 安装**wakeonlan** 工具

```
$ sudo apt update
$ sudo apt install wakeonlan

```

* 执行以下命令来唤醒VIM4：

```
$ wakeonlan 02:ad:36:01:25:55
```

## 更多
[KBI参考](/android/zh-cn/vim4/KbiGuidance.html)
