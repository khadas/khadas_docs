title: 如何使用串口
---

这篇文当介绍如何使用40PIN排针中的串口。

## 确认串口硬件引脚

Uart引出到40Pin的引脚是15脚以及16脚：

* [VIM1-GPIO-Pin-Out](/vim1/index.html#GPIO-Pin-Out)
* [VIM2-GPIO-Pin-Out](/vim2/#GPIO-Pinout)
* [VIM3-GPIO-Pin-Out](/vim3/#GPIO-Pinout)


## 使能串口

通过DT Overlays打开uart的节点，编辑`/boot/env.txt`，在`overlays`中增加`uartX`。


例如：

```bash
overlays=uart4 pwm_ao_a pwm_f i2c0
```

{% note info 例如 %}

* VIM1/VIM2 - **uar4**
* VIM3/VIM3L - **uart3**

{% endnote %}

修改完后保存重启。

## 查看串口节点

重启后可以看到新的串口节点。

{% note info 例如 %}

* VIM1/VIM2 - **/dev/ttyS4**
* VIM3/VIM3L - **/dev/ttyS3**

{% endnote %}
