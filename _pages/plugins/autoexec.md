---
permalink: /plugins/autoexec/
title: AutoExec
---

AutoExec allows you to monitor certain events and react to them through Windower commands. Unlike SpellCast, which allows you to perform commands when you actively do something, this plugin is completely passive and depends on what goes on around you. Examples are alerts for weather changes or automatic changing of macro books/sets when changing jobs as well as various other things.

**Note:**
* All of AutoExec's events are now exposed as [Lua events](https://github.com/Windower/Lua/wiki/Events) and are usually easier to use in there.

## Features

Events that AutoExec can react to. See the *Usage* explanations below.

|  Event  |  Description  |
|:---|:---|
| `pluginload_<x>x<y>_<lang>` | Triggers on plugin load and contains resolution and language information. <br><br> Languages are: 0 (JP), 1 (NA), 2 (EU) |
| `login` | Triggers on character login. |
| `login_<name>` | Triggers on character login if the name matches. |
| `logout` | Triggers on character logout. |
| `logout_<name>` | Triggers on character logout if the name matches. |
| `jobchange_<mjob>/<sjob>` | Triggers on job change to *main/sub*. |
| `jobchangefull_<mjob><mlvl>/<sjob><slvl>` | Triggers on job change to *mjob mlvl/sjob slvl*. |
| `time_<hr>.<min>` | Triggers when the in-game time changes to *hr:min*. |
| `chat_<mode>_<name>_<msg>` | Triggers when receiving chat from *name* in the provided mode. <br><br> Modes are: say, shout, party, linkshell, tell, emote |
| `gainbuff_<status>` | Triggers when receiving the *status* status effect. |
| `losebuff_<status>` | Triggers when the *status* status effect disappears. |
| `invite_<name>` | Triggers when *name* invites you to join their party or alliance. |
| `day_<day>` | Triggers when day changes to *day*. <br><br> Days are: Firesday, Earthsday, Watersday, Windsday, Iceday, Lightningday, Lightsday, Darksday |
| `moon_<type>` | Triggers when the moon changes. <br><br> Moon types are: New moon, waxing/waning crescent/quarter/gibbous moon, full moon |
| `moonpct_<percent>` | Triggers when the moon changes to a certain percentage. |
| `zone_<zone>` | Triggers when zoning to *zone*. |
| `lvup` | Triggers when leveling up. |
| `lvdown` | Triggers when leveling down. |
| `gainexp_<amount>` | Triggers when gaining EXP by the specified amount. |
| `chain_<number>` | Triggers when the EXP chain reaches *number*. |
| `weather_<weather>` | Triggers on weather change. Append "x2" for double weather only. <br><br> Weathers are: Clear, Fire, Fire_x2, Earth, Earth_x2, etc. |
| `status_<status>` | Triggers when the player status changes. <br><br> Statuses are: Idle, Engaged, Resting, Dead, Event |
| `examined_<player>` | Triggers when *player* examines you. |
| `noammo` | Triggers when the ammo slot empties. |
| `tp_<percent>` | Triggers when TP reaches *percent*%. |
| The following events are all defined equally for both HP and MP: ||
| `hp_<number>` | Triggers when HP is *number*. |
| `hpp_<percent>` | Triggers when HP hits *percent*%. |
| `lowhp` | Triggers when HP is under 20%. This will not trigger again until the player's HP reaches 40%. |
| `criticalhp` | Triggers when HP is under 5%. This will not trigger again until the player's HP reaches 20%. |
| `hpmax_<number>` | Triggers when max HP is *number*. |
| These are defined for both HP and MP, but at different values: ||
| `hpplt76` | Triggers when HP drops below 76%. |
| `hppgt75` | Triggers when HP rises above 75%. |
| `mpplt50` | Triggers when MP drops below 50%. |
| `mppgt49` | Triggers when MP rises above 49%. |

## Usage

AutoExec can be used with either pre-defined XML files, or directly from within the game through Windower commands (see section *Commands* for further info). XMLs have the following format:

```xml
<autoexec>
    <!-- Optional number of events or imports. -->
    <import>something.xml</import>
    <register event="login_Mymule" silent="false" runonce="false">exec mule_key_bindings.txt</register>
</autoexec>
```

`<import>` allows AutoExec to read additional XMLs and register their events as well.

`register` registers an event. Whenever that event triggers, the Windower command specified between the `<register>` tags will execute. Additional options are as follows:

|  Attribute  |  Default  |  Description  |
|:---|:---|:---|
| `event` | *None* | The event on which this rule should trigger. |
| `silent` | `false` | If set to `true`, will not display in the console when loaded. |
| `runonce` | `false` | If set to `true`, will only execute once and then automatically unregister the event. |

Furthermore, all AutoExec events support wildcard usage.

## Commands

```
autoexec <command> [arg1 [arg2 [...]]]
ae <command> [arg1 [arg2 [...]]]
```

|  Command  |  Arguments  |  Default  |  Description  |
|:---|:---|:---|:---|
| `list` | `[echo]` | *None* | Prints a list of currently registered events to the console. If `echo` is appended, it will output them to the chatlog instead. |
| `register` | `<id>` <br><br> `<event>` <br><br> `<command> ` | *None* <br><br> *None* <br><br> *None* | Registers a new event. ID is a unique number to remember it by, so it can be unregistered again afterwards. The events are the same as described above, wildcards enabled. Command is any Windower command. |
| `registeronce` | *As above* | *As above | Same as above, but unregisters it immediately after it's triggered for the first time, so it only executes once. |