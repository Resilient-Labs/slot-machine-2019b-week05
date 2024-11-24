# Slot Machine Game 

A simple browser-based slot machine game that allows users to place bets, spin the slots, and win or lose virtual currency. 


<img width="499" alt="Screenshot 2024-11-24 at 9 07 44 AM" src="https://github.com/user-attachments/assets/61ab1583-e67a-4670-be62-6c904b2dea8d">



## Features
- **Two Betting Options**: Choose between a **Minimum Bet** (`200`) and a **Maximum Bet** (`400`).
- **Randomized Slot Rolls**: Each slot spin generates a random number (`0` or `1`) for three slots.
- **Win or Lose Feedback**: The game provides feedback for wins or losses.
- **Virtual Wallet**: Tracks the player's remaining balance after each spin.


## Code Highlights
### Core Functions
- **`minBet()`**:
  - Deducts `200` from the wallet.
  - Spins the slots and checks for the win condition (all `1`s).
  - Updates the wallet and displays feedback.
  
- **`maxBet()`**:
  - Deducts `400` from the wallet.
  - Spins the slots and checks for the win condition (all `0`s).
  - Updates the wallet and displays feedback.


## Future Improvements
- Add more bet options and slot combinations.
- Implement animations for slot spins.
- Enhance the user interface with graphics or themes.
- Save progress using local storage.
