document.getElementById('spinButton').onclick = function() {
    
    const symbols = ['🍒', '🍋', '🍉', '🍇', '🔔', '⭐', '🍊'];

    
    function getRandomSymbol() {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    // Set random symbols for each slot
    const slot1 = getRandomSymbol();
    const slot2 = getRandomSymbol();
    const slot3 = getRandomSymbol();

    // Update the slots with the new symbols
    document.getElementById('slot1').innerText = slot1;
    document.getElementById('slot2').innerText = slot2;
    document.getElementById('slot3').innerText = slot3;

    // Check if all three slots match
    const resultDiv = document.getElementById('result');
    if (slot1 === slot2 && slot2 === slot3) {
        resultDiv.innerText = '🎉 You Win! 🎉';
    } else {
        resultDiv.innerText = 'Try Again!';
    }
};
