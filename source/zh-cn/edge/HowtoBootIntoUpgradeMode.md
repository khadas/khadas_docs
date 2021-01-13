title: 如何进入升级模式
---

有很多种方式可以进入升级模式，如下：

* 按键模式
* 串口模式
* Linux/Android命令行模式
* TST模式（推荐使用）
* MRegister模式

通常前四种比较常用，但是在某些情况下，如烧录了错误的u-boot或者系统无法启动，这时候就需要使用`MRegister`模式来进入升级模式。

### 按键模式（确保u-boot正常运行）
1. 给Edge上电。
2. 长按`Func`按键不松开
3. 短按`Reset`按键。
4. 数2-3秒后松开`Func`按键会进入升级模式(loader模式)，进入升级模式后系统led会点亮。

### 串口模式（针对开发者）
1. 参考[文档](/zh-cn/edge/SetupSerialTool.html)设置串口。
2. 确保串口连线正确。
3. 系统启动时按任意按键进入串口命令行模式
4. 执行`run update`命令进入loader模式，进入loader模式后系统led灯会点亮。

```
kedge# run update
```

5. 或者执行`run maskrom`命令进入maskrom模式。

```
kedge# run maskrom
```

### Android/Linux命令行模式
1. 参考[文档](/zh-cn/edge/SetupSerialTool.html)设置串口。
2. 确保串口连线正确。
3. 启动进入系统命令行。
4. Linux系统执行`sudo reboot loader`命令，安卓系统执行`su`和`reboot loader`命令，系统会重启进入升级模式（loader模式），进入升级模式后系统led灯会点亮。

### TST模式（推荐使用）
1. 给Edge上电。
2. 在2秒钟内连续按3次`Func`按键后松开。
3. 你会看到系统电源指示灯（蓝色）闪烁，闪烁3秒后电源指示灯（蓝色）会熄灭，表明板子已经进入升级模式（maskrom模式）。

### MRegister模式(Maskrom Mode)
1. 给Edge上电。
2. 用镊子短接 `M` register不松开。
3. 短按`Reset`按键会进入升级模式（maskrom模式）。

![Image of MRegister_ShortCircuit](/images/edge/MRegister_ShortCircuit.png)
*提示：`M` register在Edge板背面*

