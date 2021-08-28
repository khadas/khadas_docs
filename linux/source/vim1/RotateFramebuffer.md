title: Rotate Framebuffer Console
---

You can rotate the framebuffer console in two ways:

* Via System Node
* Via Configuration File

{% note info framebuffer console rotation value: %}

* 0 - default value (landscape mode)
* 1 - rotate 90 degrees
* 2 - rotate 180 degrees
* 3 - rotate 270 degrees
{% endnote %}

## Via System Node

* Root permissions are required to modify nodes, switch to root user

```sh
khadas@Khadas:~$ su
Password: 
root@Khadas:/home/khadas#
```

* Check the current configuration of the node

```sh
root@Khadas:/home/khadas# cat /sys/class/graphics/fbcon/rotate
0
```

* Modify the configuration to rotate the framebuffer

Rotate 90 degrees,

```sh
root@Khadas:/home/khadas# echo 1 > /sys/class/graphics/fbcon/rotate
root@Khadas:/home/khadas# cat /sys/class/graphics/fbcon/rotate
1
```

* Restore framebuffer console to the default setting

```sh
root@Khadas:/home/khadas# echo 0 > /sys/class/graphics/fbcon/rotate
root@Khadas:/home/khadas# cat /sys/class/graphics/fbcon/rotate     
0
```

{% note info Note %}
The modification will be lost after a power cycle, if you want to save it you can check the other way below.
{% endnote %}

## Via Configuration File

Follow this Guide to setup --> [Framebuffer Rotate](SystemConfigFile#Framebuffer-Rotate)

