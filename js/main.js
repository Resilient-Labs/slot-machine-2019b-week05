



//we need money at a casino - wallet / somewhere to show money

const wagerWallet = document.querySelector('#placeToPutTotalAmount');
let valueOfWallet = 1000;
const TotalAmountSpace = document.querySelector('#totalAmountSection');
const PlayerMessageSpace = document.querySelector('#placeToPutPlayerMessage');
const losingMessageAlert = 'You broke son, get your money up!'
const winningMessageAlert = "You ballin' son! We LIT"

wagerWallet.innerText = `$ ${valueOfWallet}`

const reelResults = ["🂡", "🂢", "🂣", "🂤", "🂥"]

function getRandomReelValue () {
    const randomIndex = Math.floor(Math.random() * reelResults.length);
    const reelValue = reelResults[randomIndex];
    return reelValue;
}

// const slot1 = getRandomReelValue()
// const slot2 = getRandomReelValue()
// const slot3 = getRandomReelValue()




//something to use to place a wager
document.querySelector('#firstBetButton').addEventListener('click', betFiveButton)

function betFiveButton() {
//    let reel1 = document.querySelector('.reel1')
//    reel1.className.toggle('linkIcon')
//    console.log(reel1)
//  let slot1 = document.querySelector('.reel1')
//  let slot2 = document.querySelector('.reel2').innerHTML
//  let slot3 = document.querySelector('.reel3').innerHTML

const slot1 = getRandomReelValue()
const slot2 = getRandomReelValue()
const slot3 = getRandomReelValue()


    if (valueOfWallet >= 5) {
        // let reelOneImg =  document.querySelector('.reel1').target.classList.toggle('completed')
        // console.log(reelOneImg, 'hi')
        // const reelOne = ["a", "b", "c", "d", "e"]
        // const reelTwo = ["a", "b", "c", "d", "e"]
        // const reelThree = ["a", "b", "c", "d", "e"]
        // const map1 = reelOne.map((x) => x);

        // reelOne[0] = document.querySelector('.reel1').classList
        // console.log(map1)


//once you click the bet button, css class will be assigned to a random variable in the array
//a = link class
//b = zelda class
//c = warrior class
//d = witch class
//e = wizard


        // const randomResultOne = Math.floor(Math.random() * reelOne.length);
        // const reelResultOne = reelOne[randomResultOne]
        // // document.querySelector('.reel1').innerText = 

        // const randomResultTwo = Math.floor(Math.random() * reelOne.length);
        // const reelResultTwo= reelOne[randomResultOne]
        // // console.log(reelResultTwo)

        // const randomResultThree = Math.floor(Math.random() * reelOne.length);
        // const reelResultThree = reelOne[randomResultOne]
        // console.log(reelResultThree)
        if (slot1 === slot2 && slot2 === slot3) {
            document.getElementById('reel1Result').innerText = `${slot1}`
            document.getElementById('reel2Result').innerText = `${slot2}`
            document.getElementById('reel3Result').innerText = `${slot3}`
            valueOfWallet = valueOfWallet + 5;
            wagerWallet.innerText = `$ ${valueOfWallet}`
            PlayerMessageSpace.innerText = ` ${winningMessageAlert}`
        } else {
            document.getElementById('reel1Result').innerText = `${slot1}`
            document.getElementById('reel2Result').innerText = `${slot2}`
            document.getElementById('reel3Result').innerText = `${slot3}`
            valueOfWallet = valueOfWallet - 5;
            wagerWallet.innerText = `$ ${valueOfWallet}`
            PlayerMessageSpace.innerText = ``
        }
    } else if (valueOfWallet === 0) {
        wagerWallet.innerText = losingMessageAlert
    }
}

document.querySelector('#secondBetButton').addEventListener('click', betFiveHundredButton)

function betFiveHundredButton() {
    if (valueOfWallet >= 500) {

       
const slot1 = getRandomReelValue()
const slot2 = getRandomReelValue()
const slot3 = getRandomReelValue()


        // const randomResultOne = Math.floor(Math.random() * reelOne.length);
        // const reelResultOne = reelOne[randomResultOne]
        // // console.log(reelResultOne)
        // const randomResultTwo = Math.floor(Math.random() * reelTwo.length);
        // const reelResultTwo = reelTwo[randomResultTwo]
        // // console.log(reelResultTwo)
        // const randomResultThree = Math.floor(Math.random() * reelThree.length);
        // const reelResultThree = reelThree[randomResultThree]
        // // console.log(reelResultThree)
        if (slot1 === slot2 && slot2 === slot3) {
            document.getElementById('reel1Result').innerText = `${slot1}`
            document.getElementById('reel2Result').innerText = `${slot2}`
            document.getElementById('reel3Result').innerText = `${slot3}`
            valueOfWallet = valueOfWallet + 500;
            wagerWallet.innerText = `$ ${valueOfWallet}`
            PlayerMessageSpace.innerText = ` ${winningMessageAlert}`
        } else {
            document.getElementById('reel1Result').innerText = `${slot1}`
            document.getElementById('reel2Result').innerText = `${slot2}`
            document.getElementById('reel3Result').innerText = `${slot3}`
            valueOfWallet = valueOfWallet - 500;
            wagerWallet.innerText = `$ ${valueOfWallet}`
        }
    } else if (valueOfWallet === 0) {
        wagerWallet.innerText = losingMessageAlert
    }
}

document.querySelector('#gameRestart').addEventListener('click', addMoneyToWallet)

function addMoneyToWallet() {
    // console.log('hi')
    if (valueOfWallet === 0) {
        valueOfWallet = valueOfWallet + 1000;
        wagerWallet.innerText = `$ ${valueOfWallet}`    
    }
}

//need to show winning combinations
//need to see if the wager is successful / win 
//if we win, we gain the amount of wager
//need to see if the wager does not win
//if we lose, we lose the amount of wager
//need to return result to the wallet


//I need five classes for background images
//