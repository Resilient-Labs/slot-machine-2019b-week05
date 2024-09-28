let total = 3000
let minBet = document.querySelector('.minBet').addEventListener('click', betFive)
let maxBet = document.querySelector('.maxBet').addEventListener('click', betFifty)
let spin = document.querySelector('#spinButton').addEventListener('click',getRandomEmoji)
let spinOptions = ["🍒","🍊"," 🥥", "🍎"," 🍉"]

function getRandomEmoji(){
const reel1 = spinOptions[Math.floor(Math.random() * spinOptions.length)]
const reel2 = spinOptions[Math.floor(Math.random() * spinOptions.length)]
const reel3 = spinOptions[Math.floor(Math.random() * spinOptions.length)]

document.getElementById('reel1').innerText = reel1;
document.getElementById('reel2').innerText = reel2;
document.getElementById('reel3').innerText = reel3;

if (reel1 === reel2 && reel2 === reel3 && betFive) {
    total += 5
    document.querySelector('.result').innerText = `You win! Your total: $${total}.`;
}else if(reel1 === reel2 && reel2 === reel3 && betFifty){
    total += 50
    document.querySelector('.result').innerText = `You win! Your total: $${total}.`;
}else {
    document.querySelector('.result').innerText = `You lose! Your total: $${total}.`;
}

document.querySelector('.money').innerText = total;
}

function betFive (){
    total = total - 5
    document.querySelector('.money').innerText = total
}
function betFifty (){
    total = total - 50
    document.querySelector('.money').innerText = total}