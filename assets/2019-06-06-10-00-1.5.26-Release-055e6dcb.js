const n=`---
title: '1.5.26 Release'
description: 'Mining rock respawn timer, inventory grid, and F-key remapping'
author: Adam
---

A mining plugin has been added which shows respawn times for rocks.

![mining](/img/blog/1.5.26-Release/mining.gif)

An inventory grid plugin was added which will overlay a grid of each item slot
in the inventory when an item is dragged, aiding with rearranging inventory
items.

![invgrid](/img/blog/1.5.26-Release/invgrid.gif)

The WASD plugin has been _renamed_ to the Key Remapping plugin. If you had it on
prior to the update you will need to turn it on again. It now also supports
remapping the number keys (\`0-9\`, \`-\`, and \`=\`) to the F keys, to aid Mac users.

There are also several smaller improvements and bug fixes, including:

- The wine ferment timer was fixed, again, and actually works now
- The Barbarian Assault plugin was updated for last week's game update and now
  correctly shows the wave time again
- Fix the agility plugin not highlighting the Al-Kharid zipline
- Fix the clue plugin to identify the correct stash unit near the Exam Centre
- The authenticator code can now be pasted into the login screen, similar to
  username and password

Enjoy!

\\- Adam

### New commits

We had 7 contributors this release!

\`\`\`
Adam (19):
      Revert "cooking plugin: fix wine fermentation timer to begin at appropriate time"
      Revert "cooking plugin: add wine ferment timer"
      Revert "cooking plugin: rename session to cooking session"
      cooking plugin: add wine ferment timer
      mixins: fix game object events to not fire for actors, projectiles, and graphic objects
      client: add mining plugin
      ba: update to no longer use icons to determine role
      ba: fix wave timer announce from exiting a tutorial
      ba: null game time after the game has been finished
      music plugin: delete all child widgets before adding buttons
      quest plugin: delete all child widgets before adding buttons
      wasd plugin: rename to keyremapping plugin
      keyremapping plugin: add F-key remapping
      keyremapping: fix keys getting stuck from map loading
      keyremappinig: replace some lambdas with method references
      achievement diary: fix legends guild jewllery task
      api: modify Widget.getWidgetItem to return widget items when no item exists
      client: add inventory grid plugin
      inventory grid: add delay before activating overlay

Hydrox6 (1):
      agility: Fix highlighting of Al Kharid zip line

Jordan Atwood (1):
      HotColdLocation: Replace nbsp with normal spaces

Ron Young (2):
      mixins: correct widget item bounds location for if1
      client: readjust widget item overlay positions for modified widget item bounds

Tomas Slusny (3):
      Expose loginIndex and otp fields from runescape client
      Add LOGIN_SCREEN_AUTHENTICATOR game state
      Add support for pasting authenticator code on login screen

William Collishaw (2):
      Remove redundant subString endindex .length() calls
      Replace redundant StringBuilder append String.subString with append CharSequence

xDemoN (2):
      Fix numulite buy limit in GE plugin (#8962)
      Cluescrolls: Swap STASH Units for Exam Centre Emote Clues (#8963)
\`\`\`
`;export{n as default};
