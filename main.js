// Initialize variables
let balance = 0;
const items = ['🍒', '🍋', '🍊'];

// Function to set the initial balance
function setInitialBalance() {
    const initialAmount = parseInt(document.getElementById('initialAmount').value);
    balance = initialAmount;
    document.getElementById('balance').innerText = balance;
    document.getElementById('message').innerText = "Balance set!";
}

// Function to spin the slot machine
function spin() {
    const bet = parseInt(document.getElementById('bet').value);

    // Check if the bet is valid
    if (bet < 1 || bet > 5 || bet > balance) {
        document.getElementById('message').innerText = "Invalid bet amount!";
        return;
    }

    // Deduct the bet amount from balance
    balance -= bet;

    // Spin the slots (randomly select items)
    const slot1 = items[Math.floor(Math.random() * items.length)];
    const slot2 = items[Math.floor(Math.random() * items.length)];
    const slot3 = items[Math.floor(Math.random() * items.length)];

    // Update the display of slots
    document.getElementById('slot1').innerText = slot1;
    document.getElementById('slot2').innerText = slot2;
    document.getElementById('slot3').innerText = slot3;

    // Check if the player won
    if (slot1 === slot2 && slot2 === slot3) {
        // Player wins 5 times the bet
        const winnings = bet * 5;
        balance += winnings;
        document.getElementById('message').innerText = `You won $${winnings}!`;
    } else {
        document.getElementById('message').innerText = `You lost $${bet}.`;
    }

    // Update the balance display
    document.getElementById('balance').innerText = balance;
}