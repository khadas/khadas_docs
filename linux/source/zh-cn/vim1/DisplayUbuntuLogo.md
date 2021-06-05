title: 显示/关闭 Ubuntu 开机 logo
---

 当显示Ubuntu Logo时，内核打印信息就会被屏蔽掉，如果需要显示内核打印信息，只要关闭Ubuntu Logo显示就可以。

 下面将会介绍如果在显示/关闭 Ubuntu Logo。

配置选项在`/boot/env.txt`文件里，

```sh
# Setup splash
# true  - enable splash
# false - disable splash
enable_splash=true
```

默认状态下是true，也就是开机会显示Ubuntu Logo，修改`enable_splash`选项的值为`false`就能关闭显示

```sh
enable_splash=false
```

重启就会显示内核打印信息，不再显示logo


