title: How To Setup Framebuffer Console Font
---

If the font on framebuffer console is too small, e.g. 4K display or MIPI LCD, you can reconfigure the console:

```
khadas@Khadas:~$ sudo dpkg-reconfigure console-setup
```

You can choose other font size, e.g. `16x32`, and then reboot the system to make it available.

