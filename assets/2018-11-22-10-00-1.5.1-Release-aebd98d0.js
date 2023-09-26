const n=`---
title: '1.5.1 Release'
description: 'Linux support for GPU plugin, CTRL-V paste on login screen, combat tooltips'
author: Adam
---

Thanks to the hard work of [@whitehooder](https://github.com/whitehooder) and [@deathbeam](https://github.com/deathbeam)
the GPU plugin now also supports Linux machines. The requirements are still the same, mesa with
at least GL 4.3+ support is required. Here is small table of
[Mesa 17.2.0 GL support](https://people.freedesktop.org/~imirkin/glxinfo/#diff&v=Mesa%2017.2.0).
We are aware that on some graphic cards mesa can only support GL 4.2 even though all required features
that we use are supported, and we plan to look into that in future.

Thanks to [@bmiddle](https://github.com/bmiddle) Combat Level plugin now displays a tooltip for levels required
to reach the next combat level in Attack Style interface.

![combat1](/img/blog/1.5.1-Release/combat1.png)
![combat2](/img/blog/1.5.1-Release/combat2.png)

Thanks to [@deathbeam](https://github.com/deathbeam) you can now paste your username and password to
login screen with CTRL-V. This option needs to be explicitly enabled in Login Screen plugin.

GPU fixes for this week:

- Add support for Stretched Mode
- Fix tiles having black outlines on Intel HD Graphics with drivers newer than 20.19
- Fix relying on some undefined behavior causing some AMD cards to not work corectly
- Fix visible lag from resizing the client or when expanding/contracting the side panel
- Fix resource leaks from shutting down the GPU plugin
- More consistently limit interaction with far away objects

There are also several smaller improvements and bug fixes, including:

- Fix smoke rune level requirement in skill calc
- Show ironman icons when chat is locked with the WASD plugin
- Add new POH teleport icons to minimap
- Fix hiding attack styles after autocast selection
- Make Skotizo interface layoutable
- Fix some boulders at Maniacal Monkeys not working with the hunter plugin
- Add kills left to XP orbs

Enjoy!

\\- Adam

### New commits

We had 17 contributors this release!

\`\`\`
Adam (4):
      gpu: destroy glcontext on shutdown
      gpu: don't compute scene if the scene buffer isn't filled yet
      gpu: correct uniform block name in geometry shader
      mixins: remove extended visiblity maps

Brett (1):
      Add tooltip to show levels required for next combat level (#5764)

Dennis (1):
      gpu: add sin/cos table to UBO

DevinMadsen (1):
      Fix smoke rune level requirement in skill calc (#6565)

Hydrox6 (1):
      wasdplugin: Show Ironman Icons when chat is locked (#6347)

Jack Sheehan (1):
      Add new POH teleport icons to minimap (#6502)

Jordan Atwood (1):
      attack styles: Fix style hiding after autocast selection

Lotto (4):
      puzzlesolver: wait a duration before recomputing the solution
      gpu: limit interaction distance from camera
      gpu: add frame and render buffer utils
      gpu: add stretched mode support

Magic fTail (1):
      Add abyssal sire resp systems to npc_health

Max Weber (3):
      ScriptVM: Catch exceptions thrown from a JavaScriptCallback
      ChatboxTextInput: Properly escape carrots
      runelite-client: Make Skotizo widget layoutable

MaxBartlett (1):
      Fix distance check for maniacal monkey boulders (#6399)

Slevender (1):
      Remove non-existant fairy ring location BJQ (#6518)

Steffen Hauge (1):
      Add support for kills left in xp orbs

Tomas Slusny (9):
      Switch to core profile in GPU plugin
      Expose current login field and password setter
      Add support for Ctrl-V pasting on login screen
      Fix JOGL context debug logging flag
      Properly destroy JAWT window on plugin shutdown
      Unlock surface only with X11JAWTWindow
      Make sidebar icon consistent without custom chrome
      Properly null-check chat performance widgets
      Null-check GL and window on plugin shutdown

Whitehooder (1):
      Fix GPU rendering on Linux

drivfe (1):
      Fix some xp values in skill_smithing.json

forsco (1):
      Fix indentation of npc_health json (#6616)
\`\`\`
`;export{n as default};
