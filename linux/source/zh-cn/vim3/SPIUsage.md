title: SPI
---

这篇文档主要介绍如何在Ubuntu下使用SPI

## 使能SPI

默认SPI是失能的。如果需要使用SPI，可以通过overlays功能使能。

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ sudo vim /boot/env.txt</pre>

修改overlays部分，移除pwm_f和uart3， 打开SPI。

```sh
overlays=uart3 pwm_f i2c3 os08a10 --> overlays=i2c3 os08a10 spi1
```

Overlays文档请参考 --> [如何使用Device Tree Overlay](./DeviceTreeOverlay.html)

重启，SPI就会使能了。

## 连线

```sh
SPI
Sensor MOSI <--> SPIB_MISO
Sensor MISO <--> SPIB_MOSI
Sensor CS   <--> SPIB_SS
Sensor CLK  <--> SPIB_SCLK
```

## 简单测试

SPI默认配置一个回环测试设备。

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ ls /dev/spidev1.1
<span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/spidev1.1</b></font></span></pre>


1. 获取测试代码

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ wget https://raw.githubusercontent.com/yan-wyb/source/master/c%26c%2B%2B/embedded/app/spi/spi_test/spidev_test.c</pre>

2. 编译测试代码

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ gcc -o spidev_test spidev_test.c</pre>

3. 短接PIN35和PIN37

短接MISO和MOSI，形成回环，自发自收

4. 测试

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ cat ./spi_in.txt
Amazing Khadas!
<font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$
<font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ ./spidev_test -i spi_in.txt -o ./spi_out.txt
spi mode: 0x0
bits per word: 8
max speed: 500000 Hz (500 KHz)
<font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ cat ./spi_out.txt
Amazing Khadas!</pre>
