---
permalink: /steamdeck/
title: Playing on Steam Deck (WIP)
---

# Prerequisites

1. On a Windows PC, download and configure Windower 4.
2. Copy your configured Windower 4 folder to a USB drive or network-accessible location.
3. A usable keyboard and mouse. (You can probably use the Steam Deck's controls and software keyboard, but save yourself the hassle.)

# Install and Update Final Fantasy XI

1. Switch your Steam Deck to Desktop Mode. 
2. Using Firefox or another browser, download the FFXI client installer files to your Steam Deck:
   http://www.playonline.com/ff11us/download/media/install_win.html
3. Open Steam in Desktop Mode.

## Create a non-Steam game entry in your library
1. Choose **Games** > **Add a Non-Steam Game to My Library...**
1. Click **Browse** and navigate to the downloaded client files.<br/>
   *By default, Firefox downloads to `/home/deck/Downloads`*
3. For **File type**, choose **All Files**.
4. Select `FFXIFullSetup_US.part1.exe` and click **Open**.
5. Click **ADD SELECTED PROGRAMS**.<br/>
   A new application called **FFXIFullSetup_US.part1.exe** appears in your Steam library.
5. In your Steam library, select **FFXIFullSetup_US.part1.exe**.
6. Click the configuration (cog) icon and choose **Properties**.
7. In the **SHORTCUT** tab, change the name of the application to your liking.<br/>
   e.g. **FFXIFullSetup_US.part1.exe** -> **FINAL FANTASY XI**
8. In the **COMPATIBILITY** tab, select **Force the use of a specific Steam Play compatibility tool**.
9. Choose the version of Proton you wish to use.<br/>
   e.g. **Proton 7.0-2**
10. Close the application configuration window.

## Extract the client installer
1. In your non-Steam library entry, click **PLAY**.<br/>
    After some time, a **WinRAR self-extracting archive** window should appear. It may appear underneath the Steam window, so watch your task bar.
2. Note the Destination Folder, and click **Extract**.
3. After the extraction finishes, return to the application in the Steam library.

## Run the Final Fantasy XI installer
1. In your non-Steam library entry, click the configuration icon again.
2. Click **Browse** and navigate to the newly extracted directory.<br/>
    e.g. `/home/deck/Downloads/FFXIFullSetup_US`
3. Select **FFXISetup.exe** and click **OPEN**.
4. Close the application configuration window and click **PLAY**.<br/>
   After some time, the **FINAL FANTASY XI Installer** dialog appears.
5. Step through the DirectX, PlayOnline, and FINAL FANTASY XI installers as normal.<br/>
   Accept the default installation paths. You can uncheck the boxes to create desktop shortcuts.
   > ***NOTE:*** <br>
   > When the **FINAL FANTASY XI Setup** window appears, it will indicate that it is *Computing space requirements* and appear to be stalled.
   > ***BE PATIENT AND WAIT***. This step may take a long time (5-10+ minutes), but you will eventually be able to click **Next**.

# Known Issues

## Broken Addons/Plugins
- **FFXIDB** *Causes instant crash to OS*
