---
permalink: /plugins/
title: Windower Plugins
sidebar:
  nav: pluginnav
---

Plugins add additional functionality to Windower. While addons are written in Lua, Windower plugins are compiled from source code, usually C++, and delivered as DLL files.

Plugins are developed and maintained by the Windower team. They are automatically kept up to date by the launcher, and can be set to load automatically when you log in.

**Note:** [Addons](../addons/) are now the preferred method of extending Windower functionality. 
{: .notice--info}

## Available Plugins

| Plugin | Description |
|:---|:---|
|[AutoExec](autoexec/)|Automatically run Windower commands in response to events.|
|[Binder](binder/)|Bind to macro keys on your gaming keyboard or mouse.|
|[ChatMon](chatmon/)|Adds an audible alert in response to chat events.|
|[Config](config/)|Adds several configuration options that are automatically applied to characters during play.|
|[DelayMeNot](delaymenot/)|Removes the default delay for the macro bar with keyboard controls.|
|[FFXIDB](ffxidb/)|Displays and in-game minimap.|
|[FishingCrashFix](fishingcrashfix/)|Fixes the fishing crash introduced in the March 17 fishing update.|
|[Guildwork](guildwork/)|Interface with guildwork.com|
|[IME](ime/)|Allows typing in Japanese using the Windows input method editor.|
|[InfoBar](infobar/)|Displays a configurable bar showing information on your targets.|
|[Run](run/)|Start or stop external applications through Windower.|
|[Sandbox](sandbox/)|Fix multiboxing issues by sandboxing elements shared between instances.|
|[SSOrganizer](ssorganizer/)|Organizes screenshots based on character and area.|
|[Tickle](tickle/)|Displays the time remaining until your next resting tick.|
|[Timers](timers/)|Tracks ability and spell recast timers, as well as durations on buffs that you cast.|
|[WeatherMon](weathermon/)|Track and play alerts based on weather changes.|
|[WinControl](wincontrol/)|Manually control window positioning.|

## Deprecated Plugins

In many cases, plugin functionality has been ported into newer addons and sometimes plugins.
The following noteworthy plugins are deprecated and no longer supported. 

**Note:** This table is not exhaustive as over the years, many plugins and plugin authors have come and gone. If you have a question about a specific plugin not listed, contact us on [Discord](https://discord.gg/v6pk6uy).
{: .notice--warning}

| Plugin | Replacement |
|:---|:---|
| Attainment | [PointWatch](../addons/pointwatch/) |
| BlinkMeNot | [DressUp](../addons/dressup/) |
| Cancel | [Cancel](../addons/cancel/) |
| ChatLink | [ChatLink](../addons/chatlink/) |
| Clock | [Clock](../addons/clock/) |
| ConsoleBG | [ConsoleBG](../addons/consolebg/) |
| Distance | [Distance](../addons/distance/), [DistancePlus](../addons/distanceplus/) |
| DrawDistance | [Config](config/) (Plugin) |
| FFOChat | **None**: *The FFOChat server is no longer online.* |
| Find | [FindAll](../addons/findall/) |
| GearCollector | [Organizer](../addons/organizer/)
| Itemizer | [Itemizer](../addons/itemizer/) |
| LightLuggage | [Treasury](../addons/treasury/) |
| PlasticSurgeon | [DressUp](../addons/dressup/) |
| Spellcast | [GearSwap](../addons/gearswap/), [Shortcuts](../addons/shortcuts/) |
| Timestamp | [Timestamp](../addons/timestamp/) |
| TParty | [TParty](../addons/tparty/) |
