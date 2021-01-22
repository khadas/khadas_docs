title: Build Ubuntu/Debian Images
---

You can use [Fenix](https://github.com/khadas/fenix) (one-stop script) to build Ubuntu/Debian images.

### Setup Build Host
```
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install git make lsb-release qemu-user-static
```

### Clone Fenix Repository
Clone Fenix repository to somewhere like: `~/project/`

```sh
$ mkdir ~/project/
$ cd ~/project/
$ git clone --depth 1 https://github.com/khadas/fenix
```

### Setup Build Environment
You should setup the build environment first. For example: Board type, Linux version, distribution, etc.

```sh
$ cd ~/project/fenix
$ source env/setenv.sh
```

### Build Full Image
If you have setup the environment, then it’s time to build the image. Fenix requires root privileges, so you'll need to enter your password.
```sh
$ make
```

**Tip:** If this is your first time building an image, the script will check your Host's environment and install some essential packages. In addition, repositories (U-Boot, Linux) will be cloned automatically from our Khadas GitHub.

You can build the U-Boot and Kernel alone.

### Build U-Boot
```
$ make uboot
```

### Build U-boot debian package
```
$ make uboot-deb
```

### Build Linux
```
$ make kernel
```

### Build Linux debian package
```
$ make kernel-deb
```

### Build GPU debian package
```
$ make gpu-deb
```

### Build Board debian package
```
$ make board-deb
```

### Build all debian  Packages
```
$ make debs
```
### Build Uboot Image
```
$ make uboot-image
```

### Clean Linux Source Tree
```
$ make kernel-clean
```

### Show Linux Menuconfig
```
$ make kernel-config
```

### Save Linux Defconfig
```
$ make kernel-saveconfig
```
### Clean U-boot Source Tree
```
$ make uboot-clean
```

### Get Help Messages
You can get help messags by executing `make help`:
```sh
$ make help
Fenix scripts help messages:
  all                   - Create image according to environment.
  kernel                - Build linux kernel.
  kernel-clean          - Clean linux source tree.
  kernel-config         - Show linux menuconfig.
  kernel-saveconfig     - Save linux defconfig.
  uboot                 - Build u-boot.
  uboot-clean           - Clean u-boot source tree.
  uboot-deb             - Build u-boot debian package.
  uboot-image           - Build minimal image only with u-boot.
  kernel-deb            - Build linux debian package.
  board-deb             - Build board debian package.
  common-deb            - Build common debian package.
  desktop-deb           - Build desktop debian package.
  gpu-deb               - Build gpu debian package.
  debs                  - Build all debian packages.
  image                 - Pack update image.
  clean                 - Cleanup.
  info                  - Display current environment.
  get-make-params       - Get available make parameters.
```

### Build Options

Trere are some options for building:

* `NO_CCACHE` - ccache option

  * Enable ccache (default)
    * NO_CCACHE=no make
  * Disable ccache
    * NO_CCACHE=yes make

* `COMPRESS_IMAGE` - compress build image option
  * Don't compress (default)
    * COMPRESS_IMAGE=no make
  * Compress image with xz
    * COMPRESS_IMAGE=yes make

* `BUILD_TYPE` - image build type option
  * Develop build
    * BUILD_TYPE=develop make
  * Release build
    * BUILD_TYPE=release make

### Build Fenix in Docker

Fenix is supported via Docker. We provide a `Ubuntu 20.04` build host, so you can build all images in Docker.

#### Install Docker

Please refer to [Docker Official Documentation](https://docs.docker.com/engine/install/).

#### Add User to Docker Group

```
$ sudo usermod -aG docker $USER
```

*Note: You need to logout or reboot the system to make it available.*

#### Check Docker
```
$ docker run hello-world
```

If you see the following print outs, it means that Docker has installed successfully:
```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
ca4f61b1923c: Pull complete
Digest: sha256:be0cd392e45be79ffeffa6b05338b98ebb16c87b255f48e297ec7f98e123905c
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://cloud.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/engine/userguide/
```
#### Run Fenix in Docker
Get Docker Image:
```
$ cd ~/project/fenix
$ docker pull numbqq/fenix:latest
```

Build Image in Docker:
```
$ docker run -it --name fenix -v $(pwd):/home/khadas/fenix \
             -v /etc/localtime:/etc/localtime:ro \
             -v /etc/timezone:/etc/timezone:ro \
             -v $HOME/.ccache:/home/khadas/.ccache --privileged \
             --device=/dev/loop-control:/dev/loop-control \
             --device=/dev/loop0:/dev/loop0 --cap-add SYS_ADMIN \
             numbqq/fenix
```
We are in the Docker Container now, start your build.
```
khadas@919cab43f66d:~/fenix$ source env/setenv.sh
khadas@919cab43f66d:~/fenix$ make
```

To restart the Docker container a second time.

```bash
$ docker start fenix
$ docker exec -ti fenix bash
```

### Get The Latest Night Build Image
- Visit [Fenix](https://github.com/khadas/fenix)(one-stop script)
- Click on the badge like Release Build,Test Build Ubuntu,Test Build Debian
![image](/images/vim1/FenixScript.png)
- You can see the firmware page when you click on the latest workflow

### See Also
[Docker](https://www.docker.com/)
