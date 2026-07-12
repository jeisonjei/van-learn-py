/** #-------------------------- #
    # ######### DAY 23 ######## #
    # ------------------------- # */

/**
 * Today we'll talk about programming world in general and will begin to learn NodeJS (backend JavaScript environment)
 *
 * In our course we're mostly learning core things and skipping boring topics like learning thousands of builtin properties and methods
 * along with learning thousands of existing libraries and their properties and methods in their turn.
 * This course is for beginners (you), so you'll find and learn with practice what you really need.
 * There are maybe million programmers around the world creating something they suppose is useful. You
 * don't need to know everything. What you do need is to understand how IT (information technologies) world is living and functioning
 * and be able to choose tools for your purposes. My specialization is web development, so here
 * I'm trying to teach about its basics in such a way that you'll be able to create
 * website's backend, frontend and deploy it for people.
 * Again, there are billions and maybe trillions of code lines around the world. One man just can't
 * know all of this and it is even not worth to try if you don't want to overheat your head. Choose
 * your tools and know them well - that's the way to become a serious engineer.
 * More of that - in modern world to be just a programmer is not enough anymore. You need to
 * know some discipline and APPLY programming to it to create useful things. There are a lot of things
 * in engineering disciplines that need to be done (just for example).
 *
 * And shortly about AI: use it cleverly. AI is new thing and now it is already known
 * that heavy usage of AI degrades programming skills, creates dependency on AI usage in your projects.
 * By the way this viewpoint was strongly articulated in late 2024 by John Carmack (a legendary programmer known for Doom and Quake)
 * and echoed by many senior engineers.
 * Strictly saying modern day's AI is not AI (Artificial Intelligence). The better but not the only way to call it is "templates generator"
 */

/**
 * Now let's create simple NodeJS example.
 * We'll import `fs` module giving access to OS file system, then read our pre-created `day23-config.json` file
 * with R22 substance properties
 */

// Module import using `require` keyword. This import keyword is differs from browser side JavaScript `import` keyword
const fs = require("fs");
const list = fs.readdirSync('.');
console.log(list);

const path = "./day23-config.json";

fs.readFile(path, (err, data) => {
  if (err) {
    console.log("error happened!");
  } else {
    let result = JSON.parse(data);

    console.log(`************`);

    for (const key in result) {
      const value = result[key];

      console.log(`${key}: ${value}`);
    }
  }
});

/**
 * Next - let's list all builtin modules we can use with NodeJS
 */

const module = require("module");
console.log(module.builtinModules);

/**
 * You can see all builtin modules purposes on this page `https://www.w3schools.com/nodejs/ref_modules.asp`
 */

/**
 * TASK0: list all files in our lessons directory using nodejs.
 * Hints:
 * Firstly import `fs` module, then use it's `readdirSync` method with `.` argument which pointing out on current directory
 */

/**
 * TASK1: import `http` nodejs module, then run this program and create requiest to the server from the browser
 */

// TODO: import `http` module ...
const server = http.createServer();

server.addListener("request", (incomingMessage, response)=>{
  console.log(incomingMessage);
  response.statusCode = 200;
  response.end("Hello World!");
});

server.listen(3000, 'localhost');

/**
 * TASK2: Create an array and print all it's members using `for of` loop. Remember that now we're working with NodeJS, not with Browser JavaScript
 */

