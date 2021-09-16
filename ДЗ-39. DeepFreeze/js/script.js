let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}



function deepFreeze(userObj) {
    let propNames = Object.getOwnPropertyNames(userObj);    //получили МАССИВ свойств объекта
    propNames.forEach(function (name) {                     //перебираем все свойства объекта
      let prop = userObj[name];
    deepFreeze(prop);                                       //замораживаем все что попадает в перебор
    });
    return Object.freeze(userObj);                          //заморозка объекта
} 

deepFreeze(user);