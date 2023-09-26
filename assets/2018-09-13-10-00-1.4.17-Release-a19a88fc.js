const e=`---
title: '1.4.17 Release'
description: 'Loot tracker grouping, home and minigame cooldown timers, minigame and quest world map icons, and various bug fixes and enhancements'
author: Jordan
---

The Loot tracker plugin now has a setting to group loot by NPC/event. In addition, a right-click
menu has been added to view details of a specific NPC's loots. Thanks to
[@psikoi](https://github.com/psikoi) for this feature!

![grouped-loot-tracker](/img/blog/1.4.17-Release/grouped-loot-tracker.gif)

Home and minigame teleports will now add a timer for their cooldowns.

![home-minigame-teleport-timers](/img/blog/1.4.17-Release/home-minigame-teleport-timers.png)

The World Map plugin now displays tooltips for quest and minigame names, thanks to
[@johnhamilto](https://github.com/johnhamilto) and [@MagicfTail](https://github.com/MagicfTail).

![quest-tooltips](/img/blog/1.4.17-Release/quest-tooltips.png)
![minigame-tooltips](/img/blog/1.4.17-Release/minigame-tooltips.png)

There are also numerous smaller improvements and bug fixes, including:

- The Achievement Diary plugin has been fixed
- The idle notifier now considers mouse clicks, not mouse movement, to determine when players are
  no longer idle for the Idle Notifier plugin
- Fixed Fishing plugin inventory and equipment check
- The Player-owned House plugin now displays the new Troll stronghold teleport portal
- The farming tracker now tracks the Weiss herb patch
- The bottom-right snap corner no longer moves when the collapsible chatbox is opened
- Cutting sacred eels will no longer incorrectly trigger the Idle Notifier plugin
- Time tracking tabs have been better ordered by priority
- The vanilla Tithe farm overlay has been made layoutable and now replaces the previous custom
  overlay
- Wizard's tower clue solutions now indicate the nearby fairy ring for convenience
- The stairway to the task-only Kurask room and Godwars crossbow climbing rocks are now highlighted
- Weiss and Troll stronghold basalt teleports and Kharedst's Memoirs teleports have been added to
  the World Map plugin
- The Ape Atoll Arceuus teleport location has been fixed in the World Map plugin
- Dark crabs have been added to the Fishing plugin
- Quest screenshots now use a standardized naming format
- The Chambers of Xeric party size overlay indicator is now hidden when raiding solo
- Ogre bellows now display the number of charges they contain
- NPCs highlighted with the slayer plugin are now immediately un-highlighted upon task completion
- Fixed 2005 interface swapper sprites for quest and spellbook icons
- The clue scroll plugin now checks for sets across the user's inventory and equipped items
- Upon killing Grotesque Guardians, a timer is created showing the time until the instance closes

Enjoy!

\\- Jordan

### New commits

We had 14 contributors this release!

\`\`\`
Adam (2):
      http-service: add caching for hiscore lookups
      http-api: use https for hiscore urls

Damen (1):
      Add Grotesque Guardians instance close timer (#4338)

Jordan Atwood (8):
      interface styles plugin: Add more error handling
      Fix SpriteIDs from 2018/08/30 update
      clue scroll plugin: Check for sets across inventory and equipment
      timers plugin: Reset fields on shutdown
      Add home teleport animation and graphic definitions
      Add minigame teleport button widget info
      Add home teleport widget info
      timers plguin: Add teleport cooldown timers

Mack Bryan (3):
      Add ogre bellows to item charges plugin (#5323)
      Moved hot-cold dig location 3 tiles east into the correct range.
      Remove npc highlights on task completed message. (#5416)

Magic fTail (3):
      Add Quest to quest screenshots
      WorldMapPlugin: Add tooltip to minigame icons
      Don't show party size in overlay when solo raiding

Max Weber (7):
      diaryreqs: Update scrollbar with new length
      cache: name InterfaceDefinition fields
      cache: Disassemble CS1s
      runelite-api: Update widget field names
      cache: Store ID in ScriptLoader
      cache: add various world map related opcodes
      runelite-mixins: Add setter for varcint

Ron Young (1):
      Add missing widget types to WidgetType class (#5306)

Ruben Amendoeira (1):
      loot tracker: add view for grouping loot by npc/event

Sebastiaan Vanspauwen (6):
      Added Kurask Slayer Room Overlay
      Added Godwars Crossbow Shortcut
      Worldmap: Added Weiss and Troll Stronghold teleports
      Worldmap: Fixed Ape Atoll Arceuus Location
      Worldmap: Added Kharedst's Memoirs teleports
      Fishing: Added Dark Crab Overlay

Spencer (1):
      Added fairy ring code to wizard tower clue solutions

Tomas Slusny (14):
      Make bottom-right snap corner not account for chatbox
      Fix fishing plugin inventory/equipment check
      Fix Achievment Diary widget ids
      Add Sacred Eeels cutting to idle notifier
      Make fishing overlays use hidden instead of manager
      Make cannon plugin use hidden instead of manager
      Make Kourend library use hidden field instead of manager
      Reorder time tracker tabs by priority
      Replace Tithe Farm overlay with layoutable widget
      Deprecate queries with already existing events
      Add mappings for mouse last pressed millis
      Use mouse/keyboard idle state properly in IdleNotifier
      Simulate ItemContainerChange events on plugin startup
      Remove unnecessary fishing spot configuration

davidyip50 (1):
      Add troll stronghold portal icon support to POH (#5404)

johnhamilto (1):
      Add quest name tooltips to the world map (#5410)

oplosthee (1):
      Add Weiss herb patch to the farming tracker
\`\`\`
`;export{e as default};
