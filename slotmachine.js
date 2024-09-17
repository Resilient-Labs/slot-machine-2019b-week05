// // Slot Machine Instructions-
// Build a simple slot Machine
// Minimum 5 items / reel
// 3 reels
// users can BET -  Min or Max
// Total (amoutn $) won or loss
// Min Bet = $5
// Max Bet = $50
// Matches of 3 wheels is A WIN.
// WIN is 10x BET.


// Parent FUNCTION
// *If Reel 1 === Reel 2 === Reel 3, then WIN.
// *every else is a loss.
// -->return (send this to Output Function)
let balance = 1000

document.getElementById("amount").onclick = wallet(5)
document.getElementById("amount").onclick = wallet(50)

function wallet(bet){
  let outcome = winCheck()
  console.log(outcome)
  if (bet === 5 && outcome === "loss"){ //could be donw with if (when) statement
    balance = balance - 5
  }else if (bet === 5 && outcome === "win"){ //look into making a function to calculate the balance
    balance = balance - 5 + (5 * 10)
  }else if (bet === 50 && outcome === "loss"){
    balance = balance - 50
  }else if (bet === 50 && outcome === "win"){
    balance = balance - 50 + (50 * 10)
  }
  document.getElementById("amount").innerHTML = `${outcome} \n$${balance}.00`//template string to add $ sign and .00 to balance
}

function winCheck (){
  let reel1 = reelspin()  //In order to return the results of a function, you need to call the function and make the return a variable in the function your working in.
  document.getElementById("reel-1").innerHTML = reel1;
  let reel2 = reelspin()
  document.getElementById("reel-2").innerHTML = reel2;
  let reel3 = reelspin()
  document.getElementById("reel-3").innerHTML = reel3;
  if(reel1 === reel2 && reel2 === reel3){
    return "win"
   document.getElementById("outcome").innerHTML = "win";
  }else{
    return "loss"
   document.getElementById("outcome").innerHTML = "loss";  }
}


function reelspin(){
  let result = Math.ceil(Math.random()*5)  //math random * 5 makes our random range form 0 to 4.9, adding Math.ceil to that pushes any number from math.random up to the next interger.
  if (result===1){
    return "Duck"
  }else if (result===2){
    return "Frog"
  }else if (result===3){
    return "Zebra"
  }else if (result===4){
    return "Cow"
  }else if (result===5){
    return "Dog"
  }
}




//
//
//
//
//
// We need to create 3 functions.
//
// Score FUNCTION 1 -
// *We are going to use a range BETWEEN min and max.
// *We are going to start at $1000 (variable will be "balance").
// *loss = balance - bet
// *win = balance - bet + (bet*10)
//
// Parent FUNCTION
// *If Reel 1 === Reel 2 === Reel 3, then WIN.
// *every else is a loss.
// -->return (send this to Output Function)
//
// Reels (child FUNCTION 2) -
// *Measure the outcomes of each reel.
// *We will focus on 1 reel (and then do a loop to create 3 reels)
// *Each reel has its own result
// -->return (send to Parent)
//
// FUNCTION - Output to HTML
// We need to connect the input & output between the Dom and JS
// -Create the HTML.
// -Add appropriate tags to link input to JS.
// -Also use tags to report output to HTML.
