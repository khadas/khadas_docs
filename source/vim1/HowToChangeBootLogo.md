title: How To Change the Boot Logo
---

{% note info There are 3 logos will display during the system booup for latest ubuntu image: %}

* U-boot stage logo
* Kernel stage logo
* Ubuntu stage logo

{% endnote %}

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="uboot-tab" data-toggle="tab" href="#uboot" role="tab" aria-controls="uboot" aria-selected="true">U-boot Logo</a>
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

U-boot stage logo is in file `/usr/share/fenix/logo/logo.bmp`.
The image format is BMP with a resolution of `500x500px` and the bit-depth of `24 bits`.

For example, the default logo image format is below:

```bash
$ file /usr/share/fenix/logo/logo.bmp
/usr/share/fenix/logo/logo.bmp: PC bitmap, Windows 3.x format, 500 x 500 x 24, image size 750002, resolution 2834 x 2834 px/m, cbSize 750056, bits offset 54
```

**Change the default logo:**

You can use your own bmp logo image to replace the default one to change the default logo.

</div>
<div class="tab-pane fade show" id="kernel" role="tabpanel" aria-labelledby="kernel-tab">
TODO
</div>
<div class="tab-pane fade show" id="ubuntu" role="tabpanel" aria-labelledby="ubuntu-tab">
TODO
</div>
</div>
