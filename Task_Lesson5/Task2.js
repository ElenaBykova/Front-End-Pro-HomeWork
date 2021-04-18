

let arr2 = [0, 1, 2, 3, 4, 5, 105, 36, 45, 500, 956, 450, 600, 760, 75, 125, 259, 650, 634, 281, 50, 640, 52, 297, 346, 300, 24, 555, 975];


// Часть 1
//Четных чисел и кратных 10
let Arr2Devided10 = arr2.filter((_element) => {
  if (_element % 2 === 0) {
    return _element % 10 === 0;
  }
});

console.log('Arr2Devided10', Arr2Devided10);

// Часть 2
//Нечетных и кратных 3 и 5, отсортированный от большего к меньшемую
let Arr2Devided3 = arr2
.filter((_element) => {
    if (_element % 2 !== 0) {
      return _element % 3 === 0 && _element % 5 === 0;
    } 
  });
  Arr2Devided3.sort ((a, b) => {
    return b - a;
  });
  
console.log('Arr2Devided3', Arr2Devided3);

