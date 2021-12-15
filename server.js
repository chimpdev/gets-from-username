/**
 * Track posts from username using Discord.js Client.
 * @author can#0002
 * @param {Client} client
 * @param {String} username
 * 
 */

function Tracker(client, username) {
  if(!client) throw new Error('No token provided.');
  if(!username || typeof username != 'string') throw new Error('No username provided.');

  require('./source/get_count.js')(username).then(data => {
    this.postCount = data.postCount;
    setInterval(() => {
      require('./source/get_count.js')(username).then(data => {
        if(data.postCount > this.postCount) {
          client.emit('newPost', username);
          this.postCount = data.postCount;
        };
        if(data.postCount < this.postCount) {
          this.postCount = data.postCount;
        }
      });
    }, 30000);
  });
};

module.exports = {
  /**
   * Get followers count, following count, post count from username on Instagram.
   * @author can#0002
   * @param {String} username

   */
  get_count: (username) => require('./source/get_count.js')(username),
  /**
   * Get last 12 posts (with comments, like count, shortcode) from username on Instagram.
   * @author can#0002
   * @param {String} username
   */
  get_posts: (username) => require('./source/get_posts.js')(username),
  Tracker: Tracker
};