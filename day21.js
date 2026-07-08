/** #-------------------------- #
    # ######### DAY 21 ######## #
    # ------------------------- # */

/**
 * So, you're lerning programming 20 days already and making good progress! Very good!
 * You already know some Python and JavaScript basics. In JavaScript you know 'functions', 'arrow functions',
 * 'callbacks', 'objects' and (I hope) 'SCOPES'.
 * Today we'll shortly learn JavaScript cycles and 'if else' expressions
 * 
 */

/**
 * Remember: 
 * `for in` cycle for OBJECTS,
 * `for of` cycle for ARRAYS
 */

/**
 * Remember also:
 * `for` cycle is faster than `for of` about 10-15%
 */

/**
 * And `if else` cycle works similarly as in Python language.
 * Let's show all this in examples
 */

/**
 * Let's create an object. You already know about `keys` and `values` in objects. 
 * I'll just add that sometimes `keys` are called `object properties`
 */

let volga = {
    model: 'Volga',
    speed: 120,
    acceleration: '20 seconds to 100 km/h'
}

/**
 * Now let's go through this object values and print them
 */

for (const key in volga) {
    if (!Object.hasOwn(volga, key)) continue; // This line is just guard, We'll learn this expression by the way
    
    const volgaProperty = volga[key];
    
    console.log(`🔥 element:`, volgaProperty);
}

/**
 * Now let's create an array and show `for of` and `for` cycles
 */

let computerParts = [
    'processor',
    'cooler fan',
    'motherboard',
    'ram', // RAM (Random-Access Memory) is your computer's short-term memory
    'display',
    'keyboard',
    'hard drive' // Your computer's long-term memory
]

/**
 * Let's do the same thing with this array using `for of` and then `for` cycles
 */

for (const part of computerParts) {
    console.log(`🔥 part:`, part);
}

/**
 * This was simple, right? Now let's try `for` cycle. `for` cycle is faster than `for of` cycle, but not
 * often used in modern web development.
 * Here you see `computerParts.length` expression and you can guess that computerParts array instance have `length` property
 */

for (let i = 0; i < computerParts.length; i++) {
    const part = computerParts[i];
    
    console.log(`🔥 part:`, part);
}

/**
 * And last thing on today - `if else` condition expression
 */

if (computerParts.includes('processor')) {
    console.log(`zzz-zzz-zzz`);
}
else {
    console.log(`Without processor I'm not a computer strictly saying`)
}

/**
 * That's it for today
 */

/**
 * TASK0: create object and print it's properties using `for in` cycle
 */

/**
 * TASK1: create an array and print it's members using `for of` cycle and `for` cycle
 */

/**
 * TASK2: create function taking number as parameter and print this number if it's value more than PI number
 * Use `Math` builtin JavaScript module to get `PI` number.
 * Then execute this function
 */