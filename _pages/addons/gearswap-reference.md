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
|player.wardrobe2|table|Table keyed with the name of equipment pieces.  Keys for both short name and long name exist, if applicable.  Value is a table containing containing item id, count, short name (shortname), and optionally long name (longname).|
|player.wardrobe3|table|Table keyed with the name of equipment pieces.  Keys for both short name and long name exist, if applicable.  Value is a table containing containing item id, count, short name (shortname), and optionally long name (longname).|
|player.wardrobe4|table|Table keyed with the name of equipment pieces.  Keys for both short name and long name exist, if applicable.  Value is a table containing containing item id, count, short name (shortname), and optionally long name (longname).|
|player.indi|table|Table with values "element" (string name), "element_id" (resources ID number), "target" (Ally or Enemy), and "size" (1-4). May not be accurate if GearSwap is reloaded while an Indi spell is active.|

### Player Equipment

|Variable Name|Type|Description|
|:--|:--|:--|
player.equipment.main|string|Item currently equipped in the main slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.sub|string|Item currently equipped in the sub slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.range|string|Item currently equipped in the range slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.ammo|string|Item currently equipped in the ammo slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.head|string|Item currently equipped in the head slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.neck|string|Item currently equipped in the neck slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.left_ear|string|Item currently equipped in the left ear slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.right_ear|string|Item currently equipped in the right ear slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.body|string|Item currently equipped in the body slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.hands|string|Item currently equipped in the hands slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.left_ring|string|Item currently equipped in the left ring slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.right_ring|string|Item currently equipped in the right ring slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.back|string|Item currently equipped in the back slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.waist|string|Item currently equipped in the waist slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.legs|string|Item currently equipped in the legs slot. Uses the exact name found in the "english" or child node field of the resources at the moment.
player.equipment.feet|string|Item currently equipped in the feet slot. Uses the exact name found in the "english" or child node field of the resources at the moment.

### Player Target

|Variable Name|Type|Description|
|:--|:--|:--|
player.target.name|string|The name of the monster currently targetted by the user.
player.target.type|string|'Self', 'PLAYER', 'NPC', or 'MONSTER'. Should be re-keyed to match validtarget.
player.target.hpp|number|Target's current HPP. Varies from 0 to 100.
player.target.distance|number|Number from 0 to 50 indicating the current distance (in yalms) from the target. Does account for vertical distance.
player.target.isallymember|boolean|Boolean that indicates whether your current target is in your alliance.
player.target.is_npc|boolean|Boolean that indicates whether your current target is an NPC or player.
player.target.tp|number|TP of the current target if it is available.
player.target.mpp|number|MPP of the current target if it is available.
player.target.model_size|number|Target's model size.
player.target.mob_type|number|No one seems to know what this value means.
player.target.race|string|String indicating the target's race.
player.target.race_id|number|Number indicating the target's race. IDs correspond to the values outlined in ../addons/libs/races.lua
player.target.status|string|String indicating the target's status.
player.target.status_id|number|Number indicating the user's status. IDs correspond to the values outlined in ../addons/libs/status.lua
player.target.speed|number|Speed of your current target.
player.target.speed_base|number|Base speed of your current target. It is unclear whether this is maximum speed or the amount before enhancement.
player.target.x|number|X position of your current target. (east/west)
player.target.y|number|Y position of your current target. (up/down)
player.target.z|number|Z position of your current target. (north/south)
player.target.heading|number|Value indicating the direction your current target is facing. This is in radians and takes a value of +/- pi with 0 representing facing east.
player.target.index|number|Index value of your current target.
player.target.id|number|ID of your current target.
player.target.claim_id|number|ID of the player with claim over the target (if relevant).

### Player Last Subtarget

|Variable Name|Type|Description|
|:--|:--|:--|
player.last_subtarget.name|string|Name of the last subtarget.
player.last_subtarget.type|string|'Self', 'PLAYER', 'NPC', or 'MONSTER'. Should be re-keyed to match validtarget.
player.last_subtarget.hpp|number|Number from 0 to 100 indicating the last HP% of the spell's target.
player.last_subtarget.distance|number|Number from 0 to 50 indicating the last distance (in yalms) from the subtarget. Does account for vertical distance.
player.last_subtarget.isallymember|boolean|Boolean that indicates whether your last subtarget is in your alliance.
player.last_subtarget.is_npc|boolean|Boolean that indicates whether your last subtarget is an NPC or player.
player.last_subtarget.tp|number|TP of the last subtarget if it is available.
player.last_subtarget.mpp|number|MPP of the last subtarget if it is available.
player.last_subtarget.model_size|number|Last subtarget's model size.
player.last_subtarget.mob_type|number|No one seems to know what this value means.
player.last_subtarget.race|string|String indicating the last subtarget's race.
player.last_subtarget.race_id|number|Number indicating the last subtarget's race. IDs correspond to the values outlined in ../addons/libs/races.lua
player.last_subtarget.status|string|String indicating the last subtarget's status.
player.last_subtarget.status_id|number|Number indicating the user's status. IDs correspond to the values outlined in ../addons/libs/status.lua
player.last_subtarget.speed|number|Speed of your last subtarget.
player.last_subtarget.speed_base|number|Base speed of your last subtarget. It is unclear whether this is maximum speed or the amount before enhancement.
player.last_subtarget.x|number|X position of your last subtarget. (east/west)
player.last_subtarget.y|number|Y position of your last subtarget. (up/down)
player.last_subtarget.z|number|Z position of your last subtarget. (north/south)
player.last_subtarget.heading|number|Value indicating the direction your last subtarget is facing. This is in radians and takes a value of +/- pi with 0 representing facing east.
player.last_subtarget.index|number|Index value of your last subtarget.
player.last_subtarget.id|number|ID of your last subtarget.
player.last_subtarget.claim_id|number|ID of the player with claim over the subtarget (if relevant).

### Player Subtarget

|Variable Name|Type|Description|
|:--|:--|:--|
player.subtarget.name|string|Name of the current subtarget.
player.subtarget.type|string|'Self', 'PLAYER', 'NPC', or 'MONSTER'. Should be re-keyed to match validtarget.
player.subtarget.hpp|number|Number from 0 to 100 indicating the current HP% of the spell's target.
player.subtarget.distance|number|Number from 0 to 50 indicating the current distance (in yalms) from the subtarget. Does account for vertical distance.
player.subtarget.isallymember|boolean|Boolean that indicates whether your current subtarget is in your alliance.
player.subtarget.is_npc|boolean|Boolean that indicates whether your current subtarget is an NPC or player.
player.subtarget.tp|number|TP of the current subtarget if it is available.
player.subtarget.mpp|number|MPP of the current subtarget if it is available.
player.subtarget.model_size|number|Current subtarget's model size.
player.subtarget.mob_type|number|No one seems to know what this value means.
player.subtarget.race|string|String indicating the current subtarget's race.
player.subtarget.race_id|number|Number indicating the current subtarget's race. IDs correspond to the values outlined in ../addons/libs/races.lua
player.subtarget.status|string|String indicating the current subtarget's status.
player.subtarget.status_id|number|Number indicating the user's status. IDs correspond to the values outlined in ../addons/libs/status.lua
player.subtarget.speed|number|Speed of your current subtarget.
player.subtarget.speed_base|number|Base speed of your current subtarget. It is unclear whether this is maximum speed or the amount before enhancement.
player.subtarget.x|number|X position of your current subtarget. (east/west)
player.subtarget.y|number|Y position of your current subtarget. (up/down)
player.subtarget.z|number|Z position of your current subtarget. (north/south)
player.subtarget.heading|number|Value indicating the direction your current subtarget is facing. This is in radians and takes a value of +/- pi with 0 representing facing east.
player.subtarget.index|number|Index value of your current subtarget.
player.subtarget.id|number|ID of your current subtarget.
player.subtarget.claim_id|number|ID of the player with claim over the subtarget (if relevant).

### Player Buff Details

### Pet

|Variable Name|Type|Description|
|:--|:--|:--|
pet.name|string|Name of the user's pet.
pet.isvalid|boolean|Boolean that indicates whether or not the pet exists.
pet.element|string|Fire, Water, Thunder, etc. for Avatars.
pet.hpp|number|Number from 0 to 100 indicating the current HP% of the user's pet.
pet.tp|number|TP of the user's pet.
N/A||I'm not sure what the distinction was here, but I also don't see why we should include two versions of pet TP.
pet.model_size|number|User's pet's model size.
pet.mob_type|number|No one seems to know what this value means.
pet.race_id|number|Number indicating the the user's pet's race. Pets should always have a race_id of 0.
pet.status|string|String indicating the pet's status.
pet.status_id|number|Number indicating the user's status.
pet.speed|number|Speed of the user's pet.
pet.speed_base|number|Base speed of the user's pet. It is unclear whether this is maximum speed or the amount before enhancement.
pet.x|number|X position of the user's pet. (east/west)
pet.y|number|Y position of the user's pet. (up/down)
pet.z|number|Z position of the user's pet. (north/south)
pet.heading|number|Value indicating the direction the user's pet is facing. This is in radians and takes a value of +/- pi with 0 representing facing east.
pet.index|number|Index value of the user's pet.
pet.id|number|ID of the user's pet.
PUP special values:||These values are not valid in get_sets()
pet.hp|number|
pet.mp|number|
pet.mpp|number|
pet.melee|number|
pet.max_melee|number|
pet.ranged|number|
pet.max_ranged|number|
pet.magic|number|
pet.max_magic|number|
pet.str|number|Base automaton STR.
pet.str_add|number|STR added to automaton's base.
pet.dex|number|Base automaton DEX.
pet.dex_add|number|DEX added to automaton's base.
pet.vit|number|Base automaton VIT.
pet.vit_add|number|VIT added to automaton's base.
pet.agi|number|Base automaton AGI.
pet.agi_add|number|AGI added to automaton's base.
pet.int|number|Base automaton INT.
pet.int_add|number|INT added to automaton's base.
pet.mnd|number|Base automaton MND.
pet.mnd_add|number|MND added to automaton's base.
pet.chr|number|Base automaton CHR.
pet.chr_add|number|CHR added to automaton's base.
pet.head|string|Currently equipped head.
pet.frame|string|Currently equipped frame.
pet.attachments|table|Table keyed to the currently equipped attachments. Pet.attachments.strobe would be true if you have stobe equipped.
pet.available_attachments|table|Table keyed to the currently available attachments (owned). Pet.available_attachments.strobe would be true if own strobe.
pet.available_heads|table|Table keyed to the currently available heads (owned).
pet.available_frames|table|Table keyed to the currently available frames (owned).

### Adventuring Fellow

|Variable Name|Type|Description|
|:--|:--|:--|
fellow.name|string|Name of the user's adventuring fellow.
fellow.isvalid|boolean|Boolean that indicates whether or not the fellow exists.
fellow.hpp|number|Number from 0 to 100 indicating the current HP% of the user's adventuring fellow.
fellow.mpp|number|MPP of the user's adventuring fellow if it is available.
fellow.tp|number|TP of the user's adventuring fellow.
fellow.model_size|number|User's adventuring fellow's model size.
fellow.mob_type|number|No one seems to know what this value means.
fellow.race|string|
fellow.race_id|number|Number indicating the the user's adventuring fellow's race. Pets should always have a race_id of 0.
fellow.status|string|String indicating the fellow's status.
fellow.status_id|number|Number indicating the user's adventuring fellow's status. IDs correspond to the values outlined in ../addons/libs/status.lua
fellow.speed|number|Speed of the user's adventuring fellow.
fellow.speed_base|number|Base speed of the user's adventuring fellow. It is unclear whether this is maximum speed or the amount before enhancement.
fellow.x|number|X position of the user's adventuring fellow. (east/west)
fellow.y|number|Y position of the user's adventuring fellow. (up/down)
fellow.z|number|Z position of the user's adventuring fellow. (north/south)
fellow.heading|number|Value indicating the direction the user's adventuring fellow is facing. This is in radians and takes a value of +/- pi with 0 representing facing east.
fellow.index|number|Index value of the user's adventuring fellow.
fellow.id|number|ID of the user's adventuring fellow.

### Alliance and Party

|Variable Name|Type|Description|
|:--|:--|:--|
party.count|number|Number of people in your current party.
alliance.count|number|Number of people in your current alliance.
alliance[alliance_position][party_position]|table|Information on an alliance member. Alliance position is a number from 1-3 and indicates which party in the alliance you are referencing. Your party is 1.
party[party_position]|table|Mob Array of a party member. Party position is a number from 1-6 and indicates which member of the party you are referencing. You are 1.
alliance[alliance_position][party_position].mob|table|Contains all of the information above (position, distance, etc.) if the given party member has loaded since you zoned. Information may not be accurate if they are further than 50 yalms. This table is similar to the above information for targets.
party[party_position].mob|table|Contains all of the information above (position, distance, etc.) if the given party member has loaded since you zoned. Information may not be accurate if they are further than 50 yalms. This table is similar to the above information for targets.

### World

|Variable Name|Type|Description|
|:--|:--|:--|
world.area|string|Name of the current zone - the same as world.zone
world.time|number|Current game time in hours.minutes format. Currently takes the floating point value, which is not precise.
world.day|string|Name of the current day.
world.day_element|string|Element of the current day.
world.weather_id|number|Game's weather ID code, per ../addons/libs/weather.lua
world.weather|string|Current weather's name.
world.weather_element|string|Current weather's element.
world.moon|string|The current moon phase.
world.moon_pct|number|Current moon percentage. Ranges from 0 to 100 and changes on day change.
world.zone|string|Zone name - the same as world.area.
world.zone_id|number|ID of the zone. These can be seen in the URLs of ffxidb.
world.logged_in|boolean|Boolean that represents whether or not you are logged in. This should always be true for GearSwap events.

### Active Buffs

|Variable Name|Type|Description|
|:--|:--|:--|
buffactive|table|Stores the number of a given buff that is active. Keys are the buff names (case insensitive), so buffactive['light arts'] would be nil or 1 depending whether or not you have light arts up.
