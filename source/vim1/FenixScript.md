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
$ git clone https://github.com/khadas/fenix
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

**Tip:**If this is your first time building an image, the script will check your Host's environment and install some essential packages. In addition, repositories (U-Boot, Linux) will be cloned automatically from our Khadas GitHub.

You can build the U-Boot and Kernel alone.

### Build U-Boot
```
$ make uboot
```

### Build Linux
```
$ make kernel
```

### Build .deb Packages
```
$ make debs
```

### Get Help Messages
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

Fenix is supported via Docker. We provide a `Ubuntu 18.04` build host, so you can build all images in Docker.

#### Install Docker
Requires Host PC to be running `Ubuntu 16.04` or newer.

Uninstall old Docker version:
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
*Tip: You'll need to logout or reboot your system.*

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
Build Docker Image:
```
$ cd ~/project/fenix
$ docker build -t fenix .
```

Build Image in Docker:
```
$ docker run -it --name fenix -v $(pwd):/home/khadas/fenix -v /etc/localtime:/etc/localtime:ro -v /etc/timezone:/etc/timezone:ro --privileged --device=/dev/loop0:/dev/loop0 --cap-add SYS_ADMIN fenix
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

### See Also
[Docker](https://www.docker.com/)
