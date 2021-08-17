title: Capture Running Log
---

{% note info %}
This document only applies to **Android**.
{% endnote %}

If your system is behaving abnormally or we are getting some unexpected outputs, it will be necessary to capture information from the running system log. This log will help us analyze and solve the problem. This document will teach you how to capture the running log of your system.

## Login via a serial terminal

Refer to the article [Setup Serial Debug Tool](/android/vim1/SetupSerialTool.html) to login to the serial terminal.

## Running Log Capture

After logging in, you can capture the log via the following commands.

### Acquire ROOT privileges

```bash
console:/ $ su
console:/ #
```

### Fetch system kernel information

```bash
console:/ # dmesg > /storage/kernel.log
```

### Fetch system log information

```bash
console:/ # logcat > /storage/logcat.log
```

## Send Log File

When reporting problems to [Khadas Community](https://forum.khadas.com/) or hello@khadas.com, please send the above log files to us.
