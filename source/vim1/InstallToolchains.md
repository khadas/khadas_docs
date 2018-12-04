title: Install Extra Toolchains For The Amlogic Platform
---

The Amlogic Platform requires extra toolchains for cross-compiling, you will need to follow these steps to setup:

### Install Cross Compiler for U-Boot BL301:
```sh
$ sudo apt-get install gcc-arm-none-eabi
```

*Note:*
* BL301 is an ARM Cortex-M3 based coprocessor, and is integrated into the Amlogic SoCs.
* We have verified that 'gcc-4.8.2 on Ubuntu 14.04' and 'gcc-4.9.3 on Ubuntu 16.04' both work fine on the VIM1 Platform.
* You might want to take a risk and experiment with other gcc versions.

### Install Cross-Compiler for Linux Kernel:
```sh
$ wget http://releases.linaro.org/archive/14.09/components/toolchain/binaries/gcc-linaro-aarch64-linux-gnu-4.9-2014.09_linux.tar.bz2
$ sudo mkdir /opt/toolchains
$ sudo tar -xjf gcc-linaro-aarch64-linux-gnu-4.9-2014.09_linux.tar.bz2 -C /opt/toolchains
```

*Tip: You may need to find a new address for "gcc-linaro-aarch64-linux-gnu-4.9-2014.09_linux.tar.bz2" if the link address above has changed.*

### Further Reading:
[Amlogic Openlinux Website](http://openlinux.amlogic.com/)
