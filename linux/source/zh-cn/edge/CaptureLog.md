title: 抓取Log
---

{% note info %}
这边文档仅仅针对**Ubuntu Linux**系统固件。
{% endnote %}

在某些情况下如果系统出现了异常或者运行状态不是我们所预期的，当需要反馈问题给我们时，可以提供一下系统运行的log信息，这样有助有我们分析解决问题。这篇文档将会介绍如何抓取系统的运行log。

## 登陆系统

要抓取系统log，首先需要登陆进系统，有如下几种方式可以登陆系统：

* 板子接上键盘鼠标和显示器直接登陆系统
* 通过网络SSH登陆系统
* 通过串口终端登陆系统

系统的默认账号和密码如下：

默认账号：`khadas`
默认密码：`khadas`


### 直接登陆系统

接上USB鼠标和键盘以及HDMI显示器，然后对板子上电，系统会启动进入命令行界面或桌面，可以直接通过用户名和密码进行登陆。


### 通过SSH登陆系统

使用SSH远程登陆需要在本地设置SSH客户端，然后板子需要接上网线，同时确保板子和电脑是在同一个局域网中。

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="linux-tab" data-toggle="tab" href="#ubuntu" role="tab" aria-controls="ubuntu" aria-selected="true">Ubuntu</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="windows-tab" data-toggle="tab" href="#windows" role="tab" aria-controls="windows" aria-selected="false">Windows</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="macos-tab" data-toggle="tab" href="#macos" role="tab" aria-controls="macos" aria-selected="false">Mac OS</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="ubuntu" role="tabpanel" aria-labelledby="ubuntu-tab">

使用SSH远程登陆需要在本地设置SSH客户端，然后板子需要接上网线，同时确保板子和电脑是在同一个局域网中。

* 安装SSH

直接在终端安装ssh命令即可：

```
$ sudo apt update
$ sudo apt install ssh
```

* 登陆系统

ssh登陆命令格式为：`ssh khadas@ip`。需要确认板子的IP地址，可以登陆板子所连接的路由器来查看板子的IP地址。假设板子的IP地址为：`192.168.1.145`，则登陆命令如下：

```bash
$ ssh khadas@192.168.1.145
```
接下来会提示输入密码，在输入密码后按回车即可登陆到系统命令行。如下：

```
$ ssh khadas@192.168.1.145
khadas@192.168.1.145's password:

Welcome to Fenix 1.0.7 Ubuntu 20.04.2 LTS Linux 4.9.241
 _  ___               _            __     _____ __  __ _____
| |/ / |__   __ _  __| | __ _ ___  \ \   / /_ _|  \/  |___ /
| ' /| '_ \ / _` |/ _` |/ _` / __|  \ \ / / | || |\/| | |_ \
| . \| | | | (_| | (_| | (_| \__ \   \ V /  | || |  | |___) |
|_|\_\_| |_|\__,_|\__,_|\__,_|___/    \_/  |___|_|  |_|____/


 * Website:        https://www.khadas.com
 * Documentation:  https://docs.khadas.com
 * Forum:          https://forum.khadas.com

Last login: Tue Aug  3 10:01:47 2021
khadas@Khadas:~$
khadas@Khadas:~$
khadas@Khadas:~$
```

</div>
<div class="tab-pane fade show" id="windows" role="tabpanel" aria-labelledby="windows-tab">

在Windows下可以使用`PuTTY`来通过SSH登陆系统。

* 安装`PuTTY`

访问[PuTTY](https://www.putty.org/)官网下载和安装。

* 登陆系统

打开`PuTTY`选择`Session->SSH`，Host Name填写为IP地址，如：`192.168.1.145`：

<img src="/linux/images/vim1/putty1.png" width="50%" height="50%">

然后点击`Open`，接下来会要求输入用户名和密码：

<img src="/linux/images/vim1/putty2.png" width="50%" height="50%">

<img src="/linux/images/vim1/putty2.png" width="50%" height="50%">

输完后按回车，即可登陆系统，如下：

<img src="/linux/images/vim1/putty4.png" width="50%" height="50%">


</div>
<div class="tab-pane fade show" id="macos" role="tabpanel" aria-labelledby="macos-tab">

在Mac OS系统下可以直接在终端下使用SSH命令登陆。如下：

```
$ ssh khadas@192.168.1.145
khadas@192.168.1.145's password:

Welcome to Fenix 1.0.7 Ubuntu 20.04.2 LTS Linux 4.9.241
 _  ___               _            __     _____ __  __ _____
| |/ / |__   __ _  __| | __ _ ___  \ \   / /_ _|  \/  |___ /
| ' /| '_ \ / _` |/ _` |/ _` / __|  \ \ / / | || |\/| | |_ \
| . \| | | | (_| | (_| | (_| \__ \   \ V /  | || |  | |___) |
|_|\_\_| |_|\__,_|\__,_|\__,_|___/    \_/  |___|_|  |_|____/


 * Website:        https://www.khadas.com
 * Documentation:  https://docs.khadas.com
 * Forum:          https://forum.khadas.com

Last login: Tue Aug  3 10:01:47 2021
khadas@Khadas:~$
khadas@Khadas:~$
khadas@Khadas:~$
```

</div>
</div>

### 通过串口终端登陆系统

参考[设置串口调试工具](/linux/zh-cn/vim1/SetupSerialTool.html)来登陆串口终端。

## 抓取Log

在登录进系统后就可以通过命令来抓取相应的log了。

### 抓取系统版本信息

```bash
khadas@Khadas:~$ cat /etc/fenix-release > ~/system-version.log
```

### 抓取系统内核信息

```bash
khadas@Khadas:~$ sudo dmesg > ~/kernel.log
```

### 抓取系统log信息

```bash
khadas@Khadas:~$ sudo tar cvzf ~/systemlog.tgz /var/log/
```

## 发送Log文件

在反馈问题时，把上述log文件发送给我们。
