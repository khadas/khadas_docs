title: Download The Android Source Code
---

The Android Source Tree of our Khadas Edge are hosted on [Github](https://www.github.com/khadas). There are many different repositories.

Walk through the steps below to download the Source Code. 

### Steps
1) Create an empty directory to hold your working files:
```sh
$ mkdir -p WORKING_DIRECTORY
$ cd WORKING_DIRECTORY
```

2) Run `repo init` to download the manifest repository first:

**android 10.0:**
```sh
$repo init -u https://github.com/khadas/android_manifest.git -b khadas-edge-Qt
```

**android 9.0:**
```sh
$repo init -u https://github.com/khadas/android_manifest.git -b khadas-edge-pie
```

**android 7.1:**
```sh
$repo init -u https://github.com/khadas/android_manifest.git -b khadas-edge-nougat
```

3) Run `repo sync` to pull down the Android Source Tree:
```sh
$ repo sync -j4
```
The initial sync operation may take an hour or more to complete.

*Tip: You might need to run above command repeatly if it fails halfway. Or you can try with this script instead:*
```sh
#!/bin/bash
repo sync -j4
while [ $? = 1 ]; do
	echo "Sync failed, repeat again:"
	repo sync -j4
done
```
*If needed, press Ctrl-\ to quit.*

4) Begin a new branch for development:
```sh
$ repo start <BRANCH_NAME> --all
```

### Further Reading
* [Android Official Documents](https://source.android.com/source/downloading.html)
* [Build Android Source Code](/vim1/BuildAndroid.html)
