const e=`---
title: '1.10.12 Release'
description: 'Extended map loading'
author: Adam
---

## Extended map loading

RuneLite now supports extended map loading, via a new setting in the \`GPU plugin\`. This setting controls how many additional chunks to load past what is usually the edge of the visible world. Previously your character would have to move close to the edge, within 16 tiles, before the new map area was loaded in. Now, we have increased that gap to 56 tiles!

When combined with our previous work on [seamless map loading](https://runelite.net/blog/show/2023-05-13-1.10.0-Release) the world feels like one continuous area.

When zoomed fully out, the total visible area is now up to 184x184 tiles, over three times as many as previously! The max render distance of the GPU plugin has been increased accordingly. This also fixes the black area shown on the minimap when zoomed out and near the world edge.

![maploading](/img/blog/1.10.12-Release/maploading.webm)

![mountain](/img/blog/1.10.12-Release/mountain.png)

![config](/img/blog/1.10.12-Release/config.webm)

Note there are a few limitations:

Extended map loading does not work in instances, because there isn't a way to tell what the additional map to load is.

You also may have to do a little exploring first! RuneLite can only load areas that it has seen before.

### Scrollable menu

The right click menu is now scrollable, useful for selecting menu options which are otherwise off screen. Also remember the \`Collapse ground item menu\` option exists which helps with this too.

![menu](/img/blog/1.10.12-Release/menu.webm)

There are also several smaller improvements and bug fixes, including:

- Tile and object markers now have an option to change their color in the right click menu. Object markers also can change the render style on a per-object basis via the menu.
- Attack styles can now send a chat message warning when you switched to a warned style
- A recent update by Jagex has made the client able to reload itself without fully restarting after game updates. Various bugs in plugins related to this have been fixed. Most notably issues surrounding chat icons added by plugins being incorrectly shown. We recommend restarting the client regardless, so that you will pull in the latest RuneLite version, even if it is not required.
- A bug causing boss slayer tasks to not be shown properly in \`!task\` or on the overlay has been fixed.
- The loot tracker now supports bounty crates
- The party plugin ping color assigned to players is now configurable
- The rune pouch overlay's runes are now pixel art instead of scaled down rune images

### New commits

We had 30 contributors this update!

\`\`\`
Adam (98):
      gpu: use clGetGLContextInfoAPPLE on macos
      woodcutting: count session logs instead of using xptracker actions
      woodcutting: add bark tracking to session
      telemetry client: report vm crashes
      config manager: disallow keys starting with $
      api: fix createProjectile docs typo
      ground markers: add color menu option
      client: update 2023-07-12-rev214
      woodcutting: suppress PMD.UnnecessaryFullyQualifiedName
      devtools: add menus
      player indicators: fix color player menu when using items on players
      api: add menu scroll api
      inv tags: cache untagged items in tag cache
      client: flush output streams before calling fsync
      chatbox: include lighting params in item search dedup
      client: add launcher updater
      api: update 215
      client: set jagex.userhome
      Revert "music: disable granularSliders"
      npc util: add death hider exclusion param
      hooks: include stacktrace in error reports
      api: worldpoint: use client base x/y instead of scene
      agility plugin: code cleanup
      hooks: remove npc update deferred eventbus replay
      clues: update tests
      updater: update launcher to 2.6.7
      api: add closeInterface
      bank: add option to remove jagex account ad
      hiscores: add dt2 bosses
      api: correct ItemLayer bottom/top usage
      cache: add libbzip2 support
      remove cache-client and cache-updater
      Revert "attack styles: Prevent errant warning messages"
      Revert "attack styles: Flip double-negative config"
      Revert "attack styles: Add chat message when switching to warned style"
      attack styles: Add chat message when switching to warned style
      github: remove placeholder versions from bug template
      ground markers: remove rememberTileColor option
      chat commands: add dt2 boss aliases
      cache: remove unnecessary assert
      loot tracker: track whisperer
      gpu: don't draw frames during STARTING
      chat commands: capitalize dt2 bosses
      loot tracker: fix whisperer tracking deaths
      loottracker: fix whisperer tracking deaths
      cache: ignore libbzip2 test
      camera: add option for right click move camera to work even with mouse over objects
      hiscore panel: fix crazy archaeologist alphabetization
      gpu: ignore buffer swap errors on shutdown
      cache: modify Storage api to accept int index/archive
      cache: remove archive hash
      cache: store: remove unused FileNotFoundException
      overlay renderer: don't consume mouse drag events when moving overlays
      client: add chat icons api
      bank: fix account ad popup blocking clear-all fillers
      special counter: remove counter when duke dies
      camera: default right click objects to true
      chat icons: fix npe if refresh is run too early
      slayer: update boss task task lookup
      slayer: fix The Phantom Muspah task name
      slayer: fix detecting boss task changes
      object indicators: add per object higlight style
      object indicators: remove remember object colors
      ground markers: add reset all color option
      loot tracker: fix tracking whisperer deaths v3
      loot tracker: update tests
      loot tracker: add ancient vault chest
      loot tracker: fix tracking whisperer deaths v4
      runepouch overlay: use pixel art rune images
      hiscores: switch from fsw to dmm tournament
      api: add openInterface
      object indicators: mark objects on startup
      client: update http-api to 1.2.12
      item manager: remove wiki fsw prices
      config: fix duplicating rsprofile
      runepouch overlay: update pixel art images
      inventory tags: null check item container
      api: add line of sight impl
      api: exclude CollisionDataFlag from runtime api
      discord: add discord rpc feature flag
      ge: add tournament ge world type
      loottracker: include loot world id for tournament worlds
      object indicators: null check map regions
      hiscore: add tournament world to HiscoreEndpoint.fromWorldTypes()
      worldutil: fix exception converting tournament world type
      ge: exclude active trade price from dmm worlds
      api: document gameobject config and hash
      gpu: move hillskew to gpu
      draw callbacks: remove drawFace
      gpu: increase config defaults
      gpu: remove sin/cos table from UBO
      profiles: add id to logging and log enames
      profiles: fix logging id on switch
      gpu: use GL_NEAREST for tile height min/max filter
      Revert "gpu: remove sin/cos table from UBO"
      gpu: reinitialize opencl variables on init
      devtools: add tile scene location to overlay
      gpu: add extended scene

Chris (1):
      loottracker: add support for Bounty crates

Corey Forsyth (1):
      groundmarkers: Fix minimap stroke

David Goldstein (1):
      util: Complete branch coverage for ColorUtil

Felanbird (4):
      clues: Add Abyssal tentacles to Sherlock master challenge
      achievement diary: update ardy picklock task
      clues: Support Ring of shadows (#16846)
      clues: Update Necromancer Tower Master clue hint

Fjara (1):
      clues: update ranged attack bonus for Robin master cryptic

Jordan Atwood (23):
      woodcutting: Remember session stats after timeout
      npc indicators: Fix per-npc highlight menu color
      item identification: Add Chambers of Xeric potions
      timers: Support all staff of the dead variants
      attack styles: Code cleanup
      attack styles: Add chat message when switching to warned style
      attack styles: Flip double-negative config
      attack styles: Prevent errant warning messages
      widget overlay: Add the strangler infection overlay
      widget overlay: Add sanity overlay
      ground markers: Allow setting alpha when recoloring markers
      slayer: Add The Fallen Empire boss task entries
      boss timers: Add The Leviathan
      loot tracker: Fix tracking for The Leviathan
      loot tracker: Fix tracking for Duke Sucellus
      loot tracker: Fix tracking for Vardorvis
      discord: Add Secrets of the North and Desert Treasure 2 areas
      ItemMapping: Add Sanguine Torva armor
      roof removal: Add Lassar Undercity overrides
      clues: Add fairy ring code to hot-cold clue hint
      loot tracker: Fix The Leviathan loot tracking
      screenshot: Capitalize level up screenshots
      loot tracker: Fix chest re-opening detection

LlemonDuck (3):
      checkstyle: no trailing whitespace on empty lines
      clues: support dynamic locations
      clues: dynamic viggora location

Mark7625 (1):
      entity hider: Clarify "Hide Pets" option only hides others' pets (#15378)

Max Weber (11):
      music: disable granularSliders
      music: fix playback not starting on unmute
      music: do not enable granular sliders on unrelated configs changing
      music: set slider deadtime as intended
      client: update carrallangar -> carrallanger
      api: add getDBRowsByValue
      worldmap: fix quest icons not showing
      api: add Animation::getNumFrames
      api: expose NpcOverrides
      devtools: show NpcOverrides
      devtools: fix texture overridden npcs

Mo Ben (1):
      npc aggro: fix Show on slayer task

Morgan Lewis (9):
      widget overlay: Layout Tempoross lobby interface
      widget overlay: Layout GOTR interface
      widget overlay: Layout Trouble Brewing interfaces
      widget overlay: Layout Shades of Mort'ton interface
      widget overlay: Layout Burthorpe Games Room interfaces
      widget overlay: Layout Brimhaven Agility Arena interface
      widget overlay: Layout Gnomeball interface
      widget overlay: Layout Mage Training Arean interfaces
      item stats: Fix barbarian mix heal amounts (#16988)

Paul Norton (1):
      party: allow custom colors

Phil (1):
      chat commands: add calvarion aliases

Reactate (1):
      clues: Improve Al Kharid mine emote clue location (#16420)

Ron Young (1):
      colorpicker: clamp window position to screen bounds

SirGirion (1):
      itemstats: add support for group storage

StephenWolters (1):
      herbiboar: always show correct object to search

ThePharros (1):
      clues: Add missing fairy ring CJR to Donovan clue

Usman Akhtar (1):
      cannon: Add wilderness slayer cave spots

Vendarin (1):
      cannon: Add Edgeville Dungeon Moss Giant spot (#16560)

Zupami (1):
      achievement diary: update ardy steal chest task

geeckon (1):
      cannon: Update Lizardman spot (#14197)

geheur (2):
      bank: Support seed vault with search hotkey (#16417)
      clues: improve BRUCE CATNAP location and description

iProdigy (1):
      docs: update explanation of Varbits.PVP_SPEC_ORB (#16406)

invalidCards (1):
      achievement diary: Remove Tree Gnome Village requirement (#16776)

rugg0064 (1):
      inventory tags: add colors of equipped items to submenu

sam (4):
      fairy rings: add BLS fairy ring.
      world map: add BLS fairy ring.
      agility: add ice mountain shortcut
      world map: add icon descriptions for the stranglewood and lassar city

shi-vy (1):
      discord: Indicate safe mode in icon tooltip (#16667)

testing-ongithub (2):
      combat level: Show next level info on Character Summary tab (#15876)
      combat level: Check "Show precise combat level" config on character summary tab (#16972)
\`\`\`
`;export{e as default};
