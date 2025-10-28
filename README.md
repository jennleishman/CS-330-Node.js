# CS-330-Node.js

## History

Node.js is an open-source Javascript runtime environment, executing JavaScript code outside of a web browser. It was originally written in 2009 by Ryan Dahl, as he was frustrated with Apache HTTP Server's limitations handling lots and lots of concurrent connections. Furthermore, in 2010, a package manager (npm) was introduced for the Node.js environment. Node.js was written to run on Google's V8 JavaScript engine, using an event loop and a basic I/O API structure. It's main uses are to design scalable web service applications and web servers, as well as real-time applications, APIs, and command-line tools.  

In 2024, Node.js announced their official mascot, Rocket Turtle, in an X post.

<img width="300" height="168.75" alt="image" src="https://github.com/user-attachments/assets/94322c3b-7698-4972-88c6-2d5f0fcfac3e" />

## Introduction: Hello, world!

First, to install Node.js, you can find the download package [here](https://nodejs.org/en/download/current) directly from nodejs.org. Node.js refers to the environment itself that is used to run JavaScript code, however, you can use either a text file or any favorite code editor to write your programs to be run. I'm familiar with **Visual Studio Code**, and that is what I will be using throughout this tutorial.

To run your programs in Node.js, you will also need to utilize your device's **command line**. You can run the following lines in the command line once you have installed Node.js and the npm pacakage maanger to make sure they have downloaded correctly.

```
node --version
npm --verion
```

#### Displaying in terminal

There are several different methods I want to explore writing "Hello, world!" code. The first is the most simple line of JavaScript code, using the argument `console.log`, which will display the given text to the command line. 

```
// Display hello world message to the command line  
console.log("Hello, world!");
```

Some basic JavaScript syntax: similar to other languages, JS does not distinguish between single or double quotes for strings, as long as you are consistent. JS also requires a semicolon at the end of each statement. To create single line comments, two forward slashes `//` can be used; to comment out blocks of code, `/* ~code~ */` can be used.

I saved my program as hello_world.js, though the name nor location don't particularly matter as long as you know what and where it is.

Then, in my command line terminal, I run:

```
node hello_world.js
```
and this displays "Hello, world!" right in my terminal.

#### Displaying on server

What's fun about using Node.js to run JavaScript is that you can use it to create and run code on a web server. Let's take a look at this code:

```
const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.write('Hello, World!');
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

This method is using Node.js' **http module**, and `createServer` establishes a new HTTP server and returns it. `hostname` and `port` sets where the server is listening. The keyword `const` essentially means that these elements cannot be reassigned later on in our program. In our `createServer()` function, `req` and `res` are essentially our request and response objects. Status code is set to 200 to indicate a successful response, and then we specify what we want the server to display using `res.write()`. Finally, the `res.end()` statement indicates where the server can stop listening.

The line of code that actually configures the server to listen to our request is `server.listen`, where we then specify both our port and hostname, and in my example, we also display these values to the terminal for convenience.

A complicated Hello, world!, right? Why is it so much harder than method 1?

This time, when you save and run your JS file in the command line just like we did for the first method, it should display information about where the server is running. This means that you have successfully launched your first Node.js web server! 

Now, open a browser of your choice, and go to 

```
http://localhost:3000
```

3000 is the port that we declared in our code; you can run the server on other ports as well. However, this should display your Hello, world! message in your broswer!!

This is what makes Node.js so unique and useful as a JavaScript environment, and throughout this tutorial we will explore this more. 

## Data Types in JS  

Javscript has many similar primitive data types to whatever programming languages you may alreday be familiar with. I'll do a quick run-through of what these are, and then actually show you some code that will teach you the different ways to delcare them. Before we begin, I would like to point out that JS is an **implicitly typed** language, meaning that when we declare variables, we do not have to declare what variable type they are.

#### Strings:  
Strings are, what you'd expect, any combinations of characters enclosed in either single or double quotations. In JS, there is not a difference between which quotation marks you use, however, it's recommended and more professional if you keep consistency throughout a program. 
```
let name = "Jenn";
```
Some basic string methods that are built into JS. These include a `string.length;` method to return the length of a string, `string.slice(x, y);` to slice out a portion of a string from index x to index y, `string.toUpperCase();` and `string.toLowerCase();` to adjust the capitalization of a string, and `string.trim();` to remove whitespace from either side of a string. These are just a few examples of things that can be done with strings!

#### Numbers:  
Many langauges have some variation of integers (whole numbers) and floats (decimal numbers), however, JS just has one numerical data type: numbers! 
```
let num = 6;
```

If, for example, you take in user input stored in a variable x and they entered the string "5", you could convert it to a Number type by:

```
x = Number(x);
```
The numerical form of 5 then would be stored in the variable x. 

#### Booleans:
Booleans are variables that hold logical values (true or false).
```
let bool = true;
```

#### Arrays:
Arrays are ways to store lists in JS. Arrays can hold mixed variable types, including strings, numbers, booleans, and even objects or functions. 
```
let arr = [9, "hello, world!", { age: 21 }, false];
```
There are several methods to access individual values from an array. The most simple one is just basic indexing (Arrays in JS start indexing at 0.)
```
let colors = ["red", "green", "pink", "teal"];
let color1 = colors[0]; // red
```

Arrays in javascript also have a `forEach()` method to iterate through the entire list (even though a typical for loop can also be used). To use the forEach() method, you typically pair it with a function (so I'm letting you get a sneak peak on what those look like!).
```
function myFunction(item) {
    console.log(item);
}

let fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
// apple
// orange
// cherry
```

#### Objects:
In Javascript, dictionary-like key-value pairs are actually stored in objects. There are many uses and functions of objects, however, let's just focus on storing/accessing key-value pairs right now. Note that objects should always be created with the `const` declaration: I'll cover this a little further down.

```
// create an object with key-value pairs
const pet = {type:"dog", name:"Bolt"};

// add an entry to the object
pet.age = 4;

// retrieve values from the object
console.log(pet.name);

// different syntax, same use:
console.log(pet["age"]);
```  
### Mixed-type operations

Depending on what programming language you are familiar with, it may or may not let you add (or perform other operations) on equations containing multiple variable types (typically, this would be numbers (or integers/floats) and strings. It is important to know how a langauge interacts in these instances for many reasons, one primary and simple one being user input. Oftentimes, when you ask a user for a numerical value, their response will be stored in a string, which is unfortunate if you wanted to perform any numerical operations on it. 

In Javascript, you will not get an error if you try to add, subtract, multiply, or divide a Number data type with a String data type. However, the only operation that will actually "work" is addition. Let's take a look at this example:
```
function numString(n, s){
    console.log(n + " + " + s + " = " + n + s);
    let add = n + s;
    console.log(n + " + " + s + " is a  " + typeof add);
}
numString(16, "jenn");

// 16 + jenn = 16jenn
// 16 + jenn is a  string
```
When you add a Number and a String in JS, it ends up concatenating the two values, with the resulting data type being a string. This may not be the result that you wanted, however, it does return a valid result, `16jenn`. This is because Javascript is **weakly typed**.

Let's try another arithmetic operation: multiplication. The code will look very similar to the code for addition of mixed-type variables, but pay attention to the commented out results.
```
function numString(n, s){
    console.log(n + " * " + s + " = " + n * s);
    let mult = n * s;
    console.log(n + " * " + s + " is a  " + typeof add);
}
numString(16, "jenn");
// 16 * jenn = NaN
// 16 * jenn is a number
```
As you can see, when you try to multiply a Number and a String, the result is just `NaN`, meaning Not a Number, which is actaully a Number data type. The results will look exactly the same if you attempt to subtract or divide a number and a string as well. Even though this doesn't produce an error in your code, it is not necessarily helpful or a successful operation.

### Declaring variables in JS
In Javascript, there are three main ways to decalre variables, and they allow variables to be accessed and modified in different ways. We've seen two used in my example code so far, `let` and `const`, but now we get to delve into what those actually mean.

#### Var:
```
var num = 20;
var num = 21; // redeclaration
```
Using `var` declares a variable within a global scope and allows re-declaration. This means that when you declare a variable using `var`, you can redeclare it even in the same scope as it was initially declared in. 

#### Let:
```
let string = "twenty";
string = "twenty-one"; // redefinition
string = 21; // redefinition as a different type
```
With `let`, you can redfine a variable, however, it can't be redeclared. Also important to note is that declaring a variable with `let` makes it only accessible in the code block it is present in. If you declare a variable with `let` inside of a function, that variable can only be used in that function. If you declare a  `let` variable outside of a block, they will become global variables.

Also important to note, with `let` (as was the case with `var`), because Javascript is **dynamically typed**, a variable can be redefined as a different variable type. Even if a variable is initially declared as a string value, if you want to later store a number in it, that is completely legal in JS. 

In theory, `var` and `let` can be used similarly, however, it is best practice to default to using `let` when declaring a variable you want to be able to redefine, as defaulting to using `var`, unless you specifically need a global scoped variable, can oftentimes cause unwanted issues.

#### Const:
```
const float = 26.4;
// float = 27.0; <- will produce an error
// var float = 27.0 <- will also produce an error
```
When you declare a variable with `const`, it cannot be redefined or redelcared. A variable that is a `const` variable is usable in the block it is declared in, however, like `let` variables, if you declare a  `const` variable outside of a block, they will become global variables.

As mentioned in discussion of JS objects, `const` should always be used for object declaration. 

### Variable Naming Conventions & Final Thoughts on Data Types

Javascript does not have super strict naming conventions, and typical programming naming conventions you may have followed learning previous langauges likely still apply.

Unlike some langauges, Javascript does allow variable names to begin with a capital letter, though this is unconvention. They are also allowed to begin with an underscore or dollar sign ($), however, they cannot begin with numbers. Both snake_case and camelCase are common naming conventions, and as you'll see throughout this tutorial, I personally prefer camelCase. 

You can also find a complete list of JS reserve words [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words). 

As discussed previously, JS is implicitly typed. Because of this, a variable is bound to it's type at runtime, and a variable is also bound to it's address at runtime because of that's when the initialization occurs. Javascript does not have exposed addresses like C++ and similar languages do. Furthermore, operators are bound to their operation at compile time, which is when the operator precedence is established.

Javascript has a lot of freedom when it comes to variables and variable delcaration, due to the 3 different ways to declare a variable with different purposes. Different built-in methods provide useful ways to manipulate different data types, as demonstrated in my example code file attatched in the repository `var_testing.js`.

## Conditionals in JS

### Quick reminder: Booleans!

As mentioned previoiusly in the tutorial, booleans in Javascript are represented by `true` and `false`, in all lowercase. The number `0` also equates to `false`, and any number greater than zero to `true`. They occur most commonly when using if/else statements and loop statements, so keep them in your mind!

### If/Else Statements

In Javascript, if statements can be combined with optional else if or else statements to run through differing conditions. Here is an example of a simple if/else if/else statement:
```
let x = 3;
let result;

if (x == 0) {
    result = "x = 0";
} else if (x > 0) {
    result = "x > 0";
} else {
    result = "x < 0";
}
console.log(result);
```
The first thing to pay attention to is the declaration of our variable, `result`. Because we declared it outside of the if/else if/else statement, we are then able to adjust the value depending on the condition, and also access it outside of the statement. Try not declaring result until you enter the conditions, and see what happens!

Something else to note: formatting! In JS, if statements that only have one line contained in them are considered gramatically correct to just use indentation and not curly braces. However, using braces has an added benefit: avoiding the **dangling else** issue. This occurs when there are nested if statements, and it is unclear which `if` the `else` belongs to. This could look like:

```
if (x > 0)
  if (x > 10)
    console.log("x is big!");
else
    console.log("x is small");
```
Even though the indentation suggests that the else statement belongs to the first if statement, `if (x > 0)`, it actually will attatch itself to the last if statement that doesn't already have an else, which would be `if (x > 10)`. One of the best ways to avoid the dangling else issue is to just use braces. These will clarify which statements belong where.

### Multi-condition if/else statements

When writing if/else statements, we can also give use multiple conditions that need to be met, using the `&&` logical operator, for and, or using the `||` logical operator, for or. Take this example:
```
let age = 20
if (age < 18) {
    console.log("You are less than 18");
} else if (age >= 18 && age < 21) {
    console.log("You are between 18 and 21");
} else {
    console.log("You are older than 21");
}
```
Here, `&&` is used to set both an upper and lower boundary on the else if statement.

### Short-circuit evaluation

Short circuiting occurs in JS when the second part of a multi-condition statement gets ignored due to the conditions met (or not met) by the first part. 

#### Short-circuting with ||

Let's look at an example of short circuiting using an or, `||` statement.
```
let value = true || console.log("Irrelevant");
console.log(value);
// true
```
Here, because `true` is evaluated first, the second half of the statement gets looked over, and does not get printed. Because the first condition was met, there is no need to continue reading, and Javascript will just jump to the next line.

#### Short-circuiting with &&

Let's look at an example of short circuiting using an and, `&&` statement.
```
if (false && console.log("testing!")){
    console.log("Irrelevant")
}
// nothing gets printed
```
Here, because our conditional and statement begins with the boolean `false`, the entire statement inherently cannot be true. Because of this, the code will short-circuit and exit the if statement without reading the rest of the line and printing the testing statement.

### Conditional (ternary) operator

Besides the if/else if/else statements that we have covered so far, Java has a unique feature that can be an alternative for if/else statements, and allows for conditional chaining as well as implementation with functions. Here is a very simple example to get used to the syntax:
```
let cost = 10;
let price = cost >= 25 ? "Expensive" : "Cheap";
console.log(price); // Cheap
```
This code block checks a cost of 10, and says that if it is greater or equal to 25, to let price = "Expensive", otherwise, let price = "Cheap". The same work can be done with an if/else statement, however, this is an interesing conditional to note.

### Switch Statements

Many langauges, including Javascript, implement switch statements, which work similar again to if/else statements, but are best used when there are many conditions that you want to check. Here is an example of a code block using a switch statement:
```
let favColor = "purple";

switch (favColor) {
    case "red":
        console.log("My favorite color is red");
        break;
    case "orange":
        console.log("My favorite color is orange");
        break;
    case "yellow":
        console.log("My favorite color is yellow");
        break;
    case "green":
        console.log("My favorite color is green");
        break;
    case "blue":
        console.log("My favorite color is blue");
        break;
    case "purple":
        console.log("My favorite color is purple");
        break;
    case "pink":
        console.log("My favorite color is pink");
        break;
    default:
        console.log("My favorite color is not listed");
        break;
}
```
Javascript uses the `break` condition in switch statements, and the `continue` condition can also be used instead of breaking if you want to pass by a statement to continue checking. 

### While loops

The two primary loop structures in JS are while loops and for loops, and while both can be used for differing purposes, the primary difference is that for loops self-increment, and while loops do not.

#### Single-condition while loop

Take an example of a simple, single-condition while loop:
```
let i = 0 
let count;
while (i < 5) {
    count = i;
    i++; // IMPORTANT
}
console.log(count); // 4
```
Here, the while loops increments the loop-control-variable, i, by 1 until i < 5.  This means that the coutn printed out at the end will equal 4. This is a very basic structure while loop.

#### Do-while loops

Do-while loops are another form of while loop, with the primary use being if you want to guarantee the loop is entered at least once, no matter the condition. Here is an example that mimics the same function as the previous single-condition while loop. 
```
i = 0
do {
    count = i;
    i++;
}
while (i < 5);
console.log(count);
```
Take a look at how they differ, and use the single-conditon while loop as an example to understand the function of this do-while loop. 

#### Multi-condition while loop

Here is an example of a while loop that has multiple conditions:
```
let i = 0
var keepGoing = true;
while (i < 10 && keepGoing == true) {
    console.log("hi!");
    if (i == 3) {
        keepGoing = false;
    } 
    i++;
}
// hi!
// hi!
// hi!
// hi!
```
It is common for while loops to have multiple conditions, one being a condition that allows a user to leave a while loop early if they are done. Oftentimes, this is implemented with asking for user input while inside the while loop, but for simplicity sake, I manually set keepGoing in this code block to end this loop at i == 3. The loop will end even though i is still less than 10.

### For loops

To introduce simple for loops, let's look at this one:
```
let count = 0;
for (let i = 0; i < 5; i++) {
    count++;
}
console.log(count); // 5
```
This loop will continue until i < 5, and automatically increments i by 1 (given the `i++` notation), each iteration through the loop. Unlike while loops, for loops allow for this automatci incrementation. 

#### For in loops

Another common use of for loops is to loop through either an array or an object to print out all of it's contents. This can be seen here:
```
const person = {name: "Jenn", age: 20};
for (let key in person) {
    console.log(key+": "+person[key]);
}
// name: Jenn
// age: 20
```
This loop creates a variable `key`, to evaluate each key-value pair in the object and then print out both said key and the corresponding value. For in loops are one of the many reasons that for loops are unique from while loops.

### Conditionals: Final thoughts

Conditionals are a very fundamental part of coding in Javascript, and though some aspects may seem similar to conditionals in other languages, it's important to understand these. 

The biggest difference between loop code blocks and function code blocks are that variables delcared with `let` or `const` inside of a loop/if code block are only block-scoped variables. They can only be used inside of the block, while variables delcared inside of a function can be used freely throughout that function and the blocks that belong to it.

## Resources to learn Node.js

https://nodejs.org/en/learn/getting-started/introduction-to-nodejs  
https://www.w3schools.com/nodejs/default.asp  
https://code.visualstudio.com/docs/nodejs/nodejs-tutorial  
https://www.tutorialspoint.com/nodejs/index.htm  






## References
[1] https://nodejs.org/en/learn/getting-started/introduction-to-nodejs  
[2] https://en.wikipedia.org/wiki/Node.js#cite_note-28  
[3] https://x.com/nodejs/status/1759953849849167878  
[4] https://www.geeksforgeeks.org/javascript/variables-datatypes-javascript/  
[5] https://www.w3schools.com/js/js_string_methods.asp  
[6] https://www.geeksforgeeks.org/javascript/difference-between-var-let-and-const-keywords-in-javascript/  
[7] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions  
[8] https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/  
[9] https://www.w3schools.com/js/js_objects.asp  
[10] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else  
[11] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator  
[12] https://www.freecodecamp.org/news/javascript-if-else-and-if-then-js-conditional-statements/  
[13] https://www.geeksforgeeks.org/javascript/javascript-short-circuiting/  
[14] https://www.geeksforgeeks.org/compiler-design/dangling-else-ambiguity/ 
[15] https://www.w3schools.com/js/js_loop_while.asp  
[16] https://www.w3schools.com/js/js_loop_for.asp  
[17] https://www.w3schools.com/js/js_booleans.asp  
