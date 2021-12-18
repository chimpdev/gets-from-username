## Hi! Welcome to Home Page. 👋
<div align="left">
  <p>
    <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/v/gets-from-username.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/discord.js"><img src="https://img.shields.io/npm/dt/gets-from-username.svg?maxAge=3600" alt="npm downloads" /></a>
  </p>
This package gets to you the counts(followers, follows, post), last 12 posts (with comments, like count, shortcode), HD avatar url and Track posts for Discord.js bots on Instagram of the username you specify.

# Installation

**Node.js 16.6.0 or newer is required.**

```sh-session
npm install gets-from-username@latest
```

# Simple Instance
```js
// Main
const $ = require('gets-from-username');
$.get_count('thiskyhan').then(console.log); // -> { followers: '44', following: '34', postCount: '0' }
$.get_posts('thiskyhan').then(console.log); // -> [] (this account is private)
$.get_posts('cristiano').then(console.log); // -> [{ ... }, { ... }, ...]
$.get_avatar('thiskyhan').then(console.log); // -> Get the avatar of the username.

// Post Tracker
const Discord = require('discord.js');
const client = new Discord.Client({ intents: Object.values(Discord.Intents.FLAGS).reduce((a, b) => a + b) });
client.login('your_bot_token');

client.on('ready', () => {
  const { Tracker } = require('gets-from-username');
  new Tracker(client, 'thiskyhan');
});

client.on('newPost', username => {
  return console.log(username+' has posted a new post!'); // -> thiskyhan has posted a new post!
});
```

# News
- You can now get last 12 posts from Username.
- Tracking posts from username for Discord.js bots.
- get_avatar function is added. You can now get hd avatar url of the username you specify. (Special thanks to [@Nadiga](https://discord.com/users/754465737611149423) for suggest)

# Contact
[![Discord Badge](https://img.shields.io/badge/can-white?style=social&logo=Discord)](https://discord.com/users/613700645173592086)<br>
[![Discord Badge](https://img.shields.io/badge/thiskyhan-white?style=social&logo=Instagram)](https://instagram.com/thiskyhan)
