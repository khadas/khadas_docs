title: 擦除eMMC
---

有三种方式可以擦除VIMs板载eMMC存储器，如下：
* 串口模式（针对开发者）
* 中断模式
* 命令行模式

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="serial-tab" data-toggle="tab" href="#serial" role="tab" aria-controls="serial" aria-selected="true">串口模式（针对开发者）</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="interupt-tab" data-toggle="tab" href="#interupt" role="tab" aria-controls="interupt" aria-selected="false">中断模式</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="cli-tab" data-toggle="tab" href="#cli" role="tab" aria-controls="cli" aria-selected="false">命令行模式</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="serial" role="tabpanel" aria-labelledby="serial-tab">

1, 参考这里[串口工具设置](setup_serial_tool.html)。
2. 确保串口线连接正确以及串口软件正确配置。
3. 在VIMs上电时按住空格键会进入U-Boot命令行模式。
4. U-Boot命令行执行`store boot_erase bootloader`会擦除eMMC U-Boot。
5. 执行`reboot` 或按 `Reset`键重启。
6. 参考如下:

```bash
kvim4# store boot_erase bootloader
GUID Partition Table Header signature is wrong: 0x0 != 0x5452415020494645
GUID Partition Table Header signature is wrong: 0x0 != 0x5452415020494645
gpt is invalid


Caution! Your devices Erase group is 0x400
The erase range would be change to 0x0~0x23ff

8191 blocks erased: OK


Caution! Your devices Erase group is 0x400
The erase range would be change to 0x0~0x23ff

8191 blocks erased: OK


Caution! Your devices Erase group is 0x400
The erase range would be change to 0x0~0x23ff

8191 blocks erased: OK
kvim4# reboot
```

{% note info 注意 %}

如果擦除eMMC成功，在重启后可以在串口看到如下打印信息：

```bash
T7:BL:055c20;ID:7CFDCF5E6052BDEC;FEAT:30F:1FFF0000:B002F:1;POC:CF;RCY:0;OVD:0;DFU:0;SD:2002;eMMC:0;RD-0:0;CHK:1;RD-1:0;CHK:1;RD-2:0;CHK:1;SPINOR:0;RD-0:0;CHK:1;RD-1:0;CHK:1;USB:ADFU�T7:BL:055c20;ID:7CFDCF5E6052BDEC;FEAT:30F:1FFF0000:B002F:1;POC:CF;RCY:0;OVD:0;DFU:1;USB:0;RD-00:0;
```

{% endnote %}

</div>

<div class="tab-pane fade show" id="interupt" role="tabpanel" aria-labelledby="interupt-tab">

这种方法适用于所有Amlogic产品。

1. 通过[USB-C升级固件](install_os_into_emmc.html)或[TF卡](install_os_into_sdusb.html)。
2. 中断升级过程(建议进度条超过15%后中断), 例如, 拔掉USB数据线或TF卡。
3. 重新上电，你会发现eMMC被擦除。

</div>

<div class="tab-pane fade show" id="cli" role="tabpanel" aria-labelledby="cli-tab">

这种方式适用于安装linux的设备。

1. 上电并进入到linux命令行。
2. 打开终端使用`dd`命令清除U-Boot分区。

```bash
root@Khadas:~# dd if=/dev/zero of=/dev/bootloader
dd: writing to '/dev/bootloader': No space left on device
8193+0 records in
8192+0 records out
4194304 bytes (4.2 MB, 4.0 MiB) copied, 1.1226 s, 3.7 MB/s
root@Khadas:~# reboot
```

</div>
</div>
