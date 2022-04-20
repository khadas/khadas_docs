title: ADB Tool
---

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="Linux-tab" data-toggle="tab" href="#Linux-pins" role="tab" aria-controls="Linux" aria-selected="true">Linux</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="Windows-tab" data-toggle="tab" href="#Windows-pins" role="tab" aria-controls="Windows" aria-selected="false">Windows</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="Linux-pins" role="tabpanel" aria-labelledby="Linux-tab">

## Install ADB Tool

Install the ADB tool on PC Host:

```shell
$ sudo apt-get update
$ sudo apt-get install android-tools-adb
```

### Add permission and configuration files

Add permission and configuration details after installation.

#### Add permission

```shell
$ sudo  useradd -G plugdev $USER
```

#### Write configuration files

Create a .rules file:

```shell
$ sudo vim /etc/udev/rules.d/51-android.rules
```

Write the following to the .rules file:

```shell
SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", MODE="0666"
```

#### Restart udev service

```shell
$ sudo /etc/init.d/udev restart
```
</div>
<div class="tab-pane fade" id="Windows-pins" role="tabpanel" aria-labelledby="Windows-tab">

## Install ADB Tool

* Regfer this [guide](UpgradeViaUSBCable.html) to install the USB driver.
* Download the [Platform Tools](https://dl.google.com/android/repository/platform-tools-latest-windows.zip).
* Unzip the `Platform Tools` file to the easily accessible directory, such as `C:\platform-tools`.

{% note warn Note %}
* When executing the adb command in the cmd terminal, you need to enter the `C:\platform-tools` directory, otherwise it will prompt that the adb command cannot be found.
{% endnote %}

</div>
</div>

## Use ADB

### ADB over Wi-Fi/LAN

* Ensure that either Wi-Fi or LAN is connected

* Enable ADB debugging on your SBC: `Settings-->Developer options-->USB debugging`

* Check the IP address of your SBC: `Settings-->About device-->Status-->IP`

* Run the `adb connect` command:
```shell
$ adb connect 192.168.1.120
$ adb shell
```

### ADB over USB

* Ensure that a USB-C cable is connected between your PC and SBC

* Enable ADB debugging on your SBC: `Settings-->Developer options-->USB debugging`

* Open a Terminal and type:
```shell
$ adb shell
```

## Links

* [Android Debug Bridge](https://developer.android.com/studio/command-line/adb.html)

{% note info Note %}
* If you android device is a phone, you must enable *developer mode*
* When you try to debug your Android device with `adb devices`, a notification will appear that you must accept
* If your Android device is a Khadas SBC, *developer mode* is enabled by default
{% endnote %}
