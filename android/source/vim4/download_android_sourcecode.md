title: Download The Android Source Code
---

The Android Source Tree of our Khadas VIMs are hosted on [Github](https://www.github.com/khadas). There are many different repositories.

Walk through the steps below to download the Source Code.

## Steps

Firstly, install git-lfs tool for downloading Android 11.0 64bit SDK

```sh
$ sudo apt install git-lfs
```
Or source code installation
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

```sh
$ repo init -u https://github.com/khadas/android_manifest.git -b khadas-vim4-r-64bit
```

3) Run `repo sync` to pull down the Android Source Tree:

```sh
$ repo sync -j4
```
The initial sync operation may take an hour or more to complete.

{% note info Tip %}
	You might need to run above command repeatly if it fails halfway. Or you can try with this script instead:
	```sh
	#!/bin/bash
	repo sync -j4
	while [ $? = 1 ]; do
	echo "Sync failed, repeat again:"
	repo sync -j4
	done
	```
	
	*If needed, press Ctrl-\ to quit.*

{% endnote %}

4) Begin a new branch for development:

```sh
$ repo start <BRANCH_NAME> --all
```

5) Based on different unbutu versions, the following operations may be required to pull large files(Otherwise, the corresponding file is small and incorrect).
You need to go to the following three directories and use the 'git lfs pull' command to pull large files, otherwise an [error](https://forum.khadas.com/t/cannot-build-an-android/15886) will be reported during compilation:
```sh
vendor/amlogic/common
device/khadas/kvim4-kernel
device/khadas
```
```sh
xxx@server:/users/vim4$ cd vendor/amlogic/common
xxx@server:/users/vim4/vendor/amlogic/common$ git lfs pull
Git LFS: (6 of 6 files) 239.31 MB / 239.31 MB                                                                                                                                                                                         
xxx@server:/users/vim4/vendor/amlogic/common$ cd -
/users/vim4
xxx@server:/users/vim4$ cd device/khadas/
xxx@server:/users/vim4/device/khadas$ 
xxx@server:/users/vim4/device/khadas$ git lfs pull
Git LFS: (2 of 2 files) 231.89 MB / 231.89 MB                                                                                                                                                                                             
xxx@server:/users/vim4/device/khadas$ cd kvim4-kernel/
xxx@server:/users/vim4/device/khadas/kvim4-kernel$ 
xxx@server:/users/vim4/device/khadas/kvim4-kernel$ git lfs pull    
Git LFS: (4 of 4 files) 451.79 MB / 451.79 MB                                                                                                                                                                                             
xxx@server:/users/vim4/device/khadas/kvim4-kernel$
```
## Further Reading
* [Android Official Documents](https://source.android.com/source/downloading.html)
* [Build Android Source Code](/android/vim3/BuildAndroid.html)
