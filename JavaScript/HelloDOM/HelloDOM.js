//I want to select by div with id of div1
//THIS IS CALLED DOM SELECTION
let div1 = document.getElementById("div1")

console.log(div1)

//we can also select multiple elemts by className, which store them in an HTMLCollection, which is like an array
let divCollection = document.getElementsByClassName("divClass")

console.log(divCollection)
console.log(divCollection[1]) //indexed like an Array!

//We can set attributes of the selected element - DOM MANIPULATION 
div1.setAttribute("style", "background-color:pink")

//Let's also change the color of our second div through the HTMLCollection
divCollection[1].setAttribute("style", "background-color:blue")

/* inline styling isn't best practice... so why would this be?
   one possible case: changing some header element to red and changing the text to "login failed" if a user fails to login
   but we typically don't need to manipulate elements visually 

   We use DOM selection to ATTACH FUNCTIONALITY to our HTML. Make buttons actually do something, or adding elements to the page.*/

console.log("=====================================(Events)")

//DOM SELECT our b1 button so we can attach functionality to it 
let b1 = document.getElementById("b1")

//event listeners take in the event to listen for, and the function to execute
b1.addEventListener("click", b1Function)

//Define the b1 function - it will show an alert to the user
function b1Function(){
    //make a popup on the webpage with alert()
    alert("YOU JUST CLICKED A BUTTON :) good job?")
}

//there is a shorter way to add event listeners, which is what I usually do----

//let's get button b2 and paragraph p1. We want to give p1 some content
let b2 = document.getElementById("b2")
let p1 = document.getElementById("p1")

b2.onclick = b2Function

function b2Function(){
    p1.textContent = "NOW I HAVE CONTENT!"
}