title: Extra Power Input for Khadas VIMs
---

**NOTE:**

* **MAIN POWER SUPPLY COMES FROM THE USB-C PORT, THIS GUIDE IS FOR THE EXTRA POWER SUPPLY ONLY.**
* **ENSURE THAT THE VOLTAGE OF YOUR POWER ADAPTER IS LISTED AS: 5.2V MAX, 2000mA.**

### Overview
Khadas VIM1/VIM2 is designed with three power supply ports:

1. USB-C Port: This is used for both Power Supply and USB Data Transmission.
2. 4-Pin VIN port which is situated near the USB-C port.
3. USB-Port beside the USB-C port, is the final power source (Optional USB Host).

### Using USB-C as Extra Power Input
USB-C is the normal power supply interface. It can also transport data at the same time; burning firmware, ADB debug...
![image](/images/vim1/usbc_extra_power.png)

### Using VIN as Extra Power Input
The VIN port is a 4-Pin 1.25mm port. The pins are defined as such:
   
![Image of Extra_Power_VIN_Port](/images/vim1/vin_extra_power.png)
*Tip: We don't have a VIN cable for sale, you'll need to DIY one by yourself.*

### Using USB Host as Extra Power Input
You might also be interested in a male-to-male USB cable to provide extra power:

![Image of Male2Male_USB_Extra_Power](/images/vim1/usb_host_extra_power.png)
*Tip: The USB port beside the USB-C port is recommended for use as extra power input; it is specced to 900mA, whilst the other USB port beside LAN port is specced to only 500mA. Check the schematic for further details.*


### See Also
* [Interfaces Description](/vim1/VimInterfaces.html)
