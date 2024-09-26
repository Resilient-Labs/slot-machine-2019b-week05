//grab all the necessary elements from the dom 
const totalCashDisplay = document.querySelector(".totalDisplay"); 
const currentRoundDisplay = document.querySelector(".currentDisplay");
const betFiveBtn = document.querySelector("#bet5");
const betFiftyBtn = document.querySelector("#bet50");
const spinBtn = document.querySelector("#spinBtn");

const img1 = document.querySelector("#reel1");
const img2 = document.querySelector("#reel2");
const img3 = document.querySelector("#reel3");

// keep track of the currentBet, totalWins and currentWin 
let currentBet = null; 
let totalWins = 2000; 
let currentWin = 0; 
const trees = ["willow", "mediumTree", "birch", "pine", "sapling", "seed"];

//have eventHandlers on the buttons 
betFiveBtn.addEventListener("click", betFive);
betFiftyBtn.addEventListener("click", betFifty);
spinBtn.addEventListener("click", spin);

function betFive() {
    currentBet = 5;
    betFiveBtn.classList.toggle("hover");
    betFiftyBtn.classList.remove("hover");
    console.log(currentBet);
}

function betFifty() {
    currentBet = 50;
    betFiftyBtn.classList.toggle("hover");
    betFiveBtn.classList.remove("hover");
    console.log(currentBet);
}

function spin() {
    const warning = document.querySelector("#placeBetFirst"); 
    if (currentBet === null) {
        warning.textContent = "Place a bet first";
        return;
    }
    else {
        warning.textContent = "";
        
        //subtract the currentBet from totalWins
        totalWins -= currentBet; 
        //randomly pick a choice and display in reel1 
        const randomChoice1 = Math.floor(Math.random() * 6);
        const tree1 = trees[randomChoice1]; 
        //take off any previously assigned classes/tree
        //if classList[0] exists it will be removed
        //if it doesnt nothing happens
        
        img1.classList.toggle(img1.classList[0]);
        img1.classList.add(tree1);
        console.log({ after: img1.classList });
    
        //reel2 
        const randomChoice2 = Math.floor(Math.random() * 6);
        const tree2 = trees[randomChoice2]; 
        img2.classList.toggle(img2.classList[0]);
        img2.classList.add(tree2);
    
        //reel3
        const randomChoice3 = Math.floor(Math.random() * 6);
        const tree3 = trees[randomChoice3];
        img3.classList.toggle(img3.classList[0]);
        img3.classList.add(tree3);
      
        if (tree1 === tree2 && tree2 === tree3) {
            //multiply the currentBet by the 'tree factor'
            //add that to totalWins
            currentWin = currentBet * 2; 
            totalWins += currentWin;
             
        }
        else {
            currentWin = -currentBet; 
        }
        
        currentRoundDisplay.innerText = currentWin;
        totalCashDisplay.innerText = totalWins; 
    }
    
}



//have a way of display the user's currentBet

// have a way of generating the current reels & currentWin

// when the reel options have been generated display them 
// display the currentWin and add or subtract from the total 












 
