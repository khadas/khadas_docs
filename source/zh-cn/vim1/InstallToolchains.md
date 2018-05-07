title: 安装Amlogic平台交叉编译器
---

编译Amlogic平台需要安装交叉编译器，按如下步骤安装。

#### 安装U-Boot BL301交叉编译器
```
$ sudo apt-get install gcc-arm-none-eabi
```
*注意*:
* BL301是集成在Amlogic SOC上的ARM Cortex-M3处理器。
* 我们验证过Ubuntu 14.04上 `gcc-4.8.2` 和 Ubuntu 16.04上`gcc-4.9.3`，均可正常工作。
* 你可以尝试使用其他版本gcc，但可能会有风险。

#### 安装linux内核交叉编译器
```
$ wget http://releases.linaro.org/archive/14.09/components/toolchain/binaries/gcc-linaro-aarch64-linux-gnu-4.9-2014.09_linux.tar.bz2
$ sudo mkdir /opt/toolchains
$ sudo tar -xjf gcc-linaro-aarch64-linux-gnu-4.9-2014.09_linux.tar.bz2 -C /opt/toolchains
```
*提示*:
* 如果地址变了，你可能需要替换`gcc-linaro-aarch64-linux-gnu-4.9-2014.09_linux.tar.bz2`新的地址。

#### 更多
[Amlogic Openlinux Website](http://openlinux.amlogic.com/)


