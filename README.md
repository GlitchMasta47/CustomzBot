# CustomzBot

[![Version](https://img.shields.io/badge/Version-1.1-green.svg?style=flat-square)](https://github.com/GlitchMasta47/CustomzBot/releases)
[![Status](https://img.shields.io/badge/Status-Ready-green.svg?style=flat-square)]()
[![Node](https://img.shields.io/badge/Node-5.2.0-blue.svg?style=flat-square)](http://nodejs.org)
[![NPM](https://img.shields.io/badge/NPM-3.5.3-blue.svg?style=flat-square)](http://nodejs.org)
[![License](https://img.shields.io/badge/License-GNU-blue.svg?style=flat-square)]()
[![Tested on](https://img.shields.io/badge/Tested%20on-Windows%2010%2FUbuntu%2015.10-lightgrey.svg?style=flat-square)]()
[ ![Codeship Status for GlitchMasta47/CustomzBot](https://codeship.com/projects/d0740cc0-8abe-0133-2b23-1a6e0347bbef/status?branch=master)](https://codeship.com/projects/123519)

A chat bot for Discord based off <a href="https://github.com/hydrabolt/discord.js/">discord.js</a>.
More info can be found on CustomzBot's wiki, or on the [site.](http://glitchmasta47.github.io/projects/customzbot/)

# If you're not very technical
**For the sake of decentralisation, consider using your own copy of CustomzBot.**

If you plan on just using CustomzBot as a chatbot, and don't plan on using the files, you can make CustomzBot join your server via CustomzBot's testing & hub server (https://discord.gg/C34FcZa). Use `/join-server CustomzBot <instant-invite>` to make DougleyBot join your server.
**Note** that admin restricted commands, like `/pullanddeploy`, `/online` and `/idle`, don't work on this instance.

# Contributing
All contributions are more than welcome!
Check the wiki for more info.

## Todo

- [x] Make it that bot runs without some of the code from the original DiscordBot.
- [x] Clean up the code a bit.
    - [ ] Clean up the code some more.
- [x] Make it so that !help takes arguments, so it can explain functions independently.
- [x] Add permissions to certain commands. (Like !pullanddeploy, !online, !idle)
    - [ ] Make permissions more advanced.
- [x] Add more memes and abbreviations for the !meme and !game commands.
    - [ ] Add even more memes and abbreviations.
    - [ ] Create a function that will pull the popular memes from Imgflip, and integrate them automatically.
- [x] Integrate !memehelp into !help.
- [ ] Integrate a WolframAlpha command. The original DiscordBot had one, but that didn't work.
- [x] Make it so that log files are written when !log is used, instead of printing them to the console.
- [x] Make it so that !help outputs into a DM, instead of printing it into the channel.
- [x] Integrate Cleverbot support, but restrict it to a certain channel.
- [ ] Integrate a function to make CustomzBot stream music to a certain voice channel. (discord.js is being rewritten to support voice.)
- [ ] Create a function to make CustomzBot create text/voice channels, but restrict it to a certain permission.
