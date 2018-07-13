title: Frequently Asked Questions
---

# How to upgrade firmware?

**VIMs**

1. Put VIMs [enter upgrade mode](/vim1/HowtoBootIntoUpgradeMode.html).
2. Two ways to upgrade:
  * Upgrade via USB cable: Follow [upgrade via USB cable](/vim1/UpgradeViaUSBCable.html) to burn image on Windows or Ubuntu.
  * Upgrade via TF card(For Android only): Follow [upgrade Android via a TF card](/vim1/UpgradeViaTFBurningCard.html) to burn image.

**Edge**

1. Put Edge [enter upgrade mode](/edge/HowtoBootIntoUpgradeMode.html).
2. Two ways to upgrade:
  * Upgrade via USB cable: Follow [upgrade via USB cable](/edge/UpgradeViaUSBCable.html) to burn image on Windows or Ubuntu.
  * Upgrade via TF card: Follow [upgrade Android via a TF card](/edge/UpgradeViaTFBurningCard.html) to burn image.

# What’s eMMC image and SD/USB image?

**eMMC image:** Should burn to eMMC storage via USB cable and boot form it, can't burn to SD/USB storage.
For example: Android and Ubuntu contains `EMMC` mark.

**SD/USB image:** Should burn to TF card or U-disk and boot from it, can't burn to eMMC storage.
For example: Armbian, Ubuntu contains `SD_USB` mark, LibreELEC and CoreELEC.

# How to bootup SD/USB images?

In order to bootup `SD/USB` images, you need Android(V180209 or newer) or Ubuntu(V180531 or newer) running on eMMC and need to activate the multi-boot, please refer to [boot from external media](/vim1/BootFromExtMedia.html).

# How to build my own Ubuntu/Debian images?

Please refer to [build Ubuntu/Debian images](/vim1/FenixScript.html).

