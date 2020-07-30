title: Download The Android Source Code
---

The Android Source Tree of our Khadas VIMs are hosted on [Github](https://www.github.com/khadas). There are many different repositories.

Walk through the steps below to download the Source Code. 

### Steps
Firstly, install git-lfs tool for downloading Android 9.0 SDK
```sh
$ mkdir git_lfs
$ cd git_lfs
$ wget https://github.com/git-lfs/git-lfs/releases/download/v2.3.4/git-lfs-linux-amd64-2.3.4.tar.gz
$ tar xvzf git-lfs-linux-amd64-2.3.4.tar.gz
$ cd git-lfs-2.3.4
$ sudo ./install.sh
$ git lfs install
```

1) Create an empty directory to hold your working files:
```sh
$ mkdir -p WORKING_DIRECTORY
$ cd WORKING_DIRECTORY
```

2) Run `repo init` to download the manifest repository first:
For Android Marshmallow(6.0):
```sh
$ repo init -u https://github.com/khadas/android_manifest.git -b Mmallow
```
*Note: Only available for VIM1.*

For Android Nougat (7.1):
```sh
$ repo init -u https://github.com/khadas/android_manifest.git -b Nougat
```
*Note: Available for both VIM1 & VIM2.*

For Android Pie (9.0):
```sh
$ repo init -u https://github.com/khadas/android_manifest.git -b khadas-vims-pie
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
