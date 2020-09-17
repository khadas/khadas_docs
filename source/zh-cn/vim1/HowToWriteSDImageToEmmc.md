title: 如何把SD卡固件写入到eMMC
---

## 1、[把固件写入到SD卡或U盘](https://docs.khadas.com/zh-cn/vim3/BootFromExtMedia.html)

### 1) 下载烧录工具[Etcher](https://www.balena.io/etcher/)
### 2) [固件下载](https://docs.khadas.com/zh-cn/firmware/)
### 3) 选择固件并烧录

## 2、激活多启动
- 通过[按键模式](https://docs.khadas.com/zh-cn/vim1/HowtoBootIntoUpgradeMode.html)
1、给VIM3上电。
2、长按 POWER 按键不松开。
3、短按 Reset 按键。
4、数2-3秒后松开 POWER 按键会进入升级模式，进入升级模式后系统led会点亮。

## 3、把固件写入到eMMC
```
sudo emmc-install
```
### 1) 在SD / eMMC上安装/更新Bootloader
![image](/images/vim1/Write_SD_image_to_eMMC1.png)
### 2) 继续下一步
![image](/images/vim1/Write_SD_image_to_eMMC2.png)
### 3）编写Bootloader完成
![image](/images/vim1/Write_SD_image_to_eMMC3.png)
