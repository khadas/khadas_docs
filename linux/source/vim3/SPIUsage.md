title: SPI
---

This document mainly introduces how to use SPI under Ubuntu.

## Enable SPI

The default SPI is disabled. If you need to use SPI, you can enable it through the overlays function.

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ sudo vim /boot/env.txt</pre>

Modify the overlays part, remove pwm_f and uart3, and open SPI.

```sh
overlays=uart3 pwm_f i2c3 os08a10 --> overlays=i2c3 os08a10 spi1
```

For Overlays documentation, please refer to --> [How to use Device Tree Overlay](./DeviceTreeOverlay.html)

Restart, SPI will be enabled.

## Connect

```sh
SPI
Sensor MOSI <--> SPIB_MISO
Sensor MISO <--> SPIB_MOSI
Sensor CS   <--> SPIB_SS
Sensor CLK  <--> SPIB_SCLK
```

## Simple test

SPI configures a loopback test device by default.

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ ls /dev/spidev1.1
<span style="background-color:#2E3436"><font color="#C4A000"><b>/dev/spidev1.1</b></font></span></pre>


1. Get test code

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ wget https://raw.githubusercontent.com/yan-wyb/source/master/c%26c%2B%2B/embedded/app/spi/spi_test/spidev_test.c</pre>

2. Compile test code

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ gcc -o spidev_test spidev_test.c</pre>

3. Short-circuit PIN35 and PIN37

Short-circuit MISO and MOSI to form a loop, spontaneously send and receive

4. Test

<pre><font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ cat ./spi_in.txt
Amazing Khadas!
<font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$
<font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ ./spidev_test -i spi_in.txt -o ./spi_out.txt
spi mode: 0x0
bits per word: 8
max speed: 500000 Hz (500 KHz)
<font color="#4E9A06"><b>khadas@Khadas</b></font>:<font color="#3465A4"><b>~</b></font>$ cat ./spi_out.txt
Amazing Khadas!</pre>
