//allow for user to pick wager of $50 or $500
//when user wagers, show one of five random images in each slot
//if all images match, award user 5x what they bet
//if not, take the wager from their current total
//if not enough money in current total for wager, do not let them wager

document.querySelector('#fifty').addEventListener('click', wagerFiftyv2)
document.querySelector('#fiveHundred').addEventListener('click', wagerFiveHundredv2)


function wagerFiftyv2() {
    wager(50)
}

function wagerFiveHundredv2() {
    wager(500)
}

//give user amount of money to start with
let currentTotal = 10000
let totalDisplay = document.querySelector('span')
totalDisplay.innerText = currentTotal


function wagerFifty() {
    //remove potential error message
    document.querySelector('p').innerText = ''
    //make sure user has enough money to gamble
    if(currentTotal >= 50) {
        const slot1Result = slotMachineDisplay()
        const slot2Result = slotMachineDisplay()
        const slot3Result = slotMachineDisplay()
        document.querySelector('#slot1').innerText = slot1Result
        document.querySelector('#slot2').innerText = slot2Result
        document.querySelector('#slot3').innerText = slot3Result
        
        //if all slots are the same, award the user with 5x the wager amount
        //if slots are not the same, take wager from user
        if(slot1Result === slot2Result && slot1Result === slot3Result) {
            console.log('You Win!')
            currentTotal += 250
            document.querySelector('p').innerText = 'You Win!'
            totalDisplay.innerText = currentTotal
        } else {
            console.log('You Lose!')
            currentTotal -= 50
            document.querySelector('p').innerText = 'You Lose!'
            totalDisplay.innerText = currentTotal
        }  
    }else {
        document.querySelector('p').innerText = 'NOT ENOUGH MONEY'
    }
}

function wagerFiveHundred() {
    //remove potential error message
    document.querySelector('p').innerText = ''
    //make sure user has enough money to gamble
    if(currentTotal >= 500) {
        const slot1Result = slotMachineDisplay()
        const slot2Result = slotMachineDisplay()
        const slot3Result = slotMachineDisplay() 
        document.querySelector('#slot1').innerText = slot1Result
        document.querySelector('#slot2').innerText = slot2Result
        document.querySelector('#slot3').innerText = slot3Result
        if(slot1Result === slot2Result && slot1Result === slot3Result) {
            console.log('You Win!')
            currentTotal += 2500
            document.querySelector('p').innerText = 'You Win!'
            totalDisplay.innerText = currentTotal
        }else {
            console.log('You Lose!')
            currentTotal -= 500
            document.querySelector('p').innerText = 'You Lose!'
            totalDisplay.innerText = currentTotal
        }  
    }else {
        document.querySelector('p').innerText = 'NOT ENOUGH MONEY'
    }
}

function slotMachineDisplay() {
    const slotArr = 
    ['css/assets/snoopyDance.webp', 
    'css/assets/snoopyLeafPile.gif', 
    'css/assets/christmasSnoopy.gif', 
    'css/assets/snoopyLaugh.webp', 
    'css/assets/snoopySnooze.gif']
    //generate random value for each slot in slot machine
    slotResult = slotArr[Math.floor(Math.random() * 4)]
    console.log(slotResult)
    return slotResult
}



function wager(wagerAmount) {
 //remove potential error message
 document.querySelector('p').innerText = ''
 //make sure user has enough money to gamble
 if(currentTotal >= wagerAmount) {
     const slot1Result = slotMachineDisplay()
     const slot2Result = slotMachineDisplay()
     const slot3Result = slotMachineDisplay()
     document.querySelector('#slot1').innerHTML = `<img src="${slot1Result}">`
     document.querySelector('#slot2').innerHTML = `<img src="${slot2Result}">`
     document.querySelector('#slot3').innerHTML = `<img src="${slot3Result}">`
     
     //if all slots are the same, award the user with 5x the wager amount
     //if slots are not the same, take wager from user
     if(slot1Result === slot2Result && slot1Result === slot3Result) {
         console.log('You Win!')
         currentTotal += wagerAmount * 5
         document.querySelector('p').innerText = 'You Win!'
         totalDisplay.innerText = currentTotal
     } else {
         console.log('You Lose!')
         currentTotal -= wagerAmount
         document.querySelector('p').innerText = 'You Lose!'
         totalDisplay.innerText = currentTotal
     }  
 }else {
     document.querySelector('p').innerText = 'NOT ENOUGH MONEY'
 }
}
