title: 在Docker中编译软件包
---

这篇文档介绍如何在Docker中编译软件包（如：libdm，gstreamer，mpp等）。

{% note info 注意 %}
我们仅仅提供arm64架构的Docker环境。
{% endnote %}

## 安装Docker
需要主机系统为`Ubuntu 16.04`或更新。

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

启动Docker：

```sh
$ sudo systemctl enable docker
$ sudo systemctl start docker
```

添加Docker组：

```sh
$ sudo groupadd docker
$ sudo usermod -aG docker $USER
```

{% note info 注意 %}
你需要注销或重启系统。
{% endnote %}

检查Docker：

```sh
$ docker run hello-world
```

如果你看到如下输出，说明Docker安装成功。

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

## 编译Debian Docker镜像

我们提供`Debian stretch arm64`的dockerfile，从GitHub下载。

```sh
$ git clone https://github.com/numbqq/docker-rockchip -b arm64
$ sudo docker build -t rockchip-arm64 .
```
现在编译好了一个名为`rockchip-arm64`包含多架构交叉编译环境的Docker镜像。

## 编译软件包

进入Docker命令行：

```sh
$ docker run -it -v <package dir>:/home/rk/packages rockchip-arm64 /bin/bash
```

{% note info 注意 %}
`package dir`为你要编译的软件包的完整路径。
{% endnote %}

开始编译：

```sh
# cd /home/rk/packages/<package-name>
# DEB_BUILD_OPTIONS=nocheck dpkg-buildpackage -rfakeroot -b -d -uc -us -aarm64
# ls ../*.deb
```

## 例子
编译libdrm。

```sh
$ mkdir ~/test
$ cd ~/test
$ git clone https://github.com/numbqq/libdrm-rockchip -b rockchip-2.4.91
$ cd libdrm-rockchip
$ docker run -it -v $(pwd):/home/rk/packages rockchip-arm64 /bin/bash
```

现在已经在Docker环境中了，开始编译：

```sh
# cd /home/rk/packages/libdrm-rockchip
# DEB_BUILD_OPTIONS=nocheck dpkg-buildpackage -rfakeroot -b -d -uc -us -aarm64
# ls ../*.deb
```

