---
permalink: /addons/answeringmachine/
title: AnsweringMachine
---

Addon that stores received tells and can reply with an away message.

## Features

* Stores received tells.
* Allows you to set an away message for non-GMs.

## Commands

The following commands are available with the `am` alias:

### list
```
am list
```

Lists the number of messages recorded from each person that has sent you a tell.

### play
```
am play
```

Plays available messages. Will default to playing all messages if a name is not provided.

### clear
```
am play
```

Clears available messages. Will default to clearing all messages if a name is not provided.

### msg
```
am msg
```

Sets your away message, which will be sent to non-GMs the first time they send you a tell after loading the plugin or clearing messages from them.

### help
```
am help
```

Shows this menu.

## Source
The latest source and information for this addon can be found on [GitHub](https://github.com/Windower/Lua/tree/live/addons/answeringmachine).