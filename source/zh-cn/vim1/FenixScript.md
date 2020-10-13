title: 编译Ubuntu/Debian固件
---

你可以使用[Fenix](https://github.com/khadas/fenix)脚本来编译Ubuntu/Debian固件。

### 设置本地编辑环境
```
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install git make lsb-release qemu-user-static
```

### 下载Fenix脚本
下载Fenix脚本到本地路径，如:`~/project/`
```sh
$ mkdir ~/project/
$ cd ~/project/
$ git clone --depth 1 https://github.com/khadas/fenix
```

### 设置编译环境
你需要先设置Fenix编译环境，如：选择Khadas开发板型号、u-boot版本、linux版本、linux发行版、安装方式等等。
```sh
$ cd ~/project/fenix
$ source env/setenv.sh
```
### 开始编译完整固件
在设置好环境执行`make`就会开始编译，编译过程会用到`root`权限，会提示你要输入密码才能继续编译。
```sh
$ make
```

**提示：**如果是你第一次编译，那么时间会比较久，因为脚本会检测你的电脑的编译环境，可能会安装编译需要的一些软件包，同时还会从Khadas Github下载一些仓库（如：u-boot和linux）。

你也可以选择单独编译u-boot和内核。

### 编译U-boot
```
$ make uboot
```

### 编译U-boot debian包
```
$ make uboot-deb
```

### 编译内核
```
$ make kernel
```

### 编译内核debian包
```
$ make kernel-deb
```

### 编译GPU debian包
```
$ make gpu-deb
```

### 编译板级debian包
```
$ make board-deb
```

### 编译所有的debian包
```
$ make debs
```

### 编译uboot image
```
$ make uboot-image
```

### 获取帮助信息
通过执行`make help`来获取帮助信息。
```sh
$ make help
Fenix scripts help messages:
  all           - Create image according to environment.
  kernel        - Build linux kernel.
  uboot         - Build u-boot.
  uboot-deb     - Build u-boot debian package.
  uboot-image   - Build minimal image only with u-boot.
  kernel-deb    - Build linux debian package.
  board-deb     - Build board debian package.
  common-deb    - Build common debian package.
  desktop-deb   - Build desktop debian package.
  gpu-deb       - Build gpu debian package.
  debs          - Build all debian packages.
  image         - Pack update image.
  clean         - Cleanup.
  info          - Display current environment.
```

### 编译选项

* `NO_CCACHE` - ccache选项

  * 使能ccache（默认）
    * NO_CCACHE=no make
  * 禁止ccache
    * NO_CCACHE=yes make

* `COMPRESS_IMAGE` - 压缩固件选项
  * 不压缩（默认）
    * COMPRESS_IMAGE=no make
  * 压缩固件
    * COMPRESS_IMAGE=yes make

* `BUILD_TYPE` - 编译类型选项
  * Develop
    * BUILD_TYPE=develop make
  * Release
    * BUILD_TYPE=release make

* `DOWNLOAD_MIRROR` - 源地址选项
  * 使用国内源
    * DOWNLOAD_MIRROR=china make


### 使用Docker编译
Fenix支持在Docker中编译，我们提供了一个`Ubuntu 20.04`的Docker环境，你可以在里面编译所有的固件。

#### 安装Docker

请参考[Docker官方安装文档](https://docs.docker.com/engine/install/)。

#### 添加用户到Docker组

```
$ sudo usermod -aG docker $USER
```

*注意：你需要注销或重启系统来使其生效。*

#### 检查Docker
```
$ docker run hello-world
```

如果你看到如下信息输出说明Docker安装成功：
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
#### 在Docker中运行Fenix
获取Docker镜像：
```
$ cd ~/project/fenix
$ docker pull numbqq/fenix:latest
```

进入Docker环境：
```
$ docker run -it --name fenix -v $(pwd):/home/khadas/fenix \
             -v /etc/localtime:/etc/localtime:ro \
             -v /etc/timezone:/etc/timezone:ro \
             -v $HOME/.ccache:/home/khadas/.ccache --privileged \
             --device=/dev/loop-control:/dev/loop-control \
             --device=/dev/loop0:/dev/loop0 --cap-add SYS_ADMIN \
             numbqq/fenix
```
现在已经在Docker容器里面了，可以开始编译了：
```
khadas@919cab43f66d:~/fenix$ source env/setenv.sh
khadas@919cab43f66d:~/fenix$ make
```

下一次可以用如下命令启动Docker：

```
$ docker start fenix
$ docker exec -ti fenix bash
```

### 获取最新的nightly build固件
- 访问[Fenix](https://github.com/khadas/fenix)脚本
- 点击下面的badge,如:Rlease Build,Test Build Ubuntu,Test Build Debian
![image](/images/vim1/FenixScript.png)
- 点击最新的workflow就可以看到固件下载页面了

### 参考
[Docker](https://www.docker.com/)


