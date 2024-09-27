// min $10 - Win add $50
// max $100 - Win add $500
// Starting amount: $1000

/* 
- Create variables 
- Create a variables for the total and set it to a default number and display it
- Randomize the 5 items for reels 
- Set a click event listener to the min and max buttons 
- Create a variable to hold all the images
- Create a function that checks if all the images match, if that's the case display "Winner" result and add to total winnings
- Add a edge case for when the user loses all their money- If user loses all money do't allow them to bet anymore
- (EXTRA)Maybe add an option to "loan" more money ($100) when user runs out of money
- Update the total winnings with the 

- Randomize three options 

*/

// Declare and display default total amount
let total = 1000;
document.querySelector("#totalWinnings").innerText = total;

// Add event listeners to min and max buttons
document.querySelector("#minBet").addEventListener("click", addMin);
document.querySelector("#maxBet").addEventListener("click", addMax);

let itemOne;
let itemTwo;
let itemThree;

function checkChoices() {
  if (itemOne === itemTwo && itemTwo == itemThree) {
    return true;
  } else {
    return false;
  }
}

function setSlot(item, slotClass) {
  item = Math.floor(Math.random() * 5);
  const slotImgs = document.querySelectorAll(`${slotClass} img`);
  slotImgs.forEach((element) => element.classList.add("hidden"));
  slotImgs[item].classList.remove("hidden");
  return item;
}

function spinWheel(win, lose) {
  itemOne = setSlot(Math.floor(Math.random() * 5), ".slotOne");
  itemTwo = setSlot(Math.floor(Math.random() * 5), ".slotTwo");
  itemThree = setSlot(Math.floor(Math.random() * 5), ".slotThree");

  //   setSlot(itemOne, "slotOne");
  //   setSlot(itemTwo, "slotTwo");
  //   setSlot(itemThree, "slotThree");

  if (checkChoices() === true) {
    total += win;
    document.querySelector("#totalWinnings").innerText = total;
    document.querySelector("#result").innerText = "Winner!";
  } else if (total - lose <= 0) {
    total = 0;
    disableBetButtons();
  } else {
    total -= lose;
    document.querySelector("#totalWinnings").innerText = total;
    document.querySelector("#result").innerText = "Loser";
  }
}

function addMin() {
  spinWheel(10 * 5, 10);
}
function addMax() {
  spinWheel(100 * 10, 100);
}

function disableBetButtons() {
  document.querySelector("#minBet").disabled = true;
  document.querySelector("#maxBet").disabled = true;
}
