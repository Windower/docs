---
permalink: /commands/plugin/
title: Plugin Commands
---

Plugin commands allow you to control the loading and unloading of Windower plugins.

### load
```
load <plugin>
```
Loads a plugin. 

**Tip:** Plugin name is case-insensitive.
{: .notice--info}

### unload
```
unload <plugin>
```
Unloads the specified plugin.

### toggle
```
toggle <plugin>
```
Toggles the specified plugin.

**Tip:** Designed to be used with a [keybind](../input/#bind--keyboard_bind) to turn a plugin on or off by keystroke.
{: .notice--info}

### plugin_list
```
plugin_list
```
Displays a list of all currently-loaded plugins in the game chatlog.

### reload
```
reload <plugin>
```
Unloads and reloads the specified plugin.

### unloadall
```
unloadall
```
Unloads all currently-loaded plugins.
