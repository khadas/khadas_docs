title: Setup Golang
---

This tutorial is about how to setup Golang environment on Ubuntu for VIMs/Edge.

### Download Golang for arm64
```
khadas@Khadas:~$ mkdir source
khadas@Khadas:~$ cd source/
khadas@Khadas:~/source$ wget https://dl.google.com/go/go1.10.3.linux-arm64.tar.gz
```

### Extract tarball
Extract the Golang tarball to somewhere like: `/usr/local`.
```
khadas@Khadas:~/source$ sudo tar -C /usr/local -xzf go1.10.3.linux-arm64.tar.gz
```

### Add Golang to environment path
Add `export PATH=$PATH:/usr/local/go/bin` to the end of file `~/.bashrc`.

Logout or execute the following command.
```
khadas@Khadas:~/source$ source ~/.bashrc
```

### Check installation
```
khadas@Khadas:~/source$ go version
go version go1.10.3 linux/arm64
```

If install successfully, you will see the version of Golang.

### Test
Create a hello world go file, build & run it.
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

### See Also
[Golang](https://golang.org/)
