title: Capture Running Log
---

{% note info %}
This guide is for users of **Ubuntu Linux**.
{% endnote %}

You can capture information from the running system log to diagnose abnormal behaviour and unexpected outputs.

## Login via a Serial Terminal

Connect your PC to the SBC using a [Serial Debugging Tool](SetupSerialTool.html).

The default account and password of Ubuntu Linux is as follows:

Default account：`khadas`
Default password：`khadas`

## Running Log Capture

After logging in with the serial Terminal, you can capture the running system log via the following commands.

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

## Send log file

When reporting problems to [Khadas Community](https://forum.khadas.com/) or support@khadas.com, you can save the log file from your SBC into an SD card, and then send it off to us using your PC.
