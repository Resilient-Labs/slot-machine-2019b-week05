// Credit to Shannon for helping with the code.

const playFive = document.querySelector('#min')
const playFifty = document.querySelector('#max')
let balance = document.querySelector('#balance')
const result = document.querySelector('#result')


// TOTAL MONEY
let total = 1000
result.innerText = "Press either button to start."

const items = ['slot1.png', 'slot2.png', 'slot3.png', 'slot4.png', 'slot5.png']

// EVENT LISTENER
playFive.addEventListener('click', function(event){
  play(5)
})

playFifty.addEventListener('click', function(event){
  play(50)
})

function play(amount) {
    spin()
    if (rowLeft === rowMiddle && rowMiddle === rowRight){
      total += amount * 10
      result.innerText = "Winner!"
    }else {
      total -= amount
      result.innerText = "Loser! Another game?"
    }
    document.querySelector('#balance').innerHTML = total
  }

  function spin() {
  rowLeft = Math.ceil(Math.random() * 5)
  rowMiddle = Math.ceil(Math.random() * 5)
  rowRight = Math.ceil(Math.random() * 5)
  document.querySelector('#rowLeft').innerHTML = `<img src = images/${items[rowLeft-1]}>`
  document.querySelector('#rowMiddle').innerHTML = `<img src = images/${items[rowMiddle-1]}>`
  document.querySelector('#rowRight').innerHTML = `<img src = images/${items[rowRight-1]}>`
  console.log(rowLeft, rowMiddle, rowRight)
}

document.querySelector('#balance').innerHTML = total