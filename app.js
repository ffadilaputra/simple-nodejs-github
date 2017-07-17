// App.js

// TODO : Connect to the Github API [v]

'use strict'

const https = require('https');

const username = 'ffadilaputra'

const options = {
  hostname : 'api.github.com',
  port     : 443,
  path     : `/users/${username}`,
  method   : 'GET',
  headers  : { 'user-agent' : 'node.js' }
}

let request = https.request(options, (response) => {
  console.log(response.statusCode);
  console.log(options);
})

request.end()

request.on('error',(e) => {
  console.error(e)
})

// TODO  : Read the data
// TODO  : Parse the data
// TODO  : Print the data out
