title: Enable/Disable Ubuntu logo
---

When the Ubuntu Logo is displayed, the kernel print information will be shielded. If you need to display the kernel print information, just turn off the Ubuntu Logo display.

The following will introduce how to display/close the Ubuntu Logo.

The configuration options are in the `/boot/env.txt` file,

```sh
# Setup splash
# true  - enable splash
# false - disable splash
enable_splash=true
```

By default, it is true, that is the Ubuntu Logo is displayed , and the display can be turned off by modifying the value of the `enable_splash` option to `false`

```sh
enable_splash=false
```

Restart will display the kernel print information and no longer display the logo


