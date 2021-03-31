title: 如何设置PCIe/USB3.0端口模式
---

Khadas VIM3包含一个数据切换开关来切换`PCIe`或`USB 3.0`模式。默认为`USB 3.0`模式。
下图为逻辑框图：

![VIM3 PCIe/USB3.0 Block](/images/vim3/vim3_pcie_usb3_block.png)

有多种方式可以来切换`PCIe/USB3.0`模式：
* 通过[KBI](/zh-cn//vim3/KbiGuidance.html)来切换
* 通过Android菜单来切换
* 通过Android/Ubuntu命令行来切换

## 通过KBI来切换 PCIe / USB3.0 模式

你要先 [设置串口调试工具](/zh-cn/vim3/SetupSerialTool.html)，然后进入u-boot命令行模式。

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

## 通过Android菜单来设置 PCIe / USB3.0 模式

通过遥控或鼠标进入`Device Preferences`菜单，选择`Toggle USB-3.0/PCI-E`菜单：

![Android Device Preferences](https://github.com/tsangyoujun/khadas_docs/blob/master/settings_toggle.jpg?raw=true)
![Mode Switch UI](https://github.com/tsangyoujun/khadas_docs/blob/master/mode_switch.jpg?raw=true)

**设置完后一定要给系统断电，以保证配置生效：**

## 通过Android/Ubuntu命令行设置 PCIe / USB3.0 模式

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
[KBI Guide](/zh-cn/vim3/KbiGuidance.html)
