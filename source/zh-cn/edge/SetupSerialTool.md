title: 设置串口调试工具
---

### 准备
- [x] 需要USB转TTL串口工具，要确保支持`1500000`波特率。
- [x] Edge板需要配合Edge IO板才能使用串口。


### 连接
按如下步骤连接：

1) 通过FPC排线连接Edge板和Edge IO板。
![Edge IO FPC](/images/edge/SerialConnections_fpc.png)

2）连接所有的GPIO，检查TX/RX确保连接正确。

  * Tool Pin `GND`: <---> Edge IO `GND`
  * Tool Pin `TXD`: <---> Edge IO `RXD`
  * Tool Pin `RXD`: <---> Edge IO `TXD`

连接如下：
![Image of SerialConnections](/images/edge/SerialConnections_3Pin.png)

3) 把串口工具USB插入PC。

### 设置Kermit
**安装c-kermit:**
```sh
$ sudo apt-get install ckermit
```

**添加访问权限：**
```sh
$ sudo usermod -a -G dialout gouwa
```
*提示: 替换`gouwa`为你自己的用户名。*

**添加如下内容到 ~/.kermrc文件进行设置：**
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

**运行`kermit`：**

确保连接正确，如果一切正常会打印如下信息：
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
*提示: 如果打印如下信息，你需要检查步骤`添加访问权限`是否执行正确。*
```
/dev/ttyUSB0: Permission denied
```

### 支持`1500000` 波特率
为了支持`1500000`波特率，需要替换`kermit` 文件，点击[这里](http://www.mediafire.com/file/7dc2jot6pcev4r6/kermit)下载，并执行如下命令。
```sh
$ chmod +x kermit
$ sudo cp kermit /usr/bin/kermit
```

如果想使用`1500000`波特率，需要修改文件`~/.kermrc`，把speed改为`1500000`.

### 参考
* [C-Kermit官网](http://www.columbia.edu/kermit/index.html)
