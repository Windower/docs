---
permalink: /addons/autocontrol/
title: AutoControl
---

Addon to make setting automaton attachments easier. Currently only works as pup main. Includes burden tracker.

**Author:** Nitrous [Nitrous@guildwork](http://guildwork.com/users/ntrous24)

## Commands

All in-game commands are prefixed with `//acon` or `//autocontrol`
Formated with `Command` + `Argument` Ex.`//acon saveset setname1` 

|Command                |Argument                |Description|
|:---|:---|:---|
|**help**               |                        |Brings up this menu.|
|**setlist**            |                        |List all saved automaton sets.|
|**saveset**            |*setname*           |Saves "setname" to your settings|
|**equipset**           |*setname*           |Equips "setname" to your automaton.|
|**attlist**            |*setname*             |Gets the attachment list for a giving set.|
|**list**               |                        |Gets the list of currenty equipped attachments.|

### Burden Tracker

The following all commands correspond to the burden tracker.

|Command                |Argument                |Description|
|:---|:---|:---|
|**fonttype**           |*name*              |Changes tracker font type where "name" equals desired font.|
|**fontsize**           |*size*              |Changes tracker font size where "size" equals desired size.|
|**pos**                |*x* *y*             |Changes the coordinates of the tracker.|
|**bgcolor**            |*r* *g* *b*         |Changes the color of the tracker background, where "r", "g", "b" equal values 0-255.|
|**txtcolor**           |*r* *g* *b*         |Changes the color of the tracker text, where "r", "g", "b" equal values 0-255.|
|**settings**           |                        |Shows your current settings.|
|**show** / **hide**    |                        |Toggles visibility of the tracker so you can make changes.|

## Default Configuration

Default configurations can be adjusted at the following location: `...addons\autocontrol\data\settings.xml`

To hide maneuver timers set `<maneuvertimers>false</maneuvertimers>`. Toggle in game with `//acon maneuvertimers` or `//acon mt`.

To hide burden tracker set `<burdentracker>false</burdentracker>`. Toggle in game with `//acon show` and `//acon hide`.

## Default Sets

Two attachments sets are included by default:
* healer
* melrng

## Source
The latest source and information for this addon can be found on [GitHub](https://github.com/Windower/Lua/tree/live/addons/autocontrol).