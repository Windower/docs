---
permalink: /addons/gearswap/reference/
title: GearSwap User Script Reference
---

## User Event Functions

|Function|Description|
|:---|:---|
|get_sets()|Called once on load. Used to define variables, and specifically "sets"|
|pretarget(spell)|Passes the resources line for the spell with a few modifications. Occurs when the command text hits the outgoing text buffer. Does not occur for actions that bypass the outgoing text buffer (like using items from the menu). cancel_spell() and change_target() are implemented in this phase.|
|precast(spell,position)|Passes the resources line for the spell with a few modifications. Occurs immediately before the outgoing action packet is injected. cancel_spell(), verify_equip(), force_send(), and cast_delay() are implemented in this phase. Does not occur for items that bypass the outgoing text buffer (like using items from the menu).|
|midcast(spell)|Passes the resources line for the spell with a few modifications. Occurs immediately after the outgoing action packet is injected. Does not occur for items that bypass the outgoing text buffer (like using items from the menu).|
|aftercast(spell)|Passes the resources line for the spell with a few modifications. Occurs when the "result" action packet is received from the server, or an interruption of some kind is detected.|
|status_change(new,old)|Passes the new and old statuses.|
|pet_change(pet,gain)|Passes in the "pet" table and a boolean indicating whether the pet is being summoned (true) or dismissed (false). Order is not guaranteed relative to aftercast for JAs like Release or Leave.|
|pet_midcast(spell)|Passes the resources line for the spell with a few modifications. Occurs when the "readies" action packet is received for your pet.|
|pet_aftercast(spell)|Passes the resources line for the spell with a few modifications. Occurs when the "result" action packet is received for your pet.|
|pet_status_change(new,old)|Passes the new and old statuses of your pet.|
|filtered_action(spell)|Passes the resources line for the spell with a few modifications. Occurs when the player attempts to cast a spell that they are unable to cast. Cancel_spell() is implemented in this phase.|
|sub_job_change(new,old)|Passes the three letter abbreviations for your new subjob and your old subjob.|
|buff_change(name,gain,buff_details)|Passes the buff name and a boolean that indicates whether it was gained (true) or lost (false), as well as the  associated player.buff_details table. Does not fire if your buff bar does not change. For instance, overwriting a March with another March will not trigger this event.|
|buff_refresh(name,buff_details)|Passes the buff name and the associated player.buff_details table for the buff. Fires when a status effect is overwritten.|
|party_buff_change(member table,name,gain,res.buffs[id])|Passes the table of the party member who gained or lost the buff, the buff name, a boolean that indicates whether it was gained (true) or lost (false), and the resource table for the buff. Does not fire if your buff bar does not change. For instance, overwriting a March with another March will not trigger this event.|
|indi_change(indi_table,gain)|Passes the indi effect table when an indi aura changes and a boolean that indicates whether it was gained or lost.|
|self_command(command)|Passes any self commands, which are triggered by `//gs c <command>` (or `/console gs c <command>` in macros)|
|file_unload(file_name)|Called once on file/addon unload. This is passed the new short job name.|

## GearSwap Functions

### set_combine

```lua
set_combine(set1, set2, ...)
```

Combines an arbitrary number of sets and returns the resulting set, giving right-most sets slot priority.

### equip

```lua
equip(set1, set2, set3, ...)
```

Builds a set to be equipped. Slot priority is given to the last set (collapses the sets from right to left). If two equip commands are used, the latter one has slot priority over the first.

### change_target

```lua
change_target(new target)
```

Changes the target to whatever value is passed. It can be a name or something like `<t>`, but be aware that there will be no correction done on it. Valid only in pretarget.


## Variables
### Spell

|Variable Name|Type|Description|
|:--|:--|:--|
|spell.name|string|Spell name in the language of your client|
|spell.prefix|string|Default prefix for a given spell. Obtained from resources.|
|spell.targets|table|Table of Booleans keyed to 'Self', 'Player', 'Party', 'Ally', 'NPC', 'Enemy', and 'Corpse'. True means that it's valid for that target.|
|spell.type|string|String indicating the type of spell without spaces. So "JobAbility" for Provoke, "WhiteMagic" for Cure, "BardSong" for Marches, etc. Obtained from resources.|
|spell.skill|string|String form of the skill a spell is based on, or "Ability" for abilities. So "Healing Magic" for Cure, "Ability" for Provoke, "Singing" for Marches, etc. Obtained from resources.|
|spell.mp_cost|number|Number representing the base MP cost of a spell. Obtained from resources.|
|spell.tp_cost|number|Number representing the base TP cost of a spell. Obtained from resources.|
|spell.element|string|String form of the element name. Obtained from resources.|
|spell.range|number|Number representing the spell's maximum range.|
|spell.recast|number|Number representing the base recast time of the spell. Obtained from resources.|
|spell.recast_id|number|Number representing the spell's timer ID, which can be used with the LuaCore get_spell_recasts() function to determine the current spell recast.|
|spell.cast_time|number|Number representing the base cast time of the spell. Obtained from resources.|
|spell.wsA|string|String indicating the primary WS property. Blank string if it doesn't exist. Obtained from resources.|
|spell.wsB|string|String indicating the secondary WS property. Blank string if it doesn't exist. Obtained from resources.|
|spell.wsC|string|String indicating the tertiary WS property. Blank string if it doesn't exist. Obtained from resources.|
|spell.interrupted|boolean|True if the spell (or job ability) failed to execute. Only valid in the aftercast/pet_aftercast phase.|

### Spell Target

|Variable Name|Type|Description|
|:--|:--|:--|
|spell.target.name|string|Name of the spell's target.|
|spell.target.raw|string|Unaltered name of the spell's target. (can be <t>, <bt>, etc.)|
|spell.target.type|string|'SELF', 'PLAYER', 'NPC', or 'MONSTER'. Should be re-keyed to match validtarget.|
|spell.target.hpp|number|Number from 0 to 100 indicating the current HP% of the spell's target.|
|spell.target.distance|number|Number from 0 to 50 indicating the current distance (in yalms) from the spell's target. Does account for vertical distance.|
|spell.target.isallymember|boolean|Boolean indicating whether or not the spell's target is an alliance member.|
|spell.target.is_npc|boolean|Boolean that indicates whether your current spell target is an NPC or player.|
|spell.target.tp|number|TP of the current spell target if it is available.|
|spell.target.mpp|number|MPP of the current spell target if it is available.|
|spell.target.model_size|number|Spell target's model size.|
|spell.target.mob_type|number|No one seems to know what this value means.|
|spell.target.race|string|String indicating the spell target's race.|
|spell.target.race_id|number|Number indicating the spell target's race. IDs correspond to the values outlined in ../addons/libs/races.lua|
|spell.target.status|string|String indicating the spell target's status.|
|spell.target.status_id|number|Number indicating the user's status. IDs correspond to the values outlined in ../addons/libs/status.lua|
|spell.target.speed|number|Speed of your current spell target.|
|spell.target.speed_base|number|Base speed of your current spell target. It is unclear whether this is maximum speed or the amount before enhancement.|
|spell.target.x|number|X position of your current spell target. (east/west)|
|spell.target.y|number|Y position of your current spell target. (up/down)|
|spell.target.z|number|Z position of your current spell target. (north/south)|
|spell.target.facing|number|Value indicating the direction your current spell target is facing. This is in radians and takes a value of +/- pi with 0 representing facing east.|
|spell.target.index|number|Index value of your current spell target.|
|spell.target.id|number|ID of your current spell target.|
|spell.target.claim_id|number|ID of the player with claim over the spell target (if relevant).|

### Player

|Variable Name|Type|Description|
|:--|:--|:--|
|player.name|string|User's name.|
|player.mob_name|string|User's name from the monster array. This will be different from player.name when you are a monipulator.|
|player.status|string|User's current status.|
|player.hp|number|User's current HP.|
|player.mp|number|User's current MP.|
|player.tp|number|User's current TP.|
|player.max_hp|number|User's current max HP.|
|player.max_mp|number|User's current max MP.|
|player.hpp|number|User's current HPP. Varies from 0 to 100.|
|player.mpp|number|User's current MPP. Varies from 0 to 100.|
|player.main_job_id|number|User's current main job ID. IDs correspond to jobs as outlined in ../addons/libs/jobs.lua|
|player.main_job|string|User's current shortened main job code. Uses "MON" as the code for monipulator. Value determines which Lua file is loaded.|
|player.main_job_full|string|User's current full main job name.|
|player.main_job_level|number|User's current main job level. Varies from 1 to 99.|
|player.sub_job_id|number|User's current sub job ID. IDs correspond to jobs as outlined in ../addons/libs/jobs.lua|
|player.sub_job|string|User's current shortened sub job code.|
|player.sub_job_full|string|User's current full sub job name.|
|player.sub_job_level|number|User's current sub job level. Varies from 1 to 49.|
|player.isallymember|boolean|Boolean that indicates whether you are in an alliance.|
|player.in_combat|boolean|Boolean that indicates whether or not battle music is playing.|
|player.skills.<skill name>|number|User's current skill level. <skill name> can be replaced with any of the skills found in ../addons/libs/skills.lua|
|player.jobs.<shortened job code>|number|User's current maximum job levels. <shortened job code> can be replaced with any of the codes found in ../addons/libs/jobs.lua|
|player.linkshell|string|Name of the user's current linkshell.|
|player.linkshell_rank|number|User's current linkshell rank. Unsure how this maps onto Shellholder, Sackholder, Member, Broken, (and potentially unopened).|
|player.linkshell_slot|number|Inventory slot of the user's currently equipped linkshell.|
|player.nation|number|Nation of player's current allegiance. Unsure how this maps onto San d'Oria, Bastok, and Windurst.|
|player.id|number|User's ID. This does not change within an FFXI session, but can change when you log out and back in.|
|player.index|number|User's index. This can change when you zone.|
|player.target_index|number|Index value of the user's target.|
|player.model_size|number|User's model size.|
|player.mob_type|number|No one seems to know what this value means.|
|player.race|string|String indicating the user's race.|
|player.race_id|number|Number indicating the user's race. IDs correspond to the values outlined in ../addons/libs/races.lua|
|player.species|table|Resources line for the player's current species. Only valid for monipulators.|
|player.status_id|number|Number indicating the user's status. IDs correspond to the values outlined in ../addons/libs/status.lua|
|player.speed|number|User's current speed.|
|player.speed_base|number|User's base speed. It is unclear whether this is maximum speed or the amount before enhancement.|
|player.x|number|User's X position. (east/west)|
|player.y|number|User's Y position. (up/down)|
|player.z|number|User's Z position. (north/south)|
|player.facing|number|Value indicating the direction your current target is facing. This is in radians and takes a value of +/- pi with 0 representing facing east.|
|player.inventory|table|Table keyed with the name of equipment pieces.  Keys for both short name and long name exist, if applicable.  Value is a table containing containing item id, count, short name (shortname), and optionally long name (longname).|
|player.sack|table|Table keyed with the name of equipment pieces.  Keys for both short name and long name exist, if applicable.  Value is a table containing containing item id, count, short name (shortname), and optionally long name (longname).|
|player.satchel|table|Table keyed with the name of equipment pieces.  Keys for both short name and long name exist, if applicable.  Value is a table containing containing item id, count, short name (shortname), and optionally long name (longname).|
|player.case|table|Table keyed with the name of equipment pieces.  Keys for both short name and long name exist, if applicable.  Value is a table containing containing item id, count, short name (shortname), and optionally long name (longname).|
|player.wardrobe|table|Table keyed with the name of equipment pieces.  Keys for both short name and long name exist, if applicable.  Value is a table containing containing item id, count, short name (shortname), and optionally long name (longname).|
|player.indi|table|Table with values "element" (string name), "element_id" (resources ID number), "target" (Ally or Enemy), and "size" (1-4). May not be accurate if GearSwap is reloaded while an Indi spell is active.|
