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

  // TODO  : Read the data [v]

  let body = ""
  response.on('data',(data) => {
    body = body + data
  })

  response.on('end', ()=> {

  // TODO  : Parse the data
      let profile = JSON.parse(body)
      console.log(profile)
      console.log(typeof profile);
  })

})



request.end()

request.on('error',(e) => {
  console.error(e)
})


// TODO  : Print the data out
