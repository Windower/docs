---
permalink: /addons/gearswap/
title: GearSwap
---

**Author:** Byrth<br>
**Version:** 0.930<br>
**Date:** 06/13/2017

## Purpose
To assist in the micromanaging of equipment!

## Commands

**Abbreviation:** `gs`

### c 
```
gs c <string>
```

Passes the `<string>` to the `self_command()` user function.

### equip 
```
gs equip <string>
```

Attempts to interpret the `<string>` as an index of the sets table and equip that set. Will ignore "sets" if the string starts with it.

### equip naked
```
gs equip naked
```

This equips the default set "naked," which is just a bunch of empty slots. If you remake sets (`sets={}`) in your `get_sets()`, this will not work.

### debugmode
```
gs debugmode
```

Activates GearSwap's Debug Mode, which prints out why specific gear equipping attempts failed, shows you when you're entering events, and enables the eval command.

### eval 
```
gs eval <string>
```

This command evaluates the `<string>` as Lua code in the global gearswap environment (not the user environment, which is in the `user_env` table). It is only available when **debugmode** is on.

### showswaps
```
gs showswaps
```

Shows when your gear successfully changes and what it changes to.

### load
```
gs load <string>
gs l <string>
```

Attempts to load the first version of `<string>` found, assuming it is a file path relative to 9 potential base directories, in this order:
* `..GearSwap/libs-dev/<string>`
* `..GearSwap/libs/<string>`
* `GearSwap/data/<character_name>/<string>`
* `GearSwap/data/common/<string>`
* `GearSwap/data/<string>`
* `APPDATA/Windower/GearSwap/<character_name>/<string>`
* `APPDATA/Windower/GearSwap/common/<string>`
* `APPDATA/Windower/GearSwap/<string>`
* `..Windower/addons/libs/<string>`

### reload
```
gs reload
```

Reloads the current user file.

### export 
```
gs export <options>
```

Exports your currently equipped gear, inventory, or all the items in your current Lua files' sets into GearSwap .lua or spellcast .xml format. Takes options "inventory", "all", "sets", "xml", "mainjob", "subjob", and "f some_file_name." Most options also take the optional "overwrite" command at the end. Defaults to currently equipped gear and lua otherwise. Also exports appropriate advanced set tables with augments for currently equipped gear and inventory.

### enable
```
gs enable <slot>
```

Enables equip commands targeting a specified slot. "All" will allow all equip commands. Providing no slot argument will enable user GearSwap file execution, if it was disabled.

### disable
```
gs disable <slot>
```

Disables equip commands targeting a given slot. "All" will prevent all equip commands. Providing no second argument will disable user GearSwap file execution, although registered events will still run.

### validate
```
gs validate <sets|inv> <filter>
```

This command checks to see whether the equipment in the sets table also exists in your inventory (default), or (by passing "inv") whether the equipment in your inventory exists in your sets table. <filter> is an optional list of words that restricts the output to only those items that contain text from one of the filter's words.

## Settings File
There is no settings file for GearSwap.

## Additional Assistance
The `Windower/addons/GearSwap/beta_examples_and_information` folder has a file in it named `Variables.xlsx` that gives more specific information. If that is insufficient, you can go to BlueGartr's FFXI section or FFXIAH and ask for more assistance.

[GearSwap User Script Reference](reference/)

## Source
The latest source and information for this addon can be found on [GitHub](https://github.com/Windower/Lua/tree/live/addons/GearSwap).
