title: 如何测试GPIO中断
---

# 却换root用户

只有root用户可以控制GPIO,在测试之前需要先切换到root用户

```shell
$ khadas@Khadas:~$ su
Password: 
root@Khadas:/home/khadas#
```

# 设置GPIO引脚

* 确认你需要使用的引脚,以VIM3为例

```shell
root@Khadas:/home/khadas# gpio readall
 +------+-----+----------+------+---+----+---- Model  Khadas VIM3 --+----+---+------+----------+-----+------+
 | GPIO | wPi |   Name   | Mode | V | DS | PU/PD | Physical | PU/PD | DS | V | Mode |   Name   | wPi | GPIO |
 +------+-----+----------+------+---+----+-------+----++----+-------+----+---+------+----------+-----+------+
 |      |     |       5V |      |   |    |       |  1 || 21 |       |    |   |      | GND      |     |      |
 |      |     |       5V |      |   |    |       |  2 || 22 | P/U   |    | 1 | ALT1 | PIN.A15  | 6   |  475 |
 |      |     |   USB_DM |      |   |    |       |  3 || 23 | P/U   |    | 1 | ALT1 | PIN.A14  | 7   |  474 |
 |      |     |   USB_DP |      |   |    |       |  4 || 24 |       |    |   |      | GND      |     |      |
 |      |     |      GND |      |   |    |       |  5 || 25 | P/U   |    | 1 | ALT0 | PIN.AO2  | 8   |  498 |
 |      |     |   MCU3V3 |      |   |    |       |  6 || 26 | P/U   |    | 1 | ALT0 | PIN.AO3  | 9   |  499 |
 |      |     |  MCUNRST |      |   |    |       |  7 || 27 |       |    |   |      | 3V3      |     |      |
 |      |     |  MCUSWIM |      |   |    |       |  8 || 28 |       |    |   |      | GND      |     |      |
 |      |     |      GND |      |   |    |       |  9 || 29 | P/D   |    | 0 | ALT0 | PIN.A1   | 10  |  461 |
 |      |     |     ADC0 |      |   |    |       | 10 || 30 | P/D   |    | 0 | ALT0 | PIN.A0   | 11  |  460 |
 |      |     |      1V8 |      |   |    |       | 11 || 31 | P/D   |    | 0 | ALT0 | PIN.A3   | 12  |  463 |
 |      |     |     ADC1 |      |   |    |       | 12 || 32 | P/D   |    | 0 | ALT0 | PIN.A2   | 13  |  462 |
 |  506 |   1 |   PIN.H5 | ALT3 | 0 |    |   P/U | 13 || 33 | P/D   |    | 0 | ALT1 | PIN.A4   | 14  |  464 |
 |      |     |     GND3 |      |   |    |       | 14 || 34 |       |    |   |      | GND      |     |      |
 |  433 |   2 |   PIN.H6 |   IN | 0 |    |   P/D | 15 || 35 | P/D   |    | 0 | ALT3 | PWM-F    | 15  |  432 |
 |  434 |   3 |   PIN.H7 |   IN | 0 |    |   P/D | 16 || 36 |       |    |   |      | RTC      |     |      |
 |      |     |      GND |      |   |    |       | 17 || 37 | P/D   |    | 0 | IN   | PIN.H4   | 16  |  431 |
 |  497 |   4 |  PIN.AO1 | ALT0 | 1 |    |   P/U | 18 || 38 |       |    |   |      | MCU-FA1  |     |      |
 |  496 |   5 |  PIN.AO0 | ALT0 | 1 |    |   P/U | 19 || 39 | P/D   |    | 0 | IN   | PIN.Z15  | 17  |  426 |
 |      |     |      3V3 |      |   |    |       | 20 || 40 |       |    |   |      | GND      |     |      |
 +------+-----+----------+------+---+----+-------+----++----+-------+----+---+------+----------+-----+------+
```

选择你需要使用的GPIO,确认对应的物理引脚和GPIO值.这里以GPIOH6为例,则对应的GPIO值为433,物理引脚为第15脚.

* export GPIO

export你选中的GPIO,才能对GPIO进行操作,

```shell
root@Khadas:/home/khadas# echo 433 > /sys/class/gpio/export
```

# 编译GPIO测试程序

* 测试程序源码`gpio-irq.c`

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

* 编译源码

```shell
root@Khadas:/home/khadas# gcc -o gpio-irq gpio-irq.c
```
# 测试使用

* 运行程序

```shell
./gpio-irq 433 rising down
.
GPIO 433 interrupt occurred!
..........
```

通过杜邦线连接物理引脚的Pin20和pin15,触发中断.现象如下:

```shell
root@Khadas:/home/khadas# ./gpio-irq 433 rising down
.
GPIO 433 interrupt occurred!
..
GPIO 433 interrupt occurred!
.
GPIO 433 interrupt occurred!
.
GPIO 433 interrupt occurred!
```
* 测试程序说明

运行格式如下

```shell
root@Khadas:/home/khadas# ./gpio-irq <edge> [pull]
```

`<edge>`可设置为`rising`或者`failing`, [pull]为可选参数,设置为`up`或者`down`
