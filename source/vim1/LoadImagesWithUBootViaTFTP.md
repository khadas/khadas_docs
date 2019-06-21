title: Load Images With U-Boot Via TFTP
---

With an available network connection, U-Boot can load images quickly and easily via TFTP.

### Preparation
- [x] [Setup TFTP Server for U-Boot](/vim1/SetupTFTPServer.html)

We'll start off with a terminal connected to the board and sitting at the U-Boot prompt.

### Upgrade Bootloader

```
kvim# tftp 1080000 u-boot.bin
kvim# store rom_write 1080000 0 $filesize
```

**Note**: You might also need to clean up the old U-Boot environment value stored in the `env` partition, and then save it as a new value:
```
kvim# defenv
kvim# saveenv
```

Run `reset` or press `reset` button to boot from the new bootloader:
```
kvim# reset
```

### boot.img
Load image into memory, then run `bootm` to boot from memory:
```
kvim# tftp 1080000 boot.img
kvim# bootm
```

### Linux Kernel Image
Download and run Linux:
```
kvim# tftp 1080000 zImage
kvim# tftp 10000000 uInitrd
kvim# tftp 20000000 kvim.dtb 
kvim# booti 1080000 10000000 20000000
```
### Troubleshooting
Failed to `saveenv`:
```
kvim# saveenv
Saving Environment to aml-storage...
get partition info failed !!
kvim#
```

You need to write a DTB first!
### Resources
* [U-Boot Offical Guide](http://www.denx.de/wiki/view/DULG/UBoot)
