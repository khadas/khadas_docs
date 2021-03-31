title: Build Packages Using Docker
---

This guide is about how to build packages(libdrm, gstreamer, mpp, etc.) using Docker.


{% note info Note %}
We only use the arm64 architecture.
{% endnote %}

## Install Docker
Requires your Host PC to be `Ubuntu 16.04` or newer.

```sh
$ sudo apt-get remove docker docker-engine docker.io
$ sudo apt-get update
$ sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository \
		"deb [arch=amd64] https://download.docker.com/linux/ubuntu \
		$(lsb_release -cs) \
		stable"
$ sudo apt-get update
$ sudo apt-get install docker-ce
```

Start Docker:
```sh
$ sudo systemctl enable docker
$ sudo systemctl start docker
```

Add Docker Group:
```sh
$ sudo groupadd docker
$ sudo usermod -aG docker $USER
```

{% note info Tip %}
You need to logout or reboot your system.
{% endnote %}

Check Docker:
```sh
$ docker run hello-world
```
If you see the following messages, it means that Docker has installed successfully:
```sh
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

## Build Debian Docker Image
We provide a Debian stretch arm64 dockerfile. Clone it from GitHub.

```sh
$ git clone https://github.com/numbqq/docker-rockchip -b arm64
$ sudo docker build -t rockchip-arm64 .
```

Now you'll see a Docker image named `rockchip-arm64`, which also includes a debian multi-architecture cross-compiling enviroment.

## Build Packages

Enter Docker Shell:

```sh
$ docker run -it -v <package dir>:/home/rk/packages rockchip-arm64 /bin/bash
```

{% note info Tip %}
`package dir` is the full-path of the package that you want to build.
{% endnote %}

Start To Build:

```sh
# cd /home/rk/packages/<package-name>
# DEB_BUILD_OPTIONS=nocheck dpkg-buildpackage -rfakeroot -b -d -uc -us -aarm64
# ls ../*.deb
```

## Example
Build libdrm.

```sh
$ mkdir ~/test
$ cd ~/test
$ git clone https://github.com/numbqq/libdrm-rockchip -b rockchip-2.4.91
$ cd libdrm-rockchip
$ docker run -it -v $(pwd):/home/rk/packages rockchip-arm64 /bin/bash
```
We are in Docker now, start your build:

```sh
# cd /home/rk/packages/libdrm-rockchip
# DEB_BUILD_OPTIONS=nocheck dpkg-buildpackage -rfakeroot -b -d -uc -us -aarm64
# ls ../*.deb
```

