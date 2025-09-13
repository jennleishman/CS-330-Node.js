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

### Resources to learn Node.js

https://nodejs.org/en/learn/getting-started/introduction-to-nodejs  
https://www.w3schools.com/nodejs/default.asp  
https://code.visualstudio.com/docs/nodejs/nodejs-tutorial  
https://www.tutorialspoint.com/nodejs/index.htm  






### References
[1] https://nodejs.org/en/learn/getting-started/introduction-to-nodejs  
[2] https://en.wikipedia.org/wiki/Node.js#cite_note-28  
[3] https://x.com/nodejs/status/1759953849849167878
