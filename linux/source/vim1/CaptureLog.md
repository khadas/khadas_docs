title: Capture Running Log
---

{% note info %}
This document only applies to **Ubuntu Linux**.
{% endnote %}

If your system is behaving abnormally or we are getting some unexpected outputs, it will be necessary to capture information from the running system log. This log will help us analyze and solve the problem. This document will teach you how to capture the running log of your system.

## Login via a serial terminal

Refer to the article [Setup Serial Debug Tool](/linux/vim1/SetupSerialTool.html) to login to the serial terminal.

The default account and password of the system is as follows:

Default account：`khadas`
Default password：`khadas`

## Running Log Capture

After logging in, you can capture the log via the following commands.

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

When reporting problems to [Khadas Community](https://forum.khadas.com/) or support@khadas.com, please send the above log files to us.
