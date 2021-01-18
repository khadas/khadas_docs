title: 常问问题
---

# 如何升级固件？

**VIMs**

1. 使VIMs [进入升级模式](/zh-cn/vim1/HowtoBootIntoUpgradeMode.html)。
2. 有两种升级方式：
  * 通过USB数据线升级：参考文档[通过USB升级](/zh-cn/vim1/UpgradeViaUSBCable.html) 在Windows上或Ubuntu上进行升级。
  * 通过TF卡升级（仅Android）：参考文档[通过TF卡升级Android](/zh-cn/vim1/UpgradeViaTFBurningCard.html)进行升级。

**Edge**

1. 使Edge [进入升级模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)。
2. 有两种升级方式：
  * 通过USB数据线升级： 参考文档[通过USB升级](/zh-cn/edge/UpgradeViaUSBCable.html) 在Windows上或Ubuntu上进行升级。
  * 通过TF卡升级：参考文档[通过TF卡升级](/zh-cn/edge/UpgradeViaTFBurningCard.html)进行升级。

# 什么是eMMC固件和SD/USB固件？

**eMMC固件** 只能烧录到eMMC的固件，不能烧录到TF卡或U盘，系统从eMMC运行。
例如： Android固件，带有`EMMC`标识的Ubuntu固件为eMMC固件。

**SD/USB固件** 只能烧录到TF卡或U盘的固件，不能烧录到eMMC，系统从TF卡或U盘运行。
例如： Armbian固件，包含`SD-USB`标识的Ubuntu固件，LibreELEC固件和CoreELEC固件。

# 如何运行SD/USB固件？

为了运行`SD/USB`固件，你需要Android（V180209或更新版本）或Ubuntu（V180531或更新版本）运行在eMMC，同时还需要激活多启动，请参考[从外部媒体介质启动系统](/zh-cn//vim1/BootFromExtMedia.html)。

# 如何编译Ubuntu/Debian固件？

请参考文档[编译Ubuntu/Debian固件](/zh-cn/vim1/FenixScript.html)。

