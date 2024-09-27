//Worked on this with Gus
const reelLeft = document.querySelector('.reelLeft');
const reelMid = document.querySelector('.reelMid');
const reelRight = document.querySelector('.reelRight');
const winner = document.querySelector('.winText');
const loser = document.querySelector('.loseText');

let slotPics = ['Images/apple.png', 'Images/cherry.png', 'Images/grapes.png', 'Images/lemon.png', 'Images/seven.png'];

let balance = document.getElementById('balance') //= "$1000"
let playButtons = document.getElementsByClassName('play')
playButtons = Array.from(playButtons)

playButtons.forEach((playButton) => {
  playButton.addEventListener('click', play);
});


let balanceNow = Number(balance.textContent.split(" ")[1])
let rollImages = document.getElementsByClassName('pics')
let bets = 0


balance.textContent = 1000;
console.log(balance)

function play(e){

  for (let i=0; i < rollImages.length; i++){
    let slots = rollImages[i]
    let reelPic = Math.floor(Math.random()* 5)
    slots.src = slotPics[reelPic]

  }
  if(e.target.innerHTML == playButtons[0].innerHTML){
    if(reelLeft.innerHTML === reelMid.innerHTML && reelLeft.innerHTML === reelRight.innerHTML){
      balance.innerHTML = parseInt(balance.innerHTML) + 50;
      document.querySelector('.winText').style.display = "block"
      document.querySelector('.winText').innerHTML = "Congrats! You've done it!"
      document.querySelector('.loseText').style.display = "none"
    } else{
      balance.innerHTML -= 5;
      console.log(balance)
      if(parseInt(balance.innerHTML) == 0 || parseInt(balance.innerHTML) < 0){
        document.querySelector('.loseText').innerHTML = "You're done"
      }else{
        document.querySelector('.loseText').style.display = "block"
        document.querySelector('.loseText').innerHTML = "Oh...you'll be in debt soon."
        document.querySelector('.winText').style.display = "none"
      }
    }
  }
  if(e.target.innerHTML == playButtons[1].innerHTML){
    //  balance.innerHTML -= 5;
    if(reelLeft.innerHTML === reelMid.innerHTML && reelLeft.innerHTML === reelRight.innerHTML){
      balance.innerHTML = parseInt(balance.innerHTML) + 500;
      document.querySelector('.winText').style.display = "block"
      document.querySelector('.winText').innerHTML = "Congrats! You've done it!"
      document.querySelector('.loseText').style.display = "none"
    } else{
      balance.innerHTML -= 50;
      console.log(balance)
      if(parseInt(balance.innerHTML) == 0 || parseInt(balance.innerHTML) < 0){
        document.querySelector('.loseText').innerHTML = "You're done"
      }else{
        document.querySelector('.loseText').style.display = "block"
        document.querySelector('.loseText').innerHTML = "Oh...you'll be in debt soon."
        document.querySelector('.winText').style.display = "none"
      }
    }
  }

}

/*function money(balance) {
if(document.getElementById('balance') <= parseInt(0)){
console.log("stop!!")
}
}
playButtons.addEventListener('click', money) */

/*function noBalance() {
if (balance == 0){
document.querySelector('.msg').innerHTML="You're broke boi now"
}
}
/*  if
(balance.innerHTML = 0)
document.querySelector('.winText').style.display = "none"
document.querySelector('.winText').style.display = "none"
document.querySelector('msg').innerHTML = "You're broke ~"*/
