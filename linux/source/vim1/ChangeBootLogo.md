title: Change Boot Logo
---

{% note info Our official Ubuntu image will display 3 logos during system boot: %}

* U-Boot logo
* Kernel logo
* Ubuntu logo

{% endnote %}

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="uboot-tab" data-toggle="tab" href="#uboot" role="tab" aria-controls="uboot" aria-selected="true">U-Boot Logo</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="kernel-tab" data-toggle="tab" href="#kernel" role="tab" aria-controls="kernel" aria-selected="false">Kernel Logo</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="ubuntu-tab" data-toggle="tab" href="#ubuntu" role="tab" aria-controls="ubuntu" aria-selected="false">Ubuntu Logo</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="uboot" role="tabpanel" aria-labelledby="uboot-tab">

The U-Boot logo is located at `/usr/share/fenix/logo/logo.bmp`.
The image format is BMP with a resolution of `500x500px`, and bit-depth of `24 bits`.

You can use Terminal to check the default logo image format:

```bash
$ file /usr/share/fenix/logo/logo.bmp
/usr/share/fenix/logo/logo.bmp: PC bitmap, Windows 3.x format, 500 x 500 x 24, image size 750002, resolution 2834 x 2834 px/m, cbSize 750056, bits offset 54
```

**Changing the default logo:**

You can replace the default logo with your own BMP image.

{% note info Note %}

If you have built the image with [Fenix](https://github.com/khadas/fenix), you can replace the file `archives/logo/bmp/logo.bmp` to change the logo.

{% endnote %}

</div>
<div class="tab-pane fade show" id="kernel" role="tabpanel" aria-labelledby="kernel-tab">

1. Use the `netpbm` tool to convert png images to ppm images.

```sh
$ pngtopnm linux_logo.png > linux_logo.pnm
$ pnmquant 224 linux_logo.pnm > linux_logo_clut224.pnm
$ pnmtoplainpnm linux_logo_clut224.pnm > logo_linux_clut224.ppm
```

2. Put the converted ppm file into the `drivers/video/logo/` directory of the kernel, and replace the `logo_linux_clut224.ppm` file.

3. Re-compile the kernel, and the logo will be replaced with a new picture.

</div>
<div class="tab-pane fade show" id="ubuntu" role="tabpanel" aria-labelledby="ubuntu-tab">

The Ubuntu logo file is located at `/usr/share/fenix/logo/logo.png`, replace the .png file to change the Ubuntu boot logo.

{% note info Note %}

If you've built the image with [Fenix](https://github.com/khadas/fenix), replace the file `archives/logo/png/logo.png` to change the logo.

{% endnote %}

</div>
</div>
