title: Building Android Source Code
---


## Preparations

- [x] [Establishing a Build Environment](http://source.android.com/source/initializing.html)
- [x] [Downloading the Android Source](/vim3/DownloadAndroidSourceCode.html)
- [x] [Install Toolchains for the Amlogic Platform](/vim3/InstallToolchains.html)


## Building

{% note info Note %}
	Before you start to build, make sure you have done all the `Preparations` listed above.
{% endnote %}

**Build U-Boot:**

```sh
$ cd PATH_YOUR_PROJECT
$ cd bootloader/uboot
$ ./mk TARGET
```
*Gernerate images in this step:*

* build/u-boot.bin: for onboard EMMC storage booting
* build/u-boot.bin.sd.bin: for external TF card booting


**Build Android:**

```sh
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make -jN otapackage
```

*Gernerate images in this step:*

* out/target/product/TARGET/update.img

{% note info Note %}
	* Replace `N` as the number you want when you run 'make -jN'
	* Replace `TARGET_LUNCH` to your lunch select.
	  * For VIM3, it's kvim3-userdebug.
	  * For VIM3L, it's kvim3l-userdebug.
	* `TARGET` should be kvim3 or kvim3l

{% endnote %}

**Build Linux kernel:**

When you build the Android Kernel (above), the Linux Kernel will also be built simultaneously.

In some cases, you might want to build the Linux Kernel separately. You can run this script below to do that:

```sh
$ make bootimage
```

## See Also
* [Upgrade Via an USB Cable](/vim3/UpgradeViaUSBCable.html)
* [Upgrade Via a Burnning TF Card](/vim3/UpgradeViaTFBurningCard.html)
