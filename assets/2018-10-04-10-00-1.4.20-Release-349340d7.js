const e=`---
title: '1.4.20 Release'
description: 'Currently-hovered tile highlight, Control-locked zoom, and removed Runecrafting pouch counter'
author: Jordan
---

The Tile Indicators plugin can now show your currently hovered tile. Thanks to
[@Deathbeam](https://github.com/deathbeam) for this feature.

![Currently-hovered tile indicator](/img/blog/1.4.20-Release/tile-indicator-highlighted-tile.gif)

The Camera Zoom plugin can now require the Control key be held down to enable zooming via the scroll
wheel. Thanks to [@MagicfTail](https://github.com/MagicfTail) for this feature.

The world map overlay has had its fairy ring icon changed to be easier on the eyes.

![Cleaner fairy ring icon](/img/blog/1.4.20-Release/fairy-ring-icon-change.png)

The Runecrafting plugin has had its pouch counter removed as the data we relied on to display that
information was removed in last week's Runecrafting pouch emptying and filling update.

There are also several smaller improvements and bug fixes, including:

- An option has been added to hide XP globes and/or XP trackers for skills which have reached level
  99
- A stamina timer will be started when you are the recipient of a dose via the Boost Potion Share
  spell
- Various clues have had their item requirements fixed
- The idle notifier will notify you when you've stopped collecting sand
- The friends list counter now correctly displays the maximum friends list capacity for members
- Obstacle highlighting has been added for the Meiyerditch entrance, the Weiss entrance, and
  the McGrubor's Woods railing
- The raids scouting overlay is now hidden when on Olm's floor
- The raids ending message default color has been improved
- Items examined within the clue scroll reward panel or smithing interface-as well as item
  placeholders within the bank-will now display their price information
- Tars, leather shields, and super antifire potions have been added to the skill calculator
- The cannon spot for ice trolls has been improved via a slight adjustment
- Timers which no longer apply will now clear themselves upon death
- Map clues will now indicate in the clue overlay if you are missing a spade in your inventory
- A Karamja diary requirement has been corrected
- The screenshot plugin can now take screenshots upon player death
- The Salty Peter clue scroll now gives you a hint on his general direction (he may still wander
  outside of view of that spot, so be sure to look out for him!)
- The slayer plugin now displays icons for all missing wilderness task monsters
- Wilderness slayer updates from the slayer gem no longer interfere with the plugin highlighting
  monsters
- The 2010 interface style has had some icon locations adjusted to be better aligned
- Chat commands now have more descriptive tooltips within the settings menu, indicating the exact
  text needed to use the command

Enjoy!

\\- Jordan

### New commits

We had 17 contributors this release!

\`\`\`
Andre (2):
      Truncate NPC name instead of subtitle in Loot Tracker (#5740)
      Add option to hide both globes and xp tracker after 99 (#5741)

Chris Hranj (1):
      Update stamina potion timer to include shared stamina potions (#5750)

Christopher O'Hara (2):
      Fix amulet of glory item requirement for elite clue scroll
      Add sand collection to idle notifier

Forsco (1):
      Update membership days VarPlayer id

Jordan Atwood (6):
      player indicators plugin: Use ColorUtil functions
      wasd camera plugin: Use ColorUtil functions
      corp plugin: Fix settings description typo
      world map plugin: Update fairy ring icon
      agility plugin: Highlight Meiyerditch entrance obstacles
      Revert "Truncate NPC name instead of subtitle in Loot Tracker (#5740)"

Kamiel (2):
      Add default cc info chatcolor and change cc info highlight to red
      Make raids scout overlay not show at Olm (#5734)

Magic fTail (3):
      Add option to require control to be held for zooming
      Add support for examine price to clue scroll reward
      Rename zoom handling script

Max Weber (2):
      runelite-client: Don't duplicate chatbox input when widget ids are wrong
      cluescrolls: add bullroarer to items list for bullroarer clue

Robbie McLeod (1):
      Add Tar to the Herblore Skill calculator

Ron Young (1):
      widget: expose drag methods (#5735)

Tomas Slusny (15):
      Properly name Perspective methods, remove unused
      Add mappings for checkClick, mouseCanvasHoverX/Y
      Add currently hovered tile to TileIndicators
      Remove pouch counter from Runecraft plugin
      Remove dupe strings from AnagramClue
      Remove dupe strings from CipherClue
      Make sprite and widget sprite overrides more flexible
      Make interface styles not replace entire override map
      Cleanup GE plugin code
      Make examine plugin work with placeholders
      Make examine work for smithing interface
      Export widget onLoadListener
      Fix BlastFurnace access levels and subscriber names
      Fix screenshot plugin access levels
      Fix special counter access levels and subscriber names

bowlcutmullet (1):
      Use more optimal location for Jatizso Ice Trolls cannon spot (#5715)

johnhamilto (1):
      Remove timers on local player death

raiyni (1):
      Require spade on map dig clues

rbbi (1):
      Add leather shields to the crafting calculator (#4331)

robinwithes (9):
      Add mcgrubor woods railing to agility plugin (#5705)
      Add super antifire to skill calculator (#5708)
      Fix achievement diary Brimhaven Dungeon requirement (#5706)
      Add option to take screenshot on local player death (#5711)
      Add location for Salty Peter clue scroll (#5730)
      Add chaos druids, bandits and magic axes to slayer plugin (#5759)
      Added ALL remaining missing wilderness tasks (#5760)
      Add support for parsing Wilderness assignment updates to slayer plugin (#5757)
      Add missing Weiss agility obstacles (#5785)

trimbe (3):
      Update location for terrorchick cage hot/cold
      Adjust tab icon offsets for 2010 interface style
      Chat Commands: Add hints to config description (#5747)
\`\`\`
`;export{e as default};
