

const imgArray = ['1.jpg', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.jpg']

const slotOne = document.querySelector('#slotOne')
const slotTwo = document.querySelector('#slotTwo')
const slotThree = document.querySelector('#slotThree')

let totalyuan = 5000
let minBet = 100
let maxBet = 500

document.querySelector('#beta').addEventListener('click', betButton)
document.querySelector('#betb').addEventListener('click', betButton)
document.querySelector('#wallet').innerText = totalyuan

//reset button
document.querySelector('#restart').addEventListener('click', reload)
function reload() {
    window.location.reload()
}


//create bet
function betButton(event) {
    lostBalance = Number(event.target.value)
    //on this event, target the value of this Number {100 or 500} 
    if (totalyuan < lostBalance) {
        alert('This guy\'s a loser')
        document.querySelector('#newtotal').innerText = ''
    } else {
        totalyuan -= lostBalance
        document.querySelector('#totalbalance').innerText = totalyuan
        cyclePhotos()
        //totalBalance = totalBalance - lostBalance^^
        // console.log('wow this guy\'s not half bad')
    }
}
//this creates the random number to assign to each picture. each is 1-13
function randomNumber() {
    let oneThroughThirteen = Math.floor(Math.random() * 13)
    return oneThroughThirteen
}
// assign a random number to each img slot

function cyclePhotos() {
    let firstNum = randomNumber()
    let secondNum = randomNumber()
    let thirdNum = randomNumber()

    //the src of slot 1 is equal to the first random number between one and thirteen in the imgarray

    slotOne.src = imgArray[firstNum]

    slotTwo.src = imgArray[secondNum]

    slotThree.src = imgArray[thirdNum]

    winner(firstNum, secondNum, thirdNum)
}

function winner(firstNum, secondNum, thirdNum) {
    if (firstNum === secondNum && secondNum === thirdNum) {
        document.querySelector('#newtotal').innerText = 'You Won'
        bonus()

    } else {

        document.querySelector('#newtotal').innerText = 'You lost the round'

    }
}

function bonus() {
    totalyuan += maxBet
    document.querySelector('#wallet').innerText = totalyuan

}
