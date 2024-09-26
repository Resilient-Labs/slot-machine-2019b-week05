//user starts with $1000 stored in a variable 
const imgArray = ['mega2.gif','pikachu.gif', 'sonic.gif','link.gif', 'mario.gif']
const leftImg = document.querySelector('#leftImg')
const midImg = document.querySelector('#midImg')
const rightImg = document.querySelector('#rightImg')
const btn5 = document.querySelector('#bet5')

let currentAmount = 1000
let bet=0


document.querySelector('#bet5').addEventListener('click', getBet)
document.querySelector('#bet10').addEventListener('click', getBet)
document.querySelector('#bet20').addEventListener('click', getBet)
document.querySelector('#bet50').addEventListener('click', getBet)
document.querySelector('#bet100').addEventListener('click', getBet)
document.querySelector('#startOver').addEventListener('click',startOver)

document.querySelector('#placeToSee').innerText = currentAmount
document.querySelector('#placeToSee2').innerText = bet
//click on any bet button  
function getBet(event){

    bet = Number(event.target.value)
    
    if(currentAmount < bet){
        document.querySelector('#check').innerText='You\'re Broke. GET OUT !'
    }else{
        currentAmount-=bet
        document.querySelector('#placeToSee').innerText = currentAmount
        document.querySelector('#placeToSee2').innerText = bet
        imgChange()
    } 
}


function getRandomIndex(){
    let randomIndex = Math.floor(Math.random() * 5)
    
    return randomIndex
}
function imgChange(){
    let num1 = getRandomIndex()
    let num2 = getRandomIndex()
    let num3 = getRandomIndex()

    leftImg.src = './css/images/' + imgArray[num1] 
    midImg.src = './css/images/' + imgArray[num2]
    rightImg.src = './css/images/' + imgArray[num3]

    
    console.log(imgArray[num1])
    console.log(leftImg.src)

    checkWin(num1,num2,num3)
}

function checkWin (num1, num2, num3){
    if (num1 === num2  && num2 === num3){
        document.querySelector('#check').innerText='You Won'
        payOut()
    }else {
        document.querySelector('#check').innerText='You Lost'
    }

}
function payOut(){
    currentAmount += bet*2
    document.querySelector('#placeToSee').innerText = currentAmount
}
function startOver(){
    window.location.reload
}
//place bet button changes images and changes current amount if player wins or loses 

// Worked on this with Cat Gonclaves and Julians









