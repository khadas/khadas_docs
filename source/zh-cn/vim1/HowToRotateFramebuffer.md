title: 如何旋转Framebuffer
---

在Ubuntu下，FrameBuffer有两种旋转方法。

## framebuffer旋转值

1. 值为0，表示默认值
2. 值为1，表示旋转90度
3. 值为2，表示旋转180度
4. 值为3，表示旋转270度

## 修改系统节点

{% note info 注意 %}
	节点的修改会在系统重启以后被还原
{% endnote %}

1. 修改节点需要root权限，切换到root用户

```sh
khadas@Khadas:~$ su
Password: 
root@Khadas:/home/khadas#
```

2. 查看节点目前的配置

```sh
root@Khadas:/home/khadas# cat /sys/class/graphics/fbcon/rotate
0
```

3. 修改配置旋转framebuffer

旋转90度,

```sh
root@Khadas:/home/khadas# echo 1 > /sys/class/graphics/fbcon/rotate
root@Khadas:/home/khadas# cat /sys/class/graphics/fbcon/rotate
1
```

4. 恢复framebuffer成默认的设置


```sh
root@Khadas:/home/khadas# echo 0 > /sys/class/graphics/fbcon/rotate
root@Khadas:/home/khadas# cat /sys/class/graphics/fbcon/rotate     
0
```

## 修改配置文件

{% note info 注意 %}
	修改配置文件，重启以后仍然有效
{% endnote %}

1. 查看相关配置

```sh
khadas@Khadas:~$ cat /boot/env.txt | grep "fb_rotate"
fb_rotate=0
```

2. 修改配置


旋转90度,

```sh
khadas@Khadas:~$ sudo vim /boot/env.txt 
[sudo] password for khadas:
```

`fb_rotate=0`修改为`fb_rotate=1`

3. 确认修改时候成功并重启

```sh
khadas@Khadas:~$ cat /boot/env.txt | grep "fb_rotate"
fb_rotate=1
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```

重启以后就会看到framebuffer旋转了90度

