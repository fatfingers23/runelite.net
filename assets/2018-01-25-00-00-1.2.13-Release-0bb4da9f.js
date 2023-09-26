const e=`---
title: '1.2.13 Release'
description: 'RuneLite 1.2.13 is released!'
author: Adam
---

This release includes several notable features, including:

[@UniquePassive](https://github.com/UniquePassive) added a screenshot plugin,
overlay layers, which automatically takes a screen shot on level up, clue
completion, and quest completion. The screenshots may optionally be
automatically uploaded to imgur.

You may manually take a screenshot by clicking the camera icon in the titlebar:

![screenshot-plugin](/img/blog/1.2.13-Release/screenshotplugin.png)

If you enjoy the old Low Detail mode, [@deathbeam](https://github.com/deathbeam)
contributed a low detail mode plugin which lets you toggle it.

![lowdetail](/img/blog/1.2.13-Release/lowdetail.png)

Finally, [@SomeoneWithAnInternetConnection](https://github.com/someonewithaninternetconnection)
added a metronome plugin to aid with timing game ticks.

There were also several smaller improvements, including:

- Fixed ground items overlay to correctly account for tile height when drawing item names.
- Allow plugin panels, including the configuration panel, to keep state between
  being collapsed and expanded.
- Fix idle notifier to more reliably notify you
- Fix broken glyphs which are evident on some overlays
- Add infernal eel to fishing plugin

On a more serious note, Jagex has requested removal of the Zulrah Helper,
Volcanic Mine Helper, Teamcape Overlay, and AoE Plugin for being in violation of
the game rules. These plugins have been removed.

Additionally, support for loading external plugins has been removed upon request
from Jagex.

\\- Adam

### New commits

We had 13 contributors this release!

\`\`\`
Adam (19):
      cache service: lazily load store
      cache service: skip loading filedata as it is not necessary for cache updater
      cache service: move database updating to happen during download
      cache service: don't skip already up to date archives
      cache service: use an identity hashmap as equals checks archive contents
      Revert "cache service: use an identity hashmap as equals checks archive contents"
      Revert "cache service: don't skip already up to date archives"
      Revert "cache service: move database updating to happen during download"
      cache service: remove unused import
      item service: set cache-control: public too
      config panel: don't show groups with no visible config items
      runelite-client: move all main loop checks info try/catch
      infobox manager: check infobox isn't null
      xp tracker: don't reset on logout or hop
      http-service: split hiscore service from controller
      http-service: add beginning of xp tracker
      deobfuscator: map classes of static fields which are initialized in clinit
      Add maven central to be tried before repo.runelite.net
      runelite-client: remove version and account name from title

Cameron Moberg (2):
      Fixed Slayer task infobox only updating on state change
      Changed how idle checks in combat

Dreyri (16):
      add setter for textColor
      add setter for spriteId
      add setter for width
      add setter for height
      add setter for name
      add setter for contentType
      add setter for type
      add getter/setter for scrollX
      add getter/setter for scrollY
      add setter/getter for originalX
      add getter/setter for originalY
      add getter for paddingX
      add getter for paddingY
      add setter for paddingX
      add setter for paddingY
      dev tools: allow editing widget settings

Martin Tuskevicius (1):
      Swapped viewport width and height fields.

Max Weber (1):
      Allow PluginPanels to keep state

Seth (1):
      Add Clue Scroll/Barrows to screenshot plugin

SomeoneWithAnInternetConnection (7):
      Name some internal runescape audio bits
      Implement sound-playing API
      Add collection of named SoundEffect IDs
      Add metronome plugin
      Rename debug boundingbox drawmode enums
      Expose runescape click/boundingbox display mode
      Add bounding/clickbox buttons to the devtools plugin

SteveOSRS (1):
      Added infernal eel to fishing plugin

Tomas Slusny (14):
      Add startUp method for attack indicators plugin
      Fix startup and shutdown method of AccountPlugin
      Add shutDown to BossTimersPlugin
      Add shutDown to ConfigPlugin
      Add shutDown to DevtoolsPlugin
      Add shutDown method to HiscorePlugin
      Add startup and shutdown methods to SlayerPlugin
      Add shutDown method to TimersPlugin
      Add shutDown method to XpTrackerPlugin
      Fix NPE in ScreenShotPlugin
      Fix idle notifications for animation changes
      Update Project Lombok version to 1.16.20
      runescape-client: rename low detail fields
      Add low memory mode plugin

Tyler Hardy (1):
      Add gargoyle boss to aoe plugin

UniquePassive (7):
      runescape-client: Fix broken glyphs
      Notify before 5 minute idle and 6h logout
      Add nullcheck for counter in SlayerPlugin#onConfigChanged
      runelite-client: update to substance 8.0.00-dev
      runelite-client: add client ui loaded event
      runelite-client: add screenshot plugin
      http-service: fix exception on empty config setKey request body

noremac201 (2):
      Progress Bar Component to not show 2 decimals percent
      Standardize xpglobe tooltip width

oplosthee (1):
      Incorporate height into the GroundItems overlay
\`\`\`
`;export{e as default};
