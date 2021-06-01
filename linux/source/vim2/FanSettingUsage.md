title: How To Setup the Cooling Fan
---

This guide is about how to setup the cooling fan in Ubuntu.

{% note info Note %}
	
Ubuntu version must be `V20190319` or newer.

From Ubuntu V20190319, the cooling fan is enabled by default.

{% endnote %}

The cooling fan has 5 working modes:

* `off` : Cooling fan is disabled.
* `low` : Cooling fan is working at low speed mode.
* `mid` : Coolinn fan is working at middle speed mode.
* `high`: Cooling fan is working at high speed mode.
* `auto`: Cooling fan is working at auto speed mode. By default, the fan speed is determined by CPU temperature.

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="file-tab" data-toggle="tab" href="#file" role="tab" aria-controls="file" aria-selected="true">Setup via Configuration File</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="gui-tab" data-toggle="tab" href="#gui" role="tab" aria-controls="gui" aria-selected="false">Setuo Via Fan Application (Desktop)</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="file" role="tabpanel" aria-labelledby="file-tab">

You can edit file `/boot/env.txt` to setup the FAN mode, the default mode is `auto`.

* Set cooling fan to `low` speed mode:

  * Edit file `/boot/env.txt` and set `fan_mode=low`.

* Set cooling fan to `mid` speed mode:

  * Edit file `/boot/env.txt` and set `fan_mode=mid`.

* Set cooling fan to `high` speed mode:

  * Edit file `/boot/env.txt` and set `fan_mode=high`.

* Set cooling fan to `auto` speed mode:

  * Edit file `/boot/env.txt` and set `fan_mode=auto`.

* Disable cooling fan:

  * Edit file `/boot/env.txt` and set `fan_mode=off`.

After edit the file, you need to save the file and reboot the board.

```bash
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```
</div>

<div class="tab-pane fade show" id="gui" role="tabpanel" aria-labelledby="gui-tab">

* Open Application 

You can find the application which name `FAN Setting` in your application list.

![FAN Setting](/images/vim1/gnome_application_fan.png)

Click to open it.

* Select mode you want

![Fan Setting](/images/vim1/gnome_fan_setting.png)

You can choose the mode you want, the default is `auto`.

* Save the Mode or not

![Fan save](/images/vim1/gnome_fan_save.png)

You can choose to save it or not.

![Fan PSK](/images/vim1/gnome_fan_psk.png)

Type your `sudo` password.

</div>
</div>
