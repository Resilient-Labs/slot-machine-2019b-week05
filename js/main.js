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
