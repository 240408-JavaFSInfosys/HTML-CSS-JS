//PokeAPI base URL - making a variable to hold the base URL to reach pokeAPI. This is for cleaner code
const url = "https://pokeapi.co/api/v2/pokemon/";

//use DOM Selection to select all of the elements I plan to fill with data
let pokename = document.getElementById("pokename");
let poketype = document.getElementById("poketype");
let pokenum = document.getElementById("pokenum");
let pokepic = document.getElementById("pokepic");

//when the user clicks the button, execute the fetchData method (using an eventListener)
document.getElementById("btn").onclick = fetchData;

/* This function will return some Pokemon data from PokeAPI
It will use a fetch request to return a promise object
The promise object will get filled with the Pokemon data e requested, or fail.*/
async function fetchData(){

    //first, we need to save the user's input
    let userInput = document.getElementById("userInput").value

    //using the fetch() method to send a GET to the pokeAPI
    //fetch sends GET requests by default
    await fetch(url + userInput)
    .then((response) => response.json()) //extract the body of the reponse (HTTP Response from PokeAPI), and turn it into JS
    .then((data) => renderHTML(data)) //the JS version of the data will be held in this "data" variable
    //This data will be sent to the renderHTML function to appear on the page
    .catch((error) => document.getElementById("header").innerHTML = "It Got Away...")
    .finally(() => 
        setTimeout(() => document.getElementById("header").innerHTML = "Find Another Pokemon:", 2000)
    ) //setTimeout lets us define some functionality to run after some specified amount of milliseconds

    /*
      .then() lets us perform actions after a successful HTTP Request (here, we turn the JSON into JS, then render the data in HTML)

      .catch() lets us perform actions after a FAILED request

      .finally() lets us define some logic to run at the end, no matter whaat
     */
}

//This function will take in the Pokemon data and render it on the page
function renderHTML(data){
    console.log(data) //just to see the full pokemon object in console

    //populate the table with the appropriate pokemon data
    pokename.innerHTML = data.name
    poketype.innerHTML = data.types[0].type.name //TODO: render 2 types?
    pokenum.innerHTML = data.id

    //pokepic is an <img>, so we need to set the src attribute
    pokepic.setAttribute("src", data.sprites.front_default)
}