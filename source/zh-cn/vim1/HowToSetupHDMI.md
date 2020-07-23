title: 如何设置HDMI分辨率
---

## 通过配置文件修改

### 打开配置文件

* 切换到`root`用户,普通用户没有足够的权限

```shell
khadas@Khadas:~$ su
Password:
root@Khadas:/home/khadas#
```

* 打开配置文件

```shell
root@Khadas:/home/khadas# vim /boot/env.txt
```

### 修改配置文件

* 设置自动识别为`no`

```shell
hdmi_autodetect=yes --> hdmi_autodetect=no
```

* 在列表里选择一个分辨率,示例: 选择`1080p60hz`

```shell
hdmi=1080p60hz
```

重启就会生效

## 通过`HDMI Resoultion`应用设置

### 打开应用

在系统应用列表中找到`HDMI Resolution`.

![gnome-HDMI-application](/images/vim1/gnome-HDMI-application.png)

打开这个应用

### 设置分辨率

![gnome-HDMI-setting](/images/vim1/gnome-HDMI-setting.png)

选择一个你需要的分辨率,然后选择保存,

![gnome-HDMI-save](/images/vim1/gnome-HDMI-save.png)

系统会自动注销,分辨率的设置就会生效

