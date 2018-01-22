---
permalink: /commands/addon/
title: Addon Commands
---

Addon commands allow you to enable, disable, and interact with Windower Lua addons.

### lua load
```
lua load <addon>
lua l <addon>
```
Loads a Windower Lua addon.

### lua unload
```
lua unload <addon>
lua u <addon>
```
Unloads the specified addon.

### lua reload
```
lua reload <addon>
lua r <addon>
```
Reloads the specified addon.

### lua command
```
lua command <addon> [...]
lua c <addon> [...]
```
Sends a command with optional arguments to the specified addon.

### lua invoke
```
lua invoke <addon> <function> [...]
lua i <addon> <function> [...]
```
Invoke a function in the specified addon with optional arguments.

### lua memory
```
lua memory
lua m
```
Displays addon memory usage.

### lua list
```
lua list
```
Displays a list of all currently-loaded addons.

### lua unloadall
```
lua unloadall
```
Unloads all currently-loaded addons.

### lua exec
```
lua exec <script>
lua e <script>
```
Executes a Lua script.
