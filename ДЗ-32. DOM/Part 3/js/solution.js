// //task 3
'use strict'
function createTable(row = 10, col = 10) {
    let table = document.createElement('bodyTable');
    document.body.append(table);
  
    let c = 1;
    for (let i = 0; i < row; i++) {
      let indicators = document.createElement('indicators');
      table.append(indicators);
    //   if (c % 10 !== 0) {
    //       console.log('Line')
    //   }
      for (let j = 0; j < col; j++) {
        let sheet = document.createElement('sheet');
        sheet.style.padding = '10px';
        sheet.style.border = '1px solid black';
        sheet.style.textAlign = 'center';
        sheet.innerHTML = c;
        indicators.append(sheet);
        c++;
      }
    }
  }
  
  createTable();