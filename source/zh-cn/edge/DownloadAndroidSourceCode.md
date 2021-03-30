title: 下载安卓源码
---

国内用户请优先阅读此[网页](/zh-cn/vim3/DownloadAndroidSourceCode.html)。

我们的Khadas Edge的Android源代码托管在Github上。有许多不同的存储库。

按如下步骤下载源代码。

## 步骤

1）创建一个空目录来保存您的工作文件：

```sh
$mkdir -p WORKING_DIRECTORY
$cd WORKING_DIRECTORY
```

2）首先运行repo init下载清单存储库：

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

3）运行repo-sync下拉Android源代码：

```sh
$repo sync -j4
```

初始同步操作可能需要很长时间才能完成。
提示：如果命令中途失败，您可能需要重复运行上面的命令。或者您可以尝试使用此脚本：

{% note info 提示 %}
如果命令中途失败，您可能需要重复运行上面的命令。或者您可以尝试使用此脚本
```sh
#!/bin/bash
repo sync -j4
while [ $? = 1 ]; do
    echo "Sync failed, repeat again:"
    repo sync -j4
done
```

如果需要，请按ctrl-\退出。

{% endnote %}

4）建立开发分支：

```sh
$ repo start <BRANCH_NAME> --all
```
