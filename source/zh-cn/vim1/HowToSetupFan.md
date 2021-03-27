title: 如何设置风扇
---

这篇文档介绍如何在Ubuntu下设置风扇。

{% note info 注意 %}

Ubuntu版本必须为`V20190319`或更新版本

对于Ubuntu `V20190319`风扇默认是使能的。

{% endnote %}

风扇有5种工作模式：
* `off`: 风扇关闭。
* `low`: 风扇工作在低速模式。
* `mid`: 风扇工作在中等速度模式。
* `high`: 风扇工作在高速模式。
* `auto`: 风扇工作在自动调节速度模式，根据温度自动调节速度，这个是默认的工作模式。

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="file-tab" data-toggle="tab" href="#file" role="tab" aria-controls="file" aria-selected="true">通过配置文件设置</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="gui-tab" data-toggle="tab" href="#gui" role="tab" aria-controls="gui" aria-selected="false">风扇应用设置（桌面系统）</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="file" role="tabpanel" aria-labelledby="file-tab">

你可以通过编辑文件`/boot/env.txt`来设置风扇的工作模式。

* 设置风扇低速模式

  * 编辑`/boot/env.txt`设置`fan_mode=low`。

* 设置风扇中等速度模式

  * 编辑`/boot/env.txt`设置`fan_mode=mid`。

* 设置风扇高速模式

  * 编辑`/boot/env.txt`设置`fan_mode=high`。

* 设置风扇自动调节速度模式

  * 编辑`/boot/env.txt`设置`fan_mode=auto`。

* 关闭风扇

  * 编辑`/boot/env.txt`设置`fan_mode=off`。

编辑完后记得保存文件并重启板子。

```bash
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```
</div>

<div class="tab-pane fade show" id="gui" role="tabpanel" aria-labelledby="gui-tab">

* 打开风扇应用

你可以在系统的应用列表中找到`FAN Setting`

![FAN Setting](/images/vim1/gnome_application_fan.png)

打开这个应用。

* 选择风扇工作模式

![Fan Setting](/images/vim1/gnome_fan_setting.png)

可以选择你需要的工作模式,默认是`auto`.

* Step3: 保存

![Fan save](/images/vim1/gnome_fan_save.png)

可以将你的选择保存为默认选项。

![Fan PSK](/images/vim1/gnome_fan_psk.png)

输入`sudo`密码。

</div>
</div>
