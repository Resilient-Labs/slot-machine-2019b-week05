// 3 sections  each sections has 5 items 
// two buttons min and max bet
// MIN bet LOSES = total amount - min bet (5) ; WIN = total amount + 50  
// MAX bet LOSES = total amount - min bet (5) ; WIN = total amount + 50


// worked with a small group in community with mentor / then went to Vonds meeting

// Main Variables 
const amount = document.getElementById('amount')
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')

const btn5 = document.getElementById('min')
const btn50 = document.getElementById('max')


// smurfs - click on these and x function will be invoked
btn5.addEventListener('click', bet5Dollars)

btn50.addEventListener('click', bet50Dollars)

// get a ranodom number between 1-5; we need a seperate function then we move to the below functions where we invoke the getRandomNum function.
function getRandomNum(){
    return Math.ceil(Math.random() * 5)


}

// bet5dollars function when btn is pressed the following occurs:
function bet5Dollars(){
    box1.innerText = getRandomNum()
    box2.innerText = getRandomNum()
    box3.innerText = getRandomNum()
    // each box is assigned a random number 

    if(amount.innerText <= '0'){
        message.innerText = "Error: You can no longer bet. Your amount is $0. Please start a new game!"
        return
        // end here and return the above message ^ conditional to stop user from betting once they hit 0 dollars
    }

    if(box1.innerText === box2.innerText && box1.innerText === box3.innerText){
        const currentMoney = parseInt(amount.innerText) + 50
        amount.innerText = currentMoney
        message.innerText = "You won $50.00!"
        console.log('Winner')
        // if all boxes equal same number user wins 50 

    } else {
        const currentMoney = parseInt(amount.innerText) - 5 
        amount.innerText = currentMoney
        message.innerText = "You lost $5.00!"
        console.log('Loser')
    }
     // if all boxes do not equal same number user loses 5 

}

// bet50dollars function when btn is pressed the following occurs. I see now how functions are helpful for reusable code for the slot machine:
function bet50Dollars(){
    box1.innerText = getRandomNum()
    box2.innerText = getRandomNum()
    box3.innerText = getRandomNum()
    // each box is assigned a random number 

    if(amount.innerText <= '0'){
        message.innerText = "Error: You can no longer bet. Your amount is $0. Please start a new game!"
        return
        // end here and return the above message ^ conditional to stop user from betting once they hit 0 dollars. If we didn't have this we'd go into the negatives. This will be needed for the to-do list as well! 
    }

    if(box1.innerText === box2.innerText && box1.innerText === box3.innerText){
        const currentMoney = parseInt(amount.innerText) + 50
        amount.innerText = currentMoney
        message.innerText = "You won $50.00!"
        console.log('Winner')
        // if all boxes equal the same number user wins 50 and the amount increases 
        // const currentMoney is created so that we are able to add 50 to the amount alredy in our h2
        // innerText returns all text contained by an element and all its child elements only

    } else {
        const currentMoney = parseInt(amount.innerText) - 5 
        amount.innerText = currentMoney
        message.innerText = "You lost $5.00!"
        console.log('Loser')
    }

     // if all boxes do not equal the same number user loses 5
    //  const currentMoney is used to subtract 5 from the amount already in the h2

}

