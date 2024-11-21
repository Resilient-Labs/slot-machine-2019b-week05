let bankAmount = 1000


document.querySelector('#bet20').addEventListener('click', run)
document.querySelector('#bet100').addEventListener('click', run)

function run() {
   
   let bet = parseInt(this.value)
   console.log(this.value)
   if (bet > bankAmount){
      document.querySelector('#result').innerText = 'Oh you a brokie'

   } else {

   
    let reel1Value = Math.floor(Math.random() * 5)
    let reel2Value = Math.floor(Math.random() * 5)
    let reel3Value = Math.floor(Math.random() * 5)

   let emojis = ['🎰', '🍄', '🍀', '🐠', '🎲'] 


    checkForWinner(reel1Value,reel2Value,reel3Value,bet)

    document.querySelector('#reel1').innerText = emojis[reel1Value]
    document.querySelector('#reel2').innerText = emojis[reel2Value]
    document.querySelector('#reel3').innerText = emojis[reel3Value]

}
}

function checkForWinner(num1,num2,num3,bet) {
 if (num1 === num2 && num1=== num3) {
   bankAmount += bet * 2
   document.querySelector('span').innerText = `$${bankAmount}`

    console.log('WINNER')
    document.querySelector('#result').innerText = 'WE HAVE A WINNER 🎊'

 } else {
   bankAmount -= bet
   document.querySelector('span').innerText = `$${bankAmount}`
    console.log('L')
    document.querySelector('#result').innerText = 'L 💔'

 }
}
