const url = require('url')

const address = 'https://github.com/tunahanatisman?tab=repositories'

let result = url.parse(address, true)

console.log(result)