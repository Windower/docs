---
permalink: /addons/azuresets/
title: AzureSets
---

Addon to make setting blue spells easier. Currently only works as blu main.

## Features

* Save blue magic sets and reapply them via the spellset command.
* List your current spells that are set without opening the menu.
* When you use the addon to equip a certain set a timers-based timer is displayed to let you know when your spells are ready.

## Commands

The following commands are avaiable with the `aset` alias:

### removeall
```
aset removeall
```

Unsets all spells.

### spellset
```
aset spellset <setname>
```

Set *setname*'s spells.

### add
```
aset add <slot> <spell>
```

Set *spell* to slot *slot number*.

### save
```
aset save <setname> 
```

Saves current spellset as *setname*.

### currentlist
```
aset currentlist
```

Lists currently set spells.

### setlist
```
aset setlist
```

Lists all spellsets.

### spellist
```
aset spelllist <setname>
```

List spells in *setname*.

### help
```
aset help
```

Shows this menu.

## Source
The latest source and information for this addon can be found on [GitHub](https://github.com/Windower/Lua/tree/live/addons/azureSets).