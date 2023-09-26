const e=`---
title: '1.2.11 Release'
description: 'New 1.2.11 release of RuneLite is out. Notable new features are an awesome Hunter Plugin and support for more potion timers'
author: Tomas
---

In this release we made a lot of improvements to client source, performance and
overall stability of the client. But there are few new features that are
definitely worth mentioning.

First, and the biggest one is **Hunter** plugin (thanks to
[@RobinWeymans](https://github.com/RobinWeymans)). Hunter plugin will show you
state of your traps and also time until they will break. That should improve
your overall hunting experience (and makes the terrible skill less terrible).
Here is small preview:

![hunter-plugin](/img/blog/1.2.11-Release/hunterplugin.png)

We also added support for some missing potions for the **Timers** plugin, and that
also includes the newest released potion, Super Antifire Potion.

![newtimers](/img/blog/1.2.11-Release/newtimers.png)

And last feature on the list is support for **native window decorations**. That
means now you have option to let your window manager handle the window
decorations (title bar, window borders). Here is small preview using my window
manager (bspwm) without any window borders:

![native-window](/img/blog/1.2.11-Release/nativewindow.png)

As I said in the beginning of the post, we made a lot of improvements to the
client source code (mainly decoupling), so if you are bored Java developer
looking for project to contribute to, you are always welcome!

Hopefully you will like the new release, enjoy!

~ Tomas

### New commits

We had 15 contributors this release!

\`\`\`
Abex (1):
      client: Add option to disable custom window chrome/style

Adam (30):
      Skip archetype test by default
      cache: default index data to protocol 6
      runelite-api: add equipment inventory slot id, inventory id, logout widget and chat message type 7
      cache: fix writeBigSmart
      cache: fix readBigSmart
      cache: fix readString to not sign extend negative values
      cache: rename some fields of object and interface
      cache: lombok definitions
      cache: add a few more write* to outputstream
      cache: add savers
      cache: add map and location definition, convert Region loading to use it
      cache: split cache client and server into their own projects
      runelite-proxy: subtree split into separate repository
      cache: disable map image dumper test
      cache: also disable map dumper test
      runelite-client: move infoboxes back to top left
      runelite-client: always render tooltips on top
      cache test: get tmpdir from a system property
      injector: allow method hooking to end of methods with multiple returns
      Consistently capitalize RuneLite
      Update logo
      xp tracker: reset on world hop and on logging in
      xp tracker: remove unused import
      runelite-client: fix --no-rs
      dev tools: draw over everything
      http-service: fix item price cache to use fetched time instead of price time
      http-service: remove junit/mockito dependencies since spring pulls them in
      http-service: disable default cache control provided by spring-security
      http-service: add cache control to item price
      http-service: change item price cache to 30 minutes

Alexander (2):
      Fall back to default font for glyphs not in the custom font
      ExaminePlugin: Make sure widget children array index is valid

Devin (3):
      Add fight cave plugin config
      Update fight cave plugin overlay
      Update zulrah plugin overlay

Devin French (1):
      Combine BOTTOM_RIGHT and ABOVE_CHATBOX_RIGHT overlays for fixed mode

Julian Tith (1):
      Add craft spinning animation ID and idle notification

Max Weber (1):
      runelite-client: add ConfigItem.warnOnDisable and warnOnEnable to configure when confirmationWarning is shown

Onvo (6):
      New MenuActions related to the hunter plugin
      Add Widget.contains point
      Add GameObjectsChanged event
      Make ground items overlay use new Widget.contains
      Add hunter plugin
      Add colors for impling types

Runelite auto updater (2):
      [maven-release-plugin] prepare for next development iteration
      [maven-release-plugin] prepare release runelite-parent-1.2.11

SomeoneWithAnInternetConnection (5):
      Actually fix example plugin archetype
      Add tests for archetype-plugin compilability
      Reduce clearRect calls to improve framerate
      Prevent cursor icon from getting stuck as the wrong shape
      Slayer plugin - fix "count on items" feature

Tomas Slusny (20):
      Fix OkHttp connection leaks on connection error
      Change UIManager defaults to use OSRS font
      Change XP tracker button to use image
      Simplify navigation button code
      Move IconTextField to Hiscore plugin
      Normalize plugin panel display
      Change Notifier to be injectable service
      Extract session-related logic to SessionManager
      Extract runQuery to QueryRunner service
      Move creation of client to RuneLite
      Move setTitle to ClientUI
      Move creation of tray icon to ClientUI
      Cleanup RuneLite class fields
      Move creation of UI to ClientUI class
      Remove unnecessary null checks for game client
      Show account and config plugins when outdated
      Change warning for not found task to debug
      Add support for super antifire potion
      Add Antidote++ timer to TimerPlugin
      Improve clan rank caching

UniquePassive (10):
      Don't NPE when Player name is null
      Expand the hiscore panel when looking up players
      Fix BackgroundComponent's background overflow
      Fix previous result not being cleared in hiscore plugin
      Fix ground items not being toggleable
      Fix the UI freezing when refreshing widgets in the Dev Tools
      runescape-client: Rename RSCanvas to GameCanvas
      runescape-client: Rename RSSocket to GameSocket
      Add a world list lookup client
      Add world types

Unmoon (4):
      Ground Items - Fix alch value not applying to whole stack
      Ground Items - Fix coins not having value
      Ground Items - Fix quantity in high alch value display
      Ground Items - Always show highlighted items

kokkue (1):
      idle plugin: add ornament dragon pickaxe

noremac201 (11):
      Added missing skilling skills from boosts overlay. Reordered from left to right and up to down.
      Add new overlay position for above right side of chatbox
      Change attack style plugin to use overlay position ABOVE_CHATBOX_RIGHT
      Added ProgressBar Component
      Modified PanelComponent to hold a ProgressBarComponent
      Updated XpGlobes to use new Components
      Fixed setStroke not being reset in Graphics object
      Added ReportButton Widget to api
      Added Report Button Utilities Plugin
      Fixed attackStyle not being correct without configChangeEvent
      Fixed type 20 attack weapon styles

utsukami (1):
      Fixes idle notifications occurring when they shouldn't (interacting with bankers/players). See #282
\`\`\`
`;export{e as default};
