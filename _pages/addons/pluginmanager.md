---
permalink: /addons/pluginmanager/
title: Plugin Manager
---

Addon that allows for the creation of unique plugin/addon profiles for individual characters. It is useful to note that LuaCore does not have access to a list of the currently loaded plugins/addons, so this addon's strategy is to assume that the config file is a complete list of all plugins/addons that may be loaded. It unloads plugins/addons that are not in all profiles when it is first loaded or when you log off a character. Then it reloads the appropriate plugins/addons for the current character when you log in.

This load/unload cycle means that individual init.txt customizations will be lost on plugins/addons that are not loaded on all accounts, unless they also use a config file that goes by character name. Most plugins/addons do at this point, but some still don't.

## Features

* Reads a config file and issues the proper load/unload commands for each profile.


## Commands

The following commands are available with the `pm` alias:

### load
```
pm load
```

Loads the appropriate plugins for your current account. Will not unload plugins that are already loaded.