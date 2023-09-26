const e=`---
title: '1.5.16 Release'
description: 'Grand Exchange item stats and multicolor ground markers'
author: Adam
---

The item stats plugin will now show the stats of gear when selected in a buy
offer on the Grand Exchange.

![ge](/img/blog/1.5.16-Release/ge.png)

The ground markers plugin now supports having multiple ground markers of
different colors. The plugin will remember the color that was in use at the time
the marker was placed. Existing markers from prior to the update have no color
and will use whatever the current color is.

![markers](/img/blog/1.5.16-Release/markers.png)

There are also several smaller improvements and bug fixes, including:

- Fixed XP tracker sometimes not initializing correctly on login, which caused it
  to show very wrong XP rates
- Fix friend notes to work on players with spaces on their names
- Update Chaos Fanatic's slayer task icon to match respawn timer icon
- Fix Ardougne easy diary combat training camp requirement
- Add Hydra slayer helm to examine and bank value prices

Enjoy!

\\- Adam

### New commits

We had 9 contributors this release!

\`\`\`
Adam (4):
      config manager: throttle config saves to file
      friend notes: replace nbsp from friend names in config keys
      chat commands: check message length before use
      xptracker: fix initiailizing overall xp on login

Dennis (1):
      wiki plugin: add deselect on shutdown

Hydrox6 (1):
      wiki: Update the Fixed Minimap Clickbox to account for the spec orb

Jordan Atwood (5):
      ground markers plugin: Clean up legacy code
      ground markers: Fix startup and shutdown bug
      worldpoint: Add static fromRegion method
      worldpoint: Add getRegionX() and getRegionY()
      ground markers: Allow different colored markers

Max Weber (2):
      runelite-client: Remove ChatboxInputManager
      cache: use RuneStar cs2 opcode names

Nate Brown (1):
      Change Chaos Fanatic's slayer task icon to match respawn timer icon (#8162)

Seven-Ate (1):
      Add missing item mappings for hydra slayer helm

Tomas Slusny (1):
      Remove unnecessary .get() on OkHttp request

trimbe (6):
      diary requirements: add missing period in combat camp task
      add GE offer building script
      item stats: add item information panel when buying items in the ge
      mixins: use last non-null child to determine index for new widgets
      item stats: use GameTick to determine when GE is closed
      item stats: use ClientThread where necessary for resetting
\`\`\`
`;export{e as default};
