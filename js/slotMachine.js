// slot machine psuedocode 
// i want the player to place a bet. 
    //max min, queryselectors for both.
    //add event selectors that runs a function

let minBet = document.querySelector('#minBet') //declared minBet with the element of the id of minBet to reference that element
let maxBet = document.querySelector('#maxBet') //declared this variable so we always know it's targeted that specified element
let pictureArray = ['./pics/IMG_0275.JPG', './pics/IMG_0279.JPG', './pics/IMG_0282.JPG', './pics/IMG_0302.JPG', './pics/IMG_0314.JPG']

minBet.addEventListener('click', placeMinBet) //created an event listener that lets the program know that when you click that element, it starts the function plceMinBet
maxBet.addEventListener('click', placeMaxBet)//added Click event Listener 
console.log('munchkin')
// fsdad
let bet = 0
let total = 1000

//document.querySelector('#yourTotal').innerText = 1000

function placeMinBet(){
    bet += 10
    document.querySelector('#yourBet').innerText = bet
    // console.log(bet)
}

function placeMaxBet(){
    bet += 100
    document.querySelector('#yourBet').innerText = bet
}
// then I want the player to press a button. 

let placeBetsRunSlot = document.querySelector('#pressToGet')
placeBetsRunSlot.addEventListener('click', runSlot)

// that button should make three slots run. 

function runSlot(){
    bet = document.querySelector('#yourBet').innerText
    if (total - bet < 0) {
        alert('no more bets!')
        bet = 0 
        total = 1000
        document.querySelector('#yourTotal').innerText = total
        document.querySelector('#yourBet').innerText = bet
    }else{
        let slot1 = slotSpinning()
        let slot2 = slotSpinning()
        let slot3 = slotSpinning()
        
        document.querySelector('#slot1').setAttribute('src', pictureArray[slot1])
        document.querySelector('#slot2').setAttribute('src', pictureArray[slot2])
        document.querySelector('#slot3').setAttribute('src', pictureArray[slot3])

        // document.querySelector('#slot1').innerText = slot1
        // document.querySelector('#slot2').innerText = slot2
        // document.querySelector('#slot3').innerText = slot3

        checkWinner()

        bet = 0
        document.querySelector('#yourBet').innerText = bet
    }
}

function slotSpinning(){
    return Math.floor(Math.random() * 5)
}


function checkWinner(){
    if (slot1 === slot2 && slot1 === slot3){
        total += (bet * 10)
        document.querySelector('#yourTotal').innerText = Number(total)
        // document.getElementById('youWon').innerText = "play bia and nicki minaj remix of it\'s a whole lotta money"        
    } else{
        total -= bet
        document.querySelector('#yourTotal').innerText = Number(total)
        document.getElementById('youLost').innerText = 'siri, play nicki minaj\'s yikes'
    }
}

let resetTheBet = document.querySelector('#resetBet')
resetTheBet.addEventListener('click', resetBet)

function resetBet(){
    bet = 0
    total = 1000
    document.querySelector('#yourTotal').innerText = total
    document.querySelector('#yourBet').innerText = bet
}
// I want three elements to have a list of the same words. 
    //then there should be a function to make them match. 
// If all three match, you win and you gain money- if they don't you lose money.





