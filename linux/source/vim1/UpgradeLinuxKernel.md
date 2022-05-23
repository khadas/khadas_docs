title: Upgrade the Linux Kernel
---

## Upgrading

Copy the kernel & dtb Debian packages to the board and install them.

```
$ sudo dpkg -i linux-dtb-*.deb 
$ sudo dpkg -i linux-image-*.deb
$ sudo dpkg -i linux-header-*.deb
$ sync
$ sudo reboot
```

## See Also
[Build Linux Kernel](BuildLinuxKernel.html)
