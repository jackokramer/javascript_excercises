/*Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
*/

function sigMa(start, end, nums){
    let sum = 0;
    for(let x = start; x<= end; x++){
        sum += nums[x]
    }
    return sum
}

console.log(sigMa(1,29,2))


/**
 * Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
 */

 // Recursive version
 function factorial(num){
     //less than zero reject it
    if(num<0){
        return -1
        //if the number is 0 its factorial is 1
    } else if(num==0){
        return 1
    } else {
        return (num* factorial(num-1));
    }
 }

 console.log(factorial(8))
 //WHile Loop version
function factorialWhile(num){
    let result = num;
    if(num == 0 || num == 1){
        return 1
    }
    while(num>1){
    num--;
    result *=num;
    }
    return result
}

console.log(factorialWhile(5))

//for loop versions
function factorialFor(num){
    if(num == 0 || num ==1){
        return 1
    }
    for(let x = num-1; x>=1; x--){
        num *=x;
    }
    return num
}

console.log(factorialFor(9))

/*
Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
*/

//recursive call
function fibNacci(num) {
    if(num<=1) return 1
    return fibNacci(num-1) + fibNacci(num-2)
}

console.log(fibNacci(5))

// regular call

function fibNaccis(num) {
    let a = 1;
    let b =0;
    let temp;
    while(num>= 0){
        temp = a;
        a = a+b;
        b = temp;
        num --;
    }
    return b;
}

//memoziation
/**
 * 
 * Memoization
Finally, and following the recursive approach we will use memoization to improve our efficiency, but first of all, what’s memoization? as Wikipedia says:
Is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls.
What does that means and why should we take care about that in our implementation? Basically, if we just store the value of each index in a hash, we will avoid the computational time of that value for the next N times.
This change will increase the space complexity of our new algorithm to O(n) but will dramatically decrease the time complexity to 2N which will resolve to linear time since 2 is a constant.
(https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e) 
 */

 function fibonacciMemo(num, memos){
     memos = memos || {};

     if(memo[num]) return memo[num];
     if(num<=1) return 1;
     return memo[num] == fibonacciMemo(num-1, memo) + fibonacciMemo(num-2, memo)
 }

//Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondToLast(arr){
    if(arr<=1){
        return null
    }
    for(let x = 0; x<arr.length; x++){
        return arr.length-2
    }
}

console.log(secondToLast([2,3,'liam', 4]))

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nthToLast(nums, index){
    return nums.filter((value, x)=> (x+1) % index !== 0);
}