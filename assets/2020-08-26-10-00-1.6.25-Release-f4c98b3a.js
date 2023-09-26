const n=`---
title: '1.6.24 & 1.6.25 Release'
description: 'Zalcano plugin, inventory tag underlines, GPU anisotropic filtering, potion duration tooltips, and mining session overlay'
author: Jordan
---

We have added a [Zalcano plugin](https://github.com/runelite/runelite/wiki/Zalcano) which offers
several useful arrow highlights and overlays. Thanks to [@Hexagon](https://github.com/hex-agon) for
this contribution!

![Weakened Zalcano with a hint arrow above her](/img/blog/1.6.25-Release/zalcano-hint-arrow.png)

The [Inventory Tags plugin](https://github.com/runelite/runelite/wiki/Inventory-Tags) can now
draw an underline as a more subtle option for your tagged items. Thanks to
[@jualkaup](https://github.com/jualkaup) for this feature.

![Inventory tag underlines](/img/blog/1.6.25-Release/inventory-tag-underline.png)

We have added an anisotropic filtering setting to the [GPU
plugin](https://github.com/runelite/runelite/wiki/GPU) that makes textures appear smoother and have
fewer "jagged" and sharp pixels, especially when zoomed out, as shown in the comparison table below.
Thanks to [@pacf531](https://github.com/pacf531) and [@Toocanzs](https://github.com/Toocanzs) for
making this feature happen.

|                                   GPU anisotropic filtering enabled                                    |                                    GPU anisotropic filtering disabled                                    |
| :----------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
| ![GPU plugin with anisotropic filtering enabled](/img/blog/1.6.25-Release/gpu-anisotropic-enabled.mp4) | ![GPU plugin with anisotropic filtering disabled](/img/blog/1.6.25-Release/gpu-anisotropic-disabled.mp4) |

The [Item Stats plugin](https://github.com/runelite/runelite/wiki/Item-Stats) now displays a tooltip
for duration effects granted by antipoison potions, anti-fire potions, and the like. Thanks to
[@MMagicala](https://github.com/MMagicala) for this enhancement.

![Potion duration tooltips](/img/blog/1.6.25-Release/potion-duration-tooltips.png)

The [Mining plugin](https://github.com/runelite/runelite/wiki/Mining) now displays a session overlay
that counts ores mined per hour and throughout the session, along with an indicator of whether you
are currently mining. Thanks to [@JZomerlei](https://github.com/JZomerlei) for this addition.

![Mining session overlay while actively mining](/img/blog/1.6.25-Release/mining-session.png)
![Mining session overlay when not actively mining](/img/blog/1.6.25-Release/mining-session-not-mining.png)

There are also several smaller improvements and bug fixes, including:

- The [Timers plugin](https://github.com/runelite/runelite/wiki/Timers) now shows an infobox with
  your elapsed Fight Cave or Inferno time
- Interacting with [Bank Tag
  tabs](https://github.com/runelite/runelite/wiki/Bank-Tags#using-tag-tabs) no longer clears your
  active bank search
- The [Inventory Grid plugin](https://github.com/runelite/runelite/wiki/Inventory-Grid) now operates
  while viewing your bank
- An issue causing Discord party invites to fail has been fixed
- Tooltip labels have been added to clue scroll and minigame entries in the [HiScore
  plugin](https://github.com/runelite/runelite/wiki/HiScore)
- The [Agility plugin](https://github.com/runelite/runelite/wiki/Agility) now estimates your laps
  per hour more accurately
- Some Godwars Dungeon obstacles and the Prifddinas portals are now highlighted properly by the
  [Agility plugin](https://github.com/runelite/runelite/wiki/Agility)
- The [Clue Scroll plugin](https://github.com/runelite/runelite/wiki/Clue-Scroll) now shows a
  location description for map clues
- The [Cannon plugin](https://github.com/runelite/runelite/wiki/Cannon) now suggests a spot for
  Bloodvelds in the Meiyerditch Laboratories
- You can now look up your Nightmare kill count with the [Chat Commands
  plugin](https://github.com/runelite/runelite/wiki/Chat-Commands) using the \`nm\`, \`tnm\`, and
  \`nmare\` abbreviations
- Teleport tablets are now labeled by the [Item Identification
  plugin](https://github.com/runelite/runelite/wiki/Item-Identification)
- The [Nightmare Zone plugin](https://github.com/runelite/runelite/wiki/Nightmare-Zone) can now send
  notifications prior to your overload boosts expiring
- A bug which could cause flash notifications to become stuck has been fixed
- The [Menu Entry Swapper plugin](https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper) now
  swaps the "Collect" option on Advisor Ghrim, the various quick-travel menu entries on Rellekka
  NPCs, and prefers the "Last-destination" option when using the Zanaris fairy ring
- The [Cooking plugin](https://github.com/runelite/runelite/wiki/Cooking) now updates its session
  counter when drying sinew
- The [Prayer plugin](https://github.com/runelite/runelite/wiki/Prayer) now shows a sensible
  duration text for durations greater than 1 hour
- Iorwerth Warriors are now understood to be elves by the [Slayer
  plugin](https://github.com/runelite/runelite/wiki/Slayer)
- XD and pleading emojis have been added to the [Emojis
  plugin](https://github.com/runelite/runelite/wiki/Emojis) with the \`Xd\` and \`(n_n)\` triggers,
  respectively
- Vyres have been added to the [Thieving skill
  calculator](https://github.com/runelite/runelite/wiki/Skill-Calculator)
- A bug where Chambers of Xeric personal best times were not recorded for certain team sizes has
  been fixed
- The [World Map plugin](https://github.com/runelite/runelite/wiki/World-Map) no longer shows a
  misplaced quest icon for the Misthalin Mystery quest
- Bird nests and the opening of grubby, stone, Dorgesh-Kaan, and H.A.M. chests are now tracked by
  the [Loot Tracker plugin](https://github.com/runelite/runelite/wiki/Loot-Tracker)

Enjoy!

\\- Jordan

### New commits

We had 32 contributors this release!

\`\`\`
Adam (26):
      tagtabs: split tag search from bank search
      tagtabs: close tab when clicking on main bank tab
      tagtabs: show tab separators in tag tabs
      tagtabs: fix clearing bank search when opening tags
      clientui: reset frame position in safe mode
      clientui: use contains instead of intersects for screen bounds checking
      inventory-grid: show grid when viewing bank
      mouse highlight: fix interface tooltips option
      menu swapper: update jewellery box clan wars swap to ferox enclave
      item stats: add duration tooltips to potions
      api: add GraphicsObject finished()
      slayer plugin: support new Turael task completion message
      mining plugin: rename MiningOverlay to MiningRocksOverlay
      mining plugin: add session stats
      loot tracker service: use bigint for kill id
      gpu plugin: initialize aa fbo handles
      xp globes: fix timing out xp globes after no xp is gained
      timers plugin: add fight cave and inferno timers
      xp globes: remove double globeCache index
      http-service: increase loot tracker retention to 90 days
      discord: remove DiscordReplyType
      discord: add logging to Discord rpc callbacks
      party service: prioritize user join handler over plugins
      hiscore panel: fix lookup to run on edt
      hiscore panel: add names to skill label tooltips
      Add Leagues hiscores and update icons for Trailblazer League

Arman Rafian (1):
      agility: Improve laps per hour calculation accuracy (#12246)

Blackberry0Pie (1):
      fairyring: Add Falo the bard tag to Sinclair Mansion fairy ring (#12030)

Broooklyn (11):
      agility: fix Sara GWD obstacle highlights
      agility: add GWD crack obstacle highlight
      clues: fix apostrophe positioning for Seers' Village
      clues: add descriptions for MapClues
      clues: update BeginnerMapClue to use MapClue description constants
      cannon: Add Meiyerditch Laboratory Bloodveld cannon spot (#12078)
      discord: Add castle wars underground region ID (#12075)
      agility: Fix prif portal highlighting
      clue: Fix K'ril's chamber master clue step plane
      chat commands: add Nightmare abbreviations
      Item identification: add tablets

Chris Janusiewicz (1):
      nmz plugin: add option to send overload notification prior to expire

Cyborger1 (1):
      farming: Improve names of Poison ivy and Dwarf weed patches (#12134)

Derek Lopes (1):
      Notifier: Disable flash notification when off is selected to prevent stuck flash state

Erik Humphrey (1):
      clues: Fix 'Headbang at the exam centre' clue text (#12297)

Henry Darnell (1):
      Update deprecated/default Travis configs (#10880)

Hexagon (1):
      client: add zalcano plugin

Hydrox (1):
      loottrackerclient: log when submitting loot isn't successful

Hydrox6 (1):
      mousehighlight: make "drop" not show when interface tooltips are off

JZomerlei (1):
      achivement dairy plugin: Add satisfiesRequirement to Requirement (#12265)

Jonathan Charles (1):
      menu swapper: add Advisor Ghrim collect swap

Jordan Atwood (6):
      OverlayRenderer: Fix overlay resizing logic
      HotColdLocation: Center some location spots
      slayer: Fix slaughter bracelet proc text
      HotColdLocation: Fix Mos Le'Harmless southern bar spot
      menuentryswapper: Prefer last-destination on Zanaris fairy ring
      ItemIdentification: Fix target teleport definition

Jussi Kauppinen (2):
      cooking: Add support for drying sinew (#12184)
      inventory-tags: add underline as display option

LA (1):
      screenshot: Capture Barbarian Assault high gamble screenshots (#12071)

Landy Chan (1):
      prayer plugin: fix time remaining text when greater than 1 hour

LazyScaper (2):
      worldmap: Fix Misthalin mystery quest icon position (#12273)
      skill calc: add Vyres to thieving calc

MarbleTurtle (2):
      EmoteClue: Change location from Digsite to Exam Centre
      SkillChallengeClue: Update dragonhide clue text (#12217)

Meeran (2):
      ItemMapping: Add Bryophyta's staff (#12286)
      ItemMapping: Add Ring of endurance

OneProGoober (1):
      emoji: Add XD and pleading emojis (#12203)

RansomTime (1):
      task: add Iorweth Warriors to list of targets for elves

SirGirion (1):
      loottracker: Add bird nest loot tracking (#12237)

TheStonedTurtle (1):
      Dev Tools - Add Inventory Inspector

Toocanzs (1):
      gpu: add anisotropic filtering

XrioBtw (1):
      PrayerType: Fix BURST_OF_STRENGTH description typo (#12138)

honeyhoney (3):
      menuentryswapper: Add Rellekka quick travel NPCs (#12333)
      bank: Fix NPE in PostScriptFired subscriber (#12342)
      WorldMapOverlay: Adjust tooltip text position to match vanilla tooltips (#12380)

kjartantr (1):
      SlayerUnlock: Update varbits enum (#12214)

leejt (2):
      loot tracker: track grubby, stone, Dorgesh-Kaan and HAM chests
      loot tracker: add metadata field to loot record

melkypie (1):
      chatcommands: make cox pb account for 11-15 and 16-23 team sizes

trimbe (2):
      bank tags: update detection of active tab for separator removal
      bank tags: invoke only the scrollbar update after removing separators
\`\`\`
`;export{n as default};
