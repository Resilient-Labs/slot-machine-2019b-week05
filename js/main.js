const outcome = document.querySelector('#outcome')
const total = document.querySelector('#total')
const min = document.querySelector('#min')
const max = document.querySelector('#max')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')

let money = 1000;
let betOne = 5;
let betTwo = 50;
let betTotal = 0;



total.innerText = '$' + money

function randomChoice(){
    let random = Math.random()
    if(random <= .2){
      return 'img/mars2.png';
    }else if(random <= .4){
      return 'img/mer2.png';
    }else if(random <= .6){
      return 'img/mini2.png';
    }else if(random <= .8){
      return 'img/moon2.png';
    }else{
      return 'img/venus2.png';
    }
}
console.log(randomChoice())

function minBet() {
  if(betOne <= money){
    img1.src = randomChoice()
    img2.src = randomChoice()
    img3.src = randomChoice()
    min.innerText = 'You bet ' + '$' + betOne
    outcome.innerText = winLoseMin()
    total.innerText = '$' + money
  } else{
    alert('Game Over')
  }
}
function maxBet() {
  if(betTwo <= money){
    img1.src = randomChoice()
    img2.src = randomChoice()
    img3.src= randomChoice()
    max.innerText = 'You bet ' + '$' + betTwo
    outcome.innerText = winLoseMax()
    total.innerText = '$' + money
  } else {
    alert('Game Over')
  }

}
document.querySelector('#minBet').addEventListener('click', minBet)
document.querySelector('#maxBet').addEventListener('click', maxBet)

function winLoseMin() {
  if(img1.src === img2.src && img2.src === img3.src) {
    let betTenTimes = betOne * 10
    money = money + betTenTimes
    betTotal -= betTenTimes
    return 'You won ' + '$' + betTenTimes
  } else {
    money = money - betOne
    betTotal += betOne
    return 'You lost ' + '$' + betOne + ' & Your Total Lost ' + '$' + betTotal;
  }
}
function winLoseMax() {
  if(img1.src === img2.src && img2.src === img3.src) {
    let betTenTimes = (betTwo * 10)
    money = money + betTenTimes
    betTotal -= betTenTimes
    return 'You won ' + '$' + betTenTimes
  } else {
    money = money - betTwo
    betTotal += betTwo
    return 'You lost ' + '$' + betTwo + ' & Your Total Lost ' + '$' + betTotal;
  }
}
