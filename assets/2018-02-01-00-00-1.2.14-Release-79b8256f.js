const e=`---
title: '1.2.14 Release'
description: 'RuneLite 1.2.14 is released!'
author: Adam
---

[@Abextm](https://github.com/abextm) added an item stats plugin which shows a
tooltip on food and potions to show its effect and whether or not it would be
wasteful to consume it.

![itemstats](/img/blog/1.2.14-Release/itemstats.png)

A new zoom plugin was added which extends the zoom limits on the built in client
Zoom feature:

![zoom](/img/blog/1.2.14-Release/zoom.png)

A new motherlode mine plugin was added to mark the locations of ore veins and
rocks, thanks to [@Sethtroll](https://github.com/sethtroll). Additionally, many
new potions and freeze spells have been added to the timer plugin.

![mlm](/img/blog/1.2.14-Release/mlm.png)

[@deathbeam](https://github.com/deathbeam) reworked the XP tracker plugin to have a nice new UI:

![xptracker](/img/blog/1.2.14-Release/xptracker.png)

[@oplosthee](https://github.com/oplosthee) added an achievement diary indicator
plugin which shows which sections of diaries have been completed.

![diary](/img/blog/1.2.14-Release/diary.png)

There are also several smaller improvements, including:

- XP drop plugin to recolor xp drops when prayers are activated
- Fix BA plugin for recent game update
- Add granite cannonballs to cannon plugin
- Add configuration option for the runepouch overaly to only show on hover
- Added configurable tick delay to metronome plugin

\\- Adam

### New commits

We had 10 contributors this release!

\`\`\`
Adam (52):
      injector: fix detecting if garbage value should be appended
      runelite-api: rename InventoryItemQuery -> InventoryWidgetItemQuery
      runelite-api: add ItemContainer
      runelite-api: add inventory item query
      Add item stats plugin
      screenshot plugin: add test for different level up messages
      checkstyle: enforce whitespace after comma
      cache: remove script interpreter
      cache: allow passing instruction set to assembler
      runelite-api: add Script
      cache: add set_zoom_distance
      cache: add get_zoom_distance
      cache: add comment to rs2asm grammar
      cache: add set_camera_focal_point_height
      cache: add get_camera_focal_point_height
      cache: add script id to grammar
      runescape-api: add IndexData and IndexDataBase
      runescape-client: method1102 -> execute6500
      runescape-client: rename conflicting getConfigData method in IndexDataBase
      Add slf4j to mixins and expose logger in Hooks for them
      mixin injector: remove assert for moved code to not have exceptions
      Add ability to overlay cache archives
      Add runelite vm opcode and event
      Add int and string script stack to api
      Add script assembler plugin for packing scripts at build time
      Add runelite-scripts project for packaging overlaid scripts and dependency
      Add zoom plugin
      cache service: fix findArchive to select distinct
      runelite-client: add xp drop plugin which colors based on prayers
      metronome plugin: remove configurable sound ids until a better solution is found
      runelite-api: add rigour and augury prayers
      xo drop plugin: add rigour and augury
      xo drop plugin: set back xp drops to default color too
      mlm plugin: disable until it can be rewritten without scene scans every frame
      ground items: only loop tiles which are within distance
      ground items: REGION_SIZE - 1 since this is inclusive now
      cache: allow carriage returns in newlines in scripts
      Remote projectile target and length tracking
      mixins: fix getProjectiles queue iteration logic
      Remove unused imports
      Remove even more unused imports
      item manager: fix trying to cache null in getItemPrice
      config manager: thread config flushes to disk too
      slayer plugin: fix getting -1 count left on tasks
      runelite-client: fix exception from --no-rs
      xp tracker: don't add duplicate entries if nothing changes
      xp tracker plugin: update on logout
      runelite-api: add game object and wall object spawn/change/despawn events
      cannon plugin: update for event change
      hunter plugin: update for event change
      mlm plugin: rewrite to use events
      mlm plugin: default to enabled once again

C Gibson (1):
      Disable screenshots on login screen

Cameron Moberg (1):
      Fixed Barbarian Assault plugin to work with osrs update on 2018/25/1

Kamiel (1):
      Add granite cannonball support to plugin

Max Weber (6):
      method2965 > getScript
      method1752 > getScriptByFile
      Enable custom window border warning
      Add low-memory mode warning
      itemstats: Fix SuperRestore and friends
      runescape-api: remove RSCacheableNode::getNext() and getPrevious(). They are different than RSNode's next and previous, but have the same signature so they can get called instead. This caused the ground overlay to only show 1 item because it was iterating the cache, not the item list.

Seth (14):
      Add hover option to runepouch
      Add graphic changed event
      timers plugin: add more timers
      Fix for screenshot HP level
      Add Wrath rune to Runepouch
      Add timer tooltips
      Fix spelling inconsistencies/add rest of potions
      Add Motherlode plugin
      Add custom colors to ground items
      Fix motherlode Ids
      timers plugin: check config before checking message
      timers plugin: add raids potions
      Fix spelling error on timer
      Add raid varbit check to remove timers

SomeoneWithAnInternetConnection (3):
      Fishing plugin: Add fishing spots north of seers' village
      Remove unused import
      Include unit prices in examine messages

Tomas Slusny (7):
      Change conversion of config stream to map to pairs
      Fix coloring of warned attack styles
      Fix the frame is displayable exception
      Update XP tracking plugin to include more info
      Preserve guava classes in the shaded jar
      Change AccountSession to use lombok features
      Fix access levels of WSClient

UniquePassive (6):
      Add Dimension to configs
      Add a config setting for the game applet's size
      Add a Reset button to config panels for resetting to defaults
      Shift local indices only once
      Make sure injected methods don't invoke copied methods
      screenshot plugin: fix okhttp resource leak on imgur upload

oplosthee (5):
      Add Diary Progress Indicator plugin (#429)
      Change duration of Super Antifire Potions from 2 to 3 minutes
      Extend Metronome Plugin with configurable sound and tick delay (#454)
      Fix Karamja diary displaying incorrect progress
      Remove modification of original diary entry colors
\`\`\`
`;export{e as default};
