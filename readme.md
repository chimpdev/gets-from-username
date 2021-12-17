## Hi! Welcome to Home Page. 👋
This package gets to you the followers count, follows count, post count, last 12 posts (with comments, like count, shortcode) and Track posts for Discord.js bots on Instagram of the username you specify.

# Simple Instance
```js

// Main
const $ = require('gets-from-username');
$.get_count('thiskyhan').then(console.log); // -> { followers: '44', following: '34', postCount: '0' }
$.get_posts('thiskyhan').then(console.log); // -> [] (this account is private)
$.get_posts('cristiano').then(console.log); // -> [{ ... }, { ... }, ...]


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

# Contact
[![Discord Badge](https://img.shields.io/badge/can-white?style=social&logo=Discord)](https://discord.com/users/613700645173592086)<br>
[![Discord Badge](https://img.shields.io/badge/thiskyhan-white?style=social&logo=Instagram)](https://instagram.com/thiskyhan)
