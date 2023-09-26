const n=`---
title: '1.5.15 Release'
description: 'Music unlock notifications, clan chat join messages and member counter'
author: Adam
---

A music notification plugin was added which sends you a message whenever a new
piece of music is unlocked.

![music](/img/blog/1.5.15-Release/music.png)

The clan plugin now has an option to show when players join or leave clan chats.
The messages disappear after a short duration, and can also be filtered by
player rank.

![ccjoin](/img/blog/1.5.15-Release/ccjoin.png)

The clan plugin also has an option to show an infobox of the number of clan
members near you.

![ccplayers](/img/blog/1.5.15-Release/ccplayers.png)

Finally, the clan plugin has a new option to show clan member rank in public and
private messages too.

There are also several smaller improvements and bug fixes, including:

- Fix Monkey Madness I requirement on the Kourend Diary
- Fix twitter feed links not working in the news panel with newer Twitter theme
- Add pestle and mortar to idle notifier
- Replaced our raids point overlay with the ingame one, and made it movable with
  alt.
- Move Tai Bwo Wannai Emote location closer to STASH unit
- Fix logging into RuneLite accounts after having just logged out
- Add Compost, Bastion and Battlemage potions to Herblore skill calc

Enjoy!

\\- Adam

### New commits

We had 13 contributors this release!

\`\`\`
Adam (15):
      Move session events from api to client
      api: add changed varp index to VarbitChanged event
      runescape-api: make RSNameableContainer a generic type
      xptracker: remove unused exception
      xptracker: use tracked overall xpstate to calculate total xp
      xptracker: use long for tracking overall xp
      api: add method to remove MessageNodes
      api: add clan member join and leave events
      api: add methods to get clan owner and chat name
      clanchat plugin: add join/leave messages
      Revert "Merge pull request #8070 from Nightfirecat/fix-ground-markers-bug"
      Revert "Merge pull request #5890 from Nightfirecat/colored-ground-markers"
      clan chat: cleanup onGameStateChanged logic from earlier merge
      account plugin: move logout off of swing thread
      session manager: change to null session on close

Brennan Williams (1):
      Add Hydra shortcut pipes to agility plugin (#8052)

Chives (2):
      Remove Monkey Madness I requirement from Kourend Diary.
      Replace assert keyword with JUnit assert functions

Jordan Atwood (7):
      worldpoint: Fix plane value in toLocalInstance
      worldpoint: Add static fromRegion method
      worldpoint: Add getRegionX() and getRegionY()
      ground markers plugin: Clean up legacy code
      ground markers: Fix startup and shutdown bug
      ground markers: Allow different colored markers
      ground markers: Fix marking non-marked tiles

Lotto (1):
      http-service: fix twitter feed links not working with newer theme

Sebastiaan Vanspauwen (1):
      Clanchat: added onClanChanged event to count players already in scene

SebastiaanVanspauwen (2):
      Clanchat: Show amount of members near you in infobox
      Clanchat: clear counter on login/connection lost instead of loading (#8068)

Shaun Dreclin (7):
      idle notifier: Add support for grinding with pestle and mortar
      daily task indicator: Fix plugin not checking tasks when first enabled
      api: Add EnumID class
      api: Add getKeys() to EnumComposition
      api: Add unlocked music tracks to VarPlayer
      client: Add Music Track Indicator plugin
      rogues den: Update plugin to use ItemContainerChanged event

TheStonedTurtle (1):
      clanchat plugin: add CC rank icons to oublic and private messages

Tomas Slusny (11):
      Add missing toggle for clan chat icons
      Fix RAIDS_POINTS_INFOBOX widget ID
      Make raids widget moveable
      Remove raids points overlay
      Null-check remote configuration in config manager
      Change logged-in redir to redirect to HTTPS
      Update suppressions.xml dtd link to one that exists
      Fix SpringBootWebApplication auto-configuration annotation
      Migrate SpringBootWebApplicationTest to spring profiles
      Migrate Spring unit tests to spring profiles
      clanchat: Update clan members set on join/leave events

WoneTooPhree (1):
      Move Tai Bwo Wannai Emote location closer to STASH

chivesrs (2):
      Update CheckStyle XML dtd link to one that exists (#8079)
      Enable checkstyle on test sources

piebandit (1):
      Add Compost, Bastion and Battlemage potions to Herblore skill calc (#8031)

trimbe (4):
      mixins: use a ClanMember for ClanMemberJoined/Left
      clanchat: retrieve rank from ClanMember rather than ClanManager
      clanchat: respect rank icon config for join/leave messages
      clanchat: remove activity in buffer in ClanMemberLeft as well
\`\`\`
`;export{n as default};
