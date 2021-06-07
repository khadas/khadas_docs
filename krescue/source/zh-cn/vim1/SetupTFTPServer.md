title: 搭建TFTP服务器
---

很常用的搭建方法，你也可以通过Google搜索相关信息。

这里我们提供一个参考。


### 设置TFTP

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="16.04-tab" data-toggle="tab" href="#16.04" role="tab" aria-controls="16.04" aria-selected="true">Ubuntu 16.04</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="18.04-tab" data-toggle="tab" href="#18.04" role="tab" aria-controls="18.04" aria-selected="false">Ubuntu 18.04 (或更新版本)</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="16.04" role="tabpanel" aria-labelledby="16.04-tab">

安装TFTP相关软件包：

```bash
$ sudo apt-get install openbsd-inetd tftpd tftp
```

* 配置

通过root权限编辑文件`/etc/inetd.conf`来使能TFTP服务，文件内容如下：

```bash
#tftp   dgram   udp     wait    root    /usr/sbin/tcpd  /usr/sbin/in.tftpd
```

取消注释下面这一行，并添加 `-s /srv/tftp` 到行尾：

```bash
tftp   dgram   udp   wait   root   /usr/sbin/tcpd  /usr/sbin/in.tftpd -s /srv/tftp
```

创建`/srv/tftp`目录，并修改权限：

```bash
$ sudo mkdir /srv/tftp
$ sudo chown -R $(whoami) /srv/tftp
```

重启TFTP服务：

```bash
$ sudo /etc/init.d/xinetd restart
```

</div>

<div class="tab-pane fade show" id="18.04" role="tabpanel" aria-labelledby="18.04-tab">

安装TFTP相关软件包：

```bash
$ sudo apt-get install tftp-hpa tftpd-hpa
```
* 配置

使用root权限修改tftp配置文件，修改的行如下:

```bash
TFTP_DIRECTORY="/usr/lib/tftpboot"
```

修改为:

```bash
TFTP_DIRECTORY="/srv/tftp"
```

创建`/srv/tftp`目录，并修改权限：

```bash
$ sudo mkdir /srv/tftp
$ sudo chown -R $(whoami) /srv/tftp
```

重启TFTP服务：

```bash
$ sudo service tftpd-hpa restart
```
</div>
</div>

### 设置VIM目标板

为了设置TFTP你需要做如下事情：

* 连接网线到VIM，并确保和你的PC在同一个局域网 
* 连接串口线，参考[这里设置串口](/zh-cn/vim1/SetupSerialTool.html) 
* 上电，确保U-boot正常运行

按 `Enter` or `Space` 键进入U-boot命令行模式：

```bash
U-Boot 2015.01 (May 18 2019 - 19:31:53)

DRAM:  3.8 GiB
Relocation Offset is: d6e5600000

...

gpio: pin GPIOAO_7 (gpio 7) value is 1
Hit Enter or space or Ctrl+C key to stop autoboot -- :  0 
kvim3#
```

设置目标板IP地址以及TFTP服务器地址：

```bash
kvim3# setenv ipaddr 192.168.1.249
kvim3# setenv serverip 192.168.1.117
```

保存环境变量：

```bash
kvim3# saveenv
Saving Environment to aml-storage...
mmc env offset: 0x6c00000 
Writing to MMC(1)... done
kvim3#
```

执行 `saveenv` 将会把环境变量保存到eMMC，所以在执行上述步骤后IP地址会一直存在，除非你执行`env default -a`来恢复默认环境变量。

{% note info 提示 %}

确认你的环境变量设置是正确的。

```bash
kvim3#print ipaddr
ipaddr=192.168.1.249
kvim3#print serverip
serverip=192.168.1.117
```

{% endnote %}

### 测试

确保已经拷贝测试文件（如u-boot.bin）到TFTP服务器根目录（`/srv/tftp`）:

```bash
$ ls /srv/tftp/u-boot.bin
/srv/tftp/u-boot.bin
```

下载文件到地址 `0x1080000`：

```bash
kvim3# tftp 1080000 u-boot.bin
Speed: 1000, full duplex
Using dwmac.ff3f0000 device
TFTP from server 192.168.1.117; our IP address is 192.168.1.249
Filename 'u-boot.bin'.
Load address: 0x1080000
Loading: #################################################################
	 #################################################################
	 ###############################################
	 2.5 MiB/s
done
Bytes transferred = 1371504 (14ed70 hex)

```
如果一切正常，你将会看到上述打印信息。


### 调试

* 如果你看到如下打印信息，那么你可能需要检查你的网线连接：

```
kvim3# tftp 1080000 u-boot.bin
dwmac.ff3f0000 Waiting for PHY auto negotiation to complete......... TIMEOUT !
dwmac.ff3f0000: No link.
kvim3#
```

* 如果看到如下打印信息，那么你可能是TFTP服务器地址设置错误或者文件名错误

```bash
kvim3#tftp 1080000 u-boot.bin
Speed: 1000, full duplex
Using dwmac.ff3f0000 device
TFTP from server 192.168.1.177; our IP address is 192.168.1.249
Filename 'u-boot.bin'.
Load address: 0x1080000
Loading: T T T T T T T T T T 
Retry count exceeded; starting again
Speed: 1000, full duplex
```
在这种情况下，我把服务器IP设置为错误的IP `192.168.1.177`，然而正确的应该是`192.168.1.117`。

### 参考
* [Ubuntu Wiki: TFTP](https://help.ubuntu.com/community/TFTP)
* [Configuring TFTP server for linux](http://venkateshabbarapu.blogspot.com/2012/10/configuring-tftp-server-for-linux.html)
