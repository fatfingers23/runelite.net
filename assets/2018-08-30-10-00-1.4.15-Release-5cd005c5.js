const e=`---
title: '1.4.15 Release'
description: 'Run energy plugin, friend list counter, team cape plugin improvements and hop-to in chat'
author: Tomas
---

Run energy plugin was added thanks to [@seandewar](https://github.com/seandewar). This plugin will show tooltip with
your current weight, how much run time you have remaining and how much time it will take until your run energy fully
regens. Also it has optional setting for displaying remaining run seconds instead of run percentage in the run energy
bar.

![runenergy1](/img/blog/1.4.15-Release/runenergy1.png)
![runenergy2](/img/blog/1.4.15-Release/runenergy2.png)

Thanks to work of [@forsco](https://github.com/forsco) and [@Adam-](https://github.com/Adam-) friend and ignore list
counter has been added, that will simply show max amount and used amount of friends/ignored players in the respective
interfaces.

![friendlist](/img/blog/1.4.15-Release/friendlist.png)

[@ItsSebas](https://github.com/ItsSebas) improved team capes plugin interface to display team cape icons with counts
instead of text in panel. This new design should be more compact and less intrusive than old one (and also looks way
better!).

![teamcapes](/img/blog/1.4.15-Release/teamcapes.png)

The world hopper plugin now has support for hopping to people in chat via right-click menu thanks to
[@Retoxified](https://github.com/Retoxified):

![hopto](/img/blog/1.4.15-Release/hopto.png)

Loose railing shortcut near Tree Gnome Village highlighting has been added to agility plugin thanks to
[@ItsSebas](https://github.com/ItsSebas):

![looserailing](/img/blog/1.4.15-Release/looserailing.png)

There are also several smaller improvements and bug fixes, including:

- The idle notifier plugin has been significantly improved, now it should not throw false warnings while
  in combat or when doing activity that is using same animations as some of the animations that display
  idle warning
- Barrows kill count chat message will now properly update the !kc data
- Time tracking plugin now also has "Special patches" in the overview tab
- Teleblock timers are now removed on logout
- Corp plugin now has option to hide the damage overlay
- "Pause all" menu option has been added to XP tracker right-click menu

Enjoy!

\\- Tomas

### New commits

We had 12 contributors this release!

\`\`\`
Adam (9):
      Fix friend and ignore widget id changes
      http service: improve update detection logic
      runelite-api: add method for getting number of friends
      Add Ignore API
      runelite-client: add friend list plugin
      widget id: update bottom line stones widget ids
      woodcutting plugin: fix npe rendering redwood trees if axe is null
      Revert "Merge pull request #4568 from deathbeam/proper-shutdown"
      Update sprite ids and overrides

DannysPVM (1):
      Add camera setters to Client.java and RSClient.java.

Karolcz125 (1):
      Add LMS to ignored type in WorldHopper (#5139)

Max Weber (1):
      Update Scripts to 2018-08-30-rev174

Michael Goodwin (1):
      Fix Hot/Cold Nardah Genie Cave location

Retoxified (1):
      Add Hop-To option in chat

Robbe De Neve (2):
      Add special patches to overview tab
      Add pause all button to xp tracker (#5126)

Ron Young (2):
      corp: hide damage overlay
      Reduce world map icon sizes (#5086)

RuneLite Cache-Code Autoupdater (3):
      Update Item IDs to 2018-08-30-rev174
      Update Object IDs to 2018-08-30-rev174
      Update Widget IDs to 2018-08-30-rev174

Sean Dewar (1):
      Add run energy plugin

Sebastiaan (2):
      Add Tree Gnome Village loose railing shortcut (#5093)
      Make teleblock timers disappear on logout/hop (#5090)

Sebastiaan Vanspauwen (1):
      Teamcapes plugin: Teamcape image instead of text (#5107)

Tomas Slusny (10):
      Add exports for GameEngine#shutDown
      Properly shutdown everything on window close
      Stop plugins on shutdown
      Reset idle timers when player clicks in-game
      Properly reset idle timers on logout and login
      Make animation idle remember last animating ID
      Make combat idle notifier use interacting changed
      Add idle notifier plugin tests
      Remove dupe PVP_HR entry in world hopper
      Fix setting of barrows kc from chat
\`\`\`
`;export{e as default};
