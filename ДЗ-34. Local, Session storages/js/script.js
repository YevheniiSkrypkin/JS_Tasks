const formInfo = document.getElementById("form"); 

formInfo.addEventListener("submit", function (event) {
  event.preventDefault();

  
  let userInfo = document.querySelectorAll("#form input, #form select, #form textarea");

  let objectForInfo = {}; 

  let cbox = document.querySelector('#term-checkbox')       // проверка на нажатие чекбокса используя value, для получения нужной записи в localStorage


  if(document.querySelector('#term-checkbox:checked')) {
    cbox.setAttribute('value', 'Agreement')
  }
  else {
    cbox.setAttribute('value', '')
  }

  
  for (let key of userInfo) {
    objectForInfo[key.name] = key.value;
  }

  localStorage.setItem("saveUserInfo", JSON.stringify(objectForInfo)); // перевели в JSON строку

  window.open("info-save.html", '_self');

});