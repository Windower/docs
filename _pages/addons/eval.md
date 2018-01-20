---
permalink: /addons/eval/
title: Eval
---

Eval is an addon that allows execution of arbitrary lua code via the windower console.  The file `data\bootstrap.lua` is run upon the addon startup, this can be used to add boilerplate code you want to include in the eval interpreter, such as requiring libraries.

## Syntax
```
eval <lua code>
```

For example:
```lua
eval write(get_player()['name'])
```