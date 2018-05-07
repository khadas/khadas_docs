title: Setup ADB
---

There are two ways to setup ADB for Khadas VIM1, and the methods are in common with other Android products.


### ADB over Wi-Fi/LAN 
* Ensure that one of Wi-Fi or Lan is connected.
* Enable adb debugging on your device: `Settings-->Developer options--->USB debugging`
* Check the IP address of your device: `Settings-->About device--->Status--->IP`
* Run `adb connect` command, e.x.:
```sh
$ adb connect 192.168.1.120
connected to 192.168.1.120:5555
$ adb shell
```


### ADB over USB
* Ensure the USB-C cable is connected to your PC.
* Enable adb debugging on your device: `Settings-->Developer options--->USB debugging`
* Open a terminal and type:
```sh
$ adb shell
```


### Resources
* [Android Debug Brige](https://developer.android.com/studio/command-line/adb.html)
