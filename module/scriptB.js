// let controllerB = (function() {

//     //scopeB

//     let firstName = 'Atışman'

//     let log = function() {
//         console.log(this.firstName)
//     }

//     return {
//         firstName,
//         log
//     }

// })();

// console.log(controllerA.firstName)
// console.log(controllerB.firstName)

const scriptA = require('./scriptA')

scriptA.log('Çınar')
console.log(scriptA.name)
    //console.log(scriptA.age)