//Написать функцию, которая будет принимать 2 массива, и вернет массив общих строк.

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

//Вариант 1. 

let studentConcat = student1Courses.concat(student2Courses);
console.log(studentConcat); // ["Math", "English", "Programming", "Geography", "Spanish", "Programming"]


//Вариант 2. Честно признаюсь - нашла на просторах интернета)), люблю гуглить. Но я не смогу объяснить конструкцию Math.max(b.length, a.length) и также как сделать, чтобы выводился один массив за другим, а не элементы по индексу.

function sum(a,b) {
  let result = [];

  for (let i = 0; i < Math.max(b.length, a.length); i++){
   result = result.concat(a[i]).concat(b[i])
  }

 console.log(result)
 return result;
} 

sum(student1Courses, student2Courses);  //["Math", "Geography", "English", "Spanish", "Programming", "Programming"]


//Вариант 3. С использованием оператора Spread. У меня проблема в том, что я не понимаю, как это оформить в функцию согласно задаче)). Если данный вариант вовсе возможно оформить в функцию.

let studentCoursesSpread = [...student1Courses, ...student2Courses];
console.log(studentCoursesSpread);


// Вариант 4. Это наверное самый правильный)

let studentCoursesMap = student1Courses.map(function studentCoursFunction(_string) {
  return _string;
})
.concat(student2Courses)
//.join(', ');

console.log('studentCoursesMap', studentCoursesMap); 
//["Math", "English", "Programming", "Geography", "Spanish", "Programming"]