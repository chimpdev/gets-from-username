const request = require('request');

module.exports = (username) => {

  return new Promise((resolve, reject) => {
    if(!username || typeof username != 'string') throw TypeError('Please a valid specify username.');
    request('https://www.instagram.com/'+username+'/?__a=1', (err, res, body) => {
      if (err) reject(err);
      else {
        try {
          const postArray = [];
          JSON.parse(body).graphql.user.edge_owner_to_timeline_media.edges.map(x => x).forEach(x => {
            postArray.push({ id: x.node.id, shortcode: x.node.shortcode, likes: x.node.edge_liked_by.count, commentCount: x.node.edge_media_to_comment.count, displayUrl: x.node.display_url, timestamp: x.node.taken_at_timestamp });
          });

          return resolve(postArray);
          } catch(error) {
            if(error.toString().includes('Unexpected token < in JSON at position 0')) return;
            throw new Error('User not found.');        
          };
      };
    });
  });
};