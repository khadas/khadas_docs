title: 如何在64位系统下运行32位应用
---
### 在64位系统下执行32位的程序
```sh
$ arm-linux-gnueabihf-gcc -o test test.c
$ ./test   
-bash: ./test: No such file or directory
```
如果没有安装32位的包则在64位系统下运行32位的应用会报错。
### 安装32位的包并执行
```sh
$ sudo apt-get update
$ sudo apt-get -y install libc6:armhf
$ ./test  
Hello World!
```
其中，'libc6'为安装包的名字，'armhf'代表这个安装包是32位的。
执行完以上的命令就可以运行32位的程序了。

