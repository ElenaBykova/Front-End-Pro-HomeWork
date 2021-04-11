
function getTemp(temp = 'no value', unit = 'no value') {
  console.log(`Unit:${unit}, Temp:${temp}`);
    switch (unit) {
      case 'f':
        F = temp;
        K = calcKifForC(temp);
        C = calcCifF(temp);
        break;
          case 'k':
            K = temp;
            C = calcCifK(temp);
            F = calcFifKorC(temp);
            break;
              case 'c':
                C = temp;
                K = calcKifForC(temp);
                F = calcFifKorC(temp);
                break;
      default:
      break;
    };

  console.log(`'F' = ${F},  'K' = ${K}, 'C' = ${C}`);
};

getTemp(0, 'c');

function calcCifF(temp) {
  return (temp - 32) * 5/9;  
};

function calcKifForC(temp) {
  return temp + 273.15;
};

function calcFifKorC(temp) {
  return (temp * 9/5) + 32;
};

function calcCifK(temp) {
  return temp - 273.15;
};