/*
Mandy and Travora are part of this code practice

click on button
three sections, each sections has 5 items
each section does a loopy thing that chooses a number
the three numbers from those section must match to win the bet( we will code bet later)
*/
let yourMoney = 100
let slotBank = 0

const gamble = document.querySelector('#gamble')
const slots = document.querySelectorAll('.slot')

const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const results = document.querySelector('#results')

// const wallet = parseInt(document.querySelector('#wallet').value)
// const bank = parseInt(document.querySelector('#bank').value)

const plusFive = document.querySelector('#plusFive')
const plusTen = document.querySelector('#plusTen')
const minusFive = document.querySelector('#minusFive')
const minusTen = document.querySelector('#minusTen')

plusFive.addEventListener('click', addFive)
plusTen.addEventListener('click', addTen)
minusFive.addEventListener('click', subFive)
minusTen.addEventListener('click', subTen)

function addFive() {
    slotBank +=5
    yourMoney -=5
    document.querySelector('#bank').innerText = slotBank
    document.querySelector('#wallet').innerText = yourMoney
    if ( slotBank < 5) {
        document.querySelector('#bank').innerText = 'WHAT ARE YOU DOING!?'
    }else {
        document.querySelector('#bank').innerText = slotBank
    }
}
function addTen() {
    slotBank +=10
    yourMoney -=10
    document.querySelector('#bank').innerText = slotBank
    document.querySelector('#wallet').innerText = yourMoney
    if ( slotBank < 5) {
        document.querySelector('#bank').innerText = 'WHAT ARE YOU DOING!?'
    }else {
        document.querySelector('#bank').innerText = slotBank
    }
}
function subFive() {
    slotBank -=5
    yourMoney +=5
    document.querySelector('#bank').innerText = slotBank
    document.querySelector('#wallet').innerText = yourMoney
    if ( slotBank < 5) {
        document.querySelector('#bank').innerText = 'WHAT ARE YOU DOING!?'
    }else {
        document.querySelector('#bank').innerText = slotBank
    }
}
function subTen() { 
    slotBank -=10
    yourMoney +=10
    document.querySelector('#bank').innerText = slotBank
    document.querySelector('#wallet').innerText = yourMoney
    if ( slotBank < 5) {
        document.querySelector('#bank').innerText = 'STAHP!!'
    }else {
        document.querySelector('#bank').innerText = slotBank
    }
}

gamble.addEventListener('click', spinWheel)

function spinWheel() {
    for ( let slot of slots) {
        slot.innerText = Math.ceil(Math.random() * 5)
        }
    const a = box1.innerText
    const b = box2.innerText
    const c = box3.innerText
    // When outcome is determined create function where you gain money or lose money
        if ( a === b && b === c){
            jackpot()
        } else if ( a === b || b===c || c===a) {
            winSome()
        } else {
            losings()   
        }
    if (Math.random() < .33 ) {

    }

}

function jackpot() {
    document.querySelector('#wallet').innerText = (slotBank * 2) + yourMoney
    console.log(yourMoney)
    console.log(slotBank)
}

function winSome() {
    document.querySelector('#wallet').innerText = slotBank + yourMoney
    console.log(yourMoney)
    console.log(slotBank)
}

function losings() {
    document.querySelector('#wallet').innerText = yourMoney - slotBank
    console.log(yourMoney)
    console.log(slotBank)
}

