const e=`---
title: '1.2.15 Release'
description: 'RuneLite 1.2.15 is released!'
author: Adam
---

An agility plugin has been added which shows the click boxes of ability obstaces.
Thanks to [@SomeoneWithAnInternetConnection](https://github.com/someonewithaninternetconnection)
for their hard work on reversing the clickbox calculations and making this happen.

![agility1](/img/blog/1.2.15-Release/agility1.png)

![agility2](/img/blog/1.2.15-Release/agility2.png)

![agility3](/img/blog/1.2.15-Release/agility3.png)

[Discord Rich Presence](https://discordapp.com/rich-presence) support has been
added in a new Discord plugin from [@deathbeam](https://github.com/deathbeam).
It will show what skill you are training in game as your discord status.

![discord](/img/blog/1.2.15-Release/discord.png)

Additionally, abyss rift locations and player owned house locations are now
marked on the minimap thanks to [@Sethtroll](https://github.com/sethtroll).

![abyss](/img/blog/1.2.15-Release/abyss.png)

![poh](/img/blog/1.2.15-Release/poh.png)

And the burners are now marked as lit or unlit:

![burners](/img/blog/1.2.15-Release/burners.png)

There are also several smaller improvements, including:

- The screenshot plugin now has configuration for the auto screenshot of
  levelups and rewards
- There is now an option to overlay non-clan members in the player indicator
  plugin
- Theoretical boosts have been added to the item stats plugin
- Indicators have been added for stat boots as an alternative to the current
  overlay
- Fix sometimes drawing overlays at the wrong height above players and npcs
- Don't enable low memory mode on the audio subsystem when the client is
  configured in low memory mode, so the sounds sound normal
- The teamcape plugin has been readded

\\- Adam

### New commits

We had 9 contributors this release!

\`\`\`
Adam (10):
      Revert "runelite-client: remove teamcape plugin"
      cache client: log when index crc changes too
      cache service: fix duplicating index to archive associations
      cache service: split up into cache controller and service
      Split out cache updater into own project
      http service: change cache datasource to runelite-cache2
      runelite-client: add central skill icon cache
      screenshot plugin: add configuration for auto screenshot of levelups and rewards
      screenshot plugin: fix test
      player indicators: use new isFriend/isClanMember api

Ben Moyer (2):
      add option to overlay non-clanmate player names
      Add theoretical boost to item stat overlay

Kamiel (5):
      info box component: vertically center images
      Add indicators to boosts plugin
      Fix several issues with indicators
      Prevent tooltip from being shown when runepouch is empty
      Make examine plugin work for runepouch

Max Weber (4):
      move session management into the SessionManager from the AccountPlugin
      Add info panel plugin
      field1147 > logicalHeight
      change getModelHeight to getLogicalHeight

Seth (5):
      runelite-api: add MiniMapImageLocation to perspective
      runecraft plugin: add Abyss rifts overlay
      make injected fields private
      Fix color tags in OpponentInfo
      Add Poh plugin

SomeoneWithAnInternetConnection (9):
      Decrease the injector plugin's verbosity
      runescape-client: Rename some AABB-related fields
      Simplify Triangle and Vertex with lombok
      Move orientation incantation into Vertex.rotate
      Add method to get the clickable area of a TileObject
      Add events for Decorative and Ground TileObjects
      Add agility plugin
      Fix boosts plugin style nits
      Fix NPEs from BoostsPlugin at startup

Tomas Slusny (6):
      Change default overlay position to UNDER_WIDGETS
      Add new overlay layer position
      Adjust overlay layers and priorities
      Fix MLM plugin overlay layer
      Add Discord RPC service
      Add Discord plugin

UniquePassive (3):
      Always use "high memory" audio
      Rename highMemory to audioHighMemory
      Rename ocLowDetail to objectCompositionLowDetail

Unmoon (3):
      Idle Notifier - Change wording and default value of "Alert When Focused"
      Show ground items under widgets and with interfaces open
      Remove unused import
\`\`\`
`;export{e as default};
