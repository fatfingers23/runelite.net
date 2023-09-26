const n=`---
title: 'Launcher 1.6.2 Release'
description: 'Linux AppImage and bugfixes for OSX'
author: Adam
skip: true
---

Launcher 1.6.2 was released yesterday which now includes a
[64bit Linux AppImage](https://github.com/runelite/launcher/releases/download/1.6.2/RuneLite.AppImage)
for easy installation on Linux. The OSX download was also updated to fix
installations on multi-user systems and to not require high performance graphics
mode.

Additionally, the launcher was fixed to work with \`--nojvm\` on Java 9+ and will
also clean up old client releases on startup.

The Windows releases have not changed and remains on 1.6.0

\\- Adam
`;export{n as default};
