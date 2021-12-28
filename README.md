# Advanced-DiscordJS-Bot-Template - **Updated to DiscordJS v13**
Advanced DiscordJS Bot Template - With command/event handlers

- All events can be found in the `/events/` folder.
- All slash commands can be found in the  `/commands-slash/` folder.
- All legacy commands (commands with prefix) can be found in the `/commands-legacy/` folder.



For a more basic bot template where all code is stored in one file, see `Basic-DisocrdJS-Bot-Template`.

For an advanced bot template including automod features, see `AutoMod-DiscordJS-Bot-Template`.


## How to install + set up the bot:
- Clone repository:
  ```
  git clone https://github.com/Joshwgaming/Advanced-DiscordJS-Bot-Template
  ```
- Configure the bot in `config.json`:
  ```
  {
    "botToken": "bot token here",
    "prefix": "!",
    "guildId": "primary guild id here",
    "clientId": "bot id here",
    "authorId": "your id here",
    "modRoleID": "mod role id here"
  }
  ```
- Install the required npm modules:
  ```
  npm install
  ```
- Start your bot:
  ```
  node index.js
  ```
- Once started, you should see `Logged in as ...` & `Successfully registered application/slash commands.` in your terminal.
