title: UART使用说明
---

这篇文章主要介绍如何使用40PIN排针中的串口

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

## 通过ComAssistant应用使用串口


1. 首先通过串口转USB小板，一端连接电脑，一端连接40PIN的15脚以及16脚。


2. VIM4上安装 `ComAssistant`应用，选择波特率为`9600`，设备节点为`/dev/ttyS4`。


3. PC主机上安装SecureCRT工具，选择正确的串口端口号，并配置波特率为`9600`。


4. PC主机端发送数字`12345678`，VIM4端发送字符`serial send test`。


5. 运行结果如下，VIM4接收到PC端发送的数字`12345678`，PC上接收到VIM4发送的字符`serial send test`。


<img src="/android/images/vim4/serial_send_rec.png" width="75%" height="75%">

