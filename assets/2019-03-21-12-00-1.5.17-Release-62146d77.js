const n=`---
title: '1.5.17 Release'
description: 'NPC unaggro timer and chat filter'
author: Adam
---

A NPC Aggression Timer plugin was added, which shows how long until NPCs near
you will become unaggressive, and how far away you have to walk before they will
become aggressive once again.

![aggro](/img/blog/1.5.17-Release/aggro.png)

The combat level plugin can now show the level range of attackable players near
the wilderness skull icon, similar to how it is on PVP worlds.

![wildylvl](/img/blog/1.5.17-Release/wildylvl.png)

Most coordinate clues now show a description of where they are in addition to
showing on the world map.

![cluedesc](/img/blog/1.5.17-Release/cluedesc.png)

A chat filter plugin was added, which lets you define words and
[patterns](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html)
to filter or block from chat messages. With a handful of patterns it is
easy to filter out a majority of the bot spam at the GE.

For example the patterns:

\`\`\`
5[0-9]x[0-9]
^Player
[0-9.]\\s*usd
[0-9][0-9]:[0-9][0-9]:[0-9][0-9]
doubling
tripling
I don't scam
Fire cape & accounts
\`\`\`

is highly effective against the current spam.

![chatfilter](/img/blog/1.5.17-Release/chatfilter.png)

We may open up a channel on Discord for users to share patterns similar to bank
tabs.

Even though this is a rather crude solution to the spam epidemic in RS, and
spamfilters are in general a solved problem, any solution which is much more
technically involved would require us to:

1. continuously update training data for the spam categorization
   models (the bad guys can see this, too)
2. centrally process game chat in real time, which is not only hard, and
   expensive, but also would have some privacy issues

Additionally, it would allow the project to unilaterally decide what is and is not spam,
which I would rather it not be capable of doing.

There are also several smaller improvements and bug fixes, including:

- Fix Twitch plugin sometimes showing duplicate chat
- Bank tag tabs no longer reset when clicking withdraw-x
- Add a menu swap for Contract on guildmaster Jane
- Fix the GE item stats interface not closing correctly if the GE is closed with
  escape key
- Fix the slayer plugin not recognizing Crazy Archaeologist tasks
- Fix many missing or wrong diary requirements in the achievement diary plugin

Enjoy!

\\- Adam

### New commits

We had 14 contributors this release!

\`\`\`
Adam (4):
      travis: add openjdk11
      client: load jagex config and client over https
      news service: load news over https
      twitch: fix race in connect establishing multiple connections

Jason Xie (1):
      Change produce image of maple and yew trees to their respective logs (#8222)

Jordan Atwood (4):
      widgetinfo: Fix wilderness level definition
      Add pvp widget builder script
      combat level plugin: Add attack level range option
      boosts plugin: Fix overlay below-threshold color

Juan Ortiz (1):
      npc highlight: remove tags from npc names

Magic fTail (3):
      api: rename getOverhead to getOverheadText
      api: add overhead text changed event and setOverheadText
      Add chat filter plugin

Nathaniel Ngo (1):
      Log whole HTTP response instead of just message (#8126)

Ron Young (1):
      TabInterface: remember search when clicking withdraw-x

RyBo (1):
      achievement diary: add or correct various requirements

Tomas Slusny (2):
      Add Swagger static document generation
      Fix RequestMapping annotations in http-service

WoneTooPhree (1):
      Add location description to coordinate clues (#8148)

WooxSolo (3):
      config manager: add support for WorldPoint
      config manager: add support for Duration
      Add NPC unaggression timer

gregg1494 (1):
      menu swapper: add contract for farming guildmaster Jane

trimbe (1):
      item stats: check if GE container is hidden when detecting GE close

whartd (1):
      slayer plugin: fix task name for Crazy Archaeologists
\`\`\`
`;export{n as default};
