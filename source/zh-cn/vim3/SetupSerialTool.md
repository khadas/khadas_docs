title: 设置串口调试工具
---

### 准备工作
- [x] 准备一个串口调试工具，我们使用的是一个USB转TTL的串口调试工具

### 如何连接
请按下面方式连接：

**1)** 连接所需的GPIO, 确保TX/RX连接正确

	* Tool Pin `GND`: <---> `Pin17` of VIM3's GPIO
	* Tool Pin `TXD`: <---> `Pin18` of VIM3's GPIO(Linux_Rx)
	* Tool Pin `RXD`: <---> `Pin19` of VIM3's GPIO(Linux_Tx)
	* Tool Pin `VCC`: <---> `Pin20` of VIM3's GPIO

**2)** 把串口调试工具插入PC

连接方式如下：

![Image of SerialConnections](/images/vim1/SerialConnections_3Pin.jpg)

参考下图(`VCC` 管脚可以不接):

![Image of SerialConnections](/images/vim1/SerialConnections.jpg)


### 设置串口软件`kermit`
**安装c-kermit:**
```sh
$ sudo apt-get install ckermit
```

**添加权限**
```sh
$ sudo usermod -a -G dialout $(whoami)
```

**添加如下命令到　~/.kermrc进行配置**
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

**从命令行运行`kermit`进入c-kermit**

确保连接正确，如果一切正常那么你会看到如下信息:
```sh
$kermit
Connecting to /dev/ttyUSB0, speed 115200
Escape character: Ctrl-\ (ASCII 28, FS): enabled
Type the escape character followed by C to get back,
or followed by ? to see other options.
----------------------------------------------------
```

*提示*
1. 如果看到如下的打印信息，你需要检查上面添加权限的步骤是否执行正确。
```
/dev/ttyUSB0:Permission denied
```
2. 要访问U-boot，请保持USB串行调试工具连接，然后按一次设备上的`reset`按钮。您应该看到终端上有一些打印输出，然后您就可以访问U-boot了。
3. 如果你的终端打印了这些信息：
```
?SET SPEED has no effect without prior SET LINE
Sorry, you must SET LINE or SET HOST first
...

```
这是因为你的ttyUSB设备选择不正确,在`/dev`目录下查找正确的设备号，并修改`.kermrc`文件为正确的设备号

### 更多请参考:
* [C-Kermit 官方网站](http://www.columbia.edu/kermit/index.html)
