title: How To Install ADB Tools
---

This guide will teach you how to install ADB and how use it.
### How to install ADB
First you must synchronized index file,then you can Install it directly.
>$ sudo apt-get update
>$ sudo apt-get install android-tools-adb

### Add permission & Write configuration files
Now,It's already installed on your computer.But you still need to do some preparations.
#### Add permission
> $ sudo  useradd -G plugdev $USER

#### Write configuration files
touch a rules file for it.
>$ sudo vim /etc/udev/rules.d/51-android.rules
 
Write the following to the file
>SUBSYSTEM=="usb", ENV{DEVTYPE}=="usb_device", MODE="0666"

This is a general setup.
#### Restart udev
>$ sudo /etc/init.d/udev restart

### How to use
Connect to your Android device first.
>$ adb devices

you will You will see some information on your terminal,like this:
> List of devices attached
87e3c28f        device

open shell
>adb shell

**Note:** 
1.if you android deivce is a phone,you must open *developer model*.
2.When you try to debug your Android device with  `adb devices` ,There will be a proposal on your mobile phone.Please check it.
3.If your Android device is the development board of khadas,direct connection is enough.
