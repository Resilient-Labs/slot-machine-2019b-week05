// Start the game with $1000
let money = 1000;
let displayMoneyLeft = document.querySelector("#moneyLeft")
displayMoneyLeft.innerText = money

// Display result to the user
let result = document.querySelector("#result")

let items = ["./img/apple.webp", "./img/strawberry.webp", "./img/lemon.webp", "./img/watermelon.png", "./img/cherry.webp"]

// When a $50 bet is placed/clicked
document.querySelector("#betFifty").addEventListener('click', () => {

    // Check if the game is over. Game is over when user is out of money
    if (money <= 0) {
        result.innerText = "Out Of Money"
        return
    }

    // Call assignSRC which takes care of assigning a random src to the img
    assignSRC();
    
    // Check if the user won
    if(matchSRC()) {
        // IF they won add 50 to the total amount of money
        money += 300;
        // Display
        displayMoneyLeft.innerText = money
        //Tell the user they won
        result.innerText = "YOU WIN!!"

    }else {
        // If they lost, take away $50
        money -= 50
        displayMoneyLeft.innerText = money
        //Tell the user they lost
        result.innerText = "Sorry, try again"
    }
})

// When a $100 bet is placed/clicked
document.querySelector("#betOneHundred").addEventListener('click', () => {

    // Check if the game is over. Game is over when user is out of money
    if (money <= 0) {
        result.innerText = "Out Of Money"
         return
    }

    // Call assignSRC which takes care of assigning a random src to the img
    assignSRC();

    // Check if the user won
    if(matchSRC()) {
        // IF they won add 50 to the total amount of money
        money += 500;
        // Display
        displayMoneyLeft.innerText = money
        //Tell the user they won
        result.innerText = "YOU WIN!!"
    }else {
        // If they lost, take away $50
        money -= 100
        displayMoneyLeft.innerText = money
        //Tell the user they lost
        result.innerText = "Sorry, try again"
    }
})

// When a YOLO bet is placed/clicked
document.querySelector("#yolo").addEventListener('click', () => {

    // Check if the game is over. Game is over when user is out of money
    if (money <= 0) {
        result.innerText = "Out Of Money"
        return
      }
    
    // Call assignSRC which takes care of assigning a random src to the img
     assignSRC();
    
     // Check if the user won
     if(matchSRC()) {
            // IF they won add 50 to the total amount of money
            money += 5000;
            // Display
            displayMoneyLeft.innerText = money
            //Tell the user they won
            result.innerText = "YOU WIN!!"
     }else {
            // If they lost, take away $50
            money = 0; // if they lose a YOLO, they lose it all
            displayMoneyLeft.innerText = money
            //Tell the user they lost
            result.innerText = "Sorry, try again"
        }
})

// Function get's a random value from the pictures array
function pickRandom(arr) {
    let value = [Math.floor(Math.random()*items.length)]
    return value;
}

// Function assigns a random src from the items array to the img
function assignSRC() {

    let reelOneRandom = pickRandom(items)
    document.querySelector("#reelOne").src = items[reelOneRandom]

    let reelTwoRandom = pickRandom(items)
    document.querySelector("#reelTwo").src = items[reelTwoRandom]

    let reelThreeRandom = pickRandom(items)
    document.querySelector("#reelThree").src = items[reelThreeRandom]
}

// Funciton get's the value of the src and checks to see if they match
function matchSRC() {

    let reelOneSRC = document.querySelector("#reelOne").src;
    let reelTwoSRC = document.querySelector("#reelTwo").src;
    let reelThreeSRC = document.querySelector("#reelThree").src;

    if (reelOneSRC === reelTwoSRC && reelOneSRC === reelThreeSRC) {
        return true;
    }else {
        return false;
    }
}