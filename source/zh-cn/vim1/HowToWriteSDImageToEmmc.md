title: 如何把SD卡固件写入到eMMC
---

## [把固件写入到SD卡或U盘](/zh-cn/vim3/BootFromExtMedia.html)

* 下载烧录工具[Etcher](https://www.balena.io/etcher/)
* [固件下载](/zh-cn/firmware/)
* 选择固件并烧录

## 激活多启动
- 通过[按键模式](/zh-cn/vim1/HowtoBootIntoUpgradeMode.html)
  * 给板子上电。
  * 长按 POWER 按键不松开。
  * 短按 Reset 按键。
  * 数10秒后松开 POWER 按键会进入升级模式，进入升级模式后系统led会点亮。

## 把固件写入到eMMC

```
sudo emmc-install
```

### 在SD / eMMC上安装/更新Bootloader
![image](/images/vim1/Write_SD_image_to_eMMC1.png)

### 继续下一步
![image](/images/vim1/Write_SD_image_to_eMMC2.png)

### 编写Bootloader完成
![image](/images/vim1/Write_SD_image_to_eMMC3.png)
