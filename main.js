//Pseudo Code and Wireframes: - Build a simple slot machine with minimum 5 items per reel and 3 reels - users should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet
const slotItems = ["characterpic/Ich.png", "characterpic/Yoru.jpeg", "characterpic/Tosen.png", "characterpic/Rukia.png", "characterpic/Uno.png"]

let reelTwo;
let reelThree;
let playerMoney = 1000;
const minBet = 5;
const maxBet = 50;

function getRandomFruit(){
  const reelOneRandomNumber = Math.random(); //just use math.random to specify values 0-4;
  const reelOneIndex = Math.round(reelOneRandomNumber * (slotItems.length - 1)); //looking for index
  // const reelOneNum = Math.floor(reelOneIndex);
  return slotItems[reelOneIndex];
}

document.getElementById("minBet").addEventListener("click",runSlot)
  //add/substraction min amount to total
document.getElementById("maxBet").addEventListener("click",runSlot)

//run the random items
function runSlot(e){
   reelOne = getRandomFruit();
   reelTwo = getRandomFruit();
   reelThree = getRandomFruit();

   if(playerMoney <= 0){
     alert("Do You Have A Gambling Problem? You have lost all your money...Please Stop!")
     return;
   } else if(reelOne === reelTwo && reelTwo === reelThree) {
    document.getElementById("alert").innerHTML = "You won! Get more money!"
    winMoney(e.target.value);
  } else {
    loseMoney(e.target.value); //e.target.value - once you click oN something it takes the value of the thing you clicked on
    document.getElementById("alert").innerHTML = "You lost. Keep trying!"
  }
  document.getElementById("firstImage").src = reelOne;
  document.getElementById("secondImage").src = reelTwo;
  document.getElementById("thirdImage").src = reelThree;
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

