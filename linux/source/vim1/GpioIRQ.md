title: GPIO Interrupts
---

Access the GPIO interrupts from Ubuntu Terminal.

* Get GPIO number

You can use `gpio read` command to get the GPIO numbers:

```
$ sudo gpio readall
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

Take note of the GPIO pins that you need to use, and write-down the corresponding physical pin and GPIO values. 

Using `GPIOH6` as an example here, the related GPIO value is `433`, and the physical pin is `PIN15`.

* Export GPIO

```
$ echo 433 | sudo tee /sys/class/gpio/export
```

{% note info Note %}

Please use `gpio readall` to check the status of `GPIOH_6`, if it is not shown as a normal GPIO, you need to remove `uart3` from `overlays` in the `/boot/env.txt` file.

Check the [Device Tree Overlays](device_tree_overlay.html) for more details.

{% endnote %}


* Get demo source code

```sh
$ wget https://dl.khadas.com/development/code/docs_source/gpio_interrupts.c
```

* Compile the source code

```
$ gcc -o gpio_interrupts gpio_interrupts.c
```

* Check

```
$ sudo ./gpio_interrupts rising down
.
GPIO 433 interrupt occurred!
..........
```

Connect the physical pins `PIN20` and `PIN15` using a DuPont line to trigger the interrupt. The process is as follows:

```
$ sudo ./gpio_interrupts rising down
.
GPIO 433 interrupt occurred!
..
GPIO 433 interrupt occurred!
.
GPIO 433 interrupt occurred!
.
GPIO 433 interrupt occurred!
```

* Test Program

```
$ sudo ./gpio_interrupts <edge> [pull]
```

`<edge>` can be set to `rising` or `falling`, `[pull]` is an optional parameter that can be set to `up` or `down`.
