// slot = document.querySelectorAll(".reel");

// slot.forEach((el, i) => {
//   // Add a class
//   el.classList.add('my-class');
//   console.log(i, ': ', el);
// });

// let startingMoney = 1000;
// console.log(startingMoney)
// const wagerButtons = document.getElementById('wagerButtons');
// const handleButtonClick = function(event) {
//   const buttonName = event.target.name;
//   console.log('0', buttonName);
//   if (buttonName === 'min') {
//     startingMoney -= 5
//     console.log('1', startingMoney);
//   } else if (buttonName === 'max') {
//     startingMoney -= 50
//     console.log('2', startingMoney);
//   }
// }
// wagerButtons.addEventListener('click', handleButtonClick)

document.querySelector("#min").onclick=balance;
document.querySelector("#max").onclick=balance;
let playMoney = 1000
function spin(){
  let randomImage=Math.random()*5;
  let imageOption
  if(randomImage<=1){
    imageOption = 'url("img/watermelon.png")'
  }
  else if (randomImage<=2){
    imageOption = 'url("img/bell.png")'
  }
  else if (randomImage<=3){
    imageOption = 'url("img/7.png")'
  }
  else if (randomImage<=4){
    imageOption = 'url("img/cherry.png")'
  }else{
    imageOption = 'url("img/money.png")'
  }
  return imageOption
}
function compare(){
  let reel1 = spin()
  let reel2 = spin()
  let reel3 = spin()
  let option
  if(reel1===reel2 && reel1===reel3){
    option = 'BIG WINNER'
  }else{
    option = 'You lost, try again'
  }
  document.querySelector("#result").innerHTML=option
  document.querySelector("#spin1").style.backgroundImage=reel1
  document.querySelector("#spin2").style.backgroundImage=reel2
  document.querySelector("#spin3").style.backgroundImage=reel3
  return option
}
function balance(){
  let balanceOfReel = compare()
  let userBet=parseFloat(this.getAttribute("data-bet"))
  if(playMoney < 5){
    return;
  }
  if(balanceOfReel==='BIG WINNER'){
    playMoney=playMoney+(userBet*10)
  }else if(balanceOfReel==='You lost, try again'){
    playMoney=playMoney-(userBet)
  }
  document.querySelector("#money").innerHTML=`$${playMoney}`
}

// you can return a function in another function by assigning a variable to the OG function name
// buttons - set to functions and add an onclick method
