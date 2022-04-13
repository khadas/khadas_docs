title:  Upgrade Android Via An SD-Card
---

Here's an example of upgrading Android.

{% note info The operation of VIM1, VIM2 and VIM3 is almost the same, so this document will take VIM1 as an example. %}

{% endnote %}


## Preparation:

* Download the [Burn Card Maker Tool](https://dl.khadas.com/Tools/Burn_card_maker_V2.0.2_20150617_en.7z) and extract it.
* Prepare an SD-Card and a Card Reader. Your card will be formatted, so you might want to back up your data first.
* A display/monitor that supports HDMI video-input.

## Upgrading Steps:
1. Run `Burn_Card_Maker.exe` tool:
	![Image of BurnCardMaker_Tool](/android/images/vim1/burn_card_maker_tool.png)
2. Insert the SD-Card into your PC, it should appear as a new drive letter. Then:
	* Select your SD-Card from the drop-down list of `Choose the disk`.
	* [Optional] Enable `To Partition and Format`(Check this the first time you're making a Booting Card for VIM).
	* Click the `Open` button and choose an image for VIM.
	* Click the `Make` button to create a Burning Card for VIM:
	![Image of BurnCardMaker_Tool_Interface](/android/images/vim1/burn_card_maker_tool_interface.png)
3. When everything is finished, click the `Success` button to terminate the current operation.
4. Unplug the SD-Card from your PC and insert it into the SD-Card slot on your VIM.
5. Connect the USB-C & HDMI cables, and VIM will power-on automatically.
6. Place your VIM into Upgrade Mode to complete your Firmware upgrade:
	* Long press `Power` key without release it.
	* Short press `Reset` key and then release it.
	* Count 2 to 3 seconds and release the `Power` key to enter into Upgrade Mode.

If everything went fine, now your display/monitor should show this:
![Image of Upgrading_Interface](/android/images/vim1/upgrading_interface.png)

Have Fun!

**See Also:**

* [Upgrade Via A USB Cable](/android/vim1/UpgradeViaUSBCable.html)
* [VIM1 How To Boot Into Upgrade Mode](/android/vim1/BootIntoUpgradeMode.html)
* [VIM2 How To Boot Into Upgrade Mode](/android/vim2/BootIntoUpgradeMode.html)
* [VIM3 How To Boot Into Upgrade Mode](/android/vim3/BootIntoUpgradeMode.html)
