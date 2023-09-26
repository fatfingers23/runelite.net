const e=`---
title: '1.6.28 Release'
description: 'Multiple infobox groups, birdhouse loot tracking, and tile labels'
author: Adam
---

Infoboxes can now be split into multiple groups, and independently positioned
and rotated. Shift right click an infobox and select \`Detach\` to move an infobox
to its own group, and \`Flip\` to change the group orientation between vertical
and horizontal. The groups can be dragged as normal overlays via the usual
method of holding alt. To remove a group, and move all infoboxes in it back to
the default group, select the \`Delete\` option.

![infoboxes](/img/blog/1.6.28-Release/infobox.gif)

The loot tracker now tracks loot from birdhouses

![birdhouses](/img/blog/1.6.28-Release/birdhouse.png)

The tile marker plugin now optionally allows assocating labels to marked tiles

![tilelabel](/img/blog/1.6.28-Release/tilelabel.gif)

There are also several smaller improvements and bug fixes, including:

- The cannon plugin now shows the world your cannon was placed on in the
  infobox tooltip.
- Some graphical anomalies related to drawing models which are very close to
  or partially behind the camera with GPU on has been fixed. This has also
  reduced the complexity of the GL pipeline, particularly with the
  \`Compute shaders\` option off, so you may find this works for you now if you
  have buggy drivers.
- The [OSRS Wiki Crowdsourcing plugin](https://oldschool.runescape.wiki/w/RuneScape:Crowdsourcing)
  is now included and enabled by default. This collects anonymous skilling data
  to help improve the [OSRS Wiki](https://oldschool.runescape.wiki).
- The loot tracker now correctly tracks the Grubby chest.
- An option has been added to outline infobox text, which can improve readability.
- The item charges plugin now correctly tracks destroying dodgy necklaces, rings of
  forging, and amulets of chemistry.
- A bug causing the farming tracker to incorrectly track the Catherby patches
  has been fixed.
- Examining large stacks of items now shows digit group separators.
- The inventory viewer now has a configurable hotkey to toggle the overlay.
- A \`Use\` swap has been added for grimy herbs.
- The chat filter plugin can now additionally filter game and spam messages.

Enjoy!

\\- Adam

We had 12 contributors this release!

\`\`\`
Adam (16):
      containable frame: assume jdk 12/13/14 do not have fix for JDK-8231564
      overlay renderer: use isKeyPressed instead of tracking shift key state
      raid plugin: simplify timer infobox logic by overriding render
      gpu: don't interpolate texture ids
      overlay renderer: don't allow moving dynamic or tooltip overlays
      infobox: add support for multiple infobox groups
      loot tracker: fix tracking grubby chest
      slayer plugin: simplify a few regex patterns
      gpu: use noperspective for hsl interpolation
      loottracker: submit loot when not logged in
      config: Add infobox component outline option
      key manager: move key event logging to trace level
      item charges: fix resetting dodgy necklace, ring of forging, and amulet of chemistry
      examine plugin: format quantity of large item stacks
      gpu: dispose of graphics objects
      ground markers: add tile labels

Eric Pratt (1):
      devtools: add movement flags

Jack Hodkinson (1):
      Sort plugin search results with closer test matches higher (#12432)

Jacob Mischka (1):
      Fix screenshot with hidpi scaling with GPU plugin

Jordan Atwood (4):
      banktags: Don't lose scroll position when hiding separators
      Move Experience tests to proper test class
      KeyManager: Add debug logging
      util: Remove unused and unneeded methods

Matthew C (5):
      cannon: sort spots alphabetically
      cannon: update mammoth cannon spot
      timers: add world placed to cannon timer tooltip
      inventoryviewer: Add a keybind toggle to hide the overlay.
      runecraft: cleanup, refactor AbyssRifts, updateRifts()

Max Weber (1):
      timetracking: correctly bound Catherby patches

Michal Zielinski (1):
      menu entry swapper: add clean swap

Runemoro (1):
      gpu: replace toScreen function with a projection matrix

Sean Patiag (1):
      chatfilter: Add option to filter game chat

SirGirion (1):
      loot tracker: add bird houses

leejt (1):
      Add crowdsourcing plugin
\`\`\`
`;export{e as default};
