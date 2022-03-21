title: 使用UART
---

这篇文当介绍如何使用40PIN排针中的串口。

## 确认串口硬件引脚

`UART_E`引出到40PIN的引脚是15脚以及16脚：

* [VIM4-GPIO-Pin-Out](/android/zh-cn/vim4/Interfaces#GPIO-Pinout)

`UART_E` 默认在`kvim4.dts`中使能，对应的设备节点是`/dev/ttyS4`。

```c
&uart_E {
	status = "okay";
	pinctrl-names = "default";
	pinctrl-0 = <&e_uart_pins_no_cts_rts>;
};
```

## 通过 ComAssistant APP去使用串口


1. 首先通过串口转USB小板，一端连接电脑，一端连接40PIN的15脚以及16脚。

2. 安装 `ComAssistant.apk`，这个APP可以测试UART的发送和接收功能。

3. 运行结果如下，ComAssistant 从电脑接收数字`12345678`，发送`serial send test`字符到电脑端。

<img src="/android/images/vim4/serial_send_rec.png" width="75%" height="75%">

4. 电脑接收 `serial send test`，在secureCRT工具显示。

