title: 通过TF卡升级固件
---

这里以安卓为例，Ubuntu的升级与安卓一致。

{% note info 由于VIM1、VIM2和VIM3操作方式基本上是一样的，所以本文档以VIM1为例进行说明。%}

{% endnote %}

{% note warn 注意：由于TF烧录卡只支持FAT32文件系统，因为Ubuntu桌面系统大小大于4GB，所以不支持TF卡烧录。 %}

{% endnote %}


## 准备工作
* 下载[Burn Card Maker Tool](https://dl.khadas.com/Tools/Burn_card_maker_V2.0.2_20150617_en.7z) 并解压。
* 准备好TF卡的读卡器。
* 一台高清显示器（带HDMI接口）。

注意：若是TF卡里面有数据要提前备份出来，制作过程会格式化整个TF卡。

## 固件升级操作步骤
1. 插入TF卡到电脑上，系统有识别到TF的盘符
![image](/images/vim1/tfcard_pc_zh.png)

2. 识别到TF卡后双击运行工具“**Burn_Card_Maker.exe**”
![image|646x86](/images/vim1/BurnCardMaker_Tool_zh.png)

3. 选择工具设置项
   * 在工具的下拉框“**选中SD卡**”里选择TF卡设备。
   * 选择"**分区和格式化**"(第一次制作TF升级卡时要选上此项)
   * 点击"**打开**"按钮选择要升级的固件
   * 点击"**制作**"按钮制作TF升级卡

![image|520x372](/images/vim1/BurnCardMaker_Tool_Interface_zh.png)

4. 当所有都完成了之后，会弹出"**Success**"消息，点击“**确定**”按钮完成当前操作。
![image|519x385](/images/vim1/BurnCardMaker_Tool_success_zh.png)

5. 从电脑上安全移除TF卡，然后插入到VIM/ VIM2的TF卡槽里面。

6. 连接好HDMI和USB-C线，然后给VIM/ VIM2上电。

7. 让VIM/ VIM2进入升级模式
   * 长按Power键不要松开
   * 短按Rest键并松开
   * 大概3秒后松开Power键进入固件升级模式

正常操作后，显示器上会显示以下内容：
![image|690x465](/images/vim1/Upgrading_interface.png)

## 更多资料
 * [通过USB-C数据线](/zh-cn/vim1/UpgradeViaUSBCable.html)
 * [VIM1怎样进入升级模式](/zh-cn/vim1/HowtoBootIntoUpgradeMode.html)
 * [VIM2怎样进入升级模式](/zh-cn/vim2/HowtoBootIntoUpgradeMode.html)
 * [VIM3怎样进入升级模式](/zh-cn/vim3/HowtoBootIntoUpgradeMode.html)


