title: 系统启动优先级
---

VIM4能从很多设备启动，如下：

* eMMC
* SD Card
* SPI Flash

可以把系统烧写到`eMMC`、`SD卡`或`SPI Flash`。

默认启动优先级如下：

1. SD Card
2. eMMC
3. SPI Flash

你可以通过[KBI](./KbiGuidance.html)命令配置`eMMC`和`SPI Flash`启动优先级，但是`SD卡`始终拥有最高优先级。

* 配置`eMMC`比`SPI Flash`优先

```
kvim4#kbi bootmode w emmc
```

启动优先级如下：

1. SD Card
2. eMMC
3. SPI Flash

* 配置`SPI Flash`比`eMMC`优先

```
kvim4#kbi bootmode w spi
```

启动优先级如下：

1. SD Card
2. SPI Flash
3. eMMC
