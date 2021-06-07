title: 如何使能M2x以太网
---

* 在你使用m2x以太网之前，你可以通过两种方法去使能它

### 在tv设置中使能m2x以太网

* 进入 Droid Settings-> More settings-> Network&Internet-> Ethernet,选中Ethernet Port 
	![Image of M2x_eth_port](/images/vim3/vim3_m2x_eth.png)




### 通过kbi命令使能m2x以太网

* 关于kbi 用法 ,你可以参考 [kbi guide](/vim3/KbiGuidance.html),设置命令如下

```
kvim3#kbi
kbi - Khadas Bootloader Instructions sub-system

Usage:
kbi [function] [mode] [write|read] <value>

kbi version - read version information
kbi usid - read usid information
kbi powerstate - read power on state
kbi poweroff - power off device
kbi ethmac - read ethernet mac address
kbi hwver - read board hardware version

kbi led [systemoff|systemon] w <off|on|breathe|heartbeat> - set blue led mode
kbi led [systemoff|systemon] r - read blue led mode

kbi forcereset [wol|gpio] w <0|1> - disable/enable force-reset
kbi forcereset [wol|gpio] r - read state of force-reset
[notice: the wol|gpio boot trigger must be enabled if you want to enable force-reset]

kbi bootmode w <emmc|spi> - set bootmode to emmc or spi
kbi bootmode r - read current bootmode

kbi portmode w <0|1> - set port as usb3.0 or pcie
kbi portmode r - read current port mode
kbi ext_ethernet w <0|1> - set ethernet from internal or m2x
kbi ext_ethernet r - read current ethernet mode
kbi tststatus r - read TST status
kbi tststatus clear - clear TST status

kbi forcebootsd
kbi wolreset

kbi ircode [customer1|customer2] w <ircode>
kbi ircode [customer1|customer2] r
kbi trigger [wol|rtc|ir|dcin|key|gpio] w <0|1> - disable/enable boot trigger
kbi trigger [wol|rtc|ir|dcin|key|gpio] r - read mode of a boot trigger
kvim3#kbi ext_ethernet w 1
[reg_31] 0x1d9a
[reg_16] 0x40
[reg_17] 0x7fbf
[reg_19] 0x0
[reg_31] 0x0
[reg_31] 0xd40
[reg_22] 0x0
[reg_31] 0x0
set m2x ethernet
kvim3#kbi ext_ethernet r
use m2x ethernet
kvim3#

```

* kbi ext_ethernet w 1 表示使用m2x以太网,kbi ext_ethernet w 0 表示使用内部以太网

