/*

Goal: Build a Simple Slot Machine

Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update 

*/


// Listening for the user's click on both buttons
document.querySelector('#fiveButton').addEventListener('click', fiveBet)
document.querySelector('#fiftyButton').addEventListener('click', fiftyBet)

// User total
let initialUserTotal = Number(document.getElementById('totalDisplay').innerHTML)

let betResult = 20 // Default bet result 

function fiveBet() {

    let generateRandomSlot = getRandomSlot(5); // Randomizing the computer's results

    document.getElementById('totalDisplay').innerText = generateRandomSlot
}


function getRandomSlot(bet) { // I want you to randomly add or minus the bet
    let randomFiveOperator=Math.random();

    if(randomFiveOperator<.333){
        betResult = initialUserTotal += bet;
    }
    else{ 
        betResult = initialUserTotal -= bet;
    }
    console.log(Number(betResult))
    return betResult
}


function fiftyBet() {
    let generateRandomSlot = getRandomSlot(50); // Randomizing the computer's results

    document.getElementById('totalDisplay').innerText = generateRandomSlot

}









// BELOW ARE PSEUDO CODE FOR MY INITIAL PLANNING

// User clicks button to randomize the items on each reel
// List of 5 slots in a single reel
// Randomize 5 lots in a single reel
// Take the number in the middle of the reel


// There is a random formula happening that displays to the user