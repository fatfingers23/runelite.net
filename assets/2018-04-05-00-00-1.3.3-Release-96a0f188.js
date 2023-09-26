const n=`---
title: '1.3.3 Release'
description: 'Bank tags, item shift click configuration, and improved player indicators'
author: Adam
---

Bank tags have been added, which allow tagging items in the bank which can later
be searched on. Thanks to [@devdennis](https://github.com/devdennis) for this,
and [@abextm](https://github.com/abextm) for the input dialog work.

![banktags](/img/blog/1.3.3-Release/banktags.png)

You may now also customize the shift click option of any item in the inventory.
Right click the inventory and select "Configure", then select the option on the
item you want to use for shift click. Thanks to
[@Kamielvf](https://github.com/Kamielvf) for this!

![shiftclick](/img/blog/1.3.3-Release/shiftclick.gif)

The player indicator plugin can now render players clan ranks next to their
names and also show friends, teammates, and clan members in the right click menu.

![indicators](/img/blog/1.3.3-Release/indicators.png)

There are also several smaller improvements and bug fixes, including:

- Fix prayer reoder plugin not always reodering prayers since the last update
- Disable kingdom of misc plugin by default
- Add last destination for spiritual fairy tree to menu swapper plugin
- Allow configuring gp thresholds for ground items highlighting
- Add options to disable mouse tooltips on interfaces and in chatbox
- Fix nmz plugin informing you your absorption is low immediately after entering
  nmz
- Require shift to be held for npc tag option to be visibile
- Fix overlays drawing over the minimap area in fixed mode
- Move titlebar buttons to side bar when custom chrome is disabled
- Add option to enable the small font on all of the overlays
- Fix grounditems showing items as Members only when hopping from f2p to p2p
- Add fishing spots at Mount Quidamortem
- Add turquoise slayer helmet to the slayer plugin

Enjoy!

\\- Adam

### New commits

We had 11 contributors this release!

\`\`\`
Adam (21):
      cache: split color palette code into its own class
      cache: add and compute hsl in underlay
      cache: add and compute hsl in overlay
      cache: add post to object loader
      cache: rewrite map image dumper with logic from client
      ground items overlay: use a loop
      Add item layer changed event
      ground items: use item layer changed event
      Add maven-jar-plugin 3.0.2 to plugin management
      overlay renderer: use copyonwritelist for overlays
      overlay renderer: clip above scene and under widgets to viewport on fixed
      perspective: use viewport offset in get2DGeometry
      Revert "Merge pull request #1154 from deathbeam/team-member-names"
      clanchat plugin: change cache to expire after write
      Add clan member manager to cache clanmember ranks, use in clanchat plugin
      Move clanmember icon logic to clanmanager
      clanmanager: expose way to get bufferedimages for clan icons
      player indicator overlay: render clan rank next to names
      player indicators plugin: change color of menus
      bank tag plugin: use chatbox input manager
      Change MenuEntry type to int

Dennis (7):
      refactor method1721 to runWidgetOnLoadListener
      fix widget loaded event
      expose integer node fields
      expose widget flags
      expose widget actions
      add show menu option nine widget config
      add bank tags plugin

Infinitay (1):
      Disabled kingdom plugin by default, and it's options

Kamiel (6):
      Menu entry swapper: Swap last destination for spiritual fairy tree
      runescape-client: export getShiftClickActionIndex
      Add event for ItemComposition post()
      Add shift click customization to menu swapper plugin
      Add MenuOpened event
      Change shift-click customization behaviour

Max Weber (6):
      ScriptEvent > ScriptCallbackEvent
      Expose methods to execute scripts
      cache: Allow scripts to start with comments
      Mixins: Give scripts a log.debug callback
      Allow assembly and loading of new scripts
      Add ChatboxInputManager to provide a RuneScape styled input box

Morgan Lewis (4):
      Add configuration options for ground item plugin
      Add names from widgetInfo to the Widget Inspector
      Add options to disable mouse tooltip on interfaces and chatbox
      Fix challenge answer for Nurse Wooned clue

Seth (6):
      nmz plugin: reset absorption notification when not in NMZ
      impling plugin: Move minimap overlay into it's own overlay
      agility plugin: Add region check to lap counter
      npc indicator: add shift right click to add tag option
      agility plugin: remove duplicate gamestate event
      ground item overlay: Fix boxes appearing very small with small font

ShaunDreclin (2):
      Fix capitalization of 'Black demon' in npc_health.json
      Highlight current region in Location devtool

Tomas Slusny (24):
      Move loading of session before starting plugins
      Move viewport check below gamestate and CTP
      Save overlay data after resetting position
      Move title toolbar buttons to sidebar in native
      Improve ground items plugin
      Color the hidden items gray when in highlight mode
      Reduce the amount of temporary objects in items
      Invalidate ground items cache properly
      Invalidate item manager cache on hopping and login
      Use provider for client in item manager
      Add option for enabling small font
      Add support for drawing player team's names
      Add mappings and api for DMM player names
      Use built-in name rendering in player indicators
      Merge clan chat and player indicators plugin
      Always remove tags from player.getName()
      Add DMM name drawing opcodes to cache
      Add clan changed hook
      Properly invalidate clan ranks and names
      Add clan changed hook
      Add support for drawing player team's names
      Add mappings for DMM player names
      Add raids fishing spot
      Cache all ground items and then check their state

WooxSolo (1):
      Add chunk borders and map square borders to devtools

rune3132 (1):
      Added the turquoise slayer helmet to the slayer plugin
\`\`\`
`;export{n as default};
