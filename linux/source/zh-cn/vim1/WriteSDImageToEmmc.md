title: SD固件写入到eMMC
---

这篇文档介绍如何将SD/USB中的固件写入eMMC。


## 从SD/USB中启动

1. **把固件写入SD卡或者U盘中**。制作启动卡请参考:[把固件写入SD/USB](boot_from_ext_media#1、把固件写入到SD卡或U盘)。
2. **从SD卡或者U盘中启动系统**。启动方法请参考：[从外部介质启动系统](boot_from_ext_media.html)。

## 写入eMMC

1. 启动脚本：

```sh
khadas@Khadas:~$ sudo emmc-install
```

2. 脚本启动后，选择选“OK”，将系统安装到eMMC中。

<img src="/linux/images/vim1/write_sd_image_to_emmc1.png" width="800px">

3. 安装到eMMC中，需要清除eMMC。

<img src="/linux/images/vim1/write_sd_image_to_emmc2.png" width="800px">

4. 清除eMMC之后，eMMC会格式化并安装系统到eMMC中。

<img src="/linux/images/vim1/write_sd_image_to_emmc3.png" width="800px">
<img src="/linux/images/vim1/write_sd_image_to_emmc4.png" width="800px">

5. 安装完成后选择`Power off`，移除SD卡或者U盘后从eMMC启动。

<img src="/linux/images/vim1/write_sd_image_to_emmc5.png" width="800px">

如果不想立即使用eMMC中的固件，可以选择`Exit`。

