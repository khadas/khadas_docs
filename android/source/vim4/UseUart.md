title: Use UART
---

This documentation will introduce how to use the uart of 40PIN headers.

## Confirm serial port hardware pins

`UART_E` pin in 40 pins header is pin15 and pin16:

* [VIM4-GPIO-Pin-Out](/android/zh-cn/vim4/Interfaces#GPIO-Pinout)

`UART_E` default is enabled in `kvim4.dts`, the corresponding dev node is `/dev/ttyS4`.

```c
&uart_E {
	status = "okay";
	pinctrl-names = "default";
	pinctrl-0 = <&e_uart_pins_no_cts_rts>;
};
```


## How to use UART by comassistant apk
1. Through the serial port to USB adapter board, one end is connected to the computer, the other end is connected to pin 15, pin 16.
2. Install the`comassistant.apk`, the app can test UART send and recieve function.
3. The run result is as following, comassistant app recevie `12345678` from PC, and send `serial send test` to PC.
<img src="/android/images/vim4/serial_send_rec.png" width="75%" height="75%">
4. PC receive `serial send test`, show in serial tool secureCRT.
```
serial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send test  serial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send testserial send test
``` 

