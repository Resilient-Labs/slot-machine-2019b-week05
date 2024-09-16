// document.querySelector("#box1").addEventListener("click", boxOne)
// boxOneClicks=0
// function boxOne(){ 
//   boxOneClicks= boxOneClicks+1
// }

/*ith minimum 5 items per reel and 3 reels -
 user should be able to bet min or max and have their total update aka how much money they have won or lost. 
Min bet does $5 and Max bet does $50. 
They should start with $1000. 
// Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet 


i want 3 containers withh 5 images
when all 3 containers have the same image = win = true THEN multiply bet *10
if all 3 containers have different images = lose=false - subtract bet from total
 
I want to have a max button of $50 & a min button of $5 + input to submit own bet value
 
 totalMoney= $1000 
 bet = value  if false




*/


// BET FUNCTIONS

// i want to place a min & maximum BET when i click these buttons
// i want the functions of placing a minimum or maximum bet to be made
let minBet = document.querySelector("#minBet")
let maxBet = document.querySelector("#maxBet")
let totalWinnings = document.querySelector(".totalWinnings")
let push = document.querySelector("#push")
let bet = 0
totalWinnings.textContent = 1000


minBet.addEventListener("click",placeMinBet)
maxBet.addEventListener("click",placeMaxBet)
push.addEventListener("click",pushToStart)

function getRandomNumberBetweenOneAndFive(){
  let slot = Math.floor(Math.random() * 5);
  return slot ;
}

function pushToStart(){                               //line 50 is defining the function
  let reelOne = getRandomNumberBetweenOneAndFive()     // declaring a variable & within that variable is a function 
  // console.log("valueOfReelOne", reelOne)            
  document.querySelector(".slot1").innerHTML= reelOne   // puts it on the dom in HTML so you can see it

  let reelTwo = getRandomNumberBetweenOneAndFive() // line 55 is defining the function
  document.querySelector(".slot2").innerHTML= reelTwo // declaring a variable & within that variable is a function

  let reelThree = getRandomNumberBetweenOneAndFive() // line 55 is defining the function
  document.querySelector(".slot3").innerHTML= reelThree// declaring a variable & within that variable is a function
  whoWon(reelOne, reelTwo, reelThree)//  passing through the argument to be passed to the paramaters
}

function whoWon(reelOne, reelTwo, reelThree){  // being passed into the paramaters & now creating a functio that compares them
  if (reelOne === reelThree && reelOne ==reelTwo) {

  // console.log("You Win")
  totalWinnings.textContent  = parseInt(totalWinnings.textContent) + (bet * 10) // manipuating the value in total winnings on the html

  } else { 
    totalWinnings.textContent  = parseInt(totalWinnings.textContent) - (bet ) //// manipuating the value in total winnings on the html
    // console.log("You Lost")
}
}
// console.log(compareSlot())


// w.e is on left side of the equal; sign is what is being changed to whats on the right side 
// you start off with 1000 points but your bet 0


function placeMinBet(){                              // creating a function that changes the value of bet by adding 5
  bet += 5
  bet = bet+5
  document.querySelector("#totalBet").value = bet
}


function placeMaxBet(){
  bet += 50
  document.querySelector("#totalBet").value = bet // creating a function that changes the value of bet by adding 50
}


// SLOT FUNCTIONS
function getRandomNumberBetweenOneAndFive(){
  let slot = Math.floor(Math.random() * 5);
  return slot ;
}
function getNumberOne (){
  let i = 1
  return i;
}

let total = 1000
// slot one function
const slotOne = () => {
  let slot = Math.floor(Math.random() * 5);
  return slot ;
}
// console.log(slotOne())

// slot two function
const slotTwo = () => {
  let slot = Math.floor(Math.random() * 5);
  return slot ;
}
// console.log(slotTwo())

// slot three function
const slotThree = () => {
  let slot = Math.floor(Math.random() * 5);
  return slot ;
}
// console.log(slotThree())


// comparison  of slots functionS - winnner?
// const compareSlots = () => {
//  if (slotOne() === slotTwo() === slotThree()) {
//    return console.log("Winner")
//  } else {
//    return console.log("Loser")
// }

// totalBet Function

// let totalBet = (bet) => {
//   // let total = 1000;
//   let totalWinnings = 0
//   if(compareSlots() === true) {
//   totalWinnings = total += bet
//   } else {
//     totalWinnings = total -= bet
//   }
//  return totalWinnings; 
// }
// console.log(totalBet())
