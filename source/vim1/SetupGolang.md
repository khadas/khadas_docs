title: Setup Golang
---

This guide is about how to setup the Golang Environment on Ubuntu for VIMs/Edge.

### Download Golang For Arm64
```
$ mkdir source
$ cd source/
~/source$ wget https://dl.google.com/go/go1.10.3.linux-arm64.tar.gz
```

### Extract Tarball
Extract the Golang tarball to somewhere like: `/usr/local`.
```
~/source$ sudo tar -C /usr/local -xzf go1.10.3.linux-arm64.tar.gz
```

### Add Golang to your Environment Path
Add `export PATH=$PATH:/usr/local/go/bin` to the end of file `~/.bashrc`.

Logout or execute the following command.
```
~/source$ source ~/.bashrc
```

### Check Installation
```
~/source$ go version
go version go1.10.3 linux/arm64
```
If Golang has installed successfully, you'll see it's version number (above).

### Test
Create a "HelloWorld.go" file, build & run it.
```
~/source$ cat HelloWorld.go 
package main

import "fmt"

func main() {
	        fmt.Println("Hello World!")
}
~/source$ go build HelloWorld.go 
~/source$ ./HelloWorld 
Hello World!
```

### See Also
[Golang](https://golang.org/)
