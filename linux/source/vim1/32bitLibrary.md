title: 32-bit Library
---

## Execute The 32-bit Program Under 64-bit System

1. Sample test code

```
#include <stdio.h>

int main(int argc, char *argv[])
{
    printf("Hello world !!!\n");

    return 0;
}
```

2. Compile and run

```bash
$ arm-linux-gnueabihf-gcc -o test test.c
$ ./test   
-bash: ./test: No such file or directory
```
If you don’t install the 32-bit package,it will report an error when you run a 32-bit application under a 64-bit sysytem.

## Install The 32-bit Package And Execute

```bash
$ sudo apt-get update
$ sudo apt-get -y install libc6:armhf 
$ ./test
Hello World!
```
'libc6' is the name of the installation package, 'armhf' means the installation package is 32-bit.
You can run the 32-bit program after you execute the command.
