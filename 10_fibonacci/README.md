# Exercise 10 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc. => n = (n-1) + (n-2) n = 1 (1 - 1) + (1 - 2) = 0

```javascript
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6) // returns 8
```

const arr = [1, 1];

function fibonacci(num) {
    
    if (num === 1 || num == 2) return 1;

    for (let i = 2; i <= 4; i++) {
    arr[i] = arr[i-1] + arr[i-2]; arr[2] = arr[1] + arr[0] => arr[2] = 1 + 1= 2; arr[3] = arr[2] + arr[1] 
}