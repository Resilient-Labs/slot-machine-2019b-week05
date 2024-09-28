// Slot machine options for each reel (using an Array)
const reelOptions = ['★', '❤︎', '✿', '♱', '⟡']; // I found these characters on google :)

// Function to generate a random option from reelOptions
function getRandomReelValue() {
    const randomIndex = Math.floor(Math.random() * reelOptions.length);
    const reelValue = reelOptions[randomIndex];
        console.log(`getRandomReelValue ${reelValue}`); 
    return reelValue;
}


let balance = 1000;
function newBalance() {
    document.getElementById('balance').innerText = `balance: ${balance}`;
}



// Function to spin the reels + log balance
function spin(bet) {
        console.log(`bets: ${bet}`); // logs high or low bets
        let betAmount = 0;

        if (bet === 'low') {
            betAmount = 5;
        } else if (bet === 'high') {
            betAmount = 100;
        }

        balance -= betAmount;
        newBalance();
        console.log(`betPlaced: ${bet}, amount: ${betAmount}`);


    // Get random values for each reel
    const reel1Value = getRandomReelValue();
    const reel2Value = getRandomReelValue();
    const reel3Value = getRandomReelValue();

    // Display the results in the DOM
    document.getElementById('reel1').innerText = reel1Value;
    document.getElementById('reel2').innerText = reel2Value;
    document.getElementById('reel3').innerText = reel3Value;
        console.log(`reel1: ${reel1Value}, reel2: ${reel2Value}, reel3: ${reel3Value}`);

    // Check if the player wins (if all reels match)
    if (reel1Value === reel2Value && reel2Value === reel3Value) {
        console.log('MATCHED!');
        const winAmount = betAmount * 30;
        balance += winAmount;
        newBalance();
        console.log(`win Amount: $${winAmount}, new Balance: $${balance}`);
        displayResult('YOU WIN!');
    } else {
        if (bet === 'low') {
            displayResult('LOSER!');
        console.log('NOT A MATCH')
        } else {
            displayResult('BETTER LUCK NEXT TIME!');
        }
    }
}

// Function to display the result of the spin

function displayResult(message) {
    document.getElementById('result').innerText = message;
    console.log(`result: ${message}`);
}