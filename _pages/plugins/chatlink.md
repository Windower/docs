---
permalink: /plugins/chatlink/
title: ChatLink
---

Allows both copying and opening links posted in the chatlog directly from within FFXI. The opening feature is known to crash the game when older default browsers are used, but the copying feature always works.

Every time a link appears in the chatlog while the plugin is loaded, ChatLink will prepend a number to it. For example, "http://google.com" would become "[5]http://google.com". This would associate the number 5 with that URL. That's the number you will need to copy or open it. See below for commands.

**Note:** There is no way to open links that have been posted before the plugin was loaded.
{: .notice--info}

## Commands

There are only two commands for ChatLink:

```
clink [open|copy] <number>
```

`open` opens the URL associated with `number`, while `copy` copies it and can be used with **Ctrl + V**.
