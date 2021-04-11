
function f(n) {
  if(n === 0) {
    return n;
  }
  return n + f(--n);
};

let functionRecursion = f(10);
console.log('Recursion =', functionRecursion); // 10! = 55
