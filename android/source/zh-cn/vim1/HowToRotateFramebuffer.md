title: 旋转Framebuffer Console
---

在Ubuntu下有两种旋转方法可以旋转framebuffer console：

* 通过系统节点
* 通过配置文件

{% note info Framebuffer Console旋转值 %}

* 0 - 表示默认值（横屏）
* 1 - 表示旋转90度
* 2 - 表示旋转180度
* 3 - 表示旋转270度

{% endnote %}

## 通过系统节点

* 修改节点需要root权限，切换到root用户

```sh
khadas@Khadas:~$ su
Password: 
root@Khadas:/home/khadas#
```

* 查看节点目前的配置

```sh
root@Khadas:/home/khadas# cat /sys/class/graphics/fbcon/rotate
0
```

* 修改配置旋转framebuffer console

旋转90度：

```sh
root@Khadas:/home/khadas# echo 1 > /sys/class/graphics/fbcon/rotate
root@Khadas:/home/khadas# cat /sys/class/graphics/fbcon/rotate
1
```

* 恢复framebuffer console默认的设置


```sh
root@Khadas:/home/khadas# echo 0 > /sys/class/graphics/fbcon/rotate
root@Khadas:/home/khadas# cat /sys/class/graphics/fbcon/rotate     
0
```

{% note info 注意 %}
系统节点的修改会在系统重启以后被还原，如果想保存，请参考下面的方法。
{% endnote %}


## 通过配置文件

* 查看相关配置

```sh
khadas@Khadas:~$ cat /boot/env.txt | grep "fb_rotate"
fb_rotate=0
```

* 修改配置


旋转90度：

```sh
khadas@Khadas:~$ sudo vim /boot/env.txt 
[sudo] password for khadas:
```

`fb_rotate=0`修改为`fb_rotate=1`。

* 确认修改时候成功并重启

```sh
khadas@Khadas:~$ cat /boot/env.txt | grep "fb_rotate"
fb_rotate=1
khadas@Khadas:~$ sync
khadas@Khadas:~$ sudo reboot
```

重启以后就会看到framebuffer console旋转了90度。
