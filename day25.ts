/** #-------------------------- #
    # ######### DAY 25 ######## #
    # ------------------------- # */

/**
 * Today we'll learn such important topic as typing (Типизация). JavaScript language itself dynamically typed 
 * which normally means we should not (and actually can't) specify types for our variables.
 * But in complex projects typing is often necessary because there are a lot of different entities (сущностей)
 */

/**
 * As you can see this file has `.ts` extension, not `.js`. This means that we'll learn some TypeScript language - 
 * JavaScript brother but typed (Типизированный)
 */

/**
 * Let's create some variables. I think you'll catch main though easily here
 */
let n: number = 0;
let a: string = "myString";
let b: boolean = false;

/**
 * Now let's go further and create type for our object
 */

type Car = {
    model: string;
    speed: number;
    isRunning: boolean;
}

/**
 * You see? this is not object, this is object type. Further object creation of such type will be checked by compiler
 * on required properties we just defined. Let's create `Car` object without properties. Hover on red squiggled `car` variable and see warnings
 */

let car1: Car = {
    model : "67rizzsigma",
    speed : 67,
    isRunning : true
}

/**
 * Now we'll define full `car` object
 */

let car2: Car = {
    model: "LADA",
    speed: 200,
    isRunning: true
}

/**
 * So, to compile typescript to javascript you use `tsc` command having `typescript` package installed before `npm install -g typescript`.
 * Compilation here means that typescript compiler will translate your typescript file to javascript which you can as usual 
 * link to your html file
 */

/**
 * Maybe you're interested - do you really need to know typing and TypeScript. Let's say this: there is pros and cons and right now
 * you just should know that strongly typed languages exists and how to operate with them.
 */

/**
 * TASK0: Install `typescript` package and compile your `day25-1.ts` file into javascript
 */

/**
 * TASK1: Create new `day25-1.ts` file, then create your own type there and then declare object of this type
 */

/**
 * TASK2: Create `day25.html` file and add standard `day25.js` file in `script` tag
*/

/**
 * TASK3: In your `day25-1.ts` file display your object properties on the html page using minimal styling or no styling at all
 */

/**
 * TASK4: Compile your `day25-1.ts` file using `tsc` command into javascript and run your html file
 */






