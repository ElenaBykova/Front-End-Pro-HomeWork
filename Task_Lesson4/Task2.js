
function f(n) {
  if(n === 1) {
    return n;
  }
  return n * f(n - 1);
};

let functionRecursion = f(9);
console.log('Recursion =', functionRecursion); // 9! = 362880
