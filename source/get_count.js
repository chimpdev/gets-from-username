const request = require('request');

module.exports = (username) => {
  return new Promise((resolve, reject) => {
    if(!username || typeof username != 'string') throw TypeError('Please a valid specify username.');
    request('https://www.instagram.com/'+username+'/?__a=1', (err, res, body) => {
      if (err) reject(err);
      else {
        try {
          const data = JSON.parse(body);
          return resolve({ followers: data.graphql.user.edge_followed_by.count, following: data.graphql.user.edge_follow.count, postCount: JSON.parse(body).graphql.user.edge_owner_to_timeline_media.count });
          } catch(error) {
            if(error.toString().includes('Unexpected token < in JSON at position 0')) return;
            throw new Error('User not found.');
          };
      };
    });
  });
};