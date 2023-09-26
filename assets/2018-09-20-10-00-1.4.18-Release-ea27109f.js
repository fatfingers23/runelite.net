const n=`---
title: '1.4.18 Release'
description: 'Wintertodt plugin and virtual levels plugin'
author: Adam
---

A Wintertodt plugin was added which shows your current activity and can be
configured to notify you when you become idle. It also tracks points in your
inventory from logs or kindling and displays it. Thanks to work from
[@jbfleischman](https://github.com/jbfleischman) for initially getting this
started.

![wintertodt1](/img/blog/1.4.18-Release/wintertodt1.png)
![wintertodt2](/img/blog/1.4.18-Release/wintertodt2.png)

A virtual levels plugin was added which shows virtual levels and virtual skill
total on the skills tab. It is off by default. Thanks to [@Joshua
Filby](https://github.com/Joshua-F) and
[@Nightfirecat](https://github.com/Nightfirecat) for their work on this.

![virtuallevels](/img/blog/1.4.18-Release/virtuallevels.png)

There are also numerous smaller improvements and bug fixes, including:

- Add Fairy Ring AIQ to Mudskipper Point Clue
- Colorize "Lookup" player menu entry if applicable
- Fix Dwarf Cannon quest start location on the world map
- Add notification for low fishing trawler activity
- Add sand to Daily Notifications plugin
- Add daily runes to Daily Notifications plugin

Regarding the [world hopper being
disabled](https://runelite.net/blog/show/2018-09-18-Worldhopper-disabled), we
have fairly thoroughly reviewed other hopping implementations and can not find
anything with the World Hopper action forcing that would differentiable on
Jagex's side. Based on the
[plugin history](https://github.com/runelite/runelite/commits/master/runelite-client/src/main/java/net/runelite/client/plugins/worldhopper/WorldHopperPlugin.java)
the newest addition is the Hop-To chat option from pull
[#5125](https://github.com/runelite/runelite/pull/5125) which went into RuneLite
release 1.4.15 on Aug 30. Because other clients do not have this feature, this
is my first guess as to what the problem is.

I have asked Jagex to review if there were any issues with the world hopper
prior to Aug 30. If not, we should be able to remove the chatbox Hop-to feature and
reenable the plugin.

Enjoy!

\\- Adam

### New commits

\`\`\`
Adam (3):
      world hopper: disable world hopper plugin
      Add Wintertodt Plugin
      runelite-api: add queueChangedSkill for queueing a skill change event

Gary (1):
      Add Fairy Ring AIQ to Mudskipper Point Clue

Jordan Atwood (8):
      hiscore plugin: Colorize "Lookup" player menu entry
      Add world map surface selector and overview map widgets
      world map overlay: Render on ABOVE_WIDGETS layer
      world map overlay: Clip around widgets above map
      Centralize item (de)spawn log messages
      opponent info plugin: Fix possible onGameTick NPE
      clue scroll overlay: Show visible emote widget area
      Add Virtual Levels plugin

Lotto (1):
      entityhider: make hidden entities not occupy the tile they're on

Max Weber (5):
      runescape-api: Update setWorldMapPositionTarget's name
      Worldmap: Fix Dwarf Cannon start location
      idlenotifier: Correctly warn about AFK kicking
      banktags: Don't use cs2 to add menu options
      Revert "Add camera setters to Client.java and RSClient.java."

Runelite auto updater (1):
      [maven-release-plugin] prepare for next development iteration

Sebastiaan Vanspauwen (2):
      MTA: Fixed alchemy
      BA plugin: widget overlay fix

Shaun Dreclin (1):
      Refactor daily task indicator plugin

ShaunDreclin (2):
      Add notification for low fishing trawler activity
      Add sand to daily task indicator

Tomas Slusny (5):
      Make HiscoreClient call the OSRS hiscore API directly
      Fix WorldMapPlugin
      Add option for displaying only last fished fish
      Add fishing spot display configuration
      Return null instead of IllegalArgumentException from hiscore

astaninger (1):
      Add daily runes to Daily Notifications plugin (#5219)

rbbi (1):
      Change skill calc checkboxes to radio buttons (#4373)
\`\`\`
`;export{n as default};
