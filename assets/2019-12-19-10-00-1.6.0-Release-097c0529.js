const e=`---
title: '1.6.0 Release'
description: 'RuneLite Plugin Hub'
author: Adam
---

We've added support for external plugins to RuneLite. External plugins are
plugins which are maintained by community members and other developers that are not
officially affiliated with the project.

The external plugins are verified by us for safety, to ensure they are not
malicious, and are also not breaking [Jagex's
rules](https://secure.runescape.com/m=news/another-message-about-unofficial-clients?oldschool=1),
which we have agreed to as a project.

We are providing the platform for the external plugins; developers submit their
plugins to the [plugin hub repository](https://github.com/runelite/plugin-hub)
for inclusion. External plugins are not tied to specific RuneLite releases;
plugins can be created, modified, or removed from the plugin hub without
requiring us make a new RuneLite release.

The plugin hub can be browsed in the client by scrolling to the bottom of the
configuration panel.

There are also several smaller improvements and bug fixes, including:

- Fix the Kourend Library plugin incorrectly resetting when searching empty bookcases
- Add support for ignore list notes to the friend notes plugin
- The fog at the scene corners now curves around it slightly
- Fix the tithe farm overlay to be movable again

Enjoy!

\\- Adam

### New commits

\`\`\`
Aaron Goff (1):
      Change avantoe and avantoe seed item id medium name

Adam (1):
      api: modify RemoveFriend to accept a nameable

Hydrox6 (1):
      kourendlibrary: fix layout resetting unintentionally

Max Weber (10):
      devtools: Add Notifier button
      runelite-client: Add custom notification sounds
      config: Refactor config panel into separate panels for each logical view
      runelite-client: Remove IconButton Most of this class is defaults, which can just be a normal method and a listener for hover support, which is part of the base class anyway.
      ImageUtil: Rename methods to luminance, and work with non ARGB images
      DynamicGridLayout: Take the container's insets into account
      SplashScreen: Ceiling download total
      SplashScreen: Allow use after our L&F has been installed
      runelite-client: Add External Plugin support
      objectindicators: Correctly match template plane

Owain van Brakel (1):
      FPS: Add range to the fps target config items

Rami (1):
      friend notes: support notes on ignore list players

dekvall (1):
      widgetinfo: fix tithe farm score

ln (1):
      GPU: smooth out fog corners
\`\`\`
`;export{e as default};
