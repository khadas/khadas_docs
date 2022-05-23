title: 自动登录
---

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="desktop-tab" data-toggle="tab" href="#desktop" role="tab" aria-controls="desktop" aria-selected="true">桌面系统</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="server-tab" data-toggle="tab" href="#server" role="tab" aria-controls="server" aria-selected="false">Server （无桌面）</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="desktop" role="tabpanel" aria-labelledby="desktop-tab">



编辑文件`/usr/share/lightdm/lightdm.conf.d/50-greeter-wrapper.conf`增加如下配置：

```bash
[SeatDefaults]
greeter-session=lightdm-gtk-greeter
autologin-user=khadas
```

</div>
<div class="tab-pane fade show" id="server" role="tabpanel" aria-labelledby="server-tab">

对于tty1-tty6

```bash
khadas@Khadas:~$ sudo sed -i "s/ExecStart=.*/ExecStart=-\/sbin\/agetty --noclear --autologin root \%I \$TERM/g" /lib/systemd/system/getty@.service
```

</div>
</div>

{% note info 重启系统生效。 %}

{% endnote %}
