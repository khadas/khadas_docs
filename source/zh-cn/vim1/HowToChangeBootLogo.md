title: 如何更换开机Logo
---

{% note info 对于最新的固件，在系统启动过程中会显示3个lgoo：%}

* U-boot阶段logo
* Kernel阶段logo
* Ubuntu阶段logo

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

U-boot阶段logo文件路径为：/usr/share/fenix/logo/logo.bmp。
Logo图片格式要求为BMP格式，分辨率为500x500，位深为24位。

例如默认的logo格式如下：

```bash
$ file /usr/share/fenix/logo/logo.bmp
/usr/share/fenix/logo/logo.bmp: PC bitmap, Windows 3.x format, 500 x 500 x 24, image size 750002, resolution 2834 x 2834 px/m, cbSize 750056, bits offset 54
```
**更换logo：**

只需用你的bmp logo图片替换原有的logo文件即可。

</div>
<div class="tab-pane fade show" id="kernel" role="tabpanel" aria-labelledby="kernel-tab">
TODO
</div>
<div class="tab-pane fade show" id="ubuntu" role="tabpanel" aria-labelledby="ubuntu-tab">
</div>
</div>
