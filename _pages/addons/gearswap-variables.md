---
permalink: /addons/gearswap/variables/
title: GearSwap Variables
---

### User Events
|Variable Name|Type|Description|
|:---|:---|:---|
|get_sets()|function|Called once on load. Used to define variables, and specifically "sets"|
|pretarget(spell)|function|Passes the resources line for the spell with a few modifications. Occurs when the command text hits the outgoing text buffer. Does not occur for actions that bypass the outgoing text buffer (like using items from the menu). cancel_spell() and change_target() are implemented in this phase.|
|precast(spell,position)|function|Passes the resources line for the spell with a few modifications. Occurs immediately before the outgoing action packet is injected. cancel_spell(), verify_equip(), force_send(), and cast_delay() are implemented in this phase. Does not occur for items that bypass the outgoing text buffer (like using items from the menu).|
|midcast(spell)|function|Passes the resources line for the spell with a few modifications. Occurs immediately after the outgoing action packet is injected. Does not occur for items that bypass the outgoing text buffer (like using items from the menu).|
|aftercast(spell)|function|Passes the resources line for the spell with a few modifications. Occurs when the "result" action packet is received from the server, or an interruption of some kind is detected.|
|status_change(new,old)|function|Passes the new and old statuses.|
|pet_change(pet,gain)|function|Passes in the "pet" table and a boolean indicating whether the pet is being summoned (true) or dismissed (false). Order is not guaranteed relative to aftercast for JAs like Release or Leave.|
|pet_midcast(spell)|function|Passes the resources line for the spell with a few modifications. Occurs when the "readies" action packet is received for your pet.|
|pet_aftercast(spell)|function|Passes the resources line for the spell with a few modifications. Occurs when the "result" action packet is received for your pet.|
|pet_status_change(new,old)|function|Passes the new and old statuses of your pet.|
|filtered_action(spell)|function|Passes the resources line for the spell with a few modifications. Occurs when the player attempts to cast a spell that they are unable to cast. Cancel_spell() is implemented in this phase.|
|sub_job_change(new,old)|function|Passes the three letter abbreviations for your new subjob and your old subjob.|
|buff_change(name,gain,buff_details)|function|Passes the buff name and a boolean that indicates whether it was gained (true) or lost (false), as well as the  associated player.buff_details table. Does not fire if your buff bar does not change. For instance, overwriting a March with another March will not trigger this event.|
|buff_refresh(name,buff_details)|function|Passes the buff name and the associated player.buff_details table for the buff. Fires when a status effect is overwritten.|
|party_buff_change(member table,name,gain,res.buffs[id])|function|Passes the table of the party member who gained or lost the buff, the buff name, a boolean that indicates whether it was gained (true) or lost (false), and the resource table for the buff. Does not fire if your buff bar does not change. For instance, overwriting a March with another March will not trigger this event.|
|indi_change(indi_table,gain)|function|Passes the indi effect table when an indi aura changes and a boolean that indicates whether it was gained or lost.|
|self_command(command)|function|Passes any self commands, which are triggered by "//gs c <command>" (or "/console gs c <command>" in macros)|
|file_unload(file_name)|function|Called once on file/addon unload. This is passed the new short job name.|
