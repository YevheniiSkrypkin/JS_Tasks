let studentConst = {
    marks: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    attendance: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
    mark(value) {
        if (value < 0 || value > 10) {
            alert('Некорректная оценка')
            return
        }
        else {
            let indexToChange = this.marks.indexOf(undefined)
            if(indexToChange === -1) {
                return
            }
            this.marks[indexToChange] = value           
        }  
    },
    present() {
        let indexToChange = this.attendance.indexOf(undefined);
        if(indexToChange === -1) {
            return
        }
        this.attendance[indexToChange] = true;
        
    },
    abscent(){
        let indexToChange = this.attendance.indexOf(undefined);
        if(indexToChange === -1) {
            return
        }
        this.attendance[indexToChange] = false;
        return 
    },
    summary() {
        let marksToSplice = this.marks.indexOf(undefined)   //ищем undefined
        if(marksToSplice !== -1) {
            this.marks.splice(marksToSplice, this.marks.length)//если нашли - удаляем
        }
        let avgMark = this.marks.reduce(function(sum, current){return sum + current}, 0) / this.marks.length;

        let attendanceToSlice = this.attendance.indexOf(undefined)
        if(attendanceToSlice !== -1) {
            this.attendance.splice(attendanceToSlice, this.attendance.length)
        }
        let avgAttendance = this.attendance.reduce(function(sum, current){return sum + current}, 0) / this.attendance.length;

        if(avgMark > 9 && avgAttendance > 0.9) {return console.log('Молодец!')}
        else if (avgMark > 9 || avgAttendance > 0.9) {return console.log('Нормально, но можно лучше')}
        else {return console.log('Редиска!')}

        // return console.log([avgMark, avgAttendance])
    }

}

function Student(name, lastName, yearOfBirth) {
    this.name = name
    this.lastName = lastName
    this.age = new Date().getFullYear() - yearOfBirth    
}

Student.prototype = studentConst

let student1 = new Student('John', 'Smith', 1980)
let student2 = new Student('Billy', 'Bob', 1994)
let student3 = new Student('Cat', 'Dog', 1990)

console.log(student1)

student1.present()
student2.abscent()
// student1.present()
// student1.present()
// console.log(student1.attendance)
student1.mark(10)
// student1.mark(9)
// student1.mark(8)
// student1.mark(7)
// // student1.mark(6)
// // student1.mark(5)
// // student1.mark(4)
// // student1.mark(3)
// student1.summary()







console.log(student2)

// student2.abscent()
// student2.abscent()
// student2.abscent()
// student2.abscent()
// student2.abscent()
// student2.abscent()
// console.log(student2.attendance)
student2.mark(1)
// student2.mark(1)
// student2.mark(1)
// student2.mark(1)
// student2.summary()






console.log(student3)

// student3.abscent()
// student3.abscent()
// student3.abscent()
// student3.abscent()
// student3.abscent()
// student3.abscent()

student3.mark(10)
// student3.mark(10)
// student3.mark(10)
// student3.mark(10)
// student3.summary()









// У Студента есть имя, фамилия, год рождения — это свойства.---------------------------------

// И есть возможность получить возраст студента и его средний бал — это методы.-----------------

// Еще у всех Студентов есть по 2 массива одинаковой длины, в них 10 элементов, изначально они не заполнены, но на 10 элементов.------------



// Это массив в котором отмечается посещаемость, каждый раз когда мы вызываем метод .present() на очередное пустое место в массив записывается true, 
// когда вызываем .absent() — записывается false----------------------------------------

// и второй — массив с оценками и метод mark(), мы можем передать оценку от 0 до 10. Длина тоже 
// фиксированная-----------------------------

// Предусмотрите какую нибудь защиту от того чтоб в массивах не могло быть более 10 записей. Массив это свойство, present и absent, mark — методы.
// ----------------------------------------
 

// Ну и последний метод: .summary(), он проверяет среднюю оценку, и среднее посещение, и если средняя оценка больше 9 а среднее посещение больше 
// 0.9, то метод summary, возвращает строку «Ути какой молодчинка!», если одно из этих значений меньше, то — «Норм, но можно лучше», если оба 
// ниже — «Редиска!». Ну и не забудьте после того как напишите замечательный конструктор, создать пару экземпляров(конкретных студентов) и 
// подергать методы.