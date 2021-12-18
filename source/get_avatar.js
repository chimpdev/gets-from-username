const request = require('request');

module.exports = (username) => {
  return new Promise((resolve, reject) => {
    if(!username || typeof username != 'string') return reject('Please a valid specify username.');
    request('https://www.instagram.com/'+username+'/?__a=1', (err, res, body) => {
      if (err) reject(err);
      else {
        try {
          const data = JSON.parse(body);
          return resolve(data.graphql.user.profile_pic_url_hd);
          } catch(error) {
            if(error.toString().includes('Unexpected token < in JSON at position 0')) return;
            return reject('User not found.');
          };
      };
    });
  });
};
