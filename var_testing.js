
// var declares a variable within a function/global scope and allows re-delcaration
// var is also function-scoped regardless of block boundaries
var num = 20;
// because it's a var you can redeclare, even in the same function/scope
var num = 21;

let string = "hello";
// with let, you can redefine the variable but you can't redeclare it with let
// let variables are only accessible in the block they are present in (brackets matter)
// can be declared globally
// preferred to var declarations because it avoids mistakes if you've used a name for a variable before
string = "goodbye";


// const cannot be redefined or redeclared
// consts are only avaiable in the block they are present in
// this means they also can be global if you declare them outside of a block
const float = 26.4; 

// Multi-type operations: adding versus multiplying
// multiplying two different types will behave identically as subtracting or dividing them
function numString(n, s){
    // adding
    console.log(n + " + " + s + " = " + n + s);
    let add = n + s;
    console.log(n + " + " + s + " is a  " + typeof add);

    // multiplying
    console.log(n + " / " + s + " = " + n / s);
    let mult = n / s;
    console.log(n + " / " + s + " is a  " + typeof mult);
}
numString(1, 3);

// converting one datatype to another
let strNum = "56";
console.log("'56' is a: " + typeof strNum);
let numNum = Number(strNum);
console.log("Number('56') is a: " + typeof numNum);

// useing forEach to print an array
function myFunction(item) {
    console.log(item);
}
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

// creating an object, used and accessed similar to a dictionary
const pet = {type:"dog", name:"Bolt"};
pet.age = 4;
console.log(pet.name);
console.log(pet.age);

// variable naming conventions
// legal, though not preferred:
let Hello_4$ = 4;
// illegal
// let 2hello = "hi";
