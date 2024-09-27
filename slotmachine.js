let total = 1000;
document.querySelector("#betMoney").innerText = total;
let bet;
document.querySelector("#minBet").addEventListener("click", spin5);
function spin5() {
  bet = 5;
  let store = randomSpin();
  // possible outcome 4
  document.querySelector("#box_a").innerText = store;
  let store1 = randomSpin();
  //   possible outcome 3
  document.querySelector("#box_b").innerText = store1;
  let store2 = randomSpin();
  // possible outcome 2
  document.querySelector("#box_c").innerText = store2;
  if (store === store1 && store1 === store2) {
    document.querySelector("#bet").innerText = "You won!";
    total = total + bet * 10;
    document.querySelector("#betMoney").innerText = total;
  } else {
    document.querySelector("#bet").innerText = "Try again!";
    total = total - bet;
    document.querySelector("#betMoney").innerText = total;
  }
}
function randomSpin() {
  return Math.floor(Math.random() * 5);
}
document.querySelector("#maxBet").addEventListener("click", spin50);
function spin50() {
  bet = 10;
  let outcome = randomSpin();
  // possible outcome 4
  document.querySelector("#box_a").innerText = outcome;

  let outcome1 = randomSpin();
  //   possible outcome 3
  document.querySelector("#box_b").innerText = outcome1;
  let outcome2 = randomSpin();
  // possible outcome 2
  document.querySelector("#box_c").innerText = outcome2;
  if (outcome === outcome1 && outcome1 === outcome2) {
    document.querySelector("#bet").innerText = "You won!";
    total = total + bet * 10;
    document.querySelector("#betMoney").innerText = total;
  } else {
    document.querySelector("#bet").innerText = "Try again!";
    total = total - bet;
    document.querySelector("#betMoney").innerText = total;
  }
}
document.querySelector();

// finding a number between 0 and 4
// math.random()=0.5
// 0.5*5=2.5
// 2.5=2
// Math.random .ceil ()*5
