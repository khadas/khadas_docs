title: 如何设置Framebuffer Console字体大小
---

如果觉得Framebuffer Console字体太小，比如在4K分辨率或者MIPI LCD下显示，可以通过如下命令来设置字体大小:

```
khadas@Khadas:~$ sudo dpkg-reconfigure console-setup
```

你可以选择其他字体，如：`16x32`，然后重启系统使其生效。
