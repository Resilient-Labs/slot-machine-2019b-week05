document.getElementById('playButton').addEventListener('click', play)
let real1 = document.getElementById('real1')
let real2 = document.getElementById('real2')
let real3 = document.getElementById('real3')
let betAmount = document.getElementById('bet')


function play(){
    //real1.innerText= getRandomPic()
    real1.src =getRandomPic() + ".png"
    real2.src =getRandomPic() + ".png"
    real3.src =getRandomPic() + ".png" 

    


// If all 3 numbers are the same then add bet amount to wallet//
if(real1.src==real3.src && real3.src == real2.src){
    wallet.innerText = +betAmount.innerHTML + +(wallet.innerText)
    console.log('win '+ wallet.innerHTML)
}
//else subtract bet amount from wallet
else{
    wallet.innerText = +wallet.innerText - +(betAmount.innerHTML)
    console.log('loose '+ wallet.innerHTML)
}

    
    //let answer = +num1 - +(num2)
    
}

function getRandomPic() {
    return Math.floor(Math.random() * 6)
}


document.getElementById('min').addEventListener('click',betMin)
document.getElementById('max').addEventListener('click',betMax)



function betMin(){
    betAmount.innerHTML='10'
}
function betMax(){
    betAmount.innerHTML='100'
}

let wallet = document.getElementById('wallet')

