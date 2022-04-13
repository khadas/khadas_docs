title: Setup HDMI Resolution
---

{% note info %}

**VIM1/VIM2/VIM3/VIM3L: Only for Linux 4.9 image, mainline kernel image can use a more common way!**

{% endnote %}

Tere are 2 ways to set the HDMI resolution:

* Setup via configuration file
* Setup via desktop application (**Only for desktop image**)


<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="file-tab" data-toggle="tab" href="#file" role="tab" aria-controls="file" aria-selected="true">Configuration File</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="app-tab" data-toggle="tab" href="#app" role="tab" aria-controls="app" aria-selected="false">Application (Only for Desktop)</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="file" role="tabpanel" aria-labelledby="file-tab">

Edit file `/boot/env.txt` to setup the resolution. 

* Set `hdmi_autodetect=no`
* Set `hdmi` node, e.g. `hdmi=1080p60hz`
* Save the file

Reboot to take effect.

</div>
<div class="tab-pane fade show" id="app" role="tabpanel" aria-labelledby="app-tab">

* Find `HDMI Resolution` application in the list of system applications.

![gnome-hdmi-application](/linux/images/vim1/gnome-hdmi-application.png)

* Click to open it.

* Select resolution.

![gnome-hdmi-setting](/linux/images/vim1/gnome-hdmi-setting.png)

Choose a resolution you want, then click `OK`,

![gnome-hdmi-save](/linux/images/vim1/gnome-hdmi-save.png)

The system will automatically log out and the resolution setting will take effect.
