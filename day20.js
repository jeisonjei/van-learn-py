/** #-------------------------- #
    # ######### DAY 20 ######## #
    # ------------------------- # */

/**
 * Today we'll learn how to add or remove elements from the page using JavaScript, change
 * elements' style and couple of useful builin functions
 */

/**
 * Run this code in the browser line by line
 */

// Remove all inner content
document.documentElement.innerHTML = ''
// Browsers add default styles to `body` element. Let's remove paddings and margins
document.body.style.margin = 0
document.body.style.padding = 0
// Here let's call `createElement` function of `document` object and assign the result to the `content` variable
let content = document.createElement('div')
// Herrrre we're setting body's height to 100 % of the your screen
document.body.style.height = '100vh'
// Here we assign content element height to 100% of it's parent element which is intended to be body
content.style.height = '100%'
// Set content element background color
content.style.backgroundColor = 'rgb(125,255,125)'
// Add content element to the body. Here you'll see real changes
document.body.append(content)
// Add our futher block location using div
let animalTogglerDiv = document.createElement('div')
animalTogglerDiv.style.backgroundColor = '#FCEFF9'
content.append(animalTogglerDiv)
animalTogglerDiv.style.height = '200px'
animalTogglerDiv.style.width = '50%'
content.style.display = 'flex'
content.style.justifyContent = 'center'
content.style.alignItems = 'center'
animalTogglerDiv.style.borderRadius = '10px'
let animalPlaceholder = document.createElement('div')
animalTogglerDiv.append(animalPlaceholder);


/**
 * Let's continue to create our funny page creating object with 6 your favorite animals. Do you remember how
 * to create objects in JavaScript? This is TASK0
 */

// let animalsObject = ....

/**
 * TASK1 is to create function cycling through your animals. Here you'll use outer scoped `currentIndex` and `animalsValues`
 * already defined.
 */
let currentIndex = 0;
let animalsValues = Object.values(animals);
// let toggleAnimals= ... use arrow function

/**
 * TASK2 is to create button, append it to the `animalTogglerDiv` element 
 * and add 'click' event listener to it with `toggleAnimals` function as callback argument
 */


