title: Ubuntu系统配置文件使用说明
---

这边文档将介绍如何使用Ubuntu系统的配置文件

{% note warn 配置文件中的所有功能不是对主线以及4.9都有效，请查看对应的功能介绍 %}
{% endnote %}

## 介绍

`env.txt`位于`/boot`目录下，是用于配置Ubuntu系统功能的环境配置文件，系统在启动时会读取这个文件，设置HDMI、风扇、CPU频率等。

修改这个文件，就可以改变这些功能的设置。

```sh
$ sudo vim /boot/env.txt
```

## 风扇设置

{% note info 仅适用与4.9内核的固件 %}

{% endnote %}

### 风扇工作模式

风扇有5种工作模式：
* `off`: 风扇关闭。
* `low`: 风扇工作在低速模式。
* `mid`: 风扇工作在中等速度模式。
* `high`: 风扇工作在高速模式。
* `auto`: 风扇工作在自动调节速度模式，根据温度自动调节速度，这个是默认的工作模式。

### 修改风扇设置

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



