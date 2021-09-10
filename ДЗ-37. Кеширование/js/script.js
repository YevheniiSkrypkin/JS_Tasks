'use strict'

let cache = new Map()

// Вам нужно написать функцию, которая в качестве параметра принимает функцию и добавляет ей возможность кешировать вызовы. Идея состоит в том, 
// что при вызове функции с одинаковыми аргументами, нет смысла вызывать функцию каждый раз, достаточно сохранять данные о результатах вызова.
// Хранить нужно последние 10 вызовов.
function caching (arg) {
    if (!cache.has(arg)) {
        let result = arg.value
        cache.set(arg, result)
        console.log(`Записано в кэш `)    
    }
    else {
        console.log(`Взято из кэша`)
    }
    return cache.has(arg)
}
let obj = {name: 'john', value: 100}
let obj2 = {name: 'john', value: 200}
let obj3 = {name: 'john', value: 300}
let obj4 = {name: 'john', value: 400}
let obj5 = {name: 'john', value: 500}


caching(obj)
caching(obj2)
caching(obj3)
caching(obj4)
caching(obj5)
caching(obj)
caching(obj2)
caching(obj3)
caching(obj4)
caching(obj5)
console.log(cache)
