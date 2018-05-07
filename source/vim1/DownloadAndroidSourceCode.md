title: Download the Android Source Code
---

The Android source tree of Khadas VIM1 are hosted on [Github](https://www.github.com/khadas) with many different repositories.

Walk through the below steps to download the source code. 

### Steps
Create an empty directory to hold your working files:
```sh
$ mkdir -p ~/project/khadas/mmallow
$ cd ~/project/khadas/mmallow
```

Run `repo init` to bring down the manifest repository first:
```sh
$ repo init -u https://github.com/khadas/android_manifest.git
```

Run `repo sync` to pull down the Android source tree:
```sh
$ repo sync -j4
```
The initial sync operation will take an hour or more to complete. 

When complete the sync operation, the Android source files will be located in your working directory under their project names:
```
$ ls
abi       common       device        hardware         out               sdk
art       cts          docs          libcore          packages          system
bionic    dalvik       external      libnativehelper  pdk               tools
bootable  developers   fbc3-release  Makefile         platform_testing  uboot
build     development  frameworks    ndk              prebuilts         vendor
$
```
*Tips: you might need to run above command repeatly if it failed halfway. Or you can try with below script instead:*
```sh
#!/bin/bash
repo sync -j4
while [ $? = 1 ]; do
	echo "Sync failed, repeat again:"
	repo sync -j4
done
```

Create a new branch for development:
```sh
$ repo start Vim --all
```


### Further Reading
* [Android official documents](https://source.android.com/source/downloading.html)
* [Build Android Source Code](/vim1/BuildingAndroid.html)
