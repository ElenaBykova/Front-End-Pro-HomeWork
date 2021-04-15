

let arr2 = [0, 1, 2, 3, 4, 5, 36, 45, 500, 956, 450, 600, 760, 125, 259, 650, 634, 281, 50, 640, 52, 297, 346, 300, 24];


// Часть 1
//Четных чисел и кратных 10
let Arr2Devided10 = arr2.filter((_element) => {
  if (_element % 2 === 0) {
    return _element % 10 === 0;
  }
});

console.log('Arr2Devided10', Arr2Devided10);

// Часть 2
//Нечетных и кратных 3
let Arr2Devided3 = arr2.filter((_element) => {
    if (_element % 2 !== 0) {
      return _element % 3 === 0;
    } 
});

console.log('Arr2Devided3', Arr2Devided3);

// Часть 3
//Нечетных и кратных 5
let Arr2Devided5 = arr2.filter((_element) => {
  if (_element % 2 !== 0) {
    return _element % 5 === 0;
  } 
});

console.log('Arr2Devided5', Arr2Devided5);

//// Часть 4
//отсортированный от большего к меньшему
let Arr2FilterValue = arr2.sort ((a, b) => {
  return b - a;
});
console.log('Arr2FilterValue', Arr2FilterValue);