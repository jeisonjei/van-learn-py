/**********************
 ********* DAY35 ******
 **********************/

/**
 * Today we'll learn how to measure your code speed using `performance` object.
 * For now we need only one its method called `now`. Here how you usually use it
 */

let startTime = performance.now();

/**
 * Let's create an array with one million numbers and measure code execution time
 */

let oneMillionNumbersArray = [];
const SIZE = 1000000; // Why we're using `const` keyword here?

let start = performance.now();

for(i=0;i<SIZE;i++){
    oneMillionNumbersArray.push(i);
}

let end = performance.now();

let diff = end - start; // Difference between end and start is performance time

console.log(`${diff} ms`);

/**
 * TASK0: Try to increase size to 10 millions. Then to 100 millions. Watch how creating such big arrays 
 * takes more and more time to complete operation
 */

/**
 * TASK1: Instead of numbers create an one million array of simple `{n: i}` objects in a similar way. Compare execution time
 * with a task of creating an array of one million numbers. Why do you think this operation is slower? Then try with more complex object. Watch performance again.
 */