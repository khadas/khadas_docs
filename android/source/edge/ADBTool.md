title: How To Use ADB
---

## Install ADB

### How to install ADB

First you must synchronized index file,then you can Install it directly.

```shell
$ sudo apt-get update
$ sudo apt-get install android-tools-adb
```

### Add permission & Write configuration files

Now,It's already installed on your computer.But you still need to do some preparations.

#### Add permission

```shell
$ sudo  useradd -G plugdev $USER
```

#### Write configuration files

touch a rules file for it.

```shell
$ sudo vim /etc/udev/rules.d/51-android.rules
```

Write the following to the file

```shell
SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", MODE="0666"
```

This is a general setup.

### Restart udev

```shell
$ sudo /etc/init.d/udev restart
```

## How To Use ADB 

### ADB over Wi-Fi/LAN
* Ensure that either the Wi-Fi or LAN is connected.

* Enable ADB debugging on your Device: `Settings-->Developer options--->USB debugging`

* Check the IP address of your Device: `Settings-->About device--->Status--->IP`

* Run the `adb connect` command:

```shell
$ adb connect xxx.xxx.xxx.xxx(IP address)
$ adb root
$ adb connect xxx.xxx.xxx.xxx(IP address)
$ adb remount
```
* Then you can push to debug

### ADB over USB

* Ensure that a USB-C cable is connected between your PC and VIM.

* Enable ADB debugging on your device: `Settings-->Developer options--->USB debugging`

* Open a terminal and type:

```shell
$ adb shell
```

## Resources
* [Android Debug Brige](https://developer.android.com/studio/command-line/adb.html)

