
// VARAIBLES
const amount = document.getElementById('amountUpdate');//span
const minBet = document.getElementById('min');//button
const maxBet = document.getElementById('max');//button
const reelOne = document.getElementById('reelOne');//section
const reelTwo = document.getElementById('reelTwo');//section
const reelThree = document.getElementById('reelThree');//section
const message = document.getElementById('message')//h1
 const betUpdate = document.getElementById('betUpdate')//span
/* FUNCTIONS
Generate 5 random numbers for three reels function I use the method Math.random() to give me a random number mutiplied by 5 then round them up using the method Math.ceil() to get 5 dif numbers between 1-5
*/
function generateRandNum(){
  return Math.ceil(Math.random() * 5) 
};
/*place a min bet of $10 function  if amount is less than or equal to 0 run this function to send the message 'Take Yo Broke Ass Home' to the value of the element with the id message & display this message then use the return statement to END the code */
function placeMinBet(){
  message.innerText = 'Slot Machine Game'
  betUpdate.innerText= '10'
  if(amount.innerText <= '0'){
    message.innerText = 'Take Yo Broke Ass Home' //
    return
  }/*I then access the innerText values of the elements reel 1 - reel 3 and assign them to CALL the function getRandNum to display the random #'s those functions create when inititated. you can refer to lines 14 & 15 were the function was DECLARED
  */

  /*I then created an if else statement with the arguments in the paramters comparing all the reels 1-3  innertext values & using the 3 equal signs to compare type as well
  if the innerText are equal you then use the parseInt() method to turn the string type into number types, then add 30 & change the innertext of the element stored in the variable message & display the string 'You Win' . IF NONE OF THIS APPLIES move onto the next statement (else) & subtract 10    */
  reelOne.innerText = generateRandNum();
  reelTwo.innerText = generateRandNum();
  reelThree.innerText = generateRandNum();
  if(reelOne.innerText === reelTwo.innerText && reelTwo.innerText === reelThree.innerText){
    amount.innerText = parseInt(amount.innerText) + 30
    message.innerText = 'You Win'
  }else{
    amount.innerText = parseInt(amount.innerText) - 10
  }
};

function placeMaxBet(){
  message.innerText = 'Slot Machine Game'
  betUpdate.innerText= '50'
  if (parseInt(amount.innerText) <=50){
    message.innerText = 'Take yo Broke Ass home'
    return 
  }
  reelOne.innerText = generateRandNum()
  reelTwo.innerText = generateRandNum()
  reelThree.innerText = generateRandNum()
  if(reelOne.innerText === reelTwo.innerText && reelTwo.innerText === reelThree.innerText){
    amount.innerText = parseInt(amount.innerText) + 150
    message.innerText = 'JACKPOT'
  }else{  
    amount.innerText = parseInt(amount.innerText) - 50
  }
}

maxBet.addEventListener('click', placeMaxBet)
minBet.addEventListener('click' , placeMinBet);
