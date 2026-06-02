const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = (tempFahrenheit - 32) * (5/9);

  let tempRounded = roundNumber(tempCelsius);

  return tempRounded;
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = (tempCelsius * (9/5) + 32);

  let tempRounded = roundNumber(tempFahrenheit);

  return tempRounded;
};


  /* 
  Mulitplies number by 10 to get the first decimal to become a whole number. 
  Then round to the nearest whole number. 
  Lastly divides by 10 put last number as decimal.
  */

function roundNumber(number) {
  return (Math.round(number * 10) / 10);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
