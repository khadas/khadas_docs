title: OS Boot Priority
---

VIM4 is capable of booting from the following devices:

* eMMC
* SD Card
* SPI Flash

The OS image can be burned into the `eMMC`, `SD Card` or `SPI Flash`.

The default boot priority is:

1. SD Card
2. eMMC
3. SPI Flash

You can also swap the boot priority of the `eMMC` and `SPI Flash` via the [KBI(Khadas Boot Instructions)](./KbiGuidance.html), but the `SD Card` will always take the highest priority.

* Setting the priority of `eMMC` above `SPI Flash`

```
kvim4# kbi bootmode w emmc
```

Then the boot priority will become:

1. SD Card
2. eMMC
3. SPI Flash

* Setting the priority of `SPI Flash` above `eMMC`

```
kvim4# kbi bootmode w spi
```

Then the boot priority will become:

1. SD Card
2. SPI Flash
3. eMMC
