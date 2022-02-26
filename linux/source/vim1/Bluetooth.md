title: Bluetooth
---

This document will introduce how to use Bluetooth

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

1. **Open Bluetooth settings**

Bluetooth settings are in the upper right corner, click and select `device`.

<img src="/linux/images/vim1/gnome-bluetooth1.png" width=400px>

2. **Search for Bluetooth devices**

Click `Search`, you can search for nearby Bluetooth devices.

<img src="/linux/images/vim1/gnome-bluetooth2.png" width=400px>

3. **Pair connected devices**

Click who you want to connect to, and then click the key, you can select the device to be paired.

<img src="/linux/images/vim1/gnome-bluetooth3.png" width=400px>

</div>
<div class="tab-pane fade" id="server" role="tabpanel" aria-labelledby="server-tab">

1. **Enable Bluetooth**:

```sh
$ sudo hciconfig hci0 up
```

2. **Launch bluetoothctl and Setup**:

```sh
$ sudo bluetoothctl
[NEW] Controller 43:54:A2:00:1F:AC Khadas [default]
Agent registered
[bluetooth]#
```
Setup:

```sh
[bluetooth]# agent on
[bluetooth]# default-agent
[bluetooth]# power on
[bluetooth]# discoverable on
[bluetooth]# pairable on
[bluetooth]# scan on
```

3. **Scan for Bluetooth Peripherals**:

```sh
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:54:A2:00:1F:AC Discovering: yes
[NEW] Device 46:04:25:5F:1E:8D 46-04-25-5F-1E-8D
[NEW] Device 8C:EB:C6:E7:2E:33 Khadas
```

4. **Show Devices**:

```sh
[bluetooth]# devices
Device 46:04:25:5F:1E:8D 46-04-25-5F-1E-8D
Device 8C:EB:C6:E7:2E:33 Khadas
Device 9C:FB:D5:0D:91:47 9C-FB-D5-0D-91-47
[NEW] Device AC:83:F3:DD:D4:E1 AC-83-F3-DD-D4-E1
[CHG] Device AC:83:F3:DD:D4:E1 Name: LibreELEC
[CHG] Device AC:83:F3:DD:D4:E1 Alias: LibreELEC
```

5. **Connect to a Device**:

```sh
[bluetooth]# connect <device_addr>
```

{% note info Tips %}

`device_addr` is the address of the device you want to connect to.

{% endnote %}

6. **Exit bluetoothctl**:

```sh
[bluetooth]# quit
Agent unregistered
[DEL] Controller 43:54:A2:00:1F:AC Khadas [default]
khadas@Khadas:~$
```

* **Troubleshooting**

If your bluetooth doesn't work anymore, you can try to restart the bluetooth service manually.

```
$ sudo systemctl restart bluetooth-power-fixup.service
```

</div>
</div>


