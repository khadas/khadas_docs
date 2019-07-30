title: 如何设置PCIe/USB3.0端口模式
---

Khadas VIM3包含一个数据切换开关来切换`PCIe`或`USB 3.0`模式。默认为`USB 3.0`模式。
下图为逻辑框图：

![VIM3 PCIe/USB3.0 Block](/images/vim3/vim3_pcie_usb3_block.png)

有两种方式可以来切换`PCIe/USB3.0`模式：
* 使用[KBI](/zh-cn//vim3/KbiGuidance.html)来切换
* 在Android/Ubuntu命令行下切换

### 使用KBI来切换`PCIe/USB3.0`模式
你要先 [设置串口调试工具](/zh-cn/vim3/SetupSerialTool.html)，然后进入u-boot命令行模式。

* 初始化KBI：

```
kvim3#kbi init
```

* 查看当前端口模式：

```
kvim3#kbi portmode r
port mode is USB3.0
```
默认端口模式为USB 3.0。

* 设置为`PCIe`模式：

```
kvim3#kbi portmode  w 1
set port mode to :PCIE
```

* 设置模式为`USB 3.0`：

```
kvim3#kbi portmode w 0
set port mode to :USB3.0
```

**设置完后一定要给系统断电，以保证配置生效：**

```
kvim3#kbi poweroff 
do_kbi_poweroff
```
然后可以按电源键开机。


### 在命令行下设置`PCIe/USB3.0`模式
#### TBD

### 参考
[KBI Guide](/zh-cn/vim3/KbiGuidance.html)
