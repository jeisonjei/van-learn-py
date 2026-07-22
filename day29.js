/** #-------------------------- #
    # ######### DAY 29 ######## #
    # ------------------------- # */

/**
 * Today we'll look on closures again from another angle
 */

/**
 * Let's demonstrate closures more on unusual example which you'll rarely see in real web development.
 * We'll create function returning another function and them execute this inner function
 */

function fnA(){
    var a = 1;

    return function fnB() { // <-- inner function. It remembers `var a` when this function defined (here)
        console.log(a);
    }
}

/**
 * And now let's execute this inner function. But how to do this?
 * If we'll write something like this
 */

fnA()

/**
 * This will not work since `fnA` only returning a function without its execution. Let's try to log
 * result of `fnA()`
 */

console.log(fnA()) // [Function (anonymous)]

/**
 * To really execute inner function you need to use expression you didn't see before
 */

fnA()() // 1

/**
 * See? First we call fnA(), which returns another function. Then the second () immediately calls that returned function.
 * You'll see `1` in console. So `fnB` remembers `var a` defined in it's outer scope even if this `fnB` is executed after `fnA` was executed.
 * For an analogy you can imagine that function put everything it needs in its backpack when defined.
 */

/**
 * TASK 0: Rewrite `fnA()()` in more familiar way keeping result `fnA` returning in variable and only then execute this variable
 */