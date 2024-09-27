document.querySelector('#inputMoney').addEventListener('click', inputMoney);
document.querySelector('#bet1').addEventListener('click', bet1);
document.querySelector('#bet5').addEventListener('click', bet5);

// Inputs money in Total Credit
function inputMoney() {
    let money = document.querySelector('input').value;
    let currentMoney = document.querySelector('span').innerHTML;
    document.querySelector('span').innerText = Number(currentMoney) + Number(money);
    document.querySelector('input').value = '';
}

// Minus 1$ to total credit and roll
function bet1() {
    let money = Number(document.querySelector('#totalCredit').innerHTML);
    money -= 1;
    document.querySelector('#totalCredit').innerHTML = money;
    roll1()
}

// Minus 5$ to total credit and roll
function bet5() {
    let money = Number(document.querySelector('#totalCredit').innerHTML);
    money -= 5;
    document.querySelector('#totalCredit').innerHTML = money;
    roll5()
}

// Compares three values and adds 5$ to Total Credit if equal
function roll1() {
    let reel1Value = rollReel1();
    let reel2Value = rollReel2();
    let reel3Value = rollReel3();
    let money = Number(document.querySelector('#totalCredit').innerHTML);
    if (reel1Value === reel2Value && reel2Value === reel3Value) {
        document.getElementById('msg').innerText = 'YOU GOT 25$'
        money += 25;
        document.querySelector('#totalCredit').innerHTML = money;
    } else {
        document.getElementById('msg').innerText = 'YOU LOST';
    }
}

// Compares three values and adds 25$ to Total Credit if equal
function roll5() {
    let reel1Value = rollReel1();
    let reel2Value = rollReel2();
    let reel3Value = rollReel3();
    let money = Number(document.querySelector('#totalCredit').innerHTML);
    if (reel1Value === reel2Value && reel2Value === reel3Value) {
        document.getElementById('msg').innerText = 'YOU GOT 125$'
        money += 125;
        document.querySelector('#totalCredit').innerHTML = money;
    } else {
        document.getElementById('msg').innerText = 'YOU LOST';
    }
}

// Gets random number and changes image src for Reel 1
function rollReel1() {
    let reel1Value = '';
    let randomNumber = Math.random();
    if (randomNumber <= .2) {
        document.getElementById('winnerBox1').src = 'media/clover.png';
        document.getElementById('extra1Reel1').src = 'media/diamond.png';
        document.getElementById('extra2Reel1').src = 'media/cherry.png';
        document.getElementById('extra3Reel1').src = 'media/spade.png';
        document.getElementById('extra4Reel1').src = 'media/seven.png';
        reel1Value = 'clover';
    } else if (randomNumber <= .4) {
        document.getElementById('winnerBox1').src = 'media/cherry.png';
        document.getElementById('extra1Reel1').src = 'media/clover.png';
        document.getElementById('extra2Reel1').src = 'media/diamond.png';
        document.getElementById('extra3Reel1').src = 'media/spade.png';
        document.getElementById('extra4Reel1').src = 'media/seven.png';
        reel1Value = 'cherry';
    } else if (randomNumber <= .6) {
        document.getElementById('winnerBox1').src = 'media/diamond.png';
        document.getElementById('extra1Reel1').src = 'media/clover.png';
        document.getElementById('extra2Reel1').src = 'media/cherry.png';
        document.getElementById('extra3Reel1').src = 'media/spade.png';
        document.getElementById('extra4Reel1').src = 'media/seven.png';
        reel1Value = 'diamond';
    } else if (randomNumber <= .8) {
        document.getElementById('winnerBox1').src = 'media/spade.png';
        document.getElementById('extra1Reel1').src = 'media/clover.png';
        document.getElementById('extra2Reel1').src = 'media/cherry.png';
        document.getElementById('extra3Reel1').src = 'media/diamond.png';
        document.getElementById('extra4Reel1').src = 'media/seven.png';
        reel1Value = 'spade';
    } else {
        document.getElementById('winnerBox1').src = 'media/seven.png';
        document.getElementById('extra1Reel1').src = 'media/clover.png';
        document.getElementById('extra2Reel1').src = 'media/cherry.png';
        document.getElementById('extra3Reel1').src = 'media/spade.png';
        document.getElementById('extra4Reel1').src = 'media/diamond.png';
        reel1Value = 'seven';
    }
    return reel1Value
}

// Gets random number and changes image src for Reel 2
function rollReel2() {
    let reel2Value = '';
    let randomNumber = Math.random();
    if (randomNumber <= .2) {
        document.getElementById('winnerBox2').src = 'media/clover.png';
        document.getElementById('extra1Reel2').src = 'media/diamond.png';
        document.getElementById('extra2Reel2').src = 'media/cherry.png';
        document.getElementById('extra3Reel2').src = 'media/spade.png';
        document.getElementById('extra4Reel2').src = 'media/seven.png';
        reel2Value = 'clover';
    } else if (randomNumber <= .4) {
        document.getElementById('winnerBox2').src = 'media/cherry.png';
        document.getElementById('extra1Reel2').src = 'media/clover.png';
        document.getElementById('extra2Reel2').src = 'media/diamond.png';
        document.getElementById('extra3Reel2').src = 'media/spade.png';
        document.getElementById('extra4Reel2').src = 'media/seven.png';
        reel2Value = 'cherry';
    } else if (randomNumber <= .6) {
        document.getElementById('winnerBox2').src = 'media/diamond.png';
        document.getElementById('extra1Reel2').src = 'media/clover.png';
        document.getElementById('extra2Reel2').src = 'media/cherry.png';
        document.getElementById('extra3Reel2').src = 'media/spade.png';
        document.getElementById('extra4Reel2').src = 'media/seven.png';
        reel2Value = 'diamond';
    } else if (randomNumber <= .8) {
        document.getElementById('winnerBox2').src = 'media/spade.png';
        document.getElementById('extra1Reel2').src = 'media/clover.png';
        document.getElementById('extra2Reel2').src = 'media/cherry.png';
        document.getElementById('extra3Reel2').src = 'media/diamond.png';
        document.getElementById('extra4Reel2').src = 'media/seven.png';
        reel2Value = 'spade';
    } else {
        document.getElementById('winnerBox2').src = 'media/seven.png';
        document.getElementById('extra1Reel2').src = 'media/clover.png';
        document.getElementById('extra2Reel2').src = 'media/cherry.png';
        document.getElementById('extra3Reel2').src = 'media/spade.png';
        document.getElementById('extra4Reel2').src = 'media/diamond.png';
        reel2Value = 'seven';
    }
    return reel2Value
}

// Gets random number and changes image src for Reel 3
function rollReel3() {
    let reel3Value = '';
    let randomNumber = Math.random();
    if (randomNumber <= .2) {
        document.getElementById('winnerBox3').src = 'media/clover.png';
        document.getElementById('extra1Reel3').src = 'media/diamond.png';
        document.getElementById('extra2Reel3').src = 'media/cherry.png';
        document.getElementById('extra3Reel3').src = 'media/spade.png';
        document.getElementById('extra4Reel3').src = 'media/seven.png';
        reel3Value = 'clover';
    } else if (randomNumber <= .4) {
        document.getElementById('winnerBox3').src = 'media/cherry.png';
        document.getElementById('extra1Reel3').src = 'media/clover.png';
        document.getElementById('extra2Reel3').src = 'media/diamond.png';
        document.getElementById('extra3Reel3').src = 'media/spade.png';
        document.getElementById('extra4Reel3').src = 'media/seven.png';
        reel3Value = 'cherry';
    } else if (randomNumber <= .6) {
        document.getElementById('winnerBox3').src = 'media/diamond.png';
        document.getElementById('extra1Reel3').src = 'media/clover.png';
        document.getElementById('extra2Reel3').src = 'media/cherry.png';
        document.getElementById('extra3Reel3').src = 'media/spade.png';
        document.getElementById('extra4Reel3').src = 'media/seven.png';
        reel3Value = 'diamond';
    } else if (randomNumber <= .8) {
        document.getElementById('winnerBox3').src = 'media/spade.png';
        document.getElementById('extra1Reel3').src = 'media/clover.png';
        document.getElementById('extra2Reel3').src = 'media/cherry.png';
        document.getElementById('extra3Reel3').src = 'media/diamond.png';
        document.getElementById('extra4Reel3').src = 'media/seven.png';
        reel3Value = 'spade';
    } else {
        document.getElementById('winnerBox3').src = 'media/seven.png';
        document.getElementById('extra1Reel3').src = 'media/clover.png';
        document.getElementById('extra2Reel3').src = 'media/cherry.png';
        document.getElementById('extra3Reel3').src = 'media/spade.png';
        document.getElementById('extra4Reel3').src = 'media/diamond.png';
        reel3Value = 'seven';
    }
    return reel3Value
}
