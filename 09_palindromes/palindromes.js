const palindromes = text => {
    text = text.replace(/[^a-zA-Z0-9]/g, "");
    const arr = Array.from(text);
    const reversedArr = arr.slice().reverse(); // 1)
    const isSame = (arr.length === reversedArr.length) && (arr.every /* 2) */(function(currentElement, index) {
        return currentElement.toLowerCase() === reversedArr[index].toLowerCase();
    })); 
    return isSame;
};

// Do not edit below this line
module.exports = palindromes;

// (1) You must know that Object values in JavaScript are passed by reference and primitives are passed by value. Having this in mind, now you know that arr1 and arr2 are referencing the same space in memory, so when you reverse arr1 you are not creating a new reversed array, you are just reversing arr1 and assigning it to arr2, so both variables are pointing to the same reversed array.

// (2) the arr.every() method can take 2 arguments - (function(currentElement, index, arr), thisValue). The first argument of the arr.every() method is the function that has to be run for each element in the array. In it currentElement (required) is the value of the current element in the loop, index (optional) is the index of the currentElement, and arr (optional) which is the arr of the current element. The second argument of the arr.every() function is thisValue (optional) which represents a value passed to the function as 'this' value. It's default value is undefined.
