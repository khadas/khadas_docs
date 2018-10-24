title: How To Setup Bluetooth
---

For desktop system you can setup bluetooth via GUI easily, so in this tutorial we just talk about how to setup bluetooth under command line. For Ubuntu/Debian server we can use `bluez` & `bluetoothctl` to setup bluetooth.

### Enable bluetooth
```
khadas@Khadas:~$ sudo hciconfig hci0 up
```

### Launch bluetoothctl and setup
```
khadas@Khadas:~$ sudo bluetoothctl
[NEW] Controller 43:54:A2:00:1F:AC Khadas [default]
Agent registered
[bluetooth]#
```
Setup:
```
[bluetooth]# agent on
[bluetooth]# default-agent
[bluetooth]# power on
[bluetooth]# discoverable on
[bluetooth]# pairable on
[bluetooth]# scan on
```

### Scan bluetooth peripherals
```
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:54:A2:00:1F:AC Discovering: yes
[NEW] Device 46:04:25:5F:1E:8D 46-04-25-5F-1E-8D
[NEW] Device 8C:EB:C6:E7:2E:33 Khadas
```
### Show devides
```
[bluetooth]# devices
Device 46:04:25:5F:1E:8D 46-04-25-5F-1E-8D
Device 8C:EB:C6:E7:2E:33 Khadas
Device 9C:FB:D5:0D:91:47 9C-FB-D5-0D-91-47
[NEW] Device AC:83:F3:DD:D4:E1 AC-83-F3-DD-D4-E1
[CHG] Device AC:83:F3:DD:D4:E1 Name: LibreELEC
[CHG] Device AC:83:F3:DD:D4:E1 Alias: LibreELEC
```
### Connect to device
```
[bluetooth]# connect <device_addr>
```
*Note: `device_addr` is the address of the device you want to connect to.*

### Exit bluetoothctl
```
[bluetooth]# quit
Agent unregistered
[DEL] Controller 43:54:A2:00:1F:AC Khadas [default]
khadas@Khadas:~$
```