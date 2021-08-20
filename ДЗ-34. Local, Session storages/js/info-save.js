function showInfo() {    
  let userInform = localStorage.getItem("saveUserInfo");  
    
  if (userInform) {
    let div = document.createElement("div");    // создали div.container
    div.classList.add("container");
    document.body.append(div);
  
    let h1 = document.createElement("h1");    // создали внутри тег h1
    div.append(h1);
    h1.innerHTML = "Following info has been saved";
  
    let ul = document.createElement("ul");    // созадали ul.list-group
    ul.classList.add("list-group");
    div.append(ul);
  
    let parseLocalStorage = JSON.parse(userInform);   // сделали из строки JSON объект
 
    for (let key in parseLocalStorage) {      // перебираем объект и для каждого элемента создаем li.list-group-item
      let li = document.createElement("li");
      li.classList.add("list-group-item");
      if (parseLocalStorage[key]) {       // если ключ сущесвует, то добавляем его значение
        li.innerHTML = `<b><i>${key}:</i></b> ${parseLocalStorage[key]}`;
        ul.append(li);
      } 
      else {
        li.innerHTML = `<b><i>${key}:</i></b> Your data is empty`;    // иначе пишем что данные не заполнены 
        li.classList.add("text-danger");
        ul.append(li);
      }
    }
  } 
}
showInfo();  