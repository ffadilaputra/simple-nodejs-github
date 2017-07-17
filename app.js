// App.js

const profile = require('./profile.js')

const users = process.argv.slice(2)
users.map(profile.get)

// console.dir(process.argv, {colors:true})

// Pencarian 1 User
//profile.get('ffadilaputra')

// Pencarian Lebih dari 1
// Menggunakan map
// https://www.discovermeteor.com/blog/understanding-javascript-map/

//const user = ['ffadilaputra','sqfreakz']

// user.map((pengguna) => {
//     return profile.get(pengguna)
// })

//user.map(profile.get)
