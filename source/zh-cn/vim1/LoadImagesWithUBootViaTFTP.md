title: 通过TFTP下载镜像
---

在有线网络连接正常的情况下，U-boot能通过TFTP非常方便的下载更新镜像文件。

### 准备
- [x] [搭建TFTP服务器](/zh-cn/vim1/SetupTFTPServer.html)

### 更新U-boot

```
kvim# tftp 1080000 u-boot.bin
kvim# store rom_write 1080000 0 $filesize
```

**注意**：你可能需要清除旧的U-boot的环境变量：
```
kvim# defenv
kvim# saveenv
```

执行`reset` 或者按 `Reset` 按键重启设备运行新的U-boot：
```
kvim# reset
```

### 加载运行`boot.img`
下载镜像到内存，执行`bootm`直接启动镜像
```
kvim# tftp 1080000 boot.img
kvim# bootm
```

### 通过tftp启动Linux
下载镜像到内存，通过`booti`直接运行：
```
kvim# tftp 1080000 zImage
kvim# tftp 10000000 uInitrd
kvim# tftp 20000000 kvim.dtb
kvim# booti 1080000 10000000 20000000"
```

### 调试
执行`saveenv`失败：
```
kvim# saveenv
Saving Environment to aml-storage...
get partition info failed !!
kvim#
```

你需要先写入dtb。
### 参考
* [U-Boot Offical Guidance](http://www.denx.de/wiki/view/DULG/UBoot)
