const sumAll = function(num1, num2) {

    if (num1 < 0 || 
        num2 < 0 || 
        typeof(num1) != 'number' || 
        typeof(num2) != 'number') 
        return 'ERROR';

    let sum = 0;
    let firstNum;
    let secondNum;

    if (num1 > num2) {
        firstNum = num2;
        secondNum = num1;
    }
    else {
        firstNum = num1;
        secondNum = num2;
    }

    for(i = firstNum; i <= secondNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;