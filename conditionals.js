// one-condition if/else statement
let x = 3;
let result; // to access the variable result inside of both the if and else statements, 
            // initialize the variable before you enter

if (x == 0) {
    result = "x = 0";
} else if (x > 0) {
    result = "x > 0";
} else {
    result = "x < 0";
}
console.log(result);

// multi-condition if/else statement
// using && for and
let age = 20
if (age < 18) {
    console.log("You are less than 18");
} else if (age >= 18 && age < 21) {
    console.log("You are between 18 and 21");
} else {
    console.log("You are older than 21");
}

// another example using || for or
let name = "Jenn";
if (name == "Jenn" || name == "Emily") {
    console.log(true)
} else {
    console.log(false)
}

// conditional (ternary) operator
// for a further explanation, check out my tutorial!
let cost = 10;
let price = cost >= 25 ? "Expensive" : "Cheap";
console.log(price); // Cheap

// switch statements
// these are great when there are many conditions you want to check,
// without wasting a chunk of run time on going through else if conditions
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

// short circuiting

// OR short circuit
let value = true || console.log("Irrelevant");
console.log(value);

// AND short circuit
if (false && console.log("testing!")){
    console.log("Irrelevant")
}

const a = 6;
const b = 10;
example = (a > 0 && b < 20) && "both conditions are true";
console.log(example)

// while loops

// basic incrementing while loop
// can also be executed by for loop (easier)
i = 0
let count;
while (i < 5) {
    count = i;
    i++; // IMPORTANT
}
console.log(count);

// do-while loops
i = 0
do {
    count = i;
    i++;
}
while (i < 5);
console.log("do-while count: "+count);

// multi-condition 
i = 0
var keepGoing = true;
while (i < 10 && keepGoing == true) {
    console.log("hi!");
    if (i == 3) {
        keepGoing = false;
    } 
    i++;
}

// for loops
count = 0;
for (i = 0; i < 5; i++) { // note: normally requires "let i = 0", however, i declared earlier in code
    count++;
}
console.log(count);

// for in loops
const person = {name: "Jenn", age: 20};
for (let key in person) {
    console.log(key+": "+person[key]);
}


