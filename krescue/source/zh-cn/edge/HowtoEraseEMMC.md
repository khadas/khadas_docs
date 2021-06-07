title: 如何擦除eMMC
---

## 在Windows下

你可以用[AndroidTool](https://dl.khadas.com/Tools/AndroidTool_Release_zh_v2.58.zip)来擦除eMMC。


1. 给Edge上电并通过USB-C数据线连接Edge和你的电脑。

2. 进入`Loader`或`MASKROM`，参考[如何进入升级模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)。

3. 打开`AndroidTool`选择`升级固件->固件`来加载固件。

4. 点击`擦除Flash`来擦除eMMC。
![AndroidTool Erase eMMC](/images/edge/AndroidTool_erase_zh.png)

## 在Ubuntu下

	你可以使用[Linux_Upgrade_Tool](https://dl.khadas.com/Tools/Linux_Upgrade_Tool_v1.34.zip)来擦除eMMC。

1. 给Edge上电并通过USB-C数据线连接Edge和你的电脑。

2. 进入`Loader`或`MASKROM`，参考[如何进入升级模式](/zh-cn/edge/HowtoBootIntoUpgradeMode.html)。

3. 使用`upgrade_tool`来擦除eMMC。

```sh
$ sudo ./upgrade_tool ef /path/to/MiniLoaderAll.bin
```

{% note info 注意 %}
`upgrade_tool`需要配合`MiniLoaderAll.bin`来进行擦除，可以通过编译u-boot得到。
{% endnote %}

