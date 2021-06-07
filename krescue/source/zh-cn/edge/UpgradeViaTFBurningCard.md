title:  通过TF卡升级固件
---

## 准备工作

* 一台Windows电脑
* 下载[SDDiskTool](https://dl.khadas.com/Tools/SDDiskTool_zh_v1.53.zip)并解压
* TF卡和读卡器
* HDMI显示器

{% note info 注意 %}
若是TF卡里面有数据要提前备份出来，制作过程会格式化整个TF卡。
{% endnote %}

# 制作TF烧录卡

1. TF卡插入读卡器，并把读卡器插入电脑USB接口

2. 打开`SDDiskTool`工具

3. 选择`可移动磁盘`为刚插入的TF卡

4. 选择功能模式为`固件升级`

5. 点击`升级固件`选择要烧录的固件

6. 点击`开始创建`进行烧录TF卡的创建

![Sdtool](/images/edge/Sdtool_zh_1.png)
![Sdtool](/images/edge/Sdtool_zh_2.png)

烧录卡创建成功后会看到如下提示：

![Sdtool](/images/edge/Sdtool_zh_3.png)

## 使用TF烧录卡进行升级

1. 把制作好的TF烧录卡插入Edge TF卡插槽
2. 通过HDMI线连接Edge和显示器
3. 给Edge上电或重启Edge开发板
4. 重启后会在HDMI显示器看到升级界面，如下：

![Sdtool upgrade](/images/edge/Sd_upgrade.JPG)

等待升级完成后会看到如下界面：

![Sdtool upgrade done](/images/edge/Sd_upgrade_done.JPG)

这时请弹出TF卡，然后Edge会自动重启进入到刚烧录好的系统。

## 参考

[通过USB数据线升级](/zh-cn/edge/UpgradeViaUSBCable.html)
