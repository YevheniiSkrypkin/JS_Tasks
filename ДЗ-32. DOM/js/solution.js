// Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в 
// консоль

const ulElem = document.body.childNodes[1];

let arr = []
for(let attr of ulElem.attributes) {    
    arr.push(attr.name, attr.value)    
}
console.log(arr)



// Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль
let arr2 = []
for(let attr2 of ulElem.attributes) {    
    arr2.push(attr2.name)    
}
console.log(arr2)


// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
const lastLi = document.querySelector('ul li:last-child');
lastLi.innerHTML = '«Привет меня зовут Женя»';



// Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
const firstLi = document.querySelector('ul li:first-child');
firstLi.setAttribute('data-my-name', '«Привет меня зовут Женя»')


// Удалить у тега ul аттрибут ‘data-dog-tail‘
const ul = document.querySelector('ul');
ul.removeAttribute('data-dog-tail')
console.log(ul)
