//Написать функцию, которая будет принимать 2 массива, и вернет массив общих строк.

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

let studentCoursesDubl = student1Courses.filter(function(obj) { 
  return student2Courses.indexOf(obj) >= 0; 
});

console.log(studentCoursesDubl);

