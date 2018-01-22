---
permalink: /addons/send/
title: Send
---

Sends commands between windower instances using IPC.

## Features

If you wish to change the color of the text added from [aecho](../aecho/). Or any plugin that includes send `<player>`, etc. Near the end of the `send.lua` you will find the following:

```lua
windower.add_to_chat(55,msg:sub(5))
```

You may change the 55 to any number from 1 to 255 to get a (not always) different color. 

## Commands

```
send [playername, @others, @all, @job] [command]
```

## Notes

Quotes are not handled well.  Try using the [shortcuts](../shortcuts/) addon.

Instead of this:
```
//send mule /ma \"Cure II\" Main
```

Use this:
```
//send mule cure2 Main
```

Or use single quotes like this:
```
//send mule /ma 'Cure II' Main
```

## Source
The latest source and information for this addon can be found on [GitHub](https://github.com/Windower/Lua/tree/live/addons/send).