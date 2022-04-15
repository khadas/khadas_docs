title: Gsensor
---

## Gsensor节点

```sh
$ ll /dev/accel 
crw-rw-rw- 1 root root 10, 50 Mar 18 12:17 /dev/accel
```

## Gsensor示例

Gsensor示例是通过ioctl函数对节点进行读写。

### 源码

源码只实现了使用默认设置读数据,其他功能用户可以自行实现。

```sh
$ wget https://dl.khadas.com/development/code/docs_source/gsensor.c
```

### 编译

在板子上直接使用`gcc`编译即可：

```sh
$ gcc -o gsensor gsensor.c
```


### 测试

运行时旋转板子,可以看到Gsensor数据的变化:

```sh
$ ./gsensor
gsensor node open success!!!
gsensor start sueecss !!!
start to get gsensor data ...
gsensor_data -- x:-2112,y:16,z:16448
gsensor_data -- x:-2128,y:176,z:16128
gsensor_data -- x:-1632,y:2784,z:15968
gsensor_data -- x:7440,y:-3760,z:14608
gsensor_data -- x:-512,y:-7280,z:12128
gsensor_data -- x:-14384,y:-2336,z:11280
gsensor_data -- x:9952,y:-5264,z:15216
gsensor_data -- x:-6432,y:3760,z:24896
```


