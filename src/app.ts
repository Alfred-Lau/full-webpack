import * as _ from 'lodash'

const num = 100

interface Cat {
    name : String,
    age : String
}

const touchCat = (cat : Cat) => {
    console.log('miao!', cat.name)
}

touchCat({name: 'tom', age: '100'})

const arr = [1, 2, 3, 4, 5]

console.log(_.chunk(arr, 3))