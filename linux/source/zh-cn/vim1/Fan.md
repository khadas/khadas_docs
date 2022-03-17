title: 如何设置风扇
---

这篇文档介绍如何在Ubuntu下**设置风扇**。

这里有两种方法设置风扇：
1. 通过系统应用设置，适用于桌面固件。
2. 通过命令行设置，使用桌面以及Server固件。

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="desktop-tab" data-toggle="tab" href="#desktop" role="tab" aria-controls="desktop" aria-selected="true">Desktop</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="server-tab" data-toggle="tab" href="#server" role="tab" aria-controls="server" aria-selected="false">Server</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="desktop" role="tabpanel" aria-labelledby="desktop-tab">

1. 打开风扇应用

你可以在系统的应用列表中找到`FAN Setting`。

![FAN Setting](/linux/images/vim1/gnome_application_fan.png)

打开这个应用。

2. 选择风扇工作模式

![Fan Setting](/linux/images/vim1/gnome_fan_setting.png)

可以选择你需要的工作模式,默认是`auto`。

4. 可以将你的选择保存为默认选项。

![Fan save](/linux/images/vim1/gnome_fan_save.png)

输入密码。

![Fan PSK](/linux/images/vim1/gnome_fan_psk.png)


</div>
<div class="tab-pane fade" id="server" role="tabpanel" aria-labelledby="server-tab">

1. 设置风扇模式

```sh
$ fan.sh off
$ fan.sh on
$ fan.sh auto
```

2. 读取风扇模式

```sh
$ fan.sh mode
```

3. 设置风扇转速

```sh
$ fan.sh high
$ fan.sh mid
$ fan.sh low
```

4. 读取风扇转速等级

```sh
$ fan.sh level
```

5. 读取CPU温度

```sh
$ fan.sh temp
```

</div>
</div>

