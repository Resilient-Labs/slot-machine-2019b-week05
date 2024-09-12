//call player amount
var playerScore = 1000;


//call the h1 
const winLose = document.getElementById('winLose')

//call the bets
const minBet=document.getElementById('minBet')
const maxBet = document.getElementById('maxBet')
console.log('nope')

//call play button 
//const playButton = document.getElementById('playButton')
//console.log('not')

//call img 
const firstImg = document.getElementById('firstImg')
const secondImg = document.getElementById('secondImg')
const thirdImg=document.getElementById('thirdImg')
console.log('notYet')

//put click on the buttons 
playButton.onclick = playerPlayGame;
minBet.onclick = playerMinBet;
maxBet.onclick = playerMaxBet;
console.log('buttons')


//function randomNumber() {
  //  return Math.ceil(Math.random() * 5);
//}





/*function playerMinBet(){
    playerScore-=10;
    document.getElementById('playerScore').innerHTML=playerScore;
    
    
}*/

function playerMinBet(){
    if(playerScore.innerText<="0")
    message.innerText='Nomore'
    return
}

 firstNumber.innerText= randomNumber()
 secondNumber.innerText = randomNumber()
 thirdNumber.innerText = randomNumber()

if(firstImg.innerText===secondImg.innerText && secondImg.innerText === thirdImg.innerText){
    const currentMoney=parseInt(playerScore.innerText)+ 20
    playerScore.innerText=currentMoney
}else{
    const currentMoney=parseInt(amount.innerText)-10
    amount.innerText=currentMoney
}

function playerMaxBet() {
    if (playerScore.innerText <= "0")
        message.innerText = 'you lost'
    return
}

// firstNumber = randomNumber()
// secondNumber = randomNumber()
// thirdNumber = randomNumber()

if (firstImg.innerText === secondImg.innerText && secondImg.innerText === thirdImg.innerText) {
    const currentMoney = parseInt(playerScore.innerText) + 200
    playerScore.innerText = currentMoney
} else {
    const currentMoney = parseInt(amount.innerText) - 100
    amount.innerText = currentMoney
}


//-------------------------------gave max bet a function--------------
//function playerMaxBet(){
  //  playerScore-=100;
    //document.getElementById('playerScore').innerHTML = playerScore;
    
//}




function playerPlayGame(){ //--------pushing play button--
    let firstNumber = randomNumber() 
    let secondNumber = randomNumber()
    let thirdNumber = randomNumber()
//---------------------------------first picture-----------------------------
 if (firstNumber < 1) {
     firstImg.src = "circle.jpeg";

     }else if (firstNumber< 2) {
         firstImg.src="diam.jpeg"
            

    }else if (firstNumber < 3) {
        firstImg.src = "heart.jpeg"


    }else if (firstNumber < 4) {
        firstImg.src="star.jpeg"
        
    }else if(firstNumber<5) {
        firstImg.src = "triangle.jpeg"
       
    }  


//-------------------------------Second Picture ---------------
if (secondNumber < 1) {
    secondImg.src = "circle.jpeg";

     } else if (secondNumber < 2) {
        secondImg.src = "diam.jpeg"




    } else if (secondNumber < 3) {
        secondImg.src = "heart.jpeg"


    } else if (secondNumber < 4) {
        secondImg.src = "star.jpeg"

    } else if(secondNumber<5){
        secondImg.src= "triangle.jpeg"
    }  

//---------------------------------Third Image ---------------
    if (thirdNumber < 1) {
        thirdImg.src = "circle.jpeg";

    } else if (thirdNumber< 2) {
        thirdImg.src = "diam.jpeg"




    } else if (thirdNumber< 3) {
        thirdImg.src = "heart.jpeg"


    } else if (thirdNumber < 4) {
        thirdImg.src="star.jpeg"

    } else if (thirdNumber<5){
        thirdImg.src="triangle.jpeg"
    }  
}

//---------------If a Match------------------
//if ((firstNumber===secondNumber)&&(secondNumber===thirdNumber)){
 //   winLose.innerText="Your A winner"
 //   checkIfYouWon

    
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
 //   var randomNum = Math.floor(Math.random() * 5);
 //   return random
//}


