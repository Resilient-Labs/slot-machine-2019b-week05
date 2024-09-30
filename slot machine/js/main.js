// create three reels and the users "wallet"
// need a function that picks random number
// display results 
// check results funtion 
// adjust money based on results 


let reelOne = 5;
let reelTwo = 5;
let reelThree = 5;
let wallet = 7000;
document.querySelector('#reelOne').innerText = reelOne;
document.querySelector('#reelTwo').innerText = reelTwo;
document.querySelector('#reelThree').innerText = reelThree;
document.querySelector('#wallet').innerText = wallet;


document.getElementById("min").onclick=spinReelMin;

document.getElementById("max").onclick=spinReelMax;

function check(reelOne, reelTwo, reelThree){
    if(reelOne === reelTwo && reelThree === reelOne){
        console.log("Youre a Winner!");
        return true;
    }else{
        console.log("Sore Loser!");
        return false;
    }

    
}


function spinReelMin(){                             // this function spins the reels at min bet and checks 
wallet -= 5;
document.querySelector('#wallet').innerText = wallet;
console.log("Before the win", wallet)
reelOne = Math.floor(Math.random() * 9);
reelTwo = Math.floor(Math.random() * 9);
reelThree = Math.floor(Math.random() * 9);
document.querySelector('#reelOne').innerText = reelOne;
document.querySelector('#reelTwo').innerText = reelTwo;
document.querySelector('#reelThree').innerText = reelThree;                     //reuslts displayed, now you need to check results
if (check(reelOne, reelTwo, reelThree)){                                           //this fucntion checks those numbers stored in Var
    wallet += 10;
    console.log("We Won", wallet)
    document.querySelector('#wallet').innerText = wallet;
}
                                     


}

function spinReelMax(){
    wallet -= 50;
    document.querySelector('#wallet').innerText = wallet;
    reelOne = Math.floor(Math.random() * 9);
    reelTwo = Math.floor(Math.random() * 9);
    reelThree = Math.floor(Math.random() * 9);
    document.querySelector('#reelOne').innerText = reelOne;
    document.querySelector('#reelTwo').innerText = reelTwo;
    document.querySelector('#reelThree').innerText = reelThree;
    if (check(reelOne, reelTwo, reelThree)){                                          
        wallet += 100;
        document.querySelector('#wallet').innerText = wallet;
    }                                   
    
    }

