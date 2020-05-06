title: How To Boot Into Upgrade Mode
---

有很多种方式可以进入升级模式，如下：

* 按键模式
* 串口模式
* TST模式（推荐使用）
* MRegister模式

### 按键模式（确保u-boot正常运行）
1. 给VIM3上电
2. 长按`POWER`按键不松开
3. 短按`Reset`按键。
4. 数2-3秒后松开`POWER`按键会进入升级模式，进入升级模式后系统led会点亮。

### 串口模式（针对开发者）
1. 参考[文档](/zh-cn/vim3/SetupSerialTool.html)设置串口。
2. 确保串口连线正确。
3. 系统启动时按任意按键进入串口命令行模式。
4. 执行`run update`命令进入升级模式，进入升级模式后系统led灯会点亮。

```
kvim3# run update
```

### TST模式(推荐使用)
1. 给VIM3上电。
2. 在2S内连续按3次`Func`按键后松开。
3. 你会看到系统电源指示灯(蓝色)闪烁,3s后电源指示灯(蓝色)会熄灭，表明板子已经进入升级模式。

### MRegister 模式(Maskrom 模式)
1. 给VIM3上电
2. 使用镊子短接`M`处的两个焊盘触点不松开
3. 短按复位按键进入升级模式

![image](/images/vim3/VIM3_M_Register.jpg)
