title: Build Ubuntu/Debian Image
---

You can use [Fenix](https://github.com/khadas/fenix) (one-stop script set) to build Ubuntu/Debian images.

### Setup build host
```
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install git make lsb-release qemu-user-static
```

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

### Build full image
If you have setup the environment then it’s time to build the image. And Fenix requires root privileges, you need to enter your password.
```sh
$ make
```

**NOTE:**If it’s your first time to build, the script will check your host PC environment and install some essential packages, and some repos(u-boot,linux) will be cloned automatically from Khadas GitHub.

You can build u-boot and kernel alone.

### Build U-boot
```
$ make uboot
```

### Build linux
```
$ make kernel
```

### Build deb packages
```
$ make debs
```

### Get help messages
You can get help messags by executing `make help`:
```sh
$ make help
Fenix scripts help messages:
  all           - Create image according to environment.
  kernel        - Build linux kernel.
  uboot         - Build u-boot.
  debs          - Build debs.
  image         - Pack update image.
  clean         - Cleanup.
  info          - Display current environment.
```

### Build Fenix in Docker

Fenix is supported to build in Docker, and we provide `Ubuntu 18.04` build host, so you can build all images in Docker.

#### Install Docker
Require host PC `Ubuntu 16.04` or newer.

Uninstall old docker version:
```
$ sudo apt-get remove docker docker-engine docker.io
```
Install some essential packages:
```
$ sudo apt-get update
$ sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Add Docker source:
```
$ sudo add-apt-repository \
	"deb [arch=amd64] https://download.docker.com/linux/ubuntu \
	$(lsb_release -cs) \
	stable"
```

Install Docker:
```
$ sudo apt-get update
$ sudo apt-get install docker-ce
```
Start Docker:
```
$ sudo systemctl enable docker
$ sudo systemctl start docker
```
Add Docker group:
```
$ sudo groupadd docker
$ sudo usermod -aG docker $USER
```
*NOTE: You need to logout or reboot your system.*

#### Check Docker
```
$ docker run hello-world
```

If you see the following messages mean that Docker is setup OK.
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
Build Docker image:
```
$ cd ~/project/fenix
$ docker build -t fenix .
```

Build image in Docker:
```
$ docker run -it -v $(pwd):/home/khadas/fenix -v /etc/localtime:/etc/localtime:ro --privileged fenix
```
We are in Docker container now, start to build.
```
khadas@919cab43f66d:~/fenix$ source env/setenv.sh
khadas@919cab43f66d:~/fenix$ make
```

### See also
[Docker](https://www.docker.com/)
