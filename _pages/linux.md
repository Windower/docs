---
permalink: /linux/
title: Linux Installations
---

While we cannot *guarantee* full support for Windower 4 on Linux systems, it does generally work through the magic of Wine and/or Proton, depending on your system.

> ### General Known Issues
> - `FFXIDB` plugin does not work and causes a crash

# Lutris
By far the easiest way to install FFXI and Windower 4 on Linux is to use Lutris. By using the provided installation scripts, you will have a working Windower 4 installation that includes a functioning launcher GUI and does not require the `linuxfix` addon required by other methods.

## Prerequisites
Install Lutris on your system. Refer to the [Lutris documentation](https://lutris.net/downloads) for the best way to do this for your system.

Download the following Lutris scripts to your local system:
- [FINAL FANTASY XI Online - Full (US) (32-bit)](https://cdn.discordapp.com/attachments/1003467859260870676/1028065002000756886/ffxi_us_new32.yaml)
- [Windower 4 (32-bit)](https://cdn.discordapp.com/attachments/1003467859260870676/1028065001648431144/windower_4_32.yaml)

## Procedure
1. Run the FFXI installation script.
   1. Click the **+** icon in the Lutris launcher and choose **Install from a local install script**.
   2. Select the `ffxi_us_new32.yaml` script.
2. Run the Windower 4 installation script.
   1. Click the **+** icon in the Lutris launcher and choose **Install froma local install script**.
   2. Select the `windower_4_32.yaml` script.
3. Switch the **Windower 4** Wine version from the current version to `lutris-4.21`.<br/>If you do not do this, the keyboard will not work correctly, and you will need to use the `linuxfix` addon.
