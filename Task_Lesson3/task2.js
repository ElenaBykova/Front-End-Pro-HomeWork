let temp = 0;
let unit = 'f'; // f || c || k
let F = ' ';
let K = ' ';
let C = ' ';

switch (unit) {
  case 'f':
    F = temp,
    C = (F-32) * 5/9,
    K = C + 273.15,
    console.log(F, C, K);
    break;
      case 'k':
      K = temp;
      C = K - 273.15;
      F = (C * 9/5) + 32;
      console.log(F, C, K)
      break;
        case 'c':
        C = temp;
        K = C + 273.15;
        F = (C * 9/5) + 32;
        console.log(F, C, K);
        break;
  default:
  console.log('');
}