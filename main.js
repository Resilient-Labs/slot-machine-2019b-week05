const reelCount = 5
const betFive = 5
const betTen = 10
const slot1 = document.getElementById("slot1") 
const slot2 = document.getElementById("slot2") 
const slot3 = document.getElementById("slot3") 
let playerMoney = 100

let minBetBtn = document.getElementById("minBet")
let midBetBtn = document.getElementById('midBet')
let maxBetBtn = document.getElementById("maxBet")
let money = document.getElementById("money").innerText = '$100'




const minBet = () => {
    slot1.src = getrandomReel(reelCount)
    slot2.src = getrandomReel(reelCount)
    slot3.src = getrandomReel(reelCount)
    const match = (slot1.src === slot2.src && slot2.src === slot3.src)  
    if (match) {
        playerMoney += betFive
        displayStatus("Luck is on your side!", playerMoney)
    } else if (playerMoney <= 0){
        displayStatus("GAME OVER", playerMoney)
    }
    else {
        playerMoney -= betFive
        displayStatus("Ouch, but you're still in this!", playerMoney)
    } 
}

minBetBtn.addEventListener('click', minBet)


const midBet = () => {
    slot1.src = getrandomReel(reelCount)
    slot2.src = getrandomReel(reelCount)
    slot3.src = getrandomReel(reelCount)
    const match = (slot1.src === slot2.src && slot2.src === slot3.src)  
    if (match) {
        playerMoney += betTen
        displayStatus("Luck is on your side, give it another go?", playerMoney)
    } else if (playerMoney <= 0) {
        displayStatus("To be continued?", playerMoney)
    } else {
        playerMoney -= betTen
        displayStatus("Not if chief!", playerMoney)
    }
}
midBetBtn.addEventListener('click', midBet)



const maxBet = () => {
    const betItAll = playerMoney
    slot1.src = getrandomReel(reelCount)
    slot2.src = getrandomReel(reelCount)
    slot3.src = getrandomReel(reelCount)
    const match = (slot1.src === slot2.src && slot2.src === slot3.src)  
    if (match) {
        playerMoney += betItAll
        displayStatus("Luck is on your side, give it another go?", playerMoney)
    } else {
        playerMoney = 0
        displayStatus("You've lost it all, was it worth it?", playerMoney)
    } 
}
maxBetBtn.addEventListener('click', maxBet)




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getrandomReel = () => {
    let result = Math.floor(Math.random() * reelCount);
    console.log(result)
    let image = ''
    if (result <= 0) {
        image = 'images/Pikachu_artwork_for_Pokémon_Red_and_Blue.webp'
    } else if (result <= 1) {
        image = 'images/gundam_rx_78_2_fanart_head_by_kyzson_ddtqil5-fullview.png'
    } 
     else if (result <= 2) {
        image = 'images/Beat_Jet_Set_Radio.webp'
    } else if (result <= 3) {
        image = 'images/lucky-seven.png'
    } else if (result <= 4) {
        image = 'images/Slime_Artwork.webp'
    }
    return image
}


const displayStatus = (status, money) => {
    document.getElementById("status").innerText = status
    document.getElementById("money").innerText = money
}