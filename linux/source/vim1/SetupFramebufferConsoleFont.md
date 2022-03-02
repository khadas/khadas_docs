title: Framebuffer Console Font
---

If the Framebuffer console font is too small, e.g. 4K display or MIPI LCD, you can reconfigure the font-size:

```
khadas@Khadas:~$ sudo dpkg-reconfigure console-setup
```

Choose another font size, e.g. `16x32`, then reboot the system for changes to take effect.
