const e=`---
title: '1.5.42 Release'
description: 'Woodcutting respawn timer, pet entity hider, Twisted League support'
author: Jordan
---

The [Woodcutting plugin](https://github.com/runelite/runelite/wiki/Woodcutting) now supports showing
respawn timers for chopped trees. Thanks to [Dava96](https://github.com/Dava96) for this
contribution.

![Woodcutting plugin tree respawn timer](/img/blog/1.5.42-Release/woodcutting-respawn-timer.gif)

The [Entity Hider plugin](https://github.com/runelite/runelite/wiki/Entity-Hider) has an added
option to hide the pets of other players. Thanks to [Trevor](https://github.com/Trevor159) for this
addition!

[![Entity hider pet toggle](/img/blog/1.5.42-Release/hide-pets.png)](https://streamable.com/d6yfl)

We've added support for Twisted Leagues:

- [Screenshots](https://github.com/runelite/runelite/wiki/Screenshot) are named properly for leagues
- [The HiScore plugin](https://github.com/runelite/runelite/wiki/HiScore) recognizes the leagues
  leaderboard and displays league points. [Opponent
  lookup](https://github.com/runelite/runelite/wiki/Opponent-Information) will use this leaderboard,
  and [changing worlds to or from a League world will properly reset your XP
  Tracker](https://github.com/runelite/runelite/wiki/XP-Tracker).
- [Hot-cold clues found in the Twisted
  League](https://github.com/runelite/runelite/wiki/Clue-Scroll) will properly start when read
- The [Death Indicator
  plugin](https://github.com/runelite/runelite/wiki/Death-Indicator) has learned the Twisted League
  respawn location and now works in Twisted Leagues.
- Your [HP regen meter](https://github.com/runelite/runelite/wiki/Regeneration-Meter) will update
  at the appropriate accelerated rate [if you are in the
  #endurancegang](https://oldschool.runescape.wiki/w/Endless_Endurance)
- [Chat history](https://github.com/runelite/runelite/wiki/Chat-History) will display correctly when
  logging in to a Twisted League world
- Teleporting with the Kourend home teleport [will now correctly add a Home Teleport cooldown
  timer](https://github.com/runelite/runelite/wiki/Timers)

Finally, a [League Chat Icons plugin](https://github.com/runelite/runelite/wiki/League-Chat-Icons)
has been added which can help players distinguish between League players and ironmen in the main
game. Thanks to [hsamoht](https://github.com/hsamoht) for this new plugin.

![leaguechat](/img/blog/1.5.42-Release/league-chat.png)

The [Chambers of Xeric plugin](https://github.com/runelite/runelite/wiki/Chambers-of-Xeric) has had
its rotation whitelist format updated. Now, instead of formatting whitelisted rotations as a list
of bracket-encapsulated rotations (eg. \`[muttadiles, shamans, mystics][vespula, tekton, vasa]\`),
they should have the brackets removed and be put on a new line per rotation, like the following:

\`\`\`
muttadiles, shamans, mystics
vespula, tekton, vasa
\`\`\`

There are also several smaller improvements and bug fixes, including:

- [Object markers](https://github.com/runelite/runelite/wiki/Object-Markers) marking objects which
  can change into other objects can be properly removed
- The [Rune Pouch overlay](https://github.com/runelite/runelite/wiki/Rune-Pouch) now displays your
  stored runes on both the normal Rune pouch and the Rune pouch (l)
- The [Screenshot plugin](https://github.com/runelite/runelite/wiki/Screenshot) can now take
  automatic screenshots when a player on your friends list or in your clan dies near you to help
  ensure they can re-experience their death
- Teleport sound effects have been classified as "Others' area sounds" for the purpose of muting via [the
  Music plugin](https://github.com/runelite/runelite/wiki/Music)
- You can now configure the [FPS Control
  plugin](https://github.com/runelite/runelite/wiki/FPS-Control) to limit your FPS to two different
  amounts when the game is focused or unfocused.
- The ![Woman face-palming
emoji](https://raw.githubusercontent.com/dekvall/twemoji/runelite-emoji/runelite-emoji/1f926.png)
  facepalm emoji has been added to the [Emojis
  plugin](https://github.com/runelite/runelite/wiki/Emojis) as the emoticon \`M-)\`
- The client now continues to [flash
  notifications](https://github.com/runelite/runelite/wiki/RuneLite#flash-notification) until it
  becomes focused (instead of clearing notifications by only mousing over the window)

Enjoy!

\\- Jordan

### New commits

We had 14 contributors this release!

\`\`\`
15987632 (1):
      entity hider plugin: add support for hiding pets

Adam (34):
      raid plugin: fix layout command room order
      Remove SEASONAL_DEADMAN world type
      Remove DEADMAN_TOURNAMENT world type
      http api: update hiscore for leagues
      api: add league world type
      hiscore plugin: add leagues
      world hopper: assign leagues world color
      screenshot plugin: add League folder
      opponent info: add league hiscore endpoint
      xptracker: add league world type
      chat commands: add support for league hiscores
      rotation solver: fix to use modulus instead of remainder operator
      clue plugin: add support for league hotcold clues
      woodcutting plugin: add respawn timer
      api: add welcome chat message type
      raids plugin: fix matching rotation whitelist
      api: use region size constant in getRegionOffset
      object indicators: use WorldPoint getRegionX/Y
      object markers: fix removing markers from multilocs
      api: refactor to use NameableContainer
      client: refactor for nameable api changes
      clan manager: use clanmember manager find to lookup rank
      client: add backup jav_config support
      world client: always return non null or throw an error
      client: use mock webserver for client config loader test
      hostsupplier: only supply regular f2p or p2p worlds
      chat controller: limit layouts to 16 rooms
      raids plugin: limit layout message to 300 characters
      api: add npc composition isInteractible
      npc highlight: skip noninteractiable npcs
      npc highlight: fix npc interactible check
      keyremapping: only update chatbox input and not player name
      client: add world service to manage world fetching
      add leagues chat icon plugin

Austin Lee (2):
      Add Bird Houses to crafting skill calculator (#10306)
      Add support for rune pouch (l) to rune pouch overlay (#10331)

HSJ-OSRS (1):
      screenshot plugin: add friend/clan member death screenshotting

Hydrox6 (1):
      inventory grid: use correct item quantities for drag previews

Jay (1):
      music plugin: reclassify teleport sfx as other players' area effects instead of environmental area effects

Max Weber (3):
      runelite-client: use privateLookupIn for invokespecialing defaults
      runelite-client: Use archive-patcher for the client-patch
      ClientLoader: Don't force the bootstrap classloader

Seth (2):
      death indicator: add Kourend respawn region
      regen meter: add support for endless endurance relic

al3x-huang (1):
      fpsplugin: Add multiple FPS targets for multiple modes (#10239)

chestnut1693 (1):
      loottracker plugin: fix typo

dekvall (2):
      emojis: add facepalm emoji
      attack styles: add test for swap between bludgeon and bow

emiljensen2 (1):
      notifier: require client to be focused to cancel notifications

seth (2):
      chathistory: update welcome message matching to include leagues
      Add kourend home teleport to timers plugin

winterdaze (1):
      Shorten NMZ overlay text to prevent overlapping (#10241)
\`\`\`
`;export{e as default};
