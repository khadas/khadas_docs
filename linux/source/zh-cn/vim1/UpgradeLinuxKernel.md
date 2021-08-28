title: 更新Linux内核
---

## 编译

参考文档[编译Linux内核](BuildLinuxKernel.html)。

## 更新

拷贝内核和DTB debian包到板子上并安装。

```
$ sudo dpkg -i linux-dtb-*.deb 
$ sudo dpkg -i linux-image-*.deb
$ sudo dpkg -i linux-headers-*.deb
$ sync
$ sudo reboot
```

## 参考
[编译Linux内核](BuildLinuxKernel.html)
