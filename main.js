
document.querySelector('#minbet').addEventListener('click', minBet) //button
document.querySelector('#maxbet').addEventListener('click', maxBet) //button

let intialAmount = 100
document.getElementById('bank').innerHTML = intialAmount

function minBet(){ //function for minbet and increasing/decreasing number 
    intialAmount -= 10
    bank.innerHTML = intialAmount

    let reel1 = Math.floor(Math.random()* 5)
    let reel2 = Math.floor(Math.random()* 5)
    let reel3 = Math.floor(Math.random()* 5)

    slot1.innerHTML = reel1
    slot2.innerHTML = reel2
    slot3.innerHTML = reel3

    if(reel1 === reel2 && reel1 === reel3){
        console.log('Winner, lets keep going')
        intialAmount += 30
        bank.innerHTML = intialAmount
    }else{
        console.log('You Lose!')
    }

}
function maxBet(){ //function for maxbet and increasing/decreasing number 
    intialAmount -= 20
    bank.innerHTML = intialAmount

    let reel1 = Math.floor(Math.random()* 5)
    let reel2 = Math.floor(Math.random()* 5)
    let reel3 = Math.floor(Math.random()* 5)

    slot1.innerHTML = reel1
    slot2.innerHTML = reel2
    slot3.innerHTML = reel3

    if(reel1 === reel2 || reel2 === reel3 || reel1 === reel3){
        console.log('Winner, lets keep going')
        intialAmount += 50
        bank.innerHTML = intialAmount
    }else{
        console.log('You Lose!')
    }
}

