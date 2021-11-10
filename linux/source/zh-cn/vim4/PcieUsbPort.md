title: PCIe/USB3.0端口
---

Khadas VIM3包含一个数据切换开关来切换`PCIe`或`USB 3.0`模式。默认为`USB 3.0`模式。
下图为逻辑框图：

![VIM3 PCIe/USB3.0 Block](/linux/images/vim3/vim3_pcie_usb3_block.png)

有多种方式可以来切换`PCIe/USB3.0`模式：
* 通过[KBI](KbiGuidance.html)来切换
* 通过Ubuntu命令行来切换

## 通过KBI来切换 PCIe / USB3.0 模式

你要先 [设置串口调试工具](SetupSerialTool.html)，然后进入u-boot命令行模式。

* 初始化KBI：

```sh
kvim3#kbi init
```

* 查看当前端口模式：

```sh
kvim3#kbi portmode r
port mode is USB3.0
```
默认端口模式为USB 3.0。

* 设置为`PCIe`模式：

```sh
kvim3#kbi portmode  w 1
set port mode to :PCIE
```

* 设置模式为`USB 3.0`：

```sh
kvim3#kbi portmode w 0
set port mode to :USB3.0
```

**设置完后一定要给系统断电，以保证配置生效：**

```sh
kvim3#kbi poweroff 
do_kbi_poweroff
```
然后可以按电源键开机。

## 通过Ubuntu命令行设置 PCIe / USB3.0 模式

* 查看当前模式：

```sh
khadas@Khadas:~$ cat /sys/class/mcu/usb_pcie_switch_mode
1
```

`0` - USB 3.0
`1` - PCIe

* 设置模式为`USB 3.0`：

```sh
khadas@Khadas:~$ echo 0 > /sys/class/mcu/usb_pcie_switch_mode
```

* 设置模式为`PCIe`：

```sh
khadas@Khadas:~$ echo 1 > /sys/class/mcu/usb_pcie_switch_mode
```

**设置完后一定要给系统断电，以保证配置生效：**

```sh
khadas@Khadas:~$ echo 1 > /sys/class/mcu/poweroff 
```

然后可以按电源键开机。


## 参考
[KBI Guide](KbiGuidance.html)
