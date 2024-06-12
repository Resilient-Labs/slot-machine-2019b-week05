 //user clicks button  random number shows in each slot between one and five 
document.getElementById("play").addEventListener("click", play );

let reelOne = document.getElementById("slotOne")
let reelTwo = document.getElementById("slotTwo")
let reelThree = document.getElementById("slotThree")
let bread = document.getElementById("bread")
let playMoney = 1000
// function betFive(){console.log("YouBetFive")}

// let maxBetBtn = document.getElementById("maxBet");
// maxBetBtn.addEventListener("click", betSix );

// function betSix(){console.log("YouBetSix")}
function betFive(){console.log('YouBetFive')}
function betSix(){console.log("YouBetSix")}

function play (){ 
  console.log(Number(bread.textContent), Number(document.querySelector('#money').value))
  if (Number(bread.textContent) >= Number(document.querySelector('#money').value)){
  let slotOne = Math.ceil( Math.random()*5 )
  let slotTwo = Math.ceil( Math.random()*5 )
  let slotThree = Math.ceil( Math.random()*5 )
 
  

  reelOne.innerText = slotOne


  reelTwo.innerText = slotTwo
 

  reelThree.innerText = slotThree
  
if (slotOne === slotTwo && slotTwo === slotThree){
  console.log("win")
  winMoney()
}
else{
  console.log("try again")
  loseMoney()
}
}
}
function winMoney (){
   playMoney += document.getElementById("money").value * 10
  bread.innerText = playMoney
}

function loseMoney (){
  playMoney -= document.getElementById("money").value 
  bread.innerText = playMoney
}

