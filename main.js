

document.getElementById("play").addEventListener("click", play )


let reelOne=document.getElementById('slotOne')
let reelTwo=document.getElementById('slotTwo')
let reelThree=document.getElementById('slotThree')
let bread = document.getElementById ('bread')
let playerMoney= 1000

function betFive(){console.log('YouBetFive')}
function betSix(){console.log("YouBetSix")}

function play(){
  console.log(Number(bread.innerText) , Number(document.querySelector('#money').value))
if(Number(bread.textContent) >= Number(document.querySelector('#money').value)){

let slotOne = Math.ceil( Math.random()*5 )
reelOne.innerText = slotOne
// console.log(slotOne)

let slotTwo = Math.ceil( Math.random()*5 )
reelTwo.innerText = slotTwo

let slotThree = Math.ceil( Math.random()*5 )
reelThree.innerText= slotThree

if (slotOne=== slotTwo && slotTwo===slotThree){
  console.log('win')
  winMoney ()
}

else {
  console.log('try again')
  loseMoney()
}
}
}
function winMoney(){
  playerMoney += document.getElementById
  ('money').value * 10
  bread.innerText= playerMoney
}
function loseMoney(){
  playerMoney -= document.getElementById
  ('money').value 
  bread.innerText= playerMoney
}

