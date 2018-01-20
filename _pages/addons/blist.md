---
permalink: /addons/blist/
title: Blist
---

**Author:** Ragnarok.Ikonic

More detailed blist with tiered display options. Allows for blist to be active on any or all of several chat types.

## Commands

`//Blist` and `//bl` are both valid commands.

### help
```
bl help
```

Lists this menu.

### status
```
bl status
```

Shows current configuration.

### list
```
bl list
```

Displays blacklist.

### chatmode toggles
```
bl useblist|linkshell|party|tell|emote|say|shout|bazaar|examine
```

Toggles using Blist for said chat mode.

### mutedcolor
```
bl mutedcolor #
```
Sets color for muted communication. Valid values 1-255.

### add/update
```
bl add|update name # hidetype reason
```

Adds to or updates a user on your blist.

* **name** = name of person you want to blist
* **#** = number of days to blist said person; 0 = forever
* **hidetype** = how blacklisted you want said person to be; valid options: hard, soft, muted
* **hard** = full blist, nothing gets through
* **soft** = message saying conversation from name was blocked
* **muted** = message comes through, but in a different color
* **reason** = reason why you are adding said person to blist

### delete/remove
```
bl delete|remove name
```

Removes a user from your blist.

### qa
```
bl qa name [reason]
```

Adds a user to your blist w/o requiring extra details (reason is optional).