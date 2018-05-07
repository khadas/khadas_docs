title: 搭建TFTP服务器
---

很常用的搭建方法，你也可以通过Google搜索相关信息。

这里我们提供一个参考。


### 设置TFTP
安装TFTP相关软件包：
```sh
$ sudo apt-get install openbsd-inetd tftpd tftp
```

配置
通过root权限编辑文件`/etc/inetd.conf`来使能TFTP服务，文件内容如下：
```
#tftp   dgram   udp     wait    root    /usr/sbin/tcpd  /usr/sbin/in.tftpd
```
取消注释下面这一行，并添加 `-s /srv/tftp` 到行尾：
```
tftp   dgram   udp   wait   root   /usr/sbin/tcpd  /usr/sbin/in.tftpd -s /srv/tftp
```

创建`/srv/tftp`目录，并修改权限：
```sh
$ sudo mkdir /srv/tftp
$ sudo chown -R gouwa /srv/tftp
```

重启TFTP服务：
```sh
$ sudo /etc/init.d/xinetd restart
```

### 设置VIM目标板
为了设置TFTP你需要做如下事情：
* 连接网线到VIM，并确保和你的PC在同一个局域网 
* 连接串口线，参考[这里设置串口](/zh-cn/vim1/SetupSerialTool.html) 
* 上电，确保U-boot正常运行

按 `Enter` or `Space` 键进入U-boot命令行模式：

```
U-Boot 2015.01-g1e20d03-dirty (Jan 01 2017 - 14:40:23)

DRAM:  2 GiB
Relocation Offset is: 76ed0000

...

[CANVAS]addr=0x3d800000 width=3840, height=2160
Hit Enter or space or Ctrl+C key to stop autoboot -- :  0 
kvim#
```

设置目标板IP地址以及TFTP服务器地址：
```
kvim# setenv ipaddr 192.168.1.100
kvim# setenv serverip 192.168.1.168
```

保存环境变量：
```
kvim# saveenv
Saving Environment to aml-storage...
mmc env offset: 0x7400000 
Writing to MMC(1)... done
kvim#
```
执行 `saveenv` 将会把环境变量保存到eMMC，所以在执行上述步骤后IP地址会一直存在，除非你执行`env default -a`来恢复默认环境变量。


### 测试
确保已经拷贝测试文件（如u-boot.bin）到TFTP服务器根目录（`/srv/tftp`）:
```sh
$ ls /srv/tftp/u-boot.bin
/srv/tftp/u-boot.bin
$ 
```

下载文件到地址 `0x1080000`：
```
kvim# tftp 1080000 u-boot.bin
Speed: 100, full duplex
Using dwmac.c9410000 device
TFTP from server 192.168.1.168; our IP address is 192.168.1.100
Filename 'u-boot.bin'.
Load address: 0x1080000
Loading: #################################################################
	 #################################################################
	 ###############################################
	 2.5 MiB/s
done
Bytes transferred = 901120 (dc000 hex)
kvim#
```
如果一切正常，你将会看到上述打印信息。


### 调试
* 如果你看到如下打印信息，那么你可能需要检查你的网线连接：
```
kvim# tftp 1080000 u-boot.bin
dwmac.c9410000 Waiting for PHY auto negotiation to complete......... TIMEOUT !
dwmac.c9410000: No link.
kvim#
```

* 如果看到如下打印信息，那么你可能是TFTP服务器地址设置错误
```
kvim#tftp 1080000 u-boot.bin
Speed: 100, full duplex
Using dwmac.c9410000 device
TFTP from server 192.168.1.68; our IP address is 192.168.1.100
Filename 'u-boot.bin'.
Load address: 0x1080000
Loading: T T T T T T T T T T 
Retry count exceeded; starting again
Speed: 100, full duplex
```
在这种情况下，我把服务器IP设置为错误的IP `192.168.1.68`，然而正确的应该是`192.168.1.168`。

### 参考
* [Ubuntu Wiki: TFTP](https://help.ubuntu.com/community/TFTP)
* [Configuring TFTP server for linux](http://venkateshabbarapu.blogspot.com/2012/10/configuring-tftp-server-for-linux.html)
