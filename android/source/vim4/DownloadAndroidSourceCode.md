title: Android Source Code
---

The Khadas VIM Android Source Tree is hosted on [Github](https://www.github.com/khadas).

## How-to download

1) Install the git-lfs tool for downloading Android 9.0 SDK

```sh
$ mkdir git_lfs
$ cd git_lfs
$ wget https://github.com/git-lfs/git-lfs/releases/download/v2.3.4/git-lfs-linux-amd64-2.3.4.tar.gz
$ tar xvzf git-lfs-linux-amd64-2.3.4.tar.gz
$ cd git-lfs-2.3.4
$ sudo ./install.sh
$ git lfs install
```

2) Create an empty directory to hold your working files:

```sh
$ mkdir -p WORKING_DIRECTORY
$ cd WORKING_DIRECTORY
```

3) Run `repo init` to download the manifest repository:

```sh
$ repo init -u https://github.com/khadas/android_manifest.git -b khadas-vims-pie
```

3) Run `repo sync` to pull down the Android Source Tree:

```sh
$ repo sync -j4
```
The initial sync operation may take an hour or more to complete.

{% note info Tip %}
	If the sync operation fails halfway, run this automated script to auto-restart the download:
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

4) Create a new branch for development:

```sh
$ repo start <BRANCH_NAME> --all
```

## Further reading
* [Android Source Documentation](https://source.android.com/source/downloading.html)
* [Build Android Source Code](/android/vim3/BuildAndroid.html)
