let balance = 1000
let bet = 0


function minBet(){
    if(balance === 0){
        document.querySelector('.currentBalance').innerText = "YOU NEED MORE BELLS!"
        return
    }
    bet = 5;
    document.querySelector('.currentBet').innerText = `Current Bet: ${bet}`
    balance = balance - 5;
    document.querySelector('.currentBalance').innerText = `Current Bells: ${balance}`
    randomIcons();
}

function maxBet(){
    if(balance < 50){
        document.querySelector('.currentBalance').innerText = "YOU NEED MORE BELLS!"
        return
    }
    bet = 50;
    document.querySelector('.currentBet').innerText = `Current Bet: ${bet}`
    balance = balance - 50;
    document.querySelector('.currentBalance').innerText = `Current Bells: ${balance}`
    randomIcons();
}

function randomIcons(){
    const images = ["images/apple.png", "images/pear.png", "images/cherry.png", "images/peach.png", "images/orange.png"]

    imgA = document.getElementById('imgA');
    imgB = document.getElementById('imgB');
    imgC = document.getElementById('imgC');

    random1 = parseInt (Math.random()*images.length);
    random2 = parseInt (Math.random()*images.length);
    random3 = parseInt (Math.random()*images.length);

    imgA.src=images[random1];
    imgB.src=images[random2];
    imgC.src=images[random3];
    checkWin();
}

function checkWin(){
    if((random1 === random2) && (random1 === random3)){
        balance = balance + (bet * 10) 
        document.querySelector('.currentBalance').innerText = `Current Bells: ${balance}`
        document.querySelector('.misc').innerText = `YOU WIN!`
    }
    else{
        document.querySelector('.misc').innerText = `YOU LOSE!`
    }
    return;
}

function startOver(){
    window.location.reload();
}


document.querySelector('.currentBalance').innerText = `Current Bells: ${balance}`
document.querySelector('.currentBet').innerText = `Current Bet: ${bet}`

document.querySelector('.minBet').addEventListener('click', minBet)
document.querySelector('.maxBet').addEventListener('click', maxBet)
document.querySelector('.startOver').addEventListener('click', startOver)
