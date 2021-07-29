let bodyEl = document.body;
let bodyChilds = bodyEl.childNodes;
const li = bodyChilds[1].childNodes;


for (let forText of li) {
    console.log(forText);    
}
console.log(li.length)
// let mainText = document.body.childNodes[1].textContent


let a = document.body.firstElementChild.textContent

console.log(Array.of(a))

// let arr = Array.from(ul.childNodes);
// console.log(arr)
// console.log(arr.length)

// console.log(ul.textContent)

// let a = ul.textContent
// let arr2 = Array.of(document.body.childNodes[1].childNodes[1].textContent)
// console.log(arr2)

