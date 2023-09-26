const e=`---
title: '1.4.16 Release'
description: 'Layoutable Runescape widgets, top-center snap point, and automatic bounty target hiscore lookup'
author: Jordan
---

RuneScape widgets are now layoutable, meaning they can be anchored to the overlay hotspots like
Runelite overlays. Thanks to [@Deathbeam](https://github.com/deathbeam) for this feature!

![layoutable-runescape-widgets](/img/blog/1.4.16-Release/layoutable-runescape-widgets.gif)

A top-center snap point has been added, and the XP Globes plugin has been set to use it by default,
also thanks to [@Deathbeam](https://github.com/deathbeam).

![top-center-snap-point](/img/blog/1.4.16-Release/top-center-snap-point.gif)

An option has been added to the hiscore plugin to automatically look up bounty targets when they are
assigned, thanks to [@noelkeijzer](https://github.com/noelkeijzer).

There are also several smaller improvements and bug fixes, including:

- Loot tracker now behaves correctly when multiple enemies die on same tick,
  when player is despawned and when receiving Theatre of Blood drops
- Some common items have been added to the ground item plugin's hidden items list by default
- The idle logout timer supports checking the logout timer when in combat
- The dense essence idle animation has been fixed and will correctly trigger the idle notifier
- The fossil island oxygen bar and pest control info widgets are now movable
- Some noisy plugin features have been disabled by default, or made to display only when in use
- "Trade-with" is now swapped also with the trade option of the menu entry swapper plugin
- Fixed the magic training arena dragonstone hint arrow not being cleared
- Prayer and run orb tooltips no longer display when the minimap is hidden
- The run energy tooltip now shows remaining energy when the orb shows run time remaining
- Some achievement diary requirements texts have been corrected
- Various skill calculator entries have been re-ordered to come in level requirement order
- Ourania teleport has been added to the skill calculator
- Fixed binding necklace charge counter when checking a necklace with one charge

Enjoy!

\\- Jordan

### New commits

We had 14 contributors this release!

\`\`\`
Adam (2):
      Revert "Make same-tick same-tile loot event fire once"
      loot manager: limit to one kill per location per tick

CC007 (1):
      Fix locale not being applied for StackFormatterTest (#5216)

Magic fTail (2):
      Fix dense essence idle animation
      Add support for combat idle 20 minute timer

Max Weber (3):
      cache: Do not depend on Index insertion ordering
      cache: Properly produce \`\\n\` only on windows on jdk9+
      Import Widget::fontId

Michael Goodwin (4):
      Make same-tick same-tile loot event fire once
      Check for player HP being 0 in player loot event
      Add common method for converting local to world point
      Check for correct ToB region when receiving loot

Noël Keijzer (1):
      Add automatic bounty hunter target lookup in HiScore plugin (#5193)

Sebastiaan Vanspauwen (1):
      WidgetOverlay: Make fossil island oxygen bar moveable (#5246)

Shaun Dreclin (4):
      Add clear button to var inspector devtool
      Add trade-with swap to menu entry swapper
      Fix ground markers getting set at wrong position
      Fix mta dragonstone hint arrow not clearing

Tomas Slusny (12):
      Make RuneScape widgets layoutable
      Take preferred position into account when ordering
      Add common hidden items to GroundItemsPlugin
      Disable blast furnace clickboxes by default
      Disable lit/unlit burner indicators by default
      Make KourendLibrary overlay show only on interact
      Show fishing overlays only when player can fish
      Show cannon spot overlay only with cannon
      Disable XP globes plugin by default
      Add TOP_CENTER snap corner to snap center viewport
      Make XP globes use TOP_CENTER snap point
      Fix sorting order of overlays

Unmoon (3):
      Don't show prayer orb hover overlay if prayer orb is hidden
      Don't show run energy hover overlay if run energy orb is hidden
      Show run energy instead of time remaining if tooltip shows time remaining

astaninger (7):
      Fix watchtower Achievment Diary requirement (#5218)
      Fix ape atoll Achievment Diary agility requirement (#5220)
      Properly order prayer skill calculator (#5290)
      Fix dragonstone necklace name in skill calculator (#5287)
      Order tiaras in RC skill calc by experience gained (#5288)
      Sort planks in construction guide by XP in skill calc (#5289)
      Add ourania teleport to skill calculator (#5285)

ltvill (1):
      Fix formatting of 's in OSRS location names

oplosthee (1):
      runecraft: fix binding necklace regex

raiyni (5):
      Widgets: add setItemId
      widget: add setItemQuantity
      widgets: setBorderThickness
      expose text shadowed
      Make pest control widgets layoutable
\`\`\`
`;export{e as default};
