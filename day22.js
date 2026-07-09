/** #-------------------------- #
    # ######### DAY 22 ######## #
    # ------------------------- # */

/**
 * Today we'll learn couple of builtin JS time functions
 */

/**
 * `Settimeout` is useful function delaying execution. It takes 2 arguments: callback function and delay time
 * Run this in the browser's console
 */

setTimeout(() => {
    console.log(`** Text printed with 3000 ms delay`);
}, 3000);

/**
 * Next useful function is `setInterval`
*/

let a = [1,2,3,4,5];
let index = 0;

setInterval(() => {
    let n = a[index];
    console.log(`** n:`, n);
    index++;
}, 1000);

/**
 * And last thing - promises. Promises are things will be executed later, not instantly. That's because 
 * they are named `promises`. We'll just touch them shortly
 */

/**
 * Here is how to create new Promise. Pay attention that `Promise` is JavaScript class taking interesting thing
 * as parameters: it takes one callback function with 2 arguments `resolve` and `reject` which are functions too in their turn.
 * Promise itself executes immediatelly, but callback in `then` function executes only if promise is resolved with `resolve` function
 */

let promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log(1);
        resolve(); // Here we pointing out that promise is resolved and first `then` callback in the chain can be executed
    }, 1000);
});

promise.then(()=>console.log(2))

// TASK0: create something using `setTimeout` function
// TASK1: create something repeatable with `setInterval` function
// TASK2: create simlest Promise and execute something after this promise with `then` function