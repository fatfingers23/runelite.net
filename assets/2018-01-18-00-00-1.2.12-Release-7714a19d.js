const e=`---
title: '1.2.12 Release'
description: 'RuneLite 1.2.12 is released!'
author: Adam
---

This release includes several notable features, including:

[@UniquePassive](https://github.com/UniquePassive) added overlay layers, which
allows RuneLite to optionally render beneath both the game menu and in-game
interfaces (such as the bank).

![interface-layers](/img/blog/1.2.12-Release/overlayorder.png)

[@Noremac201](https://github.com/Noremac201) added a barbarian assult plugin
which introduces a timer until next change, and allows left-click calls.

![ba-click](/img/blog/1.2.12-Release/ba-click.png)

![ba-timer](/img/blog/1.2.12-Release/ba-timer.png)

A new cannon plugin was introduced to count the number of cannonballs left in
your cannon, thanks to [@Sethtroll](https://github.com/Sethtroll).

![cannon](/img/blog/1.2.12-Release/cannon.png)

The new player indicators plugin will draw your friend and clanmates names:

![clannames](/img/blog/1.2.12-Release/playernames.png)

Some improvements have been made to the attack indicator plugin to hide unwanted
attack styles instantly. Thanks to [@Dreyri](https://github.com/Dreyri) for his
work on this.

![attackstyles](/img/blog/1.2.12-Release/attackstyles.gif)

Additionally, various new AoE attacks have been added to the AoE plugin,
including Vorkath, Galvek, Vet'ion, Chaos Fanatic, and the Corporeal Beast.

![acid](/img/blog/1.2.12-Release/acid.gif)

![fireball](/img/blog/1.2.12-Release/fireball.gif)

![spawn](/img/blog/1.2.12-Release/spawn.gif)

Finally, the configuration panel is now more searchable with a new search bar thanks to [@deathbeam](https://github.com/deathbeam):

![configsearch](/img/blog/1.2.12-Release/configsearch.png)

Enjoy.

\\- Adam

### New commits

We had 10 contributors this release!

\`\`\`
Adam (11):
      runelite-client: fix plugin manager test
      Move RS-related events to runelite-api
      injector: fix copying method code to update code->method, instructions->code, and instruction->instructions pointers
      Move field hooks to mixins
      runelite-plugin-archetype: update for events which moved to api
      readme: update logo url
      player indicators: update isFriend -> isFriended
      aoeprojectileinfo: store projectiles in a map
      runelite-api: expose widget group ids
      runelite-api: fix combat fornula
      xpglobes: don't break at virt level 126

Bart van Helvert (1):
      Deobfuscation and renaming of object definitions

Cameron Moberg (1):
      Add barbarian assault plugin

Dreyri (31):
      update hz.h to Widget.dynamicX
      update hz.d to Widget.dynamicY
      update hz.v to Widget.dynamicWidth
      update hz.ak to Widget.originalHeight
      update Client.hw to myPlayerIndex
      update ar.ce to KeyFocusListener.keyPressed
      update x.nw to BoundingBox3D.minimapSprite
      update eq.n to getItemStackAmountText
      rename field921 to overheadTextCount
      rename field997 to overheadTexts
      rename field929 to overheadTextsCyclesRemaining
      rename method4886 to getTextWidth
      rename field926 to overheadTextsOffsetX
      rename field925 to overheadTextsOffsetY
      rename field1100 to maxOverheadTexts
      rename method4884 to drawTextCentered
      rename method4903 to drawText
      swap screenX and screenY
      rename field923 to overheadTextsX
      rename field924 to overheadTextsY
      rename method168 to draw2DExtras
      update field1003 to lastLeftClickX
      update field936 to lastLeftClickY
      rename field940 to pressedItemIndex
      renamed method5211 to drawAtOpacity
      rename field 1082 to itemPressedDuration
      rename method3079 to processMouseInput
      rename field679 to mouseLastX
      rename field682 to mouseLastY
      rename class34.field455 to middleMouseMovesCamera
      rename field945 to itemBeingDragged

Frederik Engels (6):
      runescape-client: update Projectile mappings
      Track projectile target and spawn cycle. Add to api with rest of mapings.
      runelite-client: add projectiles to devtools
      runelite-client: add new aoes to aoewarningplugin
      runelite-client: change combat level plugin to use game tick event
      Add widget hidden change event, use in attack indicator plugin

Max Weber (2):
      Update ItemIDs
      Prevent the client from taking focus when it doesn't have it.

Seth (3):
      Add Wintertodt Aoe
      overlay renderer: add check for chatbox being minimized
      Add Cannon plugin

Tomas Slusny (7):
      Add support for making tar idle notification
      Let overlapping tooltips stack vertically
      Add search bar to ConfigPanel
      Fix runelite-plugin-archetype
      Add tile indicators plugin
      Add plugin for displaying player names
      Fix new player-is-x mixins

Tyler Hardy (1):
      Generalize and add MenuActions

UniquePassive (10):
      Don't produce erroneous code when @Copy mixin method missing dummy param
      Don't let @Copy/@Replace methods have more params than ob method
      Implement optimized isFriend, isIgnore and isClanMember
      SpecOrbOverlay: Use fields for position constants + adjust specorb pos
      Remove extra pixels on the right side of minimap_orb_background
      Add API for getting the client BufferProvider
      injector: add injector for drawAfterWidgets call
      runescape-client: add hook for draw under widgets
      runelite-client: add OverlayLayer and rendering logic for multiple overlay layers
      runelite-client: update plugins for new overlay layer
\`\`\`
`;export{e as default};
