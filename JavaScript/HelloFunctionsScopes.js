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

