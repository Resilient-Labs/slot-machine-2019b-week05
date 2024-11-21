
//Player places bet
//Player hits button
//Three reels show randomized numbers 
//If numbers are the same player wins payout
//Total money player has increases 

//Event listener for min bet
document.querySelector('#min').addEventListener('click', min)
document.querySelector('#max').addEventListener('click', max)

//Set wallet balance and print it to DOM
let walletBalance = 5000
document.querySelector('#wallet').innerText = walletBalance
console.log(walletBalance)

function min() {
    
    // const bet = Number(document.querySelector('#bet').value)
    // console.log(bet)

    //Setting first reel 
    let slotA = Math.floor(Math.random() * 5)
    console.log(slotA)

    //Print to DOM
    document.querySelector('#slotA').innerText = slotA

    //Setting second reel 
    let slotB = Math.floor(Math.random() * 5)
    console.log(slotB)

    //Print to DOM
    document.querySelector('#slotB').innerText = slotB


    //Setting third reel
    let slotC = Math.floor(Math.random() * 5)
    console.log(slotC)

    //Print to DOM
    document.querySelector('#slotC').innerText = slotC

    //If all slots have the same number and player wins min bet
    if (slotA === slotB && slotA === slotC) {

        walletBalance += 10 //= walletBalance + 10
        document.querySelector('#wallet').innerText = walletBalance
        document.querySelector('#winLose').innerText = 'YOU WIN!'
    } else {
        walletBalance -= 10
        document.querySelector('#wallet').innerText = walletBalance
        document.querySelector('#winLose').innerText = 'YOU LOSE!'
    }

    

}

function max() {
    
    // const bet = Number(document.querySelector('#bet').value)
    // console.log(bet)

    //Setting first reel 
    let slotA = Math.floor(Math.random() * 5)
    console.log(slotA)

    //Print to DOM
    document.querySelector('#slotA').innerText = slotA

    //Setting second reel 
    let slotB = Math.floor(Math.random() * 5)
    console.log(slotB)

    //Print to DOM
    document.querySelector('#slotB').innerText = slotB


    //Setting third reel
    let slotC = Math.floor(Math.random() * 5)
    console.log(slotC)

    //Print to DOM
    document.querySelector('#slotC').innerText = slotC

    //If all slots have the same number and player wins min bet
    if (slotA === slotB && slotA === slotC) {

        walletBalance += 200 //= walletBalance + 200
        document.querySelector('#wallet').innerText = walletBalance
        document.querySelector('#winLose').innerText = 'YOU WIN!'
    } else {
        walletBalance -= 200
        document.querySelector('#wallet').innerText = walletBalance
        document.querySelector('#winLose').innerText = 'YOU LOSE!'
    }

    

}