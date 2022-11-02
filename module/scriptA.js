// // browser

// //IIFE

// let controllerA = (function() {
//     //scope A
//     //private
//     let age = 20
//     let firstName = 'Tunahan'

//     let log = function() {
//         console.log(this.firstName)
//     }

//     //public
//     return {
//         firstName,
//         log
//     }

// })();


// nodejs

//private members
let age = 30

//public members
let firstName = 'Tunahan'


let log = function(name) {
    console.log(name)
}

// module.exports.name = firstName
// module.exports.log = log

// module.exports={
//     name:firstName,
//     log:log
// }

module.exports = {
    firstName,
    log
}