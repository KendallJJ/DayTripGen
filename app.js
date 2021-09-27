"use strict"

// Destinations are []

// First user story for randomly generating destinations
// using Math.random() to gentrate 
// Math.floor(Math.random() * 3); returns random interger


let userinput;

// userinput = prompt("Where am I going this Weekend?")
let randomDestination = (max) => Math.floor(Math.random()* max);

function choseItem(someArray){
    let result = someArray[Math.floor(Math.random()* someArray.length)]
    console.log(result);
    return result
   
    
}

let destination = ['Statue of Liberty', 'Time Square', 'Empire State Building', "Grand Canyon"]
let firstDestination = choseItem(destination);

let restaurants = ['Sushi Noz', 'Birria-Landia', 'Ramen-Ya'];
let firstRestaurant = choseItem(restaurants);




let transportation = ['Uber', 'Lyft', 'Taxi'];
let firstTransportation = choseItem(transportation);


   

let entertainment = ['Nets Game', 'Knicks Game', 'Dodgers Game'];
let firstEntertainment = choseItem(entertainment);


let dayTrip = firstEntertainment + " " + firstDestination + " " + firstRestaurant + " " + firstTransportation;
let counter = 1;
while(dayTrip <= dayTrip){
    alert("Hi your trip for to day includes"+" " + dayTrip);
    userinput = prompt("Are you satisfied with your Day Trip?")

    dayTrip++;
if(userinput == "Yes"){
    alert("Have a good trip!");
    
}
else if(userinput == "No"){
    alert("Sorry to hear that.")
    alert("Hi your trip for to day includes"+" " + dayTrip);
} 





}










// random gen first options

// display results: tools - loop - while
// Ask for satisfaction? : tools - prompt
// if yes, display final results : tools - alert and console.log
// if no, prompt for choice to change: prompt
// then re-gen result: tools - functions written


// let notSatisfied = true
// while (notSatisfied){
//     // prompt for satisfaction
//     if ... yes 
//     notSatisfied = !notSatisfied
// }