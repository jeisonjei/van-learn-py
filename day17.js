/** #-------------------------- #
    # ######### DAY 17 ######## #
    # ------------------------- # */

// Today is Day 17 and I guess you've noticed that we are slightly moving from Python to JavaScript. Why? JavaScript is a powerful language and very popular. Additionally to this, web development is based on JavaScript. Today we'll learn how to get html elements and change their style. Let's start with a simple example

// Let's learn how to create element and add it to the page. For example let's create a content element, header element and a button element. When we click the button, the header will change its text

// Clear any page in the browser. Hint: USE browser console and `document.documentElement.innerHTML = ''` statement. Then run this code in the browser console.

let contentElement = document.createElement("div")
contentElement.style.backgroundColor = "#f0f0f0"
contentElement.style.padding = "20px"
contentElement.style.height = "97.5vh"

let headerElement = document.createElement("h1")
headerElement.textContent = "Hello, World!"
headerElement.style.color = "#333"

document.body.append(contentElement)
contentElement.append(headerElement)

let buttonElement = document.createElement("button")
buttonElement.textContent = "Change Header"
buttonElement.style.marginTop = "10px"
buttonElement.style.padding = "10px 20px"
buttonElement.style.fontSize = "16px"
buttonElement.style.backgroundColor = "#007bff"
buttonElement.style.color = "#fff"
buttonElement.style.cursor = "pointer"

contentElement.append(buttonElement)

buttonElement.addEventListener('click', () => {
    headerElement.textContent = "You changed me!"
    headerElement.style.color = "#ff27ff"
})

// Previously we operated on html page through css classes. But here we are using JavaScript to create elements and change them. The bottom line is that you can do anything you want with html page using JavaScript

// Maybe you didn't notice but in this lesson we used function called `callback function`. Let's get closer to understand what it is and where it is used in programming.
// Here is our callback function: `() => { headerElement.textContent = "You changed me!"; headerElement.style.color = "#ff27ff"; }`. This function is called when the button is clicked. In simple words, callback function is functions that will be called later when something happens

// TASK0: Get button from the page and add rounded borders to it. Hint: Use `document.querySelector` function to get the button.
// TASK1: Add new event listener to the button listening 'mouseover' and 'mouseout' events. Change button color when mouse is over and change color back when mouse is out. Hint: Use `addEventListener` function to add new event listeners
// TASK2: Do anything funny that you want