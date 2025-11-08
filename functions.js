
// simple multiplication function
function multiply(num1, num2) {
    return num1 * num2;
}
let num1 = 12;
let num2 = 15;
console.log(multiply(num1, num2));

// recursive factorial function
function factorial(n){
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
console.log(factorial(10));

// returning multiple values from a function
// splitting a string into 2 parts, space delimiter
function split(string) {
    let s1 = string.split(" ")[0];
    let s2 = string.split(" ")[1];
    return[s1,s2];
}
let [x,y] = split("hello world");
console.log(x);
console.log(y);

// pass-by-value example
function alter(n) {
    n += 5;
    console.log("Inside function: " + n);
}
let n = 6;
alter(n);
console.log("Outisde function: " + n);

// pass-by-reference example
function push(array) {
    array.push("Beaver");
}
const animals = ["Sea otter","Prairie dog","Ground squirrel"];
push(animals);
console.log(animals);

