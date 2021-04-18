
//Задача 1.
function arrArray() {
      n = 500;
      arr = new Array(n)
      for (var i = 0; i <= n; i++) {
          arr.push(i);
      }
      return arr;
  }
arr = arrArray(10);
console.log(arr);


// Задача 2
//Четных чисел и кратных 10
let Arr2Devided10 = arr.filter((_element) => {
      if (_element % 2 === 0) {
        return _element % 10 === 0;
      }
    });
    
    console.log('Arr2Devided10', Arr2Devided10);
    
//Нечетных и кратных 3 и 5, отсортированный от большего к меньшемую
let Arr2Devided3 = arr
    .filter((_element) => {
        if (_element % 2 !== 0) {
          return _element % 3 === 0 && _element % 5 === 0;
        } 
      });
      Arr2Devided3.sort ((a, b) => {
        return b - a;
      });
      
    console.log('Arr2Devided3', Arr2Devided3);



//Задача 3.
//Написать функцию, которая будет принимать 2 массива, и вернет массив общих строк.

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let studentCoursesDubl = student1Courses.filter(function(obj) { 
  return student2Courses.indexOf(obj) >= 0; 
});

console.log(studentCoursesDubl);