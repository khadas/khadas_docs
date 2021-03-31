title: Download The Android Source Code
---

The Android Source Tree of our Khadas VIMs are hosted on [Github](https://www.github.com/khadas). There are many different repositories.

Walk through the steps below to download the Source Code. 

## Steps

Firstly, install git-lfs tool for downloading Android 9.0 SDK

```bash
$ mkdir git_lfs
$ cd git_lfs
$ wget https://github.com/git-lfs/git-lfs/releases/download/v2.3.4/git-lfs-linux-amd64-2.3.4.tar.gz
$ tar xvzf git-lfs-linux-amd64-2.3.4.tar.gz
$ cd git-lfs-2.3.4
$ sudo ./install.sh
$ git lfs install
```

**1) Create an empty directory to hold your working files:**

```bash
$ mkdir -p WORKING_DIRECTORY
$ cd WORKING_DIRECTORY
```

**2) Run `repo init` to download the manifest repository first:**

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="6-tab" data-toggle="tab" href="#6" role="tab" aria-controls="6" aria-selected="true">Android Marshmallow (6.0)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="7-tab" data-toggle="tab" href="#7" role="tab" aria-controls="7" aria-selected="false">Android Nougat (7.1)</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="9-tab" data-toggle="tab" href="#9" role="tab" aria-controls="9" aria-selected="false">Android Pie (9.0)</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="6" role="tabpanel" aria-labelledby="6-tab">

```bash
$ repo init -u https://github.com/khadas/android_manifest.git -b Mmallow
```

{% note warn Note %}

Only available for VIM1.

{% endnote %}

</div>

<div class="tab-pane fade show" id="7" role="tabpanel" aria-labelledby="7-tab">

```bash
$ repo init -u https://github.com/khadas/android_manifest.git -b Nougat
```

{% note warn Note %}
	
Available for both VIM1 & VIM2.

{% endnote %}

</div>

<div class="tab-pane fade show" id="9" role="tabpanel" aria-labelledby="9-tab">

```bash
$ repo init -u https://github.com/khadas/android_manifest.git -b khadas-vims-pie
```

</div>
</div>

**3) Run `repo sync` to pull down the Android Source Tree:**

```bash
$ repo sync -j4
```

The initial sync operation may take an hour or more to complete.

{% note info Tips %}
You might need to run above command repeatly if it fails halfway. Or you can try with this script instead

```bash
#!/bin/bash
repo sync -j4
while [ $? = 1 ]; do
	echo "Sync failed, repeat again:"
	repo sync -j4
done
```
*If needed, press Ctrl-\ to quit.*

{% endnote %}

**4) Begin a new branch for development:**

```bash
$ repo start <BRANCH_NAME> --all
```

## Further Reading
* [Android Official Documents](https://source.android.com/source/downloading.html)
* [Build Android Source Code](/vim1/BuildAndroid.html)
