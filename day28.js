/** #-------------------------- #
    # ######### DAY 28 ######## #
    # ------------------------- # */

/**
 * Well, 27 days .... I hope you're not tired and still involved in our beginner programming course.
 * Today we'll look more closely on callback functions
 */

/**
 * By the way - since everything in JS is object, function is object too. You can assign function to 
 * a variable and pass function to another function simply as argument
 */

/**
 * Let's create some main function to operate on arrays. This function takes two arguments: array and callback function.
 * By the way here you can see JS mechanism named `closure` (захват переменной). Closure (захват переменной) is when function remembers it's environment variables in it's execution time
 */

function doAnythingWithArray(array, callback) {
    var result = callback(array); // when `callback` remembering `array` in it's execution time - it is closure (захват переменной)
    return result;
}

/**
 * Now let's create full chain with creating argument function and executing the main 
 */

function myCallbackV1 (array) {
    var result = array.map(i=>i*2);
    return result;
}

function myCallbackV2 (array) {
    var result = array.map(i=>i*3);
    return result;
}

/** 
 * Now we'll execute the main function with `myCallbackV1` as argument
 */

var arr = [1,2,3,4,5];

var resultV1 = doAnythingWithArray(arr, myCallbackV1); // [2, 4, 6, 8, 10]

var resultV2 = doAnythingWithArray(arr, myCallbackV2); // [3, 6, 9, 12, 15]

/**
 * Interesting, right? Here we're passing function as argument and getting different results depending on which function we're passing.
 * We can rewrite the `doAnythingWithArray` with using arrow callbacks as we did earlier
 */

var resultV11 = doAnythingWithArray(arr, (array)=>{
    var result = array.map(i=>i*2);
    return result;
});

var resultV21 = doAnythingWithArray(arr, (array)=>{
    var result = array.map(i=>i*3);
    return result;
});

/**
 * Let's task some more about 'closure' mechanism. By it's sense it is simple - when function remembering it's enviroment variables
 * in execution time we call this `closure`. But in russian the word 'closure' not very good describes this mechanism sense, 
 * so in russian it's better to call this mechanism as "Захват переменной" or "Захват окружения". Remember also that usually
 * in JS resourses this mechanism is called "Замыкание"
 */

/**
 * TASK0: Explain how you understand "Захват переменной"
 */

/**
 * TASK1: Create simpliest closure. It is really very simple - try to guess
 */

/**
 * TASK2: Create outer function and 2 inner callback functions which you'll pass to the outer function. Make up what your functions
 * will do by yourself
 */