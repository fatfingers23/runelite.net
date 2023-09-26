const n=`---
title: '1.3.0 Release'
description: 'Menu swapping and highlighting, hp and spec regen meter, and player names on minimap'
author: Adam
---

[@Xrio](https://github.com/XrioBtw) contributed a menu swapper plugin which
swaps the left click menu options on some things.

![menuswap](/img/blog/1.3.0-Release/menuswap.png)

The ground items plugin can now highlight menu options based on item price,
thanks to [@devdennis](https://github.com/devdennis).

![menuhighlight](/img/blog/1.3.0-Release/menuhighlight.png)

[@abex](https://github.com/abextm) added a regen meter to the hitpoints and
special attack orbs.

![regen](/img/blog/1.3.0-Release/regen.png)

The player indicator plugin can now show player names on the minimap, from
[@deathbeam](https://github.com/deathbeam)

![minimap](/img/blog/1.3.0-Release/minimap.png)

Also, thanks to [@josharoo](https://github.com/josharoo) and
[@fe-mirino](https://github.com/fe-mirino) for their work on
expanding the [wiki](https://github.com/runelite/runelite/wiki).

The minimap plugin now has an option to allow hiding the minimap on resized mode
([@Blizik](https://github.com/Blizik))

There are also several smaller improvements and bug fixes, including:

- The xp tracker plugin has been overhauled to show more information in less
  space
- Fixed item sprites in the fishing plugin (among other places) sometimes having
  the incorrect zoom applied to them
- Opponent info overlay will now update hitpoints for opponents you recently
  were targeting
- Fix hiscore player menu option intefering with other game menu options like
  Whack
- Fix attack styles not being hidden when attack style plugin configuration is
  changed
- Add right click menu to screenshot button to open the screenshot folder
- Reposition points box in raids to be underneat the xp dropper overlay

Enjoy!

\\- Adam

### New commits

We had 15 contributors this release!

\`\`\`
Adam (20):
      Bump to 1.2.19.1-SNAPSHOT
      Bump to 1.3.0-SNAPSHOT
      session client: fix throwing IllegalArgumentException if deserialization of uuid fails
      widget id: fix viewport child widget
      Also bump scm tag
      session client: fix throwing IllegalArgumentException if deserialization of uuid fails
      widget id: fix viewport child widget
      item controller: add method for bulk price lookups
      instance map: fix various races between game and event threads
      runelite-api: add ability to get npc index
      runelite-api: expose cachedNpcs
      opponent info overlay: use last opponent if no opponent is targeted
      Reset player menu types whenever the options are changed
      runelite-api: expose npc composition
      dev tools overlay: transform npcs if applicable
      sessions: decrease session ping frequency
      cache: fix item definition default zoom2d
      runelite-api: add scale to createItemSprite
      http-service: add sprite service
      runelite-client: add github release plugin configuration

Bart van Helvert (1):
      Remove unneeded drawRegionTile calls

Blizik (1):
      Add ability to toggle minimap display

Connor (1):
      Resolving Issue #860 - Warned Attack Styles not properly hiding. Adding automated test coverage for AttackIndicatorPlugin.

Dennis (1):
      ground items plugin: add option to highlight menu

Dennis de V (1):
      Fix ground items nullpointer exception

Infinitay (1):
      Add confirmation dialog to runelite logout button

Jeremy Plsek (1):
      Add right click menu to screenshot button #797

Joshua Filby (2):
      runelite-client: Add Text#removeTags method
      runelite-client: Update plugins to use Text.removeTags

Kamiel (3):
      Raids plugin: Reposition the points box to prevent it from overlapping overlays
      Fix instance map "show" option not displaying in right-click menu
      Fix instance map "show" option not displaying in right-click menu

Max Weber (11):
      injector: Fix scriptvm not updating currentScript
      isRSHidden > isSelfHidden
      Move widget inspector into it's own window
      jewellerycount: add imp-in-a-box
      Rename Point3D to WorldPoint
      Add conversion methods to WorldPoint and LocalPoint
      Update almost everything to the new API
      Remove old API
      Add planes to planeless tile objects
      hunter plugin: Don't iterate over all tiles
      Add regen meter plugin

Seth (6):
      dev tools: add location to dev tools plugin
      Remove viewport contains
      xp tracker: add format suffix to reduce string size
      xp tracker: update xp tracker UI
      NpcID: update ids to cache 165
      fishing plugin: remove broken minnow npcs and swap to graphic check

Tomas Slusny (6):
      Add idle anim and combat idle toggles to notifier
      Remove duplicated and unused OverlayUtil code
      Add support for drawing names on minimap
      Allow specifying default world in [0-9]{2} format
      Title-case and remove "plugin" from ME swapper
      Fix drawing of player names on minimap

XrioBtw (1):
      Add menu entry swapper plugin

nvisser (1):
      Round actions remaining up
\`\`\`
`;export{n as default};
