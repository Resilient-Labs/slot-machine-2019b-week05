// Build a slot machine with 3 reels and 5 items per reel 

//define variables
const moneyTotal = document.querySelector('#money')
const reelOne = document.querySelector('#reelOne')
const reelTwo = document.querySelector('#reelTwo')
const reelThree = document.querySelector ('#reelThree')
const message = document.querySelector('#message')
const max = document.querySelector('#max').addEventListener('click', maxBet)
const min = document.querySelector('#min').addEventListener('click', minBet)

//generate random number 
function generateRandomNum() {
    return Math.ceil(Math.random() * 5)
}

function minBet() {
    if(moneyTotal.innerText <= '0') {
        message.innerText = 'You Lose!'
        return
    }

    reelOne.innerText = generateRandomNum()
    reelTwo.innerText = generateRandomNum()
    reelThree.innerText = generateRandomNum()

    if (reelOne.innerText === reelTwo.innerText && reelTwo.innerText === reelThree.innerText ) {
        moneyTotal.innerText = parseInt(moneyTotal.innerText) + 5
        message.innerText = 'You Won!'
    }   else {
        moneyTotal.innerText = parseInt(moneyTotal.innerText) - 5
    }
}


function maxBet() {
    if(moneyTotal.innerText <= '0') {
        message.innerText = 'You Lose!'
        return
    }
    reelOne.innerText = generateRandomNum()
    reelTwo.innerText = generateRandomNum()
    reelThree.innerText = generateRandomNum()

    if (reelOne.innerText === reelTwo.innerText && reelTwo.innerText === reelThree.innerText ) {
        moneyTotal.innerText = parseInt(moneyTotal.innerText) + 50
        message.innerText = 'You Won!'
    }   else {
        moneyTotal.innerText = parseInt(moneyTotal.innerText) - 50
    }
}