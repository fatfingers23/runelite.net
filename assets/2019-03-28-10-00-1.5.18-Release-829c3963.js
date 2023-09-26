const e=`---
title: '1.5.18 Release'
description: 'Quest list plugin and special attack sharing enhancement'
author: Jordan
---

A Quest List plugin has been added, which adds a button to toggle visibility of completed quests,
and adds a search button to limit the shown quests in the list. Thanks to
[@spudjb](https://github.com/spudjb) for adding this feature!

![Completed quest toggle button](/img/blog/1.5.18-Release/completed-quest-toggle.png)
![Quest search dialog](/img/blog/1.5.18-Release/quest-search.png)

The
[Special Attack Counter plugin](https://github.com/runelite/runelite/wiki/Special-Attack-Counter)
now shares special attack hits with your party members, with this information displayed in the
tooltip.

![Shared party special attacks](/img/blog/1.5.18-Release/party-specs.gif)

There are also several smaller improvements and bug fixes, including:

- The Bank Value plugin has been renamed to the Bank plugin, and now offers options to force
  right-clicking on the deposit inventory/worn buttons
- The XP tracker no longer resets the overall XP display when using the "Reset others" right-click
  option
- The Special Attack Counter plugin no longer tracks special attacks on other players
- The loot tracker now tracks loot obtained from the Brimstone chest
- The \`!kc\` chat command will now track herbiboar harvest counts

Enjoy!

\\- Jordan

### New commits

We had 10 contributors this release!

\`\`\`
Adam (11):
      api: add event for controlling menu left click behavior
      Revert "client: load jagex config and client over https"
      config service: return an empty config if no config is found
      xptracker: fix "Reset others" resetting overall xp
      client: show error dialog when unable to load client
      client: verify client signature
      http-service: update mysql driver to mariadb 2.2.3
      spec plugin: only count specs on npcs
      spec plugin: share specs with party
      mixins: fix incorrect usage of getNameables()
      chat message builder: escape messages

Adam Ballinger (1):
      Add brimstone chest support to loot tracker

Andrew Ghaly (1):
      hooks: fix typos in javadoc

Hydrox6 (3):
      client: rename \`Bank Value\` plugin to \`Bank\`
      bank: add option to force right click on deposit container buttons
      chat filter: Fix issue where special attack overheads crashed the game

Jim Frode Nilsen (1):
      chat commands: add herbiboar kc

Kevin Zita (1):
      Fix "Bandind" typo in coordinate clue descriptions (#8287)

Max Weber (1):
      ChatboxPanelManager: Be more resilient when scripts mismatch

Tomas Slusny (6):
      Make GPU plugin DPI aware on Java 9+
      Check for empty strings when initializing twitch client
      Always close twitch client in connect() method
      Normalize configuration between cache-updater and http-service
      Migrate OAuth callback to Spring configuration property
      Add development configuration for Spring http-service

spudjb (1):
      Add quest list plugin

xDemoN (2):
      Remove incorrect farming guild location (#8250)
      Clue Scroll: Fixe Varrock East Bank Cryptic Clue (#8241)
\`\`\`
`;export{e as default};
