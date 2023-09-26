const e=`---
title: '1.5.32 Release'
description: 'Global pickpocket menu swap, Low Detail auto-reloading, screenshot to clipboard, and de-duplicated stacked fishing spots'
author: Jordan
---

The [Menu Entry Swapper plugin](https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper) can
now swap the "Pickpocket" menu option with the "Talk-to" menu option for all NPCs, not just H.A.M
members. (With the exception of NPCs who can be blackjacked)

The [Low Detail plugin](https://github.com/runelite/runelite/wiki/Low-Detail) will now reload your
current scene when toggled on or off to apply the changes immediately without requiring a re-log.

The [Screenshot plugin's](https://github.com/runelite/runelite/wiki/Screenshot) _Upload_ setting
now allows you to optionally copy the screenshot image to your clipboard when taken. Thanks to
[@Alexsuperfly](https://github.com/Alexsuperfly) for this contribution.

The [Fishing plugin](https://github.com/runelite/runelite/wiki/Fishing) no longer draws duplicate
sprites for stacked fishing spots of the same type.

There are also several smaller improvements and bug fixes, including:

- The [Boosts Information plugin](https://github.com/runelite/runelite/wiki/Boosts-Information) can
  now toggle displaying combat/non-combat/both boosts
- Examining items found in the seed box will now trigger the [Examine
  plugin](https://github.com/runelite/runelite/wiki/Examine)
- The overlay renderer now shows drag outlines at their proper locations again
- The [Slayer plugin](https://github.com/runelite/runelite/wiki/Slayer) correctly recognizes Lizard
  and Vampyre tasks
- The [Clue Scroll plugin](https://github.com/runelite/runelite/wiki/Clue-Scroll) saw multiple
  fixes, correcting some STASH unit locations, fixing a Song of the Elves-related clue, fixing some
  clue items showing no names, and added some item variants to some item sets
- The text of a Western Provinces diary step has been updated in the [Diary Requirements
  plugin](https://github.com/runelite/runelite/wiki/Diary-Requirements) after a change since the
  release of the Song of the Elves quest
- The white pixels which appeared at the edges of game objects for some players while using MSAA
  with the [GPU plugin](https://github.com/runelite/runelite/wiki/GPU) have been exterminated
- The [Death Indicator plugin](https://github.com/runelite/runelite/wiki/Death-Indicator) will
  correctly recognize when players die when respawning in Prifddinas
- Braindeath Island now has a [skybox](https://github.com/runelite/runelite/wiki/Skybox) color
- Corrections have been made in the [Items Kept on Death
  plugin](https://github.com/runelite/runelite/wiki/Items-Kept-on-Death) to show correct values of
  Avernic defenders and Salve amulet (ei)s.

Enjoy!

\\- Jordan

### New commits

We had 12 contributors this release!

\`\`\`
Adam (24):
      Revert "Merge pull request #9354 from Toocanzs/centroid-fix"
      xptracker: fix calculating xp offset from offline xp
      api: add accessor for GameState state
      api: add setGameState
      low memory plugin: run changeMemoryMode on game thread
      overlay renderer: fix drawing overlay drag bounds
      authfilter: cache sessions
      loot tracker: batch loot submissions
      ui: center fatal error dialog on screen
      rs: validate loaded config
      slayer plugin: update desert lizards task to lizards
      low memory plugin: set low memory mode after startup
      gpu plugin: require high detail textures
      fishing plugin: deduplicate spot overlay color logic
      fishing plugin: don't render the same fishing spot twice
      fishingspot: don't expose spots map
      api: remove unused Query class
      menu entry swapper: expand talk-to/pickpocket swap to non-blackjack npcs
      Fix some typos
      config manager: overwrite defaults when unable to unmarshall values
      screenshot plugin: add screenshot to clipboard
      runecraft plugin: check config group before updating config
      examine plugin: combine identical widget cases
      examine plugin: add seed box

Alexsuperfly (5):
      slayer plugin: fix unknown tasks not decrementing counter
      slayer: correct Vampyre task spelling
      slayer: add additional target names to Vampyre task
      clues: fix port sarim easy stash plane location
      clues: fix wizards tower bridge plane location

Daniel Bolink (1):
      Update Western Provinces Diary Step after SOTE update

Hydrox6 (8):
      clues: correct "Has no one told you it is rude to ask a lady her age?"
      clues: Fix Bryophyta's staff having no name
      clues: fix names for skilling outfits
      gpu: fix MSAA white pixels
      agility: fix objectid for Arandar lvl 85 obstacle
      runecraft: fix layer of AbyssOverlay
      clues: fix abyssal head recognition
      death indicator: add prifddinas

Jordan Atwood (1):
      slayerplugin: Fix first slayer kill not being registered

Quasindro (1):
      skybox: add Braindeath Island

Ron Young (1):
      ChatboxItemSearch: fix null name check

TheStonedTurtle (2):
      itemskeptondeath: fix avernic defender price
      ItemsKeptOnDeath - Add missing salve (ei) price offset

Thomas Cedeno (1):
      clues: add agility and max capes to graceful set

chestnut1693 (1):
      boosts: add config to not display combat boosts

dekvall (4):
      Add Nullable to Actor::getName
      Fix NPE in groundmarker plugin
      Add Nullable to Client::getLocalPlayer
      Add Nullable to widget dragging methods

xDemoN (4):
      item mapping: add bird nest variations
      timers: update imbued heart to reset on death
      agility: add missing ladder to prifddinas
      emote: change "stomp" to "stamp"
\`\`\`
`;export{e as default};
