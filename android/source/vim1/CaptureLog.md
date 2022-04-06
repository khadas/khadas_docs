title: Capture Running Log
---

If your system is behaving abnormally or we are getting some unexpected outputs, it will be necessary to capture information from the running system log. This log will help us analyze and solve the problem. This document will teach you how to capture the running log of your system.

## Login

1. Via [ADB](/android/vim4/ADBTool.html)
2. Via [Setup Serial Debug Tool](/android/vim1/SetupSerialTool.html) to login to the serial terminal.

## Capture Log

After logging in, you can capture the log via the following commands.

1. Acquire ROOT Privileges

```bash
console:/ $ su
console:/ #
```

2. Fetch System Kernel Information

```
console:/ # dmesg > /storage/kernel.log
```

3. Fetch System Log Information

```
console:/ # logcat > /storage/logcat.log
```

## Send Log File

When reporting problems to [Khadas Community](https://forum.khadas.com/) or support@khadas.com, please send the above log files to us.
