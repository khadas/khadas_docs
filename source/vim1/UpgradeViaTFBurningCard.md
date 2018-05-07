title:  Upgrade Android Via a TF Card
---

### Preparations:

* Download the [Burn Card Maker Tool](http://www.mediafire.com/file/u349mo760o1dt6i/Burn_card_maker_V2.0.2_20150617_en.7z) and extract it.
* Prepare a TF card and a card reader, the card will be formatted, you might need to back up the data first.
* A HDMI supported display/monitor.

### Upgrading Steps:
1. Run ‘Burn_Card_Maker.exe’ tool:
	![Image of BurnCardMaker_Tool](/images/vim1/BurnCardMaker_Tool.png)
2. Insert the TF card into your PC, it should appear as a new drive letter. Then:
	* Select the TF card drive in the drop-down list of `Choose the disk`.
	* [Optional] Enable `To Partition and Format`(Enable this when the first time you making the booting card for vim1).
	* Click `Open` button and choose the image for Vim.
	* Click `Make` button to create the burning card for Vim:
	![Image of BurnCardMaker_Tool_Interface](/images/vim1/BurnCardMaker_Tool_Interface.png)
3. When everything is done, click the `Success` button to quit current operation.
4. Plug out the TF card from your PC and then insert it into the TF Card slot of Vim.
5. Connect the USB-C & HDMI cables, and power on Vim.
6. Let Vim enter into upgrade mode to complete the upgrading:
	* Long press `Power` key without release
	* Short press `Reset` key and release
	* Count 2-3 seconds and release the `Power` key to enter into upgrade mode.

If everything goes fine, now your display/monitor should display like this:

![Image of Upgrading_Interface](/images/vim1/Upgrading_interface.png)

Have Fun!

**See also:**

* [Upgrade via an USB cable](/vim1/UpgradeViaUSBCable.html)
* [VIM1 Howto Boot Into Upgrade Mode](/vim1/HowtoBootIntoUpgradeMode.html)
* [VIM2 Howto Boot Into Upgrade Mode](/vim2/HowtoBootIntoUpgradeMode.html)
