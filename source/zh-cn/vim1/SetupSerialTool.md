title: 设置串口调试工具
---

### 准备工作
- [x] 准备一个串口调试工具，我们使用的是一个USB转TTL的串口调试工具

### 如何连接
请按下面所示方式连接：

**1)** 连接所有GPIO，确保TX/RX连接正确

  * Tool Pin `GND`: <---> `Pin17` of VIM1's GPIO
  * Tool Pin `TXD`: <---> `Pin18` of VIM1's GPIO(Linux_Rx)
  * Tool Pin `RXD`: <---> `Pin19` of VIM1's GPIO(Linux_Tx)
  * Tool Pin `VCC`: <---> `Pin20` of VIM1's GPIO

**2)** 把串口调试工具插入PC

连接方式如下：

![Image of SerialConnections](/images/vim1/SerialConnections_3Pin.png)

参考下图(`VCC` 管脚可以不接):

![Image of SerialConnections](/images/vim1/SerialConnections.png)


### 设置串口软件`Kermit`
**安装c-kermit:**
```sh
$ sudo apt-get install ckermit
```

**添加权限**
```sh
$ sudo usermod -a -G dialout $(whoami)
```

**添加如下命令到 ~/.kermrc进行配置。**
```
set line /dev/ttyUSB0
set speed 115200
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

**从命令行运行`kermit` 进入C-Kermit**

确保连接正确, 如果一切正常那么你会看到如下信息：
```sh
$ kermit
Connecting to /dev/ttyUSB0, speed 115200
 Escape character: Ctrl-\ (ASCII 28, FS): enabled
Type the escape character followed by C to get back,
or followed by ? to see other options.
----------------------------------------------------
GXL:BL1:9ac50e:a1974b;FEAT:ADFC318C;POC:3;RCY:0;EMMC:0;READ:0;0.0;CHK:0;
TE: 116640

...

```
*提示: 如果打印如下信息，你需要检查上面添加权限步骤是否执行正确。*
```
/dev/ttyUSB0: Permission denied
```



### 更多参考:
* [C-Kermit 官方网站](http://www.columbia.edu/kermit/index.html)
