// add a click even to each button
// add a function that adds values to each button 
// this grabs every element in the html that has a class of bet, it also makes an array from everything that comes back from it
let grabButtons = Array.from(document.querySelectorAll('.bet'))
let resetButton = document.querySelector('.resetButton').addEventListener('click', reset)
// let resetButton = document.querySelector('reset').addEventListener('click', reset)
let personWallet = 450;
const bustedMoney = 0;

// looping through the array that was made, and giving each element within the array an event listener
// evt- defined as a parameter, this is an event IE: 'click'
// target- what ever is clicked on,buttons are listening for the click 
// Event is whatever I attached it to 
for(let i = 0; i < grabButtons.length; i++ ) {
    grabButtons[i].addEventListener('click', betValue)
}

let images = ['images/bugs.jpg', 'images/daffy.webp', 'images/ElmerFudd.webp', 'images/Roadrunner.webp', 'images/taz.webp']

function betValue(evt) {
   //console.log(evt.target.dataset.bet)
    const isWalletNegative = personWallet - parseInt(evt.target.dataset.bet)
    if (isWalletNegative >= bustedMoney) {
        personWallet = isWalletNegative
         //https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
        let selectedImage = images[Math.floor(Math.random()*images.length)]
        let selectedImage2 = images[Math.floor(Math.random()*images.length)]
        let selectedImage3 = images[Math.floor(Math.random()*images.length)]
        document.querySelector('.slotImageOne').src = selectedImage
        document.querySelector('.slotImageTwo').src = selectedImage2
        document.querySelector('.slotImageThree').src = selectedImage3  
        
        if(selectedImage == images[0] && selectedImage2 == images[0] && selectedImage3 == images[0]  ) {
        personWallet += 1000
        console.log(personWallet)
        }    

        else if (selectedImage == images[1] && selectedImage2 == images[1] && selectedImage3 == images[1]  ) {
            personWallet += 500
            console.log(personWallet)
        }    
        
        
        else if (selectedImage == images[3] && selectedImage2 == images[3] && selectedImage3 == images[3]  ) {
            personWallet += 400
            console.log(personWallet)
        }
        else if (selectedImage == images[4] && selectedImage2 == images[4] && selectedImage3 == images[4]  ) {
            personWallet += 300
            console.log(personWallet)
        }
        
        else if (selectedImage == images[2] && selectedImage2 == images[2] && selectedImage3 == images[2]  ) {
            personWallet += 300
            console.log(personWallet)
        }
    }

    document.querySelector('.amount').innerHTML = personWallet
}

function reset() {
    if (personWallet <= 50) {
        personWallet += 450
    }
}

