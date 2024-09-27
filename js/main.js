const result = ["Nike", "Addidas ", "New Balance ", "Puma ", "Reebok "];
const totalMoney = document.getElementById("totalMoney");
const betAmount = document.getElementById("betAmount");
const list = document.getElementById('list')
document.getElementById("betButton").addEventListener("click", slotGame);
totalMoney.innerText = 0;

function slotGame() {
  const amountBet = Number(betAmount.value);
  const slot1 = spinWheel();
  const slot2 = spinWheel();
  const slot3 = spinWheel();
  if (amountBet === 5 || amountBet === 50) {
    didYouWinOrNah(slot1, slot2, slot3);
    updateResults(slot1, slot2, slot3);
    updateMoney(slot1, slot2, slot3);
  } else {
    alert("Please enter a valid bet amount");
  }
}

function spinWheel() {
  let value = Math.ceil(Math.random() * 5);
  let slot;
  if (value <= 1) {
    slot = result[0];
  } else if (value <= 2) {
    slot = result[1];
  } else if (value <= 3) {
    slot = result[2];
  } else if (value <= 4) {
    slot = result[3];
  } else if (value <= 5) {
    slot = result[4];
  }
  return slot;
}

function didYouWinOrNah(slot1, slot2, slot3) {
  if (slot1 === slot2 && slot2 === slot3) {
    document.getElementById("winOrLose").innerText = "You won, Congrats!";
    return true;
  } else {
    document.getElementById("winOrLose").innerText = "You lost, that's tough!";
    return false;
  }
}

function updateResults(slot1, slot2, slot3) {
  list.innerHTML = ""
  let arr = [slot1,slot2,slot3]
  for(let i = 0; i < arr.length; i++){
    let newList = document.createElement('li')
    newList.innerText = arr[i]
    newList.classList.add('listgroup')
    list.appendChild(newList)
  }
}

function updateMoney(slot1, slot2, slot3) {
  const amountBet = Number(betAmount.value);
  if (amountBet === 5 || amountBet === 50) {
    console.log(amountBet);
    if (didYouWinOrNah(slot1, slot2, slot3)) {
      totalMoney.innerText = amountBet * 10 + Number(totalMoney.innerText);
    } else {
      totalMoney.innerText = Number(totalMoney.innerText) - amountBet;
    }
  }
}
