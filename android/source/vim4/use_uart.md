title: UART Usage
---

This documentation will introduce how to use the UART of `40-PIN HEADER`.

## UART Port Instruction

`UART_E` pin in `40-PIN HEADER` is pin15 and pin16:

* [VIM4-GPIO-Pin-Out](/android/zh-cn/vim4/Interfaces#GPIO-Pinout)

`UART_E` default is enabled in `kvim4.dts`, the corresponding dev node is `/dev/ttyS4`.

```c
&uart_E {
	status = "okay";
	pinctrl-names = "default";
	pinctrl-0 = <&e_uart_pins_no_cts_rts>;
};
```

## Use UART by ComAssistant APP

1. You need a USB to TTL Converter, one end is connected to the computer, the other end is connected to pin 15, pin 16.

2. Install [ComAssistant](https://dl.khadas.com/development/com_assistant.zip) application on VIM4, then setup the baudrate to `9600` and chose the uart device node to `/dev/ttyS4`.

3. Install the SecureCRT tool on PC host, then chose correct serial port number and setup the baudrate to `9600`.

4. PC host sends the number `12345678`, and VIM4 sends the character serial send test.

5. The run result is as following, VIM4 recevie `12345678` from PC, and PC recevie `serial send test` from VIM4.

<img src="/android/images/vim4/serial_send_rec.png" width="75%" height="75%">

