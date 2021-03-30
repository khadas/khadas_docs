title: 如何使用LTE模块
---

## 查看所在地区支持的运营商和频段

可以在以下两个网站进行查看:

1. [frequencycheck](https://www.frequencycheck.com/carriers)
2. [spectrumonitoring](https://www.spectrummonitoring.com/frequencies/)

## LTE模块工作模式设置

### VIMs上安装monicom

```shell
$ sudo apt update
$ sudo apt install minicom
```

### 设置成USBNet模式

```shell
$ minicom -D /dev/ttyUSB2
```

打开minicom以后,输入

```shell
AT+QCFG="usbnet",2

OK
```

### 掉电重启

LITE模块需要掉电重启才能切换模式，拔出VIMs的电源，重新插上。LTE模块现在就工作在USBNet模式了

### 恢复LTE模块

```shell
$ minicom -D /dev/ttyUSB2
```

默认的工作方式是`0`

```shell
AT+QCFG="usbnet",0
```

同样掉电重启切换回默认模式


### 在ubuntu桌面版本使用LTE模块

#### Step1: 打开 `edit connections`

在右上角的网络菜单最下面选中`edit connections`选项。

![LTE_edit_connect](/images/edge/LTE_edit_connect.png)

#### Step2: 新建一个连接

![LTE_add_connect](/images/edge/LTE_add_connect.png)

在左下角的`+`选项可以新建一个连接。

#### Step3: 选择新建的连接类型

![LTE_choose_connect_tpye](/images/edge/LTE_choose_connect_tpye.png)

`Mobile Broadband`可用于LTE模块，这里选用这个选项。

#### Step4: 选择你的运营商所在国家

![LTE_choose_country](/images/edge/LTE_choose_country.png)

选择你的运营商所在国家，这个应与sim卡相同。

#### Step5: 选择运营商

![LTE_choose_provider](/images/edge/LTE_choose_provider.png)

选择运营商，这个同样应该与sim卡相同。

选择完运营商以后，后面的两部使用默认的就可以，直接`next`。

#### Step6: 设置连接密码
![LTE_set_psk](/images/edge/LTE_set_psk.png)

设置连接密码，这步设置的密码，下一步连接时会用到，请记住设置的密码。
同时你可以设置你的节点名字，不设置将使用默认的。

#### Step7: 连接

![LTE_connect](/images/edge/LTE_connect.png)

在右上角的网络菜单选中上一步设置的网络节点。输入上一步设置的密码。

![LTE_use_psk](/images/edge/LTE_use_psk.png)

输入密码以后，就可以成功连接到网络了。

### 在ubuntu服务器版本上使用LTE模块

在服务器版本上，只要使用一个命令就可以连接LTE模块的网络。

```
$ sudo nmcli connection add type gsm apn 3gnet user 0000 password 0000 con-name "EM06 4G"

```

### 如何确认连接是否成功

使用ping命令就可以而是网络了，加上`-I`选项就可以选中LTE模块的网络。


#### 确认LTE模块的网络节点
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

使用`ifconfig -a` 命令就可以看到找到wwan0的节点


#### 使用`ping`命令测试

```
$ ping www.baidu.com -I wwan0
```
如果网络正常，就可以ping通。

