---
permalink: /linux/
title: Linux Installations
---

While we cannot *guarantee* full support for Windower 4 on Linux systems, it does generally work through the magic of Wine and/or Proton, depending on your system.

***Basic Requirements***

In general, the following requirements apply for compatibility with minimal workarounds:
* Wine Staging 8.5 or newer (or equivalent)
* dotnet462, gdiplus, corefonts installed via winetricks
* DirectX 8 compatibilty layer or shim such as D8VK or dgVoodoo2

> **Note:** The suggested Lutris installation method meets these requirements, but you can certainly install without Lutris as well.
{: .notice--info}

# Lutris

> **Preferred method, Last Updated 2024-01-04**
{: .notice--success}

The easiest way to use Windower 4 on Linux is through Lutris. The scripts available in the Lutris database enable a fully functional launcher UI and do not require the use of the `linuxfix` addon.

## Prerequisites
* Install Lutris on your system.<br/>Refer to the [Lutris documentation](https://lutris.net/downloads) for the best way to do this for your system.
* Configure Lutris to use the most recent version of Wine.<br/>(`wine-ge-8-25` as of 2024-01-04)

## Installing FINAL FANTASY XI
Install Final Fantasy XI with the script that is configured to use D8VK. This installer uses a modern version of Wine and D8VK for better compatibility and performance.

1. In Lutris, click **+** and choose **Search the Lutris website for installers**.
1. Enter `FINAL FANTASY XI Online` and press **Enter**.
1. Click **FINAL FANTASY XI Online** in the search results.
1. Select **Full (US) Version with D8VK** and click **Install**.

At this point, you can start Final Fantasy XI from Lutris and update it.

> **Backup Recommended**<br/>
> We strongly recommend that you back up your game directory after updating to save time if something goes wrong and you need to reinstall. If you plan to configure the gamepad, back up the game directory **after** doing so.
{: .notice--info}

### (Optional) Configuring the Gamepad
By default, gamepad support is not enabled in Final Fantasy XI.

1. Select the **FINAL FANTASY XI Online** entry in your Lutris games library.
1. Click the **^** button and choose **Run EXE inside Wine prefix**.
1. Navigate to `drive_c/Program Files (x86)/PlayOnline/SquareEnix/FINAL FANTASY XI/ToolsUS/`.
1. Double-click `FINAL FANTASY XI Config.exe`.
1. Configure your gamepad as you would on Windows.

You can also enable the gamepad in PlayOnline by repeating the same steps with `polcfg.exe` under `drive_c/Program Files (x86)/PlayOnline/SquareEnix/PlayOnlineViewer/polcfg/`.

## Installing Windower 4
Install Windower with the script that is compatible with the D8VK installation of Final Fantasy XI.
1. In Lutris, click **+** and choose **Search the Lutris website for installers**.
1. Enter `FINAL FANTASY XI Online` and press **Enter**.
1. Click **FINAL FANTASY XI Online** in the search results.
1. Select **Windower 4 Live** and click **Install**.

> **FOR REFERENCE ONLY**<br/>
> For historical reference, the previous methods remain documented here:<br/>
> [Linux Installations - Deprecated](/linux-deprecated){: .btn .btn--warning .btn--small}
{: .notice--warning}

<a href="https://github.com/GloriousEggroll/wine-ge-custom/releases/latest"><span id="latestrelease">Checking...</span></a>
<script src="wine-ver.js"/>
