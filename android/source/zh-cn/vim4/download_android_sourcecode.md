title: 下载安卓源码
---

国内用户请优先阅读此[网页](/android/zh-cn/vim3/DownloadAndroidSourceCode.html)。

我们的Khadas VIM4的Android源代码托管在Github上。有许多不同的存储库。

按如下步骤下载源代码。

## 步骤

首先通过下面命令安装 git-lfs tool

```sh
$ sudo apt install git-lfs
```
或者源码安装
```sh
$ mkdir git_lfs
$ cd git_lfs
$ wget https://github.com/git-lfs/git-lfs/releases/download/v2.3.4/git-lfs-linux-amd64-2.3.4.tar.gz
$ tar xvzf git-lfs-linux-amd64-2.3.4.tar.gz
$ cd git-lfs-2.3.4
$ sudo ./install.sh
$ git lfs install
```

1) 创建一个空目录来保存您的工作文件：

```sh
$ mkdir -p WORKING_DIRECTORY
$ cd WORKING_DIRECTORY
```

2) 首先运行repo init下载清单存储库：

```sh
$ repo init -u https://github.com/khadas/android_manifest.git -b khadas-vim4-r-64bit
```

3) 运行repo-sync下拉Android源代码：

```sh
$ repo sync -j4
```
初始同步操作可能需要很长时间才能完成。
提示：如果命令中途失败，您可能需要重复运行上面的命令。或者您可以尝试使用此脚本：

{% note info Tip %}
	```sh
	#!/bin/bash
	repo sync -j4
	while [ $? = 1 ]; do
	echo "Sync failed, repeat again:"
	repo sync -j4
	done
	```
	
	*如果需要，请按ctrl-\退出。*

{% endnote %}

4) 建立开发分支：

```sh
$ repo start <BRANCH_NAME> --all
```

5) 基于不同的unbutu版本，可能需要执行以下操作才能提取到大型文件（否则对应的文件很小，不正确）。
您需要转到以下三个目录并使用“git lfs pull”命令来拉取大型文件，否则在编译过程中会报告[错误](https://forum.khadas.com/t/cannot-build-an-android/15886)：
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
## 更多参考
* [Android Official Documents](https://source.android.com/source/downloading.html)
* [Build Android Source Code](/android/vim3/BuildAndroid.html)
