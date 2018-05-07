title: Build Ubuntu/Debian Image
---

You can use [Fenix](https://github.com/khadas/fenix) (one-stop script set) to build Ubuntu/Debian images.

### Clone Fenix repository
Clone Fenix repo to somewhere like: `~/project/`

```sh
$ mkdir ~/project/
$ cd ~/project/
$ git clone https://github.com/khadas/fenix
```

### Setup build environment
You should setup the build environment first.For example board type, linux version, distribution, etc.

```sh
$ cd ~/project/fenix
$ source env/setenv.sh
```

You will get result like this:
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

### Build image
If you have setup the environment then it’s time to build the image. 
And Fenix requires root privileges, you need to enter your password.
```sh
$ make
```

**NOTE:**If it’s your first time to build, the script will check your host PC environment 
and install some essential packages, and some repos(u-boot,linux) will be cloned 
automatically from Khadas GitHub.

### Get help messages
You can get help messags by executing `make help`:
```sh
$ make help
Fenix scripts help messages:
  all           - Create image according to environment.
  kernel        - Build linux kernel.
  uboot         - Build u-boot.
  debs          - Build linux debs.
  image         - Pack update image.
  clean         - Cleanup.
  info          - Display current environment.

```
#### make kernel
Build linux kernel only.

#### make uboot
Build u-boot only.

#### make debs
Build linux deb packages.

#### make image
Pack image.

#### make clean
Cleanup.

#### make info
Display current environment.

