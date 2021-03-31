title: 设置串口调试工具
---

## Edge-V

您不需要Edge-IO板就可以在Edge-V上设置串行调试器。 只需使用板载GPIO引脚，如图所示（与VIM1，VIM2和VIM3相同）。

![VIM1-GPIO](/images/vim1/SerialConnections_3Pin.jpg)

## Edge

如果您使用的是Edge SBC，请继续阅读以下内容：

## 准备

- [x] 串行调试工具。 在本指南中，我们将使用USB到TTL转换器。 确保它支持"1500000"波特率。
- [x] Edge需要Edge-IO分支板来支持串行调试。


## 连接

按如下步骤连接：

1) 通过FPC排线连接Edge板和Edge IO板。

![Edge IO FPC](/images/edge/edge_io.gif)

2）连接所有的GPIO，检查TX/RX确保连接正确。

  * Tool Pin `GND`: <---> Edge IO `GND`
  * Tool Pin `TXD`: <---> Edge IO `RXD`
  * Tool Pin `RXD`: <---> Edge IO `TXD`

连接如下：

![Image of SerialConnections](/images/edge/SerialConnections_3Pin.png)

3) 把串口工具USB插入PC。

## 设置Kermit

**安装c-kermit:**

```sh
$ sudo apt-get install ckermit
```

**添加访问权限：**

```sh
$ sudo usermod -a -G dialout $(whoami)
```

**添加如下内容到 ~/.kermrc文件进行设置：**

```
set line /dev/ttyUSB0
set speed 1500000
set carrier-watch off
set handshake none
set flow-control none
robust
set file type bin
set file name lit
set rec pack 1000
set send pack 1000
set window 5
c
```
## 支持`1500000` 波特率

为了支持`1500000`波特率，需要替换`kermit` 文件，点击[这里](https://dl.khadas.com/Tools/kermit)下载，并执行如下命令。

```sh
$ chmod +x kermit
$ sudo cp kermit /usr/bin/kermit
```

**运行`kermit`：**

确保连接正确，如果一切正常会打印如下信息：

```sh
$ kermit
Connecting to /dev/ttyUSB0, speed 1500000
 Escape character: Ctrl-\ (ASCII 28, FS): enabled
Type the escape character followed by C to get back,
or followed by ? to see other options.
----------------------------------------------------
GXL:BL1:9ac50e:a1974b;FEAT:ADFC318C;POC:3;RCY:0;EMMC:0;READ:0;0.0;CHK:0;
TE: 116640

...

```

{% note info 注意 %}
如果打印如下信息，你需要检查步骤`添加访问权限`是否执行正确。
{% endnote %}

```sh
/dev/ttyUSB0: Permission denied
```
## SecureCRT BUG

如果你使用SecureCRT连接你的edge，你会看到log是这样子的
![SecureCRT BUG](/images/edge/SourceCRT_BUG.png)
这是SecureCRT本身的bug，你需要执行以下步骤：
* 先打开一个kermit,你会看到正确的log信息
* 关闭kermit，打开SecureCRT连接你的开发板
![SecureCRT BUG](/images/edge/SourceCRT_BUG_slove.png)
你就会看到正确的信息了

{% note info 注意 %}
如果设置了还是不能连接，你可能需要检查你的串口设置时候正确了
{% endnote %}

## 参考

* [C-Kermit官网](http://www.columbia.edu/kermit/index.html)
