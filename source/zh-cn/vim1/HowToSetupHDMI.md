title: 如何设置HDMI分辨率
---

{% note info 仅适用与4.9内核的固件，对于主线内核的固件可以使用更加通用的方法！ %}

{% endnote %}

有两种方式可以设置HDMI分辨率：

* 通过配置文件
* 通过桌面应用（仅用于桌面系统）

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="file-tab" data-toggle="tab" href="#file" role="tab" aria-controls="file" aria-selected="true">配置文件</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="app-tab" data-toggle="tab" href="#app" role="tab" aria-controls="app" aria-selected="false">桌面应用（仅用于桌面系统）</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="file" role="tabpanel" aria-labelledby="file-tab">


编辑文件`/boot/env.txt`来设置HDMI分辨率。

* 设置`hdmi_autodetect=no`
* 修改`hdmi`节点来设置分辨率，如：`hdmi=1080p60hz`
* 保存文件

重启系统生效。

</div>
<div class="tab-pane fade show" id="app" role="tabpanel" aria-labelledby="app-tab">

* 在系统应用列表中找到`HDMI Resolution`应用

![gnome-HDMI-application](/images/vim1/gnome-HDMI-application.png)

* 打开这个应用

![gnome-HDMI-setting](/images/vim1/gnome-HDMI-setting.png)

选择一个你需要的分辨率，然后点击`OK`。

![gnome-HDMI-save](/images/vim1/gnome-HDMI-save.png)

点击`Yes`后系统会自动注销，分辨率修改生效。

</div>
</div>
