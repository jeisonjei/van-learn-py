/** #-------------------------- #
    # ######### DAY 19 ######## #
    # ------------------------- # */

/**
 * Today, on our DAY 19 challenge we'll learn about scopes (области видимости) in JavaScript
 */

// TOPIC: SCOPES (или по-русски Области Видимости)

/** Scopes in JavaScript defined mainly by squiqle brackets. If JavaScript is seeing some variable, 
 * it is looking for where this variable is defined. And JS goes from current scope upward and upwards, like this:
    Block Scope
        │
        ▼
    Function Scope
        │
        ▼
    Outer Function Scope (Внешняя область видимости)
        │
        ▼
    Module / Global Scope
        │
        ▼
    Not found
        │
        ▼
    ReferenceError
 * You can think about scopes as boxes. Let's see this in example
 */

let a = 1;

function changeA() {
    a = 2;
}

console.log(`a: ${a}`); // a: 2

// See? Function have access to `a` variable defined globally and can change it!

/**
 * Another example:
 */

function createOwnB() {
    let b = 2;
    console.log(`b: ${b}`);
}

createOwnB() // b: 2
console.log(`b: ${b}`); // error: `b` is not defined

/**
 * Here in function we defined 'function scope' using squiqle brackets and created it's own `b` variable, 
 * but this function scope variable don't seeing from the outer scope
 */

/**
 * One more example: `for of` cycle creates it's own scope - I know we didn't learn `for of` cycle yet, here
 * it is just for an example
 */

function doubleArrayItems(array) {
    let result = [];
    for (let item of array) {
        let doubled = item * 2;
        result.push(doubled);
    }
    console.log(`again a: ${a}`); // 1 - still seeing `a` from outer scope
    console.log(`doubled: ${doubled}`); // error: `doubled` is not defined
    return result;
}

// Let's run this function:

let arr = [1,2,3,4,5] 
let result = doubleArrayItems(arr);

// I think you caught the concept

/**
 * TASK0: Create `day19-1.js` file and `day19.html` file, then define in `day19-1.js` file variable in global scope.
 * Then create function and print the globally defined variable. Try to redefine this global function from 
 * the function. What will happen with your variable then? Run html file. Don't forget to link `day19-1.js` file
 * using `<script>` tag
 */
/**
 * TASK1: Look carefully to `doubleArrayItems` function. How much SCOPES do you see there? Name them
 */






