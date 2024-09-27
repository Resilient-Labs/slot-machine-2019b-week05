let amountInBank = 1000

// const slotReturns = Array(9)
const slotReturns = ['slot-diamond.png', 'slot-lemon.png', 'slot-watermelon.png', 'slot-heart.png', 'slot-7.png', 'slot-bell.png', 'slot-omega.png', 'slot-cherry.png', 'slot-bar.png']


//make a Bid

document.querySelector('#minBid').addEventListener('click', minBidReturns)
document.querySelector('#maxBid').addEventListener('click', maxBidReturns)

// Get Random Img from array x3 

function minBidReturns(){
    let firstSlot = slotReturns[Math.floor(Math.random() * slotReturns.length)]
    // Make First Slot visible 
    let reelOne = document.querySelector('.slotOne')
    reelOne.src = firstSlot
 
    let secondSlot = slotReturns[Math.floor(Math.random() * slotReturns.length)]
    // Make Secon Slot visible 
    let reelTwo = document.querySelector('.slotTwo')
    reelTwo.src = secondSlot

    let thirdSlot = slotReturns[Math.floor(Math.random() * slotReturns.length)]
    // Make Third  Slot visible 
    let reelThree = document.querySelector('.slotThree')
    reelThree.src = thirdSlot

    // Does image match the other two images?
    if (firstSlot === slotReturns[4] && firstSlot === secondSlot && secondSlot === thirdSlot){
        document.querySelector('h3').innerText = 'JACKPOT!'
        amountInBank += 500
        document.querySelector('span').innerText = `$${amountInBank}`
        //add to amount in bank

    } else if (firstSlot === secondSlot && secondSlot === thirdSlot){
        //display: Jackpot!
        document.querySelector('h3').innerText = 'Winner!'

        //add to amount in bank
        amountInBank += 50
        document.querySelector('span').innerText = `$${amountInBank}`

    } else {
        // display: try again
        document.querySelector('h3').innerText = 'Better Luck Next Time!'
        
        amountInBank -= 5 

        if (amountInBank === 0 || amountInBank < 0){
            document.querySelector('span').innerText = BANKRUPT
            document.querySelector('h3').innerText = 'BANKRUPT!'
            let amountInBank = 1000;
        } else {
            document.querySelector('span').innerText = `$${amountInBank}`
        }
    }
}

function maxBidReturns(){
    let firstSlot = slotReturns[Math.floor(Math.random() * slotReturns.length)]
    // Make First Slot visible 
    let reelOne = document.querySelector('.slotOne')
    reelOne.src = firstSlot
 
    let secondSlot = slotReturns[Math.floor(Math.random() * slotReturns.length)]
    // Make Secon Slot visible 
    let reelTwo = document.querySelector('.slotTwo')
    reelTwo.src = secondSlot

    let thirdSlot = slotReturns[Math.floor(Math.random() * slotReturns.length)]
    // Make Third  Slot visible 
    let reelThree = document.querySelector('.slotThree')
    reelThree.src = thirdSlot
    // Does image match the other two images?
    if (firstSlot === slotReturns[4] && firstSlot === secondSlot && secondSlot === thirdSlot){
        document.querySelector('h3').innerText = 'JACKPOT!'
        amountInBank += 5000

        //add to amount in bank

    } else if (firstSlot === secondSlot && secondSlot=== thirdSlot){
        //display: Jackpot!
        document.querySelector('h3').innerText = 'Winner!'

        //add to amount in bank
        amountInBank += 500

    } else {
        // display: try again
        document.querySelector('h3').innerText = 'Better Luck Next Time!'
        
        amountInBank -= 50 

        if (amountInBank === 0 || amountInBank < 0){
            document.querySelector('span').innerText = 'Ø'
            document.querySelector('h3').innerText = 'BANKRUPT!'
            amountInBank = 1000;
        } else {
            document.querySelector('span').innerText = `$${amountInBank}`
        }

        

    }

    
}

