const e=`---
title: '1.3.2 Release'
description: 'Movable overlays, revamped clue scoll plugin, and tithe farm plugin'
author: Adam
---

Movable overlay support is finally here! This allows you to move any RuneLite
Overlay to any position on the screen. Hold alt to do so. There are 4 (or 5 on
resizable) "snap corners" provided where, if you move an overlay to a snap
corner, the client will dynamically place the overlay to not draw on top of
other overlays. Thanks to [@deathbeam](https://github.com/deathbeam) for this
feature.

![overlay](/img/blog/1.3.2-Release/overlays.gif)

The clue scroll plugin has been rewritten, and now supports all clue types.
Thanks to [@devLotto](https://github.com/devlotto) for their work on this.

![clue1](/img/blog/1.3.2-Release/clue1.png)
![clue2](/img/blog/1.3.2-Release/clue2.png)

A tithe farm plugin was added by [@Unmoon](https://github.com/unmoon), which tracks plant growth stages and state.

![tithe](/img/blog/1.3.2-Release/tithe.png)

The agility plugin now has an additional lap counter overlay by [@sethtroll](https://github.com/sethtroll):

![agility](/img/blog/1.3.2-Release/agility.png)

There are also several smaller improvements and bug fixes, including:

- The instance map plugin maps now look the same as the ingame minimap
- Mouse tooltips were moved to the bottom right corner of the mouse, and are now
  hidden when the game has a tooltip open.
- Fixed slayer points and streak being lost on restart
- A kingdom of Miscellania plugin has been added to show you your support, and
  optionally warn if it is unpopular
- The raids points interface has been replaced with an overlay that also
  includes party size. As with the other overlays, this is now movable.
- Antipoison and superantipoision were added to the timers plugin
- Add holy wrench effect to itemstats plugin
- Sort infoboxes by plugin and priority
- Add Silver sickle(b) to menu swapper plugin
- Expand list of skill abbreviations for the !lvl command
- Add spicey stew to item stats plugin
- Add cave horror cannon spot
- Fix lizardmen cannon spot

Enjoy!

\\- Adam

### New commits

We had 15 contributors this release!

\`\`\`
Adam (14):
      config manager: check for invalid keynames in loadFromFile
      config manager: add get and set configuration methods for objects
      Add movable overlay support
      travis: remove oracle-java8-installer as it broke and use the oraclejdk travis ships, which is new enough now
      feed plugin: make scheduled method public
      wsservice: remove sessions on close or error
      instance map plugin: rewrite to use client minimap code
      runescape-client: export varc related classes/fields
      Add varc api accessors, and tooltip varclient
      mouse highlight plugin: hide tooltips when the client is showing tooltips
      xp globes: move expire check to a scheduled method
      cluescroll overlay: set priority to low
      agility lap overlay: set priority to low
      slayer plugin: load points and streak on login and startup

Charlie Waters (2):
      Fix clue scroll plugin game object query for world overlay
      Fix some clue solutions

Infinitay (4):
      Added Kingdom of Miscellania plugin
      Added daily task indicators plugin
      Fixed checkCanCollectEssence method
      Disabled plugin by default  - Hopefully will encourage users seeking this    feature to configure it to their liking.    For example, if ironman, disable herb box.

Joshua Filby (50):
      refactor: rename widgetSettings to clientVarps
      refactor: rename settings to serverVarps
      refactor: remove unnecessary Client#getSettings(), use Client#getVarps()
      fix: hook clientVarps instead of settings
      refactor: rename get/set settings to get/set varp
      refactor(widget): rename method4463 to decodeListener
      refactor(widget): rename method4464 to decodeTransmitList
      refactor(widget): rename field2898 to onLoadListener
      refactor(widget): rename mouseEnterListener to onMouseOverListener
      refactor(widget): rename mouseExitListener to onMouseLeaveListener
      refactor(widget): rename field2807 to onTargetLeaveListener
      refactor(widget): rename field2908 to onTargetEnterListener
      refactor(widget): rename configListenerArgs to onVarTransmitListener
      refactor(widget): rename tableListenerArgs to onInvTransmitListener
      refactor(widget): rename skillListenerArgs to onStatTransmitListener
      refactor(widget): rename renderListener to onTimerListener
      refactor(widget): rename field2917 to onOpListener
      refactor(widget): rename mouseHoverListener to onMouseRepeatListener
      refactor(widget): rename field2899 to onClickListener
      refactor(widget): rename field2900 to onClickRepeatListener
      refactor(widget): rename field2901 to onReleaseListener
      refactor(widget): rename field2902 to onHoldListener
      refactor(widget): rename field2906 to onDragListener
      refactor(widget): rename field2907 to onDragCompleteListener
      refactor(widget): rename scrollListener to onScrollWheelListener
      refactor(widget): rename configTriggers to varTransmitTriggers
      refactor(widget): rename tableModTriggers to invTransmitTriggers
      refactor(widget): rename skillTriggers to statTransmitTriggers
      refactor(widget): rename selectedAction to targetVerb
      refactor(widget): rename field2895 to dragRenderBehavior
      refactor(widget): rename field2894 to dragDeadTime
      refactor(widget): rename field2817 to dragDeadZone
      refactor(widget): rename config to clickMask
      refactor(widget): rename name to opBase
      refactor(widget): rename field2866 to offsetX2d
      refactor(widget): rename field2867 to offsetY2d
      refactor(widget): rename field2919 to onChatTransmitListener
      refactor(widget): rename field2920 to onKeyListener
      refactor(widget): rename field2921 to onFriendTransmitListener
      refactor(widget): rename field2922 to onClanTransmitListener
      refactor(widget): rename field2923 to onMiscTransmitListener
      refactor(widget): rename field2924 to onDialogAbortListener
      refactor(widget): rename field2925 to onSubChangeListener
      refactor(widget): rename field2873 to onStockTransmitListener
      refactor(widget): rename field2820 to onCamFinishedListener
      refactor(widget): rename field2926 to onResizeListener
      refactor(widget): rename mouseActionsPresent to hasListener
      refactor(widget): rename field2951 to noScrollThrough
      fix: import correct field for click masks
      fix: import correct field for op base

Kamiel (6):
      Item price tooltip: use linebreak instead of comma
      Fix ranging potion showing invalid boost value
      Ground items: Only consume mouse clicks when a checkbox has been clicked
      Show remaining time on successful hunter traps
      Add raid party size varbit
      Replace raids points widget with custom overlay

Lotto (9):
      runelite-api: make InventoryItemQuery take in InventoryID
      runelite-api: add emote window widget info
      runelite-client: pass in z offset into renderActorOverlayImage
      runelite-client: extend overlay util to render Areas and LocalPoint
      runelite-client: add line wrapping to PanelComponent lines
      runelite-api: add sprite ids class
      runelite-client: add resource images to clue scroll plugin
      runelite-client: revamp clue scroll plugin
      runelite-client: remove old clue scroll enums

Lyn Levenick (2):
      Add notifications for NMZ power-up spawns
      Fix tray icon crash when clicked quickly on start

Max Weber (10):
      itemstats: Support holy wrench effect
      configmanager: synchronize disk access
      itemstats: use EnergyStat instead of anonymous stat
      menumanager: Actually remove menu options
      injector: Allow <clinit> an <init> injection with multiple mixins on the same class
      deob: Always use / delimters in pool.Class
      injector: Allow assertions to be used in mixins
      mixins: Use assert in scriptvm
      runelite-client: Add ClientThread to aid in synchronizing with the client
      Ensure createItemSprite is called on the game thread

Seth (4):
      info boxes: associate plugins to infoboxes
      info boxes: sort boxes by priority
      jewelrycharges: Add Teleport crystal(5)
      agility plugin: Add lap counter

ShaunDreclin (1):
      Add Silver sickle(b) to menu entry swapper plugin.

SoyChai (4):
      Expand list of skill abbreviations for the !Lvl command
      Expand tests for and document the Experience API
      Add spicy stews to item stats plugin
      Extra documentation for the Stat and StatChange classes

Tomas Slusny (18):
      Add Cave Horror cannon spot
      Fix Lizardmen cannon spot plane
      Add support for points to ConfigManager
      Add support for getting real canvas dimensions
      Calculate overlay bounds also for dynamic overlays
      Create translated copy of OverlayBounds
      Improve caching of game-related variables
      Change multiple overlay lists to map
      Instance map improvements + moving
      Make unsetConfiguration non-blocking
      Disable overlay dragging mode on focus lost
      Remove not needed parent point and minimap orb
      Move tooltip to the right-bottom of the mouse
      Add null-check for overlays in OverlayRenderer
      Add getCanvasOffset to clientUI, fix screenshots
      Add formatNumber methods to StackFormatter
      Expand panels based on click event not isSelected
      Add null-check for Client to MenuManager

Unmoon (1):
      Add Tithe Farm plugin

jamesahhh (1):
      Add antipoison and superantipoison timers (#1159)

rune3132 (1):
      Additions to Jewellery count plugin
\`\`\`
`;export{e as default};
