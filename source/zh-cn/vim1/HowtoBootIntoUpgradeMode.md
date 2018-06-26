title: 如何进入升级模式
---

有三种方式进入升级模式，如下:

* 按键模式
* 串口模式
* `MRegister`模式

通常情况下普通用户会用到前两种方法，但是在某些特殊情况下，会用第三种方法，如：烧录了错误的Uboot导致系统无法启动，进入不了普通升级模式，这时可以采用第三种方式`MRegister`模式。

### 按键模式(U-Boot正常运行)
1. 给VIM1上电
2. 长按电源按键不松开
3. 短按复位键
4. 10秒后松开电源按键就会进入升级模式


### 串口模式(针对开发者)
1. 参考 [这里](/zh-cn/vim1/SetupSerialTool.html) 去设置串口.
2. 确保串口连接正常并正确配置
3. 按任意键进入uboot命令行模式
4. 输入`update`命令进入升级模式

```
kvim# update
```


### MRegister 模式(Maskrom 模式)
1. 给VIM1上电
2. 使用镊子短接`M`处的两个焊盘触点不松开
3. 短按复位键会进入升级模式

![Image of MRegister_ShortCircuit](/images/vim1/MRegister_ShortCircuit.png)
*提示:  `M` 触点在VIM1板底部*
