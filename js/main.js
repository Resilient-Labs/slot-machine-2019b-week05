/*create 3 box slot machine
requirements:
five options per reel
min button: $5, max button: $50
player starts at $1000;
if player gets all three matching, player wins 10 times what they bet
if player loses, they lose the amount 
return player total*/

//variables
const windows = document.querySelectorAll("section");
const leftBox = document.getElementById("left");
const middleBox = document.getElementById("middle");
const rightBox = document.getElementById("right");
const betFive = document.getElementById("fiver");
const betFifty = document.getElementById("fiftyCent");
const wallet = document.getElementById("wallet");
const message = document.getElementById("message");


//functions

function playerBetsFive(){
    if(wallet.textContent === "0"){
        leftBox.textContent = "";
        middleBox.textContent = "";
        rightBox.textContent = "";
        return message.textContent = "later days"
    }

   leftBox.textContent = Math.ceil(Math.random() *5);
   middleBox.textContent = Math.ceil(Math.random() *5);
   rightBox.textContent = Math.ceil(Math.random() *5);
    if(leftBox.textContent === middleBox.textContent && leftBox.textContent === rightBox.textContent){
        wallet.textContent = parseInt(wallet.textContent) + (5*10);
        return message.textContent = "groovy"
    }else{
        wallet.textContent = parseInt(wallet.textContent) - 5;
        return message.textContent = "bummer";
    }
}

function playerBetsFifty(){
    if(wallet.textContent === "0"){
        leftBox.textContent = "";
        middleBox.textContent = "";
        rightBox.textContent = "";
        return message.textContent = "later days"
    }

    leftBox.textContent = Math.ceil(Math.random() *5);
    middleBox.textContent = Math.ceil(Math.random() *5);
    rightBox.textContent = Math.ceil(Math.random() *5);
    if(leftBox.textContent === middleBox.textContent && leftBox.textContent === rightBox.textContent){
        wallet.textContent = parseInt(wallet.textContent) + (50*10);
        return message.textContent = "out of sight";
    }else{
        wallet.textContent = parseInt(wallet.textContent) - 50;
        return message.textContent = "hertz donut";
    }
}

//functions calls & event listeners
betFive.addEventListener("click", playerBetsFive);
betFifty.addEventListener("click", playerBetsFifty);



