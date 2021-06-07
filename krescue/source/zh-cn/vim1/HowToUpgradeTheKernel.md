title: 如何更新内核
---

我们使用[Fenix](/zh-cn/vim1/FenixScript.html)来编译Ubuntu/Debian固件。你也可以使用它来编译内核debian包。

* 设置Fenix环境

```
$ source env/setenv.sh
```

* 修改内核配置[**可选的**]

如果你想要修改默认的内核配置，可以参考如下步骤。

```
$ make kernel-config
$ make kernel-saveconfig
```

* 编译内核debian包

```
$ make kernel
$ make kernel-deb
```

你会在目录`build/images/debs/FENIX-VERSION`下找到生成的debian包。


**FENIX-VERSION:** 表示Fenix SDK版本号。如： **0.8.3**

所以生成的debian包可能在目录`build/images/debs/0.8.3`，生成的debian为：`linux-image-amlogic-mainline_0.8.3_arm64.deb`。

`DTB debian包`：`linux-dtb-*.deb`
`Kernel debian包`：`linux-image-*.deb`
`Header debian包`：`linux-headers-*.deb`

* 更新内核和DTB

拷贝内核和DTB debian包到板子上并安装。

```
$ sudo dpkg -i linux-dtb-*.deb 
$ sudo dpkg -i linux-image-*.deb
$ sync
$ sudo reboot
```
