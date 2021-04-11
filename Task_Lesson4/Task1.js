
function getTemp(temp = 'no value', unit = 'no value') {
  var temp = 0;
  var unit = 'f';
  console.log(`Unit:${unit}, Temp:${temp}`);
    switch (unit) {
      case 'f':
        F = temp;
        K = convertFahrenheitAndCelsiusToKelvin(temp);
        C = convertFahrenheitToCelsius(temp);
        break;
      case 'k':
        K = temp;
        C = convertKelvinToCelsius(temp);
        F = convertKelvinToFahrenheit(temp);
        break;
      case 'c':
        C = temp;
        K = convertCelsiusToKelvin(temp);
        F = convertCelsiusToFahrenheit(temp);
        break;
      default:
      console.log('The value is incorrect!');
    };

  console.log(`'F' = ${F},  'K' = ${K}, 'C' = ${C}`);
};

getTemp();

function convertFahrenheitToCelsius(temp) {
  return (temp - 32) * 5/9;  
};

function convertFahrenheitAndCelsiusToKelvin(temp) {
  return (temp - 32) * 5/9 + 273.15;
};

function convertKelvinToFahrenheit(temp) {
  return (temp - 273.15) * 9/5 + 32;
};

function convertKelvinToCelsius(temp) {
  return temp - 273.15;
};

function convertCelsiusToFahrenheit(temp) {
  return (temp * 9/5) + 32;
};

function convertCelsiusToKelvin(temp) {
  return temp + 273.15;
};