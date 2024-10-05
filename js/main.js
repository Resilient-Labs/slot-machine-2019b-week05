//I want to create a slot machine that displays a players starting funds of $1000 at the top. below that I want to display three slots.

// In each of these three slots, there are the numbers 1 thru 5. The numbers shouldn't display until the player has presed #play.

// the player has the option to bet either $5 or $50.

//The player needs to pick a bet amount of $5 or $50 and then press #play in order to trigger the function of random numbers.

// the result of each slot showing a number should pop up on the screen for the player to see. So Slots one, two and three should show a random number displayed to the player.

// If the player gets 3 matching numbers, then the player wins! This should display in the result area.

// If the player bet $5 and won, then they get +$100 added to playersFunds.

// If the player bet $50 and won, then they get +$500 added to playerFunds.

// If the player wins by matching the number 3, they get +2000 added to playerFunds this shall be activated using the id of bigThree.

//if the player does not match all three numbers in each slot, then they loose. -$5 from playerFunds if they bet $5, -$50 if they bet $50. "You Loose" should be displayed in the result area.

// I would like to set a cap at playerFunds dropping below $5. Let the player know that the balance is too low. This can be displayed in the result area.

// I would like to add some very simple CSS to make this look like a cute game. I would change the font as well to something that looks more fun.


let playerFunds = 1000;
const playersFundsElement = document.getElementById('playersFunds');
const resultElement = document.getElementById('result');
const slots =
 [document.getElementById('slotOne'), document.getElementById('slotTwo'), document.getElementById('slotThree')];

let currentBet = 0;

document.getElementById('betFive').onclick = () => {
    currentBet = 5;
};

document.getElementById('betFifty').onclick = () => {
    currentBet = 50;
};

document.getElementById('play').onclick = () => {
    if (currentBet === 0) {
        resultElement.textContent = "Please select a bet amount!";
        return;
    }

    if (playerFunds < currentBet) {
        resultElement.textContent = "Insufficient funds! Please bet lower.";
        return;
    }
    document.getElementById('betFive').onclick = () => {
        currentBet = 5;
        updateButtonStyles('betFive');
    };
    
    document.getElementById('betFifty').onclick = () => {
        currentBet = 50;
        updateButtonStyles('betFifty');
    };
    
    function updateButtonStyles(activeButtonId) {
        const buttons = [document.getElementById('betFive'), document.getElementById('betFifty')];
        buttons.forEach(button => {
            button.classList.remove('active');
        });
    
        document.getElementById(activeButtonId).classList.add('active');
    }

    playerFunds -= currentBet;
    playersFundsElement.textContent = `$${playerFunds}`;

    const randomNumbers = [getRandomNumber(), getRandomNumber(), getRandomNumber()];
    slots.forEach((slot, index) => {
        slot.textContent = randomNumbers[index];
    });

    checkResult(randomNumbers);
};

function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1; 
}

function checkResult(numbers) {
    const firstNumber = numbers[0];
    const isWin = numbers.every(num => num === firstNumber);

    if (isWin) {
        if (firstNumber === 3) {
            playerFunds += 2000;
            resultElement.textContent = "Jackpot! You win $2000!";
        } else if (currentBet === 5) {
            playerFunds += 100;
            resultElement.textContent = "You win $100!";
        } else if (currentBet === 50) {
            playerFunds += 500;
            resultElement.textContent = "You win $500!";
        }
    } else {
        resultElement.textContent = "You lose!";
    }

    playersFundsElement.textContent = `Current Balance: $${playerFunds}`;

    if (playerFunds < 5) {
        resultElement.textContent = "Your balance is too low!";
        playerFunds = 0;
    }
}
