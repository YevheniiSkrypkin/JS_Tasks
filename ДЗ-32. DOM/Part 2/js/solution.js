// task 2

let arr = [1, 2, 3, 4, [1.1, 1.2, 1.3], 5, 6, 7, [1.4, 1.5 , [2.1, 2.2, [3.1, [4.1, 4.2, [5.1, 5.2, [6.1, 6.2]]], 3.3]]]]

function foo(arr) {
    let ol = document.createElement('ol')
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        if (Array.isArray(arr[i])) {
            li.textContent = '';
            li.append(foo(arr[i]));
        }
        ol.append(li)
    }
    document.body.append(ol);
    console.log(ol)
    return ol
}
foo(arr)
