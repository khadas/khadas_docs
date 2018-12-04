title: Frequently Asked Questions
---

# How To Upgrade Firmware?

**VIM1/VIM2**

1. Place VIM into [Upgrade Mode](/vim1/HowtoBootIntoUpgradeMode.html).
2. Two ways to upgrade:
  * [Upgrade Using A USB Cable](/vim1/UpgradeViaUSBCable.html) - Burn an .img file to the eMMC, directly from a Ubuntu or Windows Host.
  * [Upgrade Android Using An SD-Card](/vim1/UpgradeViaTFBurningCard.html) - Burn an .img file to the MMC, directly from an SD-Card.

**Edge**

1. Place Edge into [Upgrade Mode](/edge/HowtoBootIntoUpgradeMode.html).
2. Two ways to upgrade:
  * [Upgrade Using USB cable](/edge/UpgradeViaUSBCable.html) - Burn an .img file to the eMMC, from a Ubuntu or Windows Host.
  * [Upgrade Android Using An SD-Card](/edge/UpgradeViaTFBurningCard.html) - Burn an .img file to the eMMC, from an SD-Card.

# What is the difference between an eMMC image and an SD/USB image?

**eMMC image:** An eMMC image should be burned directly to the eMMC using a USB-C data cable, from a Ubuntu or Windows Host. It must not be burned into an SD-Card. For Example: Android and Ubuntu distributions containing the `EMMC` mark.

**SD/USB image:** An SD/USB image should be copied into an SD-Card, before that card is then used to reformat the eMMC storage with a new OS. For Example: Armbian, Ubuntu distributions containing the `SD_USB` mark, as well as LibreELEC and CoreELEC.

# How to bootup SD/USB images?

In order to bootup from `SD/USB` images, you need Android (V180209 or newer) or Ubuntu (V180531 or newer) running on your eMMC with Multi-Boot activated. Please refer to [Boot From External Media](/vim1/BootFromExtMedia.html) for more information.

# How to build my own Ubuntu/Debian images?

Please refer to [Build Ubuntu/Debian Images](/vim1/FenixScript.html).

