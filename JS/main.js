const reelOne = document.getElementById("reelLeft")
const reelTwo = document.getElementById("reelCenter")
const reelThree = document.getElementById("reelRight")

let images = ["CSS/piggybank.png", "CSS/ladybug.png","CSS/horseshoe.png", "CSS/fourleaf.png", "CSS/unicorn.png"]

let button= document.querySelectorAll('.button');         //selecting everything in document that has the button class
button= Array.from(button);                              //Turning the buttons into array and putting it into the button variable
let currentMoney = document.getElementById('amountLeft')

button.forEach((start) =>{
  start.addEventListener("click",(e)=>{
  let displayRandom1 = Math.floor(Math.random()*images.length);
  let displayRandom2 = Math.floor(Math.random()*images.length);
  let displayRandom3 = Math.floor(Math.random()*images.length);
  randomizeImages(displayRandom1, displayRandom2, displayRandom3);
  let bet= e.target.getAttribute("data-id") //event targetting get the attribute of "data-id"(w/e is being clicked on, which should be either bet 5 or bet 50)
  let newMoney= parseInt(currentMoney.innerHTML);
  calculations(displayRandom1, displayRandom2, displayRandom3, bet);
  })
})

function randomizeImages(displayRandom1, displayRandom2, displayRandom3){
  document.getElementById("reelPicLeft").src = images[displayRandom1]
  document.getElementById("reelPicCenter").src = images[displayRandom2]
  document.getElementById("reelPicRight").src = images[displayRandom3]
}

 function calculations(displayRandom1, displayRandom2, displayRandom3, bet){
    let newMoney= parseInt(currentMoney.innerHTML);
    if (displayRandom1 === displayRandom2 && displayRandom1 === displayRandom3 && displayRandom2 === displayRandom3){
    newMoney += bet * 10
    document.getElementById('congratsWin').innerHTML="JACKPOT!"
    document.getElementById('congratsWin').style.display="block";
    document.getElementById('amountLeft').innerHTML= newMoney //displays new winning money amnt into html
 }else if(newMoney== 0){
   document.getElementById('amountLeft').innerHTML="Sorry, you're out of money."
  }else{
    document.getElementById('congratsWin').style.display="none";
    let newMoney= parseInt(currentMoney.innerHTML);
    newMoney -= bet;
    document.getElementById('amountLeft').innerHTML= newMoney
  }
}
