const fibonacci = function(num) {

    if (num < 0) return 'OOPS';    
    if (num == 1 || num == 2) return 1;

    const arr = [1, 1];

    for (let i = 2; i < num; i++) {

        arr[i] = arr[i-1] + arr[i-2];  
    }
    
    return arr.pop();
};

const fib = num => {
    if (num < 0) return 'OOPS';    
    if (num == 1 || num == 2) return 1;

    return fib(num - 1) + fib(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
