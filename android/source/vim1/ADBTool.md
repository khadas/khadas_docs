title: Use ADB Tool
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

## Install ADB

First you must synchronized index file, then you can Install it directly.

```shell
$ sudo apt-get update
$ sudo apt-get install android-tools-adb
```

### Add Permission & Write Configuration Files

Now, it's already installed on your computer. But you still need to do some preparations.

#### Add Permission

```shell
$ sudo  useradd -G plugdev $USER
```

#### Write Configuration Files

Touch a rules file for it.

```shell
$ sudo vim /etc/udev/rules.d/51-android.rules
```

Write the following to the file.

```shell
SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", MODE="0666"
```

This is a general setup.

#### Restart Udev

```shell
$ sudo /etc/init.d/udev restart
```
</div>
<div class="tab-pane fade" id="Windows-pins" role="tabpanel" aria-labelledby="Windows-tab">

## Install ADB

First, refer to the section of installing USB driver to install the driver.
Then download [adb.zip](https://dl.khadas.com/products/edge/tool/ADB.zip), unzip it to the root directory of the open `cmd` command line window for easy calling, as shown in the following figure:
![mac](/android/images/vim4/adb.png)

</div>
</div>

## Use ADB

### ADB over Wi-Fi/LAN

* Ensure that either the Wi-Fi or LAN is connected

* Enable ADB debugging on your Device: `Settings-->Developer options--->USB debugging`

* Check the IP address of your Device: `Settings-->About device--->Status--->IP`

* Run the `adb connect` command:
```shell
$ adb connect 192.168.1.120
$ adb shell
```

### ADB over USB

* Ensure that a USB-C cable is connected between your PC and VIM

* Enable ADB debugging on your device: `Settings-->Developer options--->USB debugging`

* Open a terminal and type:
```shell
$ adb shell
```

### Resource

* [Android Debug Bridge](https://developer.android.com/studio/command-line/adb.html)

**note**:

1. If you android deivce is a phone, you must open *developer model*.

2. When you try to debug your Android device with `adb devices`, There will be a proposal on your mobile phone.Please check it. 

3. If your Android device is the khadas SBC, *developer model* was opened.



