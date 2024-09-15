// Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet


let balance = 1000
let bet = 0
let reset = function(){
    bet = bet - bet;
    document.querySelector('.bet h2').innerText = `Bet: ${bet} dollars`
    }
let pic1 = document.getElementsByClassName('.reel-one').innerHTML = '<img src="images/ruby.png" />'
let pic2 = document.getElementsByClassName('.reel-one').innerHTML = '<img src="images/emerald.png" />'
let pic3 = document.getElementsByClassName('.reel-one').innerHTML = '<img src="images/sapphire.png" />'
let pic4 = document.getElementsByClassName('.reel-one').innerHTML = '<img src="images/diamond.png" />'
let pic5 = document.getElementsByClassName('.reel-one').innerHTML = '<img src="images/gold.png" />'

function lifeBet(){
    if(balance === 0){
        document.querySelector('.status h2').innerText = "BALANCE TOO LOW!"
        return
    }
    bet = balance
    document.querySelector('.bet h2').innerText = `Bet: ${bet} dollars`
    balance = balance - balance
    document.querySelector('.balance h2').innerText = `Balance: ${balance} dollars left`
    document.querySelector('.status h2').innerText = "OH YOU GOT MONEY LIKE THAT?!?"
}


function maxBet(){
    if(balance === 0){
        document.querySelector('.status h2').innerText = "BALANCE TOO LOW!"
        return
    }
    bet = bet + 50
    document.querySelector('.bet h2').innerText = `Bet: ${bet} dollars`
    balance = balance - 50
    document.querySelector('.balance h2').innerText = `Balance: ${balance} dollars left`
}

function minBet(){
    if(balance === 0){
        document.querySelector('.status h2').innerText = "BALANCE TOO LOW!"
        return
    }
    bet = bet + 5
    document.querySelector('.bet h2').innerText = `Bet: ${bet} dollars`
    balance = balance - 5
    document.querySelector('.balance h2').innerText = `Balance: ${balance} dollars left`
}

function add(){
    if(balance === 0){
        document.querySelector('.status h2').innerText = "BALANCE TOO LOW!"
        return
    }
    bet = bet + 5
    document.querySelector('.bet h2').innerText = `Bet: ${bet} dollars`
    balance = balance - 5
    document.querySelector('.balance h2').innerText = `Balance: ${balance} dollars left`
}

function subtract(){
    if(bet <= 0){
        document.querySelector('.status h2').innerText = "THERE ARE NO BETS!"
        return
    }
    bet = bet - 5
    document.querySelector('.bet h2').innerText = `Bet: ${bet} dollars`
    balance = balance + 5
    document.querySelector('.balance h2').innerText = `Balance: ${balance} dollars left`
}

function generatePic(){ 
    let random = Math.ceil(Math.random()*5);
    if(random === 1){
        random = pic1
        
    }
    else if(random === 2){
        random = pic2
        
    }
    else if(random === 3){
        random = pic3
        
    }
    else if(random === 4){
        random = pic4
    
    }
    else if(random === 5){
        random = pic5
    
    }
    return random
}

function pull(){
    if(balance === 0 && bet === 0){
        document.querySelector('.status h2').innerText = "YOU HAVE NO MONEY!"
        return
        // window.location.reload();
    }
    else if(bet < 5){
        document.querySelector('.status h2').innerText = "BET AT LEAST 5!"
        return
    }
    else{
        checkWin();
        reset();
    }
}

function checkWin(){
    let reel1 = document.querySelector('.reel-one');
    let reel2 = document.querySelector('.reel-two');
    let reel3 = document.querySelector('.reel-three');

    const random1 = generatePic();
    const random2 = generatePic();
    const random3 = generatePic();

    reel1.innerHTML = `${random1}`;
    reel2.innerHTML = `${random2}`;
    reel3.innerHTML = `${random3}`;

    if(random1 === random2 && random1 === random3){
        document.querySelector('.status h2').innerText = "YOU WIN MONEY!"
        balance = balance + (bet * 10)
        document.querySelector('.balance h2').innerText = `Balance: ${balance} dollars left`
        document.querySelector('.bet h2').innerText = `Bet: ${bet} dollars`
    }
    else{
        document.querySelector('.status h2').innerText = "DAMN!"
    }
}

function tryAgain(){
    window.location.reload();
}


document.querySelector('.balance h2').innerText = `Balance: ${balance} dollars left`

document.querySelector('.bet h2').innerText = `Bet: ${bet} dollars`



document.querySelector('.lifeBet').addEventListener('click', lifeBet)
document.querySelector('.maxBet').addEventListener('click', maxBet)
document.querySelector('.minBet').addEventListener('click', minBet)
document.querySelector('.subtract').addEventListener('click', subtract)
document.querySelector('.add').addEventListener('click', add)
document.querySelector('.pull').addEventListener('click', pull)
document.querySelector('.tryAgain').addEventListener('click', tryAgain)