//Psuedo code for slot machine
/*Build a simple slot machine with minimum 5 items per reel and 3 reels 
User should be able to bet min or max and have their total update aka how much money they have won or lost. 
Min bet does $5 and Max bet does $50. They should start with $1000. 
Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet*/


//variables
let totalMoney = 1000
const picturesCountPerReel = 5

//eventlisteners
document.querySelector('#minBet').addEventListener('click', minBet)
document.querySelector('#maxBet').addEventListener('click', maxBet)

//what happens when someone clicks a button (this needs to be wrapped in function)
function minBet(){
    let reelOneStop = getRandomInt(picturesCountPerReel)
    let reelTwoStop = getRandomInt(picturesCountPerReel)
    let reelThreeStop = getRandomInt(picturesCountPerReel)
    let win = (reelOneStop === reelTwoStop && reelTwoStop === reelThreeStop)
    let bet = 5

    document.querySelector("#slotOne").src = reelOneStop
    document.querySelector("#slotTwo").src = reelTwoStop
    document.querySelector("#slotThree").src = reelThreeStop

    if (win) {
        totalMoney += bet * 10
        displayWinnerOrLoser("You won!", totalMoney)

    } else {
        totalMoney -= bet
        displayWinnerOrLoser("You lost!", totalMoney)
    }

    if(totalMoney <= 0){
        displayWinnerOrLoser("GAME OVER!!!!!", 0);
    }
}

function maxBet(){
    let reelOneStop = getRandomInt(picturesCountPerReel)
    let reelTwoStop = getRandomInt(picturesCountPerReel)
    let reelThreeStop = getRandomInt(picturesCountPerReel)
    let win = (reelOneStop === reelTwoStop && reelTwoStop === reelThreeStop)
    let bet = 50

    document.querySelector("#slotOne").src = reelOneStop
    document.querySelector("#slotTwo").src = reelTwoStop
    document.querySelector("#slotThree").src = reelThreeStop

    if (win) {
        totalMoney += bet * 10
        displayWinnerOrLoser("You won!", totalMoney)
    } else {
        totalMoney -= bet;
        displayWinnerOrLoser("You lost!", totalMoney);
    }

    if(totalMoney <= 0){
        displayWinnerOrLoser("GAME OVER!!!!!", 0);
    }
}

//functions

function getRandomInt(max) {
    let result = Math.ceil(Math.random() * max)
    
    let newImage

    if (result <= 1) {
        newImage = "img/grape.png"
    } else if (result <= 2) {
        newImage = "img/diamond.png"
    } else if (result <= 3) {
        newImage = "img/heart.png"
    } else if (result <= 4) {
        newImage = "img/seven.png"
    } else if (result <= 5) {
        newImage = "img/cherry.png"
    }

    return newImage
}
//math.Floor = rounds down b/c math.random will give you something that might not be a whole integer

function displayWinnerOrLoser(msg, total) {
    document.querySelector("#winnerOrLoserMsg").innerHTML = msg;
    document.querySelector('#money').innerHTML = total;
}

