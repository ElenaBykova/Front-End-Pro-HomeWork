let a = 9;
let b = 4;
let c = 7;

if (a <= b) {
  if (b <= c) {
    console.log(a,b,c);
  }
    else if(a<=c) {
      console.log(a,c,b);
    }
      else {
        console.log(c,a,b);
      };
} else if( c <= b) {
  console.log(b,a,c);
  }
    else if (a<=c) {
      console.log(b,a,c);
    }
      else {
        console.log(b,c,a);
      };