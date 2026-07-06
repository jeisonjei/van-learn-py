/** #-------------------------- #
    # ######### DAY 18 ######## #
    # ------------------------- # */

// Today we'll learn arrow functions and objects. Then we'll learn how to deploy your website to the internet using Vercel - actually this is very simple and free

/**
 * ARROW FUNCTIONS
 */

// You shold remember how we used to create functions previously

function add(a, b) {
  return a + b;
}

// Now let's see how we can create the same function using arrow function syntax

let addArrow = (a, b) => {
  return a + b;
};

// Or even shorter. When you have only one return statement in the arrow function, you can omit the `return` keyword and the curly braces

let addArrowShort = (a, b) => a + b;

// What we just did? Actually we created a variable and assigned arrow function to it. Arrow functions are very useful in JavaScript because they are shorter and (maybe) more readable - `=>` sign maybe more noticable than `function` keyword. Additionally to this, arrow functions have different behavior when it comes to `this` keyword. But we will learn about it later

/**
 * OBJECTS
 */

let rocket = {
  model: "Soyuz-2",
  mass: "305000 kg",
  launch: () => {
    console.log("Rocket is launching...");
  },
};
 
let myObject = {}

// Here our object have 3 properties: `model`, `mass` and `launch`. Pay attention that `launch` property is a function simply assigned to variable. This is very common in JavaScript. You can create object with properties and methods (functions) and use them later. For example we can call `rocket.launch()` to launch the rocket

// In fact website deployment not an easy thing - this is separate big topic. But nowadays there are services
// that make this process very simple

// Let's create simple rocket launch website - you can see `day18_page.html` file and it's JS code will be
// written right here in `day18.js`

let selectorsObject = {selector1 : "#launch-button", selector2 : "div.countdown span#seconds",
  selector3 : "div.countdown", selector4 : "div.content"
}

function registerEventListeners() {
  let launchButton = document.querySelector(selectorsObject.selector1);
  launchButton.addEventListener("click", () => {
    launch()
  }); // Complete this
}

let launch = () => {
  console.log(`Rocket is launching...`);
  runCountdown();
}

function runCountdown() {
  setInterval(() => {
    let countdownElement = document.querySelector(selectorsObject.selector2);
    let currentValue = parseInt(countdownElement.textContent);
    countdownElement.textContent = currentValue - 1;
    console.log(`TextContent: ${countdownElement.textContent}`);
    console.log(`CurrentValue: ${currentValue}`);
    console.log(`Countdown: ${currentValue - 1}`);
    if (currentValue - 1 <= 0) {
      clearInterval();
      launchRocket();
    }
  }, 1000);
}

function launchRocket() {
  let countdownElement = document.querySelector(selectorsObject.selector3);
  countdownElement.textContent = "Start!";
  let rocketElement = document.querySelector(selectorsObject.selector4);
  let beautifulColors = [
    "#FF5A5F", // Sunset Coral
    "#FFB400", // Vibrant Amber
    "#00A896", // Deep Teal
    "#023047", // Ocean Navy
    "#8338EC", // Neon Purple
    "#3A0CA3", // Royal Indigo
    "#F72585", // Electric Pink
    "#4CC9F0", // Sky Blue
  ];
    setInterval(() => {
      rocketElement.style.backgroundColor = beautifulColors[Math.floor(Math.random() * beautifulColors.length)];
  }, 100);
}

registerEventListeners();

// TASK0: Complete the `registerEventListeners` function to add event listener to the launch button
// TASK1: Make `launch` function to be an arrow function
// TASK2: Create top level object keeping all css selectors this JS code uses and replace hardcoded selectors
// with the object properties
// TASK3: Create separate directory, copy `day18*` files, create github repository and deploy with Vercel