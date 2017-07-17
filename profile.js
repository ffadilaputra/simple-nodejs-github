// profile.js

// TODO : Connect to the Github API [v]

'use strict'

const https = require('https');

//const username = 'fwklojoiej'

let get = (username) => {

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

    //Fungsi Menampilkan data
    let printData = (name,publicRepo,followers) => {
      console.log(`${name} punya ${publicRepo} repo dan punya ${followers} Follower`);
    }

    response.on('end', ()=> {
      if (response.statusCode === 200) {
        // TODO  : Parse the data [v]
            let profile = JSON.parse(body)
        // TODO  : Print the data out [v]
        // console.log(profile)
        // console.log(typeof profile);
        printData(profile.name,profile.public_repos,profile.followers)
      }else{
        console.log({ message: `Profile dengan username '${username}' tidak ada.(${response.statusCode})`})
      }
    })

  })



  request.end()

  request.on('error',(e) => {
    console.error(e)
  })

}

module.exports.get = get
