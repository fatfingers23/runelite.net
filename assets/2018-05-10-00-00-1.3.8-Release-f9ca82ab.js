const e=`---
title: '1.3.8 Release'
description: 'World map clue overlay, friend notes, hot-cold helper, and special attack counter'
author: Adam
---

Clue scroll locations are now shown on the in-game world map. Thanks to
[@MESLewis](https://github.com/MESLewis) for his work on this over the past
weeks.

![cluemap](/img/blog/1.3.8-Release/cluemap.png)

A friend notes plugin has been added which lets you associate notes to friends
on your friends list.

![friendnotes](/img/blog/1.3.8-Release/friendnotes.png)

[@Eadgars-Ruse](https://github.com/Eadgars-Ruse) added a hot-cold helper to the
clue plugin which helps you narrow down which location the clue is at each time
you check the orb. It marks the possible locations to dig on the map.

A special attack counter was added which counts draining special attacks done
against certain bosses like the Corporeal Beast.

![speccounter](/img/blog/1.3.8-Release/speccounter.png)

A FPS plugin was added from [@LeviSchuck](https://github.com/LeviSchuck) which
displays the current FPS, and allows you to configure a max FPS limit.

There are also several smaller improvements and bug fixes, including:

- Fix agility plugin calculating laps to level when you level up on a lap
- Add missing Rellekka fishing spots to fishing plugin
- XP globes mouseover now shows xp per hour
- Fix date placement in screenshot with stretched fixed mode
- Fix xp tracker sometimes showing negative XP
- Fix bank tags to be case insensitive
- Add Puro-Puro static spawn locations to imp plugin
- A chest price evaluator was added to the barrows plugin

Enjoy!

\\- Adam

### New commits

We had 29 contributors this release!

\`\`\`
AWarbear (4):
      Make farming tracker use english for dates by default (#2345)
      agility plugin: identify active course based on its region
      agility plugin: fix calculating laps to level when leveling up from a lap
      Move system tray icon to be created before the client requests focus

Adam (17):
      impling plugin: use spawn events
      npc indicators: remove unnecessary tagged npcs list
      npc indicators: use events for highlighted npcs
      runelite-client: add tick counter
      demonic gollias: use tick counter
      mixins: inject get/set tick count
      runescape-client: refactor Nameable
      runescape-client: class304 -> FriendContainer
      runescape-client: class298 -> IgnoreContainer
      runescape-client: refactor FriendManager
      runescape-client: method1792 -> removeFriend
      runelite-api: expose Friend
      runelite-api: add nameable name change event
      injector: add method hooks
      Add removed friend event
      chatbox input manager: add support for character limit
      Add friend notes plugin

Alex Kolpa (1):
      Ensure tile spawns on all planes are simulated (#2495)

Eadgars-Ruse (2):
      Add hot-cold clue scroll plugin
      Fix warmer/colder consideration for hot-cold plugin

Jeroen (1):
      Show missing fishing spots in Rellekka in overlay.

Jonathan (1):
      Add xp per hour to xp globes mouse-over tooltip

Jordan (2):
      Add all bracelets to Argdougne emote clue item requirement (#2417)
      Fix Sinclair Mansion emote clue (#2468)

Jordan Atwood (2):
      Fix "No boots" requirement in Mausoleum clue
      Fix Shadow dungeon emote clue location

Joshua Filby (11):
      feat: add a way to get AccountType
      refactor: rename ScriptEvent#field787 to ScriptEvent#mouseX
      refactor: rename ScriptEvent#field780 to ScriptEvent#mouseY
      refactor: rename ScriptEvent#widget to ScriptEvent#source
      refactor: rename ScriptEvent#field779 to ScriptEvent#op
      refactor: rename ScriptEvent#field776 to ScriptEvent#target
      refactor: rename ScriptEvent#pressedKey to ScriptEvent#typedKeyCode
      refactor: rename ScriptEvent#typedKey to ScriptEvent#typedKeyChar
      refactor: rename ScriptEvent#objs to ScriptEvent#params
      refactor: rename ScriptEvent#string to ScriptEvent#opbase
      fix: import correct field

Kamiel (1):
      Add missing overhead icons to API

Lars Ørnlo (1):
      Add config option that enables/disables mouse tooltip on rune pouch however since information is already available on screen if rune pouch is enabled.

Levi (1):
      FPS Plugin

Levi Schuck (2):
      Fix negative total XP calculation when skill starts
      FPS plugin: fix startup not applying limits

Lotto (3):
      screenshotplugin: fix timestamp "button" not being stretched
      screenshotplugin: fix screenshot button ignoring displayDate setting
      screenshotplugin: fix Hunter levelup widget ignoring toggle

Magic fTail (3):
      BossTimerPlugin: Add missing bosses (#2150)
      bank tag plugin: fix searching to be case insensitive
      HunterPlugin: Fix deadfall trap

Maid Dog (2):
      Use Immenizz's in-game name
      Fix monastery clue position

Mantautas Jurksa (1):
      Add Puro-Puro static spawn locations

Max Weber (6):
      runelite-client: Cleanup cli arguments
      runelite-client: Log uncaught exceptions
      method3836 > getSpriteAsSpritePixels
      Add SpriteManager to get sprites from the cache.
      runelite-client: Make notification options not mutually excusive
      Add Burgh de Rott map clue

Morgan Lewis (7):
      runescape-client: export more world map related methods
      runescape-api: import world map methods
      Add world map api and mixin
      runelite-client: add world map overlay renderer
      runelite-client: add world map test plugin
      clue plugin: add world map overlay for clue location
      WorldMapOverlay: Add check for current plane

Rheon (1):
      Add spade req, fix item reqs for emote clues (#1753)

Shuhao Wu (1):
      Updated cryptic clue solution for Kalphite area

SoyChai (2):
      demonicgorilla: Rename plugin to "Demonic Gorillas" with capital G
      demonicgorilla: Use proper inverse methods instead of the ! operator

Tomas Slusny (14):
      Option to only recolor right click menu on ground
      Add 2 new notifications modes (message, flash)
      Disable filtering on logback.xml
      Merge ImagePanelComponent with PanelComponent
      Update all overlays to support new PanelComponent
      Make ProgressPie follow component pattern
      Move the xp/hr in globes to new system
      Sanitize player indicators options
      Clear children in LocationOverlay
      Simplify component system
      Update plugins to use the new TitleComponent
      Add support for customizable gap and border
      Restore min width when keeping window size small
      Iron platelegs -> platebody for Draynor emote clue

Tyler Nichols (1):
      Update to Solution of speaking to Falo the Bard (#2352)

WooxSolo (5):
      Add graphics object API
      Add graphics object created event
      Add graphics objects to devtools
      Add option to keep either window or client size
      Change WorldPoint::distanceTo to use chebyshev distance instead of euclidean distance

iguaan (1):
      correct hard entrana cryptic clue

raqes (1):
      Add special attack counter

trimbe (3):
      Add missing Dorgesh-Kaan clue, fix dagganoth king cryptic
      item manager: change batch item price to accept a collection
      barrows plugin: add barrows chest price evaluator

wa1id (1):
      Add Elite Map clue at Zul-andra (#2306)
\`\`\`
`;export{e as default};
