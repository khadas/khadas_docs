title: Install Toolchains
---

To build the VIMs SDK source code, you need to install the extra toolchains for cross-compiling:

1. Use Ubuntu 16.04 (64-bit) to build an environment for compiling Android. The following software packages need to be installed:

```sh
$ sudo apt-get update
$ sudo apt-get install openjdk-8-jdk automake make git gperf zip dos2unix bison perl gcc g++ tig pkg-config cpp-aarch64-linux-gnu
$ sudo apt-get install unzip lib32z1 libx11-dev lib32z-dev ccache gitk xmllint libxml2-utils libssl-dev
```

2. Toolchains required for U-boot:

```sh
$ sudo mkdir /opt/toolchains
$ cd /opt/toolchains
$ wget https://dl.khadas.com/products/vim4/tool/gcc-linaro-7.3.1-2018.05-i686_aarch64-elf.tar.xz
$ wget https://dl.khadas.com/products/vim4/tool/xpack-riscv-none-embed-gcc-8.3.0-1.2-linux-x64.tar.gz
$ sudo tar -xvJf gcc-linaro-7.3.1-2018.05-i686_aarch64-elf.tar.xz -C /opt/toolchains
$ sudo tar -zxvf xpack-riscv-none-embed-gcc-8.3.0-1.2-linux-x64.tar.gz -C /opt/toolchains
```

3. Toolchains required for the Linux kernel:

```sh
sudo apt-get install gcc-4.8-aarch64-linux-gnu 
```
The main toolchain required for the Linux kernel is included in the SDK `prebuilts/clang/host/linux-x86/clang-r383902/bin`.

## Further Reading

[Amlogic Openlinux Website](http://openlinux.amlogic.com/)
