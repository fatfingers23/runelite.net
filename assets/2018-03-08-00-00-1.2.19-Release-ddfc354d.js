const e=`---
title: '1.2.19 Release'
description: 'Stretched fixed mode, default world, and grand exchange price search!'
author: Adam
---

Stretched fixed mode has been added, which stretches the game screen and makes
it more playable on high resolution monitors. Thanks to [@devLotto](https://github.com/devLotto) for making this happen.

[@sethtroll](https://github.com/sethtroll) added a GE search feature to the
existing grand exchange plugin. You may also use alt+click on your inventory to
GE search an item now.

![ge-search](/img/blog/1.2.19-Release/ge-search.png)

A news feed plugin was added which shows the latest RuneLite blog posts, Old
School RuneScape news, and a Twitter feed of JMods.

![news-feed](/img/blog/1.2.19-Release/news-feed.png)

[@ChaoticConundrum](https://github.com/ChaoticConundrum) added Notes plugin that will allow you to
store notes that will be persisted via RuneLite configuration system.

![notes](/img/blog/1.2.19-Release/notes.png)

Finally, the long-requested default world plugin has been added thanks to
[@deathbeam](https://github.com/deathbeam), which sets a preconfigured home
world by default.

There were many smaller improvements and bug fixes, including:

- The raids plugin now allows configuring whitelist/blacklist layouts and
  rotations.
- The screenshot plugin now takes screenshots of raid rewards
- Fix length of prayer enhance timer
- The instance map can now be closed with escape and floor can be changed with scrollbar
- The "You are fishing" overlay now works again since the last OSRS update
- [@arlyon](https://github.com/arlyon) improved native OSX support - with native fullscreen, and focus
  requesting
- Fix cannon plugin showing incorrect double hit spots after region change
- Allow disabling of the skill icons on XP drops
- Clear saved private chat history upon clear request
- Fix clanchat icons not showing during region loading
- Add configuation option to make the client size fixed
- Add minimum threshold to teamcape configuration, and now disable by default
- Most of the plugins has been renamed to proper names, abbreviations was removed and casing was fixed
  (for example Raids plugin is now named "Chambers Of Xeric")
- Special Attack Orb plugin was removed in favour of native OSRS special attack orb
- Various notifaction-related settings was moved to "RuneLite" config section, and now they are applied
  to all notifications

Enjoy!

\\- Adam

### New commits

We had 14 contributors this release!

\`\`\`
Adam (12):
      runescape-client: add jav_config
      cannon plugin: use infobox counter instead of overlay
      http-service: add session service
      http-api: add session client
      runelite-client: add client session manager
      client session manager: delete session on shutdown too
      http-service: queue item lookups from images
      input: don't allow duplicate input handlers
      item service: process pending lookups in order
      Change mouse wheel listener back to an interface as the instance map input listener uses it
      ge panel: use static number formatter
      runelite-client: add configuration option for resizable

Charlie Waters (3):
      Add Notes plugin
      Add waterskin charges to jewellerycount plugin. Fixes #825.
      Fix notes plugin loading notes from account

David Kosub (1):
      Notifier improvements and fixes

Desetude (3):
      Fixed HiscorePanel text
      Allow customization of the default color for ground items
      Renamed 'Experience drop' -> 'XP Drop'

Kamiel (13):
      Add ability to whitelist layouts
      Add ability to highlight rooms
      Add ability to whitelist boss rotations
      Add floor duration(s) to infobox tooltip
      Get points from varbits instead of widget
      Set size properly
      Make rotation whitelist not case-sensitive
      Raids plugin: read proper input for room whitelist
      Instance map: Add support for user input
      Clear saved private chat history upon clear request
      Allow disabling of the skill icons on XP drops
      Fix cannon plugin showing incorrect double hit spots after region change
      Fix clanchat messages not showing rank icons at certain moments

Lotto (18):
      deobfuscator: fix aic failing to determine if a field is imported
      http-api: add feed types
      http-service: add services for getting blog posts, tweets and osrs news
      http-service: add feed api endpoint
      http-api: add client for looking up feed
      runelite-client: add news feed plugin
      Improve deob method finding in the injector
      Use a mixin for calling Hooks.draw instead of a @Hook
      Move the 765x503 constants to a Constants API class
      Add a mixin for storing stretched fixed mode setting states
      Add logic for game image stretching in Hooks#draw
      Modify the size and location of the game canvas if stretched is enabled
      Add support for proxying mouseWheelMoved events
      Add support for specifying the position to insert mouse listeners in
      Add mouse listeners that stretch event x/y
      Add stretched fixed mode plugin
      runelite-client: fix Use tooltip arrow not being displayed
      runelite-api: fix worldToMiniMap not working correctly in stretched mode

Max Weber (52):
      Move the Login and Logout buttons to the TitleToolbar
      draw(IIIIII)V > drawRegion
      AudioInstrument.SINE > AUDIO_SINE
      zoom: Fix pitch relaxer after rev 165 changes
      Reuse NumberFormatter to reduce allocations
      inline RSHashTableMixin.getNodes into RSWidgetMixin.getParentId to reduce allocations
      specorb: Cache draws to reduce allocations
      field429 > WorldMapRegionX
      field432 > worldMapRegionWidth
      field426 > worldMapRegionY
      field427 > worldMapRegionHeight
      field3005 > rsOrdinal
      class41 > MapCacheArchiveNames
      field546 > DETAILS
      field541 > COMPOSITE_MAP
      field548 > COMPOSITE_TEXTURE
      field542 > AREA
      field545 > LABELS
      field542 > name
      field450 > objectDefinitionId
      class247 > WorldMapDecorationType
      field446 > decoration
      field452 > rotation
      class31 > WorldMapDecoration
      field417 > decorations
      class29 > WorldMapRectangle
      method588 > getRegionRectForViewport
      field544 > mapRegions
      class35 > WorldMapRegion
      field3464 > value
      class284 > HorizontalAlignment
      class266 > VerticalAlignment
      field3436 > value
      field3464 > horizontalAlignment
      field3463 > verticalAlignment
      field538 > screenX
      field537 > screenY
      field459 > minX
      method312 > getMinX
      method302 > getMinY
      field453 > minY
      method294 > getFileId
      field465 > identifier
      method296 > getIdentifier
      field455 > name
      method288 > getName
      field4014 > worldMapDataByIdentifier
      method6175 > getWorldMapDataByFileId
      method6077 > getWorldMapDataContainingCoord
      method290 > containsCoord
      vmethod712 > containsCoord
      method6122 > onMapClicked

Seth (7):
      opponent info: remove color tags from opponentOpponent name
      item stat: add raid food
      screenshot plugin: fix up chatMessage events
      screenshot plugin: Add raids reward
      item client: add getIcon method
      ge: Add search feature
      idle notifier: add barbtail/dragon harpoon animation

SomeoneWithAnInternetConnection (1):
      Remove left click calling from BA plugin

Tomas Slusny (23):
      Add fuzzy searching to config panel
      Move the notification options to Notifier
      Remove duplicate options from IdleNotifier
      Remove notification settings from NMZ
      Add support for oily rod fishing to idle notifier
      Remove unnecessary chatCommandsEnabled from config
      Allow other types of alerts when messages are off
      Fix "You are fishing" in fishing plugin
      Remove the timeout for HP/pray thresholds
      Correctly focus game canvas when requesting focus
      Make idle notifier work for splashing/missing
      Improve scoring of Jaro-Winkler
      Add link browser utility service
      Use new LinkBrowser in SessionManager
      Use new link browser in Grand Exchange plugin
      Use new link browser in feed plugin
      Continue running in case Discord lib load failed
      Restore original username on syncer shutdown
      Disable team capes plugin by default
      Add support for changing world to API
      Simplify RuneLite API world
      Add default world plugin
      Inverse window resize condition

Unknown (1):
      Team Capes: Added minimum cape count

arlyon (4):
      extract mac-specific functionality into OSXUtil
      notifier: fix to request focus on OSX
      extract out number formatting utility
      Update plugins to use either NumberFormat or the StackFormatter

joshpfox (1):
      Remove duplicate anti-venom+ config check

l2- (1):
      fix prayer enhance timer. its actually 10 seconds shorter than 5 minutes
\`\`\`
`;export{e as default};
