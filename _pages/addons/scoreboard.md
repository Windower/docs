---
permalink: /addons/scoreboard/
title: Scoreboard
---

This addon allows players to see their DPS live while fighting enemies. Party and alliance member DPS is also displayed. DPS accumulation is active whenever anyone in your alliance is currently in battle. In addition to DPS, each player's total damage and their percent contribution is also displayed.

**Author:** Suji

Please report any issues or feedback to: [Suji@ffxiah](http://www.ffxiah.com/player/Phoenix/Suji) [Suji@Guildwork](http://guildwork.com/characters/ffxi/phoenix/suji)

## Commands
All in-game commands are prefixed with `//sb` or `//scoreboard`, for example: `//sb report tell suji`

|Command                 |Arguments                   |Description|
|:---|:---|:---|
|**help**                |                            |Displays the help text(includes most of what is here.)|
|**pos**                 |*x* *y*                 |Positions the scoreboard to the given coordinates.|
|**report**              |*target*                |Reports the damage. With no argument, it will go to whatever you have your current chatmode set to. Supported targets are "s", "t", "p", "l". If you pass "t", you must also pass a player name. Ex.`//sb report tell suji`|
|**reportstat** or **rs**|*stat* *player* *target*|Reports the given stat. Supported stats are: acc, racc, crit, rcrit, wsavg. *player* is only needed if you wish to only report the stat of a single player. Valid *target* is the same as the previous and no target specified will be sent to default chat. Ex.`//sb rs acc suji party` or `//sb rs rcrit zumi tell suji`|
|**filter**              |                            |This works in conjunction with one of the three arguments listed below.|
|                    |*show*                    |Shows the current mob filters.|
|                    |*Add "mob1" "mob2" ...*   |Adds mob(s) to the filters. These can all be substrings. Legal Lua patterns are also allowed.|
|                    |*clear*                   |Clears all mobs from the filter.|
|**visible**             |                            |Toggles visibility of the scoreboard.|
|**stat**                |*"statname" "player"*     |View specific parser stats. This will respect the current filter settings. Valid stats are: acc, racc, crit, rcrit. The *player* arguement is optional. Ex.`//sb stat acc` or `//sb stat crit flippant`|

## Configurations

The settings file, located in `...addons/scoreboard/data/settings.xml`, contains additional configuration options: 

|Value             |Description|
|:---|:---|:---|
|**posX**          |x coordinate for position of scoreboard.| 
|**posY**          |y coordinate for position of scoreboard.|
|**numPlayers**    |The maximum number of players to display damage for.|
|**bgTransparency**|Transparency level for the background. 0-255 range.|
|**font**          |The font for the Scoreboard. This defaults to Courier but it may be changed to one of the following fonts: Fixedsys, Lucida Console, Courier, Courier New, MS Mincho, Consolas, Dejavu Sans Mono.|
|**fontsize**      |Size of Scoreboard's font.|
|**sbcolor**       |Color of scoreboard's chat log output.| 
|**showallidps**   |Set to true to display the alliance DPS, false otherwise.|
|**resetfilters**  |Set to true if you want filters reset when you `//sb reset`, false otherwise.|

**Author's Warning:** DPS is an approximation, although I tested it manually and found it to be very accurate. Because DPS accumulation is based on the game's notion of when you are in battle, if someone else engages before you, your DPS will suffer. Try to engage fast to get a better approximation. The methods used in here cause some discrepancies with the data reported by KParser. In some cases, Scoreboard will report more damage, which generally indicates that KParser is not including something (ie, Scoreboard will be more accurate). However, there are cases where KParser is reporting damage that Scoreboard is not, and I'm currently focused on resolving this issue in particular. **This addon is still in development**. 
{: .notice--warning}

Please report any issues or feedback to Suji using the links above.

**Credits by Suji**: Thanks to **Flippant** for all of the helpful feedback and comments and to **Zumi** for encouraging me to write this in the first place.

## Source
The latest source and information for this addon can be found on [GitHub](https://github.com/Windower/Lua/tree/live/addons/scoreboard).