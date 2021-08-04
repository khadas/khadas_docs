title: 如何访问GPIO
---

这篇文档介绍如何在Android和Ubuntu下访问GPIO。

## GPIO编号（部分）
```
PIN         GPIO        Number
PIN15       GPIO1_C2     50
PIN16       GPIO1_C1     49
PIN22       GPIO1_C0     48
PIN23       GPIO1_B7     47
```

{% note info 注意 %}
有些GPIO默认复用为其他功能，如：I2C。如果配置为GPIO功能则需要修改DTS。
{% endnote %}

## 如何获取GPIO编号
可以使用下面的公式计算GPIO编号：

```
n = (block_number * 32) + (sub_block_number * 8) + index
```

* block_number: 块索引
* sub_block_number: 索引编号对应的值，最小为1
* index: 管脚号

例如： PIN15(GPIO1_C2)

```
GPIO1_C2 -> (1 * 32) + (2 * 8) + 2 = 50
```

**如何通过命令行访问GPIO**

>  申请gpio(GPIO1_C2)
```
$ echo 50 > /sys/class/gpio/export
```
> 配置gpio(GPIO1_C2)为输出
```
$ echo out > /sys/class/gpio/gpio50/direction
```
> 设置gpio(GPIO1_C2)输出高电平
```
$ echo 1 >  /sys/class/gpio/gpio50/value
```
> 配置gpio(GPIO1_C2)输出低电平
```
$ echo 0 >  /sys/class/gpio/gpio50/value
```
> 配置gpio(GPIO1_C2)为输入
```
$ echo in > /sys/class/gpio/gpio50/direction
```
> 获取gpio(GPIO1_C2)电平
```
$ cat  /sys/class/gpio/gpio50/value
```
> 释放gpio(GPIO1_C2)
```
$ echo 50 > /sys/class/gpio/unexport
```
