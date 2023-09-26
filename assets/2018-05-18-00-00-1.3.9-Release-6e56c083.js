const e=`---
title: '1.3.9 Release'
description: 'Hot/cold world map improvements, skill calculator, and anti-drag plugin'
author: Adam
---

I have been given the go ahead to continue on with RuneLite development by MMK,
so here is release 1.3.9.

I have had to move most of my tools to be internal to
the project, and it is taking some time. We will probably be able to begin
accepting PRs again in full force sometime this weekend.

Hot/cold clue locations are now shown on the world map, and fairy ring teleport
icons now have a tooltip showing the fairy ring code. Contributed by
[@deathbeam](https://github.com/deathbeam) and
[@MESLewis](https://github.com/MESLewis) respectively.

![hotcold](/img/blog/1.3.9-Release/hotcold.png)

[@Kruithne](https://github.com/Kruithne) has added a skill calculator plugin.

![skillcalc](/img/blog/1.3.9-Release/skillcalc.png)

An anti-drag plugin has been added from
[@devdennis](https://github.com/devdennis). It lets you configure the "drag
delay" which can help prevent you from dragging items you meant to click on.

There are also several smaller improvements and bug fixes, including:

- The opponent info plugin now displays approximate players hitpoints instead of
  a percentage
- Show GE and high alch prices on shop items when examined
- Made existing config option for higlighting marks of grace also affect overlay
  color
- Add trap obstacles to agility plugin
- Fix motherlode mine plugin when it is enabled when inside of the mine
- Mitigate a rare crash in the official client at certain areas ingame
- Add a tooltip font type configuration option
- Auto complete hiscore lookups based on friends, clan members, and players

Also thanks to trimbe, Shuhao Wu, Jordan Atwood, and Alex Kolpa for contributing
clue fixes.

Enjoy!

\\- Adam

### New commits

We had 22 contributors this release!

\`\`\`
Adam (20):
      agility plugin: use immutableset
      slayer plugin: move widget inventory check to game tick
      runelite-api: expose friends
      runelite-mixins: fix setting menu preventing menu add event from being fired
      friend notes plugin: only add menu entry after "Message"
      agility plugin: fix exception if obstacle is off screen
      runelite-api: add getWorldType()
      runelite-client: add hiscore manager
      opponent info: use player hitpoints from hiscores
      item controller: don't return duplicate items in bulk lookup
      http-service: optimize bulk item price lookup
      http-service: lombok item api
      item manager: cache no price when unable to batch lookup
      injector: support field hooks prior to field being changed
      runelite-mixins: fire npc despawn event before composition is nulled
      runelite-mixins: wrap drawTileUnderlay in try/catch
      Revert "fix: Hide vanilla raid points box when inside chambers of xeric"
      speccounter plugin: fix kalphite queen spelling
      Update pom and README to reflect changes to project structure
      Remove distribution management

Alex Kolpa (2):
      Fix typo cryptic clue
      Check player position on state change

Dennis (1):
      runelite-client: add anti drag plugin

Dimitris Karittevlis (1):
      shows ge and high alch prices for shop items that are examined

HSJ-OSRS (1):
      Make existing config options for highlighting marks of grace also affect the overlay color

Hashes (1):
      Fix ProgressBar percentage displaying (#2609)

Jeremy Plsek (2):
      agility plugin: add trap obstacle overlay
      overlayutil: reset stroke for renderpolygon

Jordan Atwood (4):
      Fix wording/locations of kill x elite cryptic clues (#2628)
      Fix Warrior's guild emote clue
      Use British floor numbering in cipher clues
      Fix Gypsy Aris cryptic clue

Kamiel (1):
      fix: Hide vanilla raid points box when inside chambers of xeric

Kruithne (1):
      Implement Skill Calculator plug-in

Lars Ørnlo (1):
      Motherlode Mine - Region check on plugin startup

Max Weber (10):
      http-api: print a more helpful error message when resources are not filtered
      Make VarbitChanged only fire once, after everything has settled
      runelite-api: Annotate Perspective methods with \`@Nonnull\`
      groundmarkers: Fix NPE in drawTile
      kourendlibrary: Fix for rev 170 menu code
      runelite-api: Update ID files
      cache: Strip tags from java names
      Rename varcs > varCInts
      Rename varcstrings > varCStrings
      Revert #2530 "Make VarbitChanged only fire once..."

Morgan Lewis (2):
      Fix world map overlay to draw pixel perfect on the World Map
      Add tooltip and custom icon to World Map fairy ring destinations

Reasel (1):
      runelite-client: add tooltip font type dropdown

Sebastiaan Holthuis (1):
      Add " fps" after the number of FPS

Shuhao Wu (1):
      Fix "Clap in the magic axe" master clue. (#2685)

Tomas Slusny (13):
      Improve ProgressBarComponent to support %/FULL
      Update opponent info to use PanelComponent
      Add ItemLayer height to GroundItems overlay
      Fix World Map widget check in Hooks.java
      Reset Fight Cave plugin prayer background color
      Merge clearMapPoint with resetClue
      Improve performance of ClueScrollWorldMapPoint
      Move Hot/Cold message logic to HotColdClue
      Add support for map for hot/cold clues
      Do not floor percentage in progress bars
      Fix updating of Hot/Cold clue
      Reset clue overlay preferred size each render
      Calculate child preferred size based on max size

TzZek (1):
      Add Elf Area Obstacles

Unknown (1):
      Add Overlay for Silver Jewelry to Slayer Plugin

pettenge (1):
      hiscore plugin: autocomplete name lookup based on friends, clan members, and players

trimbe (1):
      Fix hot cold location south of gnome stronghold

ypperlig (1):
      Clear previous image components in fight caves overlay
\`\`\`
`;export{e as default};
