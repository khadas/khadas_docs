title: Install Extra Toolchains For The Amlogic Platform
---

The Amlogic Platform requires extra toolchains for cross-compiling, you will need to follow these steps to setup:

### Install Cross Compiler for U-Boot BL:
```sh
$ sudo apt-get install gcc-arm-none-eabi
$ wget https://releases.linaro.org/archive/13.11/components/toolchain/binaries/gcc-linaro-aarch64-none-elf-4.8-2013.11_linux.tar.bz2
$ wget https://developer.arm.com/-/media/Files/downloads/gnu-rm/6-2017q2/gcc-arm-none-eabi-6-2017-q2-update-linux.tar.bz2
$ sudo mkdir /opt/toolchains
$ sudo tar -xjf gcc-linaro-aarch64-none-elf-4.8-2013.11_linux.tar.bz2 -C /opt/toolchains
$ sudo tar -xjf gcc-arm-none-eabi-6-2017-q2-update-linux.tar.bz2 -C /opt/toolchains
```

### Install Cross-Compiler for Linux Kernel:
```sh
$ wget https://releases.linaro.org/components/toolchain/binaries/6.3-2017.02/arm-linux-gnueabihf/gcc-linaro-6.3.1-2017.02-x86_64_arm-linux-gnueabihf.tar.xz
$ wget https://releases.linaro.org/components/toolchain/binaries/6.3-2017.02/aarch64-linux-gnu/gcc-linaro-6.3.1-2017.02-x86_64_aarch64-linux-gnu.tar.xz
$ sudo mkdir /opt/toolchains
$ sudo tar xvJf gcc-linaro-6.3.1-2017.02-x86_64_arm-linux-gnueabihf.tar.xz -C /opt/toolchains
$ sudo tar xvJf gcc-linaro-6.3.1-2017.02-x86_64_aarch64-linux-gnu.tar.xz -C /opt/toolchains
```
### Further Reading:
[Amlogic Openlinux Website](http://openlinux.amlogic.com/)
