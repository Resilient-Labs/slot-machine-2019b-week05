document.querySelector('#play').addEventListener('click', playGame)
let bankBalance = 1000

function playGame() {

let myArray = ['<img src="images/cherry.png" alt="">', '<img src="images/apple.png" alt="">', '<img src="images/seven.png" alt="">', '<img src="images/slot-machine.png" alt="">', '<img src="images/watermelon.png" alt="">']

let result1 = document.querySelector('#result1')
let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
let img3 = document.querySelector('#img3')
let betAmount = document.querySelector('#bet-select').value
let amount = document.querySelector('#amount')

let slot1 = myArray[Math.floor(Math.random() *5)]

let slot2 = myArray[Math.floor(Math.random() *5)]

let slot3 = myArray[Math.floor(Math.random() *5)]

if ( slot1===slot2 && slot2===slot3){
    img1.innerHTML = slot1
    img2.innerHTML = slot2
    img3.innerHTML = slot3
    result1.innerHTML = 'Winner Winner Chicken Dinner'
    bankBalance = (parseInt(betAmount) *10) + bankBalance
    amount.innerHTML = bankBalance
    
}else{
    img1.innerHTML = slot1
    img2.innerHTML = slot2
    img3.innerHTML = slot3
    result1.innerHTML = 'You Lost'
    bankBalance = bankBalance - parseInt(betAmount) 
    amount.innerHTML = bankBalance
} 

if ( bankBalance <= 0 ) {
    alert('You lost all your money the house will reset your bank balance')
    bankBalance = 1000
    amount.innerHTML = bankBalance
} 

}