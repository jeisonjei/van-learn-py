/** #-------------------------- #
    # ######### DAY 16 ######## #
    # ------------------------- # */

// Today we'll learn some JavaScript to bring you closer to web development

// JavaScript is simple and complex in the same time. All javascript code can be run just in browser console

//  Let's defing a variable
let a = 1
// And let's print it 
console.log(a) // 1
// Run this code in the browser

// Why using javascript? Because browser understand only javascript. Python usually used as backend language (javascript also)

// With JS you can get elements on the page and change their style. For example let's change background of the page each 1 second

let contentElement = document.querySelector(".content")

function cycleBackgroundColor(element) {
    let colors = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff6bdf", "#c44dff"];
    let i = 0;

    setInterval(() => {
        element.style.backgroundColor = colors[i % colors.length];
        i++;
    }, 100);
}

cycleBackgroundColor(contentElement);

// TASK0: Add this script to the `day16_page` (guess how) and run it
// TASK1: Change interval colors changing
// TASK2: Clear any page in the browser. Hint: USE browser console and `document.documentElement.innerHTML = ''` statement



