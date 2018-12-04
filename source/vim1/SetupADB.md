title: Setup ADB
---

There are two ways to setup ADB for the Khadas VIM. The methods portrayed are common with other Android products.


### ADB over Wi-Fi/LAN 
* Ensure that either the Wi-Fi or LAN is connected.
* Enable ADB debugging on your Device: `Settings-->Developer options--->USB debugging`
* Check the IP address of your Device: `Settings-->About device--->Status--->IP`
* Run the `adb connect` command:
```sh
$ adb connect 192.168.1.120
connected to 192.168.1.120:5555
$ adb shell
```


### ADB over USB
* Ensure that a USB-C cable is connected between your PC and VIM.
* Enable ADB debugging on your device: `Settings-->Developer options--->USB debugging`
* Open a terminal and type:
```sh
$ adb shell
```


### Resources
* [Android Debug Bridge](https://developer.android.com/studio/command-line/adb.html)
