//Array of photos
const imgs = ["images/blackpanther.jpg", "images/captainamerica.jpg", "images/captainmarvel.jpg", "images/hulk.jpg", "images/ironman.jpg", "images/spiderman.jpg", "images/spiderwoman.jpg", "images/thor.jpg", "venom.jpg", "images/wonderwoman.jpg"];
//Node list similar to array of slots
const slots = document.querySelectorAll('.slot');
const bets = document.querySelectorAll('.bet');
//individual slots
const one = document.querySelector('.numOne');
const two = document.querySelector('.numTwo');
const three = document.querySelector('.numThree');
//Variable to pick random photo from array of imgs
let randomImage = imgs[Math.floor(Math.random() * imgs.length)];
//Math.floor()-- rounds down
//Math.random() * imgs.length -- math random (0-1) * length of imgs array to produce # between 0 and length of img
//Math.floor(Math.random() * imgs.length) -- produce the random index (indices) for imgs array
let count = 0;
let wallet = 1000;
let bet;
let intervalOne;
let intervalTwo;
let intervalThree;
//Add starting image to slots
slots.forEach(el => {
  el.src = randomImage
  //placing a random image in each src
});
document.querySelector(".wallet").innerHTML = wallet
bets.forEach(el => {
  bet = el.attributes[1].nodeValue;
  el.addEventListener('click', () =>{
    wallet -= el.attributes[1].nodeValue;
    document.querySelector(".wallet").innerHTML = wallet
  });

});

 function startReel(){
  intervalOne = setInterval(()=>{
    one.src = imgs[Math.floor(Math.random() * imgs.length)];
  }, 150);
  intervalTwo = setInterval(()=>{
  two.src = imgs[Math.floor(Math.random() * imgs.length)];
}, 150);
  intervalThree = setInterval(()=>{
  three.src = imgs[Math.floor(Math.random() * imgs.length)];
}, 150);
}
  //setInterval()--takes in two parameters, first is a function, second is a time in milliseconds. It runs the function for the time, repeatedly.

  console.log(count)
function stopOne(){
  clearInterval(intervalOne);
  count ++;
  results();
}
function stopTwo(){
  clearInterval(intervalTwo);
  count ++;
  results();
}
function stopThree(){
  clearInterval(intervalThree);
  count ++;
  results();
}

function results(){
  if (count === 3){
    if (one.src === two.src && one.src === three.src) {
      wallet += (2 * bet);
      alert('You won :)');
      document.querySelector(".wallet").innerHTML = wallet;

    }else {
      alert('You lost :()');
      document.querySelector(".wallet").innerHTML = wallet;

    }
  }
}
//Start game and rotate images
document.querySelector('.button').addEventListener('click', ()=>{
    count = 0;
  startReel()


});
document.querySelector(".numOne").onclick = function (){
  stopOne()
}
document.querySelector(".numTwo").onclick = function (){
  stopTwo()
}
document.querySelector(".numThree").onclick = function (){
  stopThree()
}
