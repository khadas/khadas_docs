title: 远程唤醒
---

以太网唤醒（WOL）允许你用手机或电脑通过局域网或广域网唤醒设备。

VIM2、VIM3、VIM4和Edge不同于VIM1的一点就是具有以太网唤醒功能。

**注意：由于VIM2、VIM3、VIM4和Edge操作方式基本相同，所以本文以VIM2为例进行说明。**

首先，你需要把VIM2通过网线接入局域网，并查看VIM2的MAC地址。

## Ubuntu

### 获取以太网MAC地址

1.在背面贴有MAC地址。

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="vim2-tab" data-toggle="tab" href="#vim2" role="tab" aria-controls="vim2" aria-selected="true">VIM2</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim3-tab" data-toggle="tab" href="#vim3" role="tab" aria-controls="vim3" aria-selected="false">VIM3</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="vim4-tab" data-toggle="tab" href="#vim4" role="tab" aria-controls="vim4" aria-selected="false">VIM4</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="edge-tab" data-toggle="tab" href="#edge" role="tab" aria-controls="edge" aria-selected="false">Edge</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="vim2" role="tabpanel" aria-labelledby="vim2-tab">

<img src="/linux/images/vim2/vim2_wol.png" width="800px">

</div>
<div class="tab-pane fade" id="vim3" role="tabpanel" aria-labelledby="vim3-tab">

<img src="/linux/images/vim3/vim3_wol.png" width="800px">

</div>
<div class="tab-pane fade" id="vim4" role="tabpanel" aria-labelledby="vim4-tab">

<img src="/linux/images/vim4/vim4_wol.png" width="800px">

</div>
<div class="tab-pane fade" id="edge" role="tabpanel" aria-labelledby="edge-tab">

<img src="/linux/images/edge/edge_wol.jpg" width="800px">

</div>
</div>


如果背面贴的MAC地址损坏了，你还可以通过如下方式获取MAC地址。

2.在终端执行 `ifconfig` 获取MAC地址。
```
khadas@khadas:~$ ifconfig
eth0      Link encap:Ethernet  HWaddr 98:aa:fc:60:46:de
          inet addr:192.168.1.142  Bcast:192.168.1.255  Mask:255.255.255.0 
          inet6 addr: fe80::9aaa:fcff:fe60:46de/64 Scope: Link


```
可以看到以太网MAC地址为**98:aa:fc:60:46:de**。

### 使能WOL功能

1. 默认`WOL`功能是关闭的，你可以通过[KBI](KbiGuidance.html)命令使能`WOL`功能。

```sh
kvim2# kbi trigger wol w 1
``` 

通过如下命令可以查看WOL状态。

```sh
kvim2# kbi trigger wol r
boot wol: enable
```

2. 在Ubuntu系统中，可以通过 **Applications->Wake On LAN Setting** 使能 **WOL**。
 
![wol](/linux/images/vim2/vim2_ubuntu_wol1.png)
 
* 选择模式为 **On** 即可。
 
![wol](/linux/images/vim2/vim2_ubuntu_wol2.png)

### 开始测试

**1. 通过网线连接VIM2到局域网。**
 
**2. 关机。**
 
**3. 在Ubuntu系统下通过以太网唤醒WOL。**

* 安装**wakeonlan** 工具

```
$ sudo apt update
$ sudo apt install wakeonlan
```

* 执行以下命令来唤醒VIM2：

``` 
$ wakeonlan 98:aa:fc:60:46:de
```

## 更多
[KBI参考](KbiGuidance.html)
