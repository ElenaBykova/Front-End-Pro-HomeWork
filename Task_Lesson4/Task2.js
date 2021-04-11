
function f(n) {
  if(n === 2) {
    return n;
  }
  return n + f(--n);
};

let functionRecursion = f(10);
console.log('Recursion =', functionRecursion); // 10! = 54
