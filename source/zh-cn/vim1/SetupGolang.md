title: 搭建Golang环境
---

这篇文档介绍如何在VIMs/Edge Ubuntu系统下搭建Golang环境。

### 下载arm64架构Golang包
```
khadas@Khadas:~$ mkdir source
khadas@Khadas:~$ cd source/
khadas@Khadas:~/source$ wget https://dl.google.com/go/go1.10.3.linux-arm64.tar.gz
```

### 解压
解压压缩包到某处，如：`/usr/local`。
```
khadas@Khadas:~/source$ sudo tar -C /usr/local -xzf go1.10.3.linux-arm64.tar.gz
```

### 添加Golang到PATH环境变量
添加`export PATH=$PATH:/usr/local/go/bin`到文件`~/.bashrc`末尾。

注销或执行以下命令使其生效。
```
khadas@Khadas:~/source$ source ~/.bashrc
```

### 检查安装
```
khadas@Khadas:~/source$ go version
go version go1.10.3 linux/arm64
```

如果安装成功，你会看到Golang版本号输出。

### 测试
创建Hello World文件，编译并运行。
```
khadas@Khadas:~/source$ cat HelloWorld.go 
package main

import "fmt"

func main() {
	        fmt.Println("Hello World!")
}
khadas@Khadas:~/source$ go build HelloWorld.go 
khadas@Khadas:~/source$ ./HelloWorld 
Hello World!
```

### 参考
[Golang](https://golang.org/)
