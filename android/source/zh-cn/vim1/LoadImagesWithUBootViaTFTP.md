title: 通过TFTP下载镜像
---

在有线网络连接正常的情况下，U-boot能通过TFTP非常方便的下载更新镜像文件。

## 准备
* [搭建TFTP服务器](/android/zh-cn/vim1/SetupTFTPServer.html)

## 更新U-boot

```bash
kvim# tftp 1080000 u-boot.bin
kvim# store rom_write 1080000 0 $filesize
```

{% note info 注意 %}

你可能需要清除旧的U-boot的环境变量：

```bash
kvim# defenv
kvim# saveenv
```

执行`reset` 或者按 `Reset` 按键重启设备运行新的U-boot：

```bash
kvim# reset
```

{% endnote %}

## 加载运行`boot.img`

下载镜像到内存，执行`bootm`直接启动镜像

```bash
kvim# tftp 1080000 boot.img
kvim# bootm
```

{% note warn 注意 %}

仅用于Android。

{% endnote %}

## 调试

执行`saveenv`失败：

```bash
kvim# saveenv
Saving Environment to aml-storage...
get partition info failed !!
kvim#
```

你需要先写入dtb。
## 参考
* [U-Boot Offical Guidance](http://www.denx.de/wiki/view/DULG/UBoot)
