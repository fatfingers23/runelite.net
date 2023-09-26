const n=`---
title: '1.5.36 Release'
description: 'Website redesign and random event plugin'
author: Adam
---

The website has been given an all new dark look, with a redesigned home page.
Thanks to [@psikoi](https://github.com/psikoi) and [@gc](https://github.com/gc)
for their work on this.

A random event plugin has been added which can notify you when a random event
spawns for you, and will also hide Talk-to and Dismiss from random events which
aren't yours.

![randoms](/img/blog/1.5.36-Release/random.png)

There are also several smaller improvements and bug fixes, including:

- The clickbox generation code has been optimized and now causes less lag when
  drawing complex clickboxes, such as the the herbiboar trail objects
- The object indicators plugin now supports marking many more object types that
  previously did not work, such as the MLM sack and ladders
- Setting the slayer plugin infobox timeout to 0 now makes it never timeout,
  consistent with other plugins
- The item identification plugin now also identifies placeholders and noted
  versions of items
- The inventory grid plugin now shows the results of swapping items, if applicable
- Add Broodoo shield, drift net, spears, and hastae to skill calculator
- Add missing fishing spots from the fishing platform to the fishing plugin
- Fix Monk's residence and Rommik cryptic crate locations
- Add Rimmington ship transpotation icons and locations to the world map
- Fix location of the northern pipe in Mount Karuulm on the world map

\\- Adam

### New commits

We had 23 contributors this release!

\`\`\`
15987632 (1):
      timers plugin: remove prayer enhance infobox on expire

Adam (18):
      item controller: add etag to bulk prices
      feed controller: add etag
      client: use own okhttp client with cache
      http-api: add javax.inject dependency
      feed: use caching okhttp client
      item manager: use caching okhttp client
      Use caching okhttp client for worldclient
      tile indicators: fix storing names for multilocs
      object indicators: support non-gameobject multilocs
      api: add getConvexHull to GroundObject
      object indicator: add support for ground objects
      screenmarkers: optimize panel rebuilding
      cache: update object definition
      item charges: fix explorer's ring infobox caching
      async buffered image: fix listener leak from subscribing to already loaded images
      async buffered image: rename changed to loaded
      async buffered image: move to util
      Fix slayer infobox disappearing on '0' timeout

Daniel Bolink (1):
      Add Elf Cannon Spot in Priff

David (2):
      agility: add plant door obstacle
      skillcalc: add Broodoo shield

Elkins, Trey (1):
      Add no weapon/shield enforcement to aerial fishing clue

Eric Weaver (2):
      Update Anglerfish master challenge clue text (#9988)
      Fix typo in Barrows chest emote clue (#9982)

Gustavo Rodrigues (1):
      Add Drift Net to skill calc plugin (#9958)

Hydrox6 (1):
      world map: fix location of northern pipe in Mount Karuulm dungeon

Ignas Maslinskas (1):
      xptracker: fix out-of-sync add to canvas menu (#9983)

Krysaczek (1):
      Add Spears and Hastae smithing to Skill calculator

MESLewis (1):
      Add teleport icon for Stony Basalt under 73 Agility

Max Weber (12):
      runelite-api: Use more general Shape for clickboxes and convex hulls
      runelite-api: Add simple Shape implementations
      Perspective: Add modelToCanvas
      Jarvis: use primitive arrays
      runelite-api: Optimize getClickbox
      runelite-api: Remove Triangle and Vertex classes
      StackFormatter: remove quantityToRSStackSize
      StackFormatter: Fix documentation
      StackFormatter: synchronize access to NumberFormats
      runelite-client: Rename StackFormatter to QuantityFormatter
      prayer: Use ItemStats for prayer bonuses
      runelite-api: Add some more documentation

Morgan Lewis (1):
      worldmap: Update Rimmington ship transportation icons and locations (#10010)

RensB (1):
      item charges: add charges to guthix rest tea (#10002)

Ron Young (4):
      ChatboxTextInput: add ability to filter character inputs
      banktags: filter out <,>, and / from tag input
      banktags: clean invalid config items
      banktags: null check for no tagtabs

SebastiaanVanspauwen (1):
      worldmap: Add Wilderness crabs teleport (#9970)

Taylor (1):
      Fix Monk's residence and Rommik cryptic crate locations (#9936)

Tomas Slusny (2):
      Properly update plugin toggle button of plugin state change
      Null-check WorldResult in DefaultWorldPlugin

Trey (1):
      Add revertible Neitiznot Faceguard to ItemMapping (#10038)

dekvall (6):
      Inventorygrid: Draw image for replaced item
      xptracker: fix goals set from level 1
      fishing: Set status to NOT fishing when the flying fish is active
      item identification: show identifier for placeholders and noted items
      XpTracker: Fix hopping to/from DMM worlds
      Clarify that blowpipe won't work with Robin clue

huddy987 (1):
      Add divine potion buy limits

trimbe (1):
      client: add random event plugin

wwchak (1):
      fishing: Add missing fishing platform highlight (#9989)
\`\`\`
`;export{n as default};
