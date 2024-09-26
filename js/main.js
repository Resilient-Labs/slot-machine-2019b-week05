//add reel images to image array
const imgArray =['./images/ironMan.jpeg','./images/scarletWitch.webp','./images/falcon.jpeg','./images/blackPanther.jpeg','./images/cap.jpeg']
//assign reel space to variable
const imageOne = document.querySelector('#imageOne')
const imageTwo = document.querySelector('#imageTwo')
const imageThree = document.querySelector('#imageThree')
//user starts with $1000
let totalMoney = 1000

let maxAmount = 500
let minAmount = 100
let betAmount = 'min'
//listen for button click, call bet function
document.querySelector('#minBet').addEventListener('click', startingBetMin)
document.querySelector('#maxBet').addEventListener('click', startingBetMax)

//show money
document.querySelector('#placeToDisplayPot').innerText= '$' + totalMoney


//check for money, display game over or call image selector
function startingBetMin(){
    if (totalMoney < 100){
        document.querySelector('#placeToDisplayResult').innerText ='Sorry, you got blipped. Game over.'
    }
    else{
        imageSelector ()
    }
}

//check for money, display game over or call image selector
function startingBetMax(){
    //adds bet amount to variable that will be used later
    betAmount ='max'

    if (totalMoney < 500){
        document.querySelector('#placeToDisplayResult').innerText ='You don\'t have enough money for that.'
    }
    else{
        imageSelector ()
    }
}

//assigns random number to each image
function randomizer (){
    let oneThroughFive = Math.floor(Math.random() * 5)
    return oneThroughFive
}

//assign random number to image array, 
function imageSelector (){
    let numOne = randomizer ()
    let numTwo = randomizer ()
    let numThree = randomizer ()

    imageOne.src = imgArray[numOne]
    imageTwo.src = imgArray[numTwo]
    imageThree.src = imgArray[numThree]

    winResult (numOne, numTwo, numThree)
}

//display win and give prize or display loss and take money
function winResult (numOne, numTwo, numThree){
    if (numOne === numTwo && numTwo === numThree){
        document.querySelector('#placeToDisplayResult').innerText ='You won!'
        givePrize()
    }
    else{
        document.querySelector('#placeToDisplayResult').innerText ='You lost, try again'
        takeMoney()
    }
}


function givePrize(){
    if (betAmount === 'max'){
        totalMoney = totalMoney + maxAmount
        document.querySelector('#placeToDisplayPot').innerText ='$' + totalMoney
    }else {
        totalMoney = totalMoney + minAmount
        document.querySelector('#placeToDisplayPot').innerText ='$' + totalMoney
    }
}


//Give or take max bet from money, if there is no money to take, display game over
function takeMoney(){
    if (betAmount === 'min'){
        totalMoney = totalMoney - minAmount
        document.querySelector('#placeToDisplayPot').innerText ='$' + totalMoney    
        if (totalMoney < 100){
            document.querySelector('#placeToDisplayResult').innerText ='Sorry, you got blipped. Game over.'
            document.querySelector('#placeToDisplayPot').innerText ='$' + totalMoney
        }else{
            document.querySelector('#placeToDisplayResult').innerText ='You lost, try again'
        }
    }else {
        totalMoney = totalMoney - maxAmount
        document.querySelector('#placeToDisplayPot').innerText ='$' + totalMoney
        if (totalMoney < 100){
            document.querySelector('#placeToDisplayResult').innerText ='Sorry, you got blipped. Game over.'
            document.querySelector('#placeToDisplayPot').innerText ='$' + totalMoney
        }else{
            document.querySelector('#placeToDisplayResult').innerText ='You lost, try again'
        }
    }
}