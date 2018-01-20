---
permalink: /profiles/
title: Windower Profiles
---

Windower profiles are a collection of settings that determine things like how the game renders, which addons and plugins load, and so on.

You might choose to have multiple profiles to run the game at different resolutions, launch with different sets of addons, or run in fullscreen or windowed mode.

## Create a Profile
* In the **Profiles** tab, click the **+** icon to create a new profile.

## Configure a Profile
* In the **Profiles** tab, click the **edit** icon to edit the profile settings.
* With the profile selected, enable any desired addons in the **Addons** tab.<br>For more information about the available addons, see the [Addons Section](../addons/).
* With the profile selected, enable any desired plugins in the **Plugins** tab.<br>For more information about the available plugins, see the [Plugins Section](../addons/).

## Launch Using a Profile
In the **Profiles** tab:
* Double-click the profile.
OR
* Select the profile and click the **launch** icon.

## Create a Profile Shortcut
You can create a shortcut to launch the game directly with a specific profile, rather than opening the Windower launcher.

* In the **Profiles** tab, select the profile and click the **pin to desktop** icon.<br>The new shortcut is created on your Windows desktop.

## Profile Settings

### Windower Settings
Windower settings control the basic Windower behavior for the profile.

| Setting | Description |
|:---|:---|
| **Console Key** | Specifies the key that opens the Windower console.<br>Default: **Insert** |
| **Resolution** | Sets the game resolution.<br>Default: Primary display resolution |
| **Region** | Specifies the installed game client region.<br>Default: **Auto-Detect** |
| **Window Mode** | Sets the windowing mode:<br>Default: **Borderless Window** |

### Game Settings
Game settings control aspects of the game rendering process. The game settings correspond to the settings available in the **FINAL FANTASY XI Config** app.

| Setting | Description |
|:---|:---|
| **Hardware Mouse** | Specifies whether to use hardware or software mouse.<br>Default: **On** |
| **Super Sampling** | Renders the game at a higher resolution before scaling it to the resolution set in **Windower Settings**.<br>Default: **Off** |
| **Sound** | Enables or disables sound.<br>Default: **On** |
| **Bump Mapping** | Enables or disables bump mapping in the game engine.<br>Default: **Off** |
| **Always Play Sound** | Specifies whether to play sound from the game instance even when the window is out of focus.<br>Default: **On** |
| **Always Enable Gamepad** | Specifies whether to respond to gamepad input even when the window is out of focus.<br>Default: **On** |
| **Mip Mapping** | Specifies the level of mipmapping to use when rendering the game.<br>Default: **0** |
| **UI Scale** | Specifies the scaling level for UI elements. Useful when playing on high pixel-density displays.<br>Default: **1x** |
| **Gamma** | Specifies a gamma level adjustment for the game.<br>Default: **0.000** |

### Advanced Settings
Advanced settings are used primarily to enable logging that can assist when troubleshooting issues.

All advanced settings default to **Off**.

| Setting | Description |
|:---|:---|
| **Debug Log** | Logs Windower debug messages. |
| **Error Log** | Logs Windower error messages. |
| **Input Log** | Logs game client input. |
| **IPC Log** | Logs Windower IPC communication. |
| **Allow Windows Key** | Allows the Windows key to pass out of the game to open the Start menu. |

## Addons
The **Addons** tab contains a list of the Windower addons that reside in the official Lua repository. The addons in this section are updated automatically by the Windower launcher.

When you enable an addon in the **Addons** tab, it is turned on only for the profile currently selected in the **Profiles** tab.

For more information about the available addons, see the [Addons Section](../addons/).

For more information about creating Windower addons, see the [Lua Development Wiki](http://dev.windower.net).

## Plugins
The **Plugins** tab contains a list of Windower plugins maintained by the Windower development team. The plugins are updated automatically by the Windower launcher.

When you enable an plugin in the **Plugins** tab, it is turned on only for the profile currently selected in the **Profiles** tab.

For more information about the available plugins, see the [Plugins Section](../plugins/).