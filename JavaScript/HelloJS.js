console.log("============================================(Printing/Declaring Variables)")

//JS is LOOSELY TYPED so I can declare variables with no datatype, and easily reassign values to other types

a = 100; //number

a = true;

a = null;

a = "Now I'm a String"

//JS will add the "var" keyword implicitly when declaring a variable

b = "I am a var"

let b2 = "I am a let"

const b3 = "I am a const"

console.log("===========================================(Testing Type Coercion)")

//Let's see how JS decides type coercion when given string and number math operations

let tc1 = "5" * 5
console.log("String times Number is: " + typeof tc1)
console.log(tc1)

let tc2 = "5" * "5" //JS assumes we're trying to multiply 2 number
console.log("String times String is: " + typeof tc2)
console.log(tc2)

let tc3 = "5" + 5 //JS assumes we're trying to do String concatenation
console.log("String plus Number is: " + typeof tc3)
console.log(tc3)

let tc4 = 5 + "5"
console.log("Number plus String is: " + typeof tc4)
console.log(tc4)

//order doesn't matter if its only 2 variables... it's the OPERATOR that matters

//let's explore type coercion with 3 variables
let tc5 = 5 + 5 + "5"
console.log("Number plus Number plus String is: " + typeof tc5)
console.log(tc5) //5 + 5 = 10... 10 + "5" = "105"

let tc6 = 5 + "5" + 5
console.log("Number plus String plus Number is: " + typeof tc6)
console.log(tc6) //5 + "5" = "55"... "55" + 5 = "555"

let tc7 = "5" + 5 + 5
console.log("String plus Number plus Number is: " + typeof tc7)
console.log(tc7) //"5" + 5 = "55"... "55" + 5 = "555"

//It's all math UNTIL a String gets put into the mix. Then the operator matters
//String with + creates strings, String with any other math operator creates numbers.

console.log("=============================================(Truthy/Falsy)")

//I want to write a function that compares two variables to demonstrate truthy/falsy
function testTrueFalse(var1, var2){
    console.log(var1 + " compared to " + var2)
    console.log(var1 == var2)
}

testTrueFalse(0, false) //true
testTrueFalse(1, true) //true
testTrueFalse(2, false) //false
testTrueFalse(2, true) //FALSE... WHY?? see below

//while 2 IS truthy... the boolean true evalutes to the number 1, while boolean false evaluates to 0.
//so comparing any number besides 1 to true will return false

//an if statment to demonstrate this
if(2){
    console.log("any number besides zero is truthy")
    console.log("however... 1 is the only number that is EQUAL to true")
}
