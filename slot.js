// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount done
// 4a  display slot machine
// 4b. Spin the slot machine
// 5. check is the player won
// 6. Award winnings / take bet
// 7. play again button


// https://www.youtube.com/watch?v=E3XxeE7NF30&t=335s watches this video from inspiration. only watched to the 15 min mark. wanted to code the rest out my self
const prompt = require("prompt-sync")();

// step one deposit

const deposit = () => {

    while(true){
        const depositAmount = prompt('Enter a deposit amount: ')
        const numDeposit = parseInt(depositAmount)

        if (isNaN(numDeposit) || numDeposit <= 0) {
            console.log('invalid deposit amount')
         } else {
            return numDeposit;
        }
    }
};

// Min and max bet 

let wager
const betAmount = () => {
    console.log('1 = max bet: 50')
    console.log('2 = min bet: 10')

    const minOrMax = prompt('Would you like to place a minimum bet or maximum bet?: [1 or 2] ')
    while(true){
        if (minOrMax == '1'){
            wager = 50
            break
        }else if (minOrMax == '2'){
            wager = 10
            break
        }else{
            console.log('Invalid Option')
            betAmount()
        }
    }
    depositAmount -= wager
        return wager
}

// display slot machine

const reels = [
    ['🍒', '🍋', '🍊'],
    ['🔔', '💰', '🍒'],
    ['🍋', '🍊', '🔔'],
];
// RNG generator for slotRandom 

const RNG = () => {
    return Math.floor(Math.random() * (2 - 0) + 0)

 }

 // Win conditions 

const winConditions = (key) => {
    if((key[0] == key[1]) && (key[0] == key[2])){
        return true
    } 
}
 
// Spin machine / randomize 

const slotRandom = () => {

    let win = false
   
    for(let o = 0; o < 3 ;o++){
        rowDisplay = ""
        key = []
        for(let i = 0; i < 3; i++){
            const outer = RNG()
            const inner = RNG()

            rowDisplay += reels[outer][inner] + " "
            key.push(reels[outer][inner])

        }
        console.log(rowDisplay)
        win |= winConditions(key)
    }
    if(win){
        console.log('YOU WIN!!!')
        depositAmount = wager * 2 + depositAmount
        let winnings = wager * 2
        console.log(depositAmount)
        console.log(`+ ${winnings}`)

    
    }else{
        console.log('YOU LOSE !')
        console.log(depositAmount)
        console.log(`- ${wager}`)
    }

   
}
const playAgain = () => {
    const answer = prompt('Would you like to play again? Y OR N ')
    return (answer.toUpperCase() == 'Y')
}
// help from mentor

let depositAmount = deposit()
do{
const wager = betAmount()
slotRandom()
} while(playAgain())


