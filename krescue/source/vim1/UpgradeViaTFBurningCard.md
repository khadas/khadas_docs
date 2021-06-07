title:  Upgrade Android Or Ubuntu Via An SD-Card
---

Here's an example of upgrading Android.The way to upgrade Ubuntu is consistent with Android.

{% note info The operation of VIM1, VIM2 and VIM3 is almost the same, so this document will take VIM1 as an example. %}

{% endnote %}

{% note warn As the burning card only support FAT32 filesystem, because the Ubuntu desktop image size is large then 4GB, so it is not supported to burn via TF card. %}

{% endnote %}


## Preparation:

* Download the [Burn Card Maker Tool](https://dl.khadas.com/Tools/Burn_card_maker_V2.0.2_20150617_en.7z) and extract it.
* Prepare an SD-Card and a Card Reader. Your card will be formatted, so you might want to back up your data first.
* A display/monitor that supports HDMI video-input.

## Upgrading Steps:
1. Run `Burn_Card_Maker.exe` tool:
	![Image of BurnCardMaker_Tool](/images/vim1/BurnCardMaker_Tool.png)
2. Insert the SD-Card into your PC, it should appear as a new drive letter. Then:
	* Select your SD-Card from the drop-down list of `Choose the disk`.
	* [Optional] Enable `To Partition and Format`(Check this the first time you're making a Booting Card for VIM).
	* Click the `Open` button and choose an image for VIM.
	* Click the `Make` button to create a Burning Card for VIM:
	![Image of BurnCardMaker_Tool_Interface](/images/vim1/BurnCardMaker_Tool_Interface.png)
3. When everything is finished, click the `Success` button to terminate the current operation.
4. Unplug the SD-Card from your PC and insert it into the SD-Card slot on your VIM.
5. Connect the USB-C & HDMI cables, and VIM will power-on automatically.
6. Place your VIM into Upgrade Mode to complete your Firmware upgrade:
	* Long press `Power` key without release it.
	* Short press `Reset` key and then release it.
	* Count 2 to 3 seconds and release the `Power` key to enter into Upgrade Mode.

If everything went fine, now your display/monitor should show this:
![Image of Upgrading_Interface](/images/vim1/Upgrading_interface.png)

Have Fun!

**See Also:**

* [Upgrade Via A USB Cable](/vim1/UpgradeViaUSBCable.html)
* [VIM1 How To Boot Into Upgrade Mode](/vim1/HowtoBootIntoUpgradeMode.html)
* [VIM2 How To Boot Into Upgrade Mode](/vim2/HowtoBootIntoUpgradeMode.html)
* [VIM3 How To Boot Into Upgrade Mode](/vim3/HowtoBootIntoUpgradeMode.html)
