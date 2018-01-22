---
permalink: /addons/linker/
title: Linker
---

Allows opening certain websites and searching them for specified terms through game chat input. For example, searching (any) wiki or FFXIAH for an item, or even doing a Google search are supported.

## Commands

Linker only accepts one command after the call to the addon (with `web`), and that is the name of the site to open. Some of the sites support an optional search term afterwards. These are the default sites that are available to open/search with the addon. Further sites can be added in the `data/settings.xml` file.

| Site | Command | Searchable |
|:---|:---|:---|
| FFXIDB | **db** | Yes |
| FFXIAH | **ah** | Yes |
| BlueGartr wiki | **bg** | Yes |
| GamerEscape wiki | **ge** | Yes |
| FFXI Wikia | **wikia** | Yes |
| FFXIAH forums | **ahf** | No |
| BlueGartr forums | **bgf** | No |
| Official forums | **of** | No |
| Guildwork | **gw** | No |
| Windower | **win** | No |
| Google | **g** | Yes |
| Wolfram\|Alpha | **wa** | Yes |

## Examples

```
web bgf
web db estoq*body
web gw
web wa How much wood would a woodchuck chuck if a woodchuck could chuck wood?
```

## Source
The latest source and information for this addon can be found on [GitHub](https://github.com/Windower/Lua/tree/live/addons/linker).