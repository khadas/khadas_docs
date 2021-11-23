title: OS Boot Priority
---

VIM4 is able boot from many devices listed below:

* eMMC
* SD Card
* SPI Flash

The OS can be flashed into `eMMC`, `SD Card` or `SPI Flash`.

The default boot seqeqe is:

1. SD Card
2. eMMC
3. SPI Flash

You can also change the boot seqeqe of `eMMC` and `SPI Flash` via [KBI](), but `SD Card` will always has the highest priority.

* Set `eMMC` has higher priority then `SPI Flash`

```
kvim4# kbi ...
```

Then the boot seqeqe will be:

1. SD Card
2. eMMC
3. SPI Flash

* Set `SPI Flash` has higher priority then `eMMC`

```
kvim4# kbi ...
```

Then the boot seqeqe will be:

1. SD Card
2. SPI Flash
3. eMMC
