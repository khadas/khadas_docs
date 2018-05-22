title: Download the Android Source Code
---

The Android source tree of Khadas VIMs are hosted on [Github](https://www.github.com/khadas) with many different repositories.

Walk through the below steps to download the source code. 

### Steps
1) Create an empty directory to hold your working files:
```sh
$ mkdir -p WORKING_DIRECTORY
$ cd WORKING_DIRECTORY
```

2) Run `repo init` to bring down the manifest repository first:
For Android Marshmallow(6.0):
```sh
$ repo init -u https://github.com/khadas/android_manifest.git -b Mmallow
```
*Note: Only available for VIM1.*

For Android Nougat(7.1):
```sh
$ repo init -u https://github.com/khadas/android_manifest.git -b Nougat
```
*Note: Available for both VIM1 & VIM2.*

For Android Oreo(8.0):
```sh
$ repo init -u https://github.com/khadas/android_manifest.git -b Oreo
```
*Note: Only available for VIM1.*

3) Run `repo sync` to pull down the Android source tree:
```sh
$ repo sync -j4
```
The initial sync operation will take an hour or more to complete.

*Tips: you might need to run above command repeatly if it failed halfway. Or you can try with below script instead:*
```sh
#!/bin/bash
repo sync -j4
while [ $? = 1 ]; do
	echo "Sync failed, repeat again:"
	repo sync -j4
done
```
*If needed, press Ctrl-\ to quit.*

4) Begins a new branch for development:
```sh
$ repo start <BRANCH_NAME> --all
```

### Further Reading
* [Android official documents](https://source.android.com/source/downloading.html)
* [Build Android Source Code](/vim1/BuildAndroid.html)
