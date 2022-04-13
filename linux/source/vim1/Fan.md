title: Cooling Fan
---

This guide shows you how to change the fan speed modes from within Ubuntu.

Here are two ways to set the fan:
1. Apply settings through the system, for desktop firmware.
2. Set up via the command line, using desktop and server firmware.

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
1. Open Fan Settings

Find the app called `Fan Settings` from within your application list.

![Fan Settings](/linux/images/vim1/gnome_application_fan.png)

Click to open it.

2. Select Fan Speed Mode

![Fan Speed](/linux/images/vim1/gnome_fan_setting.png)

Select the fan speed mode that you want, the default is `auto`.

3. Choose to either save the mode, or exit discarding changes.

![Save or Exit](/linux/images/vim1/gnome_fan_save.png)

Type your password.

![Fan PSK](/linux/images/vim1/gnome_fan_psk.png)

</div>
<div class="tab-pane fade" id="server" role="tabpanel" aria-labelledby="server-tab">

1. Set the fan mode:

```sh
$ fan.sh off
$ fan.sh on
$ fan.sh auto
```

2. Read the fan mode:

```sh
$ fan.sh mode
```

3. Set the fan speed:

```sh
$ fan.sh high
$ fan.sh mid
$ fan.sh low
```

4. Read the fan speed:

```sh
$ fan.sh level
```

5. Read CPU temperature:

```sh
$ fan.sh temp
```

</div>
</div>

