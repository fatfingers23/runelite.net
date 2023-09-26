const n=`---
title: '1.2.17 Release'
description: 'New raid scouting plugin, Kourend library book finder, and chat history plugin!'
author: Tomas
---

A new raids plugin was added by [@Kamielvf](https://github.com/Kamielvf). This plugin will make raids
an even more pleasant experience and adds support for scouting.

![raids-scouting](/img/blog/1.2.17-Release/raids-scouting.png)

![raids-points](/img/blog/1.2.17-Release/raids-points.png)

![raids-timer](/img/blog/1.2.17-Release/raids-timer.png)

Due to recent success of Woox's [Kourend library website](https://wooxsolo.github.io/KourendLibrary/index.html) one
of our contributors [@Abextm](https://github.com/Abextm) decided to top that and implement a similar feature
into RuneLite. It shows where requested books will most likely be and also people who can
request books from you.

![kourend-library](/img/blog/1.2.17-Release/kourend-library.png)

For everyone who loves smithing, Blast Furnace plugin was added.
It shows the money in the coffer and bars in the dispenser. Thanks to [@sethtroll](https://github.com/sethtroll)!

![blastfurnace.png](/img/blog/1.2.17-Release/blastfurnace.png)

The configuration system was significantly improved and the plugin manager interface was changed
to provide better access to enabling and disabling of plugins.

![plugin-manager](/img/blog/1.2.17-Release/plugin-manager.png)

A new chat history plugin was added, that will preserve your chat history during logout and world
hopping. Never miss messages due to hopping again!

![chat-history](/img/blog/1.2.17-Release/chat-history.png)

If you had problems before differentiating player and NPC minimap dots before, a new plugin for modifying
colors of the dots was added.

![minimap](/img/blog/1.2.17-Release/minimap.png)

There are also several smaller improvements and bug fixes, including:

- Screenshot plugin was improved and should now properly work with most of the level ups
- Tooltips are now displaying even for game interface actions
- Tooltips for ironmen and moderators now show the correct icon when hovered
- Toggle to show only highlighted items was added to the Ground Items plugin
- Configuration for the color of the NMZ absorption counter was added to the Nightmare Zone plugin
- Clan chat icons now look good even in fixed mode
- The speed of !price lookups is now quicker

Enjoy!

~ Tomas

### New commits

We had 10 contributors this release!

\`\`\`
Adam (22):
      Use client Varbit for index, lsb, msb
      Hide xtea plugin from list
      Hide config plugin
      config panel: fix check/uncheck image names
      runelite-client: remove many unnecessary bindings in configure() in plugins
      runelite-client: checkstyle fixes
      http-service: split itemservice into service and controller
      item controller: cache empty price lookups
      item service: always use last known price, and queue price updates instead
      Fix varbits to read the other settings[] array
      boosts plugin: check if skills change before removing infoboxes
      remembser name plugin: fix not setting usernames on session open
      runelite-client: add plugin dependencies
      xp tracker: expose xp stats
      woodcutting plugin: use stats from xp plugin
      fishing plugin: use stats from xp plugin
      runelite-client: add minimap dot plugin
      cannon plugin: check cannon location is in scene
      nmz: reformat config
      item service: change search to only search database
      slayer plugin: remove tasks with item image -1
      tooltip component: split text width calculation into its own method

Ben Moyer (1):
      Remove duplicate tracking info in fishing/woodcutting overlays

Joshua Filby (2):
      cache: release the ByteBuf allocated when calling ByteBuf#readBytes(int)
      Release ByteBuf in CacheClient when downloading chunks

Kamiel (3):
      Fix clanchat icons
      Update team cape plugin to make use of new plugin panel toggles
      Raids scouting plugin

Lotto (8):
      screenshot-plugin: extend test to test Attack and Hunter lvlups
      Change copyright header for UniquePassive to Lotto
      screenshot-plugin: adjust time/date format to not include spaces
      screenshot-plugin: run image saving logic in another thread
      Render modicons in tooltips
      Import API for getting remembered username from preferences.dat
      Update RememberUsernamePlugin to save the name from the vanilla feature
      Change name of RememberUsername plugin to UsernameSyncer

Max Weber (10):
      Fix removing items from the TitleToolbar
      injector: Choose the right constructor if multiple exist
      Change perspective to convert world to local points centered on the tile
      hunter plugin: add imp box
      hunter plugin: Fix null pointer when going across a loading zone
      Add Kourend Library plugin
      Fix menu action clicked hook log
      Merge HUNTER_LEVEL_UP* and DIALOG_LIBRARY_FIND* into DIALOG_SPRITE*
      Allow the info panel's navButton to be removed on shutDown
      Sort the PluginToolbar

Nickolaj Jepsen (1):
      nmz plugin: add color config for the absorption infobox

Seth (6):
      item stat: fix overlay being shown ontop of menu
      imagePanelComponent: Add support for multiple images
      Add Blast furnace plugin
      Remove @Nullable Client annotations
      ground items: Add toggle to show highlighted items only
      ground items: re-order the config

Tomas Slusny (18):
      Add ability to disable/enable all plugins
      Remove enabled() checks
      Fix slayer plugin task reset on config change
      Add region tile manager
      Clear game objects on plugin shutdown
      Add null check for 6 hour waiting time
      Add startup and shutdown methods to DiscordPlugin
      Enable/disable plugins in the ConfigPanel
      Remove "plugin" from each plugin name
      Properly invalidate cache and load icons in Clan
      Re-cache chatMessageManager colors on startup
      Disable configuration button when all items hidden
      Add support for Karambwan/Karambwanji to fishing
      Display tooltips for widget actions
      Fix PuzzleSolverOverlay layer
      Enhance the sending message API
      Add check for clan members > 0 when inserting icon
      Add chat history plugin

UniquePassive (5):
      Add Hunter levelup widget info
      screenshot-plugin: don't include spaces in file names
      screenshot-plugin: adjust the comments for to-be-parsed text
      screenshot-plugin: don't depend on "a " in skill name string
      screenshot-plugin: add detection for Hunter levelups
\`\`\`
`;export{n as default};
