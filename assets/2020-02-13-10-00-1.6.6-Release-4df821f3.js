const n=`---
title: '1.6.6 Release'
description: 'Pickpocket and Nightmare loot tracking, light sources for clues, and more'
author: Adam
---

The loot tracker will now track loot received from pickpockets.

![pploottracker](/img/blog/1.6.6-Release/pploottracker.png)

~~The old show opponent's opponent option has been readded for NPC opponents;
closer inspection of the [prohibited feature
list](https://secure.runescape.com/m=news/another-message-about-unofficial-clients?oldschool=1)
revealed the original cause for us removing it only applied to PVP: \`Indicates whom your opponent's opponent is in PVP\`~~

![oppinfo](/img/blog/1.6.6-Release/oppinfo.png)

The Crystal Math Labs plugin has been replaced with an \`XP Updater\` plugin,
which additionally now supports the TempleOSRS tracker. Remember that sending xp
update requests to external services necessarily sends your IP address _and_
display name to that service.

The CoX scouter plugin now has an option for screenshotting the overlay into the
clipboard, making it easy to share.

![cox](/img/blog/1.6.6-Release/cox.png)

The clue plugin now tells you when you are missing a light source required for
your clue.

![lightsource](/img/blog/1.6.6-Release/lightsource.png)

The interface styles plugin now has an option to always used the stacked-stones
arrangement, regardless of client resolution.

![stones](/img/blog/1.6.6-Release/stones.png)

There are also several smaller improvements and bug fixes, including:

- The loottracker now can track drops from the Nightmare
- Fix the Wintertodt plugin erronously sending a notification about being idle
  when you are already idle
- Dragging with the inventory grid enabled no longer drags grid cells
- The mouse tooltip position can now be configured to be above the mouse
- Fix imp spawn notifications sometimies not working in Puro-Puro
- The wiki plugin now has an option to make \`Search\` the default left click
  option
- The shift anti-drag plugin now also works in the bank
- Various hot-cold clues that were slightly off center have been centered, and
  the solver can now sometimes eliminate possible solutions even when the orb
  temperature has not changed
- The imbued heart timer now more reliably works when in combat
- The grand exchange plugin will now also record partially bought or sold
  offers, which can be viewed on the
  [website](https://runelite.net/account/grand-exchange). Additionally, the
  retention history has been upped to 90 days from 30.
- The NPC unaggro plugin can now notify you when the aggression timer expires
- Fix the LMS overlay to be movable
- The custom cusor plugin now allows user-supplied cursors by placing a file
  named \`cursor.png\` in your \`.runelite\` directory
- The dragonfire shield cooldown timer has been updated to use the [correct
  time](https://twitter.com/JagexAsh/status/1161987121709821953)
- Skilling potions have been added to the item identification plugin
- The twisted league slayer helm is now a recognized slayer item

Enjoy!

\\- Adam

### New commits

We had 22 contributors this release!

\`\`\`
15987632 (3):
      rl-api: add invoke and return opcodes
      rl-api: add script fired events
      devtools: add script inspector

Adam (16):
      wintertodt: fix interrupt notification firing when already idle
      cache: update sequence definition
      widget item: clip overlay to parent bounds
      screenmarkers: prevent null marker creation
      client: create combined cml/templeosrs xp updater plugin
      api: add both normal and dragging bounds to widgetitem
      inventory grid: don't drag grid square when dragging items
      clue plugin: add clue dev command
      opponentinfo: add opponent's opponent for npcs
      clue plugin: add reset overlay option
      loot manager: add support for nightmare
      loot tracker: add pickpocket events
      loot tracker: store and match events by type
      loot tracker: filter by type in details view
      http-service: increase ge history retention to 90 days
      widgetitemoverlay: clip dragged items when outside of parent bounds

Alex Germann (1):
      Update General Bentnoze clue step solution

Alexsuperfly (5):
      idle notifier: add fishing animations
      idle notifier: prevent double notifications for anim and interact
      move capturing of screenshots to ImageCapture utility
      Raids: Add clan chat and world to scouting overlay
      Raids: Enable screenshotting of scouting overlay

Crypthead (1):
      client: add configuration for tooltip position

David (1):
      clue plugin: add light requirements to clues

Grahm Larkham (1):
      imp plugin: fix notifications on npc change

Henry Darnell (1):
      Add ability and config to swap Lookup and Search in wiki plugin (#10690)

Hydrox6 (2):
      config: add support for integer config items to have units
      plugins: add units to configs

JBerben (1):
      antidrag: support bank interface

Jordan Atwood (4):
      HotColdLocation: Center some location spots
      HotColdSolver: Add same-temperature solution narrowing
      ConfigPlugin: Expand RuneLite plugin tags
      timers plugin: Improve imbued heart detection

Max Weber (8):
      loottracker: Optimize panel rebuild
      loottracker: Handle rollover/select icons correctly
      runelite-client: typecheck configs extend Config
      PluginHubPanel: Limit height of description to 2 lines, enable word wrap
      PluginManager: require start/stop to be invoked on the EDT
      gpu: refactor shader compilation
      gpu: run glslangValidator on shaders during tests
      gpu: rename length to size in shaders

Noah Haig (1):
      clues: add description to Prif elite coord clue

Oelderoth (1):
      grandexchange plugin: log cancelled buy/sell offers

Owain van Brakel (1):
      xpupdater: Fix config not showing

Paveldin (1):
      skill calc: add Spice Rack

Rob Mckennie (1):
      npcunaggroarea: add notification for timer expiration

Ron Young (5):
      plugins: add reset configuration method on plugin
      banktags: reset tagtabs and banktags when reset button is clicked
      widgetid: fix LMS INFO
      scripts: add LayoutResizableStones script
      interfacestyles: add ability to always stack resizable stones

Ryan H (1):
      customcursor: support providing custom cursor images

leopluerodon (1):
      Add twisted slayer helmet to item mappings and slayer plugin

mkowen1 (2):
      item id: add hunter, agility, fishing, and guthix balance potions
      item id: reformat extraneous spaces

ralphmtk (1):
      timers: correct dfs spec cooldown time
\`\`\`
`;export{n as default};
