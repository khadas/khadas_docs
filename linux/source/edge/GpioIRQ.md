title: How To Test GPIO IRQ
---

## Switch to root user

Only root user can control GPIO, you need to switch to root user before testing.

```shell
$ khadas@Khadas:~$ su
Password: 
root@Khadas:/home/khadas#
```

## GPIO Pin Control Setting

* Confirm the pins you need to use, take VIM3 as an example:

```shell
root@Khadas:/home/khadas# gpio readall
 +------+-----+-------------------+------+---+----+--- Model  Khadas-Edge ---+----+---+------+----------------------------+-----+------+
 | GPIO | wPi |        Name       | Mode | V | DS | PU/PD | Physical | PU/PD | DS | V | Mode |            Name            | wPi | GPIO |
 +------+-----+-------------------+------+---+----+-------+----++----+-------+----+---+------+----------------------------+-----+------+
 |      |     |                5V |      |   |    |       |  1 || 21 |       |    |   |      | GND(0V)                    |     |      |
 |      |     |                5V |      |   |    |       |  2 || 22 |       |    | 1 | IN   | SPI3_RXD/I2C0_SCK/GPIO1_C0 | 4   |  48  |
 |      |     |          HOST1_DM |      |   |    |       |  3 || 23 |       |    | 1 | IN   | SPI3_TXD/I2C0_SDA/GPIO1_B7 | 5   |  47  |
 |      |     |          HOST1_DP |      |   |    |       |  4 || 24 |       |    |   |      | GND(0V)                    |     |      |
 |      |     |           GND(0V) |      |   |    |       |  5 || 25 |       |    | 1 | IN   | I2C2_SCL/GPIO2_A1          | 6   |  65  |
 |      |     |            MCU_TX |      |   |    |       |  6 || 26 |       |    | 1 | IN   | I2C2_SDA/GPIO2_A0          | 7   |  64  |
 |      |     |          MCU_NRST |      |   |    |       |  7 || 27 |       |    |   |      | 3.3V                       |     |      |
 |      |     |          MCU_SWIM |      |   |    |       |  8 || 28 |       |    |   |      | GND(0V)                    |     |      |
 |      |     |           GND(0V) |      |   |    |       |  9 || 29 |       |    | 0 | ALT0 | I2S0_SCLK/GPIO3_D0         | 8   |  120 |
 |      |     |           ADC_IN2 |      |   |    |       | 10 || 30 |       |    | 0 | ALT0 | I2S_CLK/GPIO4_A0           | 9   |  128 |
 |      |     |              1.8V |      |   |    |       | 11 || 31 |       |    | 0 | ALT0 | I2S0_SDO0/GPIO3_D7         | 10  |  127 |
 |      |     |           ADC_IN3 |      |   |    |       | 12 || 32 |       |    | 0 | ALT0 | 2S0_LRCK_TX/GPIO3_D2       | 11  |  122 |
 |  112 |   1 |    SPDIF/GPIO3_C0 |   IN | 1 |    |       | 13 || 33 |       |    | 0 | ALT0 | I2S0_SDI0/GPIO3_D3         | 12  |  123 |
 |      |     |            GND(0V |      |   |    |       | 14 || 34 |       |    |   |      | GND(0V)                    |     |      |
 |   50 |   2 |  SPI3_CS/GPIO1_C2 |   IN | 1 |    |       | 15 || 35 |       |    | 0 | ALT0 | I2S0_SDI3SDO1/GPIO3_D6     | 13  |  126 |
 |   49 |   3 | SPI3_CLK/GPIO1_C1 |   IN | 0 |    |       | 16 || 36 |       |    | 0 | ALT0 | 2S0_SDI2SDO2/GPIO3_D5      | 14  |  125 |
 |      |     |           GND(0V) |      |   |    |       | 17 || 37 |       |    | 0 | ALT0 | I2S0_SDI1SDO3/GPIO3_D4     | 15  |  124 |
 |      |     |           UART_RX |      |   |    |       | 18 || 38 |       |    | 0 | ALT0 | I2S0_LRCK_RX/GPIO3_D1      | 16  |  121 |
 |      |     |           UART_TX |      |   |    |       | 19 || 39 |       |    |   |      | MCU_PA1                    |     |      |
 |      |     |              3.3V |      |   |    |       | 20 || 40 |       |    |   |      | GND(0V)                    |     |      |
 +------+-----+-------------------+------+---+----+-------+----++----+-------+----+---+------+----------------------------+-----+------+
```

Select the GPIO you need to use, and confirm the corresponding physical pin and GPIO value. Taking GPIOH6 as an example here, the corresponding GPIO value is 112, and the physical pin is pin 13.

* export GPIO

Export the selected GPIO to operate the GPIO,

```shell
root@Khadas:/home/khadas# echo 112 > /sys/class/gpio/export
```

## Compile GPIO test program

* source code for `gpio-irq.c`

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <errno.h>
#include <poll.h>

#define	SYSFS_GPIO_DIR	"/sys/class/gpio"
#define	MAX_BUF		255

int gpio_export(unsigned int gpio)
{
	int fd, len;
	char buf[MAX_BUF];

	fd = open(SYSFS_GPIO_DIR "/export", O_WRONLY);

	if (fd < 0) {
		fprintf(stderr, "Can't export GPIO %d pin: %s\n", gpio, strerror(errno));
		return fd;
	}

	len = snprintf(buf, sizeof(buf), "%d", gpio);
	write(fd, buf, len);
	close(fd);

	return 0;
}

int gpio_unexport(unsigned int gpio)
{
	int fd, len;
	char buf[MAX_BUF];

	fd = open(SYSFS_GPIO_DIR "/unexport", O_WRONLY);

	if (fd < 0) {
		fprintf(stderr, "Can't unexport GPIO %d pin: %s\n", gpio, strerror(errno));
		return fd;
	}

	len = snprintf(buf, sizeof(buf), "%d", gpio);
	write(fd, buf, len);
	close(fd);

	return 0;
}

int gpio_set_edge(unsigned int gpio, char *edge)
{
	int fd, len;
	char buf[MAX_BUF];

	len = snprintf(buf, sizeof(buf), SYSFS_GPIO_DIR "/gpio%d/edge", gpio);

	fd = open(buf, O_WRONLY);

	if (fd < 0) {
		fprintf(stderr, "Can't set GPIO %d pin edge: %s\n", gpio, strerror(errno));
		return fd;
	}

	write(fd, edge, strlen(edge)+1);
	close(fd);

	return 0;
}

int gpio_set_pull(unsigned int gpio, char *pull)
{
	int fd, len;
	char buf[MAX_BUF];

	len = snprintf(buf, sizeof(buf), SYSFS_GPIO_DIR "/gpio%d/pull", gpio);

	fd = open(buf, O_WRONLY);

	if (fd < 0) {
		fprintf(stderr, "Can't set GPIO %d pin pull: %s\n", gpio, strerror(errno));
		return fd;
	}

	write(fd, pull, strlen(pull)+1);
	close(fd);

	return 0;
}

int main(int argc, char *argv[])
{
	struct pollfd fdset[2];
	int fd, ret, gpio;
	char buf[MAX_BUF];

	if (argc < 3 || argc > 4)	{
		fprintf(stdout, "usage : sudo sysfs_irq_test <gpio> <edge> [pull]\n");
		fflush(stdout);
		return	-1;
	}

	gpio = atoi(argv[1]);
	if (gpio_export(gpio))	{
		fprintf(stdout, "error : export %d\n", gpio);
		fflush(stdout);
		return	-1;
	}

	if (gpio_set_edge(gpio, argv[2])) {
		fprintf(stdout, "error : edge %s\n", argv[2]);
		fflush(stdout);
		return	-1;
	}

	if (argv[3] && gpio_set_pull(gpio, argv[3])) {
		fprintf(stdout, "error : pull %s\n", argv[3]);
		fflush(stdout);
		return	-1;
	}

	snprintf(buf, sizeof(buf), SYSFS_GPIO_DIR "/gpio%d/value", gpio);
	fd = open(buf, O_RDWR);
	if (fd < 0)
		goto out;

	while (1) {
		memset(fdset, 0, sizeof(fdset));
		fdset[0].fd = STDIN_FILENO;
		fdset[0].events = POLLIN;
		fdset[1].fd = fd;
		fdset[1].events = POLLPRI;
		ret = poll(fdset, 2, 3*1000);

		if (ret < 0) {
			perror("poll");
			break;
		}

		fprintf(stderr, ".");

		if (fdset[1].revents & POLLPRI) {
			char c;
			(void)read (fd, &c, 1) ;
			lseek (fd, 0, SEEK_SET) ;
			fprintf(stderr, "\nGPIO %d interrupt occurred!\n", gpio);
		}

		if (fdset[0].revents & POLLIN)
			break;

		fflush(stdout);
	}

	close(fd);
out:
	if (gpio_unexport(gpio))	{
		fprintf(stdout, "error : unexport %d\n", gpio);
		fflush(stdout);
	}

	return 0;
 }

```

* 

```shell
root@Khadas:/home/khadas# gcc -o gpio-irq gpio-irq.c
```
## Compile the source code

* run

```shell
./gpio-irq 112 rising down
.
GPIO 112 interrupt occurred!
..........
```

Connect the Pin40 and pin13 of the physical pin through the DuPont line to trigger the interrupt. The phenomenon is as follows:

```shell
root@Khadas:/home/khadas# ./gpio-irq 112 rising
.
GPIO 112 interrupt occurred!
..
GPIO 112 interrupt occurred!
.
GPIO 112 interrupt occurred!
.
GPIO 112 interrupt occurred!
```
* Test procedure description

The running format is as follows:

```shell
root@Khadas:/home/khadas# ./gpio-irq <edge>
```

`<edge>` can be set to `rising` or `failing`.
