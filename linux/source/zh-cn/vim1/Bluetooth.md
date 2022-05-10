title: 蓝牙命令使用说明
---

这篇文档将会介绍如何使用蓝牙。

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="desktop-tab" data-toggle="tab" href="#desktop" role="tab" aria-controls="desktop" aria-selected="true">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#server" role="tab" aria-controls="server" aria-selected="false">Server</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="desktop" role="tabpanel" aria-labelledby="desktop-tab">

1. **打开蓝牙设置**

蓝牙设置在右上角，点击以后选择`device`。

<img src="/linux/images/vim1/gnome-bluetooth1.png" width=400px>

2. **搜索蓝牙设备**

点击`Search`，就可以搜索附近的蓝牙设备。

<img src="/linux/images/vim1/gnome-bluetooth2.png" width=400px>

3. **配对连接设备**

点击想连接的谁被，然后点击钥匙，就可以选择要配对的设备。

<img src="/linux/images/vim1/gnome-bluetooth3.png" width=400px>

</div>
<div class="tab-pane fade" id="server" role="tabpanel" aria-labelledby="server-tab">

1. **使能蓝牙**：

```sh
khadas@Khadas:~$ sudo hciconfig hci0 up
```

2. **进入bluetoothctl命令行**：

```sh
khadas@Khadas:~$ sudo bluetoothctl
[NEW] Controller 43:54:A2:00:1F:AC Khadas [default]
Agent registered 
[bluetooth]#
```
设置：

```sh
[bluetooth]# agent on
[bluetooth]# default-agent
[bluetooth]# power on
[bluetooth]# discoverable on
[bluetooth]# pairable on
[bluetooth]# scan on
```

3. **扫描蓝牙外设**：

```sh
[bluetooth]# scan on
Discovery started 
[CHG] Controller 43:54:A2:00:1F:AC Discovering: yes
[NEW] Device 46:04:25:5F:1E:8D 46-04-25-5F-1E-8D
[NEW] Device 8C:EB:C6:E7:2E:33 Khadas
```
4. **查看扫描到的设备**：

```sh
[bluetooth]# devices
Device 46:04:25:5F:1E:8D 46-04-25-5F-1E-8D
Device 8C:EB:C6:E7:2E:33 Khadas
Device 9C:FB:D5:0D:91:47 9C-FB-D5-0D-91-47
[NEW] Device AC:83:F3:DD:D4:E1 AC-83-F3-DD-D4-E1
[CHG] Device AC:83:F3:DD:D4:E1 Name: LibreELEC
[CHG] Device AC:83:F3:DD:D4:E1 Alias: LibreELEC
```

5. **连接蓝牙设备**：

```sh
[bluetooth]# connect <device_addr>
```

{% note info  注意 %}

`device_addr`为你要连接的设备的地址。

{% endnote%}

6. **退出bluetoothctl命令行**：

```sh
[bluetooth]# quit
Agent unregistered
[DEL] Controller 43:54:A2:00:1F:AC Khadas [default]
khadas@Khadas:~$ 
```
</div>
</div>
