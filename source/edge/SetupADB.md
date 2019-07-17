title: Setup ADB
---

SDK is compiled in userdebug mode by default. It is conducive to development and debugging.

There are two ways to setup ADB for the Khadas VIM. The methods portrayed are common with other Android products.

### ADB over Wi-Fi/LAN 
* Ensure that either the Wi-Fi or LAN is connected.
* Enable ADB debugging on your Device: `Settings-->Developer options--->USB debugging`
* Check the IP address of your Device: `Settings-->About device--->Status--->IP`
* Run the `adb connect` command:
```
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
```
$ adb shell
```
### Resources
* [Android Debug Brige](https://developer.android.com/studio/command-line/adb.html)

