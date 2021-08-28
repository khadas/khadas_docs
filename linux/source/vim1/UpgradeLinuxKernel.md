title: Upgrade Linux kernel
---

## Build

Please refer to [Build Linux Kernel](BuildLinuxKernel.html).

## Upgrade

Copy the kernel & dtb debian packages to the board and install it.

```
$ sudo dpkg -i linux-dtb-*.deb 
$ sudo dpkg -i linux-image-*.deb
$ sudo dpkg -i linux-header-*.deb
$ sync
$ sudo reboot
```

## See Also
[Build Linux Kernel](BuildLinuxKernel.html)
