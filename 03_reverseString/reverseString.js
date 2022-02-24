const reverseString = function(string) {
    let stringAsArray = string.split("");
    stringAsArray.reverse();
    return stringAsArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
