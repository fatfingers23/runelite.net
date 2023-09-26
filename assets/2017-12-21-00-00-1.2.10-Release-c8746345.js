const e=`---
title: '1.2.10 Release'
description: 'New 1.2.10 release of RuneLite is out. We added many new features, like native UI, notifications and few plugin improvements.'
author: Tomas
---

This release adds lots of new functionality to RuneLite to make the end-user
experience even better, and to compete with well established third-party
clients.

The most notable new feature is the **new UI design**. I tried to make it look as
close to the native OSRS interfaces as possible. Here is the end result:

![native ui](/img/blog/1.2.10-Release/native-ui.png)

The UI was updated for all of the current RuneLite plugins, and the new API for
it is really easy to use, so it can be used in future plugins too. An example
of plugin using the new UI api is the new **Team Capes** plugin.

The plugin is showing the amount of players wearing specific team capes
currently visible on the map, which is very useful for pking clans. Here is how
it looks in game:

![team capes plugin](/img/blog/1.2.10-Release/team-cape.png)

Till now it was hard to check the price of item you just got as a drop
from monster, or just simply to check price of stack of your precious magic
logs in bank. That is why there were quite a few improvements to examine plugin
in the client. Now you are able to examine items and item stacks in you bank,
inventory, equipment screen or even in the Miscellania screen and it shows
Grand Exchange and High Alchemy price of that item in the game chat. Here is
small example:

![examine plugin](/img/blog/1.2.10-Release/examine-plugin.png)

To make talking to your clan mates easier, there is new clan chat plugin
that shows current ranks of every clan chat member next to his/her name.
Example:

![clan chat plugin](/img/blog/1.2.10-Release/clan-chat.png)

There were also some background changes in the client to make it work better,
fix some bugs and possibly make it faster. One of the background improvements
that is also visible to end users is the use of the native notification system,
so it now supports every Linux distribution with working notification system
and even Mac OS (with same notification support for Windows as before). Example
of the notification system in action on Arch Linux with Dunst notification
daemon:

![native notifications](/img/blog/1.2.10-Release/native-notifications.png)

Well, hopefully you like new release, and as usual, enjoy!

~ Tomas

### New commits

We had 9 contributors this release! Special thanks to [@deathbeam](https://github.com/deathbeam) for his hard work.

\`\`\`
Adam (26):
      runelite-client: use lombok for slf4j logger creation
      runelite-client: lombok events
      runelite-client: change AnimationChanged event to have an Actor
      executor: optimize processExceptions()
      deobfuscator: do not cfg deob methods with exceptions in them
      runescape-client: redump
      runelite-client: fix infoboxes
      injector: cast object references to the field type in setters
      injector: add construct injector to create new instances of classes
      injector: ignore synthetic methods in InjectConstruct
      runescape-api: fix javadoc error
      injector: support hooking to ends of methods
      Move setMessage hook to end of method
      clanchat: don't load icons more than once
      runelite-client: fix scheduler for concurrent modifications
      chat message manager: avoid adding chat messages on threads
      cache: remove whirlpool as it is not in osrs
      cache: improve xtea test
      cache: use own Xtea implmentation instead of bouncycastle's
      cache: test scope slf4j-simple
      cache server: never send appended archive revision
      cache: remove tree storage
      cache: fix compression with encryption
      cache: split loading archive files from archive loading
      injector: skip over dups when recursively copying array index instructions
      deobfuscator: remove apache commons dependency

Devin (5):
      Add ImagePanelComponent overlay component
      Add getTeam method for Player
      Add setter for background color of overlay components
      Fix padding for bottom right overlays
      Add team capes plugin

Runelite auto updater (1):
      [maven-release-plugin] prepare for next development iteration

SomeoneWithAnInternetConnection (2):
      Fix IllegalArgumentExceptions from XPGlobes' tooltips for level 1 stats
      Fix example plugin to use the new overlay API

Tomas Slusny (16):
      Add hide items under value to GroundItems plugin
      Make native notifications lightweight
      Add clan ranks to clan chat
      Improve item caching
      Add chat message recolouring API
      Show item price when examining item
      Show full price for stackable items when examined
      runelite-client: add plugin changed event
      runelite-client: Make overlay UI reuseable and look native
      Cleanup overlay logic after native-ui changes
      Fix displaying of examine price without GE value
      Add support for examining bank and eq items price
      Fix overlay renderer cache
      Isolate graphics for each overlay (#267)
      Remove unused app property from RSStub
      runelite-client: Add app name to RuneliteProperties

Toocanzs (3):
      Move common game state and interface checks to overlay
      Change game tick hook to npc update
      Dispose of BufferedImage graphics in overlay util

Tyler Hardy (4):
      Add Karambwan fishing to animation and idle plugin
      Add crazy arch to aoe plugin
      Remove FPS plugin (deprecated by base osrs ::displayfps)
      Fix default config for dynamic plugins


UniquePassive (1):
      Make special attack orb look a little nicer

Vagrant User (1):
      Add support for native notifications

XrioBtw (1):
      Fix tooltips rendering behind the game

rbbi (1):
      Guice : RuneliteProperties inj (#212)
\`\`\`
`;export{e as default};
