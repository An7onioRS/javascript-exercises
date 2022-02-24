const repeatString = function(string, repetitionNum) {
    if (repetitionNum < 0) {
        return 'ERROR';
    }
    let newString = '';
    for (i = 0; i < repetitionNum; i++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
