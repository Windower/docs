---
permalink: /commands/alias/
title: Alias Commands
---

### alias
```
alias <alias> <command>
```
Creates a pseudo console command that can be typed into the console or used in a script or key bind.

For example: `alias blah wait 5;echo hello` creates the `blah` pseudo-command.
### unalias
```
unalias <alias>
```
Clears a defined alias.

For example: `unalias blah` removes the above alias that was created.

### clearaliases
```
clearaliases
```
Clears all currently-defined aliases.

### listaliases
```
listaliases
```
Lists all currently-defined aliases.

**Warning:** This command may fail if you have more than 40 aliases.
{: .notice--danger}
