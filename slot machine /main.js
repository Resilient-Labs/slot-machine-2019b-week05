// Create a Slot Machine 

const buttons = document.querySelectorAll('.bet')
const money = document.querySelector('.money')
const update = document.querySelector('.update')
const game = document.querySelectorAll('.game')
const numbers = [1, 2, 3, 4, 5]
money.innerText = 1000
document.querySelector('.newGame').addEventListener('click', resetGame)

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playGame)
}

function playGame(e) {
  let bet = e.target.innerText
  if (money.innerText - bet < 0) {
    update.innerText = 'INSUFFICIENT FUNDS'
  }
  else {
    for (let i = 0; i < game.length; i++) {
      game[i].innerText = numbers[Math.floor(Math.random() * game.length)]
    }
    if (game[0].innerText === game[1].innerText && game[1].innerText === game[2].innerText) {
      update.innerText = 'WINNER'
      money.innerText = bet * 2
    } else {
      update.innerText = 'LOSER'
      money.innerText = money.innerText - bet
    }
  }
}
function resetGame(){
  window.location.reload()
}