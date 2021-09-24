"use strict"

// Destinations are []

// First user story for randomly generating destinations
// using Math.random() to gentrate 
// Math.floor(Math.random() * 3); returns random interger


let destination = ['Statue of Liberty', 'Time Square', 'Empire State Building']
let userinput;

// userinput = prompt("Where am I going this Weekend?")
let randomDestination = (max) => Math.floor(Math.random()* max);

function chosenDestination(){
    let firstPlace = destination[Math.floor(Math.random()* 3)]
        console.log(firstPlace);
    return firstPlace
        
}
chosenDestination();


let restaurants = ['Sushi Noz', 'Birria-Landia', 'Ramen-Ya'];

function chosenRestaurant(){
    let firstRestaurant = restaurants[Math.floor(Math.random()* 3)]
    console.log(firstRestaurant);
    return firstRestaurant
}
        chosenRestaurant();

let transportation = ['Uber', 'Lyft', 'Taxi'];

function chosenTransportation(){
    let firstTransportation = transportation[Math.floor(Math.random()* 3)]
    console.log(firstTransportation)
}
       chosenTransportation();

let entertainment = ['Nets Game', 'Knicks Game', 'Dodgers Game'];

    function chosenEntertainment(){
        let firstEntertainment = entertainment[Math.floor(Math.random()* 3)]
        console.log(firstEntertainment)
       
    }

        chosenEntertainment();
        
        alert(destination + restaurants + transportation + entertainment);
        
