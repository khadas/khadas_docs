title: Install Toolchains
---

The Amlogic Platform requires extra toolchains for cross-compiling, you will need to follow these steps to setup:

1. To build an environment for compiling Android, it is recommended to use 64 bit Ubuntu 16.04. The following software packages need to be installed:

```sh
$ sudo apt-get update
$ sudo apt-get install openjdk-8-jdk automake make git gperf zip dos2unix bison perl gcc g++ tig pkg-config cpp-aarch64-linux-gnu
$ sudo apt-get install unzip lib32z1 libx11-dev lib32z-dev ccache gitk xmllint libxml2-utils libssl-dev
```

2. Tool chain required for U-Boot:

```sh
$ sudo mkdir /opt/toolchains
$ cd /opt/toolchains
$ wget https://dl.khadas.com/products/vim4/tool/gcc-linaro-7.3.1-2018.05-i686_aarch64-elf.tar.xz
$ wget https://dl.khadas.com/products/vim4/tool/xpack-riscv-none-embed-gcc-8.3.0-1.2-linux-x64.tar.gz
$ sudo tar -xvJf gcc-linaro-7.3.1-2018.05-i686_aarch64-elf.tar.xz -C /opt/toolchains
$ sudo tar -zxvf xpack-riscv-none-embed-gcc-8.3.0-1.2-linux-x64.tar.gz -C /opt/toolchains
```

3. Tool chain required for Linux kernel:

```sh
sudo apt-get install gcc-4.8-aarch64-linux-gnu 
```
Main tool chain required for Linux kernel is included in the SDK `prebuilts/clang/host/linux-x86/clang-r383902/bin`.

## Further Reading

[Amlogic Openlinux Website](http://openlinux.amlogic.com/)
