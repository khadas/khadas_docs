title: LTE 4G 模块
---

## 运营商以及频段支持

查看所在地区支持的运营商和频段，可以在以下两个网站进行查看：

1. [frequencycheck](https://www.frequencycheck.com/carriers)
2. [spectrumonitoring](https://www.spectrummonitoring.com/frequencies/)


## LTE模块工作模式设置

### 安装minicom

```shell
$ sudo apt update
$ sudo apt install minicom
```

### 设置成USBNet模式

```shell
$ minicom -D /dev/ttyUSB2
```

打开minicom以后输入如下命令：

```shell
AT+QCFG="usbnet",2

OK
```

### 掉电重启

LTE模块需要掉电重启才能切换模式，拔出VIMs的电源，重新插上。LTE模块现在就工作在USBNet模式了。

### 恢复LTE模块

```shell
$ minicom -D /dev/ttyUSB2
```

默认的工作方式是`0`：

```shell
AT+QCFG="usbnet",0
```

同样掉电重启切换回默认模式。

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="desktop-tab" data-toggle="tab" href="#desktop" role="tab" aria-controls="desktop" aria-selected="true">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="server-tab" data-toggle="tab" href="#server" role="tab" aria-controls="server" aria-selected="false">Server</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="desktop" role="tabpanel" aria-labelledby="desktop-tab">

#### Step1: 打开 `Mobile Board Settings`

![LTE_gnome_open](/linux/images/vim3/lte_gnome_open.png)


在右上角菜单栏选中以后，就会看到`Mobile Board Settings`选项。

#### Step2: 新建一个连接

点击Network,选择`Add new connection`,点击以后`Next`:

![LTE_gnome_new](/linux/images/vim3/lte_gnome_new.png)
![LTE_gnome_next](/linux/images/vim3/lte_gnome_next.png)

#### Step3: 选择运营商所在国家

选择运营商所在国家，这个应该与sim卡相同。

![LTE_gnome_country](/linux/images/vim3/lte_gnome_country.png)

#### Step4: 选择运营商

选择运营商，这里应与你的sim卡相同。

![LTE_gnome_provider](/linux/images/vim3/lte_gnome_provider.png)

#### Step5: 输入密码连接

选择完运营商以后，一路`Next`，最后`apply`。此时需要输入密码 ，默认是`000`。

![LTE_gnome_apply](/linux/images/vim3/lte_gnome_apply.png)
![LTE_gnome_psk](/linux/images/vim3/lte_gnome_psk.png)

输入以后以后就能正常连接了。

![LTE_gnome_success](/linux/images/vim3/lte_gnome_success.png)

#### 修改连接密码

打开相应的设置，在`Mobile Broadband`里面可以更新密码。

![LTE_gnome_change_psk](/linux/images/vim3/lte_gnome_change_psk.png)

</div>
<div class="tab-pane fade show active" id="server" role="tabpanel" aria-labelledby="desktop-tab">

## 在ubuntu服务器版本上使用LTE模块

在服务器版本上，只要使用一个命令就可以连接LTE模块的网络。

```
$ sudo nmcli connection add type gsm apn 3gnet user 0000 password 0000 con-name "EM06 4G"

```

</div>
</div>

## 如何确认连接是否成功

使用ping命令就可以而是网络了，加上`-I`选项就可以选中LTE模块的网络。

### 确认LTE模块的网络节点
```
$ ifconfig -a
...

wwan0: flags=4098<BROADCAST,MULTICAST>  mtu 1500
        ether 1a:68:e0:a7:94:88  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

...
```

使用`ifconfig -a` 命令就可以看到找到`wwan0`的节点。

### 使用`ping`命令测试

```
$ ping www.baidu.com -I wwan0
```

如果网络正常，就可以ping通。

