//first, we'll make a basic named function
//because of HOISTING, we can call this method before we actually declare/define it
helloWorld();

function helloWorld(){
    console.log("Hola Mundo")
}


//Here's an anonymous function, it has no name, but it's assigned to a variable
let anon = function(){
    console.log("I'm an anonymous function stored in a variable... shhhh ")
}

anon() //we can call the function by calling its variable
//NOTE - anonymous functions DON'T get hoisted


//Arrow functions are java lambdas. take in 0 or more arguments and performs some logic
//These are typically stored in variables as well
let arrow = (var1, var2) => {
    console.log(var1 + " compared to " + var2)
    console.log(var1 == var2)
}

//Let's use this arrow function to compare the values (NOT TYPES) of the two variables
arrow("", false)
arrow(0, false)
//(These are both falsy values, so both return true)


//Callback functions - these are functions that take in another function as a parameter
function f1(x){
    console.log("Inside Function 1")
    console.log("The value passed in from function 2 is: " + x)
    console.log("End of Function 1")
}

function f2(y, callBackFunc){
    console.log("Inside Function 2")
    callBackFunc(y) //so "callBackFunc" is intended to be a function passed in to f2
    console.log("End of Function 2")
}

//call f2, which includes a callback function
f2(100, f1)

//what's the point of this?? callbacks allow FLEXIBILITY
//with callbacks, we have the flexiblity to call whatever function we want in f2

function f3(x){
    console.log("Inside Function 3")
    console.log("The value passed from function 2, when squared, is: " + x * x)
    console.log("End of Function 3")
}

//call f2 again, with a DIFFERENT function this time
f2(5, f3)

//console.log is a function too! try it.
f2("Hello World", console.log)


//Closures - an older way of achieving encapsulation in JS

let greeter = function(name){
    return function(){
        console.log("Hello, " + name)
    }
}

//the nested function can access the "name" argument, but can't change it - effectively final

//assign the function call to a variable, and give it an argument for name
nameBen = greeter("Ben")

nameBen() //"Hello, Ben"

//BUT once we assign the name variable to the greeter function, it can't ever change
greeter = greeter("Jamie")

greeter() //"Hello, Jamie"

newGreeterAttempt = greeter("Edward") //greeter runs here as well

//now, NewGreeterAttempt stores a VALUE, not a function, so we can't it as a function
console.log(newGreeterAttempt) //undefined

greeter() //"Hello, Jamie"

//so with closures, we can prevent the changing of the argument from inside AND outside

//we won't typically write our own closures like this, but they're used in a lot of mechanisms we use in JS

console.log("============================================(Global Scope)")

//anything that is globally scoped is visible throughout the entire script

console.log(a)

//This is an example of HOISTING - vars and functions all get hoisted to the top of their scope
var a = 5

console.log(a) //Now, we can see the value of a since it's been defined

//Let's try the above example with a let

//console.log(b) //THIS IS ILLEGAL! let and const are NOT HOISTED like vars and functions
let b = 10 

console.log(b) //this, of course, is legal as b has been defined at this point

console.log("==========================================(Local Scopes)")

//block scope---------------

if(true){
    var c = "I'm a var in a block - block scoped!"
    console.log(c)
    let d = "I'm a let in a black - block scoped!"
    console.log(d)
}

console.log(c) //vars are visible outside of a non-function block
//console.log(d) //lets are NOT VISIBLE outside of a non-function block

//rememeber, vars are globally scoped so even when they're technically block scoped, they're visible globally

//the only time vars don't get the global scope treatment is within a function 

//function scope------------

function scopeTest(){
    console.log(e)
    var e = "I'm a var in a function! - function scoped"
    console.log(e)
}

console.log(e)

scopeTest()

/* The main difference between block/function scope is...

    -vars and NOT visible outside the function they were declared in
    -BUT they ARE visible outside of any non-function blocks they were declared

*/