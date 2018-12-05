// es module
import sum from './sum'
// common js
const {
    minus
} = require('./minus')

// amd  async load
require(['./multi'], function (multi) {
    console.log(multi(2, 3))
})

console.log(sum(1, 1))
console.log(minus(1, 1))