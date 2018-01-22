---
permalink: /addons/itemizer/
title: Itemizer
---

Provides a chat/console interface for moving items around between bags. Optionally also automatically fetches items into the main inventory before item usage (both regular usage and Ninjutsu tools).

## Commands

### delay
```
itemizer delay <delay>
```

Sets the delay for pulling items into your inventory to 'delay'. (Default 0.5)

### autoitems
```
itemizer autoitems (shortened: ai)
```

Toggles the auto-pulling of items from bags if not in your inventory. (Default: True)

### autoninjatools
```
itemizer autoninjatools (shortened: ant)
```

Toggles the auto-pulling of ninja tools from bags when not in your bag. Prioritizes specific tools then moves to universal unless the next command is used to set the tools to only use universal tools for specific spells. (Default: True)

### useuniversaltools
```
itemizer useuniversaltools <spell> (shortened: uut)
```

Toggles the use of only universal tools for `spell`. Does not use :ichi or :ni suffixes. (Default: False for all spells)  
For Example:  itemiser uut katon

### get
```
get <item> [bag] [count]
```

Retrieves the specified item from the specified bag. If `bag` is omitted it will fetch the item from any accessible bag, if available. If `count` is omitted only a single item is fetched. If `count` is `all` all items will be fetched.

### put
```
put <item> <bag> [count]
```

Places the specified item into the specified bag. If `count` is omitted only a single item is put away. If `count` is `all` all items will be put away.

### gets / puts
```
gets <item> [bag]
puts <item> <bag>
```

Same as the `get` and `put` variants if `all` was specified for the `count` argument.

## Notes

Both the full name and the abbrevited names are valid entries. Wildcards are allowed. For example, `//get *ore` would fetch all ores from all accessible bags to the main inventory.

## Examples

```
//put Mandau sack
//put Whirlpool mask satchel
//get Hct. Subligar +1 storage
//get Raider's armlets +2 safe
//get "HoPe toRQue" locker
//get earth crystal 5
//get *crystal
```

## Source
The latest source and information for this addon can be found on [GitHub](https://github.com/Windower/Lua/tree/live/addons/itemizer).