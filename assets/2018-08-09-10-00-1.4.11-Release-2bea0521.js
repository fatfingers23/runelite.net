const e=`---
title: '1.4.11 Release'
description: 'Birdhouse timers, movable xp globes, and bug fixes'
author: Adam
---

The farming plugin has been renamed to the timer plugin and now includes timers,
stopwatches, and birdhouse timers. Thanks to
[@takuyakanbr](https://github.com/takuyakanbr) for contributing this awesome
feature!

![timer1](/img/blog/1.4.11-Release/timer1.png)
![timer2](/img/blog/1.4.11-Release/timer2.png)
![timer3](/img/blog/1.4.11-Release/timer3.png)

The RuneLite XP globes are now movable similar to other overlays:

![globes](/img/blog/1.4.11-Release/globes.gif)

There are also several smaller improvements and bug fixes, including:

- Add !cmb chat command
- Add agility clickbox overlay to Werewolf course
- Add tablet creation to idle notifier
- Fix pest control and report button plugins which broke in the Monday game
  update
- Fix screen shake interfering with vertical camera
- Add option to raids plugin to show scouter interface throughout the raid

Enjoy!

\\- Adam

### New commits

\`\`\`
Adam (9):
      Disable zoom extender when a cache overlay fails to load
      Fix applying default config to session settings
      modelviewer: fix some incorrect gl usage, add error logging
      modelviewer: fix zfighting of models
      item manager: assert item composition access is done from client thread
      ge plugin: fix accessing item composition from executor thread
      config service: update key name too when setting config
      chat commands: add !cmb command
      scripts: update for game update

Brady (2):
      Add missing shortcuts to trollheim (#4711)
      Move greater demon cannon spot to better location

Jaimy Smets (2):
      Add obstacles to Werewolf court
      Add tablet creation animation to idle notifier

Jordan Atwood (20):
      achievement diary plugin: Fix coal mining req
      chat commands plugin: Use consistent message check
      resources: Remove unused images
      SwingUtil: Fix grayscaleOffset to not modify alpha
      Add image utility class
      resources: Remove derivative images
      clan manager: Use Sprite IDs for rank badges
      plugins: Use shared clue arrow and reset images
      agility plugin: Use Item ID for arena timer
      clue scroll plugin: Use Item IDs for overlays
      death indicator plugin: Use Item IDs for overlays
      fight caves plugin: Use Sprite IDs for overlay images
      hiscores plugin: Remove duplicate skill icon images
      kingdom plugin: Use Item ID for overlay image
      puzzle solver plugin: Use Sprite ID for overlay image
      raids plugin: Use Sprite ID for raids timer
      screenshot plugin: Use Sprite ID for overlay image
      xp tracker plugin: Use shared image for icon
      ImageUtil: Add getResourceStreamFromClass method
      Remove unused @Slf4j annotations and imports

Kamiel (9):
      chat history: clear public chat when menu option is clicked
      item stats: fix tooltip not appearing when hovering over item
      menu entry swapper: fix last destination on arceuus fairy ring
      menu entry swapper: fix zanaris fairy ring not being recognized
      menu entry swapper: fix zanaris swap not working for PoH tree-ring combo
      player indicators: draw tile highlight on ABOVE_SCENE layer (#4629)
      Update chatbox widget IDs
      Update pest control widget IDs
      Update nightmare zone widget ID

Magic fTail (1):
      Add pharaoh's sceptres, Toxic staff of the dead, tome of fire item maps

Max Weber (4):
      mixins: Fix camera pitch relaxer not fully relaxing after a screen shake
      cache-client: Return failure to the handshake Future
      runelite-client: Make ItemManager's price update thread safe
      runelite-client: Always use the mapped price for items

Tomas Slusny (10):
      Add support for making XP globes moveable
      Use correct marker name when cancelling edit
      Add mappings for indexed script db
      Move isOverlayOutdated to IndexDatabase
      Account for linked item id, format tooltip
      Add Tournament world type
      Remove unnecessary headers from plugin panels
      Add null-check for game canvas
      Properly check for changing values in raids plugin
      Add setting to preserve scouter in raid

c01dc0ffee (1):
      Make DeathIndicatorPlugin use LocalPlayerDeath (#4745)

takuyakanbr (4):
      Convert farming tracker to time tracking plugin
      time tracking: add bird house tracker
      time tracking: add clock panel
      time tracking: add overview tab
\`\`\`
`;export{e as default};
