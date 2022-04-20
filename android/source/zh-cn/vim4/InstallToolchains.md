title: 安装交叉编译器
---

编译VIMs平台SDK代码需要安装交叉编译器，安装步骤如下：

1. 搭建用于编译Android的环境，建议使用64位的Ubuntu 16.04，安装如下软件包：

```sh
$ sudo apt-get update
$ sudo apt-get install openjdk-8-jdk automake make git gperf zip dos2unix bison perl gcc g++ tig pkg-config cpp-aarch64-linux-gnu
$ sudo apt-get install unzip lib32z1 libx11-dev lib32z-dev ccache gitk xmllint libxml2-utils libssl-dev
```

2. 编译U-Boot所需的工具链：

```sh
$ sudo mkdir /opt/toolchains
$ cd /opt/toolchains
$ wget https://dl.khadas.com/products/vim4/tool/gcc-linaro-7.3.1-2018.05-i686_aarch64-elf.tar.xz
$ wget https://dl.khadas.com/products/vim4/tool/xpack-riscv-none-embed-gcc-8.3.0-1.2-linux-x64.tar.gz
$ sudo tar -xvJf gcc-linaro-7.3.1-2018.05-i686_aarch64-elf.tar.xz -C /opt/toolchains
$ sudo tar -zxvf xpack-riscv-none-embed-gcc-8.3.0-1.2-linux-x64.tar.gz -C /opt/toolchains
```

3. 编译Linux内核所需的工具链：

```sh
sudo apt-get install gcc-4.8-aarch64-linux-gnu 
```

## 更多

[Amlogic Openlinux Website](http://openlinux.amlogic.com/)

