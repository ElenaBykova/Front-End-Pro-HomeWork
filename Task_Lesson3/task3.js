//Часть 1. Старт с цикла Do...While
let i = 18;
let n = 24;
let T = ' ';
do {
  console.log(i, T = i / 2);
  i += 1;
} while (i <= n);

//Часть 2. Два условия завязала во вложенные циклы While вложен в For
let V = 5;
let j = -1;
for (let v = 0; v < 3; v--) {
  while (j <= 2) {
    console.log(`v: ${v}, j: ${j}`);
    j++;
  };   
 console.log(`v: ${v}, V: ${V > v}`);
};

//Часть 3. (Блок, который выводит End) Два условия завязала во вложенные циклы While вложен в While
let k = 0;
let m = 7;
while (k <= 4) {
  while (m >= 5) {
    console.log(`k: ${k}, m: ${m}`);
    m--;
  };   
 console.log(`k: ${k}`);
 k++;
};

//Часть 4. Два условия завязала во вложенные циклы - While вложен в For. (проверяем d по условию и выводим тоже в консоль)
let l = 10;
let l1 = 11;
let PredL = 9;
let Predl = ' ';
for (let l = 10; l < 12; l++) {
  while (l >= PredL) {
    console.log(`l1: ${l1}, l: ${l}, Predl: ${l >= PredL}`);
    l++;
  };
  console.log(`l: ${l}`);
};

//Часть 5. Do...while (в консоль выводим результат условия)
let h = 18;
let h1 = 24;
let Pred = 35;
do {
  console.log(h, Pred <= h );
  h += 1;
} while (h < h1);

