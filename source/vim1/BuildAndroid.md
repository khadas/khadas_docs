title: Building Android
---


## Preperations

* [Establishing a Build Environment](http://source.android.com/source/initializing.html)
* [Downloading the Android Source](/vim1/DownloadAndroidSourceCode.html)
* [Install toolchains for Amlogic platform](/vim1/InstallToolchains.html)


## Building

{% note info Note %}

Before you start to build, make sure you have done all the `Preperations` listed above.

{% endnote %}

### Build U-Boot

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="6-tab" data-toggle="tab" href="#6" role="tab" aria-controls="6" aria-selected="true">Android 6.0 / Android 7.1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="9-tab" data-toggle="tab" href="#9" role="tab" aria-controls="9" aria-selected="false">Android Pie (9.0)</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="6" role="tabpanel" aria-labelledby="6-tab">

```bash
$ cd PATH_YOUR_PROJECT
$ cd uboot
$ make CROSS_COMPILE=aarch64-linux-gnu- kvim_defconfig
$ make CROSS_COMPILE=aarch64-linux-gnu-
```
{% note info Note %}

Gernerated images in this step:

* fip/u-boot.bin: for onboard eMMC storage booting
* fip/u-boot.bin.sd.bin: for external TF card booting

{% endnote %}

</div>

<div class="tab-pane fade show" id="9" role="tabpanel" aria-labelledby="9-tab">

```bash
$ cd PATH_YOUR_PROJECT
$ cd bootloader/uboot
$ ./mk kvim
```

{% note info Note %}

Gernerated images in this step:

* build/u-boot.bin: for onboard eMMC storage booting
* build/u-boot.bin.sd.bin: for external TF card booting

{% endnote %}

</div>
</div>

### Build Android

```bash
$ cd PATH_YOUR_PROJECT
$ source build/envsetup.sh
$ lunch TARGET_LUNCH
$ make -jN otapackage
```

{% note info Note %}

* Replace 'N' as the number you want when you run 'make -jN'
* Replace 'TARGET_LUNCH' to your lunch select.
  For Android Marshmallow(6.0), it's kvim-userdebug-32.
  For Android Nougat(7.1), it's kvim-userdebug-64.
  For Android Pie(9.0), it's kvim-userdebug.

Gernerated images in this step:

* out/target/product/kvim/update.img

{% endnote %}


### Build Linux kernel

When you build Android aboved, will build Linux kernel at the same time.

In some case, you might want to build Linux kernel separately, you can run the script below to do that:

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="android6-tab" data-toggle="tab" href="#android6" role="tab" aria-controls="android6" aria-selected="true">Android 6.0 / Android 7.1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="android9-tab" data-toggle="tab" href="#android9" role="tab" aria-controls="android9" aria-selected="false">Android 9.0</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="android6" role="tabpanel" aria-labelledby="android6-tab">

```bash
$ source device/khadas/kvim/mkern.sh
```

</div>

<div class="tab-pane fade show" id="android9" role="tabpanel" aria-labelledby="android9-tab">

```bash
$ make bootimage
```

</div>
</div>

## See Also
* [Upgrade Via an USB Cable](/vim1/UpgradeViaUSBCable.html)
* [Upgrade Via a Burnning TF Card](/vim1/UpgradeViaTFBurningCard.html)
