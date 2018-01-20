---
permalink: /addons/autoinvite/
title: AutoInvite
---

Automatically invites players when sent a tell with a specified keyword.

**Author:** R3G1STRY [R3G1STRY@ffxiah](http://www.ffxiah.com/user/R3G1STRY)

## Commands
All in-game commands are prefixed with `//ai` or `//autoinvite`

|Command                       |Argument               |Description|
|**whitelist** / **blacklist**|*add* *player*   |Adds a player to the whitelist or blacklist.|
|                           |*remove* *player*|Removes a player from the whitelist or blacklist.|
|**keyword**                   |*add* *word*     |Adds a word to the keyword list where "word" is specified.|
|                           |*remove* *word*  |Removes a word from the keyword list where "word" is specified.|
|**tellback**                  |*on*/*off*         |Toggles tellback mode on or off, if no status specified then it will print current status.|
|                              |*status*             |Will print status of current option. Includes all commands listed above.|

If tellback mode is turned on and you are unable to send an invite to the player who sent you a tell with the 
specified keyword, you will automatically send them a tell back saying that you were unable to invite them. 