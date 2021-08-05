title: Capture Running Log
---

{% note info %}
This document only applies to Ubuntu Linux.
{% endnote %}

In some cases, if the system is behaving abnormally or we are getting some unexpected outputs, it will be necessary to capture information from the running system log. This log will help us analuze and solve the problem. This document will teach you how to capture the running log of your system.

## Login to Your System

To capture the system log, you first need to login to your system. There are several ways to do this:

* Connect a keyboard, mouse and monitor to your Khadas single board computer, and login directly
* Login to the system via network SSH (Ethernet or Wi-Fi)
* Login to the system via a serial Terminal

The default account and password of the system is as follows:

Default account：`khadas`
Default password：`khadas`


### Login directly to your system

Connect a USB mouse, keyboard and HDMI display, and then power on your Khadas single board computer, the system will start to enter the command-line interface or desktop, and you can login directly using your username and password.


### Login to the system via SSH

To use SSH for remote logins, you need to setup an SSH client on your localhost (e.g. your smartphone, laptop or PC), and then your Khadas single board computer needs to be connected to the internet either via an ethernet cable, or Wi-Fi connection. At the same time, make sure that your SBC and your localhost are in the same local area network and subnet.

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

To use SSH for remote logins, you need to setup an SSH client on your localhost (e.g. your smartphone, laptop or PC), and then your Khadas single board computer needs to be connected to the internet either via an ethernet cable, or Wi-Fi connection. At the same time, make sure that your SBC and your localhost are in the same local area network and subnet.

* Install SSH

Install the SSH command directly from your terminal shell:

```
$ sudo apt update
$ sudo apt install ssh
```

* Login to your system

The SSH login command format is: `ssh khadas@ip`. If you need to confirm the IP address of your SBC, you can login to your router to view the IP address of your SBC. Assuming the IP address of your SBC is `192.168.1.145` the login command is as follows:

```bash
$ ssh khadas@192.168.1.145
```
Next, you will be prompted to enter your password. After entering the password, press Enter to login to the system shell as follows:

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
```

</div>
<div class="tab-pane fade show" id="windows" role="tabpanel" aria-labelledby="windows-tab">

Under Windows, you can use `PuTTY` to login to the system via SSH.

* Install `PuTTY`

Visit [PuTTY](https://www.putty.org/) official website to download and install.

* Login to the system

Open `PuTTY` and select `Session->SSH`, and fill in the Host Name as the IP address, such as: `192.168.1.145`:

<img src="/linux/images/vim1/putty1.png" width="50%" height="50%">

 Then click `Open`, and enter your username and password:

<img src="/linux/images/vim1/putty2.png" width="50%" height="50%">

<img src="/linux/images/vim1/putty2.png" width="50%" height="50%">

Press Enter to log in to the system:

<img src="/linux/images/vim1/putty4.png" width="50%" height="50%">


</div>
<div class="tab-pane fade show" id="macos" role="tabpanel" aria-labelledby="macos-tab">

In Mac OS system, you can use the SSH command to login directly via your Terminal app:

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

```

</div>
</div>

### Login via a serial terminal

Refer to [Setup Serial Debug Tool](/linux/zh-cn/vim1/SetupSerialTool.html) to login to the serial terminal.

## Running Log Capture

After logging in, you can grab the log via the following commands.

### Fetch system version information

```bash
khadas@Khadas:~$ cat /etc/fenix-release > ~/system-version.log
```

### Fetch system kernel information

```bash
khadas@Khadas:~$ sudo dmesg > ~/kernel.log
```

### Fetch system log information

```bash
khadas@Khadas:~$ sudo tar cvzf ~/systemlog.tgz /var/log/
```

## Send Log File

When reporting problems on [Khadas Community](forum.khadas.com) or to hello@khadas.com, please send the above log files to us.
