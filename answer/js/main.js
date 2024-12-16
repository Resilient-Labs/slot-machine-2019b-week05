document.querySelector("#min").addEventListener('click', function() {bet(5)});
document.querySelector("#max").addEventListener("click",function() {bet(50)});

//hmm... my slot machine is very favorable to the user LOL | it has only a 5^3 chance of hitting a jackpot which is way too high


function bet (number) {
    let slot = []
    for (let i=0; i<3;i++) {
        let randomNumber=Math.ceil(Math.random()*5)
        console.log(randomNumber)
        let slotNumber="5";
            if(randomNumber<1){
                slotNumber="1";
            }
            else if(randomNumber<2){
                slotNumber="2";
            }
            else if(randomNumber<3){
                slotNumber="3";
            }
            else if(randomNumber<4){
                slotNumber="4";
            }
            slot[i] = slotNumber;
                // console.log(slotNumber)
                // console.log(slot)
        }
        let slotOne = slot[0]
        let slotTwo = slot[1]
        let slotThree = slot[2]
        document.querySelector(`#slotOne`).innerText = slotOne;
        document.querySelector(`#slotTwo`).innerText = slotTwo;
        document.querySelector(`#slotThree`).innerText = slotThree;
    
    let total = Number(document.querySelector("#total").innerText)
    // slotOne=slotTwo=slotThree
    // console.log(slotOne, slotTwo, slotThree)
    // console.log(slotOne===slotTwo)
    // console.log(typeof(slotOne), typeof(slotTwo), typeof(slotThree))
    // console.log(slotOne==slotTwo && slotTwo==slotThree)
    if (slotOne===slotTwo && slotTwo===slotThree) {
        // console.log(total+' 1before')
        total = Number(total)*10
        // console.log(number)
        // console.log(total+' 1after')
        document.querySelector('#total').innerText = total
    } else if ((slotOne===slotTwo && slotOne!=slotThree) || (slotOne===slotThree && slotOne!=slotTwo) || (slotTwo===slotThree && slotOne!=slotTwo)) {
        // console.log(`${total} 2before`)
        total += number
        // console.log(number)
        // console.log(`${total} 2after`)
        document.querySelector('#total').innerText = total
    } else {
        // console.log(total+' 3before')
        total -= number
        // console.log(number)
        // console.log(total+' 3after')
        document.querySelector('#total').innerText = total
    }
}