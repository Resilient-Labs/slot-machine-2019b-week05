

//call player amount
//const playerScore = document.getElementById('playerScore')


//call the h1 
const winLose = document.getElementById('winLose')

//call the bets
const minBet = document.getElementById('minBett')
const maxBet = document.getElementById('maxBett')
const clearButton = document.getElementById("clearButton")
console.log('nope')

//-----------------call play button 
const playButton = document.getElementById('playButton')
console.log('not')

//call img 
const firstImg = document.getElementById('firstImg')
const secondImg = document.getElementById('secondImg')
const thirdImg=document.getElementById('thirdImg')
console.log('notYet')

//put click on the buttons 
playButton.onclick = playerPlayGame;
minBet.addEventListener("click", playerMinBet)
maxBet.addEventListener("click", playerMaxBet)
clearButton.addEventListener("click", clearBet)   //NEW CLEAR BUTTON
// minBet.onclick = playerMinBet;
// maxBet.onclick = playerMaxBet;
console.log('buttons')

let playerAvailableFunds = 1000
let playerBetFunds = 0

//-----------------------------Clear -------------------------
 function clearBet(){                                                    //clear button
     
     //document.getElementById('#amountBet')= playerBetFunds.defaultValue;
    //document.querySelector("#amountBet").innerText = `${playerBetFunds}`
    location.reload('#amountBet')
    console.log('stop')
 }
//-----------------------------Min Bet -------------------------
function playerMinBet(){
    if(playerAvailableFunds < 10){
        //confirm("Not enough funds. Press ok to reset game")
        alert("Not enough funds.Press ok to reset game")
        location.reload()
    }else{
    playerAvailableFunds -=10
    playerBetFunds += 10
    document.querySelector("#amountBet").innerText = `${playerBetFunds}`
    }

     }
               

//--------------------------------Max Bet -----------------------
function playerMaxBet() {
    if(playerAvailableFunds < 100 && playerAvailableFunds > 10){
        alert("Not enough funds. Try placing a lower bet")
    
    }else if(playerAvailableFunds <= 10){
        alert("Not enough funds. Press ok to reset game")
        location.reload()
    }
    else{
    playerAvailableFunds -= 100
    playerBetFunds += 100
    document.querySelector("#amountBet").innerText = `${playerBetFunds}`
    }
    
    
}


function randomNumber() {
    return Math.ceil(Math.random()*5)
}
    
//---------------------------Push Play Game --------------------------------

function playerPlayGame(){
    if (playerAvailableFunds<0){
        alert('not enough funds')
        //confirm("Not enough funds. Press ok to reset game")
        //location.reload(playerAvailableFunds)
        return
        
      
        
        
        
    }
    //if yes- 

        //check to see if player wins
            //if yes- notify player of win, add 2x bet to player score
            // if no -notify player of loss
   
    document.querySelector("#playerScore").innerText = `${playerAvailableFunds}`

    firstNumber = randomNumber() -1
    secondNumber = randomNumber() -1
    thirdNumber = randomNumber() -1

    let imageBank = ['circle.jpeg', 'diam.jpeg', "heart.jpeg", "star.jpeg", "triangle.jpeg"]
    
    firstImg.src = imageBank[firstNumber]
    secondImg.src = imageBank[secondNumber]
    thirdImg.src = imageBank[thirdNumber]

    if (firstNumber===secondNumber&&secondNumber===thirdNumber){
        playerAvailableFunds += playerBetFunds * 2
        playerScore.innerText=playerAvailableFunds
        winLose.innerText="Your a winner "
      
    }else{
          playerAvailableFunds -= playerBetFunds
          winLose.innerText = "You didn't win this round "



      
    }
    

}
   

  
 // winLose.innerText="Your A winner"
  //  checkIfYouWon

    
 //-------------If a looser----------------    
  //  }else{
  //      winLose.innerText="Its Coming Keep Trying"
        
   // } 

//}


//function checkIfYouWon(playerScore){

//if (firstNumber === secondNumber  && secondNumber == thirdNumber) && (playerMinBet(e) {
   // playerScore += 20


// } else if (((firstNumber === secondNumber) && (secondNumber == thirdNumber)) && (playerMaxBet(e))) {
//    playerScore += 200
// }
//}


//---------------- call of the random function------------//

//function randomNumber() {
  //var randomNum = Math.floor(Math.random() * 5);
   //return randomNum
//}
 

