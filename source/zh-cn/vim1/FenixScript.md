title: 编译Ubuntu/Debian固件
---

你可以使用[Fenix](https://github.com/khadas/fenix)脚本来编译Ubuntu/Debian固件。

### 下载Fenix脚本
下载Fenix脚本到本地路径，如:`~/project/`
```sh
$ mkdir ~/project/
$ cd ~/project/
$ git clone https://github.com/khadas/fenix
```

### 设置编译环境
你需要先设置Fenix编译环境，如：选择Khadas开发板型号、u-boot版本、linux版本、linux发行版、安装方式等等。
```sh
$ cd ~/project/fenix
$ source env/setenv.sh
```
你会看到如下输出：
```sh
nick@Nick:~/project/khadas/ubuntu$ source env/setenv.sh 

Choose Khadas board:
1. VIM1
2. VIM2
3. Edge

Which board would you like? [1] 1

Choose uboot version:
1. uboot-2015.01
2. uboot-mainline

Which uboot version would you like? [1] 

Choose linux version:
1. linux-3.14
2. linux-4.9
3. linux-mainline

Which linux version would you like? [1] 

Choose distribution:
1. Ubuntu
2. Debian

Which distribution would you like? [1] 

Choose Ubuntu release:
1. xenial

Which Ubuntu release would you like? [1] 

Choose Ubuntu type:
1. server
2. mate

Which Ubuntu type would you like? [1] 

Choose Ubuntu architecture:
1. arm64
2. armhf

Which Ubuntu architecture would you like? [1] 

Choose install type:
1. EMMC
2. SD-USB

Which install type would you like? [1] 
===========================================
#VERSION: 0.3

#KHADAS_BOARD=VIM1
#VENDER=Amlogic
#CHIP=S905X
#LINUX=3.14
#UBOOT=2015.01
#DISTRIBUTION=Ubuntu
#DISTRIB_RELEASE=xenial
#DISTRIB_TYPE=server
#DISTRIB_ARCH=arm64
#INSTALL_TYPE=EMMC

===========================================

Environment setup done.
Type 'make' to build.

nick@Nick:~/project/khadas/ubuntu$ 
```

### 开始编译
在设置好环境执行`make`就会开始编译，编译过程会用到`root`权限，会提示你要输入密码才能继续编译。
```sh
$ make
```

**提示：**如果是你第一次编译，那么时间会比较久，因为脚本会检测你的电脑的编译环境，可能会安装编译需要的一些软件包，同时还会从Khadas Github下载一些仓库（如：u-boot和linux）。

### 获取帮助信息
通过执行`make help`来获取帮助信息。
```sh
$ make help
```

#### make kernel
编译linux内核。

#### make uboot
编译u-boot。

#### make debs
编译linux deb包。

#### make image
打包固件。

#### make clean
清理编译生成的文件。

#### make info
查看当前设置的环境。

