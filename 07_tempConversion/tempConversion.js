const rounded = floatingNumber => parseFloat((Math.round(floatingNumber * 10) / 10).toFixed(1));

const ftoc = function(farenheit) {
  let celsius = (farenheit - 32) * 5/9;
  return rounded(celsius);
};

const ctof = function(celsius) {
  let farenheit = celsius * 9/5 + 32;
  return rounded(farenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
