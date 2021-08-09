// let arr = [1, 2, 3, 4, [1.1, 1.2, 1.3], 5, 6, 7, [1.4, 1.5 , [2.1, 2.2, [3.1, [4.1, 4.2, [5.1, 5.2, [6.1, 6.2]]], 3.3]]]]

// function foo(arr) {
//     let ol = document.createElement('ol')
//     for (let i = 0; i < arr.length; i++) {
//         let li = document.createElement('li');
//         li.textContent = arr[i];
//         if (Array.isArray(arr[i])) {
//             li.textContent = '';
            // li.append(foo(arr[i]));
//         }
//         ol.append(li)
//     }
//     document.body.append(ol);
//     console.log(ol)
//     return ol
// }
// foo(arr)

// task 1 completed


const arr = [
    {
        firstName: 'Vlad',
        lastname: 'Shaitan',
        age: 38,
        gender: 'cat'
    },
    {
        firstName: 'Alex',
        lastname: 'Puluev',
        age: 10,
        gender: 'female'
    },
    {
        firstName: 'Ivan',
        lastname: 'Peanuts',
        age: 10,
        gender: 'male'
    },
    {
        firstName: 'Ann',
        lastname: 'Shaitan',
        age: 38,
        gender: 'dog'
    },
];

let results = []

let input = document.body.querySelector('#search')
input.addEventListener('keyup', event => {
    arr.forEach(item => {
        for(let key in item)
            if(item[key].toString().indexOf(event.target.value) !== -1) {
                results.push(item)
                break
        }
    })
    console.log(results)
})
