title: Extra Power Input for Khadas VIMs
---

**NOTE:**

* **THE MAIN POWER SUPPLY COMES FROM USB-C PORT, AND THIS GUIDANCE IS FOR EXTRA POWER SUPPLY.**
* **ENSURE THAT THE VOLTAGE OF YOUR POWER ADAPTER, IT'S 5.2V AS MAX, 2000MA IS RECOMMENDED.**

### Overview
Khadas VIMs designed with two power supply ports:

* One is USB-C port: used for both power supply and USB data transmission.
* The other one is a 4-Pin VIN port which is close to USB-C port.
* If have to figure out a third one, the USB port will be the optional one.

### Using USB-C as extra power input
USB-C is a normal power supply interface，can also transport data in the same time，like burning firmware、ADB debug...
![image](/images/vim1/usbc_extra_power.png)

### Using VIN as extra power input
VIN Port spec as a 4-Pin 1.25mm port, and the pins define as following:
   
![Image of Extra_Power_VIN_Port](/images/vim1/vin_extra_power.png)
*Tips: we haven't develop VIN cable for sale now, so this should be DIY by yourself.*

### Using USB host as extra power input
You might be also interested in a male-to-male USB cable to provide the extra power as following:

![Image of Male2Male_USB_Extra_Power](/images/vim1/usb_host_extra_power.png)
*Tips: the USB port beside the USB-C port is recommened to used as extra power input, as it spec as 900mA, and another one beside LAN port is spec as 500mA. Check the schematic for further details.*


### See Also
* [Interfaces Description](/vim1/VimInterfaces.html)
