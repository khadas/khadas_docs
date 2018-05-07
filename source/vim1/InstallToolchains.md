title: Install Extra Toolchains for Amlogic Platform
---

Amlogic platform requires extra toolchains for cross-compiling, you might need to follow the below steps to do the setup.

### Install Cross Compiler for U-Boot BL301:
```sh
$ sudo apt-get install gcc-arm-none-eabi
```

*Note:*
* BL301 is an ARM Cortex-M3 based coprocessor, and is integrated into the Amlogic SoCs.
* We have verified that 'gcc-4.8.2 on Ubuntu 14.04' and 'gcc-4.9.3 on Ubuntu 16.04', both work fine on VIM1 platform.
* You might wanna have a try with other gcc versions, it may take a risk.

### Install Cross Compiler for Linux kernel:
```sh
$ wget http://releases.linaro.org/archive/14.09/components/toolchain/binaries/gcc-linaro-aarch64-linux-gnu-4.9-2014.09_linux.tar.bz2
$ sudo mkdir /opt/toolchains
$ sudo tar -xjf gcc-linaro-aarch64-linux-gnu-4.9-2014.09_linux.tar.bz2 -C /opt/toolchains
```

*Tips: you might need to replace a new address of gcc-linaro-aarch64-linux-gnu-4.9-2014.09_linux.tar.bz2 if the link address above was changed.*

### Further readings:
[Amlogic Openlinux Website](http://openlinux.amlogic.com/)
