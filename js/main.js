//build a slot machine with a minimum 5 items per reel and minimum 3 reels
//have a min and max bet option and their total update


//create a variable for the amount of money that the user starts with
//create a variable for how many images will be used
let allMoney = 1000
const howManyImages = 5

//create event listener for min bet
//create event listener for max bet
document.getElementById('min').onclick=minBet
document.getElementById('max').onclick=maxBet

//create a function for minBet
function minBet() {
//show what the new money amount will be
    // document.querySelector('#placeToSee').innerText = '$' + allMoney
//generate random results for three reels
    let resultOne = randomReel(howManyImages)
    let resultTwo = randomReel(howManyImages)
    let resultThree = randomReel(howManyImages)
//create variable for winning
//create variable for losing -- !winner because it is checking to see if the winner variable is flase
    let winner = (resultOne === resultTwo && resultTwo === resultThree)
    let loser = !winner
//link the images
    document.querySelector('#One').src = resultOne
    document.querySelector('#Two').src = resultTwo
    document.querySelector('#Three').src = resultThree
//write conditionals for winning and losing

if (winner) {
    allMoney += 5;
    document.querySelector('#winOrLose').innerText = 'Im Not A Housewife, but Im a REAL WINNER!';
} else if (loser) {
    allMoney -= 5;
    document.querySelector('#winOrLose').innerText = 'BYE WIG! You Lose!';
} 

document.querySelector('#placeToSee').innerText = '$' + allMoney

if (allMoney <= 0){
    document.querySelector('#winOrLose').innerText = 'GAME OVER!'
}

}

//create a function for max bet
function maxBet() {
    // allMoney = allMoney + 50
    // document.querySelector('#placeToSee').innerText = '$' + allMoney
    let resultOne = randomReel(howManyImages)
    let resultTwo = randomReel(howManyImages)
    let resultThree = randomReel(howManyImages) 
    let winner = (resultOne === resultTwo && resultTwo === resultThree)
    let loser = !winner
//link the images
    document.querySelector('#One').src = resultOne
    document.querySelector('#Two').src = resultTwo
    document.querySelector('#Three').src = resultThree
//write conditionals for winning and losing
if (winner) {
    allMoney += 50;
    document.querySelector('#winOrLose').innerText = 'Im Not A Housewife, but Im a REAL WINNER!';
} else if (loser) {
    allMoney -= 50;
    document.querySelector('#winOrLose').innerText = 'BYE WIG! You Lose!';
} 

document.querySelector('#placeToSee').innerText = '$' + allMoney

if (allMoney <= 0){
    document.querySelector('#winOrLose').innerText = 'GAME OVER!'
}
}

//create function for randomReel -- used this code from MDN as a guide function getRandomInt(max) {return Math.floor(math.random() * max) .. Math.ceil also used because it is easier to use whole numbers than decimals

function randomReel (howManyImages){
//create a variable for the image
    let image =''
//create a variable to get a random number 1-5
    let randomNumber = Math.ceil(Math.random() * howManyImages)
    if (randomNumber<=1){
        image = 'https://i.postimg.cc/vHgBWh71/Atlanta2.png'
    } else if (randomNumber<=2){
        image = 'https://i.postimg.cc/cJX0qtMy/Potomac2.png'  
    } else if (randomNumber<=3){
        image = 'https://i.postimg.cc/P5HCTZZP/New-York-2.png'
    } else if (randomNumber<=4){
        image = 'https://i.postimg.cc/j5D5ZhVk/Beverly-Hills.png'
    } else if (randomNumber<=5){
        image = 'https://i.postimg.cc/bwLwP5pB/New-Jersey.png'
    }
    return image
}

