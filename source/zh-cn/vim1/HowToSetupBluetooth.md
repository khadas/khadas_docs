title: 如何设置蓝牙
---

# Android 

对于安卓系统, 可以很方便地通过图形界面来设置.

# Ubuntu

## Desktop

对于桌面系统，可以很方便地通过图形界面来设置，

通过蓝牙连接媒体播放设备可以参考 --> [如何连接蓝牙媒体设备](/zh-cn/vim3/BluetoothInstructions.html)

## Server

对于Ubuntu/Debian服务器版本可以使用命令行通过`bluez`和`bluetoothctl`来设置。

### 使能蓝牙
```
khadas@Khadas:~$ sudo hciconfig hci0 up
```

### 进入bluetoothctl命令行
```
khadas@Khadas:~$ sudo bluetoothctl
[NEW] Controller 43:54:A2:00:1F:AC Khadas [default]
Agent registered
[bluetooth]#
```
设置：
```
[bluetooth]# agent on
[bluetooth]# default-agent
[bluetooth]# power on
[bluetooth]# discoverable on
[bluetooth]# pairable on
[bluetooth]# scan on
```

### 扫描蓝牙外设
```
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:54:A2:00:1F:AC Discovering: yes
[NEW] Device 46:04:25:5F:1E:8D 46-04-25-5F-1E-8D
[NEW] Device 8C:EB:C6:E7:2E:33 Khadas
```
### 查看扫描到的设备
```
[bluetooth]# devices
Device 46:04:25:5F:1E:8D 46-04-25-5F-1E-8D
Device 8C:EB:C6:E7:2E:33 Khadas
Device 9C:FB:D5:0D:91:47 9C-FB-D5-0D-91-47
[NEW] Device AC:83:F3:DD:D4:E1 AC-83-F3-DD-D4-E1
[CHG] Device AC:83:F3:DD:D4:E1 Name: LibreELEC
[CHG] Device AC:83:F3:DD:D4:E1 Alias: LibreELEC
```
### 连接蓝牙设备
```
[bluetooth]# connect <device_addr>
```
*注意：`device_addr`为你要连接的设备的地址。*

### 退出bluetoothctl命令行
```
[bluetooth]# quit
Agent unregistered
[DEL] Controller 43:54:A2:00:1F:AC Khadas [default]
khadas@Khadas:~$
```
