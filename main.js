document.getElementById("spinButton").addEventListener("click", function() {
    const betAmount = Number(document.getElementById('betAmount').value);
    const totalAmount = Number(document.getElementById('totalAmount').value);

    // Check if bet is within the limit
    if (betAmount > totalAmount) {
        alert("Not Enough Money!");
        return;
    }

    // Reel items
    const reelItems = ['+', '-', '*', '/', '%'];

    // Function to spin and randomize reel items
    function spinReel() {
        return reelItems[Math.floor(Math.random() * reelItems.length)];
    }


    
    // Update the DOM to display the results in the first item of each reel
    document.querySelector('.reel1 .item').innerText = reel1;
    document.querySelector('.reel2 .item').innerText = reel2;
    document.querySelector('.reel3 .item').innerText = reel3;

    // Check for win condition (if all three reels match)
    if (reel1 === reel2 && reel2 === reel3) {
        const winAmount = betAmount * 2; 
        document.getElementById('totalAmount').value = totalAmount + winAmount;
        alert("A Winner is YOU! Your total amount is "  + (totalAmount + winAmount));
    } else {
        document.getElementById('totalAmount').value = totalAmount - betAmount;
        alert("Loser! Your new total amount is " + (totalAmount - betAmount));
    }
});
