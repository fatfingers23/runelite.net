const n=`---
title: '1.4.5 Release'
description: 'Inventory tags, opponent comparison, inventory viewer, and corporeal beast plugin'
author: Adam
---

An inventory tag plugin was added which lets you tag items in your inventory,
which then get outlined a specific color. Contributed by
[@kulers](https://github.com/kulershk).

![inventorytags](/img/blog/1.4.5-Release/inventorytags.png)

The opponent info plugin now has an option to show and compare the stats of an
opponent you interact with. Contributed by
[@Nightfirecat](https://github.com/nightfirecat).

![playercomparison](/img/blog/1.4.5-Release/playercomparison.png)

An inventory viewer was added by [@jplsek](https://github.com/jplsek) which lets
you overlay a view of your inventory:

![inventoryviewer](/img/blog/1.4.5-Release/inventoryviewer.png)

Finally, a corporeal beast plugin was added:

![corp](/img/blog/1.4.5-Release/corp.png)

There are also several smaller improvements and bug fixes, including:

- Fix animation smoother with interpolating rotation frames
- Fix animation smoother to not smooth hellhound defence animation
- Fix agility plugin to not reset arena timer when falling from obstacles
- Fix fight cave plugin to work more reliably
- Fix price of tentacle tridents
- Add informative dialog for when the client is outdated due to game updates
- Add configuration setting for chat commands clear chat keyboard shortcuts
- The screenshot plugin now has a configurable hotkey for screenshots
- Add Battle staffs to the idle notifier
- Add !clues chat command
- Add timer for stamina mixes
- Add (slayer) assignment to menu swapper
- Fix binding necklaces charges to reset when the necklace is destroyed

Enjoy!

\\- Adam

### New commits

\`\`\`
AWPH-I (1):
      Add inventory viewer plugin

Adam (20):
      runelite-client: add outdated dialog
      runescape-api: remove no longer used annotations
      Add logback-parent to dependency management and use a consistent slf4j version everywhere
      Add interface representing all callbacks the client does, and convert mixins to use it
      hooks: dispose graphics after using
      actor mixin: fix getInteracting when index is 65535
      Add interacting changed event
      chat message manager: set default colors for GAME messages
      Add corporeal beast plugin
      modelviewer: add basic animation support
      devtools: add transform command
      animation smoothing: do not interpolate to angle 0
      Revert "animation smoothing: do not interpolate to angle 0"
      animation smoothing: don't interpolate hellhound defence animation
      chat commands: add config setting for chat clear shortcuts
      cache: rename additional npc definition fields
      queries: replace some isHidden checks with isSelfHidden
      hiscore client: check response code of hiscore lookups
      opponent info: move interacting logic to plugin and use interacting changed event
      opponent info: add player comparison overlay

Dennis (1):
      animation smoothing: fix angle bounds for rotation

HSJ-OSRS (2):
      Add battlestaff crafting to AnimationID
      Add battlestaff crafting to idle notifier

James (1):
      Show correct text for master clue command (#3989)

JavaLeg (1):
      chat commands: add clues command

Jordan Atwood (3):
      Fix "West of Barbarian Village" hot-cold location
      Fix East of Brimhaven fruit tree hot-cold location
      timers plugin: Create timer for stamina mixes

Kamiel (1):
      npc indicators: fix consuming tag menu clicks on non-npcs

Max Weber (4):
      runelite-client: Add Keybind class for configs to save and set hotkeys
      screenshot plugin: Allow hotkey to be changed from insert
      kourendlibrary: Make hiding the navbutton optional
      runelite-client: Add a equals implementation to Keybind

Nathen (1):
      Update library plugin encapsulation

Nathen Sample (1):
      Update prayer plugin encapsulation (#3962)

ScottMCarr (1):
      agility plugin: do not update arena timer when there is no hint arrow

Su-Shing Chen (1):
      agilityShortcutLocation: Fix SE Karamja agility marker

Tomas Slusny (24):
      Center stretched fixed mode horizontally
      Move onActorHitsplat to mixins
      Move menuOpened to mixins
      Move updateNpcs call to mixins
      Move focusGained to mixins
      Move focusLost to mixins
      Move postItemComposition to mixins
      Move setMessage to mixins
      Move projectileMoved to mixins
      Move addChatMessage to mixins
      Move graphicsObjectCreated to mixins
      Move drawAboveOverheads call to mixins
      Move drawRegion call to mixins
      Move clientMainLoop to mixins
      Move menuActionHook to mixins
      Add documentation for Hooks
      Remove Age menu entry swapping
      Move shift-click config to top of menu swapper
      Update documentation for Callbacks interface
      Add new toBufferedOutline method to SpritePixels
      Add inventory tagging plugin
      Remove title from corp panel
      Make Fight Cave plugin more accurate
      Fix price of tentacle tridents

Trees (1):
      Menu Swapper - Add Age/Assignment

honeyhoney (2):
      Added destroy item widgets
      Fixed binding necklace charges not being reset when necklace is destroyed
\`\`\`
`;export{n as default};
