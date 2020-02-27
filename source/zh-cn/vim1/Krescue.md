title: Krescue - 助你玩转khadas
---

## 什么是krescure

Krescue是一个非常小(21mb)的操作系统，您可以直接从micro SD卡或EMMC启动。它是一把“瑞士军刀”，你可以用它来执行各种低级的SBC维修任务。其中最值得注意的是，通过转储一个原始压缩的.img.gz文件来备份EMMC，并通过将.img.gz文件刷新回EMMC文件来快速安装新的操作系统。Krescue也可以通过有线以太网直接从网络下载和安装操作系统映像。

## 通过SD卡安装Krescure

### 准备工具
1. mirco SD卡一个
2. HDMI显示器，键盘或者khadas遥控器一个
3. VIM1/2/3或者Edge-V一个
4. 一个可以制作启动盘的PC

### 制作Krescure启动盘
#### 烧录工具Etcher
[Etcher](https://www.balena.io/etcher/)是一个兼容性较好同时操作界面简单易用的烧录工具，我们选用这个工具作为烧录Krescure到SD卡的工具。

#### 下载Krescure镜像
Krescure的镜像可以从[这里下载](https://dl.khadas.com/Firmware/Krescue/dump/),选择你相应的板子的固件。
![Kerscure_downloads](/images/vim1/Krescure_downloads.png)

#### 制作启动盘
将mircoSD卡插进PC上。将下载的镜像烧录进SD卡。
![Make_Krescure](/images/vim1/HowtoUseEtcher.png)


### 运行
将制作好的SD卡插入板子,连接HDMI，进入[升级模式](https://docs.khadas.com/zh-cn/vim3/HowtoBootIntoUpgradeMode.html)，看到下图就是成功启动了kerscure
![boot Krescure](/images/vim1/krescure_boot.png)

## 通过网络使用安装Krescure

### 准备工具
1. mirco SD卡一个
2. HDMI显示器，键盘或者khadas遥控器一个
3. 使用ubuntu固件的VIM1/2/3或者Edge-V一个

### 通过网络安装
1. 插入SD卡到板子上，确认SD卡的节点，一般是`/dev/mmcblk0`或者`/dev/mmcblk1`.记住节点的名称
2. 打开终端，运行命令:
```
$ curl -sfL dl.khadas.com/.mega | sh -s - -l
```
你会看到可用的固件列表
![krescure firmware list](/images/vim1/krescure_list.png)
```
$ curl -sfL dl.khadas.com/.mega | sh -s - [BOARD_ID] > /dev/mmcblk0 (或者`/dev/mmcblk1`)
```
等待烧录完成，镜像就被写入了SD卡里，此时就可以进入[升级模式](https://docs.khadas.com/zh-cn/vim3/HowtoBootIntoUpgradeMode.html)启动krescure了。

## 使用kerscure

1. 备份以及还原
通过选项3，可以将板子上EMMC的固件打包存放到SD卡中。通过选项2可以将SD卡中的系统还原到EMMC上。SD卡可以保存不止一个系统

2. 查看板子信息
通过选项6，可以查看板子的配置等相关信息

3. KBI
通过选项7，可以控制板子的kbi。

4. shell终端
选中选项a，就会启动shell终端

5. 游戏
选中选项5，可以在镜像备份或者还原时打发时间

6. 其他
其他功能可以通过选项1查看相关的帮助。

## 注意事项

1. 在烧录注意选择对应自己板子型号的固件。VIM3和VIM3L是不同的板子
2. 通过网络安装使用krescure，板子上的固件要求是ubuntu固件

## 更多 

krescure能做的事情，不止文档所提及的部分，文档中提及的部分只是基础功能。更多的功能可以参考以下的内容
https://youtu.be/ER4BOJUhoYU
https://youtu.be/vvpkbhnyhZY
https://forum.khadas.com/t/krescue-take-full-control-of-your-vim-device/5945
