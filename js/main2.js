

const gamble = document.querySelector('#gamble')
const slots = document.querySelectorAll('.slot')
const wallet = document.querySelector('#wallet')

const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const results = document.querySelector('#results')

// const wallet = parseInt(document.querySelector('#wallet').value)
// const bank = parseInt(document.querySelector('#bank').value)

const plusFive = document.querySelector('#plusFive')
const plusTwentyFive = document.querySelector('#plusTwentyFive')

// let yourMoney = 100
// let slotBank = 0

function randomNum() {
    return Math.ceil(Math.random() * 5)
}

plusFive.addEventListener('click', addFive)
plusTwentyFive.addEventListener('click', addTwentyFive)

function addFive() {
    wallet.innerText -= 5
    box1.innerText = randomNum()
    box2.innerText = randomNum()
    box3.innerText = randomNum()
    if ( wallet.innerText < '0') {
        plusFive.removeEventListener('click', addFive)
        results.innerText = 'Please seek help'
    }
    if ( box1.innerText === box2.innerText && box1.innerText === box3.innerText ) {
        const betFive = parseInt(wallet.innerText) + 10
        wallet.innerText = betFive
        results.innerText = 'Cool, you win $10!'
    } else if ( box1.innerText === box2.innerText || 
        box1.innerText === box3.innerText || 
        box2.innerText === box3.innerText ) {
            const betFiveAgain = parseInt(wallet.innerText) + 5
            wallet.innerText = betFiveAgain
            results.innerText = 'Cool, you win $5!'
    } else {
        results.innerText = 'Sorry, try again!'
    }
}

function addTwentyFive() {
    wallet.innerText -= 25
    box1.innerText = randomNum()
    box2.innerText = randomNum()
    box3.innerText = randomNum()
    if ( wallet.innerText < '0') {
        plusTwentyFive.removeEventListener('click', addTwentyFive)
        results.innerText = 'Please seek help'
    }
    if ( box1.innerText === box2.innerText && box1.innerText === box3.innerText ) {
        const betTwentyFive = parseInt(wallet.innerText) + 50
        wallet.innerText = betTwentyFive
        results.innerText = 'Cool, you win $50!'
    } else if ( box1.innerText === box2.innerText || 
        box1.innerText === box3.innerText || 
        box2.innerText === box3.innerText ) {
            const betTwentyFiveMore = parseInt(wallet.innerText) + 25
            wallet.innerText = betTwentyFiveMore
            results.innerText = 'Cool, you win $25!'
    } else {
        results.innerText = 'Sorry, try again!'
    }
}

// function spinTheWheel(winnings) {
//     for( slot of slots) {
//         slot.innerText = Math.ceil(Math.random() * 5)
//     }
//     let a = box1.innerText
//     let b = box2.innerText
//     let c = box3.innerText
//         if ( a === b && b === c) {
//             wallet.innerText = winnings *= winnings
//             console.log(winnings)
//         } else if ( a === b || b === c || c === a ) {
//             wallet.innerText = winnings += winnings
//             // console.log(winnings += winnings) 
//         }
// }