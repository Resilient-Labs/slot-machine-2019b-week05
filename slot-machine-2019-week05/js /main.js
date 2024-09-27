//Reel symbols
const reelSymbols=["cherry.webp","grape.webp","pear.webp","plum.webp","Watermelon.webp"];
//balance
let balance=500
//Spin for symbol
const spinReel=()=>{
    return [
     reelSymbols[Math.floor(Math.random()*reelSymbols.length)],
     reelSymbols[Math.floor(Math.random()*reelSymbols.length)],
     reelSymbols[Math.floor(Math.random()*reelSymbols.length)]
    ]
};
//Check to see if win or loose
const checkResult=(r1,r2,r3)=>{
    if(r1[1]==r2[1] && r2[1]==r3[1]){
        return true
    }else{
        return false
    }
}
//const to avoid writing out event listener
const spinSlot=(betAmount)=>{
    const reel1Img=document.getElementById("reel1").getElementsByTagName('img');
    const reel2Img=document.getElementById("reel2").getElementsByTagName('img');
    const reel3Img=document.getElementById("reel3").getElementsByTagName('img');
    const balanceDisplay=document.getElementById("balance");

    //Spin the reels
    const result1=spinReel()
    const result2=spinReel()
    const result3=spinReel()

    //update reel1 image
    reel1Img[0].src=result1[0];
    reel1Img[1].src=result1[1];
    reel1Img[2].src=result1[2];

    //update reel2 image
    reel2Img[0].src=result2[0];
    reel2Img[1].src=result2[1];
    reel2Img[2].src=result2[2];

    //update reel3 image
    reel3Img[0].src=result3[0]
    reel3Img[1].src=result3[1]
    reel3Img[2].src=result3[2]

    //Check if player wins or looses
    if(checkResult(result1,result2,result3)){
        balance+=betAmount*2;
    }else{
        balance-=betAmount;
    }
    //keep track of balance
    balanceDisplay.textContent=`$${balance}`
}

//Function for low bet
document.getElementById("Bet20").addEventListener('click',
    function(){
       if(balance>=20){
        spinSlot(20)
       }else{
        alert("Add more funds to your balance")
       }
})

//Function for hgh bet
document.getElementById("Bet50").addEventListener('click',
    function(){
       if(balance>=50){
        spinSlot(50)
       }else{
        alert("Add more funds to your balance")
       }
})

