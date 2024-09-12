
// Slot Machine

// function slotMachine() {
let bet50 = Number(document.querySelector("#bet50").value)
//gets value 50 from button-Number()-makes sure its an integer(#)
let bet5 = Number(document.querySelector("#bet5").value)
//gets value 5 from button-Number()-makes sure its an integer(#)
let balance = 1000
//Sets initial value for the .wallet
let results
let bet

document.querySelector(".wallet").innerHTML = balance;
//posts balance to dom
document.querySelector("#bet50").addEventListener("click", function(){
  //gives me bet 50 on the click
  bet = bet50;
  // sets bet to 50
  balance -= bet
  //subtracts bet amount

  document.querySelector(".wallet").innerHTML = balance
  //updates wallet

  checkWin() //calls program for slots
})
document.querySelector("#bet5").addEventListener("click", function(){
  //gives me bet 5 on the click
  bet = bet5;
  // sets bet to 5
  balance -= bet
  //subtracts bet amount

  document.querySelector(".wallet").innerHTML = balance
  //updates wallet

  checkWin()//calls program for slots
})


function reel(){
  //gives random choice for reels
  let choice = Math.ceil(Math.random()*5)

  if (choice === 1){
    choice = "hearts"
  }
  if(choice === 2){
    choice = "spades"
  }
  if(choice === 3){
    choice = "diomands"
  }
  if(choice === 4){
    choice = "clubs"
  }
  if(choice === 5){
    choice = "joker"
  }
  return choice
}

function wallet(bet){
  //updates balance (called when the user wins)
  balance += bet + bet*10
  document.querySelector(".wallet").innerHTML = balance
}

function checkWin(){
  //check to see if user wins
  let reel1 = reel()
  let reel2 = reel()
  let reel3 = reel()

  if ((reel1 === reel2) && (reel1 == reel3) ) {
    document.querySelector(".one").innerHTML = reel1
    document.querySelector(".two").innerHTML = reel2
    document.querySelector(".three").innerHTML = reel3
    document.querySelector(".results").innerHTML = "winner"
    wallet(bet)
    return true
  }

  else{
    document.querySelector(".one").innerHTML = reel1
    document.querySelector(".two").innerHTML = reel2
    document.querySelector(".three").innerHTML = reel3
    document.querySelector(".results").innerHTML = "loser"
    return false
  }

}
