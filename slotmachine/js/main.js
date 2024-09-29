document.querySelector('#min').addEventListener('click', minBet)
document.querySelector('#max').addEventListener('click', maxBet)

let initialBet = 10000
document.getElementById('wallet').innerText = initialBet

function minBet(){
     initialBet -= 200
     wallet.innerText = initialBet 
     let slotOne = Math.floor(Math.random()*2)
     let slotTwo = Math.floor(Math.random()*2)
     let slotThree = Math.floor(Math.random()*2)
     
     one.innerText = slotOne
     two.innerText = slotTwo
     three.innerText = slotThree

     if (slotOne === 1 && slotTwo === 1 && slotThree === 1){
        initialBet += 700
        wallet.innerText = initialBet   
        placeToSee.innerText = 'Congrats!'
     } else {
        placeToSee.innerText = 'Whomp whomp'
     }
}





function maxBet(){
    initialBet -= 400
     wallet.innerText = initialBet
     let slotOne = Math.floor(Math.random()*2)
     let slotTwo = Math.floor(Math.random()*2)
     let slotThree = Math.floor(Math.random()*2)
     
     one.innerText = slotOne
     two.innerText = slotTwo
     three.innerText = slotThree

     if (slotOne === 0 && slotTwo === 0 && slotThree === 0){
        initialBet += 900
        wallet.innerText = initialBet   
        placeToSee.innerText = 'Congrats!'
     } else {
        placeToSee.innerText = 'Whomp whomp'
     }
}