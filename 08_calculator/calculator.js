const add = (num1, num2) => num1 += num2;

const subtract = (num1, num2) => num1 - num2;

const sum = (arr) => arr.reduce((acc, currItem) => acc += currItem, 0);

const multiply = (arr) => arr.reduce((totalMultiplied, currItem) => totalMultiplied *= currItem, 1);

const power = (num, power) => num ** power;

const factorial = num => {
  
  if (num < 0) return -1;
  if (num === 0) return 1;

	return num * factorial(num -1); //  5 * factorial (4) = 4 * factorial(3)  = 3 * factorial(2) = 2 * factorial(1) = 1 * factorial(0) = returns 1 => factorial(1) = 1 * 1 = 1 => factorial(2) = 2 * 1 = 2 => factorial(3) = 3 * 2 = 6 => factorial(4) = 4 * 6 = 24 => factorial(5) = 5 * 24 = 120
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
