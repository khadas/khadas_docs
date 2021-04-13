title: How To Rotate Framebuffer
---

Under Ubuntu, FrameBuffer has two rotation methods.

{% note info framebuffer rotation value %}
1. The value is 0, which means the default value
2. The value is 1, which means that the rotation is 90 degrees
3. The value is 2, which means that the rotation is 180 degrees
4. The value is 3, which means that the rotation is 270 degrees
{% endnote %}

## Modify system node

{% note info Note %}
	The modification of the node will be restored after the system restarts
{% endnote %}

1. Root permissions are required to modify nodes, switch to root user

```sh
khadas@Khadas:~$ su
Password: 
root@Khadas:/home/khadas#
```

2. View the current configuration of the node

```sh
root@Khadas:/home/khadas# cat /sys/class/graphics/fbcon/rotate
0
```

3. Modify the configuration to rotate the framebuffer

Rotate 90 degrees,

```sh
root@Khadas:/home/khadas# echo 1 > /sys/class/graphics/fbcon/rotate
root@Khadas:/home/khadas# cat /sys/class/graphics/fbcon/rotate
1
```

4. Restore framebuffer to the default setting


```sh
root@Khadas:/home/khadas# echo 0 > /sys/class/graphics/fbcon/rotate
root@Khadas:/home/khadas# cat /sys/class/graphics/fbcon/rotate     
0
```

## Modify the configuration file

{% note info Note %}
	Modify the configuration file, it will still be effective after restart
{% endnote %}

1. View related configuration

```sh
khadas@Khadas:~$ cat /boot/env.txt | grep "fb_rotate"
fb_rotate=0
```

2. Change setting

Rotate 90 degrees,

```sh
khadas@Khadas:~$ sudo vim /boot/env.txt 
[sudo] password for khadas:
```

`fb_rotate=0` change to `fb_rotate=1`

3. Confirm that the modification is successful and restart

```sh
khadas@Khadas:~$ cat /boot/env.txt | grep "fb_rotate"
fb_rotate=1
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```

After restarting, you will see the framebuffer rotated 90 degrees

