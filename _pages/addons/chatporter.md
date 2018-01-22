---
permalink: /addons/chatporter/
title: ChatPorter
---

**Author:** Ragnarok.Ikonic

Displays tell, party, and linkshell chat to alternate character and optional textbox.
Also, allows you to reply from either character.

Requires two characters to both be using addon for it to work.
Currently only tested and supporting two characters.

## Basic Commands
`//ChatPorter` and `//cp` are both valid commands.

### help
```
cp help
```

Lists this menu.

### status
```
cp status
```

Shows current configuration.

### textbox
```
cp textbox
```

Shows current textbox configurations.

### colors
```
cp colors
```

Shows possible color codes.

### toggle on/off
```
cp toggle
```

Toggles ChatPorter on/off.

### toggle messages
```
cp [l|p|t] [toggle|displaychat]
```

Toggles linkshell|party|tell messages from showing or not.

### set color
```
cp [l|p|t] color #
```

Sets color of l|p|t text (acceptable values of 1-255).

### toggle textboxes
```
cp [l|p|t|f] show
```

Toggles l|p|t textboxes from showing.

### configure textboxes
```
cp [l|p|t|f] [fontname|fn, lines, fontsize|fs, x, y, alpha|a, red|r, green|g, blue|b] #
```

Sets l|p|t textbox specifics.

### send message
```
[l2|p2|t2 name|r2] message
```

Sends message from second character to linkshell|party|tell|reply.

### send message to ffochat
```
[f#|cp f#] message
```

Sends message from second character to ffochat channel.

### show detailed commands
```
cp help detail
```

Shows detailed ChatPorter commands.

### show textbox commands
```
cp help textbox
```
Shows detailed textbox commands.


## Detailed Commands

### linkshell message
```
l2 message
```

Sends message from second character to linkshell.

### party message
```
p2 message
```

Sends message from second character to party.

### tell message
```
t2 name message
```

Sends message from second character to name in tell.

### reply message
```
r2 message
```

Sends reply message from second character.

### ffochat message
```
f# message
```

Sends message from second character to FFOChat channel #. Works for 1-5.

```
cp f# message
```

Same as f#, but for any #.


## Textbox Commands

### toggle messages
```
cp [l|p|t|f] [toggle|displaychat]
```

Toggles linkshell|party|tell|ffochat messages from showing or not.

### set colors
```
cp [l|p|t] color #
```

Sets color of l|p|t text (acceptable values of 1-255).

### toggle textbox
```
cp [l|p|t|f] show
```

Toggles l|p|t|f textboxes from showing.

### clear textbox
```
cp [l|p|t|f] clear
```

Clears l|p|t|f textbox.

### set lines
```
cp [l|p|t|f] lines #
```

Sets # of lines to show in textbox.

### set font name
```
cp [l|p|t|f] [fontname|fn] *
```

Sets fontname for textbox.

### set font size
```
cp [l|p|t|f] [fontsize|fs] #
```

Sets fontsize for textbox.

### set position
```
cp [l|p|t|f] x #
```

Sets x coordinate for textbox (acceptable values: 10-1014).

```
cp [l|p|t|f] y #
```

Sets y coordinate for textbox (acceptable values: 10-758).

### set transparency
```
cp [l|p|t|f] [alpha|a] #
```

Sets alpha (transparency) for textbox (acceptable values: 1-255; 0=fully transparent, 255=fully visible).

### set text color
```
cp [l|p|t|f] [red|r] #
```

Sets red value for RGB color of text in textbox.

```
cp [l|p|t|f] [green|g] #
```

Sets green value for RGB color of text in textbox.

```
cp [l|p|t|f] [blue|b] #
```

Sets blue value for RGB color of text in textbox.

## Source
The latest source and information for this addon can be found on [GitHub](https://github.com/Windower/Lua/tree/live/addons/chatPorter).