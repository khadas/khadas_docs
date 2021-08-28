title: 抓取Log
---

{% note info %}
这篇文档仅仅针对**Ubuntu Linux**系统固件。
{% endnote %}

在某些情况下如果系统出现了异常或者运行状态不是我们所预期的，当需要反馈问题给我们时，可以提供一下系统运行的log信息，这样有助有我们分析解决问题。这篇文档将会介绍如何通过**串口调试工具**抓取系统的运行log。

## 通过串口终端登陆系统

参考[设置串口调试工具](SetupSerialTool.html)来登陆串口终端。

系统的默认账号和密码如下：

默认账号：`khadas`
默认密码：`khadas`

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

### 抓取系统Log信息

```bash
khadas@Khadas:~$ sudo tar cvzf ~/systemlog.tgz /var/log/
```

## 发送Log文件

在[Khadas论坛](https://forum.khadas.com/)或通过邮件support@khadas.com反馈问题时，请提供上述log文件。
