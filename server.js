/**
 * Track posts from username using Discord.js Client.
 * @author can#0002
 * @param {Client} client
 * @param {String} username
 * 
 */

function Tracker(client, username) {
  if(!client) throw new Error('No client provided.');
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
   * @returns {Object} { followers: Number, following: Number, postCount: Number }
   */
  get_count: (username) => require('./source/get_count.js')(username),
  /**
   * Get last 12 posts (with comments, like count, shortcode) from username on Instagram.
   * @author can#0002
   * @param {String} username
   * @returns {Array} Array of posts.
   */
  get_posts: (username) => require('./source/get_posts.js')(username),
  /**
   * Get profile data from username on Instagram.
   * @author can#0002
   * @param {String} username
   * @returns {String} URL of profile picture. 
   */
  get_avatar: (username) => require('./source/get_avatar.js')(username),
  Tracker: Tracker
};
