//Pseudo Code and Wireframes: - Build a simple slot machine with minimum 5 items per reel and 3 reels - users should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet

const slotItems = ["images/minecraft-apple.png", "images/diamond-sword.png", "images/minecraft-pig.png", "images/steve-minecraft.png", "images/minecraft-emerald.png"]
let reel1;
let reel2;
let reel3;
let playerMoney = 1000;
const minBet = 5;
const maxBet = 50;

function getRandomFruit(){
  const reel1RandomNumber = Math.random(); //just use math.random to specify values 0-4;
  const reel1Index = Math.round(reel1RandomNumber * (slotItems.length - 1)); //looking for index
  // const reel1Num = Math.floor(reel1Index);
  return slotItems[reel1Index];
}

document.getElementById("minBet").addEventListener("click",runSlot)
  //add/substraction min amount to total
document.getElementById("maxBet").addEventListener("click",runSlot)

//run the random items
function runSlot(e){
   reel1 = getRandomFruit();
   reel2 = getRandomFruit();
   reel3 = getRandomFruit();

   if(playerMoney <= 0){
     alert("GAMBLING PROBLEM. YOUR MONEY BALANCE IS EITHER NEGATIVE OR AT 0. STOP!")
     return;
   } else if(reel1 === reel2 && reel2 === reel3) {
    document.getElementById("alert").innerHTML = "You won! Get more money!"
    winMoney(e.target.value);
  } else {
    loseMoney(e.target.value); //e.target.value - once you click oN something it takes the value of the thing you clicked on
    document.getElementById("alert").innerHTML = "You lost. Keep trying!"
  }
  document.getElementById("firstImage").src = reel1;
  document.getElementById("secondImage").src = reel2;
  document.getElementById("thirdImage").src = reel3;
}


function winMoney(amount){ // THIS FUNCTION HAPPENS WHEN THE USER WINS MONEY
  playerMoney = playerMoney + (amount * 10);
  // updatePlayerMoney(playerMoney);
  document.getElementById("money").innerHTML = playerMoney; //UPDATE PLAYER MONEY
  console.log(amount)
}

function loseMoney(amount){ //THIS FUNCTION HAPPENS WHEN THE USER LOSES
  playerMoney = playerMoney - amount;
  // updatePlayerMoney(playerMoney);
  document.getElementById("money").innerHTML = playerMoney;
  console.log(amount)
}

// function updatePlayerMoney(amount){
//   console.log(playerMoney);
// }

//substract the playermoney put it into the pool
