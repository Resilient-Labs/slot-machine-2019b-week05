/*When button is pressed the machine will generate a random 
assortment of the the images in each reel, each reel will contain
the same five images, so IF the images each match when shown, 
you win, ELSE you loose*/

document.querySelector('.btn1').addEventListener('click', bet5)
document.querySelector('.btn2').addEventListener('click', bet50)
document.querySelector('.btn3').addEventListener('click', bet100)

let amount = 500
document.querySelector('#h1').innerText = amount

function isWinner(){
    return document.querySelector('#bG1Img').src === document.querySelector('#bG2Img').src && document.querySelector('#bG2Img').src === document.querySelector('#bG3Img').src
 }

function roll(){
    let arrImg = ['blackG2.jpg', 'blackG3.jpg', 'blackG4.jpg', 'blackG5.jpg']
    let bG1Val = Math.floor(Math.random() * arrImg.length)
    let bG2Val = Math.floor(Math.random() * arrImg.length)
    let bG3Val = Math.floor(Math.random() * arrImg.length)
    
        document.querySelector('#bG1Img').src = arrImg [bG1Val]
        document.querySelector('#bG2Img').src = arrImg [bG2Val]
        document.querySelector('#bG3Img').src = arrImg [bG3Val]
}

function updateAmount(change){
    amount = amount + change
    document.querySelector('#h1').innerText = `Your Money Count: $${amount}`
}

function bet5(){
    if(amount >= 5){
        roll()
        updateAmount(-5)

        if(isWinner()){
            updateAmount(10)
        }
    }
}
function bet50(){
    if(amount >= 50){
        roll()
        updateAmount(-50)

        if(isWinner()){
            updateAmount(100)
        }
    }
}

function bet100(){
    if(amount >= 100){
        roll()
        updateAmount(-100)

        if(isWinner()){
            updateAmount(200)
        }
    }
}

document.querySelector('#restart').addEventListener('click', restartSlot)

function restartSlot(){
    window.location.reload()
}
/*If bet with 0 money, roll will not run*/
//  function noMoney(){
//  if
//  }
 /*show how much youve been betting */