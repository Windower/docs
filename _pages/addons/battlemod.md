---
permalink: /addons/battlemod/
title: BattleMod
---

Addon for chat log manipulation.

## Features

* Allows chat log customization.
* Condenses multi-line messages. (condensebuffs / condensebattle / condensedamage)
* Cancels multiple "equipment changed" and "unable to change equipment" messages.

## Commands

The following commands are available with the `bm` alias:

### condensebuffs
```
bm condensebuffs
```

Condenses multi-target buffs and spells into a single line.

### condensebattle
```
bm condensebattle
```

Uses chat log customization to replace common lines with a line of your choosing.

### condensedamage
```
bm condensedamage
```

Combines multiple hits of the same attack round into one line.

### commamode
```
bm commamode
```

Toggles between using only commas to delimit values **true** and using "and" as well **false**.

### oxford
```
bm oxford
```

Toggles the oxford comma on **true** and off **false**.

### cancelmulti
```
bm cancelmulti
```

Toggles "equipment changed" message canceling.

### targetnumber
```
bm targetnumber <number>
```

Toggles the inclusion of a number of targets at the front of condensed buffs.

### reload
```
bm reload
```

Reloads Battlemod options (not the entire addon).

### unload
```
bm unload
```

Unloads Battlemod.

### help
```
bm help
```

Shows this menu.